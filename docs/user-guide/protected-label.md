---

title: "Protect Resources From Deletion/Modification"
sidebar_label: "Protect Resources From Deletion/Modification"
description: "Learn how to use the protected label feature in KubeRocketCI to prevent accidental deletion or modification of resources such as codebases, environments, and deployment flows."

---
<!-- markdownlint-disable MD025 -->

# Protect Resources From Deletion/Modification

<head>
  <link rel="canonical" href="https://docs.kuberocketci.io/docs/next/user-guide/protected-label" />
</head>

Since version 3.11.0, KubeRocketCI allows to prevent accidental resource deletion and modification by applying a protected label. This page describes the protected label feature, its purpose, types, and usage.

## Overview

In essence, protected label is a Kubernetes label that tells KubeRocketCI to block any delete or edit operations with the resource. The platform checks the label first before performing an operation with the resource.

Protected labels support the following resources:

* Codebases;
* Codebase branches;
* Codebase images;
* Deployment flows;
* Environments.

## Protection Types

Protection label can optionally block specific operations over a resource:

* **app.edp.epam.com/edit-protection: delete-update** - Blocks both the delete and modify operations;
* **app.edp.epam.com/edit-protection: delete** - Blocks only delete operations;
* **app.edp.epam.com/edit-protection: update** - Blocks only modify operations.

## Apply the Label

To apply the resource deletion and modification block, follow the steps below:

1. Navigate to the KubeRocketCI portal.

2. Switch the portal to the Kubernetes mode:

  ![Kubernetes mode](../assets/user-guide/components/protected-label/kubernetes-mode.png "Kubernetes mode")

3. Navigate to **Cluster** -> **Custom resources**:

  ![Custom resources tab](../assets/user-guide/components/protected-label/custom-resources.png "Custom resources tab")

4. In the custom resources list, enter **Codebase** in the filter field to find it and then select it in the list:

  ![Codebase resource type](../assets/user-guide/components/protected-label/select-codebase.png "Codebase resource type")

5. Enter the codebase you want to protect from accidental deletion and/or modification.

6. On the resource details page, click the **Edit** button:

  ![Edit button](../assets/user-guide/components/protected-label/edit-codebase.png "Edit button")

7. In the edit resource window, add the label to the **labels** section and click **Save and apply**:

  ![Add label](../assets/user-guide/components/protected-label/add-label.png "Add label")

8. Make sure the label was applied:

  ![Verify label](../assets/user-guide/components/protected-label/verify-label.png "Verify label")

9. Switch back to the KubeRocketCI mode, navigate to the **Components** section and try to delete the protected codebase:

  ![Deletion/Modification is locked](../assets/user-guide/components/protected-label/deletion-locked.png "Deletion/Modification is locked")

You should be unable to delete or edit the codebase as it has the protection label.

## Remove Protected Label

To remove a label, navigate back to the resource, edit the resource by removing the label, and save the changes.

## Related Articles

* [Manage Applications](../user-guide/application.md)
* [Customize Deploy Pipeline](../operator-guide/cd/customize-deploy-pipeline.md)
* [Add Deployment Flow](../user-guide/add-cd-pipeline.md)
* [Manage Deployment Flows](../user-guide/manage-environments.md)
