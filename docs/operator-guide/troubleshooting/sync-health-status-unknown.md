---

title: "Sync and Health Status Unknown"
description: "Troubleshooting guide for resolving unknown health and sync status issues in KubeRocketCI, focusing on correct configuration of ArgoCD integration."
sidebar_label: "Sync & Health Status"

---
<!-- markdownlint-disable MD025 -->

# Sync and Health Status Unknown

<head>
  <link rel="canonical" href="https://docs.kuberocketci.io/docs/operator-guide/troubleshooting/sync-health-status-unknown/" />
</head>

## Problem

In the **Stage Detail** page, the application **Health status** and **Sync Status** is unknown. The `deploy` button doesn't work when attempting to create a stage.

  ![Stage is not synced](../../assets/operator-guide/troubleshooting/stage_is_not_synced.png "Stage is not synced")

## Cause

Incorrect Configuration of ArgoCD Integration

## Solution

1. Please verify that the [Argo CD Integration](../../operator-guide/cd/argocd-integration.md) process has been completed and all steps have been executed correctly.

2. Check the status of the application:

    ![Stage is now synced](../../assets/operator-guide/troubleshooting/stage_is_now_synced.png "Stage is now synced")

## Related Articles

* [Argo CD Integration](../../operator-guide/cd/argocd-integration.md)
