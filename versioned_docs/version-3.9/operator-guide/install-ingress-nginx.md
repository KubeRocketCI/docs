---

title: "Install NGINX Ingress Controller"
description: "Step-by-step guide on installing the NGINX Ingress Controller on Kubernetes, detailing prerequisites, Helm installation process, and chart customization."
sidebar_label: "Install NGINX Ingress Controller"

---
<!-- markdownlint-disable MD025 -->

# Install NGINX Ingress Controller

<head>
  <link rel="canonical" href="https://docs.kuberocketci.io/docs/operator-guide/install-ingress-nginx/" />
</head>

Inspect the prerequisites and the main steps to perform for installing [Install NGINX Ingress Controller](https://docs.nginx.com/nginx-ingress-controller/intro/overview/) on Kubernetes.

## Prerequisites

* Kubectl version 1.26+ is installed. Please refer to the [Kubernetes official website](https://kubernetes.io/releases/) for details.
* [Helm](https://helm.sh) version 3.10+ is installed. Please refer to the [Helm page](https://github.com/helm/helm/releases) on GitHub for details.

## Installation

To install the ingress-nginx chart, follow the steps below:

1. Create an ingress-nginx namespace:

    ```bash
    kubectl create namespace ingress-nginx
    ```

2. Add a chart repository:

    ```bash
    helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx
    helm repo update
    ```

3. Install the ingress-nginx chart:

    ```bash
    helm install ingress ingress-nginx/ingress-nginx \
    --version 4.7.0 \
    --values values.yaml \
    --namespace ingress-nginx
    ```

   Check out the _values.yaml_ file sample of the ingress-nginx chart customization:

<details>
<summary><b>View: values.yaml</b></summary>

```yaml
controller:
  addHeaders:
    X-Content-Type-Options: nosniff
    X-Frame-Options: SAMEORIGIN
  resources:
    limits:
      memory: "256Mi"
    requests:
      cpu: "50m"
      memory: "128M"
  config:
    ssl-redirect: 'true'
    client-header-buffer-size: '64k'
    http2-max-field-size: '64k'
    http2-max-header-size: '64k'
    large-client-header-buffers: '4 64k'
    upstream-keepalive-timeout: '120'
    keep-alive: '10'
    use-forwarded-headers: 'true'
    proxy-real-ip-cidr: '172.32.0.0/16'
    proxy-buffer-size: '8k'

  # To watch Ingress objects without the ingressClassName field set parameter value to true.
  # https://kubernetes.github.io/ingress-nginx/#i-have-only-one-ingress-controller-in-my-cluster-what-should-i-do
  watchIngressWithoutClass: true

  service:
    type: NodePort
    nodePorts:
      http: 32080
      https: 32443
  updateStrategy:
    rollingUpdate:
      maxUnavailable: 1
    type: RollingUpdate
  metrics:
    enabled: true
defaultBackend:
  enabled: true
serviceAccount:
  create: true
  name: nginx-ingress-service-account
```

</details>

:::info
  Align value **controller.config.proxy-real-ip-cidr** with your [network settings](https://kubernetes.github.io/ingress-nginx/user-guide/miscellaneous/#source-ip-address).
:::

:::note
  It is also possible to install the ingress controller via cluster add-ons. For details, please refer to the [Install via Add-Ons](add-ons-overview.md) page.
:::

## Related Articles

* [Install via Add-Ons](add-ons-overview.md)
* [Install KubeRocketCI](install-kuberocketci.md)
