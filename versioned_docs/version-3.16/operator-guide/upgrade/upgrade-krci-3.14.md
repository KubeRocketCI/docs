---
title: "Upgrade KubeRocketCI v3.13 to 3.14"
description: "Guide on upgrading KubeRocketCI to version 3.14. Covers optional Envoy Gateway / HTTPRoute exposure, cancel-in-progress review pipelines, krci-audit, in-app notifications, the review pipeline reporter, clusterName configuration, and post-upgrade verification."
sidebar_label: "v3.13 to 3.14"
---
<!-- markdownlint-disable MD025 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Upgrade KubeRocketCI v3.13 to 3.14

<head>
  <link rel="canonical" href="https://docs.kuberocketci.io/docs/operator-guide/upgrade/upgrade-krci-3.14" />
</head>

This section provides detailed instructions for upgrading KubeRocketCI to version 3.14. Follow the steps and requirements outlined below:

:::important
We suggest backing up the KubeRocketCI environment before starting the upgrade procedure.
:::

:::note
**3.14 is a feature release.** Upgrading from 3.13 requires **no forced resource migrations** and introduces **no breaking Custom Resource schema or label changes**. The platform dependencies added in 3.13 — cert-manager for the operator admission webhooks, GitFusion, Tekton Results, and Tekton Pipelines with the `tekton.dev/v1` API — are unchanged and are already in place if you are on 3.13.x. Most of what is new in 3.14 is **opt-in**.
:::

:::note
**Envoy Gateway support is optional and disabled by default.** A cluster without Envoy Gateway or the Gateway API CRDs upgrades to 3.14 without any changes — by default the platform renders standard nginx `Ingress` resources and **zero** `HTTPRoute` objects. Envoy Gateway is enabled explicitly, per component, as described in [Step 4](#step-4-optional-enable-envoy-gateway-and-httproute-exposure).
:::

## Step 1. (Required) Verify Prerequisites

Confirm the platform is currently on a **3.13.x** release before upgrading. The `CHART` column shows the installed `edp-install` version:

```bash title="Check the installed chart version"
helm list -n <namespace>
```

The following platform dependencies are carried over from 3.13 and must remain in place. If you are upgrading from 3.13.x they are already satisfied — the commands below are a quick confirmation:

```bash title="Verify carried-over dependencies"
# cert-manager — required for the codebase-operator and cd-pipeline-operator admission webhooks
kubectl get crd certificates.cert-manager.io

# Tekton Pipelines — must expose the tekton.dev/v1 API (GA since v0.44); 3.14 is validated with v1.6.2
kubectl get deployment tekton-pipelines-controller -n tekton-pipelines \
  -o jsonpath='{.spec.template.spec.containers[0].image}'; echo

# GitFusion and Tekton Results — required by krci-portal (repository browsing and pipeline history)
kubectl get deployment -n <namespace> | grep -E 'gitfusion|krci-portal'
```

:::note
Tekton Pipelines is bumped to the tested version **1.6.2** and Tekton cache to **0.4.5** in 3.14. No API migration is required — the `tekton.dev/v1` API introduced in 3.13 is unchanged. When Tekton is managed through [edp-cluster-add-ons](https://github.com/epam/edp-cluster-add-ons/tree/main/clusters/core/addons/tekton), these versions are applied for you.
:::

## Step 2. (Recommended) Configure `clusterName` for Pipeline URLs

3.14 adds a `clusterName` value used to build correct `krci-portal` pipeline URLs (`/c/<clusterName>/...`). Set it to the same value as the portal's `DEFAULT_CLUSTER_NAME`. If left empty, it falls back to the first segment of `global.dnsWildCard`, which may not match.

```yaml title="values.yaml"
global:
  # Must match krci-portal.configEnv.DEFAULT_CLUSTER_NAME
  clusterName: core

edp-tekton:
  # Same value; used to construct pipeline links surfaced by Tekton
  clusterName: core
```

:::note
You can skip this step only if the first segment of `global.dnsWildCard` already equals your `DEFAULT_CLUSTER_NAME`. Setting `clusterName` explicitly is safe and recommended.
:::

## Step 3. (Optional) Enable Cancel-in-Progress for Review Pipelines

3.14 can automatically cancel a review PipelineRun when a newer commit arrives on the same Pull Request / Merge Request / Gerrit change, saving executor capacity. Cancellation is graceful (`spec.status: CancelledRunFinally`) — the `finally` tasks of the superseded run still execute and report status back to the git provider. It is **disabled by default**.

```yaml title="values.yaml"
edp-tekton:
  pipelines:
    cancelInProgress: true
```

## Step 4. (Optional) Enable Envoy Gateway and HTTPRoute Exposure

3.14 introduces optional **Envoy Gateway** exposure for Tekton EventListeners, GitServer webhooks, application Helm chart scaffolding, and the portal Networking tab. It is **off by default**, and the existing nginx `Ingress` path is unchanged. Skip this step entirely to keep nginx.

To opt in, a Gateway API-capable Envoy Gateway must already be deployed (for example, via [edp-cluster-add-ons](https://github.com/epam/edp-cluster-add-ons)), then enable it per component:

```yaml title="values.yaml"
global:
  # Parent Gateway that HTTPRoutes attach to; the Gateway itself must already exist
  gatewayApi:
    gatewayName: main-gateway
    gatewayNamespace: envoy-gateway-system

codebase-operator:
  # Register new GitServer webhooks against the HTTPRoute host instead of the Ingress host
  ingressController: envoy

edp-tekton:
  gitServers:
    my-github:
      # ...existing gitServer configuration...
      eventListener:
        ingress:
          enabled: true      # kept as a fallback during cutover
        httproute:
          enabled: true      # opt-in HTTPRoute for this EventListener
```

:::note
The cutover is reversible and per-gitServer. The `Ingress` continues to render as a fallback while `httproute.enabled: true`, so the webhook keeps working during cutover. To roll back, set `ingressController: nginx` and `httproute.enabled: false` — the `HTTPRoute` disappears on the next reconcile and the `Ingress` remains the active path. External reachability additionally requires the edge (ALB or load balancer) to route the host to Envoy.
:::

## Step 5. (Optional) Enable Kubernetes Audit Trail

The portal **Admin → Audit Events** page and the **Triggered By** field on PipelineRun details depend on the **krci-audit** add-on. The add-on is **disabled by default**. Upgrading to 3.14 does not enable it automatically.

To turn it on:

1. Follow [Audit Trails Setup](../monitoring-and-observability/audit-trails-setup.md): create the database credentials Secret, set `krci-audit.enable: true` in your add-ons values, and sync the add-on.
2. Ensure the portal can reach the read API. The default in-cluster URL is:

    ```yaml title="krci-portal values (configEnv)"
    configEnv:
      KRCI_AUDIT_URL: http://krci-audit-api.krci-audit:8080
    ```

3. To open **Administration → Audit Events**, sign in with **OIDC** as a user in a Keycloak group mapped to the portal `administrator` role (default group name: `administrator`, overridable with `PORTAL_ADMIN_GROUPS`). Service Account token sessions do not receive portal admin roles, so that menu is hidden for token login.

Skip this step if you do not need an in-platform audit trail yet. Without krci-audit, **Triggered By** shows **N/A** for runs that have no initiator in the trail.

## Step 6. (Optional) Enable In-App Notifications

3.14.1 adds an in-app notifications hub (header bell, unread badge, toasts) for platform events such as failed PipelineRuns. The UI can appear after upgrade, but ingestion stays off until you configure it.

1. Add a shared secret to the portal Secret wired through `extraEnvFrom` (see the portal chart `secrets-example`):

    ```yaml title="portal-secret (excerpt)"
    stringData:
      INTERNAL_EVENTS_TOKEN: "<generate-a-long-random-secret>"
    ```

2. Deploy or update an in-cluster **Argo Events** Sensor that `POST`s to the portal internal events endpoint and sends the same value in the `x-internal-events-token` header. Until `INTERNAL_EVENTS_TOKEN` is set, the portal responds `503` on that endpoint and no events are stored.

3. After rotating the token, update both the portal Secret and the Sensor copy, then restart the portal Deployment so the new environment variable is loaded.

:::note
Notifications are an **alpha** capability: storage is local SQLite on a single portal replica, and every authenticated portal user currently sees the same event stream. Skip this step if you are not ready to operate the Sensor and token.
:::

## Step 7. (Informational) Review Pipeline Reporter

From 3.14.1, finished review PipelineRuns can publish a self-updating pull or merge request comment (per-task status table plus trailing logs of failed steps) via **tekton-reporter** inside `edp-tekton` / the pipelines-library chart.

- The reporter ships **enabled by default** (`reporter.enabled: true`). No upgrade action is required to keep the feature.
- To disable it, set:

    ```yaml title="values.yaml"
    edp-tekton:
      # Path may be under the pipelines-library / edp-tekton values your umbrella chart exposes
      reporter:
        enabled: false
    ```

- Comment links into the portal use `portalHost` and `clusterName`. Set `clusterName` as in [Step 2](#step-2-recommended-configure-clustername-for-pipeline-urls) so those URLs resolve correctly.

Published logs come from steps that run pull request code. Secret masking is best-effort; enable the reporter only where that risk is acceptable for your pipelines.

## Step 8. (Informational) New Portal Capabilities

`krci-portal` `0.6.0` (and the 3.14.1 portal updates) add the following capabilities. Most require **no upgrade action** beyond installing the new chart version:

- **Service Account token login** — operators can sign in with a Kubernetes Service Account token; OIDC configuration is now optional.
- **Expanded Kubernetes mode** — redesigned cluster overview, Custom Resource and CRD browsing for users without cluster-wide CRD access, and scale / restart / rollback actions for Deployments, StatefulSets, and DaemonSets.
- **GitLab CI** — a dedicated pipeline list and log viewer for codebases with `ciTool: gitlab`.
- **Networking tab** on stage details showing Gateways, HTTPRoutes, and Ingresses, plus HTTPRoute-derived external URLs in the Applications table. HTTPRoute data is most useful when [Step 4](#step-4-optional-enable-envoy-gateway-and-httproute-exposure) is enabled.
- **Monitoring tab** on PipelineRun details (per-step CPU and memory from Prometheus). Set `krci-portal.configEnv.PROMETHEUS_URL` to your in-cluster Prometheus base URL (for example `http://prometheus.monitoring.svc:9090`). If unset, the tab returns a precondition error.
- **Current deployed version** in the CD stage deploy dropdown, a **branch** column on the applications table, and a **stale** badge for branches missing in git.

**Admin → Audit Events** and **Triggered By** are covered in [Step 5](#step-5-optional-enable-kubernetes-audit-trail). The notifications hub is covered in [Step 6](#step-6-optional-enable-in-app-notifications).

## Step 9. (Informational) Resource Migrations

**No Custom Resource migrations or configuration-schema / label changes are required for this upgrade.** `Codebase`, `CodebaseBranch`, `CDPipeline`, `Stage`, Tekton resources, and Argo CD `ApplicationSet` definitions created under 3.13 remain valid under 3.14. The 3.14 chart applies the updated CRDs in place, and existing resources are reconciled without manual conversion.

If you maintain **custom** Tekton pipelines or resource templates, no parameter or API changes are required in 3.14. The `tekton.dev/v1` migration and the security-task parameter renames were completed in 3.13 — see [Upgrade v3.12 to 3.13](./upgrade-krci-3.13.md).

## Step 10. (Informational) Breaking Changes and Deprecations

There are **no new breaking changes** in 3.14. Deprecations carried over from 3.13 remain in effect:

- `edp-headlamp` stays disabled and is replaced by `krci-portal`. If you completed the 3.13 portal migration, no further action is needed.

## Step 11. Upgrade

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
  version: 3.14.1
  appVersion: 3.14.1
  dependencies:
    - name: edp-install
      version: 3.14.1
      repository: https://epam.github.io/edp-helm-charts/stable
  ```

  **2.** Apply any optional values changes from Steps 2-7 to `clusters/core/addons/kuberocketci/values.yaml` (and enable `krci-audit` in your add-ons apps values if you follow [Step 5](#step-5-optional-enable-kubernetes-audit-trail)).

  **3.** Commit and push the changes. ArgoCD will detect the diff and sync automatically, or trigger a manual sync from the ArgoCD UI.

  </TabItem>

  <TabItem value="helm">

  For environments managed directly with Helm:

  ```bash title="Run the Helm upgrade"
  # Update the Helm repository
  helm repo update

  # Confirm the target chart version is available
  helm search repo epamedp/edp-install --versions | grep 3.14.1

  # Preview changes against your values
  helm diff upgrade <release-name> epamedp/edp-install \
    --version 3.14.1 \
    -f values.yaml \
    -n <namespace>

  # Run the upgrade
  helm upgrade --install <release-name> epamedp/edp-install \
    --version 3.14.1 \
    -f values.yaml \
    -n <namespace> \
    --timeout 10m \
    --wait
  ```

  </TabItem>
</Tabs>

The upgrade applies the updated CRDs and rolls the operators, `edp-tekton`, `gitfusion`, and `krci-portal` to their 3.14 versions. Allow 3-5 minutes for all pods to reach the Running state.

## Step 12. Post-Upgrade Verification

```bash title="Verify pods and component versions"
# All pods should return to Running
kubectl get pods -n <namespace>

# Confirm the operators, portal, and tekton are on their 3.14 image tags
kubectl get deployment -n <namespace> \
  -o custom-columns=NAME:.metadata.name,IMAGE:'.spec.template.spec.containers[0].image' \
  | grep -E 'codebase-operator|cd-pipeline-operator|krci-portal|gitfusion|tekton'
```

Then verify in the browser:

- [ ] Portal loads at `https://<PORTAL_URL>` and authentication completes
- [ ] Pipeline history and live logs load (requires Tekton Results)
- [ ] Pull Request / Merge Request browsing works (requires GitFusion)
- [ ] Pipeline URLs open the correct cluster path `/c/<clusterName>/...` (see [Step 2](#step-2-recommended-configure-clustername-for-pipeline-urls))
- [ ] A superseded review pipeline run cancels correctly — only if `cancelInProgress: true` was enabled (see [Step 3](#step-3-optional-enable-cancel-in-progress-for-review-pipelines))
- [ ] (If Envoy Gateway was enabled) the stage details **Networking** tab lists Gateways and HTTPRoutes, and the webhook still reaches the EventListener
- [ ] (If krci-audit was enabled) **Triggered By** resolves on a new PipelineRun, and an **OIDC administrator** can open **Administration → Audit Events** (see [Step 5](#step-5-optional-enable-kubernetes-audit-trail))
- [ ] (If notifications were enabled) the header bell receives a test or real platform event (see [Step 6](#step-6-optional-enable-in-app-notifications))
- [ ] (If the review reporter is enabled) a finished review PipelineRun updates the pull or merge request comment (see [Step 7](#step-7-informational-review-pipeline-reporter))
