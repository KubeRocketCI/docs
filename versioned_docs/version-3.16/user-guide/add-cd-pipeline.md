---

title: "Add Deployment"
sidebar_label: "Add Deployment"
description: "Learn how to establish Deployments in KubeRocketCI for streamlined GitOps, automated deployment, and efficient multi-environment management."

---
<!-- markdownlint-disable MD025 -->

# Add Deployment

<head>
  <link rel="canonical" href="https://docs.kuberocketci.io/docs/user-guide/add-cd-pipeline" />
</head>

KubeRocketCI uses Deployments — a mechanism that enables GitOps, automated deployment, promotion within pipelines, and multi-environment support.

You can create a Deployment once you have at least one application with a provisioned branch. If you don't have one yet, follow the [Add Application](./add-application.md) guide. Additionally, ensure to familiarize yourself with the [Manage GitOps](gitops.md) page as it is required to add a GitOps repository before creating a Deployment.

## Create Deployment

The **Create new deployment** dialog has three steps: **Applications**, **Pipeline Configuration**, and **Review**.

Navigate to the **Deployments** section on the navigation bar and click **+ Create deployment**. Once clicked, the **Create new deployment** dialog will appear.

### Select Applications

In the **Applications** stage:

1. Select the application(s) you are going to deploy

2. Define target branches for the application(s). 

3. Click **Continue**.

### Configure Pipeline Settings

In the **Pipeline Configuration** stage, specify the following configuration:

1. Enter the deployment name that will be displayed in the Deployments list. The name must be at least two characters long and may contain lowercase letters, numbers, and dashes.

2. Enter an informative but concise description.

3. Select the necessary application from the **Mapping field name** drop-down menu and click on its name.

4. Specify the application parameters:

  * **Branch** - Select the application branch from the drop-down menu.

  * **Promote applications** - When enabled, applications will be promoted through stages using the latest successful build from each previous stage. When disabled, all stages will deploy the same version that was initially selected for the pipeline, regardless of any newer builds.

    :::note
      If there is another deployed environment stage with the respective codebase stream (equivalent to an image stream in OpenShift terminology), the pattern combination will be as follows: `[pipeline name]-[stage name]-[application name]-[verified]`.
    :::

5. Click **Continue**.

### Review and Create

Verify the Deployment configuration and click the **Create** button to finish the setup and proceed with configuring the environment.

  :::note
    The namespace created by the environment has the following pattern combination: **[KubeRocketCI namespace]-[environment name]-[stage name]**.
    Please be aware that the namespace length should not exceed 63 symbols.
  :::

## Create Environment

After creating a Deployment, select **Open Deployment** on the congratulations page. If you skipped this step, open the Deployment details page by clicking on its name.

### Basic Configuration

Environments are created the following way:

1. On the **Deployment details** menu, click the **Create Environment** button.

2. On the **Configure Environment** tab of the **Create Environment** dialog, fill in the following fields:

  * **Cluster** - Choose the cluster to deploy the stage in;
  * **Environment name** - Enter the Environment name;
  * **Deploy Namespace** - Specify the Kubernetes namespace where the resources will be deployed in. By default, this field is pre-populated automatically but keep in mind that the namespace name must be no longer than 63 symbols;
  * **Description** - Enter the description for this stage;

3. Click **Continue**.

### Pipeline Configuration

In this tab, you need to configure the deployment approach:

  * **Trigger type** - Select the trigger type:
    * _Auto_ - The environment will deploy automatically once the image is built. This keeps environments up-to-date without manual intervention.
    * _Manual_ - The user has to trigger deployment manually by clicking the **Deploy** button in the environment menu.

    Refer to the [Architecture Scheme of CD Pipeline Operator](https://github.com/epam/edp-cd-pipeline-operator/blob/master/docs/arch.md) for additional details.
  * **Deploy pipeline template** - Choose a predefined template outlining the deployment process for your application. You can select one of the built-in options (with or without autotests), or create a custom PipelineTemplate resource to add your own.
  * **Clean pipeline template** - Choose one of the pre-defined pipelines offered by KubeRocketCI to define the cleanup logic. If you have specific requirements for the environment cleanup procedure, you can create your own cleanup pipeline, which will be added to the **Clean Pipeline template** drop-down list.

### Quality Gates

On the **Add quality gates** tab, you define the quality control for the Deployment:

  * **Quality gate type** - Select the quality gate type:
    * Manual - Promotion must be confirmed manually in Tekton;
    * Autotests - Promotion proceeds automatically when the autotests pass successfully;
  * **Autotest** - Select the previously created [autotest](add-autotest.md) name;
  * **Autotest branch** - Specify a branch for the autotest;
  * **Step name** - Type the step name, which will be displayed in Tekton, for every quality gate.

    :::info Execution sequence
      The image promotion and execution of the pipelines depend on the sequence in which the environments are added.
    :::

### Review and Create

Verify the specified parameters and click the **Create environment** button to start the provisioning of the pipeline.

## Related Articles

* [Manage Deployments](../user-guide/manage-environments.md)
* [Add Quality Gate](../user-guide/add-quality-gate.md)
