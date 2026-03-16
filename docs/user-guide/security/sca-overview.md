---
title: "SCA Overview"
sidebar_label: "Overview"
description: "Portfolio-level Software Composition Analysis metrics and policy violations."
---
<!-- markdownlint-disable MD025 -->

# SCA Overview

<head>
  <link rel="canonical" href="https://docs.kuberocketci.io/docs/user-guide/security/sca-overview" />
</head>

The Security section covers security settings, access control, secrets management, and protected resources. It is organized into the following sub-sections:

* **SCA** (Software Composition Analysis) — [Overview](./sca-overview), [Projects](./sca-projects)
* **SAST** — [SAST](./sca-sast)
* **Container Scanning** — [Overview](./container-scanning-overview), [Vulnerability Reports](./container-vulnerability-reports), [Exposed Secrets](./container-exposed-secrets)
* **Namespace Security** — [Configuration Audits](./namespace-configuration-audits), [RBAC Assessments](./namespace-rbac-assessments), [Infrastructure Assessments](./namespace-infrastructure-assessments)
* **Cluster Security** — [Compliance](./cluster-compliance), [Configuration Audits](./cluster-configuration-audits), [RBAC Assessments](./cluster-rbac-assessments), [Infrastructure Assessments](./cluster-infrastructure-assessments), [Vulnerability Reports](./cluster-vulnerability-reports)
* **Compliance** — [Configuration Audits](./compliance-configuration-audits), [RBAC Assessments](./compliance-rbac-assessments), [Infrastructure Assessments](./compliance-infrastructure-assessments), [Vulnerability Reports](./compliance-vulnerability-reports)

The **Software Composition Analysis** portfolio dashboard (this page) shows portfolio-level vulnerability metrics and policy violations across all projects. Use it to track vulnerabilities, projects at risk, and policy compliance over time.

## Key Metrics

Four KPI cards with trend lines summarize:

* **Portfolio Vulnerabilities** — Total vulnerability count for the portfolio.
* **Projects at Risk** — Number of projects that have active risk (e.g. vulnerabilities or policy violations).
* **Vulnerable Components** — Number of components (dependencies) with known vulnerabilities.
* **Inherited Risk Score** — Aggregate risk score derived from vulnerabilities and policy state.

At the top of the page you can select **30 Days**, **60 Days**, **90 Days**, or **1 Year** to scope all metrics and charts.

## Portfolio Statistics

A summary block shows current counts:

* **Projects** and **Vulnerable Projects**
* **Components** and **Vulnerable Components**
* **Policy Violations** — total, plus split by **License**, **Operational**, and **Security**
* **Portfolio Vulnerabilities** and **Suppressed** (suppressed findings)

Use this to see the overall posture at a glance.

## Charts

* **Portfolio Vulnerabilities** — Stacked area chart of vulnerabilities over time by severity: Critical, High, Medium, Low, Unassigned. Legend shows current counts and percentages.

* **Policy Violations by State** — Stacked area chart of violations by state: Fail, Warn, Info.

* **Policy Violations by Classification** — Stacked area chart by type: Security, License, Operational.

* **Auditing Progress (Findings)** — Trend of **Audited** vs **Unaudited** findings over the selected period.

* **Auditing Progress (Violations)** — Trend of **Audited** vs **Unaudited** violations.

* **Projects** — Stacked area chart of **Non-Vulnerable** vs **Vulnerable** projects over time (with total project count).

* **Components** — Stacked area chart of **Non-Vulnerable** vs **Vulnerable** components over time (with total component count).

Charts use the same time range as the page filter and show a last-measurement timestamp.

## Related Articles

* [SCA Projects](./sca-projects.md)
* [Observability](../observability.md)
* [KubeRocketCI Widgets](../widgets.md)
