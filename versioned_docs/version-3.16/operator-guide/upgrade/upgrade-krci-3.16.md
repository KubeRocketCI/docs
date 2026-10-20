---
title: "Upgrade KubeRocketCI v3.15 to 3.16"
description: "Guide on upgrading KubeRocketCI to version 3.16. Covers read-only developer access to Tekton Pipelines, Tasks, TaskRuns, Triggers, and TriggerBindings in the platform namespace, and post-upgrade verification."
sidebar_label: "v3.15 to 3.16"
---
<!-- markdownlint-disable MD025 -->
<!--
Adding a 3.16 change to this guide:
- Add a `## Step N. (Classification) Title` step. Order steps by urgency: breaking changes first, after Step 1.
- Renumber steps contiguously. Step 1 stays Verify Prerequisites; the last three stay Breaking Changes and Deprecations, Upgrade, Post-Upgrade Verification.
- Update every `#step-N-...` anchor after renumbering: Breaking Changes bullets and Post-Upgrade Verification items.
- Breaking change: add a bullet to Breaking Changes and Deprecations linking to its step.
- Required step: add a Post-Upgrade Verification item linking to its step.
- Extend the front matter `description` with the new topic.
- Run `npm run build` and check the log: broken anchors are reported as warnings, not errors.
- Link to this guide from other pages by page URL, not by step anchor.
-->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Upgrade KubeRocketCI v3.15 to 3.16

<head>
  <link rel="canonical" href="https://docs.kuberocketci.io/docs/operator-guide/upgrade/upgrade-krci-3.16" />
</head>

This section provides detailed instructions for upgrading KubeRocketCI to version 3.16. Follow the steps and requirements outlined below:

:::important
Back up the KubeRocketCI environment before starting the upgrade procedure. Review every `(Required)` step and the [Breaking Changes and Deprecations](#step-3-informational-breaking-changes-and-deprecations) summary before upgrading.
:::

<!-- Release-time: add the platform dependency note (cert-manager, GitFusion, Tekton Results, Tekton Pipelines) once the 3.16 requirements are confirmed. -->

## Step 1. (Required) Verify Prerequisites

Confirm the platform is currently on a **3.15.x** release before upgrading. The `CHART` column shows the installed `edp-install` version:

```bash title="Check the installed chart version"
helm list -n <namespace>
```

<!-- Release-time: verify cluster and dependency versions (cert-manager, Tekton Pipelines, Tekton Results, GitFusion) against the 3.16 requirements. -->

## Step 2. (Required) Review Developer Permissions for Tekton Resources (edp-install)

In 3.16, the `tenant-developer` Role that `edp-install` binds to the `${platform}-oidc-developers` group in the platform namespace makes Tekton definitions read-only for developers. Pipelines, Tasks, Triggers, and TriggerBindings are platform configuration. The platform no longer allows modifying them directly on the cluster, so every team works from an auditable, single source of truth: a reviewed Git repository applied through GitOps (for example, Argo CD), instead of hand-applied resources that drift from Git. Developers keep everything they need to run their work: they start PipelineRuns and, new in 3.16, can stop them.

:::important
After the upgrade, a developer who edits a Pipeline or Task, or creates a Trigger, TriggerBinding, or TaskRun in the platform namespace, receives a `Forbidden` error. In the KubeRocketCI portal, the **Edit** action on Pipelines and Tasks is no longer available to developers. Inform developer teams before upgrading.
:::

Developer permissions on Tekton resources in the platform namespace:

| Resource                                       | 3.15                                                          | 3.16                                                      |
| ---------------------------------------------- | ------------------------------------------------------------- | --------------------------------------------------------- |
| PipelineRuns                                   | `get`, `list`, `watch`, `create`                              | `get`, `list`, `watch`, `create`, `patch` (stop a run)    |
| TaskRuns                                       | `get`, `list`, `watch`, `create`                              | `get`, `list`, `watch`                                    |
| Pipelines, Tasks                               | `get`, `list`, `watch`, `create`, `update`, `patch`, `delete` | `get`, `list`, `watch`                                    |
| Triggers, TriggerBindings                      | `get`, `list`, `watch`, `create`                              | `get`, `list`, `watch`                                    |
| TriggerTemplates, EventListeners, Interceptors | `get`, `list`, `watch`                                        | `get`, `list`, `watch` (unchanged)                        |

Deleting PipelineRuns has required administrator rights since 3.14. This release does not change it.

**What keeps working for developers:**

- Starting pipelines: **Build**, **Run again**, **Run with params**, deployments, and PipelineRuns created with `kubectl`. The Tekton controller creates the TaskRuns of a PipelineRun, so starting a pipeline does not require TaskRun permissions.
- Stopping a running PipelineRun (new in 3.16).
- Viewing Pipelines, Tasks, PipelineRuns, TaskRuns, triggers, and build logs; approving or rejecting ApprovalTasks; all Build and Deploy actions.

The `${platform}-oidc-admins` and `${platform}-oidc-viewers` groups are not affected. In environment namespaces, developers keep the `admin` ClusterRole, so their access there does not change.

**Action is required only if developers modify Tekton definitions on the cluster**, for example if they:

- edit Pipelines or Tasks in the KubeRocketCI portal or with `kubectl`;
- apply their own Triggers or TriggerBindings, as described in [Add Custom Tekton Triggers](../../user-guide/customize-ci-triggers.md);
- create TaskRuns directly, for example with `tkn task start`.

Choose one of:

- **Move the definitions to Git (recommended):** keep them in a custom Tekton library repository and let Argo CD apply them to the platform namespace, as described in [Deliver Custom Tekton Pipelines to the Cluster](../../use-cases/custom-pipelines-flow.md#deliver-custom-tekton-pipelines-to-the-cluster). Every change is then reviewed, versioned, and reproducible.

- **Restore Pipeline and Task editing deliberately:** add a Role and a RoleBinding through the `edp-install` `extraObjects` value. Grant only the verbs the team needs. Edits made this way are not tracked in Git, and the next Helm upgrade or Argo CD sync reverts changes to chart-managed objects. If `global.developerGroupName` is set, use its value as the subject name. When using [edp-cluster-add-ons](https://github.com/epam/edp-cluster-add-ons), nest the block under `edp-install:`:

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
            name: '{{ .Release.Namespace }}-oidc-developers'
    ```

To confirm the effective permissions after the upgrade, impersonate the developer group. Replace the group name if `global.developerGroupName` is set:

```bash title="Check developer permissions on Tekton resources"
kubectl auth can-i --list -n <platform-namespace> \
  --as=test-user --as-group=<platform-namespace>-oidc-developers | grep tekton.dev
```

The `pipelineruns.tekton.dev` row lists `[get list watch create patch]`. The Pipeline, Task, TaskRun, and `triggers.tekton.dev` rows list `[get list watch]`. For the complete permission model, see [Tekton Pipeline Permissions](../auth/platform-auth-model.md#tekton-pipeline-permissions).

## Step 3. (Informational) Breaking Changes and Deprecations

- Developers have read-only access to Tekton Pipelines, Tasks, TaskRuns, Triggers, and TriggerBindings in the platform namespace. Changes to these definitions go through a reviewed Git repository applied through GitOps — see [Step 2](#step-2-required-review-developer-permissions-for-tekton-resources-edp-install).

## Step 4. Upgrade

<!-- Release-time: confirm the 3.16.0 chart version against edp-install Chart.yaml at the v3.16.0 tag. -->

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
  version: 3.16.0
  appVersion: 3.16.0
  dependencies:
    - name: edp-install
      version: 3.16.0
      repository: https://epam.github.io/edp-helm-charts/stable
  ```

  **2.** Apply any optional values changes from Step 2 to `clusters/core/addons/kuberocketci/values.yaml`.

  **3.** Commit and push the changes. ArgoCD will detect the diff and sync automatically, or trigger a manual sync from the ArgoCD UI.

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

  </TabItem>
</Tabs>

The upgrade applies the updated CRDs and the updated `tenant-developer` Role in the platform namespace. Allow 3-5 minutes for all pods to reach the Running state.

## Step 5. Post-Upgrade Verification

```bash title="Verify pods and component versions"
# All pods should return to Running
kubectl get pods -n <namespace>

# Confirm the platform components are on their 3.16 image tags
kubectl get deployment -n <namespace> \
  -o custom-columns=NAME:.metadata.name,IMAGE:'.spec.template.spec.containers[0].image'
```

Then verify in the browser and cluster:

- [ ] Portal loads at `https://<PORTAL_URL>` and authentication completes
- [ ] Pipeline history and live logs load (requires Tekton Results)
- [ ] A member of the developer group can start a PipelineRun and stop a running one from the portal (see [Step 2](#step-2-required-review-developer-permissions-for-tekton-resources-edp-install))
- [ ] The **Edit** action on Pipelines and Tasks is unavailable to a member of the developer group, unless editing was restored through `extraObjects` (see [Step 2](#step-2-required-review-developer-permissions-for-tekton-resources-edp-install))
- [ ] For the developer group, `kubectl auth can-i create pipelineruns` returns `yes` and `kubectl auth can-i update pipelines` returns `no` in the platform namespace (see [Step 2](#step-2-required-review-developer-permissions-for-tekton-resources-edp-install))
