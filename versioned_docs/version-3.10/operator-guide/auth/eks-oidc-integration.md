---
title: "AWS EKS OIDC Integration"
description: "Comprehensive guide on integrating Keycloak with AWS EKS for OIDC authentication, enhancing security with Single Sign-On capabilities."
sidebar_label: "AWS EKS OIDC Integration"
---
<!-- markdownlint-disable MD025 -->

# AWS EKS OIDC Integration

<head>
  <link rel="canonical" href="https://docs.kuberocketci.io/docs/operator-guide/auth/eks-oidc-integration/" />
</head>

This page serves as a comprehensive guide on integrating Keycloak with the [edp-keycloak-operator](https://github.com/epam/edp-keycloak-operator) to act as an identity provider for AWS Elastic Kubernetes Service (EKS). It provides detailed step-by-step instructions for creating the necessary realms, users, roles, and client configurations to seamlessly collaborate between Keycloak and EKS. Additionally, it includes instructions on installing the edp-keycloak-operator using Helm charts.

## Prerequisites

* [EKS Configuration](./configure-keycloak-oidc-eks.md) is performed;
* [Helm v3.10.0](https://github.com/helm/helm/releases/tag/v3.10.0) is installed;
* [Keycloak](../../operator-guide/auth/keycloak.md) is installed.

## Install Keycloak Operator

:::info
Alternately, the edp-keycloak-operator can be installed using a GitOps approach via the [edp-cluster-add-ons](https://github.com/epam/edp-cluster-add-ons/tree/main/clusters/core/addons/kuberocketci-rbac) repository. For detailed installation instructions, please refer to the [Install via Add-ons](../add-ons-overview.md) guide.
:::

To install the Keycloak operator, follow the steps below:

1. Add the `epamedp` Helm chart to a local client:

    ```bash
    helm repo add epamedp https://epam.github.io/edp-helm-charts/stable
    helm repo update
    ```

2. Install the Keycloak operator:

    ```bash
    helm install keycloak-operator epamedp/keycloak-operator --namespace security --set name=keycloak-operator
    ```

## Connect Keycloak Operator to Keycloak

:::info
It is also possible to install Keycloak resources using the [edp-cluster-add-ons](https://github.com/epam/edp-cluster-add-ons/tree/main/clusters/core/addons/eks) repository. For details, please refer to the [Install via Add-Ons](../add-ons-overview.md) page.
:::

The next stage after installing Keycloak is to integrate it with the Keycloak operator. It can be implemented with the following steps:

1. Create the **keycloak** secret that contains username and password defined on the [configuration step](../../operator-guide/auth/keycloak.md#configuration):

    ```bash
    kubectl -n security create secret generic keycloak \
      --from-literal=username=<username> \
      --from-literal=password=<password>
    ```

2. Create the Keycloak Custom Resource with the Keycloak instance URL and the secret created in the previous step:

    ```yaml
    apiVersion: v1.edp.epam.com/v1
    kind: Keycloak
    metadata:
      name: main
      namespace: security
    spec:
      secret: keycloak                   # Secret name
      url: https://keycloak.example.com  # Keycloak URL
    ```

3. Create the KeycloakRealm Custom Resource:

    ```yaml
    apiVersion: v1.edp.epam.com/v1
    kind: KeycloakRealm
    metadata:
      name: control-plane
      namespace: security
    spec:
      realmName: control-plane
      keycloakOwner: main
    ```

4. Create the `KeycloakRealmGroup` Custom Resource for both administrators and developers:

    * administrators:

      ```yaml
      apiVersion: v1.edp.epam.com/v1
      kind: KeycloakRealmGroup
      metadata:
        name: administrators
        namespace: security
      spec:
        realm: control-plane
        name: eks-oidc-administrator
      ```

    * developers:

      ```yaml
      apiVersion: v1.edp.epam.com/v1
      kind: KeycloakRealmGroup
      metadata:
        name: developers
        namespace: security
      spec:
        realm: control-plane
        name: eks-oidc-developers
      ```

5. Create the `KeycloakClientScope` Custom Resource:

    ```yaml
    apiVersion: v1.edp.epam.com/v1
    kind: KeycloakClientScope
    metadata:
      name: groups-keycloak-eks
      namespace: security
    spec:
      name: groups
      realm: control-plane
      description: "Group Membership"
      protocol: openid-connect
      protocolMappers:
        - name: groups
          protocol: openid-connect
          protocolMapper: "oidc-group-membership-mapper"
          config:
            "access.token.claim": "true"
            "claim.name": "groups"
            "full.path": "false"
            "id.token.claim": "true"
            "userinfo.token.claim": "true"
    ```

6. Create the `KeycloakClient` Custom Resource:

    ```yaml
    apiVersion: v1.edp.epam.com/v1
    kind: KeycloakClient
    metadata:
      name: eks
      namespace: security
    spec:
      advancedProtocolMappers: true
      clientId: eks
      directAccess: true
      public: false
      defaultClientScopes:
        - groups
      targetRealm: control-plane
      webUrl: "http://localhost:8000"
    ```

7. Create the KeycloakRealmUser Custom Resource for both administrator and developer roles:

    * administrator:

      ``` yaml
      apiVersion: v1.edp.epam.com/v1
      kind: KeycloakRealmUser
      metadata:
        name: keycloakrealmuser-admin
        namespace: security
      spec:
        realm: control-plane
        username: "administrator"
        firstName: "John"
        lastName: "Snow"
        email: "administrator@example.com"
        enabled: true
        emailVerified: true
        password: "12345678"
        keepResource: true
        requiredUserActions:
          - UPDATE_PASSWORD
        groups:
          - eks-oidc-administrator
      ```

    * developer:

      ``` yaml
      apiVersion: v1.edp.epam.com/v1
      kind: KeycloakRealmUser
      metadata:
        name: keycloakrealmuser-developer
        namespace: security
      spec:
        realm: control-plane
        username: "developers"
        firstName: "John"
        lastName: "Snow"
        email: "developers@example.com"
        enabled: true
        emailVerified: true
        password: "12345678"
        keepResource: true
        requiredUserActions:
          - UPDATE_PASSWORD
        groups:
          - eks-oidc-developers
      ```

8. To connect the created Keycloak resources with permissions, it is necessary to bind the created Keycloak groups to Kubernetes roles, e.g., assigning the Keycloak group `administrators` the Kubernetes Cluster role `cluster-admin`.

    ```yaml
    apiVersion: rbac.authorization.k8s.io/v1
    kind: ClusterRoleBinding
    metadata:
      name: oidc-cluster-admins
    subjects:
      - kind: Group
        apiGroup: rbac.authorization.k8s.io
        name: administrators
    roleRef:
      apiGroup: rbac.authorization.k8s.io
      kind: ClusterRole
      name: cluster-admin
    ```

9. As a result, Keycloak is integrated with the AWS Elastic Kubernetes Service. This integration allows users to easily log in to the EKS cluster using their kubeconfig files and `kubelogin`, while managing permissions through Keycloak. This seamless integration enhances the user experience and streamlines the management of access control within the KubeRocketCI platform.

## Related Articles

* [Keycloak Installation](keycloak.md)
* [EKS OIDC With Keycloak](configure-keycloak-oidc-eks.md)
