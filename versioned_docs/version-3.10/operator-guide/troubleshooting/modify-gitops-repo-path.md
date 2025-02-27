---

title: "Modify GitOps Repository Path"
description: "Guide on how to change the GitOps repository path in KubeRocketCI, including steps for adjusting the Codebase custom resource and deleting and recreating the repository."
sidebar_label: "Modify GitOps Repo Path"

---
<!-- markdownlint-disable MD025 -->

# Modify GitOps Repository Path

<head>
  <link rel="canonical" href="https://docs.kuberocketci.io/docs/operator-guide/troubleshooting/modify-gitops-repo-path/" />
</head>

This page explains how to change the path of a [GitOps](../../user-guide/gitops.md) repository after it has been created.

## Problem

The GitOps repository is located at an incorrect path:

  ![GitOps Repository Path](../../assets/operator-guide/troubleshooting/gitops-configuration.png "GitOps repository path")

## Cause

The GitOps repository path was either misconfigured at creation or needs to be modified as part of a migration or project restructuring.

## Solution 1 (Modify the Codebase Custom Resource)

This solution involves modifying the existing repository path in Codebase custom resource.

To fix the problem, follow the steps below:

1. Navigate to the **Kubernetes** tab in the bottom left corner in Portal UI.

    ![Kubernetes Tab](../../assets/operator-guide/troubleshooting/kubernetes-tab.png "Kubernetes tab")

2. Navigate to **Cluster** -> **Custom Resources**.

    ![Custom Resources Tab](../../assets/operator-guide/troubleshooting/custom-resources-tab.png "Custom resources tab")

3. Find and navigate to the `Codebase` custom resource using the search field in the top right corner.

    ![Search Tab](../../assets/operator-guide/troubleshooting/codebase-crd.png "Search tab")

4. Find the `Codebase` custom resource that corresponds to the GitOps repository.

    ![GitOps Custom Resource](../../assets/operator-guide/troubleshooting/edp-gitops-cr.png "GitOps custom resource")

5. Navigate to the resource and then press the **Edit** button in the top right corner.

    ![Edit Button](../../assets/operator-guide/troubleshooting/edit-button.png "Edit button")

6. In the **Edit** window modify the `gitUrlPath` field within the `spec` section to change the GitOps repository path and then press the **Save and Apply** button.

    ![Edit GitOps Repository Path](../../assets/operator-guide/troubleshooting/edit-codebase-resource.png "Edit GitOps repository path")

7. With the path updated, the GitOps repository will be recreated at the new path on the designated Git Server.

## Solution 2 (Delete and Recreate)

This solution involves deleting the existing GitOps repository and recreating it.

To fix the problem, follow the steps below:

1. Navigate to the **Kubernetes** tab in the bottom left corner in Portal UI.

    ![Kubernetes Tab](../../assets/operator-guide/troubleshooting/kubernetes-tab.png "Kubernetes tab")

2. Navigate to **Cluster** -> **Custom Resources**.

    ![Custom Resources Tab](../../assets/operator-guide/troubleshooting/custom-resources-tab.png "Custom resources tab")

3. Find and navigate to the `Codebase` custom resource using the search field in the top right corner.

    ![Search Tab](../../assets/operator-guide/troubleshooting/codebase-crd.png "Search tab")

4. Find the `Codebase` custom resource that corresponds to the GitOps repository.

    ![GitOps Custom Resource](../../assets/operator-guide/troubleshooting/edp-gitops-cr.png "GitOps custom resource")

5. Navigate to the resource and then press the **Delete** button in the top right corner.

    ![Delete Button](../../assets/operator-guide/troubleshooting/delete-button.png "Delete button")

6. Confirm the deletion by pressing the **Yes** button in the confirmation window.

    ![Delete Confirmation](../../assets/operator-guide/troubleshooting/confirm-deletion.png "Delete confirmation")

7. Click the **Portal** tab in the bottom left corner. Navigate to **Configuration** -> **Deployment** -> **GitOps** and recreate the GitOps repository with the new desired path.

    ![Create GitOps Repository](../../assets/operator-guide/troubleshooting/recreate-gitops-repo.png "Create GitOps repository")

## Related Articles

* [Manage GitOps](../../user-guide/gitops.md)
