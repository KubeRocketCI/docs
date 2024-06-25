# Overview

This page provides a concise overview of the advanced components available in KubeRocketCI. While these third-party tools are not obligatory, they greatly enhance the capabilities of the platform, enabling the creation of a robust CI/CD environment.

## Third-Party Components

Find below the list of the key components used by EPAM Delivery Platform:

Here's the table with the added 'Description' column containing a short description for each component:

|Component|Requirement Level|Description|
|:-|:-:|:-|
|[Tekton](../install-tekton.md)|Mandatory|A cloud-native solution for building CI/CD pipelines.|
|[Argo CD](../install-argocd.md)|Mandatory|A declarative, GitOps continuous delivery tool for Kubernetes.|
|[NGINX Ingress Controller](../install-ingress-nginx.md)[^1]| Mandatory|Manages external access to HTTP services in a Kubernetes cluster.|
|[Keycloak](keycloak.md)|Optional|An open-source identity and access management solution.|
|[DefectDojo](defectdojo.md)|Optional|An open-source application vulnerability management tool.|
|[ReportPortal](reportportal.md)|Optional|An AI-powered test automation dashboard for analyzing test results.|
|[Capsule](capsule.md)[^2]|Optional|A lightweight tool for managing Kubernetes namespaces.|
|[External Secrets](../install-external-secrets-operator.md)|Optional|Manages external secret storage like AWS Secrets Manager, integrating with Kubernetes.|
|[Nexus](../artifacts-management/nexus-sonatype.md)|Optional|A repository manager supporting various formats including Docker, npm, and Helm charts.|
|[Harbor](harbor.md)|Optional|An open-source trusted cloud native registry project that stores, signs, and scans content.|

Although we have dedicated instructions for all of these third-party tools, we recommend installing them via [add-ons approach](../add-ons-overview.md).

[^1]:
    OpenShift cluster uses Routes to provide access to pods from external resources.
[^2]:
    These tools need to be installed in advance before deploying KubeRocketCI.
