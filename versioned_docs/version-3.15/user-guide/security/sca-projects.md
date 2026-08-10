---
title: "SCA Projects"
sidebar_label: "Projects"
description: "Software composition analysis projects and their security metrics."
---
<!-- markdownlint-disable MD025 -->

# SCA Projects

<head>
  <link rel="canonical" href="https://docs.kuberocketci.io/docs/user-guide/security/sca-projects" />
</head>

The **SCA Projects** view lists software composition analysis projects and their security metrics. Use it to find projects by name or version and see risk scores, vulnerability counts, and policy violations at a glance.

## Projects Table

A search bar at the top lets you **search projects by name or version**. The table shows one row per project (or per project version) with these columns:

* **Project Name** — Name of the project (e.g. codebase or application).
* **Version** — Version or branch (e.g. `master`, `main`, `1.0.0`).
* **Latest** — Indicates whether this version is the latest.
* **Classifier** — Type of project: `APPLICATION`, `LIBRARY`, or other.
* **Last BOM Import** — Date and time of the last Bill of Materials (BOM) import.
* **BOM Format** — Format of the BOM (e.g. `CycloneDX 1.6`).
* **Risk Score** — Numerical risk score for the project.
* **Active** — Whether the project is active (e.g. `Active`).
* **Vulnerabilities** — Count of vulnerabilities; often shown with a horizontal bar (e.g. green when zero).
* **Policy Violations** — Count of policy violations; same visual style as vulnerabilities.

You can change which columns are visible using the **Columns** control (e.g. "Columns 10") and use pagination at the bottom (rows per page, e.g. 25; navigation for pages).

## Project Details

When you click a project row, you open **Project Details** for that project. The breadcrumbs show **Security > SCA > Projects > Project Details**.

At the top you see the project name (e.g. `edp-codebase-operator`), a branch/version dropdown (e.g. `master`), and a **View in Dependency Track** link. A summary row shows vulnerability counts by criticality: **Critical**, **High**, **Medium**, **Low**, **Unassigned** (each with a count).

Tabs let you switch between:

* **Overview** — Vulnerability trend graph, summary cards (Critical, High, Medium, Low, Unassigned, Risk Score), and policy violations by state and by classification.
* **Components** — List of components (dependencies) with counts.
* **Services** — Services associated with the project.
* **Dependency Graph** — Graph view of dependencies.
* **Audit Vulnerabilities** — Vulnerabilities pending or audited.
* **Exploit Predictions** — Predicted exploits.
* **Policy Violations** — Policy violations with breakdown by criticality.

### Overview Tab

* **Project Vulnerabilities** — Metadata (Last BOM Import, Last Vulnerability Analysis, Last Measurement), a **vulnerability trend** line chart over time by severity, and **summary cards** for Critical, High, Medium, Low, Unassigned, and Risk Score.
* **Policy Violations by State** — Chart or list of violations by state (e.g. Fail, Warn, Info).
* **Policy Violations by Classification** — Breakdown by classification (e.g. Security Risk, License Risk, Operational Risk) with counts and percentages.

## Related Articles

* [SCA Overview](./sca-overview.md)
* [Security](../security.md)
