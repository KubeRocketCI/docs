---
title: "Overview"
sidebar_label: "Overview"
description: "The main KubeRocketCI dashboard: pipeline metrics, resource health, activity, integrations, and quick links."
---
<!-- markdownlint-disable MD025 -->

# Overview

<head>
  <link rel="canonical" href="https://docs.kuberocketci.io/docs/user-guide/overview" />
</head>

The **Overview** page under **Platform** is the main dashboard for the selected cluster and namespace. It summarizes pipeline activity, resource health, recent work, usage, security and quality signals, integrations, and links to external tools. For a deeper description of individual widgets, see [KubeRocketCI Widgets](./widgets.md).

## Summary Cards (Header)

The top row gives a quick read on **today’s** pipeline health. Four cards show pipeline metrics for the current context:

* **Total Pipeline Runs** — Number of runs today.
* **Success Rate** — Share of successful runs (or “no data” when there is nothing to show).
* **Failed Pipelines** — Count of failed runs.
* **Average Duration** — Average run duration (or “no data” when not applicable).

## Pipeline Activity

The **Pipeline Activity (7 days)** widget helps you see trends and spikes over the last week. It is a bar chart: each day is a bar split by outcome — **Succeeded** (e.g. green) and **Failed** (e.g. red) — so you can spot busy days and failure spikes at a glance.

## Resource Health

**Resource Health** is a strip of circular indicators so you can scan counts and status without opening other sections. Each circle summarizes one entity type:

* **Codebases** — Number of codebases.
* **Branches** — Total branches across codebases.
* **Pipelines** — Pipeline-related count for the context.
* **CD Pipelines** — CD pipelines.
* **Stages** — Deployment stages.

Use this strip to see whether core objects look healthy before drilling into **Projects**, **CI/CD Pipelines**, or **Deployments**.

## Activity and Git

The central column includes widgets for **what ran recently**, **your own runs**, and **Git-side activity**. They typically work as follows:

* **Recent Pipeline Activity** — Latest pipeline runs; often includes **View All** to open the full list. Empty when there are no runs.
* **My Activity** — Runs associated with your account; **View All** when available.
* **Git Activity** — Pull request activity when connected; may show “no pull request data” if none is available.

## Resource Usage

On the right side, **Resource Usage** summarizes how much cluster capacity the platform workload is using and which pods stand out. You will usually see:

* Totals or gauges for **CPU**, **Memory**, and **Pods**.
* A **top pods by CPU** (or similar) list with names and usage so you can spot heavy consumers.

## Security and Quality

Two widgets condense security and static-analysis posture for the current scope. They show:

* **Vulnerability Summary** — Totals by severity (Critical, High, Medium, Low) from integrated vulnerability data (e.g. Dependency-Track).
* **SonarQube Quality** — Aggregated quality gate results for SonarQube projects linked to the platform.

## Integrations

**Integrations** lists external systems the portal talks to (Jira, registries, observability, and others). It is useful for spotting misconfiguration or downtime before you rely on a tool in a workflow. The widget may show counts such as how many connections need attention, short error text, and actions like **Fix** next to a failing integration.

## DORA Metrics

**DORA** widgets summarize delivery behavior over a fixed window (often the **last 30 days**). They support conversations about speed and stability. Typical fields are:

* **Deployment Frequency** — Deploy count over the period, successes, and a simple cadence (e.g. average days between deploys).
* **Change Failure Rate** — Share of failed deploys vs total, sometimes with a status such as “Needs attention” when above a threshold.

## Links

The **Links** area at the bottom is a grid of shortcuts to integrated tools (Argo CD, Git providers, container registry, DefectDojo, Dependency-Track, SonarQube, Prometheus, Grafana, Kibana, Jaeger, Jira, Keycloak, Nexus, and others depending on your setup). Use **+ Add Link** to add custom entries; see [Manage Quick Links](./quick-links.md).

## Related Articles

These pages go deeper into areas that overlap with the Overview dashboard:

* [KubeRocketCI Widgets](./widgets.md)
* [Observability](./observability.md)
* [Security](./security/sca-overview.md)
