---

title: "Manage Applications"
sidebar_label: Manage Applications
description: "This section describes the subsequent possible actions that can be performed with the newly added or existing applications."

---
<!-- markdownlint-disable MD025 -->

# Manage Applications

<head>
  <link rel="canonical" href="https://docs.kuberocketci.io/docs/user-guide/application" />
</head>

This section describes the subsequent possible actions that can be performed with the newly added or existing applications.

## Check Application

As soon as the application is successfully provisioned, the following will be created:

* An Application Codebase type will appear in the Projects list.
* With the **Create** strategy, a new project will be generated on GitHub or another integrated VCS. When **Clone** is chosen, the repository will be forked from the original and copied to the KubeRocketCI-integrated repository. If **Import** is selected, the platform connects to the chosen repository.

The added application will be listed in the Projects list allowing you to do the following:

* Observe it in the Projects list;
* Manage branches;
* Run build/review pipelines;
* View SonarQube/DefectDojo metrics;
* View Merge Requests;
* View Deployments this application is a part of.

The Projects lists allows you to see the following information about your applications:

* **Page guide** - Runs the tour that briefly explains the page.
* **Component name (clickable)** - Displays the application name set during the application creation.
* **Actions menu** - Provides additional options for each individual application, such as **Edit** and **Delete**. The application that is used in a Deployment cannot be removed.
* **Status** - Displays the application status. Can be red or green depending on if the KubeRocketCI portal managed to connect to the Git Server with the specified credentials or not.
There are also options to sort the applications:
* **Filters** - Filter codebases by their name and type. Additionally, sort the existing applications in a table by clicking the sorting icons in the table header. Sort the applications alphabetically by their name, language, build tool, framework, and CI tool. You can also sort the applications by their status: Created, Failed, or In progress.
* **Selector** - Allows you to select multiple applications for bulk delete.
* **Columns (clickable)** - Sort the existing applications in a list by clicking the sorting icons in the list header.

## Edit Existing Application

There are two options available to edit in the application after its creation:

* A pattern to validate a commit message;
* Jira integration.

You can edit an application directly from the Project overview page or in the Projects list using the **Actions** button.

To enable Jira integration, in the **Edit Project** dialog do the following:

  1. Mark the **Integrate with Jira server** check box and fill in the necessary fields. Please see steps d-h of the [Add Application](add-application.md) page.

  2. Select the **Apply** button to apply the changes.

3. To disable Jira integration, in the **Edit Project** dialog do the following:

  1. Clear the **Integrate with Jira server** check box.

  2. Select the **Apply** button to apply the changes.

4. To create, edit and delete application branches, please refer to the [Manage Branches](../user-guide/manage-branches.md) page.

## Related Articles

* [Add Application](add-application.md)
* [Manage Branches](../user-guide/manage-branches.md)
