---
title: "Pipelines Management"
description: "A list of frequently asked questions about the CI/CD Pipelines Management in KubeRocketCI."
sidebar_label: "Pipelines Management"
sidebar_position: 2
---
<!-- markdownlint-disable MD025 -->
This page contains a list of frequently asked questions related to the CI/CD Pipelines management in the KubeRocketCI.

<head>
  <link rel="canonical" href="https://docs.kuberocketci.io/docs/faq/pipelines/" />
</head>

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

### Does KubeRocketCI Integrate with GitHub Actions, GitLab CI, or Azure Pipelines for CI/CD?

KubeRocketCI is built upon [Tekton](../operator-guide/ci/tekton-overview.md) and [Argo CD](../operator-guide/cd/argocd-integration.md) for its CI/CD processes, emphasizing a Kubernetes-native strategy.

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

- **Deploy Pipeline (in case of [auto deploy](../user-guide/add-cd-pipeline.md#the-environments-menu))**:
  - Triggered when a new tag is added to a `codebaseimagestream`, upon successful completion of the `build pipeline`.
  - This pipeline is designed to automatically deploy the newly built images to the appropriate environments.

For further details on configuring these triggers review the `TektonTriggers` configuration available in the [Tekton repository](https://github.com/epam/edp-tekton/tree/master/charts/pipelines-library/templates/triggers).
