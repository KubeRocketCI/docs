---

title: "KubeRocketCI Operator Guide: Installation, Configuration, and Administration"
description: "Comprehensive guide for DevOps on installing, configuring, and administering KubeRocketCI. Includes information on platform support, authentication, artifacts management, code quality, project management, secrets management, security, monitoring, CI/CD, infrastructure providers, disaster recovery, upgrades, and troubleshooting."
sidebar_label: "Operator Guide"

---
<!-- markdownlint-disable MD025 -->

# KubeRocketCI Operator Guide: Installation, Configuration, and Administration

<head>
  <link rel="canonical" href="https://docs.kuberocketci.io/docs/operator-guide/" />
</head>

The Operator guide is intended for DevOps and provides information on KubeRocketCI installation, configuration and customization, as well as the platform support. Inspect the documentation to adjust the KubeRocketCI according to your business needs:

* The **Installation** section provides the prerequisites for the platform installation, including [Kubernetes](kubernetes-cluster-settings.md) or [OpenShift](openshift-cluster-settings.md) cluster setup,
[Keycloak](auth/keycloak.md), [DefectDojo](devsecops/defectdojo.md), [Capsule](advanced-installation/capsule.md), and [Ingress-nginx](install-ingress-nginx.md) setup as well as the subsequent [deployment of KubeRocketCI](install-kuberocketci.md).

* The **Configuration** section indicates the options to set the project, [backup](disaster-recovery/velero-restore-platform.md), [Tekton](../user-guide/add-git-server.md) and [logging](monitoring-and-observability/install-loki.md).

* The **Integration** section comprises the [AWS](infrastructure-providers/aws/enable-irsa.md), [Jira](project-management-and-reporting/jira-integration.md) integration options.

* The **Tutorials** section provides information on working with various aspects, for example, [using cert-manager in OpenShift](infrastructure-providers/okd/ssl-automation-okd.md), [deploying AWS EKS cluster](deploy-aws-eks.md), [deploying OKD 4.9 cluster](infrastructure-providers/okd/deploy-okd-4.9.md), [deploying OKD 4.10 cluster](infrastructure-providers/okd/deploy-okd-4.10.md) and [upgrading Keycloak v.17.0.x-legacy to v.19.0.x on Kubernetes](upgrade/upgrade-keycloak-19.0.md).
