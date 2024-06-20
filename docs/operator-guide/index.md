# Overview

The EDP Operator guide is intended for DevOps and provides information on EDP installation, configuration and customization, as well as the platform support. Inspect the documentation to adjust the EPAM Delivery Platform
according to your business needs:

* The **Installation** section provides the prerequisites for EDP installation, including [Kubernetes](kubernetes-cluster-settings.md) or [OpenShift](openshift-cluster-settings.md) cluster setup,
[Keycloak](install-keycloak.md), [DefectDojo](install-defectdojo.md), [Kiosk](install-kiosk.md), and [Ingress-nginx](install-ingress-nginx.md) setup as well as the subsequent [deployment of EPAM Delivery Platform](install-edp.md).

* The **Configuration** section indicates the options to set the project, [backup](restore-edp-with-velero.md), [Tekton](../operator-guide/import-strategy-tekton.md) and [logging](install-loki.md).

* The **Integration** section comprises the [AWS](enable-irsa.md), [Jira](jira-integration.md), and [Logsight](logsight-integration.md) integration options.

* The **Tutorials** section provides information on working with various aspects, for example, [using cert-manager in OpenShift](ssl-automation-okd.md), [deploying AWS EKS cluster](deploy-aws-eks.md), [deploying OKD 4.9 cluster](deploy-okd.md), [deploying OKD 4.10 cluster](deploy-okd-4.10.md) and [upgrading Keycloak v.17.0.x-legacy to v.19.0.x on Kubernetes](upgrade-keycloak-19.0.md).
