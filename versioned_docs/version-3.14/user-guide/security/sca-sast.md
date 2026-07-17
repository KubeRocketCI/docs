---
title: "SAST"
sidebar_label: "SAST"
description: "Static Application Security Testing — SonarQube projects and their code quality metrics."
---
<!-- markdownlint-disable MD025 -->

# SAST

<head>
  <link rel="canonical" href="https://docs.kuberocketci.io/docs/user-guide/security/sca-sast" />
</head>

**Static Application Security Testing (SAST)** in KubeRocketCI shows SonarQube projects and their code quality metrics. Use **Security > SAST > Projects** to see all projects and open details for any of them.

## SAST Projects

The **SAST > Projects** page lists projects analyzed by SonarQube. The subtitle describes it as *SonarQube projects and their code quality metrics*.

### Search and Table

* **Search** — Use **Search projects by name...** at the top to filter the list.
* **Columns** — The **Columns** control (e.g. "Columns 9") lets you choose which columns are shown.

The table includes:

| Column | Description |
|--------|-------------|
| **Project Name** | Name of the codebase or application. |
| **Quality Gate** | Status: **Passed** (green checkmark) or **N/A** (gray). |
| **Visibility** | Project visibility (e.g. **PUBLIC**). |
| **Bugs** | Number of bugs (e.g. `0 A`; the letter is a grade). |
| **Vulnerabilities** | Number of vulnerabilities (e.g. `0 A`). |
| **Code Smells** | Number of code smells (e.g. `2 A`, `1 A`). |
| **Coverage** | Test coverage percentage (e.g. `0.0%`, `77.8%`). |
| **Duplications** | Duplicated lines percentage (e.g. `0.0%`). |
| **Last Analysis** | Date and time of the last analysis. |

Use this view to monitor security and code quality across projects at a glance.

## Project Details

When you click a project in the list, you open **Project Details**. The breadcrumbs show **Security > SAST > Projects > Project Details**.

At the top you see:

* **Project name** (e.g. `example-sast-project`) and a **PUBLIC** badge.
* **Key** — SonarQube project key (e.g. `Key: example-sast-project`).
* **Last analysis** — Timestamp of the last run.
* **View in SonarQube** — Link to open the project in SonarQube.

A **metrics bar** shows summary grades and values: **Vulnerabilities**, **Bugs**, **Code Smells**, **Hotspots Reviewed**, **Coverage**, **Duplications** (with letter grades like A and color indicators).

Two main tabs are available: **Overview** and **Issues**.

### Overview Tab

The Overview tab shows card-based metrics:

* **Reliability** — Number of bugs (with grade badge, e.g. A).
* **Security** — Number of vulnerabilities (with grade badge).
* **Maintainability** — Code smells and technical debt (with grade badge).
* **Security Review** — Security hotspots to review (with grade badge).
* **Coverage** — Test coverage percentage (with color dot, e.g. red for 0%).
* **Duplications** — Duplicated lines density (with color dot).
* **Size** — Lines of code.
* **Quality Gate** — Quality gate status (e.g. **Passed** with OK badge).

**Quality Gate Details** is a table with columns: **Metric**, **Operator**, **Threshold**, **Actual**, **Status**. It lists each quality gate condition (e.g. `blocker_violations`, `critical_violations`) and whether the project meets it (OK or not). You can change visible columns via the **Columns** control (e.g. "Columns 5").

### Issues Tab

The **Issues** tab shows findings for the project (e.g. "Issues 2" when there are 2 issues).

* **Issue type filters** — **All Issues**, **Bugs**, **Vulnerabilities**, **Code Smells** to filter by kind.
* **Severity filters** — Buttons for **BLOCKER**, **CRITICAL**, **MAJOR**, **MINOR**, **INFO** to filter by severity.

The issues table has:

| Column | Description |
|--------|-------------|
| **Severity** | Severity with icon (e.g. **MAJOR**). |
| **Type** | Issue type (e.g. **CODE_SMELL**). |
| **Message** | Short description of the issue. |
| **File** | File path and line (e.g. `src/app/app.component.css:1`); often clickable. |
| **Effort** | Estimated fix effort (e.g. "1 min", "5 mins"). |
| **Created** | When the issue was created or last seen (e.g. analysis date). |

Use **Columns** to customize the table. **Pagination** at the bottom (e.g. "Rows per page: 25", "1–2 of 2") lets you move through the list when there are many issues.

## Related Articles

* [SCA Overview](./sca-overview.md)
* [SCA Projects](./sca-projects.md)
