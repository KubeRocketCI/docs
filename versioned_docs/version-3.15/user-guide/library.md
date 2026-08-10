---
title: "Manage Libraries"
sidebar_label: "Manage Libraries"
description: "Explore how to manage libraries in KubeRocketCI, including editing details, integrating with Jira, and managing branches for development efficiency."
---
<!-- markdownlint-disable MD025 -->

# Manage Libraries

<head>
  <link rel="canonical" href="https://docs.kuberocketci.io/docs/user-guide/library" />
</head>

This section describes the subsequent possible actions that can be performed with the newly added or existing libraries.

## Check Library

As soon as the library is successfully provisioned, the following will be created:

* A Library Codebase type will appear in the Projects list.
* With the **Create** strategy, a new project will be generated on GitHub or another integrated VCS. When **Clone** is chosen, the repository will be forked from the original and copied to the KubeRocketCI-integrated repository. If **Import** is selected, the platform connects to the chosen repository.

The added library will be listed in the Projects list allowing you to do the following:

* Observe it in the Projects list;
* Manage branches;
* Run build/review pipelines;
* View SonarQube/DefectDojo metrics;
* View Merge Requests.

:::info
  Libraries cannot be deployed via Deployments; only applications can. Libraries are used as shared code or pipelines consumed by applications and other project types.
:::

The Projects list allows you to see the following information about your libraries:

* **Page guide** - Runs the tour that briefly explains the page.
* **Component name (clickable)** - Displays the library name set during the library creation.
* **Actions menu** - Provides additional options for each individual library, such as **Edit** and **Delete**.
* **Status** - Displays the library status. Can be red or green depending on if the KubeRocketCI portal managed to connect to the Git Server with the specified credentials or not.

There are also options to sort the libraries:

* **Filters** - Filter codebases by their name and type. Additionally, sort the existing libraries in a table by clicking the sorting icons in the table header. Sort the libraries alphabetically by their name, language, build tool, framework, and CI tool. You can also sort the libraries by their status: Created, Failed, or In progress.
* **Selector** - Allows you to select multiple libraries for bulk delete.
* **Columns (clickable)** - Sort the existing libraries in a list by clicking the sorting icons in the list header.

## Edit Existing Library

There are two options available to edit in the library after its creation:

* A pattern to validate a commit message;
* Jira integration.

You can edit a library directly from the Project overview page or in the Projects list using the **Actions** button.

To enable Jira integration, in the **Edit Project** dialog do the following:

  1. Mark the **Integrate with Jira server** check box and fill in the necessary fields. Please see steps d-h of the [Add Library](add-library.md) page.

  2. Select the **Apply** button to apply the changes.

To disable Jira integration, in the **Edit Project** dialog do the following:

  1. Clear the **Integrate with Jira server** check box.

  2. Select the **Apply** button to apply the changes.

To create, edit and delete library branches, please refer to the [Manage Branches](manage-branches.md) page.

## Related Articles

* [Add Library](add-library.md)
* [Manage Branches](manage-branches.md)
* [Adjust Jira Integration](../operator-guide/project-management-and-reporting/jira-integration.md)
