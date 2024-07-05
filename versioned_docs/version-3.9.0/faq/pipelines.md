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

### How to Re-trigger a Pipeline in KubeRocketCI?

If you need to re-trigger a pipeline due to a failed run or to incorporate new changes, you have several options available:

- **KubeRocketCI UI Portal**: Navigate to the **Pipelines** section or the **Component details** -> **Branches** section, identify the failed pipeline, and select the action `Run again`.

- **Tekton Dashboard**: If Tekton Dashboard is integrated. In the KubeRocketCI Portal navigate **Overview** -> **Links** and click on **Tekton**. In the Tekton Dashboard navigate to the `PipelineRuns` section, identify the failed pipeline, and select the action `Rerun`.

- **Through VCS (GitHub/GitLab)**: Add a comment with word `/recheck` to your Pull Request (PR) or Merge Request (MR), and the pipeline will be triggered automatically.

:::tip
  Use comment approach with `/recheck` if the Pipeline is not available either on KubeRocketCI or Tekton Dashboard.
:::
