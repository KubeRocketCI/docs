---
title: "Namespace Configuration Audits"
sidebar_label: "Configuration Audits"
description: "Kubernetes resource misconfigurations in the namespace — audit reports and findings."
---
<!-- markdownlint-disable MD025 -->

# Namespace Configuration Audits

<head>
  <link rel="canonical" href="https://docs.kuberocketci.io/docs/user-guide/security/namespace-configuration-audits" />
</head>

**Configuration Audit Reports** under **Security > Namespace Security > Configuration Audits** show Kubernetes resource misconfigurations in the selected namespace. You can open each resource to see failed checks, descriptions, and remediation steps.

## Configuration Audit Reports

The page title is **Configuration Audit Reports**, with a short description such as *Kubernetes resource misconfigurations in namespace &lt;namespace&gt;*. In the top right you can change the **Namespace** to filter reports.

### Table

Use the **Columns** control above the table to choose which columns are visible. The table includes:

| Column           | Description |
|------------------|-------------|
| **Resource Name** | Name of the Kubernetes resource (e.g. ReplicaSet name). |
| **Resource Kind** | Kind of resource (e.g. ReplicaSet). |
| **Critical**      | Number of critical findings. |
| **High**          | Number of high-severity findings. |
| **Medium**        | Number of medium-severity findings. |
| **Low**           | Number of low-severity findings. |
| **Total Checks**  | Total number of checks run. |
| **Last Updated**  | Date and time of the last audit. |

Each row has an **eye icon** (or similar) at the end to open **Audit Details**. **Pagination** at the bottom (e.g. "Rows per page: 25", "1–1 of 1") and navigation arrows let you move through the list.

## Audit Details

When you open a resource, the breadcrumbs show **Security > Namespace Security > Configuration Audits > Audit Details**.

### Header

* **Resource** — Name and kind (e.g. `webserver-bc6dbb848`, ReplicaSet) in a highlighted block.
* **Scan summary** — **Namespace**, **Checks** (total), **Passed**, **Failed** (e.g. "Checks: 3 Passed: 0 Failed: 3"), **Scanner** and version (e.g. Trivy v0.29.0), **Last scan** (date and time).
* **Severity counts** — Badges for Critical, High, Medium, Low (e.g. "0 Critical", "3 High").

### Audit Findings Table

Above the table you can filter by **Severity** (e.g. "All severities") and **Status** (e.g. "All"). The **Columns** button customizes visible columns.

The table lists each finding with:

| Column      | Description |
|-------------|-------------|
| **Check ID** | Identifier of the check (e.g. KSV014, KSV118). Rows can be expanded to show full details. |
| **Title**    | Short title (e.g. "Root file system is not read-only", "Default security context configured"). |
| **Category** | Category of the check (e.g. "Kubernetes Security Check"). |
| **Severity** | Severity level (e.g. High), often with color. |
| **Status**   | Result (e.g. Fail), often with an icon. |

**Expand a row** to see:

* **Description** — Why the check matters (e.g. an immutable root filesystem limits what attackers can write to disk).
* **Messages** — Concrete instance of the issue (e.g. which container and resource should be changed).
* **Remediation** — What to change to fix it (e.g. set `containers[].securityContext.readOnlyRootFilesystem` to `true`).

Use this view to understand each finding and apply the suggested remediation. **Pagination** at the bottom (e.g. "1–3 of 3", "Rows per page: 25") applies when there are many findings.

## Related Articles

* [Namespace RBAC Assessments](./namespace-rbac-assessments.md)
* [Namespace Infrastructure Assessments](./namespace-infrastructure-assessments.md)
