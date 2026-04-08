---
title: "Manage Autotests"
sidebar_label: "Manage Autotests"
description: "Guide to managing autotests in KubeRocketCI, including editing, integrating with Jira, and adding as quality gates in CI/CD workflows."
---
<!-- markdownlint-disable MD025 -->

# Manage Autotests

<head>
  <link rel="canonical" href="https://docs.kuberocketci.io/docs/user-guide/autotest" />
</head>

This section describes the subsequent possible actions that can be performed with the newly added or existing autotests.

## Check Autotest

As soon as the autotest is successfully provisioned, the following will be created:

* An Autotest Codebase type will appear in the Projects list.
* With the **Clone** or **Import** strategy, the repository will be copied or connected to the KubeRocketCI-integrated Version Control System. Autotests do not support the **Create** strategy.

The added autotest will be listed in the Projects list allowing you to do the following:

* Observe it in the Projects list;
* Manage branches;
* Run build/review pipelines;
* View SonarQube/DefectDojo metrics;
* View Merge Requests.

:::info
  Autotests cannot be deployed via Deployments; only applications can. You can use autotests as quality gates in Deployments—see [Add Autotest as a Quality Gate](#add-autotest-as-a-quality-gate).
:::

The Projects list allows you to see the following information about your autotests:

* **Page guide** - Runs the tour that briefly explains the page.
* **Component name (clickable)** - Displays the autotest name set during the autotest creation.
* **Actions menu** - Provides additional options for each individual autotest, such as **Edit** and **Delete**. An autotest that is used as a quality gate in a Deployment cannot be removed.
* **Status** - Displays the autotest status. Can be red or green depending on if the KubeRocketCI portal managed to connect to the Git Server with the specified credentials or not.

There are also options to sort the autotests:

* **Filters** - Filter codebases by their name and type. Additionally, sort the existing autotests in a table by clicking the sorting icons in the table header. Sort the autotests alphabetically by their name, language, build tool, framework, and CI tool. You can also sort the autotests by their status: Created, Failed, or In progress.
* **Selector** - Allows you to select multiple autotests for bulk delete.
* **Columns (clickable)** - Sort the existing autotests in a list by clicking the sorting icons in the list header.

## Edit Existing Autotest

There are two options available to edit in the autotest after its creation:

* A pattern to validate a commit message;
* Jira integration.

You can edit an autotest directly from the Project overview page or in the Projects list using the **Actions** button.

To enable Jira integration, in the **Edit Project** dialog do the following:

  1. Mark the **Integrate with Jira server** check box and fill in the necessary fields. Please see steps d-h of the [Add Autotest](add-autotest.md) page.

  2. Select the **Apply** button to apply the changes.

To disable Jira integration, in the **Edit Project** dialog do the following:

  1. Clear the **Integrate with Jira server** check box.

  2. Select the **Apply** button to apply the changes.

To create, edit and delete autotest branches, please refer to the [Manage Branches](manage-branches.md) page.

## Add Autotest as a Quality Gate

In order to add an autotest as a quality gate to a Deployment, do the following:

1. Create a Deployment with the necessary parameters. Please refer to the [Add CD Pipeline](add-cd-pipeline.md) section for the details.
2. In the **Stages** menu, select the **Autotest** quality gate type. The promoting process will then require the autotest to pass successfully.
3. In the additional fields, select the previously created autotest name and specify its branch.
4. After filling in all the necessary fields, click **Create** to start the provisioning of the pipeline.

## Configure Autotest Launch at Specific Stage

To configure the autotest to run at a specific stage with the necessary parameters:

1. Add the necessary stage to the Deployment. Please refer to the [Add CD Pipeline](add-cd-pipeline.md) documentation for the details.
2. Navigate to the **run.json** file and add the stage name and the specific parameters.

## Launch Autotest Locally

You can run autotests locally using an IDE (such as IntelliJ or NetBeans). To run the autotest project for local verification:

1. Clone the project to your local machine.
2. Open the project in the IDE and find the **run.json** file to copy the necessary command value.
3. Paste the copied command value into the Command line field and run it with the necessary values and namespace.
4. All the launched tests will be executed.

## Related Articles

* [Add Autotest](add-autotest.md)
* [Manage Branches](manage-branches.md)
* [Add CD Pipeline](add-cd-pipeline.md)
* [Adjust Jira Integration](../operator-guide/project-management-and-reporting/jira-integration.md)
