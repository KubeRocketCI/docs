# Manage Clusters

This section describes the subsequent possible actions that can be performed with the newly added or existing clusters.

In a nutshell, cluster in KubeRocketCI Portal is a Kubernetes secret that stores credentials and endpoint to connect to the another cluster. Adding new clusters allows users to deploy applications in several clusters, thus improving flexibility of your infrastructure.

The added cluster will be listed in the clusters list allowing you to do the following:

![Clusters list](../assets/user-guide/edp-portal-cluster-overview.png "Clusters list")

* **Cluster status** - displays the cluster status. Can be red or green depending on if the KubeRocketCI portal managed to connect to the cluster host with the specified credentials or not.
* **Open documentation** - opens the cluster related documentation page.
* **Add a new cluster** - displays the cluster creation form.
* **Cluster properties** - shows the specified cluster properties.
* **Delete cluster** - remove cluster by clicking the recycle bin icon.

## View Authentication Data

To view authentication data that is used to log in to the cluster, run the `kubectl describe` command:

  ```bash
  kubectl describe secret cluster_name -n edp
  ```

## Delete Cluster

To delete cluster, use the `kubectl delete` command as follows:

  ```bash
  kubectl delete secret cluster_name -n edp
  ```

## Related Articles

* [Add Cluster](../user-guide/add-cluster.md)
* [Add Application](../user-guide/add-application.md)
