---

title: "Set Up OpenShift"
description: "Guidelines for preparing an OpenShift cluster for KubeRocketCI, including worker nodes requirements, load balancer configuration, Keycloak installation, and storage class setup."
sidebar_label: "Set Up OpenShift"

---
<!-- markdownlint-disable MD025 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Set Up OpenShift

<head>
  <link rel="canonical" href="https://docs.kuberocketci.io/docs/operator-guide/openshift-cluster-settings" />
</head>

Make sure the cluster meets the following conditions:

1. OpenShift cluster is installed with minimum 2 worker nodes with total capacity 8 Cores and 32Gb RAM.

2. Load balancer (if any exists in front of OpenShift router or ingress controller) is configured with session stickiness, disabled HTTP/2 protocol and header size of 64k support.

    Find below an example of the Config Map for the NGINX Ingress Controller:

    ``` yaml
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

3. Keycloak instance is installed. To get accurate information on how to install Keycloak, please refer to the [Install Keycloak](auth/keycloak.md) instruction.

4. The installation machine with [oc](https://docs.openshift.com/container-platform/4.10/cli_reference/openshift_cli/getting-started-cli.html) is installed with the cluster-admin access to the OpenShift cluster.

5. Helm 3.10 is installed on the installation machine with the help of the [Installing Helm](https://v3.helm.sh/docs/intro/install/) instruction.

6. Storage classes are used with the [Retain Reclaim Policy](https://kubernetes.io/docs/concepts/storage/persistent-volumes/#retain)
and [Delete Reclaim Policy](https://kubernetes.io/docs/concepts/storage/persistent-volumes/#delete).

7. We recommended using our storage class as [default storage class](https://kubernetes.io/docs/tasks/administer-cluster/change-default-storage-class/#changing-the-default-storageclass).<br/>

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
* [Install Keycloak](auth/keycloak.md)
