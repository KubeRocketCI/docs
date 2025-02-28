---

title: "Manage Deployment Flows"
sidebar_label: "Manage Deployment Flows"
description: "Navigate deployment flow management in KubeRocketCI, from viewing details to editing, deleting, and troubleshooting deployment environments."

---
<!-- markdownlint-disable MD025 -->

# Manage Environments

<head>
  <link rel="canonical" href="https://docs.kuberocketci.io/docs/user-guide/manage-environments/" />
</head>

This page describes actions that can be performed to an already created environment. If no environments are created yet, navigate to the [Add Environment](add-cd-pipeline.md) page:

  ![Environments page](../assets/user-guide/environments/edp-portal-cd-pipeline-page.png "Environments page")

* **Environment status** - displays the environment status. Can be red or green depending on if the KubeRocketCI portal managed to connect to the Git Server with the specified credentials or not.
* **Environment name** (clickable) - displays the Git Server name set during the Git Server creation.
* **Open documentation** - opens the documentation that leads to this page.
* **Enable filtering** - enables filtering by Git Server name and namespace where this environment is located in.
* **Create new environment** - displays the Create new component menu.
* **Edit environment** - edit the environment by selecting the options icon next to its name in the environment list, and then selecting Edit. For details see the [Edit Existing Environment](#edit-existing-environment) section.
* **Delete environment** - remove environment by clicking the vertical ellipsis button and then selecting Delete.

  :::note
    Please keep in mind that after deleting the environment, all the created resources within the environment will be deleted.
  :::

## View Environment Details

To view environment details, click the environment name in the environments list. Once clicked, the following data will be displayed:

  ![Environment details](../assets/user-guide/environments/edp-portal-cd-pipeline-overview.png "Environment details")

* **Filters** - enables filtering by stage name, stage applications and stage health status.
* **Open environment in Argo CD** - opens the corresponding resource in Argo CD.
* **Edit environment** - allows to edit some parameters of the environment.
* **Delete environment** - allows to remove the environment.
* **Create new stage** - displays the **Create stage** menu.
* **Stage name (clickable)** - opens the stage details page.
* **Stage status** - displays the status of the created stage.
* **Create new stage** - displays the **Create stage** menu.
* **Application name (clickable)** - opens the details of the application that is deployed within the stage.
* **Application deployment status** - displays the deployed application.
* **Open application logs** - opens the the application container logs.
* **Open application terminal** - opens the container terminal window.
* **Open application resource in Argo CD** - opens a new tab with Argo CD resources related to the application.
* **Open stage in Argo CD / Grafana / Kibana** - allows to view the stage in Argo CD, Grafana or Kibana.

### Edit Existing Environment<a name="edit-existing-environment"></a>

Edit the environment directly from the environment overview page or when viewing the environment data:

1. Select **Edit** in the options icon menu next to the environment name:

    ![Edit environment when viewing the environment data](../assets/user-guide/environments/edp-portal-edit-cd-pipeline-1.png "Edit environment when viewing the environment data")

2. Apply the necessary changes (edit the list of applications for deploy, application branches, and promotion in the pipeline). Add new extra stages by clicking the plus sign icon and filling in the application branch and promotion in the pipeline.

    ![Edit environment dialog](../assets/user-guide/environments/edp-portal-edit-cd-pipeline-page.png "Edit environment dialog")

3. Click the **Apply** button to confirm the changes.

### Add a New Stage

In order to create a new stage for the existing environment, follow the steps below:

1. Navigate to the **Stages** block by clicking the environment name link in the environments list.

2. Click the **Create stage** button:

    ![Add environment stage](../assets/user-guide/environments/edp-portal-cd-pipeline-add-stages.png "Add environment stage")

3. Fill in the required fields in the dialog. Alternatively, click **Edit YAML** in the upper-right corner of the **Create stage** dialog to open the YAML editor and add a stage. Please see the [Stages Menu](../user-guide/add-cd-pipeline.md) section for details.

4. Click the **Apply** button.

### Edit Stage

In order to edit a stage for the existing environment, follow the steps below:

1. Navigate to the **Stages** block by clicking the environment name link in the environments list.

    ![Edit environment stage](../assets/user-guide/environments/edp-portal-edit-cd-pipeline-stage.png "Edit environment stage")

2. Select the options icon related to the necessary stage and then select **Edit**.

    ![Edit environment stage dialog](../assets/user-guide/environments/edp-portal-edit-cd-pipeline-stage-dialog.png "Edit environment stage dialog")

3. In the **Edit Stage** dialog, change the stage trigger type. See more about this field in the [Stages Menu](#edit-stage) section.

4. Click the **Apply** button.

### Delete Stage

:::warning
  You cannot remove the last stage, as the environment does not exist without at least one.
::::

In order to delete a stage for the existing environment, follow the steps below:

1. Navigate to the **Stages** block by clicking the environment name link in the environments list.

2. Click the name of the stage that needs to be deleted:

    ![Delete environment stage](../assets/user-guide/environments/enter_stage.png "Delete environment stage")

3. Click the recycle bin button to open the stage deletion menu:

    ![Delete environment stage](../assets/user-guide/environments/edp-portal-delete-cd-pipeline-stage.png "Delete environment stage")

### View Stage Data

To view the environment stage data for the existing environment, follow the steps below:

1. Navigate to the **Stages** block by clicking the environment name link in the environments list.

    ![Expand environment stage](../assets/user-guide/environments/edp-portal-expand-stage.png "Expand environment stage")

2. Click stage name. The following blocks will be displayed:

    ![Environment stage overview](../assets/user-guide/environments/edp-portal-stage-overview.png "Environment stage overview")

    a. **Overview** - general information and configuration of current environment.

    b. **Applications** - displays the status of the applications related to the stage and allows [deploying the applications](#deploy-application). Applications health and sync statuses are returned from the Argo CD tool.

    c. **Pipelines** - displays all the deploy pipeline runs launched for this stage.

    d. **Monitoring** - opens the Grafana window that allows for watching various metrics.

### Deploy Application

To deploy an application, follow the steps below:

![Deploy the promoted application](../assets/user-guide/environments/deploy_application.png "Deploy the promoted application")

1. Navigate to the **Applications** block of the stage and select an application.

    a. Select the image stream version from the drop-down list.

    b. (Optional) Enable setting custom values for Helm Charts. For more details, please refer to the [Manage GitOps](gitops.md) page.

    c. Click **Start Deploy**. Starts pipeline with deploy script.

      :::info
        In case of using OpenShift internal registry, if the deployment fails with the ImagePullBackOff error, delete the pod that was created for this application.
      :::

To uninstall the application, click the **Delete** button:

![Uninstall the application](../assets/user-guide/environments/edp-portal-uninstall-application.png "Uninstall the application")

As a result, the application will be uninstalled in the Argo CD tool as well.

### Troubleshoot Application

There is a couple of KubeRocketCI portal capabilities that will help in monitoring and troubleshooting deployed applications, namely, terminal and logs.

To inspect the deployed application in KubeRocketCI portal, take the following steps:

1. Open the application logs by clicking the `Show Logs` button:

    ![Show Logs button](../assets/user-guide/environments/show_logs_button.png "Show Logs button")

2. Inspect the shown logs:

    ![Inspect Logs](../assets/user-guide/environments/application_logs.png "Inspect Logs")

3. Open the application terminal by clicking the `Show Terminal` button:

    ![Show Terminal button](../assets/user-guide/environments/show_terminal_button.png "Show Terminal button")

4. Operate the terminal to fix the problem if any:

    ![Inspect application](../assets/user-guide/environments/application_terminal.png "Inspect application")

### Related Articles

* [Add Environment](add-cd-pipeline.md)
* [Add Quality Gate](../user-guide/add-quality-gate.md)
