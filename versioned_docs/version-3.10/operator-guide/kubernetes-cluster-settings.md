---

title: "Set Up Kubernetes"
description: "Guide on preparing a Kubernetes cluster for KubeRocketCI, including prerequisites like worker nodes requirements, ingress controller setup, Keycloak installation, and storage class configuration."
sidebar_label: "Set Up Kubernetes"

---
<!-- markdownlint-disable MD025 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Set Up Kubernetes

<head>
  <link rel="canonical" href="https://docs.kuberocketci.io/docs/operator-guide/kubernetes-cluster-settings/" />
</head>

Make sure the cluster meets the following conditions:

1. Kubernetes cluster is installed with minimum 2 worker nodes with total capacity 8 Cores and 32Gb RAM.

2. Machine with [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/) is installed with a cluster-admin access to the Kubernetes cluster.

3. Ingress controller is installed in a cluster, for example [ingress-nginx](./install-ingress-nginx.md).

4. Ingress controller is configured with the disabled HTTP/2 protocol and header size of 64k support.

    Find below an example of the Config Map for the NGINX Ingress controller:

    ```yaml
    kind: ConfigMap
    apiVersion: v1
    metadata:
      name: nginx-configuration
      namespace: ingress-nginx
      labels:
        app.kubernetes.io/name: ingress-nginx
        app.kubernetes.io/part-of: ingress-nginx
    data:
      client-header-buffer-size: 64k
      large-client-header-buffers: 4 64k
      use-http2: "false"
    ```

5. Load balancer (if any exists in front of the Ingress controller) is configured with session stickiness, disabled HTTP/2 protocol and header size of 32k support.

6. Keycloak instance is installed. To get accurate information on how to install Keycloak, please refer to the [Install Keycloak](auth/keycloak.md) instruction.

7. Helm 3.10 or higher is installed on the installation machine with the help of the [Installing Helm](https://v3.helm.sh/docs/intro/install/) instruction.

8. Storage classes are used with the [Retain Reclaim Policy](https://kubernetes.io/docs/concepts/storage/persistent-volumes/#retain) and [Delete Reclaim Policy](https://kubernetes.io/docs/concepts/storage/persistent-volumes/#delete).

9. We recommended using our storage class as [default storage class](https://kubernetes.io/docs/tasks/administer-cluster/change-default-storage-class/#changing-the-default-storageclass).<br/>

:::info
  By default, KubeRocketCI uses the `default Storage Class` in a cluster. We recommend using the following Storage Classes.

  Storage class templates with the Retain and Delete Reclaim Policies:
    <Tabs
      defaultValue="gp3"
      values={[
        {label: 'ebs-sc', value: 'ebs-sc'},
        {label: 'gp3', value: 'gp3'},
        {label: 'gp3-retain', value: 'gp3-retain'}
      ]}>

      <TabItem value="ebs-sc">
      ``` yaml
      apiVersion: storage.k8s.io/v1
      kind: StorageClass
      metadata:
        name: ebs-sc
        annotations:
          storageclass.kubernetes.io/is-default-class: 'true'
      allowedTopologies: []
      mountOptions: []
      provisioner: ebs.csi.aws.com
      reclaimPolicy: Retain
      volumeBindingMode: Immediate
      ```
      </TabItem>

      <TabItem value="gp3">
      ``` yaml
      apiVersion: storage.k8s.io/v1
      kind: StorageClass
      metadata:
        name: gp3
        annotations:
          storageclass.kubernetes.io/is-default-class: 'true'
      allowedTopologies: []
      mountOptions: []
      provisioner: ebs.csi.aws.com
      reclaimPolicy: Delete
      volumeBindingMode: Immediate
      allowVolumeExpansion: true
      ```
      </TabItem>

      <TabItem value="gp3-retain">
      ``` yaml
      apiVersion: storage.k8s.io/v1
      kind: StorageClass
      metadata:
        name: gp3-retain
      allowedTopologies: []
      mountOptions: []
      provisioner: ebs.csi.aws.com
      reclaimPolicy: Retain
      volumeBindingMode: Immediate
      allowVolumeExpansion: true
      ```
      </TabItem>
    </Tabs>
:::

## Related Articles

* [Install Amazon EBS CSI Driver](infrastructure-providers/aws/ebs-csi-driver.md)
* [Install NGINX Ingress Controller](install-ingress-nginx.md)
* [Install Keycloak](auth/keycloak.md)
