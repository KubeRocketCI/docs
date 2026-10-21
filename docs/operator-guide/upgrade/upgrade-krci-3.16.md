---
title: "Upgrade KubeRocketCI v3.15 to 3.16"
description: "Upgrade KubeRocketCI 3.15 to 3.16: Kubernetes 1.30, read-only Tekton definitions for developers, tenant labels on Environment namespaces, and portal Ingress."
sidebar_label: "v3.15 to 3.16"
---
<!-- markdownlint-disable MD025 -->
<!--
Adding a 3.16 change to this guide:
- Add a `## Step N. (Classification) Title` step. Order steps by urgency: breaking changes first, after Step 1.
- Renumber steps contiguously. Step 1 stays Verify Prerequisites; the last three stay Breaking Changes and Deprecations, Upgrade, Post-Upgrade Verification.
- Update every `#step-N-...` anchor after renumbering.
- Breaking change: add a bullet to Breaking Changes and Deprecations linking to its step.
- Required step: add a Post-Upgrade Verification item linking to its step.
- Keep the front matter `description` within 160 characters: name a new topic only if it outranks one already listed.
- Run `npm run build` and check the log: broken anchors are reported as warnings, not errors.
- Link to this guide from other pages by page URL, not by step anchor.
-->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Upgrade KubeRocketCI v3.15 to 3.16

<head>
  <link rel="canonical" href="https://docs.kuberocketci.io/docs/operator-guide/upgrade/upgrade-krci-3.16" />
</head>

Follow these steps to upgrade KubeRocketCI from version 3.15 to 3.16.

:::important
Before upgrading, back up the KubeRocketCI environment and review every `(Required)` step and the [Breaking Changes and Deprecations](#step-15-informational-breaking-changes-and-deprecations) summary.
:::

:::note
**3.16 keeps the 3.15 dependencies** (cert-manager, GitFusion, Tekton Pipelines with the `tekton.dev/v1` API, Tekton Triggers, Tekton Results) and adds one: Kubernetes 1.30 or later. No custom resource needs conversion.
:::

`<namespace>` is the platform namespace (`krci` in the installation guides). Values are `edp-install` values; with [edp-cluster-add-ons](https://github.com/epam/edp-cluster-add-ons), nest them under `edp-install:` in `clusters/core/addons/kuberocketci/values.yaml`.

## Step 1. (Required) Verify Prerequisites

Confirm that the platform runs **3.15.x**:

```bash title="Check the installed platform version"
kubectl get configmap krci-config -n <namespace> -o jsonpath='{.data.edp_version}'
```

KubeRocketCI 3.16 requires Kubernetes 1.30 or later; OpenShift is not affected. With the default values, `edp-cd-pipeline-operator` 2.33.1 installs a `ValidatingAdmissionPolicy` (`admissionregistration.k8s.io/v1`), so the upgrade fails on an older cluster. For the tested EKS versions, see [Supported Versions](../../supported-versions.md). The command must print `served`; otherwise, upgrade the cluster first:

```bash title="Check that the cluster serves ValidatingAdmissionPolicy"
kubectl get --raw /apis/admissionregistration.k8s.io/v1 | grep -q '"validatingadmissionpolicies"' && echo served || echo "not served"
```

## Step 2. (Required) Review Developer Permissions for Tekton Resources (edp-install)

In 3.16, the `tenant-developer` Role, which `edp-install` binds to the `${platform}-oidc-developers` group, makes Tekton definitions in the platform namespace read-only for developers. Pipelines, Tasks, Triggers, and TriggerBindings are platform configuration and belong in a reviewed Git repository applied through GitOps (for example, Argo CD).

:::important
After the upgrade, developers get a `Forbidden` error when they edit a Pipeline or Task or create a Trigger, TriggerBinding, or TaskRun in the platform namespace, and the KubeRocketCI portal no longer shows them the **Edit** action on Pipelines and Tasks. Inform developer teams before upgrading.
:::

Developer permissions on Tekton resources in the platform namespace:

| Resource                                       | 3.15                                                          | 3.16                                                      |
| ---------------------------------------------- | ------------------------------------------------------------- | --------------------------------------------------------- |
| PipelineRuns                                   | `get`, `list`, `watch`, `create`                              | `get`, `list`, `watch`, `create`, `patch` (stop a run)    |
| TaskRuns                                       | `get`, `list`, `watch`, `create`                              | `get`, `list`, `watch`                                    |
| Pipelines, Tasks                               | `get`, `list`, `watch`, `create`, `update`, `patch`, `delete` | `get`, `list`, `watch`                                    |
| Triggers, TriggerBindings                      | `get`, `list`, `watch`, `create`                              | `get`, `list`, `watch`                                    |
| TriggerTemplates, EventListeners, Interceptors | `get`, `list`, `watch`                                        | `get`, `list`, `watch` (unchanged)                        |

Deleting PipelineRuns still requires administrator rights, as it has since 3.14.

**What keeps working for developers:**

- Starting pipelines: **Build**, **Run again**, **Run with params**, deployments, and PipelineRuns created with `kubectl`. The Tekton controller creates the TaskRuns, so starting a pipeline needs no TaskRun permissions. **Run with params** now requires `create` on PipelineRuns instead of on Pipelines.
- Stopping a running PipelineRun (new in 3.16).
- Viewing Pipelines, Tasks, PipelineRuns, TaskRuns, triggers, and build logs, and approving or rejecting ApprovalTasks.

The portal **Stop** action now needs `patch` on PipelineRuns instead of `update`; add `patch` to custom Roles that grant only `update`.

The `${platform}-oidc-admins` and `${platform}-oidc-viewers` groups are not affected, and developers keep the `admin` ClusterRole in Environment namespaces.

**Action is required only if developers modify Tekton definitions on the cluster**, for example if they:

- edit Pipelines or Tasks in the KubeRocketCI portal or with `kubectl`;
- apply their own Triggers or TriggerBindings, as described in [Add Custom Tekton Triggers](../../user-guide/customize-ci-triggers.md);
- create TaskRuns directly, for example with `tkn task start`.

Choose one of:

- **Move the definitions to Git (recommended):** keep them in a custom Tekton library repository and let Argo CD apply them to the platform namespace, as described in [Deliver Custom Tekton Pipelines to the Cluster](../../use-cases/custom-pipelines-flow.md#deliver-custom-tekton-pipelines-to-the-cluster).

- **Restore Pipeline and Task editing deliberately:** add a Role and a RoleBinding through the `edp-install` `extraObjects` value, with only the verbs the team needs. Edits to chart-managed Pipelines and Tasks are not tracked in Git, and the next chart upgrade or Argo CD sync can overwrite them. The subject resolves to `global.developerGroupName` or, if it is not set, `<namespace>-oidc-developers`. If you already use `extraObjects`, add both items to your list:

    ```yaml title="edp-install values.yaml (optional)"
    extraObjects:
      - apiVersion: rbac.authorization.k8s.io/v1
        kind: Role
        metadata:
          name: tenant-developer-tekton-edit
        rules:
          - apiGroups:
              - tekton.dev
            resources:
              - pipelines
              - tasks
            verbs:
              - create
              - update
              - patch
              - delete
      - apiVersion: rbac.authorization.k8s.io/v1
        kind: RoleBinding
        metadata:
          name: tenant-developer-tekton-edit
        roleRef:
          apiGroup: rbac.authorization.k8s.io
          kind: Role
          name: tenant-developer-tekton-edit
        subjects:
          - apiGroup: rbac.authorization.k8s.io
            kind: Group
            name: '{{ .Values.global.developerGroupName | default (printf "%s-oidc-developers" .Release.Namespace) }}'
    ```

After the upgrade, check the permissions of the developer group (use your group name if `global.developerGroupName` is set):

```bash title="Check developer permissions on Tekton resources"
kubectl auth can-i --list -n <namespace> \
  --as=test-user --as-group=<namespace>-oidc-developers | grep tekton.dev
```

The `pipelineruns.tekton.dev` row lists `[get list watch create patch]`, and the Pipeline, Task, TaskRun, and `triggers.tekton.dev` rows list `[get list watch]`. For the complete permission model, see [Tekton Pipeline Permissions](../auth/platform-auth-model.md#tekton-pipeline-permissions).

## Step 3. (Required) Label Environment Namespaces Created Outside the Platform (edp-cd-pipeline-operator)

With the default values on Kubernetes (`tenancyEngine: none`, `manageNamespace: true`), `edp-cd-pipeline-operator` 2.33.1 configures and deletes only namespaces labelled `app.edp.epam.com/tenant`. It labels the namespaces it creates, so only namespaces created outside the platform, for example by an administrator, Terraform, or Argo CD, are affected: after the upgrade, their Environments fail with `may act only on its own namespace and namespaces it provisioned (label app.edp.epam.com/tenant)`, and their deletion does not finish. Environments on remote clusters are not affected. Before upgrading, list these namespaces:

```bash title="Find Environment namespaces without the tenant label"
PLATFORM_NS=<namespace>

UNLABELLED=$(comm -12 \
  <(kubectl get stages.v2.edp.epam.com -n "$PLATFORM_NS" \
      -o jsonpath='{range .items[*]}{.spec.namespace}{" "}{.spec.clusterName}{"\n"}{end}' \
    | awk '$2 == "" || $2 == "in-cluster" {print $1}' | grep -vx "$PLATFORM_NS" | sort -u) \
  <(kubectl get namespaces -l '!app.edp.epam.com/tenant' \
      -o jsonpath='{range .items[*]}{.metadata.name}{"\n"}{end}' | sort -u))
echo "$UNLABELLED"
```

:::warning
Once a namespace is labelled, deleting its Environment deletes the namespace with everything in it. Label only a namespace that holds nothing but its Environment.
:::

Review the list, then label the namespaces in the same shell. The value must be the platform namespace: with the namespace's own name, creating an Environment in it fails with `namespace <name> is already used in the cluster`. Labelling also fixes Environments that already failed: the operator retries them on its own.

```bash title="Label the reviewed namespaces"
for ns in $UNLABELLED; do
  kubectl label namespace "$ns" "app.edp.epam.com/tenant=$PLATFORM_NS"
done
```

## Step 4. (Required if applicable) Enable the Portal Ingress and Check the Portal Secret (edp-install)

**a. The portal Ingress is now disabled by default** (`edp-install` 3.13–3.15 enabled it). Unless your values set `krci-portal.ingress.enabled: true`, the upgrade deletes the `krci-portal` Ingress: the portal is no longer served at `https://krci-portal-<namespace>.<dnsWildcard>`, but pipeline links in pull request comments and PipelineRun URLs still point there. You are not affected if the portal is served through `krci-portal.httproute` or if you use the `edp-cluster-add-ons` values, which set `enabled: false` explicitly.

Before upgrading, check what your values render (with edp-cluster-add-ons, check `edp-install.krci-portal.ingress.enabled` instead):

```bash title="Render the Portal Ingress with your values"
helm repo update
helm template <release-name> epamedp/edp-install --version 3.16.0 \
  -n <namespace> -f values.yaml \
  --show-only charts/krci-portal/templates/ingress.yaml
```

The output `Error: could not find template charts/krci-portal/templates/ingress.yaml in chart` means that your values do not enable the Ingress. To keep the portal at its current host, enable it:

```yaml title="edp-install values.yaml"
krci-portal:
  ingress:
    enabled: true
```

The host uses `krci-portal.ingress.dnsWildcard` or, if it is not set, `global.dnsWildCard`; if neither is set, the upgrade fails with `the 'edpDefault' host needs a DNS wildcard: set global.dnsWildCard or ingress.dnsWildcard`. If `krci-portal.ingress.dnsWildcard` differs from `global.dnsWildCard`, also set `edp-tekton.portalHost`, or pipeline links keep pointing at `krci-portal-<namespace>.<global.dnsWildCard>`.

**b. The portal now reads the `portal-secret` Secret by default**: the default `krci-portal.extraEnvFrom` passes it and the `portal-config` ConfigMap to the portal. Without the Secret, the new portal pod stays in `CreateContainerConfigError`; without its `SERVER_SECRET` key, the portal does not start. If your values set `krci-portal.extraEnvFrom`, your list replaces the default, so keep both entries. With `krci-portal.eso.enabled: true`, the chart creates `portal-secret` from the `krci-portal.eso.secretPath` entry, which must contain `SERVER_SECRET`. Check the Secret without printing its value:

```bash title="Check portal-secret"
kubectl get secret portal-secret -n <namespace> \
  -o go-template='{{ if .data.SERVER_SECRET }}SERVER_SECRET present{{ else }}SERVER_SECRET missing{{ end }}{{ "\n" }}'
```

If the Secret is missing, create it as described in [Install KubeRocketCI](../install-kuberocketci.md). With OIDC, it also holds `OIDC_CLIENT_SECRET` (see [Portal OIDC Configuration](../auth/ui-portal-oidc.md)).

## Step 5. (Required if applicable) Check GitFusion Probe Overrides (gitfusion)

In the `gitfusion` 0.7.0 chart, `livenessProbe` and `readinessProbe` default to `httpGet` on `/healthz` instead of `tcpSocket`, and the readiness probe no longer waits 20 seconds (`initialDelaySeconds`). Helm merges your `gitfusion.livenessProbe` and `gitfusion.readinessProbe` overrides into these defaults, so an override that sets `tcpSocket`, `exec`, or `grpc` gives the probe two handlers, and the upgrade fails with `may not specify more than 1 handler type`.

Before upgrading, check the probe values of a Helm release (with edp-cluster-add-ons, check `edp-install.gitfusion.livenessProbe` and `edp-install.gitfusion.readinessProbe` in the add-ons values):

```bash title="Show the GitFusion probe values of a Helm release"
helm get values <release-name> -n <namespace> -o json | jq '.gitfusion | {livenessProbe, readinessProbe}'
```

Remove such handlers from your overrides; the chart's HTTP probe replaces them. Overrides that only tune timing (`initialDelaySeconds`, `periodSeconds`, `timeoutSeconds`, `failureThreshold`) need no change.

## Step 6. (Required if applicable) Review External Secrets for Environments (edp-cd-pipeline-operator)

This step applies only if `cd-pipeline-operator.secretManager` is `eso`. The `edp-system` SecretStore that the operator creates in each Environment namespace now reads only the `regcred` Secret of the platform namespace; in 3.15, it read every Secret there. ExternalSecrets that read other Secrets through `edp-system` stop syncing after the upgrade. Find them and move them to their own SecretStore, as described in [Secured Secrets Management for Application Deployment](../../use-cases/external-secrets.md):

```bash title="ExternalSecrets that use the edp-system store for something other than regcred"
kubectl get externalsecrets.external-secrets.io -A \
  -o jsonpath='{range .items[?(@.spec.secretStoreRef.name=="edp-system")]}{.metadata.namespace}{"/"}{.metadata.name}{"\n"}{end}' \
  | grep -v '/regcred$'
```

Environments that failed with External Secrets Operator 0.17 or later now reconcile: the operator uses the `external-secrets.io/v1` API when the cluster serves it, and `v1beta1` otherwise.

The operator now also deletes the `eso-<environment-namespace>` RoleBinding in the platform namespace with its Environment. To remove those left by Environments deleted before 3.16, list them and delete each with `kubectl delete rolebinding -n <namespace> eso-<environment-namespace>`:

```bash title="eso-* RoleBindings without an Environment"
PLATFORM_NS=<namespace>
comm -23 \
  <(kubectl get rolebindings -n "$PLATFORM_NS" \
      -o jsonpath='{range .items[?(@.roleRef.name=="external-secret-integration")]}{.metadata.name}{"\n"}{end}' \
    | sed -n 's/^eso-//p' | sort -u) \
  <(kubectl get stages.v2.edp.epam.com -n "$PLATFORM_NS" \
      -o jsonpath='{range .items[*]}{.spec.namespace}{"\n"}{end}' | sort -u)
```

## Step 7. (Required if applicable) Check the pnpm, Python, and .NET Build Settings (edp-tekton)

`edp-tekton` 0.28.0 changes three build paths that can make builds fail after the upgrade. Installations without pnpm codebases, an overridden Python settings ConfigMap, or .NET builds need no action.

**pnpm:** like npm, the `edp-pnpm` task now installs through the registry in the `.npmrc-ci` file of the npm settings ConfigMap (`edp-tekton.tekton.configs.npmConfigMap`, default `custom-npm-settings`): by default, `<nexus-url>/repository/krci-npm-group` with the `ci-nexus` credentials. Before 3.16, pnpm used the public npm registry unless the repository's own `.npmrc` set a registry. Before upgrading, make sure that this registry proxies the public npm registry (the [Nexus configuration](../artifacts-management/nexus-sonatype.md) includes `krci-npm-proxy` in `krci-npm-group`), or pnpm builds that relied on the public registry fail.

**Python:** if `edp-tekton.tekton.configs.pythonConfigMap` names your own ConfigMap, the `python` task now reads it instead of `custom-python-settings`, which 3.15 always read: if your Python builds work on 3.15, copy the data of `custom-python-settings` to your ConfigMap. Your ConfigMap must exist in the platform namespace and hold the four keys below, or the build pod does not start. `PIP_INDEX_PATH` is no longer optional, and the key names from earlier versions of [Package Registry](../artifacts-management/package-registry.md) (`PIP_TRUSTED_HOST`, `PIP_INDEX`, `PIP_INDEX_URL`, `REPOSITORY_URL_SNAPSHOTS`, `REPOSITORY_URL_RELEASES`) are not read:

```yaml title="ConfigMap referenced by edp-tekton.tekton.configs.pythonConfigMap"
apiVersion: v1
kind: ConfigMap
metadata:
  name: my-python-settings
  namespace: <namespace>
data:
  PIP_INDEX_PATH: "/repository/krci-python-group/pypi"
  PIP_INDEX_URL_PATH: "/repository/krci-python-group/simple"
  REPOSITORY_SNAPSHOTS_PATH: "/repository/krci-python-snapshots/"
  REPOSITORY_RELEASES_PATH: "/repository/krci-python-releases/"
```

**.NET:** the `get-version-dotnet-default` task now builds the NuGet package version from the `<Version>` of the deployable `.csproj` and a timestamp, for example `1.0.0-snapshot-20261021-143000` instead of `20261021-143000`. This affects custom pipelines that use the task and the library `*-dotnet-*-build-default` pipelines, which the chart renders only when `edp-tekton.pipelines.deployableResources.cs.dotnet3.1` or `dotnet6.0` is `true` (both default to `false`).

- Before upgrading, add a `<Version>` to every deployable `.csproj` that has none, or its builds fail at the `get-version` task.
- A `<Version>` that contains `snapshot` now publishes to `nugetStorageSnapshots` instead of `nugetStorageReleases`.
- Git tags and image tags do not change, and builds started before 10:00 by the build pod's clock no longer fail with `MSB4018`.
- Tell .NET teams that packages published before the upgrade have a higher major version (for example, `20261021`) than the new ones, so consumers that float to the latest version keep resolving the old packages.

## Step 8. (Required if applicable) GitFusion API Errors and Repository Lists (gitfusion)

Only your own GitFusion API clients need an update: the 3.16 portal handles the new responses and shows the request ID with each error.

- **Errors.** GitFusion 0.7.0 returns every API error as `application/problem+json` (RFC 9457), with a request ID in the `requestId` field and the `X-Request-Id` header. The `detail` field never contains the cause: GitFusion logs it in the line with the same request ID. All endpoints use the same status codes: `400` for a missing or invalid parameter or an operation that the Git provider does not support, `404` when the GitServer or the Git resource is not found, `502` when the Git provider rejects the GitServer token (before: `401`, `400`, or `500`, depending on the endpoint), and `500` for other failures. To find the cause of an error:

    ```bash title="Find a GitFusion error by its request ID"
    kubectl logs -n <namespace> -l app.kubernetes.io/name=gitfusion --tail=-1 | grep -F '<request-id>'
    ```

- **Parameter values.** The `state` parameter of pull request lists accepts only `open`, `closed`, `merged`, and `all`, and the `status` parameter of pipeline lists accepts only `pending`, `running`, `success`, `failed`, `cancelled`, `skipped`, and `manual`; other values now return `400` instead of being ignored.

Repository lists also change, with no action needed:

- **GitHub repositories of the token user.** When the owner selected in the portal is the GitHub token user, GitFusion also lists that user's private repositories; other user accounts still show only public repositories.
- **GitLab groups with more than 100 projects.** The repository list of such a group now loads completely; in 3.15, the request timed out.

## Step 9. (Required if applicable) Codebase Deletion Waits for Deployment Deletion (edp-codebase-operator)

`edp-codebase-operator` 2.36.0 treats a deployment (CDPipeline) that is being deleted as still using its codebases. Until it is gone, deleting a Codebase or CodebaseBranch that it references fails with a `403` error that names the deployment and, when every referencing deployment is being deleted, asks you to wait, for example:

```text
Codebase app cannot be deleted because it is used by CDPipeline demo (applications, being deleted); wait for the deletion to finish
```

Scripts that delete a deployment and then its codebases must wait until the CDPipeline is gone, for example with `kubectl wait --for=delete cdpipeline/<name> -n <namespace> --timeout=10m`. The stale-branch cleanup of a Codebase with the `app.edp.epam.com/branch-cleanup-strategy: auto` annotation also keeps branches that such a CDPipeline still references.

## Step 10. (Recommended) Remove RBAC Objects That the Charts No Longer Render (edp-cluster-add-ons)

The 3.16 charts no longer render these objects (see [Step 11](#step-11-informational-least-privilege-rbac-for-platform-components)):

| Object | Kind | Granted |
| ------ | ---- | ------- |
| `edp-cd-pipeline-operator-<namespace>-admin` | ClusterRoleBinding | the `admin` ClusterRole in every namespace to `edp-cd-pipeline-operator` (only on Kubernetes with `tenancyEngine: none` and `manageNamespace: true`) |
| `edp-codebase-operator-admin` (platform namespace) | RoleBinding | the `admin` ClusterRole in the platform namespace to `edp-codebase-operator` |
| `edp-codebase-operator-<namespace>-validation-webhook` | ClusterRole and ClusterRoleBinding | cluster-wide read of namespaces to `edp-codebase-operator` |
| `tekton-triggers-eventlistener-clusterbinding-<namespace>` | ClusterRoleBinding | cluster-wide read of Secrets to the `tekton-triggers-sa-<namespace>` EventListener ServiceAccount |

`helm upgrade` deletes them. Argo CD deletes them only in a sync with **Prune** enabled; until then, nothing breaks, but the components keep their 3.15 permissions.

## Step 11. (Informational) Least-Privilege RBAC for Platform Components

3.16 cuts most permissions of the platform components down to the calls they make. Apart from Steps 3 and 6, platform functions keep working without value changes; custom automation that used these ServiceAccounts needs its own Role.

- **`edp-codebase-operator` 2.36.0:** the operator runs with the `edp-codebase-operator` Role and RoleBinding in the platform namespace instead of the `admin` ClusterRole, and its chart creates no cluster-scoped RBAC. It can create only PipelineRuns from a TriggerTemplate, so a custom deploy TriggerTemplate must create PipelineRuns.
- **`edp-cd-pipeline-operator` 2.33.1:** the operator no longer holds the `admin` ClusterRole in every namespace. On Kubernetes with `tenancyEngine: none`, the chart grants the permissions that the operator uses in Environment namespaces, and the admission policy from [Step 3](#step-3-required-label-environment-namespaces-created-outside-the-platform-edp-cd-pipeline-operator) limits them to labelled namespaces (with `manageNamespace: false`, no policy limits them). The operator now uses leader election (Lease `edp-cd-pipeline-operator-lock` in the platform namespace) and, with webhooks enabled, becomes ready only when its webhook server serves TLS.
- **`gitfusion` 0.7.0:** the `gitfusion-role` Role grants `get` on Secrets and `get` and `list` on GitServers.
- **`edp-tekton` 0.28.0:** the EventListener ServiceAccount `tekton-triggers-sa-<namespace>` no longer reads Secrets; its `edp-tekton-eventlistener-<namespace>` ClusterRole only reads ClusterTriggerBindings and ClusterInterceptors. Webhooks and [custom Tekton triggers](../../user-guide/customize-ci-triggers.md) keep working: the GitHub, GitLab, and Bitbucket interceptors of Tekton Triggers read the webhook secrets under their own ServiceAccount.

## Step 12. (Optional) New Tekton Task Parameters (edp-tekton)

Library pipelines do not pass these parameters; use them in custom pipelines. The `save-cache` and `gitlab-set-status` defaults keep the previous behavior, and the `npm` default now also applies to the publish steps of npm and pnpm build pipelines:

- `save-cache`: `CACHE_MAX_AGE_DAYS` (default `"1"`). The task skips the upload while the archive on the cache server is younger than this many days; `"0"` uploads on every run. No Helm value sets it.
- `gitlab-set-status`: `REF` (default `""`), the Git ref of the commit status. Set it to `refs/merge-requests/$(params.changeNumber)/head` only in the GitLab review pipeline of a repository that also runs GitLab CI merge request pipelines, so that the status joins the merge request pipeline. Do not combine it with `edp-tekton.pipelines.queue.enabled: true`, which posts the queued status without a ref.
- `npm`: `CACHE_DIR` (default `/workspace/source/cache`), exported as `NPM_CACHE_DIR` for the `cache=${NPM_CACHE_DIR}` line of the `.npmrc` files in the npm settings ConfigMap.

```yaml title="Custom pipeline task (fragment)"
- name: save-cache
  taskRef:
    kind: Task
    name: save-cache
  params:
    - name: CACHE_NAME
      value: $(params.CODEBASE_NAME)
    - name: CACHE_MAX_AGE_DAYS
      value: "0"
  workspaces:
    - name: cache
      workspace: shared-workspace
      subPath: cache
```

## Step 13. (Informational) Pipeline Behavior Changes (edp-tekton)

- **Security scans succeed without DefectDojo.** Without the `ci-defectdojo` Secret, `<git-provider>-security-scan` PipelineRuns used to end `Failed` with `CouldntGetPipelineResult`, although every task succeeded. Now they succeed, with an empty `SCAN_REPORT_URL` result.
- **Review reports: once per run, none for cancelled runs.** The Tekton reporter publishes the report of a finished GitHub, GitLab, or Bitbucket review PipelineRun once; before, it could post it twice. Cancelled or stopped runs (superseded with `edp-tekton.pipelines.cancelInProgress: true`, stopped in the portal, or cancelled with `kubectl`) get no report and the `app.edp.epam.com/pipeline-reported: skipped` annotation; commit statuses are unchanged. **Run again** and **Run with params** in the portal no longer copy this annotation, so re-runs are reported.

## Step 14. (Informational) New Portal Capabilities (krci-portal)

`krci-portal` 0.9.0 adds these changes; none of them requires action:

- **Stop PipelineRuns in bulk:** select running or pending PipelineRuns in the list and click **Stop**. Stopping stays graceful (`CancelledRunFinally`), so `finally` tasks still report the commit status.
- **REST endpoints:** `POST /rest/v1/pipelineruns/build` starts the build pipeline of a codebase branch like the **Build** button and serves `krci project build`; `POST /rest/v1/pipelineruns/stop` stops up to 100 runs per request. Both act with the caller's identity (portal session, OIDC ID token, or ServiceAccount token) and need the same Kubernetes permissions as the portal actions.
- **Air-gapped clusters:** the portal serves its YAML editor (Monaco) and fonts itself, so the browser no longer loads them from jsDelivr or Google Fonts.
- **Capsule 0.14:** the **Platform Resource Usage** indicator also finds tenant quotas labelled `projectcapsule.dev/tenant`.
- **Clusters behind a private CA:** with **Skip TLS verification** off, the portal asks for the **Cluster Certificate**, so you can add such a cluster.
- **Environments:** Delete is no longer disabled on every Environment when another Deployment in the namespace has more Environments; the Environment with the highest order can be deleted, and a Deployment keeps at least one.
- **Tables and metrics:** columns can be resized, and the **Pipeline Metrics** page keeps the selected codebase and time range in its URL.
- **Libraries:** Next.js is offered as a JavaScript framework.

## Step 15. (Informational) Breaking Changes and Deprecations

- With the default values, Kubernetes 1.30 or later is required — see [Step 1](#step-1-required-verify-prerequisites).
- Developers have read-only access to Tekton Pipelines, Tasks, TaskRuns, Triggers, and TriggerBindings in the platform namespace, and the portal **Stop** action requires `patch` on PipelineRuns — see [Step 2](#step-2-required-review-developer-permissions-for-tekton-resources-edp-install).
- On Kubernetes with the default values, Environments whose namespace has no `app.edp.epam.com/tenant` label fail — see [Step 3](#step-3-required-label-environment-namespaces-created-outside-the-platform-edp-cd-pipeline-operator).
- `edp-install` no longer enables the portal Ingress, and the portal reads `portal-secret` by default — see [Step 4](#step-4-required-if-applicable-enable-the-portal-ingress-and-check-the-portal-secret-edp-install).
- GitFusion probe overrides that set `tcpSocket`, `exec`, or `grpc` fail the upgrade — see [Step 5](#step-5-required-if-applicable-check-gitfusion-probe-overrides-gitfusion).
- With `secretManager: eso`, the `edp-system` SecretStore of each Environment reads only the `regcred` Secret — see [Step 6](#step-6-required-if-applicable-review-external-secrets-for-environments-edp-cd-pipeline-operator).
- pnpm builds install through the registry of the npm settings ConfigMap, an overridden Python settings ConfigMap must exist and hold all four keys, and .NET builds with default versioning fail without a `<Version>` in the deployable `.csproj` — see [Step 7](#step-7-required-if-applicable-check-the-pnpm-python-and-net-build-settings-edp-tekton).
- Custom GitFusion API clients must handle the new error format and status codes — see [Step 8](#step-8-required-if-applicable-gitfusion-api-errors-and-repository-lists-gitfusion).
- Scripts that delete a deployment and then its codebases must wait until the deployment is gone — see [Step 9](#step-9-required-if-applicable-codebase-deletion-waits-for-deployment-deletion-edp-codebase-operator).

## Step 16. Upgrade

<Tabs
  defaultValue="addons"
  values={[
    {label: 'edp-cluster-add-ons (recommended)', value: 'addons'},
    {label: 'Helm', value: 'helm'}
  ]}>

  <TabItem value="addons">

  Upgrade through [edp-cluster-add-ons](https://github.com/epam/edp-cluster-add-ons) and Argo CD:

  **1.** In your `edp-cluster-add-ons` repository, update the chart version in `clusters/core/addons/kuberocketci/Chart.yaml`:

  ```yaml title="clusters/core/addons/kuberocketci/Chart.yaml"
  apiVersion: v2
  name: edp-install
  version: 3.16.0
  appVersion: 3.16.0
  dependencies:
    - name: edp-install
      version: 3.16.0
      repository: https://epam.github.io/edp-helm-charts/stable
  ```

  **2.** Make the values changes from Steps 2, 4, and 5 that apply to you in `clusters/core/addons/kuberocketci/values.yaml`, under `edp-install:`.

  **3.** If an Argo CD AppProject restricts cluster-scoped kinds, allow `ValidatingAdmissionPolicy` and `ValidatingAdmissionPolicyBinding` in the `admissionregistration.k8s.io` group; the `core` project of `edp-cluster-add-ons` already allows all cluster-scoped kinds. Commit and push the changes, then sync the `in-cluster-kuberocketci` Application with **Prune** enabled (see [Step 10](#step-10-recommended-remove-rbac-objects-that-the-charts-no-longer-render-edp-cluster-add-ons)).

  </TabItem>

  <TabItem value="helm">

  For environments managed directly with Helm:

  ```bash title="Run the Helm upgrade"
  # Update the Helm repository
  helm repo update

  # Confirm the target chart version is available
  helm search repo epamedp/edp-install --versions | grep 3.16.0

  # Preview changes against your values
  helm diff upgrade <release-name> epamedp/edp-install \
    --version 3.16.0 \
    -f values.yaml \
    -n <namespace>

  # Run the upgrade
  helm upgrade --install <release-name> epamedp/edp-install \
    --version 3.16.0 \
    -f values.yaml \
    -n <namespace> \
    --timeout 10m \
    --wait
  ```

  Pass your values file as shown, not `--reuse-values`: with `--reuse-values`, Helm renders the 3.16 templates with the 3.15 chart defaults, so the portal Ingress stays enabled, and the GitFusion probes get two handlers and fail the upgrade.

  </TabItem>
</Tabs>

No CRD step is needed: 3.16 changes only the description of the GitServer `spec.gitProvider` field, and `helm upgrade` does not install or update the CRDs of an existing release. Allow 3-5 minutes for all pods to reach the Running state.

## Step 17. Post-Upgrade Verification

```bash title="Verify pods and component versions"
# All pods should return to Running
kubectl get pods -n <namespace>

# Confirm the platform components are on their 3.16 image tags
kubectl get deployment -n <namespace> \
  -o custom-columns=NAME:.metadata.name,IMAGE:'.spec.template.spec.containers[0].image'

# Every Environment reconciles; a failed one shows the reason in MESSAGE
kubectl get stages.v2.edp.epam.com -n <namespace> \
  -o custom-columns=NAME:.metadata.name,NAMESPACE:.spec.namespace,AVAILABLE:.status.available,STATUS:.status.status,MESSAGE:.status.detailed_message

# No Environment is stuck in deletion: the command prints nothing
kubectl get stages.v2.edp.epam.com -n <namespace> \
  -o jsonpath='{range .items[?(@.metadata.deletionTimestamp)]}{.metadata.name}{"\n"}{end}'
```

The default 3.16 images are:

| Deployment | Image |
| ---------- | ----- |
| `codebase-operator` | `epamedp/codebase-operator:2.36.0` |
| `cd-pipeline-operator` | `epamedp/cd-pipeline-operator:2.33.1` |
| `gitfusion` | `epamedp/gitfusion:0.7.0` |
| `krci-portal` | `epamedp/krci-portal:0.9.0` |
| `tekton-interceptor`, `tekton-reporter` | `epamedp/edp-tekton:0.28.0` |
| `tekton-cache` | `ghcr.io/kuberocketci/krci-cache:0.3.0` (unchanged) |

Then verify in the browser and cluster:

- [ ] The portal loads at `<PORTAL_URL>`, and authentication completes
- [ ] Pipeline history and live logs load (requires Tekton Results)
- [ ] Pull Request / Merge Request browsing works (requires GitFusion)
- [ ] A member of the developer group can start a PipelineRun and stop a running one from the portal (see [Step 2](#step-2-required-review-developer-permissions-for-tekton-resources-edp-install))
- [ ] Unless editing was restored through `extraObjects`, developers do not see the **Edit** action on Pipelines and Tasks, and for their group, `kubectl auth can-i update pipelines` returns `no` in the platform namespace (see [Step 2](#step-2-required-review-developer-permissions-for-tekton-resources-edp-install))
- [ ] Every Environment shows `AVAILABLE` `true` (see [Step 3](#step-3-required-label-environment-namespaces-created-outside-the-platform-edp-cd-pipeline-operator))
- [ ] `kubectl get ingress krci-portal -n <namespace>` shows the portal host, unless the portal is exposed another way, and the `krci-portal` pod is Running (see [Step 4](#step-4-required-if-applicable-enable-the-portal-ingress-and-check-the-portal-secret-edp-install))
- [ ] The `gitfusion` Deployment is available (see [Step 5](#step-5-required-if-applicable-check-gitfusion-probe-overrides-gitfusion))
- [ ] (If `secretManager` is `eso`) the `regcred` Secret appears in the namespace of a new Environment (see [Step 6](#step-6-required-if-applicable-review-external-secrets-for-environments-edp-cd-pipeline-operator))
- [ ] (If used) a pnpm build, a Python build with an overridden settings ConfigMap, and a .NET build with default versioning pass (see [Step 7](#step-7-required-if-applicable-check-the-pnpm-python-and-net-build-settings-edp-tekton))
- [ ] (If used) custom GitFusion API clients handle the new error format and status codes (see [Step 8](#step-8-required-if-applicable-gitfusion-api-errors-and-repository-lists-gitfusion))
- [ ] (If used) scripts that delete a deployment and then its codebases finish without a `403` error (see [Step 9](#step-9-required-if-applicable-codebase-deletion-waits-for-deployment-deletion-edp-codebase-operator))
- [ ] `kubectl get clusterrolebinding edp-cd-pipeline-operator-<namespace>-admin tekton-triggers-eventlistener-clusterbinding-<namespace>` returns `NotFound` for both (see [Step 10](#step-10-recommended-remove-rbac-objects-that-the-charts-no-longer-render-edp-cluster-add-ons))
- [ ] `kubectl auth can-i list secrets --all-namespaces --as=system:serviceaccount:<namespace>:tekton-triggers-sa-<namespace>` returns `no`, and a webhook still starts a review PipelineRun (see [Step 11](#step-11-informational-least-privilege-rbac-for-platform-components))
