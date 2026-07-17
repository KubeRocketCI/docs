---
title: "Compliance Configuration Audits"
sidebar_label: "Configuration Audits"
description: "Configuration audit results in the Compliance area of Security."
---
<!-- markdownlint-disable MD025 -->

# Compliance Configuration Audits

<head>
  <link rel="canonical" href="https://docs.kuberocketci.io/docs/user-guide/security/compliance-configuration-audits" />
</head>

**Security > Compliance > Configuration Audits** shows **Kubernetes configuration** findings **framed for compliance**: unsafe defaults, weak workload settings, missing hardening, and similar checks that map to **benchmarks or policies** your organization tracks (for example CIS-style controls, Pod Security expectations, or other bundled profiles—exact labels depend on your deployment).

On this page you can expect:

* **Resources or report rows** with **failed** or **passed** checks tied to compliance-relevant configuration.
* **Severity** and **status** per check, plus **remediation** text you can hand to platform or application teams.
* Optional **framework** or **policy** context (which standard or chapter the control belongs to), when the product surfaces it.

This is the **Compliance** entry point for **configuration audit** detail. For a **cluster-wide summary** of benchmark pass rates (multiple standards in one list), see [Cluster Compliance](./cluster-compliance.md). For **namespace-scoped operational** configuration audits, see [Namespace Configuration Audits](./namespace-configuration-audits.md); for **cluster-wide operational** audits, see [Cluster Configuration Audits](./cluster-configuration-audits.md).

## Related Articles

* [Cluster Compliance](./cluster-compliance.md)
* [Namespace Configuration Audits](./namespace-configuration-audits.md)
* [Cluster Configuration Audits](./cluster-configuration-audits.md)
* [Compliance RBAC Assessments](./compliance-rbac-assessments.md)
* [Compliance Infrastructure Assessments](./compliance-infrastructure-assessments.md)
* [Compliance Vulnerability Reports](./compliance-vulnerability-reports.md)
