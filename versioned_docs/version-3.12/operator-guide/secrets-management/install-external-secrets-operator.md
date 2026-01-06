---

title: "Install External Secrets Operator"
description: "Guide on enabling the External Secrets Operator in KubeRocketCI for advanced secrets management, including prerequisites and Helm installation steps."
sidebar_label: "Install External Secrets Operator"

---
<!-- markdownlint-disable MD025 -->

# Install External Secrets Operator

<head>
  <link rel="canonical" href="https://docs.kuberocketci.io/docs/operator-guide/secrets-management/install-external-secrets-operator" />
</head>

Inspect the prerequisites and the main steps to perform for enabling [External Secrets Operator](https://external-secrets.io/) in KubeRocketCI.

## Prerequisites

* Kubectl version 1.32.0+ is installed. Please refer to the [Kubernetes official website](https://kubernetes.io/releases/download/) for details.
* [Helm](https://helm.sh) version 3.14.0+ is installed. Please refer to the [Helm page](https://github.com/helm/helm/releases) on GitHub for details.

## Installation

To install `External Secrets Operator` with Helm, run the following commands:

```bash
helm repo add external-secrets https://charts.external-secrets.io

helm install external-secrets \
   external-secrets/external-secrets \
    --version 0.9.9 \
    -n external-secrets \
    --create-namespace
```

:::info
  It is also possible to install External Secrets Operator using the [Cluster Add-Ons](../add-ons-overview.md) or [Operator Lifecycle Manager (OLM)](https://operatorhub.io/operator/external-secrets-operator).
:::

## Related Articles

* [External Secrets Operator Integration](external-secrets-operator-integration.md)
* [Install via Add-Ons](../add-ons-overview.md)
