---

title: "Manage Deployments"
sidebar_label: "Manage Deployments"
description: "Navigate deployment management in KubeRocketCI, from viewing details to editing, deleting, and troubleshooting deployment environments."

---
<!-- markdownlint-disable MD025 -->

# Manage Deployments

<head>
  <link rel="canonical" href="https://docs.kuberocketci.io/docs/user-guide/manage-environments" />
</head>

This page describes actions that can be performed to an already created Deployment. If no Deployments are created yet, navigate to the [Add Deployment](add-cd-pipeline.md) page.

The added Deployment will be listed in the Projects list allowing you to do the following:

  * Observe it in the Projects list;
  * Manage branches;
  * Run build/review pipelines;
  * View SonarQube/DefectDojo metrics;
  * View Merge Requests;
  * View Deployments this application is a part of.

The added Deployment will be listed in the Deployments list allowing you to do the following:

* **Deployment status** - displays the deployment status. Can be red or green depending on if the KubeRocketCI portal managed to connect to the Git Server with the specified credentials or not;
* **Deployment name** (clickable) - displays the Deployment name set during the Deployment creation;
* **Page guide** -  runs the tour that briefly explains the page;
* **Enable filtering** - enables filtering by Deployment name and namespace where this deployment is located in;
* **+ Create new deployment** - opens the **Create new deployment** menu;
* **Configure** - edit the Deployment by clicking the vertical ellipsis button and then selecting **Configure**. For details see the [Edit Existing Deployment](#edit-existing-deployment) section;
* **Delete** - remove Deployment by clicking the vertical ellipsis button and then selecting **Delete**;

  :::note
    Please keep in mind that after deleting the deployment, all the created resources within the deployment will be deleted.
  :::

## View Deployment Details

To view deployment details, click the deployment name in the deployments list. Once clicked, the following data will be displayed:

* **Open deployment in Argo CD** - opens the corresponding resource in Argo CD;
* **Actions** - allows to edit some parameters of the deployment or delete it;
* **+ Create environment** - displays the **Create new environment** menu;
* **Environment name (clickable)** - opens the Environment details page;
* **Environment status** - displays the status of the created Environment;
* **Application name (clickable)** - opens the details of the application that is deployed within the stage;
* **Application deployment status** - displays the deployed application;
* **Open application logs** - opens the the application container logs;
* **Open application terminal** - opens the container terminal window;
* **Argo CD** - opens a new tab with Argo CD resources related to the application;
* **Logging** - allows to view the stage in Grafana or Kibana.

### Edit Existing Deployment<a name="edit-existing-deployment"></a>

Edit the deployment directly from the deployment overview page or when viewing the deployment data:

1. Select **Edit** in the options icon menu next to the deployment name.

2. Apply the necessary changes (edit the list of applications for deploy, application branches, and promotion in the pipeline). Add new extra stages by clicking the plus sign icon and filling in the application branch and promotion in the pipeline.

3. Click the **Apply** button to confirm the changes.

### Add a New Environment

In order to create a new environment for the existing deployment, follow the steps below:

1. Navigate to the **Environments** block by clicking the deployment name link in the deployments list.

2. Click the **+ Create environment** button.

3. Fill in the required fields in the dialog. Please see the [Stages Menu](../user-guide/add-cd-pipeline.md#create-environment) section for details.

4. Click the **Apply** button.

### Edit Environment

In order to edit an environment for the existing deployment, follow the steps below:

1. Click the Environment name in the Deployment details page.

2. In the upper-right corner of the page, click the **Actions** button and select **Edit**.

3. In the **Edit environment** dialog, change the environment trigger type and deploy pipeline template.

4. Click the **Apply** button.

### Delete Environment

:::warning
  You cannot remove the last Environment, as the Deployment does not exist without at least one.
::::

In order to delete an Environment for the existing Deployment, follow the steps below:

1. Navigate to the **Environments** block by clicking the Deployment name link in the Deployments list.

2. Click the name of the Environment that needs to be deleted.

3. In the upper-right corner of the page, click the **Actions** button and select **Edit**.

4. Enter the Environment name and click **Confirm**.

### View Environment Data

To view the environment data for the existing environment, follow the steps below:

1. Navigate to the **Environments** block by clicking the Deployment name link in the Deployments list.

2. Click the environment name. The following blocks will be displayed:

    a. **Overview** - general information and configuration of current environment.

    b. **Applications** - displays the status of the applications related to the environment and allows for [deploying applications](#deploy-application). Applications health and sync statuses are returned from the Argo CD tool.

    c. **Pipelines** - displays all the deploy pipeline runs launched for this environment.

    d. **Variables** - adds personalized variables that will be used in the deploy pipelines.

    e. **Monitoring** - opens the Grafana window that allows for watching various metrics.

### Deploy Application

To deploy an application, follow the steps below:

1. Navigate to the **Applications** block and click the **Configure deploy** button.

2. Set deployment properties you need:

    a. Select the image stream version from the drop-down list.

    b. (Optional) Enable setting custom values for Helm Charts. For more details, please refer to the [Manage GitOps](gitops.md) page.

    c. Click the **Start Deploy** button to start a pipeline with the deploy script.

    :::info
      In case of using OpenShift internal registry, if the deployment fails with the ImagePullBackOff error, delete the pod that was created for this application.
    :::

To uninstall the application, click the **Delete** button.

As a result, the application will be uninstalled in the Argo CD tool as well.

Alternatively, you can use the **Clean** button. This way will be appropriate when you have some specific requirements to the environment cleanup procedure. Note that you need to make up your own logic in the cleanup pipeline to use the button or choose one of the pre-defined pipelines offered by KubeRocketCI.

### Troubleshoot Application

There is a couple of KubeRocketCI portal capabilities that will help in monitoring and troubleshooting deployed applications, namely, terminal and logs.

To inspect the deployed application in KubeRocketCI portal, take the following steps:

1. Open the application logs by clicking the `Show Logs` button.

2. Inspect the shown logs.

3. Open the application terminal by clicking the `Show Terminal` button.

4. Operate the terminal to fix the problem if any.

### Monitor Application

KubeRocketCI portal offers monitoring capabilities powered by Grafana and Prometheus Operator.

:::info
  To view the deployment monitoring data, you need to have Grafana and Prometheus Operator installed. We recommend installing it using our [add-ons](https://github.com/epam/edp-cluster-add-ons/blob/3fc8a60ccfbca1c7aa757cb36226a0daf2c8a224/clusters/core/addons/prometheus-operator/values.yaml).
:::

To monitor an application using Grafana, follow the steps below:

1. Navigate to the Environment details page.

2. In the Environment details page, open the **Monitoring** tab.

3. In the **Monitoring** tab, view the Deployment metrics.

The **Monitoring** tab provides the visual representation of the basic application deployment metrics, such as CPU and Memory requests and limits.

### Delete Application

There are two buttons on the environment page that can be utilized to delete application in the portal:

  * **Delete** - Deletes selected applications and associated resources.
  * **Clean** - Manages custom cleanup actions, such as deleting cloud resources and databases, rolling back transactions, etc.

The **Delete** button is optimized for applications based on a single, simple helm chart that can be deployed independently without any specific dependencies.

The **Clean** button activates a deletion process (triggers a delete pipeline) that includes any custom logic you have defined. It runs the Clean Pipeline template you chose when [adding a Deployment](./add-cd-pipeline.md#add-deployment). This option is most suitable for applications that require complex configurations to function properly. It ensures that any associated resources with the same lifecycle are deleted when the application is no longer needed.

KubeRocketCI provides an intuitive and streamlined pipeline by default. Initially, there is no distinction between the **Delete** and **Clean** buttons, as both perform identical actions. This default behavior encompasses the straightforward deletion of applications, which involves the uninstallation of the associated Helm chart. However, this functionality evolves once a custom delete pipeline is established, enabling manual configuration of the logic behind the **Clean** button. This customization allows for a more tailored approach to managing application lifecycles within KubeRocketCI.

For more details on how to create a custom delete pipeline, navigate to the [Customize Environment Cleanup](../operator-guide/cd/customize-environment-deletion.md)

## Related Articles

* [Customize Environment Cleanup](../operator-guide/cd/customize-environment-deletion.md)
* [Add Deployment Flow](add-cd-pipeline.md)
* [Add Quality Gate](../user-guide/add-quality-gate.md)
