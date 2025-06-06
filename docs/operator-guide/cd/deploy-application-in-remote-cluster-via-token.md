---

title: "Deploy Application In Remote Cluster via Token"
sidebar_label: "Deploy Application In Remote Cluster via Token"
description: "Learn how to deploy applications in remote Kubernetes clusters using service account tokens. This method provides a simple way, allowing secure access via RBAC or Capsule-based authorization in KubeRocketCI."

---
<!-- markdownlint-disable MD025 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Deploy Application In Remote Cluster via Token

This section enables the creation of the necessary resources to configure access to a remote cluster using a static token.

## Using Kubernetes RBAC

To configure application deployment in remote cluster using Kubernetes RBAC, follow the steps below:

1. Create a ServiceAccount:

    ```yaml
    apiVersion: v1
    kind: ServiceAccount
    metadata:
      name: krci-deployer
      namespace: <deploy_namespace>
    ```

2. Bind the ServiceAccount to the cluster-admin role using ClusterRoleBinding

    ```yaml
    apiVersion: rbac.authorization.k8s.io/v1
    kind: ClusterRoleBinding
    metadata:
      name: krci-deployer-cluster-admin-binding
    subjects:
      - kind: ServiceAccount
        name: krci-deployer
        namespace: <deploy_namespace>
    roleRef:
      kind: ClusterRole
      name: cluster-admin
      apiGroup: rbac.authorization.k8s.io
    ```

3. Create a Secret with a token for the ServiceAccount

    ```yaml
    apiVersion: v1
    kind: Secret
    metadata:
      name: krci-deployer
      namespace: <deploy_namespace>
      annotations:
        kubernetes.io/service-account.name: krci-deployer
    type: kubernetes.io/service-account-token
    ```

## Using Capsule

To configure application deployment in remote cluster using the Capsule tool, follow the steps below:

1. Create a ServiceAccount for deployment

    ```yaml
    apiVersion: v1
    kind: ServiceAccount
    metadata:
      name: krci-deployer
      namespace: <deploy_namespace>
    ```

2. Create a Secret with a token for the ServiceAccount

    ```yaml
    apiVersion: v1
    kind: Secret
    metadata:
      name: krci-deployer
      namespace: <deploy_namespace>
      annotations:
        kubernetes.io/service-account.name: krci-deployer
    type: kubernetes.io/service-account-token
    ```

3. Configure Capsule to recognize the ServiceAccount’s group

    ```yaml
    apiVersion: capsule.clastix.io/v1beta2
    kind: CapsuleConfiguration
    metadata:
      name: default
    spec:
      userGroups:
        - capsule.clastix.io
        - system:serviceaccounts:<deploy_namespace>
    ```

4. Create a Tenant and assign ownership to the ServiceAccount through Capsule

    ```yaml
    apiVersion: capsule.clastix.io/v1beta2
    kind: Tenant
    metadata:
      name: krci-deployer
      namespace: <deploy_namespace>
    spec:
      owners:
        - clusterRoles:
            - admin
            - capsule-namespace-deleter
          kind: ServiceAccount
          name: system:serviceaccount:<deploy_namespace>:krci-deployer
    ```

## Get Kubernetes Token

To obtain the token generated by following this documentation, run the command below:

```bash
kubectl get secret -n <deploy_namespace> krci-deployer -o jsonpath='{.data.token}' | base64 -d
```

## Next Steps

By completing all the steps in this documentation, you will obtain a token for integration with the Kubernetes cluster.
The next step is to configure the cluster integration with KubeRocketCI, as described in the documentation [Add Cluster](../../user-guide/add-cluster.md).

## Related Articles

* [Argo CD Integration](argocd-integration.md)
* [Add Cluster](../../user-guide/add-cluster.md)
* [Add Application](../../user-guide/add-application.md)
* [Add CD Pipeline](../../user-guide/add-cd-pipeline.md)
