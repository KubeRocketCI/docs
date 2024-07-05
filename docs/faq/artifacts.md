---
title: "Artifacts Management"
description: "A list of frequently asked questions about the Artifacts Management in KubeRocketCI."
sidebar_label: "Artifact Management"
sidebar_position: 0
---
<!-- markdownlint-disable MD025 -->
This page contains a list of frequently asked questions related to artifact management in KubeRocketCI.

### How does artifact versioning work?

Artifact versioning in KubeRocketCI is designed to ensure each build and deployment can be uniquely identified, managed, and traced back to its source.

KubeRocketCI supports two major **versioning schemes**:

- **default**: generates versions based on the branch name and datetime, e.g. (`BRANCH-DATETIME`).
- **edp**: structures versions as `MAJOR.MINOR.PATCH-BUILD_ID`, based on the Semantic Versioning standards.

:::tip
  User can implement **Custom Versioning** by updating [`get-version`](https://github.com/epam/edp-tekton/tree/master/charts/pipelines-library/templates/tasks/getversion) CI step.
:::

**Artifact Tagging and Storage**: Artifacts are tagged on the `build pipeline` and stored in `git`, [`CodebaseImageStream`](../api/codebase.md#codebaseimagestream) and [`CodebaseBranch`](../api/codebase.md#codebasebranch).

**CodebaseBranch**: The CodebaseBranch custom resource is integral to the artifact versioning process in KubeRocketCI. It tracks and stores versioning details related to each branch. This includes:

- **Version History**: A list of all versions created from the branch.
- **Build Information**: Details of the current and last successful builds, which can include version identifiers.
