---

title: "KubeRocketCI: Tekton Overview"
sidebar_label: Tekton Overview
description: "KubeRocketCI is a platform that utilizes the Tekton stack to implement continuous integration and continuous delivery (CI/CD) pipelines, offering access to all Tekton features."

---
<!-- markdownlint-disable MD025 -->

# KubeRocketCI: Tekton Overview

<head>
  <link rel="canonical" href="https://docs.kuberocketci.io/docs/user-guide/tekton-pipelines" />
</head>

KubeRocketCI is a platform that utilizes the Tekton stack to implement continuous integration and continuous delivery (CI/CD) pipelines, offering access to all Tekton features.
It comes pre-configured with various Tekton resources, including pipelines, tasks, triggers, and other components. This documentation outlines how to interact with these Tekton resources within the KubeRocketCI platform, addressing common use cases, pipeline configuration, and execution processes.

## Prerequisites

Before executing pipelines, ensure that the project is onboarded to the KubeRocketCI platform and that the relevant branches are properly configured.

## Pipeline Types in the Platform

KubeRocketCI supports seven main types of pipelines:

* **Review Pipeline**: This pipeline is initiated when a pull request is created. It aims to check code quality and run tests before the code can be merged.

* **Build Pipeline**: This pipeline is triggered when a pull request is merged. It is responsible for building the application and generating deployable artifacts.

* **Deploy Pipeline**: This pipeline handles the deployment of the application to a target environment, applying specific configurations.

* **Clean Pipeline**: This pipeline is responsible for cleaning up any resources created during the deployment, ensuring a fresh environment for future deployments.

Each pipeline type is identified using specific labels in Kubernetes objects:

* `app.edp.epam.com/pipelinetype: review` — for review pipelines;
* `app.edp.epam.com/pipelinetype: build`— for build pipelines;
* `app.edp.epam.com/pipelinetype: deploy` — for deploy pipelines;
* `app.edp.epam.com/pipelinetype: clean`— for clean pipelines.

## Creating a Pipeline

To create a pipeline, you need to define and apply Tekton resources such as tasks, pipelines, and triggers in the cluster.

KubeRocketCI includes a library component for managing Tekton resources declaratively. This library integrates with Argo CD, enabling version control and automatic synchronization of pipeline definitions.

Below is the recommended flow for creating comprehensive and efficient Tekton pipelines:

1. Start by modifying an existing pipeline example from the library to suit your needs.
2. Test changes by applying resources directly to the cluster.
3. Once verified, commit changes to the repository to ensure they are tracked and version-controlled.
4. Check/apply changes in Argo CD.

## Configuring Pipelines for Projects

Proper pipeline configuration depends on its purpose. Pipeline configuration is different for CI and CD pipelines.

### Review and Build Pipelines (CI)

Two approaches are available for defining review and build pipelines:

1. [Custom Framework/Build Tool](/docs/use-cases/tekton-custom-pipelines):

* Useful for onboarding multiple projects with the same pipeline structure.
* Pipelines follow a naming pattern and are mapped to projects via project settings.

2. [Branch-Specific Pipelines](/docs/use-cases/custom-pipelines-flow#replace-existing-pipelines-for-components-with-custom-pipelines):

* Ideal for enabling different pipelines for different branches of a project.
* Pipelines are explicitly defined for specific branches.

### Deploy and Clean Pipelines

Deploy and Clean pipelines require the creation of a TriggerTemplate resource with appropriate labels:

* `app.edp.epam.com/pipelinetype: deploy` — for deploy pipelines;
* `app.edp.epam.com/pipelinetype: clean` — for clean pipelines.

The TriggerTemplate defines parameters (e.g., service account name, timeout) and references the deploy pipeline in its pipelineRef field.

## Trigger Pipelines

A specific event triggers each pipeline type.

### Review Pipeline

Trigger a review pipeline using one of the four methods:

1. Create a pull request in the repository targeting a configured branch. The review pipeline will be triggered automatically once the pull request is created:

  ![Delete branch](../assets/user-guide/tekton-pipelines/bitbucket-pull-request.png "Delete branch")

2. Use the **Run Again** button on the PipelineRun details page in the KubeRocketCI portal (if a PipelineRun exists):

  ![Delete branch](../assets/user-guide/tekton-pipelines/review-pipeline-run-again.png "Delete branch")

3. Use the **Rerun** button on the PipelineRun details page in the Tekton dashboard (if a PipelineRun exists):

  ![Delete branch](../assets/user-guide/tekton-pipelines/review-pipeline-tekton-dashboard-run-again.png "Delete branch")

4. Add a comment with the `/recheck` command on the pull request page:

:::note
The `/recheck` command works for all the available Version Control Systems.
:::

  ![Delete branch](../assets/user-guide/tekton-pipelines/bitbucket-pull-request-recheck.png "Delete branch")

### Build Pipeline

Overall, there are four methods of triggering a build pipeline:

1. Merge a pull request into a configured branch.

2. Use the **Run Again** button in the KubeRocketCI portal (if a PipelineRun exists):

  ![Delete branch](../assets/user-guide/tekton-pipelines/build-pipeline-run-again.png "Delete branch")

3. Use the Rerun button in the Tekton dashboard (if a PipelineRun exists):

  ![Delete branch](../assets/user-guide/tekton-pipelines/build-pipeline-tekton-dashboard-rerun.png "Delete branch")

4. Use the Trigger Build PipelineRun button in the KubeRocketCI portal within the branches section:

  ![Delete branch](../assets/user-guide/tekton-pipelines/trigger-build-pipeline-run.png "Delete branch")

### Deploy Pipeline

Deploy pipelines can be triggered manually or automatically. Automatic triggers are implemented using the **TriggerType** custom resource. There are three ways to trigger a deploy pipeline:

1. Use **Configure Deploy** and **Start Deploy** buttons in the KubeRocketCI portal:

  ![Delete branch](../assets/user-guide/tekton-pipelines/deploy-pipeline-configure-deploy.png "Delete branch")

2. Configure the pipeline with the `Auto` TriggerType to deploy automatically after the build pipeline finishes and a new artifact version is created.

3. Use the `Auto-stable` TriggerType for deploying stable component versions while updating only the rebuilt component.

### Clean Pipeline

Trigger the clean pipeline using the **Clean** button in the KubeRocketCI portal within the appropriate stage section.

## Related Articles

* [Pipelines Overview](../user-guide/pipelines.md)
* [Add Library](../user-guide/add-library.md)
* [Add Autotest](../user-guide/add-autotest.md)
