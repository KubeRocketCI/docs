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

1. Navigate to **Configuration** -> **Deployment** -> **Clusters** and click the **+ Add cluster** button:

    ![Clusters menu](../assets/user-guide/add_new_cluster.png "Clusters menu")

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

              ![Add cluster](../assets/user-guide/krci-portal-add-cluster.png "Add cluster")

        </TabItem>

        <TabItem value="irsa">

            * **Cluster Name**: a unique and descriptive name for the external cluster (e.g., prod-cluster);
            * **Cluster Host**: the cluster’s endpoint URL (e.g., example-cluster-domain.com);
            * **Certificate Authority Data**: base64-encoded Kubernetes certificate essential for authentication. Obtain this certificate from the configuration file of the user account you intend to use for accessing the cluster;
            * **Role ARN**: arn:aws:iam::\<AWS_ACCOUNT_B_ID\>:role/AWSIRSA_\{cluster_name\}_CDPipelineAgent.

            :::note
              For more details on how to work with clusters integrated using IRSA approach, please refer to the [Deploy Application In Remote Cluster via IRSA](../operator-guide/cd/deploy-application-in-remote-cluster-via-irsa.md) page.
            :::

              ![Add cluster IRSA](../assets/user-guide/clusters/cluster-irsa-add-cluster.png "Add cluster IRSA")



        </TabItem>
    </Tabs>

3. As soon as the cluster is added, switch the KubeRocketCI portal to the **Kubernetes** mode:

    ![Switch to K8s](../assets/user-guide/add-cluster-switch-to-k8s.png "Switch to K8s")

4. In the **Configuration** section, select **Config maps**:

    ![Config maps](../assets/user-guide/add-cluster-enter-config-maps.png "Config maps")

5. In the Config maps list, enter the **krci-config** config map:

    ![Edp config](../assets/user-guide/add-cluster-edp-config.png "Edp config")

6. In the **krci-config** config map, click the pencil icon in the top right corner of the screen:

    ![Edit config map](../assets/user-guide/add-cluster-edit-config-map.png "Edit config map")

7. In the YAML file, add the `available_clusters` parameter, insert the cluster name, and click **Save & apply**:

    ```yaml title="edp-config.yaml"
    data:
      available_clusters: <cluster-name>
    ```

    ![Add new parameter](../assets/user-guide/add-available-clusters.png "Add new parameter")

8. Ensure the `available_clusters` parameter is added into the config map:

    ![Check added parameter](../assets/user-guide/add-cluster-check-parameter.png "Check added parameter")


## Integrate ArgoCD with External Cluster

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

After applying the configuration, you can verify the cluster connection `ArgoCD` -> `Settings` -> `Clusters` -> `<cluster-name>`:

  ![ArgoCD cluster IRSA status](../assets/user-guide/clusters/cluster-irsa-argocd-status.png "ArgoCD cluster IRSA status")

## Deploy application on new cluster

### Create Deployment Flow

To create a deployment flow, follow the steps below:

1. Navigate to the **Deployment Flows** tab and click the **+ Create Deployment Flow** button.

2. The **Enter name** tab of the **Create Deployment Flow**:

  ![Create deployment flow](../assets/user-guide/clusters/add-df.png "Create deployment flow")

1. Enter the deployment flow name that will be displayed in the Deployment Flows list. Enter at least two characters, use the lower-case letters, numbers, and dashes.

2. Click the **Next** button to move onto the **Add applications** tab.

  :::note
    The namespace created by the environment has the following pattern combination: **[KubeRocketCI namespace]-[environment name]-[stage name]**.
    Please be aware that the namespace length should not exceed 63 symbols.
  :::

3. The Component tab of the Environments menu is presented below:

  ![Create deployment flow](../assets/user-guide/clusters/create-deployment-flow.png "Create deployment flow")

4. Click the Create button to finish deployment flow configuration and proceed with configuring environment.

5. On the Environments menu, click the Create Environment button.

6. The Configure Stage tab of the Create Stage menu is presented below:

  ![Create environment](../assets/user-guide/clusters/create-environment.png "Create environment")

Set the proper cluster options:

  * **Cluster** - Choose the `<cluster-name>` to deploy the stage in;
  * **Stage name** - Enter the stage name;
  * **Description** - Enter the description for this stage;

7. Click the Next button to move onto the Add quality gates tab.

8. Click the Create button to start the provisioning of the pipeline. cluster-irsa-krci-deployed-application.png

  ![Environment overview](../assets/user-guide/clusters/env-overview.png "Environment overview")

## Related Articles

* [Argo CD Integration](../operator-guide/cd/argocd-integration.md)
* [Add Application](add-application.md)
* [Add Library](add-library.md)
* [Add Autotest](add-autotest.md)
* [Add Deployment Flow](add-cd-pipeline.md)
