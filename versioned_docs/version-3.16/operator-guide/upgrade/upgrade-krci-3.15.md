---
title: "Upgrade KubeRocketCI v3.14 to 3.15"
description: "Guide on upgrading KubeRocketCI to version 3.15. Covers Tekton pipeline security-hardening defaults, mandatory SSH host key verification, mandatory TLS certificate verification for integration secret connections, krci-portal persistence and non-root security defaults, the edp-headlamp chart removal, and post-upgrade verification."
sidebar_label: "v3.14 to 3.15"
---
<!-- markdownlint-disable MD025 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Upgrade KubeRocketCI v3.14 to 3.15

<head>
  <link rel="canonical" href="https://docs.kuberocketci.io/docs/operator-guide/upgrade/upgrade-krci-3.15" />
</head>

This section provides detailed instructions for upgrading KubeRocketCI to version 3.15. Follow the steps and requirements outlined below:

:::important
Back up the KubeRocketCI environment before starting the upgrade procedure. In particular, back up the **edp-codebase-operator** `known_hosts` configuration and any GitServer SSH secrets, and the **krci-portal** SQLite database path, before proceeding — several 3.15 changes below touch SSH connectivity and portal storage.
:::

:::note
**3.15 carries forward all 3.13/3.14 platform dependencies** — cert-manager for the operator admission webhooks, GitFusion, Tekton Results, and Tekton Pipelines with the `tekton.dev/v1` API — unchanged. No forced resource migrations are required for this upgrade.
:::

## Step 1. (Required) Verify Prerequisites

Confirm the platform is currently on a **3.14.x** release before upgrading. The `CHART` column shows the installed `edp-install` version:

```bash title="Check the installed chart version"
helm list -n <namespace>
```

## Step 2. (Required) Review Tekton Pipeline Security-Hardening Defaults (edp-tekton)

This is the headline breaking change in 3.15: the `edp-tekton` pipelines-library chart (`0.27.0`) changes several security-relevant defaults. Review each item before, or immediately after, upgrading.

### a. PipelineRun ServiceAccount

Review pipelines now default to the unprivileged `tekton-unprivileged` ServiceAccount instead of `tekton` (chart value `tekton.defaultServiceAccount`, now defaulting to `tekton-unprivileged`). Every platform-shipped build pipeline already carries the `app.edp.epam.com/service-account: tekton` annotation and keeps its current permissions; a Pipeline resolves its ServiceAccount from that annotation if present, and falls back to `tekton.defaultServiceAccount` otherwise.

**Action is required only for custom pipelines** referenced from `CodebaseBranch.spec.pipelines` whose tasks call the Kubernetes API (`kubectl`, `tkn`, client libraries). After the upgrade such pipelines run under `tekton-unprivileged`, which has no role bindings and no mounted API token, so those calls fail. Choose one of:

:::important
Annotating a custom pipeline with `tekton` does **not** restore its pre-3.15 permissions: the `tekton` ServiceAccount's own Role was narrowed in this release (it loses `configmaps`, `cdpipelines`, `stages`, `applicationsets`, and `taskruns` access), and a dedicated ServiceAccount needs more than RBAC — the old `tekton` account also carried the IRSA role annotation, the `kaniko-docker-config` secret link, and `imagePullSecrets`, without which registry pushes fail. For the full custom-pipeline migration checklist, including how to sequence the cutover so nothing breaks before the upgrade, see [Align Custom Tekton Pipelines with 3.15](./migrate-custom-tekton-pipelines-3.15.md).
:::

- **Per pipeline (recommended):** define a ServiceAccount scoped to what the pipeline actually needs and annotate the Pipeline:

    ```yaml title="Custom pipeline with a dedicated ServiceAccount"
    apiVersion: tekton.dev/v1
    kind: Pipeline
    metadata:
      name: my-app-review
      annotations:
        app.edp.epam.com/service-account: my-team-sa
    ```

- **Install-wide fallback:** put every non-annotated build and review pipeline back on `tekton` and migrate gradually. This does not restore pre-3.15 permissions — as noted above, the `tekton` Role itself was narrowed — and it does not affect deploy, clean, security-scan or autotest runs, whose ServiceAccount is pinned in their trigger templates. Nest under `edp-tekton:` when editing edp-install's umbrella `values.yaml` (the Helm dependency alias for this chart is `edp-tekton`, not `pipelines-library`):

    ```yaml title="edp-install umbrella values.yaml"
    edp-tekton:
      tekton:
        defaultServiceAccount: tekton
    ```

    Or, if editing `charts/pipelines-library/values.yaml` directly, use the bare key:

    ```yaml title="pipelines-library values.yaml"
    tekton:
      defaultServiceAccount: tekton
    ```

### b. GitHub review pipeline triggers

By default, only pull requests and `/recheck` / `/ok-to-test` comments from authors with GitHub `author_association` `OWNER`, `MEMBER`, or `COLLABORATOR` now trigger review pipelines (`githubAcl.enabled: true`, `githubAcl.allowedAssociations` default `[OWNER, MEMBER, COLLABORATOR]`). External contributors' pull requests no longer auto-trigger a review pipeline unless `allowedAssociations` is widened. The legacy `githubOwners` filter is deprecated and now disabled by default (`githubOwners.enabled: false`).

```yaml title="edp-install umbrella values.yaml"
edp-tekton:
  githubAcl:
    enabled: true
    allowedAssociations:
      - OWNER
      - MEMBER
      - COLLABORATOR
      - CONTRIBUTOR   # widen to also trigger for external contributors
```

### c. PR log publishing

`reporter.logsReporting` now defaults to `false`, so the reporter no longer republishes trailing log lines of failed steps in pull or merge request comments — the status comment itself (per-task table) is unaffected. Log publishing was switched to opt-in because it now republishes step output **verbatim** (only the reporter's own git provider token is masked; the previous best-effort secret masking and its `pods/log` read access were removed together).

```yaml title="edp-install umbrella values.yaml"
edp-tekton:
  reporter:
    # Restore the previous behavior: publish trailing logs of failed steps
    logsReporting: true
```

With `logsReporting` enabled, log publishing can still be switched off selectively with the `app.edp.epam.com/reporter-logs: "false"` annotation — on a **GitServer** (applies to every pull request reported through that git server; declarable via `gitServers.<name>.annotations` in values) or on a single **PipelineRun** (takes precedence over the GitServer annotation). When the global `logsReporting` flag is disabled, annotations are ignored entirely — they can narrow an enabled default, never widen a disabled one.

### d. Tekton pruner removed

The chart-managed pruner CronJob (`tekton.pruner`) is deleted from the `edp-tekton` chart in favor of Tekton Results. Remove any `edp-tekton.tekton.pruner.create` override from your `edp-install` umbrella values — it is now a no-op.

### e. SonarQube main branch

Newly created SonarQube projects no longer inherit `Codebase.spec.defaultBranch` as the SonarQube main branch; SonarQube's own instance-level default branch name is used instead. Existing projects are unaffected. No configuration change is required; this only affects codebases onboarded after the upgrade.

## Step 3. (Required) Pin SSH Host Keys for Self-Hosted GitServers (edp-codebase-operator)

`edp-codebase-operator` `2.35.0` now verifies the SSH host key on every SSH connection it makes — repository clone, fetch and push, the GitServer connectivity check, and Gerrit access. **Verification cannot be disabled.** GitServers using HTTPS with a token are unaffected; only GitServers whose credentials secret (named by `spec.nameSshKeySecret`) contains a non-empty `id_rsa` key are affected.

The chart ships a ConfigMap pre-seeded with host keys for `github.com`, `gitlab.com`, and `bitbucket.org` (`knownHosts.includeDefaultProviders`, default `true`), so SSH GitServers on those providers need no action.

:::important
This includes the platform's own bundled Gerrit `GitServer` (`spec.gitProvider: gerrit`), which is SSH-based by convention (for example `nameSshKeySecret: gerrit-ciuser-sshkey`) and whose host is never `github.com`, `gitlab.com`, or `bitbucket.org`. It always falls into the self-hosted, must-be-pinned bucket below — pin its host key using its own `spec.gitHost`/`spec.sshPort` the same way as any other self-hosted server. `edp-gerrit-operator` `2.25.0` adds an opt-in, off-by-default `gerrit.sshHostKeys` feature that pins the Gerrit-side host keys themselves, so pinned fingerprints stay stable across restarts — see [Step 9](#step-9-recommended-edp-gerrit-operator-2250-gerrit-image-bump-acl-cache-flush-fix-and-optional-ssh-host-key-pinning) for the accompanying `edp-gerrit-operator` version bump.
:::

Before upgrading, identify self-hosted GitServers using SSH:

```bash title="List SSH GitServers and their credentials secret"
kubectl get gitservers -o json | jq -r '.items[] | select(.spec.gitProvider) |
  "\(.metadata.name) \(.spec.gitHost):\(.spec.sshPort) secret=\(.spec.nameSshKeySecret)"'
```

For each GitServer whose secret contains an `id_rsa` key and whose host is **not** `github.com`, `gitlab.com`, or `bitbucket.org`, collect its key(s), verify the fingerprint out-of-band, and add the resulting lines to `knownHosts.entries`:

```bash title="Collect and verify the host key"
ssh-keyscan -t rsa,ecdsa,ed25519 -p <port> <host>
ssh-keyscan -t rsa,ecdsa,ed25519 -p <port> <host> | ssh-keygen -lf -   # verify the fingerprint out-of-band
```

```yaml title="edp-codebase-operator chart values"
knownHosts:
  includeDefaultProviders: true
  entries: |
    [git.example.com]:2222 ssh-ed25519 AAAA...
    [git.example.com]:2222 ssh-rsa AAAA...
```

For the `github`, `gitlab`, and `bitbucket` providers, clone/fetch/push always connect on port 22 regardless of `spec.sshPort`, while the GitServer connectivity check and Gerrit access use `spec.sshPort`. **If a self-hosted server's `sshPort` is not 22, pin both forms** — the bracketed `[host]:port` entry and the plain `host` (port-22) entry — or the GitServer can report healthy while repository operations fail (or the reverse):

```bash title="Scan both ports separately"
ssh-keyscan -t rsa,ecdsa,ed25519 -p 2222 git.example.com   # [git.example.com]:2222 ...
ssh-keyscan -t rsa,ecdsa,ed25519 git.example.com            # git.example.com ...
```

An unpinned self-hosted GitServer reports `connected: false` and a host-key error in its status until its entry is added; no data is lost, and the operator recovers on the next reconcile once the entry is present.

## Step 4. (Required if applicable) Verify TLS Trust for Integration Secret Connections (edp-codebase-operator)

`edp-codebase-operator` `2.35.0` also hardens its integration secret connectivity checks (SonarQube, Nexus, Dependency-Track, DefectDojo, container registry, Argo CD): these checks previously accepted any certificate (`InsecureSkipVerify: true`) while re-sending live integration credentials on every heartbeat. They now verify the endpoint's certificate against the system trust store. **Verification cannot be disabled.**

:::important
**Breaking change.** Any integration whose HTTPS endpoint presents a self-signed or private-CA certificate will start reporting `connected: false` with an x509 verification error after the upgrade. Nothing else is blocked — credentials are simply no longer re-sent to an unverified endpoint — but automation that gates on `connected: true` will start failing until the CA is trusted.
:::

Before upgrading, identify integrations behind self-signed or private-CA certificates and mount their CA into the operator via the new `caCerts` values:

```bash title="Create a secret with your CA certificate(s)"
kubectl -n <namespace> create secret generic custom-ca-certificates \
  --from-file=ca.crt=my-root-ca.pem
```

```yaml title="edp-codebase-operator chart values"
caCerts:
  # -- Mount additional CA certificates from an existing secret, e.g. for
  # integrations behind a self-signed or private CA.
  enabled: true
  # -- Name of an existing secret with CA certificates. Each key must hold a
  # PEM-encoded certificate (a key may also hold a bundle of concatenated
  # certificates); key names are arbitrary.
  secret: custom-ca-certificates
```

Enabling `caCerts.enabled` mounts the secret into the operator pod at `/etc/ssl/custom-certs` and sets `SSL_CERT_DIR=/etc/ssl/certs:/etc/ssl/custom-certs`, trusting the mounted CAs in addition to the system bundle.

:::note
Go loads trust roots once at process startup, so updating a certificate inside the secret requires restarting the `codebase-operator` pod to take effect.
:::

## Step 5. (Recommended) Review krci-portal Persistence and Non-Root Security Defaults

`krci-portal` `0.8.0` adds an optional PersistentVolumeClaim (`persistence.enabled`, default `false`; `persistence.size` default `1Gi`; `persistence.storageClass`; `persistence.existingClaim`; `persistence.accessModes` default `[ReadWriteOnce]`; `persistence.annotations`) so the SQLite session/events database at `/app/db` survives pod restarts. Persistence itself is opt-in and requires no action to keep prior behavior.

Separately — and **unconditionally**, regardless of whether persistence is enabled — the chart's pod and container security contexts now default to non-root execution, replacing the previous empty `{}` defaults:

```yaml title="krci-portal chart defaults (unconditional)"
podSecurityContext:
  runAsNonRoot: true
  runAsUser: 1000
  runAsGroup: 1000
  fsGroup: 1000
  seccompProfile:
    type: RuntimeDefault

securityContext:
  allowPrivilegeEscalation: false
  capabilities:
    drop:
      - ALL
```

If your cluster enforces a Pod Security Admission profile or, notably, an OpenShift SCC that assigns namespace-scoped UID ranges instead of allowing a pinned UID `1000`, review and override `podSecurityContext`/`securityContext` for `krci-portal` before upgrading, since the pod may fail to schedule otherwise.

If you enable persistence: the PVC is `ReadWriteOnce` and the Deployment switches to the `Recreate` strategy, so expect a brief downtime window per deploy. There is no retention policy — the PVC is removed on `helm uninstall`.

## Step 6. (Required if applicable) Remove edp-headlamp Chart Overrides

The `edp-headlamp` Helm sub-chart, all `edp-headlamp.*` values, and the `keycloak-client-headlamp-secret` ExternalSecret template have been **removed** from `edp-install` in 3.15. `edp-headlamp.enabled` has defaulted to `false` since 3.13, and migrating to `krci-portal` was already documented as **Required** in [Upgrade v3.12 to 3.13](./upgrade-krci-3.13.md) Step 6 and downgraded to **Informational** in [Upgrade v3.13 to 3.14](./upgrade-krci-3.14.md) Step 10 — so most installs already completed this migration and need no action. An unknown `edp-headlamp:` key, if still present in a values file, is now simply ignored by Helm.

If you never completed the 3.13 migration (i.e. `edp-headlamp.enabled: true`):

1. Remove the `edp-headlamp:` block from your values file.
2. Migrate its OIDC configuration to `krci-portal.configEnv.OIDC_ISSUER_URL` / `krci-portal.configEnv.OIDC_CLIENT_ID`.
3. Move any custom-CA `extraVolumes`/`extraVolumeMounts` to `krci-portal.volumes`/`krci-portal.volumeMounts`.
4. Create the equivalent OIDC client secret for `krci-portal` manually, since `keycloak-client-headlamp-secret` is no longer created by the chart.

See [Upgrade v3.12 to 3.13](./upgrade-krci-3.13.md) Step 6 and [Upgrade v3.13 to 3.14](./upgrade-krci-3.14.md) Step 10 for the original migration guidance.

## Step 7. (Required if applicable) Remove Legacy Tekton Grafana/Prometheus Integration

The `edp-tekton` pipelines-library chart no longer ships the `tekton-overview` ServiceMonitor or its bundled Grafana dashboard, and the `edp-tekton.grafana.enabled` passthrough value (and its sub-keys `grafana.dashboards.labelKey`/`labelValue`, `grafana.serviceMonitor.prometheusReleaseLabels.release`) was removed from `edp-install`'s umbrella `values.yaml`.

If `edp-tekton.grafana.enabled` was never set to `true` (the long-standing default), this key never rendered anything and there is nothing to clean up beyond deleting the now-inert override if present.

If you had `edp-tekton.grafana.enabled: true`:

1. Remove the `edp-tekton.grafana.*` block from your values — it has no effect after upgrading.
2. Delete the legacy `tekton-overview` ServiceMonitor by hand if it was hand-applied:

    ```bash
    kubectl delete servicemonitor tekton-overview -n tekton-pipelines
    ```

3. Remove any manually imported legacy Tekton Grafana dashboard to avoid duplicates.
4. Migrate to the `tekton-monitoring` cluster add-on for equivalent and expanded monitoring coverage:

    ```yaml title="clusters/core/apps/values.yaml"
    tekton-monitoring:
      createNamespace: false
      enable: true
      namespace: tekton-pipelines
    ```

See [Tekton Pipeline Monitoring with Prometheus and Grafana](../ci/tekton-monitoring.md) for full migration steps. Running the legacy ServiceMonitor alongside `tekton-monitoring` double-scrapes the same Service and roughly doubles `sum()`-based dashboard panels.

## Step 8. (Recommended) Move edp-tekton Image Overrides to the Root `image` Block

The pipelines-library chart no longer reads `interceptor.image.repository`/`tag` or `reporter.image.repository`/`tag`; both the `tekton-interceptor` and `tekton-reporter` Deployments now resolve their image from a single chart-wide root block (`image.repository` default `epamedp/edp-tekton`, `image.pullPolicy` default `IfNotPresent`, `image.tag` default `""`, `image.digest` default `""`).

If your Argo CD Application or values override sets `interceptor.image.*` or `reporter.image.*` by hand, replace them with the root-level equivalents:

```yaml title="edp-install umbrella values.yaml"
edp-tekton:
  image:
    repository: epamedp/edp-tekton
    tag: "0.27.0"
```

:::important
This change also switches the default image registry for **both** components. Previously the interceptor's repository came only from its own hardcoded default (Docker Hub `epamedp/edp-tekton`) and never honored a root `image.repository` override; now it does, so if your deploy flow injects a non-default root `image.repository` (for example, an internal registry mirror), the interceptor's pull source silently switches registries too, not just the reporter's tag. Verify that registry actually mirrors the `edp-tekton` image and has pull credentials configured before upgrading.
:::

Any leftover `interceptor.image.tag`/`reporter.image.tag` parameters on existing Applications are now unused and can be removed.

## Step 9. (Recommended) edp-gerrit-operator 2.25.0: Gerrit Image Bump, ACL Cache-Flush Fix, and Optional SSH Host Key Pinning

If your platform uses the bundled Gerrit git server (`gerrit-operator.enabled: true`), `edp-install` 3.15.0 pins `edp-gerrit-operator` to `2.25.0`, up from `2.24.0` in 3.14.1. This is what changed:

**Default Gerrit image bumped `3.6.2-oauth` → `3.14.2`** (`gerrit.version`). This is a large default-version jump (multi-arch image, Java 21). Back up the Gerrit data PVC (named `gerrit-data` by default, i.e. `<gerrit.name>-data`) before upgrading an existing instance, and expect a longer first boot after the upgrade while the site reindexes against the new Gerrit version. If you pin `gerrit.version` explicitly in your own values, this bump does not apply to you.

```yaml title="edp-gerrit-operator chart values (default, informational)"
gerrit:
  version: "3.14.2"   # was "3.6.2-oauth"
```

**Fresh-bootstrap push-permission race fixed.** Previously, the operator pushed the All-Projects ACL straight into the bare repository on the pod filesystem without flushing Gerrit's in-memory caches, so the running daemon kept serving the ACL it loaded at start-up until its project cache happened to re-read `refs/meta/config`. Any codebase provisioned in that window had no push permission on `refs/*`, and branch creation was rejected with `Unable to resolve object ... or get update permission to create new commit objects`; codebases that exhausted their reconcile retries inside the window never recovered. `2.25.0` flushes Gerrit's caches (`gerrit flush-caches --all`) immediately after installing the ACL, so this no longer happens. No action required — this only affects fresh bootstraps going forward.

**`plugin-manager` plugin no longer installed.** Its registry preloader unconditionally fetched the GerritForge CI plugin list on every start, and the stable-3.14 response is unparseable, producing a stacktrace on each boot. KRCI ships plugins in the image, so the UI installer was unused. No action required.

**Faster readiness detection.** A startup probe now absorbs first-boot site init/reindex instead of a fixed 60-second initial delay, and the not-ready reconcile requeue interval drops from 30s to 10s; a fresh install now reaches `Ready` in roughly 70 seconds instead of 4-5 minutes. No action required.

**Silent status-reversion bug fixed in `GerritMergeRequest`.** The reconciler's finalizer-bookkeeping update round-tripped server state back into the in-memory object and discarded the freshly computed change status before it was persisted, so a `GerritMergeRequest`'s reported status could silently revert to a stale value. No action required; status reporting is simply now reliable.

**New optional feature: pinned SSH host keys.** `gerrit.sshHostKeys.enabled` (default `false`) can install a pre-created Secret of SSH host keys (default secret name `gerrit-ssh-host-keys`) so Gerrit serves stable fingerprints across restarts/reinstalls, for pinning in `knownHosts.entries` per [Step 3](#step-3-required-pin-ssh-host-keys-for-self-hosted-gitservers-edp-codebase-operator) instead of running `ssh-keyscan` against a live pod. Off by default, and disabled installs render byte-identical manifests — this is a test-environment convenience, not a production recommendation, since whoever holds the Secret can impersonate the Gerrit instance. No action required unless you choose to adopt it; see the `edp-gerrit-operator` repository's `scripts/generate-ssh-host-keys.sh` if you do.

```yaml title="edp-gerrit-operator chart values (new, opt-in)"
gerrit:
  sshHostKeys:
    enabled: false
    secret: gerrit-ssh-host-keys
```

**Dead Keycloak integration code removed from the operator.** SSO for Gerrit is configured via the Helm chart (the `KeycloakClient` resource and `OAUTH_*` env values), not the in-operator reconciler, so this is a no-op for any existing installation; the deprecated `keycloakSpec` field is kept on the `Gerrit` CRD for backward compatibility. No action required.

## Step 10. (Optional) New Opt-In Tekton Pipeline Features: Argo CD Diff Preview and Reporter Recreate Strategy

Two new opt-in, off-by-default `edp-tekton` pipelines-library features.

### a. Argo CD diff preview (ALPHA, GitLab-only)

Posts and keeps updated a single Merge Request comment showing the rendered Argo CD manifest diff between the MR and its target branch, for GitOps repository review pipelines. Enabling requires **two** flags together:

```yaml title="edp-install umbrella values.yaml"
edp-tekton:
  pipelines:
    argocdDiffPreview:
      enabled: true
      namespace: argocd-diff-preview
      kubeconfigSecret: vc-argocd-diff-preview
      innerArgocdNamespace: argocd
      toolImage: dagandersen/argocd-diff-preview:v0.2.11
      utilImage: alpine/k8s:1.33.4
      commentImage: python:3.12-alpine
      renderTimeoutSeconds: "300"
```

...and enabling the `argocd-diff-preview` add-on in the `edp-cluster-add-ons` App-of-Apps values with `createNamespace: false`, since the pipelines-library chart owns that namespace. If the add-on is absent or unhealthy, the step skips silently and the pipeline stays green — it never blocks delivery.

### b. Reporter comment strategy `recreate`

The existing `reporter.commentStrategy` value (default remains `update`, unchanged) gains a third option, `recreate`, which posts a fresh report comment at the bottom of the PR/MR thread on every run and deletes every earlier report comment carrying the hidden marker, so exactly one report stays visible next to the latest activity:

```yaml title="edp-install umbrella values.yaml"
edp-tekton:
  reporter:
    commentStrategy: recreate
```

If the post succeeds but the stale-comment cleanup sweep fails, the run is still marked reported and leftovers are swept on the next `recreate` pass.

As an informational note, failed-task rows in the reporter's status table now render in bold markdown to stand out from passing rows — no configuration change.

## Step 11. (Recommended) Portal HTTPRoute Hostname Correction

`krci-portal.httproute.enabled` stays `false` by default, so most environments need no action. If you already opted into the portal's Gateway API HTTPRoute (`krci-portal.httproute.enabled: true`) with the `edpDefault` hostname sentinel, the rendered HTTPRoute hostname changes on upgrade from the old (defective) `portal-<namespace>.<dnsWildcard>` to `krci-portal-<namespace>.<dnsWildcard>`, now correctly matching the same host the chart's own Ingress resource renders.

After upgrading, update any external DNS records, load balancer host rules, or bookmarks pointing at the old `portal-<namespace>.<dnsWildcard>` host to the new `krci-portal-<namespace>.<dnsWildcard>` host. The chart's nginx Ingress is untouched and remains the instant per-host rollback path — set `httproute.enabled: false` to revert.

## Step 12. (Required if applicable) Regenerate Stale README for Helm-Chart Codebases Scaffolded Under Envoy Gateway

`codebase-operator` `2.34.0` (pinned by `edp-install` 3.14.1) shipped a bug in the hand-authored README template used to scaffold a new application's `deploy-templates/README.md` when the platform is configured with `INGRESS_CONTROLLER_TYPE=envoy`: the scaffolded README's `httproute.*`/`ingress.*` rows did not match what `helm-docs` actually generates, so every newly created helm-chart Codebase on an Envoy Gateway platform failed its very first build pipeline at the `helm-docs` diff-check step.

This is fixed in `codebase-operator` `2.35.0` (`edp-install` 3.15.0) for newly scaffolded repositories, but upgrading does **not** retroactively repair already-scaffolded repos. If you run `INGRESS_CONTROLLER_TYPE=envoy` and created any helm-chart Codebase before upgrading to 3.15, run `helm-docs` once against that repository's `deploy-templates` chart and commit the regenerated `README.md` to unblock its build pipeline.

## Step 13. (Informational) Jira Automation Removed from Build Pipelines

As of `edp-tekton` release/0.27, build-type Tekton pipelines (`github`/`gitlab`/`bitbucket`/`gerrit` `*-build-*`) no longer run the `push-to-jira` finally task and no longer create `JiraIssueMetadata` custom resources. If you previously relied on the Jira Usage flow (automatic population of Fix Versions, Components, and Labels on Jira tickets from build results, described in the [Jira Integration](../project-management-and-reporting/jira-integration.md) operator guide), that automation stops working after this upgrade — no action is required to avoid breakage, but the feature is gone.

The `JiraServer` CR, the "Integrate with Jira server" codebase setting, and the underlying `Codebase.spec.jiraServer`/`ticketNamePattern`/`jiraIssueMetadataPayload` fields are unchanged; only the build-pipeline automation that consumed them was removed.

Build pipelines also stop declaring/passing the now-dead `gitsha` param, and VCS status reporting on build pipelines switched from a guarded set-success/set-failure task pair to a single unguarded finally task. For the platform-shipped pipelines these are internal changes with no action needed — but **custom build pipelines mirroring the 0.26 shipped ones must be updated**: a required `gitsha` (or `TICKET_NAME_PATTERN`/`JIRA_*`) parameter with no default fails every run at admission once the trigger templates stop passing it, and `push-to-jira` task references no longer resolve. See [Align Custom Tekton Pipelines with 3.15](./migrate-custom-tekton-pipelines-3.15.md).

## Step 14. (Informational) codebase-operator Provisioning Retries No Longer Silently Overwrite Pushed History

`edp-codebase-operator` `2.35.0` fixes a silent data-loss bug in codebase (application/library/autotest) provisioning with the **Create** strategy. Previously, if a reconcile re-entered project provisioning after an interruption (operator restart, or a transient failure between the initial push and the final status update), it regenerated the initial commit history from scratch and force-pushed it, silently destroying any commits already present on the remote default branch — go-git cannot detect the fast-forward violation against unrelated history, and admin credentials bypass server-side branch protection.

As of `2.35.0`, provisioning is idempotent:

- Before pushing, the operator probes whether the remote default branch already exists.
- If a previous, interrupted push already landed on the remote, the operator adopts it instead of regenerating and re-pushing history.
- If the remote default branch exists but was **not** created by this provisioning attempt, the operator now **refuses to push** and fails the codebase with an explicit error instead of silently overwriting the branch:

    ```text
    remote repository already contains default branch <branch> with history not pushed by this
    provisioning; refusing to overwrite it - remove the remote branch or onboard the repository
    with the import strategy
    ```

No values.yaml keys changed and no manual upgrade action is required. If, after upgrading, a codebase using the **Create** strategy fails with the message above, this indicates the target repository already has content on its default branch; either remove/rename the remote branch before retrying, or re-create the codebase using the **Import**/**Clone** strategy instead of **Create**.

## Step 15. (Informational) Clone-Strategy Onboarding Reliability Fix (edp-codebase-operator)

`edp-codebase-operator` `2.35.0` also fixes a reliability bug in the **Clone** codebase strategy's onboarding checkout (also hit by the implicit case where `branchToCopyInDefaultBranch` names a branch that is not the source repository's HEAD). Previously, a branch pushed to the source repository in the window between the initial clone and the checkout step could be mis-detected as already existing — the post-fetch check looked in the remote-tracking namespace (`refs/remotes/origin/*`) that the fetch's refspec never wrote to, so it only ever passed by accident, courtesy of refs left behind by the preceding clone. This caused the reconcile to fail with `a branch named <name> already exists`; a retry usually succeeded, since the failed workdir is wiped and re-cloned, which masked the defect again. Separately, checking out a branch whose upstream had been rebased or force-pushed could fail outright, since the fetch had no force flag.

Both are fixed in `2.35.0` by checking the namespace the fetch actually writes to (`refs/heads/<branch>`) and forcing the fetch, matching the already-forced sibling code path used by the import strategy. No configuration change accompanies this fix — no action is required.

## Step 16. (Informational) New Portal Capabilities and Safeguards

Several smaller, no-action-required improvements land in 3.15.

- **Accurate queued-pipeline VCS status:** GitLab start tasks always post `running` (never `pending`); review/build PipelineRuns get a reserved `finally` time budget via new `pipelines.timeouts.pipeline` (default `1h10m0s`) and `pipelines.timeouts.finally` (default `10m0s`) values, reproducing prior effective behavior. The portal's **Stop** button now cancels PipelineRuns gracefully (`CancelledRunFinally`, plus a new `app.edp.epam.com/queue-cancel-reason` annotation with values `user-cancelled`/`superseded`) so `finally` tasks still run and report status. The portal PipelineRun list no longer shows a not-yet-finalized archived (Tekton Results) run as perpetually "Running".
- **Portal validation and hardening:** the create-codebase wizard now flags a duplicate project name or an already-onboarded Git repository path inline while typing; the Integration Configuration page hides/disables non-HTTPS QuickLink URLs and the Test Connection action returns a generic error instead of leaking host/errno details.
- **Portal bug fix:** PipelineRun details no longer wrongly attribute a still-starting task's steps to a sibling task with a matching name prefix (for example, `sonar` vs `sonar-integration-test`) — task-to-TaskRun matching now uses Tekton's own `status.childReferences`.
- **Codebase deletion safeguard:** `edp-codebase-operator` now rejects deletion of a Codebase at admission when it is still referenced by a CDPipeline (`spec.applications`, `spec.applicationsToPromote`, `spec.inputDockerStreams`) or a Stage quality gate's `autotestName`, for every client (kubectl, GitOps, Portal). Remove the codebase from its CDPipeline(s)/Stage quality gates first, or deletion returns a `403` naming the referencing resource.
- **Review pipeline reporter cosmetics:** the PR report's pass/fail table and header now use monochrome checkmark/x marks with text labels instead of emoji, and a re-run hint (`Pushing new commits re-runs this pipeline automatically... comment /recheck`) is appended under the task table. A permanently-skipped report (for example, Gerrit with no reporter provider) is now logged at info level instead of error.

## Step 17. (Informational) Breaking Changes and Deprecations

- `edp-tekton`'s least-privilege ServiceAccount/RBAC and GitHub trigger-ACL defaults change what custom pipelines and external contributors can do — see [Step 2](#step-2-required-review-tekton-pipeline-security-hardening-defaults-edp-tekton) and [Align Custom Tekton Pipelines with 3.15](./migrate-custom-tekton-pipelines-3.15.md).
- SSH host key verification in `edp-codebase-operator` is now mandatory and cannot be disabled — see [Step 3](#step-3-required-pin-ssh-host-keys-for-self-hosted-gitservers-edp-codebase-operator).
- TLS certificate verification for `edp-codebase-operator`'s integration secret connection checks is now mandatory and cannot be disabled — integrations behind a self-signed or private-CA certificate report `connected: false` until their CA is mounted via `caCerts` — see [Step 4](#step-4-required-if-applicable-verify-tls-trust-for-integration-secret-connections-edp-codebase-operator).
- `krci-portal`'s pod and container security contexts now default to non-root, unconditionally — see [Step 5](#step-5-recommended-review-krci-portal-persistence-and-non-root-security-defaults).
- The `edp-headlamp` sub-chart is removed from `edp-install` — required only if still in use — see [Step 6](#step-6-required-if-applicable-remove-edp-headlamp-chart-overrides).
- The legacy Tekton Grafana/Prometheus integration is removed — required only if still in use — see [Step 7](#step-7-required-if-applicable-remove-legacy-tekton-grafanaprometheus-integration).
- The `edp-tekton` image-resolution change can silently switch the interceptor's container registry — see [Step 8](#step-8-recommended-move-edp-tekton-image-overrides-to-the-root-image-block).

## Step 18. Upgrade

<Tabs
  defaultValue="addons"
  values={[
    {label: 'edp-cluster-add-ons (recommended)', value: 'addons'},
    {label: 'Helm', value: 'helm'}
  ]}>

  <TabItem value="addons">

  The recommended approach is to manage the upgrade through [edp-cluster-add-ons](https://github.com/epam/edp-cluster-add-ons) via ArgoCD. Update the chart version and values in your add-ons repository, then let ArgoCD apply the changes.

  **1.** In your `edp-cluster-add-ons` repository, update the chart version in `clusters/core/addons/kuberocketci/Chart.yaml`:

  ```yaml title="clusters/core/addons/kuberocketci/Chart.yaml"
  apiVersion: v2
  name: edp-install
  version: 3.15.0
  appVersion: 3.15.0
  dependencies:
    - name: edp-install
      version: 3.15.0
      repository: https://epam.github.io/edp-helm-charts/stable
  ```

  **2.** Apply any optional values changes from Steps 2-16 to `clusters/core/addons/kuberocketci/values.yaml`.

  **3.** Commit and push the changes. ArgoCD will detect the diff and sync automatically, or trigger a manual sync from the ArgoCD UI.

  </TabItem>

  <TabItem value="helm">

  For environments managed directly with Helm:

  ```bash title="Run the Helm upgrade"
  # Update the Helm repository
  helm repo update

  # Confirm the target chart version is available
  helm search repo epamedp/edp-install --versions | grep 3.15.0

  # Preview changes against your values
  helm diff upgrade <release-name> epamedp/edp-install \
    --version 3.15.0 \
    -f values.yaml \
    -n <namespace>

  # Run the upgrade
  helm upgrade --install <release-name> epamedp/edp-install \
    --version 3.15.0 \
    -f values.yaml \
    -n <namespace> \
    --timeout 10m \
    --wait
  ```

  </TabItem>
</Tabs>

The upgrade applies the updated CRDs and rolls the operators, `edp-tekton`, `edp-gerrit-operator`, `gitfusion`, and `krci-portal` to their 3.15 versions. Allow 3-5 minutes for all pods to reach the Running state.

## Step 19. Post-Upgrade Verification

```bash title="Verify pods and component versions"
# All pods should return to Running
kubectl get pods -n <namespace>

# Confirm the operators, portal, tekton, and gerrit are on their 3.15 image tags
kubectl get deployment -n <namespace> \
  -o custom-columns=NAME:.metadata.name,IMAGE:'.spec.template.spec.containers[0].image' \
  | grep -E 'codebase-operator|cd-pipeline-operator|gerrit-operator|krci-portal|gitfusion|tekton'
```

Then verify in the browser and cluster:

- [ ] Portal loads at `https://<PORTAL_URL>` and authentication completes
- [ ] Pipeline history and live logs load (requires Tekton Results)
- [ ] Pull Request / Merge Request browsing works (requires GitFusion)
- [ ] A review pipeline for an external (non-OWNER/MEMBER/COLLABORATOR) contributor no longer auto-triggers unless `allowedAssociations` was widened (see [Step 2](#step-2-required-review-tekton-pipeline-security-hardening-defaults-edp-tekton))
- [ ] Completed PipelineRuns are still cleaned up now that the chart pruner CronJob is gone — Tekton Results retention owns this, so confirm its grace period is configured (see [Step 2](#step-2-required-review-tekton-pipeline-security-hardening-defaults-edp-tekton))
- [ ] An SSH-based self-hosted GitServer connects successfully after host-key pinning, or reports a clear connection error if not yet pinned (see [Step 3](#step-3-required-pin-ssh-host-keys-for-self-hosted-gitservers-edp-codebase-operator))
- [ ] Integration secrets (SonarQube, Nexus, Dependency-Track, DefectDojo, registry, Argo CD) behind a self-signed or private-CA certificate report `connected: true` once their CA is mounted via `caCerts`, instead of an x509 verification error (see [Step 4](#step-4-required-if-applicable-verify-tls-trust-for-integration-secret-connections-edp-codebase-operator))
- [ ] `krci-portal` pods start successfully under the new non-root security context (see [Step 5](#step-5-recommended-review-krci-portal-persistence-and-non-root-security-defaults))
- [ ] (If migrated) `krci-portal` serves OIDC login without `edp-headlamp` (see [Step 6](#step-6-required-if-applicable-remove-edp-headlamp-chart-overrides))
- [ ] (If migrated) the `tekton-monitoring` add-on dashboards show data in place of the removed Grafana dashboard (see [Step 7](#step-7-required-if-applicable-remove-legacy-tekton-grafanaprometheus-integration))
- [ ] The `tekton-interceptor` and `tekton-reporter` pods pull from the expected registry (see [Step 8](#step-8-recommended-move-edp-tekton-image-overrides-to-the-root-image-block))
- [ ] (If used) Gerrit comes up healthy on the `edp-gerrit-operator` `2.25.0` version, on the new default `3.14.2` Gerrit image, and SSH/HTTPS Gerrit access still works (see [Step 9](#step-9-recommended-edp-gerrit-operator-2250-gerrit-image-bump-acl-cache-flush-fix-and-optional-ssh-host-key-pinning))
- [ ] (If enabled) an Argo CD diff preview comment appears on a GitOps MR and/or the reporter `recreate` strategy posts a single comment (see [Step 10](#step-10-optional-new-opt-in-tekton-pipeline-features-argo-cd-diff-preview-and-reporter-recreate-strategy))
- [ ] (If enabled) the portal HTTPRoute resolves at the new `krci-portal-<namespace>.<dnsWildcard>` host (see [Step 11](#step-11-recommended-portal-httproute-hostname-correction))
- [ ] A build pipeline for a helm-chart Codebase on an Envoy Gateway platform passes its `helm-docs` diff-check step (see [Step 12](#step-12-required-if-applicable-regenerate-stale-readme-for-helm-chart-codebases-scaffolded-under-envoy-gateway))
- [ ] A build pipeline completes without running `push-to-jira`, and no new `JiraIssueMetadata` resources appear (see [Step 13](#step-13-informational-jira-automation-removed-from-build-pipelines))
- [ ] (If applicable) a codebase using the **Create** strategy that hit an interrupted provisioning now recovers automatically instead of losing history, and a provisioning collision against a non-empty default branch fails with the explicit refusal error instead of silently overwriting it (see [Step 14](#step-14-informational-codebase-operator-provisioning-retries-no-longer-silently-overwrite-pushed-history))
- [ ] (If applicable) onboarding a codebase with the **Clone** strategy no longer intermittently fails with `a branch named <name> already exists` (see [Step 15](#step-15-informational-clone-strategy-onboarding-reliability-fix-edp-codebase-operator))
- [ ] Deleting a Codebase still referenced by a CDPipeline is rejected with a `403` naming the referencing resource (see [Step 16](#step-16-informational-new-portal-capabilities-and-safeguards))
