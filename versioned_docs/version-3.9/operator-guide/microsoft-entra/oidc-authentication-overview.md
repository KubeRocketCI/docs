---

title: "Microsoft Entra OIDC Authentication: Overview"
description: "Overview of integrating Microsoft Entra as the Identity Provider for secure and seamless authentication across various components using OIDC protocol."
sidebar_label: "Overview"

---
<!-- markdownlint-disable MD025 -->

# Microsoft Entra OIDC Authentication: Overview

<head>
  <link rel="canonical" href="https://docs.kuberocketci.io/docs/operator-guide/microsoft-entra/oidc-authentication-overview/" />
</head>

OpenID Connect (OIDC) is a standard protocol for enabling secure and seamless authentication across applications. OIDC ensures consistent identity management, enhances security, and streamlines user access to critical services.

This section focuses on integrating Microsoft Entra as the Identity Provider for various components from the [Cluster Add-Ons repository](https://github.com/epam/edp-cluster-add-ons). Microsoft Entra enables centralized identity management, providing single sign-on (SSO), multi-factor authentication (MFA), and strong security measures.

Configuring OIDC authentication with Microsoft Entra brings significant benefits, including improved security, simplified access management, and compliance with enterprise standards.

### Supported Components

Below is the list of components with OIDC integration instructions:

- [Ansible AWX](awx-operator-authentication.md)
- [Argo CD](argo-cd-authentication.md)
- [AWS EKS and KubeRocketCI Portal](/blog/integrating-oidc-authentication-microsoft-entra-aws-eks)
- [Dependency-Track](./dependency-track-authentication.md)
- [DefectDojo](defectdojo-oidc-authentication.md)
- [Grafana](grafana-authentication.md)
- [Harbor](harbor-authentication.md)
- [Nexus](./nexus-authentication.md)
- [OAuth2-proxy](oauth2-proxy-authentication.md)
- [OpenSearch](opensearch-authentication.md)
- [SonarQube](./sonar-oidc-authentication.md)
