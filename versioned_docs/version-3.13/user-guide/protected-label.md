---

title: "Protect Resources From Deletion/Modification"
sidebar_label: "Protect Resources From Deletion/Modification"
description: "Learn how to use the protected label feature in KubeRocketCI to prevent accidental deletion or modification of resources such as codebases, environments, and deployments."

---
<!-- markdownlint-disable MD025 -->

# Protect Resources From Deletion/Modification

<head>
  <link rel="canonical" href="https://docs.kuberocketci.io/docs/user-guide/protected-label" />
</head>

KubeRocketCI allows to prevent accidental resource deletion and modification by applying a protected label. This page describes the protected label feature, its purpose, types, and usage.

## Overview

Protected label is a Kubernetes label that tells KubeRocketCI to block any delete or edit operations with the resource. The platform checks the label first before performing an operation with the resource.

Protected labels support the following resources:

* [Codebases](../api/codebase.md#codebase);
* [Codebase branches](../api/codebase.md#codebasebranch);
* [Deployments](../api/cd-pipeline.md#cdpipeline);
* [Environments](../api/cd-pipeline.md#stage).

## Protection Types

Protection label can optionally block specific operations over a resource:

* **app.edp.epam.com/edit-protection: delete-update** - Blocks both the delete and modify operations;
* **app.edp.epam.com/edit-protection: delete** - Blocks only delete operations;
* **app.edp.epam.com/edit-protection: update** - Blocks only modify operations.

## Apply Protected Label

To apply the resource deletion and modification block, follow the steps below. We will use a codebase resource as an example, but the procedure applies to all the supported resources:

1. Open the terminal which has access to the cluster that runs KubeRocketCI.

2. Get the codebase list:

  ```bash
  kubectl get codebase -n krci
  ```

3. Define the codebase you want to protect from accidental deletion and/or modification.

4. Enter the resource edit menu:

  ```bash
  kubectl edit codebase <codebase name> -n krci
  ```

5. In the labels section of the codebase specifications, add the label from the [Protection Types](#protection-types) list.

6. Save and quit the menu.

## Remove Protected Label

To remove a label, navigate back to the resource, edit the resource by removing the label, and save the changes.

## Related Articles

* [Manage Applications](../user-guide/application.md)
* [Customize Deploy Pipeline](../operator-guide/cd/customize-deploy-pipeline.md)
* [Add Deployment Flow](../user-guide/add-cd-pipeline.md)
* [Manage Deployments](../user-guide/manage-environments.md)
