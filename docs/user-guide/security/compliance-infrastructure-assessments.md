---
title: "Compliance Infrastructure Assessments"
sidebar_label: "Infrastructure Assessments"
description: "Infrastructure assessments in the Compliance section."
---
<!-- markdownlint-disable MD025 -->

# Compliance Infrastructure Assessments

<head>
  <link rel="canonical" href="https://docs.kuberocketci.io/docs/user-guide/security/compliance-infrastructure-assessments" />
</head>

**Security > Compliance > Infrastructure Assessments** covers **infrastructure-level** posture for **compliance**: nodes and cluster components, **kubelet**-related settings, file permissions, and other checks that belong in **hardening benchmarks** rather than only in “YAML for one namespace.”

On this page you can see:

* **Reports per node or per scope** (as your deployment defines), with **severity breakdowns** and **failed vs passed** checks.
* **Drill-down** listing individual checks with **description**, **message**, and **remediation** that often points to **specific paths or configuration keys** on the node.

Until infrastructure scanning has run and data is synced, the page may stay **empty** or show a **no reports** state.

For the **operational** (non-Compliance menu) counterparts, see [Cluster Infrastructure Assessments](./cluster-infrastructure-assessments.md) and [Namespace Infrastructure Assessments](./namespace-infrastructure-assessments.md).

## Related Articles

* [Cluster Infrastructure Assessments](./cluster-infrastructure-assessments.md)
* [Namespace Infrastructure Assessments](./namespace-infrastructure-assessments.md)
* [Compliance Configuration Audits](./compliance-configuration-audits.md)
* [Compliance RBAC Assessments](./compliance-rbac-assessments.md)
* [Compliance Vulnerability Reports](./compliance-vulnerability-reports.md)
