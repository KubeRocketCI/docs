---

title: "Deploy Application"
description: "Detailed guide on deploying your first application in KubeRocketCI, including creating a GitOps repository, deployment flow, and executing the deployment."
sidebar_label: "Deploy Application"

---
<!-- markdownlint-disable MD025 -->

# Deploy Application

<head>
  <link rel="canonical" href="https://docs.kuberocketci.io/docs/quick-start/deploy-application" />
</head>

Now, let's proceed to deploy our first application. This page offers detailed instructions on how to create an environment and deploy the application within it.

## Create GitOps Repository

As a prerequisite, create a GitOps repository in your GitHub account. KubeRocketCI Portal adheres to the GitOps approach when working with environments. In a GitOps repository, values are saved to redefine the default behavior (parameters) of deployment for each environment. The creation of a GitOps repository involves the following two steps:

1. In the UI Portal, navigate to **Configuration** -> **Deployment** -> **GitOps** and click **+ Add GitOps repository**:

    ![GitOps tab](../assets/quick-start/gitops_section.png "GitOps tab")

2. Define the following values and click **Save**:

    - Git server: `github`
    - Git repo relative path: `github_account_name`
    - Repository Name: `edp-gitops`

    ![GitOps tab](../assets/quick-start/add_gitops_repository.png "GitOps tab")

## Create Deployment Flow

To create a deployment flow, follow the steps below:

1. In the KubeRocketCI portal, navigate to **Deployments** and click the **+ Create deployment** button:

    ![Deployment flows section](../assets/quick-start/create_environment.png "Deployment Flows section")

2. In the **Applications** stage, select `my-go-gin-app` application, `main` branch, and click **Continue ->**:

    ![Applications stage](../assets/quick-start/applications_stage.png "Applications stage")

3. In the **Pipeline configuration** tab, fill in the required fields and click **Continue ->**:

    ![Pipeline configuration](../assets/quick-start/pipeline_configuration.png "Pipeline configuration")

4. In the **Review and create** tab, verify the Deployment configuration and click **Create Deployment**:

    ![Review and create](../assets/quick-start/review_and_create.png "Review and create")

5. Once the Deployment is created, click the **Go to Deployment** button on the congratulations window.

6. In the **Deployment** details page, click the **Create environment** button:

    ![Create environment](../assets/quick-start/create-environment.png "Create environment")

7. On the **Basic configuration** stage, define the following values and click **Continue ->**:

    - Cluster: `in-cluster`
    - Environment name: `dev`
    - Namespace: `edp-my-go-gin-app-dev`
    - Description: `Development stage`

    ![Basic configuration](../assets/quick-start/basic-configuration-stage.png "Basic configuration")

8. On the **Pipeline configuration** stage, define the following values and click **Next**:

    - Trigger type: `Manual`
    - Deploy Pipeline template: `deploy`
    - Clean Pipeline template: `clean`

    ![Pipeline configuration](../assets/quick-start/pipeline_configuration_stage.png "Pipeline configuration")

9. On the **Add quality gates** tab, define the quality gates and click **Create**:

    - Quality gate type: `Manual`
    - Step name: `dev`

    ![Add quality gates window](../assets/quick-start/define-quality-gates.png "Add quality gates window")

10. On the congratulations window, click **Open environment**:

    ![Open environment](../assets/quick-start/go-to-environment.png "Open environment")

   The created deployment flow will be added to the deployment flows list.

## Application Deployment

Once you enter the environment details page, proceed to deploy the application:

1. Click the **Configure deploy** button.

2. Select the Image stream version.

3. Click the **Start deploy** button:

    ![Deploying application](../assets/quick-start/deploy_application.png "Deploying application")

4. Watch the PipelineRun completion status by navigating to **Pipelines** tab and clicking the PipelineRun name:

    ![Deploying application](../assets/quick-start/deploy_pipeline_status.png "Deploying application")

Congratulations on completing the Quick Start guide! We hope you found this journey enjoyable.

Now that you have a good understanding of how KubeRocketCI works, you can further enhance its capabilities by integrating it with [Nexus](../operator-guide/artifacts-management/nexus-sonatype.md). Additionally, explore other functionalities detailed in our [Use Cases](../use-cases/index.md) section. If you're eager to unlock the full potential of KubeRocketCI, navigate to the [Operator Guide](../operator-guide/index.md) to fine-tune your KubeRocketCI for your specific requirements!
