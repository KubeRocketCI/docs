---

title: "Add Cluster"
sidebar_label: "Add Cluster"
description: "Step-by-step guide on integrating new clusters into KubeRocketCI for multi-cluster deployment, enhancing environment segregation and management."

---
<!-- markdownlint-disable MD025 -->

# Add Cluster

<head>
  <link rel="canonical" href="https://docs.kuberocketci.io/docs/user-guide/add-cluster/" />
</head>

This page provides comprehensive instructions on how to integrate a new cluster into the KubeRocketCI workloads. By doing so, it creates an opportunity for users to employ multi-cluster deployment, thereby facilitating the segregation of different environments across various clusters.

## Prerequisites

Before moving ahead, ensure you have already performed the guidelines outlined in the [Argo CD Integration](../operator-guide/cd/argocd-integration.md#deploy-argo-cd-application-to-remote-cluster-optional) page. Besides, user needs to have a cluster admin role to add clusters.

## Deploy to Remote Cluster

To deploy an application to a remote cluster, follow the steps below:

1. Navigate to **Configuration** -> **Deployment** -> **Clusters** and click the **+ Add cluster** button:

    ![Clusters menu](../assets/user-guide/add_new_cluster.png "Clusters menu")

2. In the drop-down window, specify the required fields. Click the **Save** button to add the cluster:

    * **Cluster Name** - a unique and descriptive name for the new cluster;
    * **Cluster Host** - the cluster’s endpoint URL (e.g., example-cluster-domain.com);
    * **Cluster Token** - a Kubernetes token with permissions to access the cluster. This token is required for proper authorization;
    * **Skip TLS verification** - allows connect to cluster without cluster certificate verification;
    * **Cluster Certificate** - a Kubernetes certificate essential for authentication. Obtain this certificate from the configuration file of the user account you intend to use for accessing the cluster.

    :::note
      The `Cluster Certificate` field is hidden if the `skip TLS verification` option is enabled.
    :::

    ![Add cluster](../assets/user-guide/krci-portal-add-cluster.png "Add cluster")

3. As soon as the cluster is added, switch the KubeRocketCI portal to the Kubernetes mode:

    ![Switch to K8s](../assets/user-guide/add-cluster-switch-to-k8s.png "Switch to K8s")

4. In the **Configuration** section, select **Config maps**:

    ![Config maps](../assets/user-guide/add-cluster-enter-config-maps.png "Config maps")

5. In the Config maps list, enter the **edp-config** config map:

    ![Edp config](../assets/user-guide/add-cluster-edp-config.png "Edp config")

6. In the **edp-config** config map, click the pencil icon in the top right corner of the screen:

    ![Edit config map](../assets/user-guide/add-cluster-edit-config-map.png "Edit config map")

7. In the YAML file, add the `available_clusters` parameter, insert the cluster name, and click **Save & apply**:

    ![Add new parameter](../assets/user-guide/add-available-clusters.png "Add new parameter")

8. Ensure the `available_clusters` parameter is added into the config map:

    ![Check added parameter](../assets/user-guide/add-cluster-check-parameter.png "Check added parameter")

9. When adding a new environment, select the remote cluster in the **Cluster** field:

    ![Select cluster](../assets/user-guide/select-cluster.png "Select cluster")

## Related Articles

* [Argo CD Integration](../operator-guide/cd/argocd-integration.md)
* [Add Application](add-application.md)
* [Add Library](add-library.md)
* [Add Autotest](add-autotest.md)
* [Add CD Pipeline](add-cd-pipeline.md)
