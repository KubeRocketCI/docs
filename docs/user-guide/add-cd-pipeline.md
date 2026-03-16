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

In KubeRocketCI, deployments are managed through Deployments, a versatile mechanism that enables GitOps, automated deploy, promotion within pipelines, and multi-environment support.

The creation of the Deployment becomes available as soon as an application is created including its provisioning in a branch and the necessary entities for the Deployment. If you don't have the application yet, create by following the guidelines in the [Add Application](./add-application.md) page. Additionally, ensure to familiarize yourself with the [Manage GitOps](gitops.md) page as it is required to add a GitOps repository first before creating an Deployment.

## Create Deployment

The **Create new deployment** dialog has three steps: **Applications** and **Pipeline Configuration**, and **Review**.

Navigate to the **Deployments** section on the navigation bar and click **+ Create deployment**. Once clicked, the **Create new deployment** dialog will appear.

### Select Applications

In the **Applications** stage:

1. Select the application(s) you are going to deploy

2. Define target branches for the application(s). 

3. Click **Continue**.

### Configure Pipeline Settings

In the **Pipeline Configuration** stage, specify following configuration:

1. Enter the deployment name that will be displayed in the Deployments list. Enter at least two characters, use the lower-case letters, numbers, and dashes.

2. Enter informative but concise description.

3. Select the necessary application from the **Mapping field name** drop-down menu and click by it name.

4. Specify the application parameters:

  * **Branch** - Select the application branch from the drop-down menu.

  * **Promote applications** - When enabled, applications will be promoted through stages using the latest successful build from each previous stage. When disabled, all stages will deploy the same version that was initially selected for the pipeline, regardless of any newer builds.

    :::note
      If there is another deployed environment stage with the respective codebase stream (equal image stream as an OpenShift term), the pattern combination will be as follows: `[pipeline name]-[stage name]-[application name]-[verified]`.
    :::

5. Click **Continue**.

### Review and Create

Ensure you specified the Deployment configuration correctly and click the **Create** button to finish deployment configuration and proceed with configuring environment.

  :::note
    The namespace created by the environment has the following pattern combination: **[KubeRocketCI namespace]-[environment name]-[stage name]**.
    Please be aware that the namespace length should not exceed 63 symbols.
  :::

## Create Environment

After creating a Deployment, select **Open Deployment** on the congratulations page. If you didn't, open the Deployment details page by clicking on its name.

### Basic Configuration

Environments are created the following way:

1. On the **Deployment details** menu, click the **Create Environment** button.

2. On the **Configure Stage** tab of the **Create Stage** menu, fill in the necessary fields in the corresponding window:

  * **Cluster** - Choose the cluster to deploy the stage in;
  * **Environment name** - Enter the Environment name;
  * **Deploy Namespace** - Specify the Kubernetes namespace where the resources will be deployed in. By default, this field is pre-populated automatically but keep in mind that the namespace name must be no longer than 63 symbols;
  * **Description** - Enter the description for this stage;

3. Click **Continue**.

### Pipeline Configuration

In this tab, you need to configure deployment approach:

  * **Trigger type** - Select the trigger type. The key benefit of the automatic deploy feature is to keep environments up-to-date. The available trigger types are _Manual_ and _Auto_. When the _Auto_ trigger type is chosen, the environment will initiate automatically once the image is built. _Manual_ implies that user has to perform deploy manually by clicking the **Deploy** button in the environment menu. Please refer to the [Architecture Scheme of CD Pipeline Operator](https://github.com/epam/edp-cd-pipeline-operator/blob/master/docs/arch.md) page for additional details.
  * **Deploy pipeline template** - Choose a predefined blueprint outlining the deployment process for your application. While you have the option to incorporate custom deployment templates by generating a resource of the PipelineTemplate category, you can also opt for one of the preexisting options: with autotests or without.
  * **Clean pipeline template** - Choose one of the pre-defined pipelines offered by KubeRocketCI to define the cleanup logic. In case if you have specific requirements to the environment cleanup procedure, you can make up your own cleanup pipeline to use, which will be added to the **Clean Pipeline template** drop-down list.

### Quality Gates

On the **Add quality gates** tab, you define the quality control for the Deployment:

  * **Quality gate type** - Select the quality gate type:
    * Manual - The promoting process should be confirmed in Tekton manually;
    * Autotests - The promoting process should be confirmed by the successful passing of the autotests;
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
