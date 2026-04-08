---

title: "Enable Git Resource Discovery"
description: "Configure GitFusion to enable automated discovery and browsing of Git accounts, repositories, branches, and organizational structures within the KubeRocketCI portal."
sidebar_label: "GitFusion"

---
<!-- markdownlint-disable MD025 -->

# Enable Git Resource Discovery

<head>
  <link rel="canonical" href="https://docs.kuberocketci.io/docs/operator-guide/extensions/git-discovery" />
</head>

This page describes installation of the [GitFusion](https://github.com/KubeRocketCI/gitfusion) component, allowing the portal to access Git-related information without requiring direct access to the Version Control System.

GitFusion enhances the developer experience by facilitating automated discovery of Git repositories, remote branches, and organizational structures across multiple Git providers. The service operates as an intermediary layer, securing communication between the KubeRocketCI portal and Git infrastructure while enabling rich repository browsing capabilities.

## Prerequisites

To install GitFusion, ensure that a [KrakenD](./krakend.md) instance is installed and configured using [edp-cluster-add-ons](https://github.com/epam/edp-cluster-add-ons/tree/main/clusters/core/addons/krakend).

## Installation

:::warning
When integrating GitFusion with Bitbucket repositories, ensure your Bitbucket app password includes the `account:read` permission scope. Detailed instructions for configuring Bitbucket app passwords with appropriate permissions are available in the [Add Git Server](../../user-guide/add-git-server.md) documentation.
:::

To enable the GitFusion integration in KubeRocketCI, follow the steps below:

1. Activate GitFusion service deployment by modifying the [edp-cluster-add-ons](https://github.com/epam/edp-cluster-add-ons/blob/main/clusters/core/apps/values.yaml#L87) repository. Set the `gitfusion.enable` flag to `true` in the `values.yaml` file:

    ```yaml title="values.yaml"
    gitfusion:
      enable: true
    ```

2. Configure the KrakenD API Gateway to expose GitFusion endpoints by modifying its routing configuration.

    :::note
    Reference KrakenD configurations in the [edp-cluster-add-ons](https://github.com/epam/edp-cluster-add-ons/tree/main/clusters/core/addons/krakend) repository.
    For more information on how to work with edp-cluster-add-ons, please refer to the [Install via Add-Ons](../add-ons-overview.md) page.
    :::

    1. Clone your forked copy of the [edp-cluster-add-ons](https://github.com/epam/edp-cluster-add-ons) repository.

    2. Verify that KrakenD configuration includes the GitFusion API endpoints. If missing, add them in two steps:
        1. Navigate to the KrakenD configuration directory at `clusters/<cluster-name>/addons/krakend`.
        2. Update the [values.yaml](https://github.com/epam/edp-cluster-add-ons/blob/main/clusters/core/addons/krakend/values.yaml#L202-#L346) file to include the necessary GitFusion API endpoint definitions.

    3. Configure the KrakenD secret to include GitFusion service connectivity details.

        :::note
        The `GITFUSION_URL` variable should point to the GitFusion service URL, e.g., `http://gitfusion.krci:8080`.
        :::

        Modify the `krakend` secret configuration to include the `GITFUSION_URL` environment variable:

        ```yaml title="KrakenD secret"
        kind: Secret
        apiVersion: v1
        metadata:
          name: krakend
          namespace: krakend
        data:
          ...
          GITFUSION_URL: http://gitfusion.krci:8080
        type: Opaque
        ```

        For environments utilizing External Secrets Operator with AWS Parameter Store, add the `GITFUSION_URL` variable to Parameter Store configuration:

        ```yaml title="AWS Parameter Store"
        {
          "SONARQUBE_URL": "http://sonar.sonar:9000",
          "SONARQUBE_TOKEN": "<sonarqube-token>",
          "DEPTRACK_URL": "http://dependency-track-api-server.dependency-track:8080",
          "DEPTRACK_TOKEN": "<dependency-track-token>",
          "JWK_URL": "https://keycloak.example.com/realms/<realmName>/protocol/openid-connect/certs",
          "OPENSEARCH_URL": "https://opensearch-cluster-master.logging:9200",
          "OPENSEARCH_CREDS": "<opensearch-base64-encoded-credentials>",
          "GITFUSION_URL": "http://gitfusion.krci:8080"
        }
        ```

    4. Save modifications by committing and pushing the updated files to the `edp-cluster-add-ons` repository.

    5. Apply the configuration changes by accessing Argo CD and synchronizing the KrakenD application deployment.

## Verification

Once GitFusion deployment is complete, validate the integration functionality through the following testing procedures:

### Component Discovery

1. Navigate to **KubeRocketCI portal** -> **Components**.

2. On the **Components** page, click **+ Create component** -> **Application** -> **Import**.

3. Within the **Create Application** dialog, use the **Owner** dropdown to select your Git account (configured during Git Server setup):

    ![Git account discovery](../../assets/operator-guide/extensions/account-discovery.png "Git account discovery")

4. Browse available repositories using the **Repository** dropdown to select the desired application for import:

    ![Git repository discovery](../../assets/operator-guide/extensions/repo-discovery.png "Git repository discovery")

### Creating Branches

1. Return to the **KubeRocketCI portal**, access **Components**, and select a specific component by clicking its name.

2. Switch to the **Branches** tab within the component details view and click **+ Create branch**.

3. In the **Create branch** dialog, interact with the branch name field to display the list of remotely available branches:

    ![Git branch discovery](../../assets/operator-guide/extensions/branch-discovery.png "Git branch discovery")

## Related Articles

- [Add Application](../../user-guide/add-application.md)
- [Manage Branches](../../user-guide/manage-branches.md)
- [KrakenD Integration](./krakend.md)
