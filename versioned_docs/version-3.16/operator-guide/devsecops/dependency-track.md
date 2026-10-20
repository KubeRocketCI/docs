---
title: "Integrate Dependency-Track"
description: "Guide on installing and integrating Dependency-Track with KubeRocketCI for enhanced vulnerability management and software component analysis."
sidebar_label: "Integrate Dependency-Track"
---
<!-- markdownlint-disable MD025 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Integrate Dependency-Track

<head>
  <link rel="canonical" href="https://docs.kuberocketci.io/docs/operator-guide/devsecops/dependency-track" />
</head>

This documentation guide provides comprehensive instructions for installing and integrating Dependency-Track with the KubeRocketCI.

:::note
  For details on how KubeRocketCI pipelines generate SBOMs with cdxgen and upload them to Dependency-Track, refer to [Security Scanning Pipelines](./security-pipelines.md).
:::

## Prerequisites

- Kubectl version 1.34.0+ is installed. Please refer to the [Kubernetes official website](https://kubernetes.io/releases/download/) for details.
- [Helm](https://helm.sh) version 3.19.0+ is installed. Please refer to the [Helm page](https://github.com/helm/helm/releases) on GitHub for details.

## Installation

To install Dependency-Track use [KubeRocketCI addons](../add-ons-overview.md) approach.

## Configuration

1. Open **Administration** -> **Access Management** -> **Teams**. Click **Create Team** -> **Automation** and click **Create**.

2. Click **+** in **Permissions** and add:

    ```bash
    BOM_UPLOAD
    PROJECT_CREATION_UPLOAD
    VIEW_PORTFOLIO
    ```

3. Click **+** in **API keys** to create token:

    ![Dependency-Track settings](../../assets/operator-guide/devsecops/dependency-track-token.png "Dependency-Track settings")

4. Provision secrets using a manifest, Portal, or with the externalSecrets operator:

<Tabs
  defaultValue="portal"
  values={[
    {label: 'UI Portal', value: 'portal'},
    {label: 'Manifests', value: 'manifests'},
    {label: 'External Secrets Operator', value: 'externalsecret'},
  ]}>

  <TabItem value="portal">
  Go to the **Portal** open **Configuration** -> **SECURITY** -> **DEPENDENCYTRACK**. Click **+ ADD INTEGRATION** fill fields `Quick Link URL`, `URL` and `Token` click the `save` button.

  ![Dependency-Track update manual secret](../../assets/operator-guide/devsecops/dependency-track-secret.png "Dependency-Track update manual secret")
  </TabItem>

  <TabItem value="manifests">

  ```yaml
  apiVersion: v1
  kind: Secret
  metadata:
    name: ci-dependency-track
    namespace: krci
    labels:
      app.edp.epam.com/secret-type: dependency-track
      app.edp.epam.com/integration-secret: "true"
  stringData:
    token: <dependency-track-token>
    url: <dependency-track-api-url>
  type: Opaque
  ```

  </TabItem>

  <TabItem value="externalsecret">
  Store Dependency-Track URL and Token in the AWS Parameter Store with the following format:

  ```yaml
  "ci-dependency-track":
  {
    "token": "XXXXXXXXXXXX",
    "url": "https://dependency-track.example.com"
  }
  ```

  Go to the **KubeRocketCI Portal** -> **Configuration** -> **Security** -> **DependencyTrack** see the secret managed by the `Managed by External Secret`:

  ![Dependency-Track managed by external secret operator](../../assets/operator-guide/devsecops/defectdojo-external-secret.png "Dependency-Track managed by external secret operator")

  More detail on External Secrets Operator Integration can be found on [the following page](../secrets-management/external-secrets-operator-integration.md)
  </TabItem>

</Tabs>

The `ci-dependency-track` secret is used by the security pipelines to upload SBOMs.

## Configure the KubeRocketCI Portal

The KubeRocketCI Portal and the `krci sca` CLI commands read Dependency-Track with a separate, read-only API key. The pipeline key above is not enough: Dependency-Track requires `VIEW_VULNERABILITY` to list findings and `VIEW_POLICY_VIOLATION` to list policy violations, and answers `403` without them.

1. Open **Administration** -> **Access Management** -> **Teams**. Click **Create Team**, name it `krci-portal`, and click **Create**.

2. Click **+** in **Permissions** and add:

    ```bash
    VIEW_PORTFOLIO
    VIEW_VULNERABILITY
    VIEW_POLICY_VIOLATION
    ```

3. Click **+** in **API keys** to create an API key for the team.

4. Set the Dependency-Track URL in the `krci-portal` values:

    ```yaml
    krci-portal:
      configEnv:
        DEPENDENCY_TRACK_URL: https://dependency-track.example.com
        # Optional: browser-facing URL, when it differs from DEPENDENCY_TRACK_URL
        DEPENDENCY_TRACK_WEB_URL: https://dependency-track.example.com
    ```

5. Add the API key to the Portal secret as `DEPENDENCY_TRACK_API_KEY` (see [Create the portal-secret Kubernetes Secret](../upgrade/upgrade-krci-3.13.md#62-create-the-portal-secret-kubernetes-secret)). With the External Secrets Operator, store it under the Portal `eso.secretPath`. Restart the Portal to apply the key.

6. Verify the integration: `krci sca list` lists the Dependency-Track projects, and `krci sca findings <codebase>` lists the findings of a codebase after its first security scan.

## Related Articles

* [Install External Secrets Operator](../secrets-management/install-external-secrets-operator.md)
* [External Secrets Operator Integration](../secrets-management/external-secrets-operator-integration.md)
* [Cluster Add-Ons Overview](../add-ons-overview.md)
* [Dependency-Track Microsoft Entra OIDC SSO](../microsoft-entra/dependency-track-authentication.md)
