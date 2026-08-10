---
title: "Cluster RBAC Assessments"
sidebar_label: "RBAC Assessments"
description: "Cluster-wide RBAC policy security assessments for ClusterRoles."
---
<!-- markdownlint-disable MD025 -->

# Cluster RBAC Assessments

<head>
  <link rel="canonical" href="https://docs.kuberocketci.io/docs/user-guide/security/cluster-rbac-assessments" />
</head>

**Cluster RBAC Assessment Reports** under **Security > Cluster Security > RBAC Assessments** show cluster-wide RBAC policy security assessments for **ClusterRoles**. Unlike [Namespace RBAC Assessments](namespace-rbac-assessments), the scope is the whole cluster and the assessed resources are ClusterRoles, not namespace-scoped Roles. You can open each report to see failed checks, descriptions, and remediation steps.

## Cluster RBAC Assessment Reports

The page title is **Cluster RBAC Assessment Reports**, with a short description: *Cluster-wide RBAC policy security assessments for ClusterRoles*.

### Table

Use the **Columns** control (e.g. "Columns 7") above the table to choose which columns are visible. The table includes:

| Column          | Description |
|-----------------|-------------|
| **Name**        | Name of the ClusterRole being assessed (e.g. `clusterrole-575df9df4d`). |
| **Critical**    | Number of critical findings. |
| **High**        | Number of high-severity findings. |
| **Medium**      | Number of medium-severity findings. |
| **Low**         | Number of low-severity findings. |
| **Total Checks**| Total number of checks run. |

Each row has an **eye icon** (or similar) at the end to open **Assessment Details**. **Pagination** at the bottom (e.g. "Rows per page: 25") and navigation arrows let you move through the list.

## Assessment Details

When you open an assessment from the list, the breadcrumbs show **Security > Cluster Security > Cluster RBAC Assessments > Assessment Details**.

### Header

* **Resource** — Name and kind (e.g. `clusterrole-575df9df4d`, **ClusterRole**) with a shield icon in a highlighted block.
* **Scan summary** — **Scope: Cluster**, **Checks** (total), **Passed**, **Failed** (e.g. "Checks: 1 Passed: 0 Failed: 1"), **Scanner** and version (e.g. Trivy v0.29.0).
* **Severity counts** — Badges for Critical, High, Medium, Low (e.g. "1 Critical", "0 High").

### Security Checks Table

Above the table you can filter by **Severity** (e.g. "All severities") and **Status** (e.g. "All"). The **Columns** button (e.g. "Columns 5") customizes visible columns.

The table lists each finding with:

| Column      | Description |
|-------------|-------------|
| **Check ID** | Identifier of the check (e.g. KSV114). Rows can be expanded to show full details. |
| **Title**    | Short title (e.g. "Manage webhookconfigurations"). |
| **Category** | Category of the check (e.g. "Kubernetes Security Check"). |
| **Severity** | Severity level (e.g. Critical), often with color. |
| **Status**   | Result (e.g. Fail), often with an icon. |

**Expand a row** to see:

* **Description** — Why the check matters (e.g. webhooks can intercept or mutate resources, including secrets and pod specs).
* **Messages** — Concrete instance (e.g. which ClusterRole has which verbs on which resources, such as `mutatingwebhookconfigurations` and `validatingwebhookconfigurations`).
* **Remediation** — What to change (e.g. remove write/impersonate verbs for webhook configuration resources; acceptable verbs may be get, list, watch).

Use this view to understand each finding and apply the suggested remediation. **Pagination** at the bottom (e.g. "1–1 of 1", "Rows per page: 25") applies when there are many findings.

## Related Articles

* [Namespace RBAC Assessments](./namespace-rbac-assessments.md)
* [Cluster Configuration Audits](./cluster-configuration-audits.md)
* [Cluster Infrastructure Assessments](./cluster-infrastructure-assessments.md)
* [Cluster Vulnerability Reports](./cluster-vulnerability-reports.md)
