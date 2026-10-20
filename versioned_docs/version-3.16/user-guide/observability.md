---
title: "Observability"
sidebar_label: "Observability"
description: "Monitoring, logging, and visibility into pipeline runs, application statuses, and platform metrics."
---
<!-- markdownlint-disable MD025 -->

# Observability

<head>
  <link rel="canonical" href="https://docs.kuberocketci.io/docs/user-guide/observability" />
</head>

The Observability section provides monitoring, logging, and visibility into pipeline runs, application statuses, and platform metrics. This page describes the main views and dashboards available under Observability.

## Pipeline Metrics

The **Pipeline Metrics** dashboard shows aggregated pipeline statistics for a chosen namespace. Use it to track run counts, success rates, failures, and duration over time.

### Filters

* **Select codebase** — Limit metrics to a specific codebase.
* **Time range** — Choose **Today**, **7 Days**, **30 Days**, or **90 Days** to scope the data.

### Key Metrics

* **Total Runs** — Number of pipeline runs in the selected period.
* **Success Rate** — Percentage of runs that succeeded (with count of succeeded runs).
* **Failed** — Number of failed runs (e.g. “All green” when there are no failures).
* **Avg Duration** — Average pipeline duration and the min–max range (e.g. 1m 40s – 1h 0m).

### Pipeline Type Breakdown

Metrics are split by pipeline type:

* **Build Pipelines** — Source code builds: total runs, success rate, succeeded and failed counts.
* **Review Pipelines** — PR/MR reviews: same metrics.
* **Deploy Pipelines** — Environment deployments: same metrics.

Use this section to see which type (build, review, or deploy) contributes to overall success or failure.

### Pipeline Activity

A timeline chart shows when pipelines ran and whether they succeeded or failed. The legend indicates **Succeeded** (e.g. teal) and **Failed** (e.g. red). Use it to spot busy hours and failure patterns over the selected time range.

## Inspect via CLI

The [krci CLI](../operator-guide/advanced-installation/krci-cli.md) does not aggregate metrics the way the Pipeline Metrics dashboard does, but it can pull the same underlying per-run data for a script or an AI agent to summarize on its own schedule.

List the currently failed pipeline runs:

```bash
krci pipelinerun list --status=failed
```

List the runs for a specific project and branch, as JSON:

```
krci pipelinerun list --project <project> --branch <branch> -o json
```

This is useful for building your own success-rate or duration report outside the dashboard, for example in a daily digest script.

## Related Articles

* [KubeRocketCI Widgets](./widgets.md)
* [CI/CD Pipelines](./pipelines.md)
* [krci CLI](../operator-guide/advanced-installation/krci-cli.md)
