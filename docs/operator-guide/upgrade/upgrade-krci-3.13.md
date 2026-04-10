---
title: "Upgrade KubeRocketCI v3.12 to 3.13"
description: "Guide on upgrading KubeRocketCI to version 3.13. Covers migrating from edp-headlamp to krci-portal, Tekton v1 API requirements, security pipeline parameter renames, and CodeMie removal."
sidebar_label: "v3.12 to 3.13"
---
<!-- markdownlint-disable MD025 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Upgrade KubeRocketCI v3.12 to 3.13

<head>
  <link rel="canonical" href="https://docs.kuberocketci.io/docs/operator-guide/upgrade/upgrade-krci-3.13" />
</head>

This section provides detailed instructions for upgrading KubeRocketCI to version 3.13. Follow the steps and requirements outlined below:

:::important
We suggest backing up the KubeRocketCI environment before starting the upgrade procedure.
:::

:::important
**GitFusion** is now a mandatory platform dependency (`gitfusion.enabled: true` by default). It is required by `krci-portal` for repository and branch selection, Pull Request / Merge Request browsing, GitLab pipeline triggering, and pipeline listing. Ensure GitFusion is reachable from the portal pod and that `GITFUSION_URL` is set in `krci-portal` configuration.
:::

:::important
**Tekton Results** must be deployed and `TEKTON_RESULTS_URL` must be configured for the pipeline history page, live logs, and activity charts in `krci-portal`. The portal starts without it, but all pipeline history pages return errors until this is configured.
:::

:::warning
All Tekton resources (Tasks, Pipelines, TriggerTemplates) have been migrated from `tekton.dev/v1beta1` to `tekton.dev/v1`. Clusters running Tekton Pipelines older than **v0.44** cannot apply these manifests — the upgrade will fail. Verify your Tekton Pipelines version before proceeding (see [Step 1](#step-1-verify-tekton-pipelines-version)).
:::

:::warning
Three parameter names were renamed in the security scan tasks (`security`, `image-scan`, `image-scan-remote`). If you maintain **custom security TriggerTemplates** that pass the old names, security findings will be uploaded to DefectDojo under a blank product name or the upload will fail. Build and review pipelines are **not affected**. See [Step 2](#step-2-optional-update-custom-security-triggertemplates) for detection and migration.
:::

## Step 1. (Required) Verify Tekton Pipelines Version

KubeRocketCI 3.13 migrates all Tekton resources to the `tekton.dev/v1` API, which became GA in Tekton Pipelines **v0.44**. Clusters running an older version cannot apply the updated manifests.

Check your current Tekton Pipelines version:

```bash title="Check Tekton Pipelines version"
kubectl get deployment tekton-pipelines-controller -n tekton-pipelines \
  -o jsonpath='{.spec.template.spec.containers[0].image}'
```

If the image tag is older than `v0.44.0`, upgrade Tekton Pipelines before running the Helm upgrade. Refer to the [Tekton Pipelines release page](https://github.com/tektoncd/pipeline/releases) for upstream upgrade instructions, or deploy the managed Tekton stack from the [edp-cluster-add-ons](https://github.com/epam/edp-cluster-add-ons/tree/main/clusters/core/addons/tekton) repository.

## Step 2. (Optional) Update Custom Security TriggerTemplates

:::note
This step only affects users who maintain **custom security TriggerTemplates** that pass parameters to the `security`, `image-scan`, or `image-scan-remote` tasks. Standard build and review pipelines are not affected — they already used `CODEBASE_NAME`.
:::

Three parameter names were renamed in the security scan tasks to align naming conventions across the platform:

| Old name         | New name          | Affected tasks                                  |
|------------------|-------------------|-------------------------------------------------|
| `PROJECT_NAME`   | `CODEBASE_NAME`   | `security`, `image-scan`                        |
| `COMPONENT_NAME` | `CODEBASE_NAME`   | `image-scan-remote`                             |
| `PROJECT_BRANCH` | `CODEBASE_BRANCH` | `security`                                      |

Run the following command to detect affected custom TriggerTemplates in your cluster:

```bash title="Detect custom TriggerTemplates with old parameter names"
kubectl get triggertemplates -A -o yaml | grep -E "COMPONENT_NAME|PROJECT_NAME|PROJECT_BRANCH"
```

If this returns results, update the affected TriggerTemplates as shown below:

<Tabs
  defaultValue="3.13"
  values={[
    {label: '3.12', value: '3.12'},
    {label: '3.13', value: '3.13'}
  ]}>

  <TabItem value="3.12">
  ```yaml title="Custom security TriggerTemplate (3.12)"
  apiVersion: triggers.tekton.dev/v1beta1
  kind: TriggerTemplate
  metadata:
    name: custom-github-security-template
  spec:
    params:
      - name: gitrevision
      - name: reponame
    resourcetemplates:
      - apiVersion: tekton.dev/v1beta1
        kind: PipelineRun
        metadata:
          generateName: github-security-$(tt.params.reponame)-
        spec:
          pipelineRef:
            name: github-security-scan
          params:
            - name: git-source-url
              value: $(tt.params.gitcloneurl)
            - name: git-source-revision
              value: $(tt.params.gitrevision)
            - name: PROJECT_NAME
              value: $(tt.params.reponame)
            - name: PROJECT_BRANCH
              value: $(tt.params.gitrevision)
  ```
  </TabItem>

  <TabItem value="3.13">
  ```yaml title="Custom security TriggerTemplate (3.13)"
  apiVersion: triggers.tekton.dev/v1beta1
  kind: TriggerTemplate
  metadata:
    name: custom-github-security-template
  spec:
    params:
      - name: gitrevision
      - name: reponame
    resourcetemplates:
      - apiVersion: tekton.dev/v1
        kind: PipelineRun
        metadata:
          generateName: github-security-$(tt.params.reponame)-
        spec:
          pipelineRef:
            name: github-security-scan
          params:
            - name: git-source-url
              value: $(tt.params.gitcloneurl)
            - name: git-source-revision
              value: $(tt.params.gitrevision)
            - name: CODEBASE_NAME
              value: $(tt.params.reponame)
            - name: CODEBASE_BRANCH
              value: $(tt.params.gitrevision)
  ```
  </TabItem>
</Tabs>

## Step 3. (Required if applicable) Remove CodeMie Configuration

CodeMie integration has been removed from both `edp-install` and `codebase-operator`. There is no migration path.

Check whether your current values include CodeMie configuration:

```bash title="Check for CodeMie in current values"
helm get values <release-name> -n <namespace> | grep -A5 -i codemie
```

If the command returns any output, remove the `codemie` block from your `values.yaml` before running the upgrade. Leaving it in place will cause the Helm upgrade to fail with an unknown values error.

## Step 4. (Required if applicable) Fix Non-Standard ciTool Values on Codebase CRs

The `ciTool` field on the `Codebase` CRD now enforces an enum: only `tekton` and `gitlab` are accepted. Existing CRs with other values (such as `jenkins` or an empty string) will continue to exist after the upgrade, but any subsequent `kubectl apply` or edit on those CRs will be rejected.

Detect affected Codebase CRs:

```bash title="Detect Codebase CRs with non-standard ciTool values"
kubectl get codebases -A \
  -o jsonpath='{range .items[*]}{.metadata.namespace}/{.metadata.name}: {.spec.ciTool}{"\n"}{end}' \
  | grep -v ": tekton" | grep -v ": gitlab"
```

For each affected Codebase, patch `ciTool` to a valid value:

```bash title="Patch ciTool to a valid value"
kubectl patch codebase <name> -n <namespace> --type=merge \
  -p '{"spec":{"ciTool":"tekton"}}'
```

## Step 5. (Required) Deploy Tekton Results

Tekton Results provides the backend for the pipeline history page, live logs, and activity charts in `krci-portal`. It must be deployed before the portal upgrade.

Tekton Results requires a **PostgreSQL 14+** database. You are free to use any PostgreSQL provider:

- **In-cluster via PGO** (Crunchy Data Postgres Operator) — recommended for self-managed clusters; add-on manifests are provided in `edp-cluster-add-ons`
- **Cloud-managed database** — AWS RDS, Azure Database for PostgreSQL, Google Cloud SQL, or any other managed PostgreSQL service

### Option A: In-cluster PostgreSQL via PGO

If the Crunchy Data Postgres Operator is not yet installed, deploy it from [edp-cluster-add-ons](https://github.com/epam/edp-cluster-add-ons/tree/main/clusters/core/addons/tekton) first, then apply the Tekton Results manifests:

```bash title="Deploy Tekton Results with PGO"
kubectl apply -f clusters/core/addons/tekton/results-pg.yaml
kubectl apply -f clusters/core/addons/tekton/results.yaml
kubectl apply -f clusters/core/addons/tekton/results-clean-old-logs-cronjob.yaml
```

Wait for PostgreSQL to be ready:

```bash title="Wait for PostgreSQL pod"
kubectl wait --for=condition=Ready pod \
  -l postgres-operator.crunchydata.com/cluster=results \
  -n tekton-pipelines --timeout=300s
```

### Option B: Cloud-managed PostgreSQL

Create a PostgreSQL 14+ database on your cloud provider of choice, then configure Tekton Results to connect to it by supplying the connection string in the Tekton Results deployment. Refer to the [Tekton Results documentation](https://github.com/tektoncd/results) for the database configuration parameters.

### Verify Tekton Results is running

```bash title="Verify Tekton Results pods"
kubectl get pods -n tekton-pipelines | grep tekton-results
```

The internal service URL to use in `TEKTON_RESULTS_URL` (for in-cluster portal deployments):

```
http://tekton-results-api-service.tekton-pipelines:8080
```

:::important
**Create performance indexes on the Tekton Results database.** The default schema has no indexes beyond primary keys, causing sequential scans that degrade performance under load. After the database is ready, apply the required indexes. See the [Tekton Results PostgreSQL performance indexes guide](https://github.com/epam/edp-cluster-add-ons/blob/main/clusters/core/addons/tekton/README.md) in `edp-cluster-add-ons` for the exact SQL statements and instructions for both PGO and cloud-managed databases.
:::

## Step 6. (Required) Migrate from edp-headlamp to krci-portal

`edp-headlamp` is disabled by default in 3.13 and replaced by `krci-portal`. All portal configuration must be migrated to the new `krci-portal` values.

### 6.1. Update OIDC Client Registration

You can **reuse the existing OIDC client** registered for `edp-headlamp`. The client ID and client secret remain the same. Update the redirect URIs to match the new portal paths:

| Setting                  | Old value (edp-headlamp)                        | New value (krci-portal)                         |
|--------------------------|-------------------------------------------------|-------------------------------------------------|
| Redirect URI             | `https://<PORTAL_URL>/oidc-callback`            | `https://<PORTAL_URL>/auth/callback`            |
| Post-logout Redirect URI | `https://<PORTAL_URL>/`                         | `https://<PORTAL_URL>/login`                    |
| PKCE                     | Not required                                    | Enable **S256** (see note below)                |
| Scopes                   | `openid`, `profile`, `email`                    | `openid`, `profile`, `email` *(unchanged)*      |

If the identity provider reports **invalid redirect URI** on login or logout, register additional valid redirect URIs as needed — for example `https://<PORTAL_URL>`, `https://<PORTAL_URL>/auth/callback`, and `https://<PORTAL_URL>/login`. As a single catch-all in Keycloak (and similar providers that allow wildcards), you can use `https://<PORTAL_URL>/*`.

:::warning
If the OIDC client is reconciled from Git by the Keycloak operator (for example via `kuberocketci-rbac` in [edp-cluster-add-ons](https://github.com/epam/edp-cluster-add-ons/blob/main/clusters/core/addons/kuberocketci-rbac/templates/kubernetes/keycloak-client.yaml)), manual edits in the Keycloak UI will be overwritten. Update `redirectUris` (and related fields) in that manifest — or your fork/overlay — so the desired URIs persist across reconciles.
:::

:::note
**PKCE** (Proof Key for Code Exchange, RFC 7636) binds the authorization code to the client that started the login, which reduces risk if an authorization code is intercepted. The portal is configured with `OIDC_CODE_CHALLENGE_METHOD: S256` (SHA-256 code challenge). In your IdP, enable PKCE for this client and use the **S256** method where the UI offers it.
:::

:::note
**Azure AD** users: the portal automatically normalizes Azure AD's array-of-JSON-strings groups format — no additional provider configuration is needed.
:::

### 6.2. Create the portal-secret Kubernetes Secret

The portal requires a Kubernetes Secret named `portal-secret` to exist before the pod starts:

```bash title="Create portal-secret"
kubectl create secret generic portal-secret \
  --namespace <krci-namespace> \
  --from-literal=SERVER_SECRET="$(openssl rand -base64 32)" \
  --from-literal=OIDC_CLIENT_SECRET="<client-secret-from-oidc-provider>"
```

To also enable the SonarQube SAST and Dependency Track SCA pages, add their credentials:

```bash title="Create portal-secret with optional integrations"
kubectl create secret generic portal-secret \
  --namespace <krci-namespace> \
  --from-literal=SERVER_SECRET="$(openssl rand -base64 32)" \
  --from-literal=OIDC_CLIENT_SECRET="<oidc-client-secret>" \
  --from-literal=SONAR_TOKEN="squ_xxxxxxxxxxxxxxxxxxxx" \
  --from-literal=DEPENDENCY_TRACK_API_KEY="odt_xxxxxxxxxxxxxxxxxxxx"
```

| Key                       | Purpose                                                                              | Required |
|---------------------------|--------------------------------------------------------------------------------------|----------|
| `SERVER_SECRET`           | Session cookie encryption (min 32 chars). Changing this invalidates active sessions. | Yes      |
| `OIDC_CLIENT_SECRET`      | OIDC client secret from your identity provider                                       | Yes      |
| `SONAR_TOKEN`             | SonarQube personal/analysis token (`Browse` + `View Issues` permissions sufficient)  | Optional |
| `DEPENDENCY_TRACK_API_KEY`| From Dependency Track → Administration → API Keys                                    | Optional |

:::note
If using the External Secrets Operator (`eso.enabled: true`), the chart creates an `ExternalSecret` instead of reading this Secret directly. Ensure the secret path `eso.secretPath` (default: `/infra/core/addons/krci-portal`) contains all required keys.
:::

### 6.3. Update values.yaml

Add the `krci-portal` section, configure GitFusion and Tekton Results URLs, and disable `edp-headlamp`:

```yaml title="values.yaml"
# Disable the deprecated portal
edp-headlamp:
  enabled: false

# GitFusion — mandatory dependency, required by krci-portal
gitfusion:
  enabled: true

# New portal (replaces edp-headlamp)
krci-portal:
  enabled: true

  ingress:
    enabled: true
    className: nginx
    annotations:
      cert-manager.io/cluster-issuer: letsencrypt-prod
    hosts:
      - host: portal.example.com
        paths:
          - path: /
            pathType: Prefix
    tls:
      - secretName: portal-tls
        hosts:
          - portal.example.com

  configEnv:
    API_PREFIX: /api
    SERVER_PORT: "3000"
    PORTAL_URL: https://portal.example.com        # must match ingress host exactly
    OIDC_ISSUER_URL: https://keycloak.example.com/realms/shared
    OIDC_CLIENT_ID: portal                         # reuse existing edp-headlamp client ID
    OIDC_SCOPE: openid profile email
    OIDC_CODE_CHALLENGE_METHOD: S256
    TEKTON_RESULTS_URL: http://tekton-results-api-service.tekton-pipelines:8080
    GITFUSION_URL: http://gitfusion.<krci-namespace>:8080
    DEFAULT_CLUSTER_NAME: core
    DEFAULT_CLUSTER_NAMESPACE: <krci-namespace>
    # Optional — enables SAST/SCA pages:
    SONAR_HOST_URL: https://sonar.example.com/    # trailing slash required
    SONAR_WEB_URL: https://sonar.example.com/
    DEPENDENCY_TRACK_URL: https://deptrack.example.com
    DEPENDENCY_TRACK_WEB_URL: https://deptrack.example.com
```

:::warning
`PORTAL_URL` in `configEnv` must exactly match the ingress hostname. A mismatch causes OIDC redirect URI validation to fail and users cannot log in.
:::

:::note
`SONAR_HOST_URL` requires a trailing slash. `DEPENDENCY_TRACK_URL` does not.
:::

## Step 7. (Informational) DefectDojo Engagement Naming Change

Security scan engagements are now isolated per branch. The engagement name format has changed:

| Scan type            | Old format (3.12)    | New format (3.13)                              |
|----------------------|----------------------|------------------------------------------------|
| Code security        | `code-security`      | `code-security-<branch>` (e.g. `code-security-main`) |
| Container image scan | `container-security` | `image:<image-name>` (e.g. `image:myapp`)      |

On the first pipeline run after upgrade, DefectDojo will create new per-branch engagements. Historical findings under the old unified engagement names are automatically closed (`close_old_findings=true`) — they are **not deleted** and remain as an audit trail.

If you have DefectDojo dashboards or reports referencing the old engagement names (`code-security`, `container-security`), update them to the new per-branch format.

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
  version: 3.13.1
  appVersion: 3.13.1
  dependencies:
    - name: edp-install
      version: 3.13.1
      repository: https://epam.github.io/edp-helm-charts/stable
  ```

  **2.** Apply the values changes from [Step 6.3](#63-update-valuesyaml) to `clusters/core/addons/kuberocketci/values.yaml`.

  **3.** Commit and push the changes. ArgoCD will detect the diff and sync automatically, or trigger a manual sync from the ArgoCD UI.

  </TabItem>

  <TabItem value="helm">

  For environments managed directly with Helm:

  ```bash title="Run the Helm upgrade"
  # Update the Helm repository
  helm repo update

  # Confirm the target chart version is available
  helm search repo epamedp/edp-install --versions | grep 3.13.1

  # Preview changes against your values
  helm diff upgrade <release-name> epamedp/edp-install \
    --version 3.13.1 \
    -f values.yaml \
    -n <namespace>

  # Run the upgrade
  helm upgrade --install <release-name> epamedp/edp-install \
    --version 3.13.1 \
    -f values.yaml \
    -n <namespace> \
    --timeout 10m \
    --wait
  ```

  </TabItem>
</Tabs>

The upgrade applies updated CRDs, deploys `krci-portal`, updates GitFusion and all operators, and disables `edp-headlamp`. Allow 3–5 minutes for all pods to reach Running state.

## Step 9. Post-Upgrade Verification

Run the following commands to verify the upgrade:

```bash title="Verify pods and deployments"
# Check all pods are running
kubectl get pods -n <namespace>

# Verify Tekton v1 resources were applied
kubectl get pipelines -A | head -10

# Verify krci-portal is running
kubectl get deployment -n <namespace> | grep krci-portal

# Verify gitfusion is running
kubectl get deployment -n <namespace> | grep gitfusion
```

Then verify in the browser:

- [ ] Portal loads at `https://<PORTAL_URL>`
- [ ] OIDC authentication completes (redirects back to portal after login)
- [ ] **Projects** page is visible (formerly "Components")
- [ ] Pipeline history page loads (requires Tekton Results)
- [ ] A deployed application shows image digest in environment details
- [ ] Pull Request / Merge Request tab visible on a project (requires GitFusion)
- [ ] DefectDojo: after the first security pipeline run, new per-branch engagements appear (e.g. `code-security-main`)
- [ ] SonarQube SAST page loads (if `SONAR_HOST_URL` is configured)
- [ ] Dependency Track SCA page loads (if `DEPENDENCY_TRACK_URL` is configured)
