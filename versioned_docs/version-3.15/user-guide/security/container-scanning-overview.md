---
title: "Container Scanning Overview"
sidebar_label: "Overview"
description: "Trivy security overview — container image vulnerabilities and severity breakdown."
---
<!-- markdownlint-disable MD025 -->

# Container Scanning Overview

<head>
  <link rel="canonical" href="https://docs.kuberocketci.io/docs/user-guide/security/container-scanning-overview" />
</head>

The **Container Scanning > Overview** page shows the **Trivy Security Overview** dashboard: a summary of container image vulnerabilities for the selected namespace (and cluster) in the portal header.

## Key metrics

At the top, four cards summarize the current state:

* **Total Vulnerabilities** — Total number of vulnerabilities across all scanned images.
* **Critical Vulnerabilities** — Count of critical issues (with a note that they require immediate attention).
* **Images Scanned** — Number of container images scanned.
* **Fixable Vulnerabilities** — How many vulnerabilities have a fix available (with a note "Fix available").

Use these to quickly see exposure and remediation potential.

## Severity Breakdown

A table lists vulnerability distribution by severity:

| Severity  | Count | Fixable | Distribution |
|-----------|-------|---------|--------------|
| Critical  | …     | …       | …% (bar)     |
| High      | …     | …       | …% (bar)     |
| Medium    | …     | …       | …% (bar)     |
| Low       | …     | …       | …% (bar)     |
| Unknown   | …     | …       | …% (bar)     |
| **Total** | …     | …       | 100% (bar)   |

Each row shows the count, how many are fixable, and a horizontal bar for the share of that severity in the total.

## Severity Distribution

A **donut chart** shows the same breakdown by severity (e.g. Critical, High, Medium, Low, Unknown) with labels and percentages, so you can see at a glance where most issues sit.

## Top Vulnerable Images

A table lists images with the highest vulnerability counts. For each image you typically see:

* Image name (e.g. `library/nginx:latest`).
* Namespace (e.g. the current namespace).
* Counts by severity: Critical, High, Medium, Low.
* Total vulnerability count.

Use this to prioritize which images to update or replace.

## Vulnerability Reports

At the bottom of the page, a **Vulnerability Reports** block is shown: *View all container vulnerability scan results*, with an arrow. **Clicking this block opens the [Vulnerability Reports](container-vulnerability-reports) section**, where you can see the full list of container vulnerability scan results and drill into details.

## Related Articles

* [Container Vulnerability Reports](./container-vulnerability-reports.md)
* [Exposed Secrets](./container-exposed-secrets.md)
