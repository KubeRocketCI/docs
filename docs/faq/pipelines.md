---
title: "Pipelines Management"
description: "A list of frequently asked questions about the CI/CD Pipelines Management in KubeRocketCI."
sidebar_label: "Pipelines Management"
sidebar_position: 2
---
<!-- markdownlint-disable MD025 -->
This page contains a list of frequently asked questions related to the CI/CD Pipelines management in the KubeRocketCI.

### What Is a Pipeline in KubeRocketCI?

A pipeline in KubeRocketCI is a sequence of tasks that define the steps required to build, test, and deploy an application. Pipelines are defined using the Tekton Pipelines framework, which allows users to create custom pipelines using reusable tasks.

---

### How to Re-trigger a Pipeline in KubeRocketCI?

If you need to re-trigger a pipeline due to a failed run or to incorporate new changes, you have several options available:

- **KubeRocketCI Portal**: Navigate to the **Pipelines** section or the **Component details** -> **Branches** section, identify the failed pipeline, and select the action **Run again**.

- **Tekton Dashboard**: If Tekton Dashboard is integrated. In the KubeRocketCI Portal navigate **Overview** -> **Links** and click on **Tekton**. In the Tekton Dashboard navigate to the **PipelineRuns** section, identify the failed pipeline, and select the action **Rerun**.

- **Through VCS (GitHub/GitLab)**: Add a comment with word `/recheck` to your Pull Request (PR) or Merge Request (MR), and the pipeline will be triggered automatically.

:::tip
  Use comment approach with `/recheck` if the Pipeline is not available either on KubeRocketCI or Tekton Dashboard.
:::

---

### What Are the Available Options for Triggering Pipelines in KubeRocketCI?

Different pipelines within the KubeRocketCI platform are triggered by specific events,
ensuring that the appropriate actions are taken in response to changes in the codebase or the project environment.

The events triggering the three main types of pipelines are as follows:

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

- **Deploy Pipeline (in case of [auto deploy](../user-guide/add-cd-pipeline.md#the-stages-menu))**:
  - Triggered when a new tag is added to a `codebaseimagestream`, upon successful completion of the `build pipeline`.
  - This pipeline is designed to automatically deploy the newly built images to the appropriate environments.

For further details on configuring these triggers review the `TektonTriggers` configuration available in the [Tekton repository](https://github.com/epam/edp-tekton/tree/master/charts/pipelines-library/templates/triggers).
