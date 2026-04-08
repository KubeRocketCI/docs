---

title: "Pipelines Overview"
sidebar_label: Pipelines Overview
description: "Optimize CI/CD workflows with KubeRocketCI's Pipelines section, a centralized management hub for builds, reviews, and deployments."

---
<!-- markdownlint-disable MD025 -->

# Pipelines Overview

<head>
  <link rel="canonical" href="https://docs.kuberocketci.io/docs/user-guide/pipelines" />
</head>

Pipelines are an integral part of any CI/CD. They are involved in code build, review, and deployment procedures. Such a big variety of pipelines results in a demand for having a single place where the pipelines can be managed. For this purpose, the Pipelines section was added to the KubeRocketCI portal.

## Pipelines Page Overview

To see the CI/CD Pipelines section, open the KubeRocketCI portal and select the **CI/CD Pipelines** section:

* **PipelineRuns** - Shows the recent PipelineRuns. You can filter PipelineRuns by status, type, and Codebase it launched for;
* **Pipelines** - This tab allows to view and edit all the Tekton Pipelines created in the platform;
* **Tasks** - This tab allows to view and edit all the Tekton Tasks created in the platform.

## Pipeline Overview

To inspect pipeline details, click the PipelineRun name:

* The **Details** tab displays the PipelineRun status and logs;
* The **View YAML** tab displays the YAML configuration of your pipeline. It also allows to view the general information and resources that the pipeline is connected with;
The **Diagram** tab displays the pipeline's real-time status. Click the task name to navigate to the corresponding task in the **Details** tab;
* The **Results** tab shows the resulting artifact that was built in the pipeline. Note that this tab is accessible only in Build Pipelines that produce artifacts.

You can also view the build pipeline results from the codebase details page and the Pipelines section.

## Operate With Pipelines

The Pipelines section allows you to track, restart, and delete pipelines.

To restart the PipelineRun, click the actions button and select **Run again**.

To restart the PipelineRun using different parameters, click the actions button and select **Run with params**.

To delete the PipelineRun, click the actions button and select **Delete**.

Alternatively, you can enter the PipelineRun and delete/restart the pipeline using the corresponding buttons.

:::note
There is also an option to store the long-term logs using the OpenSearch tool. You can install OpenSearch using our [cluster add-ons](https://github.com/epam/edp-cluster-add-ons/blob/main/clusters/core/apps/values.yaml#L227) repository.
:::

## Edit Pipelines/Tasks

KubeRocketCI portal allows to edit the existing Tekton Pipelines and Tasks directly in the Pipelines section. In our example, we will show how to edit a Task but the same procedure applies to Pipelines:

1. Navigate to the **Tasks** tab.

2. Enter a Task by clicking its name.

3. On the Task details page, in the top right corner of the screen, click **Edit**.

4. On the edit window, make your changes and click **Saved**.

Now you know how to view and manage pipelines in KubeRocketCI.

## Related Articles

* [Marketplace Overview](./marketplace.md)
* [Manage Deployment Flows](./manage-environments.md)
* [Manage Applications](./application.md)
