---

title: "Overview"
description: "Prerequisites for KubeRocketCI installation, including Kubernetes or OpenShift setup, Nginx ingress, Tekton, and Argo CD."
sidebar_label: "Prerequisites Overview"

---
<!-- markdownlint-disable MD025 -->

# Overview

<head>
  <link rel="canonical" href="https://docs.kuberocketci.io/docs/operator-guide/prerequisites" />
</head>

Before installing KubeRocketCI via Helm Chart, make sure to complete the following steps:

* Install and configure [Kubernetes](kubernetes-cluster-settings.md) or [OpenShift](openshift-cluster-settings.md) cluster;
* Install the [Nginx ingress controller](install-ingress-nginx.md);
* Install [Tekton](install-tekton.md);
* Install [Argo CD](install-argocd.md).

:::note
  Alternatively, use the [cluster add-ons](add-ons-overview.md) approach to install the platform components.
:::

After setting up the cluster and installing KubeRocketCI components according to the scenario, proceed to the [KubeRocketCI installation](install-kuberocketci.md).

## Related Articles

* [Set Up Kubernetes](kubernetes-cluster-settings.md)
* [Set Up OpenShift](openshift-cluster-settings.md)
* [Install KubeRocketCI](install-kuberocketci.md)
