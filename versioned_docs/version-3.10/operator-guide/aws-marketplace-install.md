---

title: "Install via AWS Marketplace"
description: "Detailed instructions on installing KubeRocketCI via the AWS Marketplace, including prerequisites, deployment steps, and optional Portal access configurations."
sidebar_label: "Install via AWS Marketplace"

---
<!-- markdownlint-disable MD025 -->

# Install via AWS Marketplace

<head>
  <link rel="canonical" href="https://docs.kuberocketci.io/docs/operator-guide/aws-marketplace-install" />
</head>

This documentation provides detailed instructions on how to install the KubeRocketCI via the AWS Marketplace.

To initiate the installation process, navigate to our dedicated [AWS Marketplace](https://aws.amazon.com/marketplace/pp/prodview-u7xcz6pvwwwoa#pdp-overview) page and commence the deployment of KubeRocketCI.

:::warning
  KubeRocketCI is aligned with industry standards for storing and managing sensitive data, ensuring optimal security. However, the use of custom solutions introduces uncertainties, thus the responsibility for the safety of your data is totally covered by the platform administrator.
:::

## Prerequisites

:::note
  * A basic understanding of AWS services and navigation is preferred to facilitate smoother setup and deployment processes. If you are new to AWS, please refer to the [AWS Documentation](https://docs.aws.amazon.com/index.html) for detailed information on the services and their usage.
  * Understanding of Kubernetes: Knowledge of Kubernetes concepts and architecture is recommended for effective management and operation of clusters.
:::

Please ensure that you review the [Prerequisites](prerequisites.md) page before proceeding with the deployment of the product. To perform a minimal installation, please ensure that you meet the following requirements:

* You have an available AWS Elastic Kubernetes Service (EKS) cluster for deployment. For detailed instructions on creating a new cluster, please refer to the [AWS EKS Cluster Creation Guide](https://docs.aws.amazon.com/eks/latest/userguide/create-cluster.html). Additionally, you can consult our [EKS Deployment Guide](deploy-aws-eks.md) for step-by-step instructions tailored to your specific needs.
* You have a domain name available and associated with the ingress object in the cluster.
* You have cluster administrator access.
* The [Tekton](install-tekton.md) resources are deployed.
* You have access to the cluster via a Service Account token.

## Deploy KubeRocketCI Platform

To deploy the platform, follow the steps below:

1. Deploy Tekton resources using the following commands:

    ```bash
    kubectl create ns tekton-pipelines
    kubectl create ns tekton-chains
    kubectl create ns tekton-pipelines-resolvers
    kubectl apply --filename https://storage.googleapis.com/tekton-releases/triggers/latest/release.yaml
    kubectl apply --filename https://storage.googleapis.com/tekton-releases/triggers/latest/interceptors.yaml
    kubectl apply --filename https://storage.googleapis.com/tekton-releases/pipeline/latest/release.yaml
    kubectl apply --filename https://storage.googleapis.com/tekton-releases/chains/latest/release.yaml
    ```

2. Define the mandatory parameters you would like to use for installation using the following command:

    ```bash
    kubectl create ns edp
    helm install edp-install \
      --namespace edp ./* \
      --set global.dnsWildCard=example.com \
    ```

3. (Optional) Provide token to sign in to the Portal. Run the following command to create Service Account with cluster admin permissions:

    ```bash
    kubectl create serviceaccount edp-admin -n edp
    kubectl create clusterrolebinding edp-cluster-admin --clusterrole=cluster-admin --serviceaccount=edp:edp-admin
    kubectl apply -f - <<EOF
    apiVersion: v1
    kind: Secret
    metadata:
      name: edp-admin-token
      namespace: edp
      annotations:
        kubernetes.io/service-account.name: edp-admin
    type: kubernetes.io/service-account-token
    EOF
    ```

4. (Optional) To get access to the Portal, run the port-forwarding command:

    ```bash
    kubectl port-forward service/portal 59480:80 -n edp
    ```

5. (Optional) To open Portal, navigate to the `http://localhost:59480`.

6. (Optional) To get admin token to sign in to the Portal:

    ```bash
    kubectl get secrets -o jsonpath="{.items[?(@.metadata.annotations['kubernetes\.io/service-account\.name']=='edp-admin')].data.token}" -n edp|base64 --decode; echo
    ```

As a result, you will get access to KubeRocketCI components via KubeRocketCI Portal UI. Navigate to our [Use Cases](../use-cases/index.md) to try out KubeRocketCI functionality. Visit other subsections of the [Operator Guide](../operator-guide/index.md) to figure out how to configure KubeRocketCI and integrate it with various tools.

## Related Articles

* [KubeRocketCI on AWS Marketplace](https://aws.amazon.com/marketplace/pp/prodview-u7xcz6pvwwwoa#pdp-overview)
* [Manage Git Providers](../user-guide/add-git-server.md)
* [Set Up Kubernetes](kubernetes-cluster-settings.md)
* [Set Up OpenShift](openshift-cluster-settings.md)
* [KubeRocketCI Installation Prerequisites Overview](prerequisites.md)
* [UI Portal OIDC Integration](auth/ui-portal-oidc.md)
