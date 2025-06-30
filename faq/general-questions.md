---
title: "General Questions"
description: "This page provides answers to frequently asked questions about KubeRocketCI operations, features, and workflows to enhance user understanding."
sidebar_label: "General Questions"
---
<!-- markdownlint-disable MD025 -->
This page provides answers to frequently asked questions about KubeRocketCI operations, features, and workflows to enhance user understanding.

### How Does Artifact Versioning Work?

<head>
  <link rel="canonical" href="https://docs.kuberocketci.io/faq/general-questions" />
</head>

Artifact versioning in KubeRocketCI is designed to ensure each build and deployment can be uniquely identified, managed, and traced back to its source.

KubeRocketCI supports two major **versioning schemes**:

- **default**: generates versions based on the branch name and datetime, `BRANCH-DATE-TIME` (e.g. main-20250211-133456).
- **SemVer**: structures versions as `MAJOR.MINOR.PATCH-BUILD_ID-TAG`, based on the Semantic Versioning standards. (e.g. build/0.1.0-SNAPSHOT.3).

SemVer versioning offers more advanced tagging. There are two image tags appended to codebase images:

- **RC**: This tag indicates applications built in release branches. This tag means that these applications are tagged as release candidates (RC).
- **Snapshot**: This tag marks applications and their versions as snapshots, highlighting that these versions are recommended only for development purposes.

:::note
  You can't set the branch as a release candidate via KubeRocketCI portal if you use default versioning.
:::

:::tip
  User can implement **Custom Versioning** by updating [`get-version`](https://github.com/epam/edp-tekton/tree/master/charts/pipelines-library/templates/tasks/getversion) CI step.
:::

**Artifact Tagging and Storage**: Artifacts are tagged on the `build pipeline` and stored in `git`, [`CodebaseImageStream`](/docs/api/codebase#codebaseimagestream) and [`CodebaseBranch`](/docs/api/codebase#codebasebranch).

**CodebaseBranch**: The CodebaseBranch custom resource is integral to the artifact versioning process in KubeRocketCI. It tracks and stores versioning details related to each branch. This includes:

- **Version History**: A list of all versions created from the branch.
- **Build Information**: Details of the current and last successful builds, which can include version identifiers.

---

### What Do Tags Mean?

There are two types of tags in KubeRocketCI:

- **VCS tags**: These tags are applied to the application version in the Version Control System (VCS).
- **Codebase tags**: These tags are applied to the codebase image streams (CBIS).

Both of these tags are added when the build pipeline completes successfully. VCS tag is added in the `git-tag` step, whereas codebase tag is added on the `update-cbis` step of build pipeline.
Tags help you differ images from each other. In the Version Control System, you can see the code of a specific version by selecting the corresponding VCS tag. When deploying applications, you select a codebase image tag.

Generally, VCS tags and codebase tags have identical naming. If the newly built application gets the `0.1.0-SNAPSHOT.3` tag, the codebase tag should have the same name unless you redefine it manually. VCS tags depend on the versioning type. Versioning types are described in the [previous topic](#how-does-artifact-versioning-work).

Codebase tags also have special marks and appear only in the KubeRocketCI portal when selecting an application to deploy:

- **Latest**: Assigned when a new application version is built and deployment is initiated.
- **Stable**: Assigned to the latest successfully deployed application after passing the project's quality gates.

To learn more about codebase tags, read the [Deployment Strategies Overview](/docs/user-guide/auto-stable-trigger-type) page.

---

### What Are the Platform Modes Available in KubeRocketCI?

KubeRocketCI offers two distinct operation modes that provide different ways to interact with the platform:

1. **Portal Mode**:
    - The default mode when accessing the KubeRocketCI portal
    - Provides a user-friendly interface to manage KubeRocketCI-specific resources
    - Allows managing codebases (applications, libraries, autotests), CD pipelines, quality gates, and other platform-specific resources
    - Offers simplified workflows for DevOps operations without requiring deep Kubernetes knowledge

2. **Kubernetes Mode**:
    - Accessed by toggling the mode switcher in the KubeRocketCI portal
    - Provides direct access to the underlying Kubernetes resources and configurations
    - Allows working with all Kubernetes objects (deployments, pods, services, config maps, etc.)
    - Ideal for advanced cluster management, troubleshooting, and custom configurations

You can switch between these modes using the **KubeRocketCI/Kubernetes mode switcher** in the portal UI. This toggle enables you to seamlessly transition between managing high-level platform resources and working directly with Kubernetes objects, providing flexibility for users with different roles and expertise levels.

---

### What Is a Pipeline in KubeRocketCI?

A pipeline in KubeRocketCI is a sequence of tasks that define the steps required to build, test, and deploy an application. Pipelines are defined using the [Tekton Pipelines framework](https://github.com/epam/edp-tekton/), which allows users to create custom pipelines using reusable tasks.

Within the KubeRocketCI platform, there are **three primary types of pipelines**, each serving distinct purposes within the Continuous Integration/Continuous Deployment lifecycle:

1. **Review Pipeline**:
   - The Review Pipeline is designed to automate the integration of code changes from multiple contributors into a single software project (codebase). It typically includes steps for compiling the code, running tests (unit tests, integration tests, etc.).
   - The primary goal is to detect integration errors as quickly as possible, which is achieved by triggering the pipeline on each code commit to a repository.

2. **Build Pipeline**:
    - The Build Pipeline takes center stage following the completion of the code review process. Its primary function is to automate the compilation, testing, and packaging of the code into a build artifact. This artifact can then be deployed to various environments for further testing and promotion to production.

3. **Deploy Pipeline**:
    - Focused on the deployment aspect, the Deploy Pipeline automates the process of deploying software to environments. This type of pipeline can be triggered manually or automatically, based on the project's deployment strategy.
    - It often includes steps for provisioning infrastructure, deploying the application, and post-deployment tests to ensure the application runs correctly in the production environment.

4. **Clean Pipeline**:
    - Clean Pipeline is used to customize environment cleanup. While the **Delete** button deletes an Argo CD Application resource the Clean Pipeline aims to cleanup non-platform dependencies, such databases, third-party tools, etc. This pipeline can be triggered in the environment details page.
    - It implies users to create a custom clean pipeline and apply it to the platform to implement user-defined cleanup logic.

---

### Does KubeRocketCI Integrate With GitHub Actions, GitLab CI, or Azure Pipelines for CI/CD?

KubeRocketCI is built upon [Tekton](/docs/operator-guide/ci/tekton-overview) and [Argo CD](/docs/operator-guide/cd/argocd-integration) for its CI/CD processes, emphasizing a Kubernetes-native strategy.

It does not integrate with GitHub Actions, GitLab CI, Azure Pipelines, or similar CI/CD tools.

This design choice ensures that KubeRocketCI remains `vendor-neutral` and `cloud-agnostic`, allowing it to operate effectively across any Kubernetes environment without reliance on specific CI services or cloud platforms.

---

### What Are the Available Options for Triggering Pipelines in KubeRocketCI?

Different pipelines within the KubeRocketCI platform are triggered by specific events,
ensuring that the appropriate actions are taken in response to changes in the codebase or the project environment.

The [three primary types](#what-is-a-pipeline-in-kuberocketci) of pipelines in KubeRocketCI are triggered by the following events:

- **Review Pipeline**:
  - Triggered by events related to pull requests and issue comments.
  - Configuration example from `TektonTriggers`:

    <details>
    <summary>GitHub Trigger Configuration</summary>
    ```yaml
    apiVersion: triggers.tekton.dev/v1beta1
    kind: Trigger
    metadata:
      name: github-review
    spec:
      interceptors:
        - ref:
            name: "github"
          params:
            - name: "eventTypes"
              value: ["pull_request", "issue_comment"]
        - ref:
            name: "cel"
          params:
            - name: "filter"
              value: "body.action in ['opened', 'synchronize', 'created']"
      bindings:
        - ref: github-binding-review
      template:
        ref: github-review-template
    ```
    </details>

- **Build Pipeline**:
  - Triggered when a pull request is closed and merged.
  - Configuration example from TektonTriggers:

    <details>
    <summary>GitHub Trigger Configuration</summary>
    ```yaml
    apiVersion: triggers.tekton.dev/v1beta1
    kind: Trigger
    metadata:
      name: github-build
    spec:
      interceptors:
        - ref:
            name: "github"
          params:
            - name: "eventTypes"
              value: ["pull_request"]
        - ref:
            name: "cel"
          params:
            - name: "filter"
              value: "body.action in ['closed'] && body.pull_request.merged == true"
      bindings:
        - ref: github-binding-build
      template:
        ref: github-build-template
    ```
    </details>

- **Deploy Pipeline (in case of [auto deploy](/docs/user-guide/add-cd-pipeline#the-environments-menu))**:
  - Triggered when a new tag is added to a `codebaseimagestream`, upon successful completion of the `build pipeline`.
  - This pipeline is designed to automatically deploy the newly built images to the appropriate environments.

- **Clean Pipeline**:
  - Triggered when clicking the **Clean** button in the environment details page.
  - This pipeline is designed to perform an [advanced environment cleanup](/docs/operator-guide/cd/customize-environment-deletion) of the deployed applications, deleting specific resources, such as databases, environment variables, etc.

For further details on configuring these triggers, review the `TektonTriggers` configuration available in the [Tekton repository](https://github.com/epam/edp-tekton/tree/master/charts/pipelines-library/templates/triggers).

For more details on how to trigger the pipelines, read the [KubeRocketCI: Tekton Overview](/docs/user-guide/tekton-pipelines) page.

---

### What are Deployment Flows and Their Relation to Environments?

Deployment Flow is a business entity that manages the delivery process of the selected application set via environments. For more information about Deployment Flows and Environments in KubeRocketCI, read the [Add Deployment Flow](/docs/user-guide/add-cd-pipeline) page.
