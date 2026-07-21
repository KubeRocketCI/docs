---
title: "Upgrade KubeRocketCI v3.13 to 3.14"
description: "Guide on upgrading KubeRocketCI to version 3.14. Covers optional Envoy Gateway / HTTPRoute exposure (off by default), cancel-in-progress review pipelines, clusterName configuration for pipeline URLs, Service Account token login, and post-upgrade verification."
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

## Step 5. (Informational) New Portal Capabilities

`krci-portal` `0.6.0` adds the following capabilities, which require **no upgrade action**:

- **Service Account token login** — operators can sign in with a Kubernetes Service Account token; OIDC configuration is now optional.
- **Expanded Kubernetes mode** — redesigned cluster overview, Custom Resource and CRD browsing for users without cluster-wide CRD access, and scale / restart / rollback actions for Deployments, StatefulSets, and DaemonSets.
- **GitLab CI** — a dedicated pipeline list and log viewer for codebases with `ciTool: gitlab`.
- **Networking tab** on stage details showing Gateways, HTTPRoutes, and Ingresses, plus HTTPRoute-derived external URLs in the Applications table.
- **Admin audit events** page (role-based access control, date-range filter) and a **Monitoring** tab on PipelineRun details with per-step CPU and memory metrics from Prometheus.
- **Triggered By** actor on PipelineRun details, current deployed version in the CD stage deploy dropdown, a branch column on the applications table, and a stale badge for branches missing in git.

## Step 6. (Informational) Resource Migrations

**No Custom Resource migrations or configuration-schema / label changes are required for this upgrade.** `Codebase`, `CodebaseBranch`, `CDPipeline`, `Stage`, Tekton resources, and Argo CD `ApplicationSet` definitions created under 3.13 remain valid under 3.14. The 3.14 chart applies the updated CRDs in place, and existing resources are reconciled without manual conversion.

If you maintain **custom** Tekton pipelines or resource templates, no parameter or API changes are required in 3.14. The `tekton.dev/v1` migration and the security-task parameter renames were completed in 3.13 — see [Upgrade v3.12 to 3.13](./upgrade-krci-3.13.md).

## Step 7. (Informational) Breaking Changes and Deprecations

There are **no new breaking changes** in 3.14. Deprecations carried over from 3.13 remain in effect:

- `edp-headlamp` stays disabled and is replaced by `krci-portal`. If you completed the 3.13 portal migration, no further action is needed.

## Step 8. Upgrade

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

  **2.** Apply any optional values changes from Steps 2-4 to `clusters/core/addons/kuberocketci/values.yaml`.

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

## Step 9. Post-Upgrade Verification

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
