---

title: "Microsoft Entra ID (Azure AD) OIDC SSO for DevOps Tools"
description: "Configure Microsoft Entra ID (Azure AD) OIDC SSO for Harbor, Grafana, Nexus, SonarQube, Argo CD, DefectDojo, and more: app registration, groups, Helm values."
sidebar_label: "Overview"

---
<!-- markdownlint-disable MD025 -->

# Microsoft Entra ID (Azure AD) OIDC SSO for DevOps Tools

<head>
  <link rel="canonical" href="https://docs.kuberocketci.io/docs/operator-guide/microsoft-entra/oidc-authentication-overview" />
</head>

Microsoft Entra ID (formerly Azure AD) can act as the single OIDC identity provider
for your entire DevOps toolchain: Harbor, Grafana, Nexus, SonarQube, Argo CD,
DefectDojo, Dependency-Track, OpenSearch, Ansible AWX, and the Tekton Dashboard.
Every integration follows the same four-step pattern, and this page links the
step-by-step guide for each tool.

## How Does Microsoft Entra OIDC SSO Work for DevOps Tools?

Each tool is registered as an application in the Microsoft Entra Admin Center.
Entra then issues OIDC tokens that carry the user's group memberships, and the
tool maps those groups to its own roles. The pattern is identical for every
integration in this section:

1. Register an application in the Microsoft Entra Admin Center.
2. Create a client secret and configure the redirect URI.
3. Create Entra groups and expose them as token claims.
4. Point the tool at Entra via Helm values or its UI.

Because the pattern is the same, rolling out SSO to a second or third tool
typically takes minutes, not days.

## Supported Tools and Integration Guides

| Tool | Integration method | Guide |
|------|--------------------|-------|
| Harbor | Native OIDC, configured in the Harbor UI | [Harbor OIDC configuration](./harbor-authentication.md) |
| Grafana | Native OIDC via Helm chart | [Grafana Entra ID SSO](./grafana-authentication.md) |
| Nexus | OAuth2-Proxy in front of Nexus | [Nexus SSO with Entra OIDC](./nexus-authentication.md) |
| SonarQube | Native OIDC via sonar-operator | [SonarQube OIDC setup](./sonar-oidc-authentication.md) |
| Argo CD | Native OIDC with group-to-role mapping | [Argo CD Entra SSO](./argo-cd-authentication.md) |
| DefectDojo | Native OIDC via Helm chart | [DefectDojo SSO setup](./defectdojo-oidc-authentication.md) |
| Dependency-Track | Native OIDC via Helm chart | [Dependency-Track OIDC](./dependency-track-authentication.md) |
| OpenSearch | Native OIDC with role mapping | [OpenSearch Entra SSO](./opensearch-authentication.md) |
| Ansible AWX | Native OIDC via AWX settings | [AWX OIDC authentication](./awx-operator-authentication.md) |
| Tekton Dashboard | OAuth2-Proxy gateway | [OAuth2-Proxy with Entra ID](./oauth2-proxy-authentication.md) |
| AWS EKS + KubeRocketCI Portal | Cluster-level OIDC | [EKS and Portal Entra SSO](./aws-eks-portal-authentication.md) |

## Which Tools Need OAuth2-Proxy Instead of Native OIDC?

Most tools in the table speak OIDC natively. Nexus and the Tekton Dashboard do
not, so KubeRocketCI places [OAuth2-Proxy](./oauth2-proxy-authentication.md) in
front of them. OAuth2-Proxy handles the Entra login flow and passes the
authenticated identity to the tool behind it. If you need SSO for any other
tool without native OIDC support, the same OAuth2-Proxy pattern applies.

## What Do All Integrations Have in Common?

Every guide in this section assumes the same prerequisites:

- Access to the [Microsoft Entra Admin Center](https://entra.microsoft.com/) with administrative privileges.
- A Microsoft Entra tenant.
- The target tool installed, typically from the
  [Cluster Add-Ons repository](https://github.com/epam/edp-cluster-add-ons).

Group-based access control is the common thread: you create Entra groups once
(for example, `administrators` and `developers`) and reuse them across every
tool, so joiners and leavers are managed in one place.

## Can I Use Keycloak Instead of Microsoft Entra?

Yes. KubeRocketCI supports any OIDC-compliant identity provider. If you run
Keycloak, start with [Keycloak as the OIDC provider for AWS EKS](../auth/configure-keycloak-oidc-eks.md)
and [KubeRocketCI Portal OIDC configuration](../auth/ui-portal-oidc.md). The
per-tool pattern — application, groups, Helm values — stays the same; only the
issuer URL and admin console differ.

## Related Articles

- [Integrating OIDC Authentication: Microsoft Entra + AWS EKS](/blog/integrating-oidc-authentication-microsoft-entra-aws-eks)
- [Keycloak OIDC for AWS EKS](../auth/configure-keycloak-oidc-eks.md)
- [KubeRocketCI Portal OIDC Configuration](../auth/ui-portal-oidc.md)
