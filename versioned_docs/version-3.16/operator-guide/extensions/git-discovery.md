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

## Installation

:::warning
When integrating GitFusion with Bitbucket repositories, ensure your Bitbucket API token includes the `account:read` permission scope. Detailed instructions for configuring Bitbucket API tokens with appropriate permissions are available in the [Add Git Server](../../user-guide/add-git-server.md) documentation.
:::

To enable the GitFusion integration in KubeRocketCI, follow the steps below:

1. Activate GitFusion service deployment by modifying the [edp-cluster-add-ons](https://github.com/epam/edp-cluster-add-ons/blob/main/clusters/core/apps/values.yaml#L87) repository. Set the `gitfusion.enable` flag to `true` in the `values.yaml` file:

    ```yaml title="values.yaml"
    gitfusion:
      enable: true
    ```

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

* [Add Application](../../user-guide/add-application.md)
* [Manage Branches](../../user-guide/manage-branches.md)
