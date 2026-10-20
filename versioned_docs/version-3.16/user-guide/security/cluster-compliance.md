---
title: "Cluster Compliance"
sidebar_label: "Compliance"
description: "Kubernetes security compliance benchmarks (CIS, NSA, PSS) for the cluster."
---
<!-- markdownlint-disable MD025 -->

# Cluster Compliance

<head>
  <link rel="canonical" href="https://docs.kuberocketci.io/docs/user-guide/security/cluster-compliance" />
</head>

**Cluster Compliance Reports** under **Security > Cluster Security > Compliance** show Kubernetes security compliance benchmarks (CIS, NSA, PSS) for the selected cluster. You can open each report to see the pass rate, severity breakdown, and individual controls.

## Cluster Compliance Reports

The page title is **Cluster Compliance Reports**, with a short description: *Kubernetes security compliance benchmarks (CIS, NSA, PSS)*.

### Table

Use the **Columns** control (e.g. "Columns 7") to choose which columns are visible. The table includes:

| Column       | Description |
|--------------|-------------|
| **Title**    | Full name of the compliance standard (e.g. National Security Agency - Kubernetes Hardening Guidance v1.0, Kubernetes Pod Security Standards - Restricted/Baseline, AWS EKS CIS Foundations v1.4). |
| **Type**     | Short type label with a colored badge: **NSA**, **PSS-RESTRICTED**, **PSS-BASELINE**, **CIS**. |
| **Version**  | Version of the standard (e.g. 1.0, 0.1). |
| **Pass**     | Number of passed checks (e.g. 27, 17, 11, 48). |
| **Fail**     | Number of failed checks (dash when zero). |
| **Pass Rate**| Percentage of passed checks (e.g. 100%, 94%). |
| **Actions**  | **View Details** button to open the full report. |

**Pagination** at the bottom (e.g. "Rows per page: 25", "1–4 of 4") and navigation arrows let you move through the list. Click **View Details** on a row to open the report for that benchmark.

## Report Details

When you open a report, the breadcrumbs show **Security > Cluster Security > Compliance > &lt;benchmark name&gt;** (e.g. *National Security Agency - Kubernetes Hardening Guidance v1.0*).

### Header

Header contains the following information:

* **Report title** — Full benchmark name and optional subtitle; often a link to the source (e.g. nsa.gov).
* **Overall status** — **Pass Rate** (e.g. 100%) in a bar, and summary **Passed** / **Failed** counts (e.g. "27 Passed", "0 Failed") with icons.

### Severity Breakdown

Four cards summarize controls by severity:

* **Critical** — Count and status (e.g. "8", "All passed").
* **High** — Count and status (e.g. "5", "All passed").
* **Medium** — Count and status (e.g. "11", "All passed").
* **Low** — Count and status (e.g. "3", "All passed").

### Compliance Controls Table

Above the table you can filter by **Severity** (e.g. "All severities") and **Status** (e.g. "All"). The **Columns** button customizes visible columns.

The table lists each control:

| Column       | Description |
|--------------|-------------|
| **Control ID** | Identifier (e.g. 3.0, 5.0, 5.1, 6.0, 1.2, 8.0). |
| **Name**       | Short name of the control (e.g. "Use CNI plugin that supports NetworkPolicy API (Manual)", "Encrypt etcd communication", "Make sure -authorization-mode=RBAC"). |
| **Severity**   | Critical, High, Medium, or Low. |
| **Status**     | Pass or Fail. |
| **Failures**   | Details of failures (dash when passed). |

Use this view to see which controls passed or failed and to plan remediation. **Pagination** at the bottom (e.g. "Rows per page: 25") applies when there are many controls.

## Related Articles

* [Cluster Configuration Audits](./cluster-configuration-audits.md)
* [Cluster RBAC Assessments](./cluster-rbac-assessments.md)
* [Cluster Infrastructure Assessments](./cluster-infrastructure-assessments.md)
* [Cluster Vulnerability Reports](./cluster-vulnerability-reports.md)
