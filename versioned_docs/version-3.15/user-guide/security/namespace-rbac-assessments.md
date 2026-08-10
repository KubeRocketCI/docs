---
title: "Namespace RBAC Assessments"
sidebar_label: "RBAC Assessments"
description: "RBAC policy security assessments in the namespace — roles and findings."
---
<!-- markdownlint-disable MD025 -->

# Namespace RBAC Assessments

<head>
  <link rel="canonical" href="https://docs.kuberocketci.io/docs/user-guide/security/namespace-rbac-assessments" />
</head>

**RBAC Assessment Reports** under **Security > Namespace Security > RBAC Assessments** show RBAC policy security assessments in the selected namespace. You can open each resource (e.g. Role) to see failed checks, descriptions, and remediation steps.

## RBAC Assessment Reports

The page title is **RBAC Assessment Reports**, with a short description such as *RBAC policy security assessments in namespace &lt;namespace&gt;*. In the top right you can change the **Namespace** to filter reports.

### Table

Use the **Columns** control above the table to choose which columns are visible. The table includes:

| Column           | Description |
|------------------|-------------|
| **Resource Name** | Name of the RBAC resource (e.g. Role or RoleBinding name such as `crossplane-admin`, `crossplane-edit`). |
| **Resource Kind** | Kind of resource (e.g. **Role**). |
| **Critical**      | Number of critical findings. |
| **High**          | Number of high-severity findings. |
| **Medium**        | Number of medium-severity findings. |
| **Low**           | Number of low-severity findings. |
| **Total Checks**  | Total number of checks run. |

Each row has an **eye icon** (or similar) at the end to open **Assessment Details**. **Pagination** at the bottom (e.g. "Rows per page: 25", "1–3 of 3") and navigation arrows let you move through the list.

## Assessment Details

When you open an assessment from the list, the breadcrumbs show **Security > Namespace Security > RBAC Assessments > Assessment Details**.

### Header

* **Resource** — Name and kind (e.g. `crossplane-admin`, **Role**) with a shield icon in a highlighted block.
* **Scan summary** — **Namespace**, **Checks** (total), **Passed**, **Failed** (e.g. "Checks: 2 Passed: 0 Failed: 2"), **Scanner** and version (e.g. Trivy v0.29.0).
* **Severity counts** — Badges for Critical, High, Medium, Low (e.g. "2 Critical", "0 High").

### Security Checks Table

Above the table you can filter by **Severity** (e.g. "All severities") and **Status** (e.g. "All"). The **Columns** button customizes visible columns.

The table lists each finding with:

| Column      | Description |
|-------------|-------------|
| **Check ID** | Identifier of the check (e.g. KSV050, KSV045). Rows can be expanded to show full details. |
| **Title**    | Short title (e.g. "Manage Kubernetes RBAC resources", "No wildcard verb roles"). |
| **Category** | Category of the check (e.g. "Kubernetes Security Check"). |
| **Severity** | Severity level (e.g. Critical), often with color. |
| **Status**   | Result (e.g. Fail), often with an icon. |

**Expand a row** to see:

* **Description** — Why the check matters (e.g. an effective level of access equivalent to cluster-admin should not be provided).
* **Messages** — Concrete instance (e.g. which Role has which verbs on which resources, such as `roles` and `rolebindings`).
* **Remediation** — What to change (e.g. remove write permission verbs for `roles` and `rolebindings`, or avoid wildcard verbs).

Use this view to understand each RBAC finding and apply the suggested remediation. **Pagination** at the bottom (e.g. "1–2 of 2", "Rows per page: 25") applies when there are many findings.

## Related Articles

* [Namespace Configuration Audits](./namespace-configuration-audits.md)
* [Namespace Infrastructure Assessments](./namespace-infrastructure-assessments.md)
