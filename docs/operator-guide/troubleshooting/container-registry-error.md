---

title: "Container Registry Error"
description: "Troubleshooting steps for resolving connection issues with the container registry in KubeRocketCI, including credential updates through External Secret Operator and manual provisioning."
sidebar_label: "Container Registry Error"

---
<!-- markdownlint-disable MD025 -->

# Container Registry Error

<head>
  <link rel="canonical" href="https://docs.kuberocketci.io/docs/operator-guide/troubleshooting/container-registry-error/" />
</head>

## Problem

Failed to establish a connection with the container registry.

![Container registry issue](../../assets/operator-guide/troubleshooting/registry_issue.png "Container registry issue")

## Cause

The user credentials are incorrect.

## Solution 1 (External Secret Operator)

1. Navigate to Cloud Provider's Management Console.

2. Navigate to `AWS System Manager` -> `Parameter Store`.

3. Update the credentials for the container registry to ensure they are current and have the necessary permissions.

4. Wait for External Secret Operator Credential Update. Allow approximately 2 minutes for the External Secret Operator to detect and implement the credential changes.

## Solution 2 (Manually Provisioned Credentials)

1. In the KubeRocketCI portal navigate **Configuration** -> **Artifacts Storage** -> **Registry**:

2. Modify user credentials, including endpoint, user, or token, to ensure appropriate access rights.

    :::note
      For detailed instructions, visit the [managing container registries.](../../user-guide/manage-container-registries.md)
    :::

## Related Articles

* [Change Container Registry](../../user-guide/change-container-registry.md)
