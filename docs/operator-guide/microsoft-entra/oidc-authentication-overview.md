# Overview

OpenID Connect (OIDC) is a standard protocol for enabling secure and seamless authentication across applications. OIDC ensures consistent identity management, enhances security, and streamlines user access to critical services.

This section focuses on integrating Microsoft Entra as the Identity Provider for various components from the [Cluster Add-Ons repository](https://github.com/epam/edp-cluster-add-ons). Microsoft Entra enables centralized identity management, providing single sign-on (SSO), multi-factor authentication (MFA), and strong security measures.

Configuring OIDC authentication with Microsoft Entra brings significant benefits, including improved security, simplified access management, and compliance with enterprise standards.

### Supported Components

Below is the list of components with OIDC integration instructions:

- [SonarQube](./sonar-oidc-authentication.md)
- Dependency Track
- [Nexus](./nexus-authentication.md)
- [Ansible AWX](awx-operator-authentication.md)
- [DefectDojo](defectdojo-oidc-authentication.md)
- [Argo CD](argo-cd-authentication.md)
- Harbor
- Oauth2-proxy
- OpenSearch
- Grafana
