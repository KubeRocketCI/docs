---
title: "Exposed Secrets"
sidebar_label: "Exposed Secrets"
description: "Detected secrets in container images and workloads in the portal."
---
<!-- markdownlint-disable MD025 -->

# Exposed Secrets

<head>
  <link rel="canonical" href="https://docs.kuberocketci.io/docs/user-guide/security/container-exposed-secrets" />
</head>

**Security > Container Scanning > Exposed Secrets** lists **credentials and other sensitive material** found inside **container images** (or related artifacts the scanner inspects), such as API keys, tokens, passwords, or private keys embedded in layers or files. This is **separate from vulnerability (CVE) reporting**: an image can have no critical CVEs and still contain a leaked secret.

Depending on how your environment is configured, you may get:

* **Findings** tied to a scanned image or workload, with **severity** or risk indicators.
* **Location hints** (path, layer, or context) so you can trace the issue back to a build step, copied config, or baked-in file.
* Actions or links to **open details** and follow **remediation** guidance.

Use this view to **rotate** any exposed credential and **change the build** so secrets are never committed into images (runtime `Secret` objects, external secrets, CI variables, `.dockerignore`, multi-stage builds without copying `.env`, etc.).

This is how this fits Container Scanning:

* [Container Scanning Overview](./container-scanning-overview.md) — high-level image risk for the namespace.
* [Container Vulnerability Reports](./container-vulnerability-reports.md) — CVE-style drill-down per image.

## Related Articles

* [Container Scanning Overview](./container-scanning-overview.md)
* [Container Vulnerability Reports](./container-vulnerability-reports.md)
