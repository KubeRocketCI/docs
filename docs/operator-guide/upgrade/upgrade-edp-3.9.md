---

title: "Upgrade KubeRocketCI v3.8 to 3.9"
description: "Guide on upgrading KubeRocketCI to version 3.9, including steps for updating Custom Resource Definitions and performing the upgrade procedure."
sidebar_label: "Upgrade KubeRocketCI to 3.9"

---
<!-- markdownlint-disable MD025 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Upgrade KubeRocketCI v3.8 to 3.9

<head>
  <link rel="canonical" href="https://docs.kuberocketci.io/docs/operator-guide/upgrade/upgrade-edp-3.9/" />
</head>

:::important
  We suggest backing up the KubeRocketCI environment before starting the upgrade procedure.
:::

This section provides detailed instructions for upgrading the KubeRocketCI to version 3.9.0. Follow the steps and requirements outlined below:

:::warning
  [edp-install](https://github.com/epam/edp-install/tree/v3.9.0) version v3.9 is not support Kiosk as tenancy engine. Please migrate to Capsule engine or disable this options.
:::

1. (Optional) Migrate from Kiosk tenancy engine.

    <Tabs
      defaultValue="capsule"
      values={[
        {label: 'Capsule', value: 'capsule'},
        {label: 'Disable tenancy engine', value: 'disable'}
      ]}>

      <TabItem value="capsule">
      1. Take look how to install Capsule using [addons](https://github.com/epam/edp-cluster-add-ons/tree/main/clusters/core/addons/capsule).
      2. [Integrate Capsule](https://epam.github.io/edp-install/operator-guide/capsule) with KubeRocketCI.
      3. Update edp-install values file:

          ```yaml title="values.yaml"
          ...
          cd-pipeline-operator:
            tenancyEngine: "capsule"
          ...
          ```
      </TabItem>

      <TabItem value="disable">
      1. To disable tenancy engine update edp-install values file:

          ```yaml title="values.yaml"
          ...
          cd-pipeline-operator:
            tenancyEngine: "none"
          ...
          ```
      </TabItem>
    </Tabs>

2. (Optional) Align Keycloak integration.

    In KubeRocketCI version 3.9.0, the Keycloak configuration procedure has been altered in the [values](https://github.com/epam/edp-install/blob/v3.9.0/deploy-templates/values.yaml#L461) file. Please be attentive and align the configuration for your own use case.

    <Tabs
      defaultValue="3.8.1"
      values={[
        {label: '3.8.1', value: '3.8.1'},
        {label: '3.9.0', value: '3.9.0'}
      ]}>

      <TabItem value="3.8.1">
      ```yaml title="values.yaml"
      sso:
        # -- Install OAuth2-proxy and Keycloak CRs as a part of KubeRocketCI deployment.
        enabled: false
        # -- Defines Keycloak realm name that is used as the Identity Provider (IdP) realm
        realmName: "broker"
        # -- Keycloak URL.
        keycloakUrl: https://keycloak.example.com
      ```
      </TabItem>

      <TabItem value="3.9.0">
      ```yaml title="values.yaml"
      sso:
        # -- Install OAuth2-proxy and Keycloak CRs as a part of KubeRocketCI deployment.
        enabled: false

        keycloakOperatorResources:
          # Set to false if using the add-ons approach (refer to https://github.com/epam/edp-cluster-add-ons)
          # for KubeRocketCI installation and if the extension-oidc is already installed.
          # This prevents the creation of an additional Keycloak resource and secret.
          # The 'kind' and 'name' must be specified in case of using an existing Keycloak/ClusterKeycloak resource.
          # Create kind: Keycloak as a part of chart installation
          createKeycloakCR: true
          # Can be Keycloak or ClusterKeycloak.
          kind: Keycloak
          # Name of kind: Keycloak/ClusterKeycloak CR.
          name: main

        # -- Defines the Keycloak realm name, which by default is named after the namespace where KubeRocketCI is deployed.
        # realmName: edp
        # -- Defines Keycloak sso realm name that is used as the Identity Provider (IdP) realm
        ssoRealmName: "broker"
        # -- Defines Keycloak client name that is used for the Identity Provider (IdP) client
        ssoClientName: "edp"
        # -- Keycloak URL.
        keycloakUrl: https://keycloak.example.com/auth
      ```
      </TabItem>
    </Tabs>

3. To upgrade KubeRocketCI to the v3.9.0, run the following command:

    ```bash
    helm upgrade edp epamedp/edp-install -n edp --values values.yaml --version=3.9.0
    ```

    :::note
      To verify the installation, it is possible to test the deployment before applying it to the cluster with the `--dry-run` tag:
      `helm upgrade edp epamedp/edp-install -n edp --values values.yaml --version=3.9.0 --dry-run`
    :::
