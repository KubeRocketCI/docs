---

title: "Microsoft Entra OIDC SSO Guides"
description: "All Microsoft Entra OIDC SSO integration guides for KubeRocketCI: Argo CD, Grafana, Nexus, DefectDojo, Dependency-Track, and more."
sidebar_label: "Overview"

---
<!-- markdownlint-disable MD025 -->

# Microsoft Entra OIDC Authentication: Overview

<head>
  <link rel="canonical" href="https://docs.kuberocketci.io/docs/operator-guide/microsoft-entra/oidc-authentication-overview" />
</head>

OpenID Connect (OIDC) is a standard protocol for enabling secure and seamless authentication across applications. OIDC ensures consistent identity management, enhances security, and streamlines user access to critical services.

This section focuses on integrating Microsoft Entra as the Identity Provider for various components from the [Cluster Add-Ons repository](https://github.com/epam/edp-cluster-add-ons). Microsoft Entra enables centralized identity management, providing single sign-on (SSO), multi-factor authentication (MFA), and strong security measures.

Configuring OIDC authentication with Microsoft Entra brings significant benefits, including improved security, simplified access management, and compliance with enterprise standards.

## Supported Components

Below is the list of components with OIDC integration instructions, grouped by function.

### Security & DevSecOps Tools

Secure vulnerability-management and code-quality platforms with centralized Microsoft Entra sign-in.

- [DefectDojo](defectdojo-oidc-authentication.md)
- [Dependency-Track](./dependency-track-authentication.md)
- [SonarQube](./sonar-oidc-authentication.md)

### Artifact & Registry Tools

Control access to artifact repositories and image registries through Microsoft Entra groups.

- [Nexus](./nexus-authentication.md)
- [Harbor](harbor-authentication.md)

### Platform & Observability Tools

Bring platform, deployment, and monitoring tools under the same Microsoft Entra identity provider.

- [Argo CD](argo-cd-authentication.md)
- [Grafana](grafana-authentication.md)
- [OpenSearch](opensearch-authentication.md)
- [Ansible AWX](awx-operator-authentication.md)
- [OAuth2-proxy](oauth2-proxy-authentication.md)
- [AWS EKS and KubeRocketCI Portal](aws-eks-portal-authentication.md)
