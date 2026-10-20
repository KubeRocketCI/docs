---
title: "Install Velero"
description: "Learn how to install Velero for Kubernetes backup, recovery, and migration, covering installation steps, AWS plugin configuration, and basic commands for backup and restore."
sidebar_label: "Install Velero"
---
<!-- markdownlint-disable MD025 -->

# Automated Kubernetes Backup and Restore Workflows With Velero

<head>
  <link rel="canonical" href="https://docs.kuberocketci.io/docs/operator-guide/disaster-recovery/install-velero-add-ons" />
</head>

[Velero](https://velero.io/) is an open source tool to safely back up, recover, and migrate Kubernetes clusters and persistent volumes.
It works both on premises and in a public cloud. Velero consists of a server process running as a deployment in your
Kubernetes cluster and a command-line interface (CLI) with which DevOps teams and platform operators configure scheduled
backups, trigger ad-hoc backups, perform restores, and more.

Configuring and installing Velero involves two key steps:

- **Setting up AWS resources** – configuring IAM roles and policies.
- **Installing Velero** – deploying the Velero components into the Kubernetes cluster.

## Configuring AWS IAM Roles and Policies

Velero requires specific IAM permissions to interact with AWS resources. These permissions allow Velero to create and manage EBS snapshots and volumes, as well as read and write backup data to the designated S3 bucket. This policy ensures Velero can perform backup and restore operations within your AWS account.

To simplify the setup, we recommend using the [terraform-module/velero/kubernetes](https://registry.terraform.io/modules/terraform-module/velero/kubernetes/latest) module. This module automates the creation of the necessary IAM roles and policies for Velero. You can find Velero configuration parameters in the [terraform-aws-platform](https://github.com/KubeRocketCI/terraform-aws-platform/blob/master/eks/irsa.tf#L367) repository.

With this configuration, the following IAM role will be created:

- **AWSIRSA_\<ClusterName\>_Velero**: This role will be used by Velero to perform backup and restore operations by managing EBS snapshots and accessing the S3 backup bucket. The attached policy grants Velero the required permissions to perform backup and restore operations in AWS. It includes the following capabilities:

  - **EC2 permissions** — allow Velero to create, describe, tag, and delete EBS snapshots and volumes used during backup and restore processes.
  - **S3 bucket access** — allows listing the backup bucket and performing read/write operations on objects, including uploading backup data, retrieving it during restores, and deleting or tagging objects as needed.

## Install Velero

To deploy Velero in your Kubernetes cluster, we recommend using the [add-ons approach](https://github.com/epam/edp-cluster-add-ons/tree/main/clusters/core/addons/velero). Here's an example of how to configure values.yaml before installation:

```yaml title="values.yaml"
velero:
  # -- Velero service account settings for AWS access via IRSA. Replace the role ARN with your own IAM role.
  serviceAccount:
    server:
      create: true
      name: velero-server
      annotations:
        eks.amazonaws.com/role-arn: "arn:aws:iam::01234567890:role/AWSIRSA_Core_Velero"

  # -- Use Kubernetes secrets for AWS credentials (false = use IRSA)
  credentials:
    useSecret: false

  configuration:
    # -- Backup storage settings for Velero
    backupStorageLocation:
    - name: default
      provider: aws
      bucket: velero-core
      prefix: velero
      config:
        region: eu-central-1
    # -- Settings for volume snapshots
    volumeSnapshotLocation:
    - name: default
      provider: aws
      config:
        region: eu-central-1

  # -- Init container to load AWS plugin for Velero
  initContainers:
    - name: velero-plugin-for-aws
      image: velero/velero-plugin-for-aws:v1.13.1
      volumeMounts:
        - mountPath: /target
          name: plugins

  # --------------------------------------------
  # Velero Schedule: krci
  # --------------------------------------------
  # Description:
  #   Creates daily backups of the "krci" namespace
  #   on weekdays (Monday–Friday) at 13:00 UTC.
  #   Excludes PersistentVolumes and PVCs,
  #   does not snapshot volumes,
  #   stores backups in the "default" location,
  #   and retains them for 72 hours.
  # --------------------------------------------
  schedules:
    krci:
      disabled: true
      paused: false
      labels:
        cluster: core
        region: eu-central-1
      schedule: "0 13 * * 1-5"
      useOwnerReferencesInBackup: false
      template:
        excludedClusterScopedResources:
          - persistentvolumes
        excludedNamespaceScopedResources:
          - persistentvolumeclaims
        includedNamespaces:
          - krci
        snapshotVolumes: false
        storageLocation: default
        ttl: 72h0m0s
```
At the end of the file, you will find backup schedule settings that you can use as a template for creating your own schedules.

## Related Articles

* [Associate IAM Roles With Service Accounts](../infrastructure-providers/aws/enable-irsa.md)
