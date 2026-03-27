---
title: "Namespace Infrastructure Assessments"
sidebar_label: "Infrastructure Assessments"
description: "Infrastructure security assessment reports scoped to a namespace."
---
<!-- markdownlint-disable MD025 -->

# Namespace Infrastructure Assessments

<head>
  <link rel="canonical" href="https://docs.kuberocketci.io/docs/user-guide/security/namespace-infrastructure-assessments" />
</head>

**Infrastructure Assessment Reports** under **Security > Namespace Security > Infrastructure Assessments** show **infrastructure-oriented security checks** for resources in the **selected namespace**. The focus is on **misconfigurations and hardening gaps** in how platform and supporting resources are set up—not on “CVE inside application package” style issues (those belong under container vulnerability flows).

After scans have run, you typically see:

* A **table** of assessed targets with: **severity counts** (Critical, High, Medium, Low), **total checks**, and **last updated** (when shown).
* **Drill-down** into a row: **check ID**, **title**, **category**, **severity**, **status**, and expandable **description**, **message**, and **remediation** text.

If nothing has been scanned yet, the page may show an **empty state** explaining that reports will appear once infrastructure assessment data is available for the namespace.

## How this differs from sibling views

| View | What it emphasizes |
|------|---------------------|
| [Namespace Configuration Audits](./namespace-configuration-audits.md) | **Workload-oriented** configuration (e.g. pod `securityContext`, read-only root filesystem, defaults). |
| [Namespace RBAC Assessments](./namespace-rbac-assessments.md) | **RBAC**—Roles, risky verbs, overly broad grants. |
| **Infrastructure Assessments** (this page) | **Infrastructure / platform wiring** in the namespace—controllers, configs, and related surfaces that are not purely “this pod’s securityContext” or “this Role’s verbs.” |

## Related Articles

* [Namespace Configuration Audits](./namespace-configuration-audits.md)
* [Namespace RBAC Assessments](./namespace-rbac-assessments.md)
* [Cluster Infrastructure Assessments](./cluster-infrastructure-assessments.md)
