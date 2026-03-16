---
title: "Manage Infrastructures"
sidebar_label: "Manage Infrastructures"
description: "Guide to managing infrastructures in KubeRocketCI, including setup, modification, and integration with Jira for comprehensive development management."
---
<!-- markdownlint-disable MD025 -->

# Manage Infrastructures

<head>
  <link rel="canonical" href="https://docs.kuberocketci.io/docs/user-guide/infrastructure" />
</head>

This section describes the subsequent possible actions that can be performed with the newly added or existing infrastructures.

## Check Infrastructure

As soon as the infrastructure is successfully provisioned, the following will be created:

* An Infrastructure Codebase type will appear in the Projects list.
* With the **Create** strategy, a new project will be generated on GitHub or another integrated VCS. When **Clone** is chosen, the repository will be forked from the original and copied to the KubeRocketCI-integrated repository. If **Import** is selected, the platform connects to the chosen repository.

The added infrastructure will be listed in the Projects list allowing you to do the following:

* Observe it in the Projects list;
* Manage branches;
* Run build/review pipelines;
* View SonarQube/DefectDojo metrics;
* View Merge Requests.

:::info
  Infrastructures cannot be deployed via Deployments; only applications can. Infrastructure codebases are used to define and manage cloud or platform resources (e.g. via Terraform).
:::

The Projects list allows you to see the following information about your infrastructures:

* **Page guide** - Runs the tour that briefly explains the page.
* **Component name (clickable)** - Displays the infrastructure name set during the infrastructure creation.
* **Actions menu** - Provides additional options for each individual infrastructure, such as **Edit** and **Delete**.
* **Status** - Displays the infrastructure status. Can be red or green depending on if the KubeRocketCI portal managed to connect to the Git Server with the specified credentials or not.

There are also options to sort the infrastructures:

* **Filters** - Filter codebases by their name and type. Additionally, sort the existing infrastructures in a table by clicking the sorting icons in the table header. Sort the infrastructures alphabetically by their name, language, build tool, framework, and CI tool. You can also sort the infrastructures by their status: Created, Failed, or In progress.
* **Selector** - Allows you to select multiple infrastructures for bulk delete.
* **Columns (clickable)** - Select columns to display and sort the existing infrastructures in a list by clicking the sorting icons in the list header.

## Edit Existing Infrastructure

There are two options available to edit in the infrastructure after its creation:

* A pattern to validate a commit message;
* Jira integration.

You can edit an infrastructure directly from the Project overview page or in the Projects list using the **Actions** button.

To enable Jira integration, in the **Edit Project** dialog do the following:

  1. Mark the **Integrate with Jira server** check box and fill in the necessary fields. Please see steps d-h of the [Add Infrastructure](add-infrastructure.md) page.

  2. Select the **Apply** button to apply the changes.

To disable Jira integration, in the **Edit Project** dialog do the following:

  1. Clear the **Integrate with Jira server** check box.

  2. Select the **Apply** button to apply the changes.

To create, edit and delete infrastructure branches, please refer to the [Manage Branches](manage-branches.md) page.

## Related Articles

* [Add Infrastructure](add-infrastructure.md)
* [Manage Branches](manage-branches.md)
* [Adjust Jira Integration](../operator-guide/project-management-and-reporting/jira-integration.md)
