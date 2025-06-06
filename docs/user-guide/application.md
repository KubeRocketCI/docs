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

## Check and Remove Application

As soon as the application is successfully provisioned, the following will be created:

* An Application Codebase type will appear in the Codebase list of the Components section.
* With the **Create** strategy, a new project will be generated on GitHub or another integrated VCS. When **Clone** is chosen, the repository will be forked from the original and copied to the KubeRocketCI-integrated repository. If **Import** is selected, the platform connects to the chosen repository.

The added application will be listed in the Applications list allowing you to do the following:

![Applications menu](../assets/user-guide/components/components-manage-components-menu.png "Applications menu")

* **Open documentation** - Opens the application related documentation page.
* **Create new component** - Opens the **Create new component** menu when clicking.
* **Display settings** - This button allows to show/hide columns to display in the codebase list. By default, all the columns are shown.
* **Actions menu** - Provides additional options for each individual application, such as **Edit** and **Delete**.
* **Edit component** - Allows you to modify the application's settings. You can access this option by clicking the options icon (vertical ellipsis) next to the application's name in the list, and then selecting **Edit**. For more details, see the [Edit Existing Application](#edit-existing-application) section.
* **Delete component** - Deletes the selected application.
* **Component status** - displays the application status. Can be red or green depending on if the KubeRocketCI portal managed to connect to the Git Server with the specified credentials or not.
* **Component name (clickable)** - Displays the application name set during the application creation.

  :::warning
    The application that is used in a CD pipeline cannot be removed.
  :::

There are also options to sort the applications:

* **Pagination menu** - select a number of applications displayed per page (15, 25 or 50 rows) and navigate between pages if the number of applications exceeds the capacity of a single page.

* **Filters** - Filter codebases by their name and type. Additionally, sort the existing applications in a table by clicking the sorting icons in the table header. Sort the applications alphabetically by their name, language, build tool, framework, and CI tool. You can also sort the applications by their status: Created, Failed, or In progress.

* **Selector** - Allows you to select multiple applications for bulk delete.

* **Columns (clickable)** - Sort the existing autotests in a list by clicking the sorting icons in the list header.

## Edit Existing Application

KubeRocketCI Portal provides the ability to enable, disable or edit the Jira Integration functionality for applications.

1. To edit an application directly from the Applications overview page or when viewing the application data:

    * Select **Edit** in the options icon menu:

    ![Edit application on the Applications overview page](../assets/user-guide/components/application/application-manage-components-codebase-edit-1.png "Edit application on the Applications overview page")

    ![Edit application when viewing the application data](../assets/user-guide/components/application/application-manage-components-codebase-edit-2.png "Edit application when viewing the application data")

    * The Edit Application dialog opens.

2. To enable Jira integration, in the **Edit Application** dialog do the following:

    ![Edit application](../assets/user-guide/components/application/application-manage-edit-codebase-application.png "Edit application")

    a. Mark the **Integrate with Jira server** check box and fill in the necessary fields. Please see steps d-h of the [Add Application](add-application.md) page.

    b. Select the **Apply** button to apply the changes.

3. To disable Jira integration, in the **Edit Application** dialog do the following:

    a. Clear the **Integrate with Jira server** check box.

    b. Select the **Apply** button to apply the changes.

4. To create, edit and delete application branches, please refer to the [Manage Branches](../user-guide/manage-branches.md) page.

## Related Articles

* [Add Application](add-application.md)
* [Manage Branches](../user-guide/manage-branches.md)
