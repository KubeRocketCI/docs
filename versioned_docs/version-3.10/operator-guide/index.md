---

title: "KubeRocketCI Operator Guide: Installation, Configuration, and Administration"
description: "Comprehensive guide for DevOps on installing, configuring, and administering KubeRocketCI. Includes information on platform support, authentication, artifacts management, code quality, project management, secrets management, security, monitoring, CI/CD, infrastructure providers, disaster recovery, upgrades, and troubleshooting."
sidebar_label: "Operator Guide"

---
<!-- markdownlint-disable MD025 -->

# Overview

<head>
  <link rel="canonical" href="https://docs.kuberocketci.io/docs/operator-guide/" />
</head>

The Operator guide is intended for DevOps and provides information on KubeRocketCI installation, configuration and customization, as well as the platform support. Inspect the documentation to adjust the KubeRocketCI according to your business needs:

* **Installation** - Provides step-by-step guidelines for the platform prerequisites and platform installation process, including various methods such as [Helm Chart](./install-kuberocketci.md), [AWS Marketplace](./aws-marketplace-install.md), [Civo Marketplace](./install-via-civo.md), and via [Cluster Add-Ons](./add-ons-overview.md).
* **Authentication and Authorization** - Covers the platform's authentication models, including configurations for [Keycloak](auth/keycloak.md), [Namespace Management](auth/namespace-management.md), and [Microsoft Entra ID](microsoft-entra/oidc-authentication-overview.md).
* **Artifacts Management** - Describes artifacts management using [Nexus](artifacts-management/nexus-image-registry.md) or [Harbor](artifacts-management/harbor-installation.md).
* **Code Quality** - Provides guidelines on how to integrate platform with the mandatory [SonarQube](code-quality/sonarqube.md) component.
* **Project Management and Reporting** - Provides integration options with project management tools like [Jira](project-management-and-reporting/jira-integration.md) and [ReportPortal](project-management-and-reporting/install-reportportal.md).
* **Secrets Management** - Explains the installation and integration of the [External Secrets Operator](secrets-management/install-external-secrets-operator.md).
* **Security and Compliance** - Includes guides on integrating security and compliance tools such as [Dependency-Track](devsecops/dependency-track.md) and [DefectDojo](devsecops/defectdojo.md).
* **Monitoring and Observability** - Provides installation and configuration guides for monitoring and logging tools like [Grafana Loki](monitoring-and-observability/install-loki.md) and [Elasticsearch](monitoring-and-observability/kibana-ilm-rollover.md) stacks.
* **Continuous Integration (CI)** - Covers the setup and configuration of [Tekton](ci/tekton-overview.md).
* **Continuous Deployment (CD)** - This section contains guidelines on how to integrate a mandatory component [Argo CD](cd/argocd-integration.md). Besides, it also contains information on creating [custom pipelines](cd/customize-deploy-pipeline.md), [deployment strategies](cd/auto-stable-trigger-type.md), and [deploying RPM packages](cd/deploy-rpm.md).
* **Infrastructure Providers** - Provides information on integrating with various infrastructure providers, including [AWS](deploy-aws-eks.md) and [OpenShift](infrastructure-providers/okd/deploy-okd-4.10.md).
* **Disaster Recovery** - Explains the installation and configuration of [Velero](disaster-recovery/install-velero.md) as a solution for disaster recovery.
* **Upgrade** - Provides guides on upgrading KubeRocketCI and related components, including historical versions.
* **Troubleshooting** - Includes common troubleshooting guides for various issues that may occur during the setup and operation of KubeRocketCI.
