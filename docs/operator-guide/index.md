# Overview

The Operator guide is intended for DevOps and provides information on KubeRocketCI installation, configuration and customization, as well as the platform support. Inspect the documentation to adjust the KubeRocketCI according to your business needs:

* The **Installation** section provides the prerequisites for the platform installation, including [Kubernetes](kubernetes-cluster-settings.mdx) or [OpenShift](openshift-cluster-settings.mdx) cluster setup,
[Keycloak](advanced-installation/keycloak.md), [DefectDojo](advanced-installation/defectdojo.md), [Capsule](./advanced-installation/capsule.md), and [Ingress-nginx](install-ingress-nginx.md) setup as well as the subsequent [deployment of KubeRocketCI](install-kuberocketci.mdx).

* The **Configuration** section indicates the options to set the project, [backup](restore-edp-with-velero.md), [Tekton](../user-guide/add-git-server.md) and [logging](install-loki.md).

* The **Integration** section comprises the [AWS](enable-irsa.md), [Jira](jira-integration.md) integration options.

* The **Tutorials** section provides information on working with various aspects, for example, [using cert-manager in OpenShift](ssl-automation-okd.md), [deploying AWS EKS cluster](deploy-aws-eks.md), [deploying OKD 4.9 cluster](deploy-okd.md), [deploying OKD 4.10 cluster](deploy-okd-4.10.md) and [upgrading Keycloak v.17.0.x-legacy to v.19.0.x on Kubernetes](upgrade-keycloak-19.0.md).
