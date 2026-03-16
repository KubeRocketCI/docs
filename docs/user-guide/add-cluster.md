---

title: "Add Cluster"
sidebar_label: "Add Cluster"
description: "Step-by-step guide on integrating external clusters into KubeRocketCI for multi-cluster deployment, enhancing environment segregation and management."

---
<!-- markdownlint-disable MD025 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Add Cluster

<head>
  <link rel="canonical" href="https://docs.kuberocketci.io/docs/user-guide/add-cluster" />
</head>

This page provides comprehensive instructions on how to integrate an external cluster into the KubeRocketCI workloads. By doing so, it creates an opportunity for users to employ multi-cluster deployment, thereby facilitating the segregation of different environments across various clusters.

<div style={{ display: 'flex', justifyContent: 'center' }}>
<iframe width="560" height="315" src="https://www.youtube.com/embed/3Gm8YLj-0x4" title="Deploying Applications to Remote Kubernetes Clusters with KubeRocketCI and Argo CD" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
</div>

## Prerequisites

Before moving ahead, ensure you have already performed the guidelines outlined in the [Argo CD Integration](../operator-guide/cd/argocd-integration.md#deploy-argo-cd-application-to-remote-cluster-optional) page. Besides, user needs to have a cluster admin role to add clusters.

## Integrate External Cluster

To deploy an application to a remote cluster, follow the steps below:

1. Navigate to **Configuration** -> **Deployment** -> **Clusters** and click the **+ Add cluster** button.

2. In the **Add cluster** window, choose the credentials type and specify the required fields. Click the **Save** button to add the cluster:

    <Tabs
      defaultValue="bearer"
      values={[
        {label: 'Bearer Token', value: 'bearer'},
        {label: 'IRSA', value: 'irsa'},
      ]}>

        <TabItem value="bearer">

            * **Cluster Name**: a unique and descriptive name for the external cluster;
            * **Cluster Host**: the cluster’s endpoint URL (e.g., example-cluster-domain.com);
            * **Cluster Token**: a [Kubernetes token](../operator-guide/cd/deploy-application-in-remote-cluster-via-token.md#get-kubernetes-token) with permissions to access the cluster. This token is required for proper authorization;
            * **Skip TLS verification**: allows connect to cluster without cluster certificate verification;
            * **Cluster Certificate**: a Kubernetes certificate essential for authentication. Obtain this certificate from the configuration file of the user account you intend to use for accessing the cluster.

            :::note
              The `Cluster Certificate` field is hidden if the `skip TLS verification` option is enabled.
            :::

        </TabItem>

        <TabItem value="irsa">

            * **Cluster Name**: a unique and descriptive name for the external cluster (e.g., prod-cluster);
            * **Cluster Host**: the cluster’s endpoint URL (e.g., example-cluster-domain.com);
            * **Certificate Authority Data**: base64-encoded Kubernetes certificate essential for authentication. Obtain this certificate from the configuration file of the user account you intend to use for accessing the cluster;
            * **Role ARN**: arn:aws:iam::\<AWS_ACCOUNT_B_ID\>:role/AWSIRSA_\{cluster_name\}_CDPipelineAgent.

            :::note
              For more details on how to work with clusters integrated using IRSA approach, please refer to the [Deploy Application In Remote Cluster via IRSA](../operator-guide/cd/deploy-application-in-remote-cluster-via-irsa.md) page.
            :::

        </TabItem>
    </Tabs>

3. As soon as the cluster is added, open the terminal which has access to the cluster that runs the KubeRocketCI deployment.

4. Open the `krci-config` ConfigMap edit menu using the `kubectl edit` command:

```bash
kubectl edit ConfigMap krci-config -n krci
```

5. In the YAML file, add the `available_clusters` parameter, insert the cluster name, and click **Save & apply**:

    ```yaml title="edp-config.yaml"
    data:
      available_clusters: <cluster-name>
    ```

6. Ensure the `available_clusters` parameter is added into the config map:

```
kubectl get ConfigMap krci-config -n krci -o yaml
```

## Integrate ArgoCD with External Cluster

To integrate ArgoCD with an external cluster, you need to register the target cluster’s credentials with ArgoCD so that ArgoCD can securely connect to and manage resources in that cluster. This process typically involves creating a Kubernetes Secret in the ArgoCD namespace containing the cluster connection configuration. Depending on your platform and security requirements, authentication can be configured via a static token or by using an AWS IAM Role for Service Accounts (IRSA).

Choose the configuration method that matches your external cluster's authentication mechanism and follow the relevant steps below to prepare your cluster for use with ArgoCD.

<Tabs
 defaultValue="token"
 values={[
 {label: 'Static Token', value: 'token'},
 {label: 'IRSA', value: 'irsa'},
 ]}>

  <TabItem value="token">

  ```yaml
  apiVersion: v1
  kind: Secret
  metadata:
    name: <cluster-name>-cluster
    namespace: argocd
    labels:
      argocd.argoproj.io/secret-type: cluster
  stringData:
    config: |
    {
      "tlsClientConfig": {
        "insecure": false,
        "caData": ""
      },
      "bearerToken": ""
    }
    name: "<cluster-name>"
    server: "https://EXAMPLED539D4633E53DE1B71EXAMPLE.gr7.<AWS_REGION>.eks.amazonaws.com"
  ```
  </TabItem>

  <TabItem value="irsa">

  <Tabs
  defaultValue="manifests"
  values={[
  {label: 'Manifests', value: 'manifests'},
  {label: 'External Secrets Operator', value: 'externalsecret'},
  ]}>

    <TabItem value="manifests">

    ```yaml
    apiVersion: v1
    kind: Secret
    metadata:
      name: <cluster-name>-cluster
      namespace: argocd
      labels:
        argocd.argoproj.io/secret-type: cluster
    stringData:
      config: |
        {
          "awsAuthConfig": {
            "clusterName": "<cluster-name>",
            "roleARN": "arn:aws:iam::<AWS_ACCOUNT_A_ID>:role/AWSIRSA_{cluster_name}_ArgoCDMaster"
          },
          "tlsClientConfig": {
            "insecure": false,
            "caData": "<Base64-encoded CA certificate of the target cluster>"
          }
        }
      name: "<cluster-name>"
      server: "https://EXAMPLED539D4633E53DE1B71EXAMPLE.gr7.<AWS_REGION>.eks.amazonaws.com"
    ```
    </TabItem>

    <TabItem value="externalsecret">

    ```json
    "<cluster-name>-cluster": {
      "config": {
        "awsAuthConfig": {
          "clusterName": "<cluster-name>",
          "roleARN": "arn:aws:iam::<AWS_ACCOUNT_B_ID>:role/AWSIRSA_{cluster_name}_ArgoCDMaster"
        },
        "tlsClientConfig": {
          "insecure": false,
          "caData": "<Base64-encoded CA certificate of the target cluster>"
        }
      },
      "name": "<cluster-name>",
      "server": "https://EXAMPLED539D4633E53DE1B71EXAMPLE.gr7.<AWS_REGION>.eks.amazonaws.com"
    }
    ```
    </TabItem>
  </Tabs>

  </TabItem>
</Tabs>

After applying the configuration, you can verify the cluster connection `ArgoCD` -> `Settings` -> `Clusters` -> `<cluster-name>`.

## Deploy application on new cluster

To create a Deployment with an Environment, follow the instructions specified in the [Add Deployment](./add-cd-pipeline.md) page.

When creating an Environment, specify your new cluster name in the **Cluster** field.

## Related Articles

* [Argo CD Integration](../operator-guide/cd/argocd-integration.md)
* [Add Application](add-application.md)
* [Add Library](add-library.md)
* [Add Autotest](add-autotest.md)
* [Add Deployment Flow](add-cd-pipeline.md)
