---
title: "Compliance RBAC Assessments"
sidebar_label: "RBAC Assessments"
description: "RBAC assessments under Security > Compliance."
---
<!-- markdownlint-disable MD025 -->

# Compliance RBAC Assessments

<head>
  <link rel="canonical" href="https://docs.kuberocketci.io/docs/user-guide/security/compliance-rbac-assessments" />
</head>

**Security > Compliance > RBAC Assessments** presents **role-based access control** risk with **compliance and audit** in mind: least privilege, separation of duties, and evidence that dangerous **Roles** or **ClusterRoles** are flagged and tracked.

On this page you can see:

* **One row per assessed Role or ClusterRole** (or equivalent grouping), with **severity counts** and **total checks**.
* **Assessment details** with a filterable list of checks: **ID**, **title**, **category**, **severity**, **status**.
* **Expanded rows** show **why** the permission is problematic, a **concrete message** (which resource/verbs are involved), and **remediation** (narrow verbs, remove wildcards, split roles).

The same class of RBAC findings may also appear under [Namespace RBAC Assessments](./namespace-rbac-assessments.md) or [Cluster RBAC Assessments](./cluster-rbac-assessments.md); **Compliance** here stresses **control-oriented** language and reporting for reviewers.

## Related Articles

* [Namespace RBAC Assessments](./namespace-rbac-assessments.md)
* [Cluster RBAC Assessments](./cluster-rbac-assessments.md)
* [Compliance Configuration Audits](./compliance-configuration-audits.md)
* [Compliance Infrastructure Assessments](./compliance-infrastructure-assessments.md)
* [Compliance Vulnerability Reports](./compliance-vulnerability-reports.md)
