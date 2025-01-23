# Install via Civo Marketplace

This documentation provides detailed instructions on how to install the KubeRocketCI platform via [Civo Marketplace](https://www.civo.com/marketplace/kuberocketci).
As a prerequisite, make sure to [sign up](https://dashboard.civo.com/signup) on Civo.

<div style={{ display: 'flex', justifyContent: 'center' }}>
<iframe width="560" height="315" src="https://www.youtube.com/embed/QjZoPnIKDtA" title="Install KubeRocketCI via Civo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
</div>

## Launch Cluster

The first step of the installation procedure is to launch the cluster. Please refer to the [official instructions](https://www.civo.com/docs/kubernetes/create-a-cluster) that describe this process in detail.
To succeed, follow the steps below:

1. Log in to your personal Civo account.

2. Create a new Kubernetes cluster with the following parameters. Please refer to the [official guidelines](https://www.civo.com/docs/kubernetes/create-a-cluster) for more details:

    * **Name**: `demo`
    * **How many nodes**: `1`
    * **Select size**: Type: `Standard`, Size: `Medium`
    * **Network**: `Default`
    * **Firewall**: `Create a new firewall` with the `6443` and `443` ports opened
    * **Advanced options**: Kubernetes version: latest (currently 1.28.2)
    * **Marketplace**: From the `CI/CD` selection choose `Argo CD` and `Tekton` for pre-installation.

3. Wait till the cluster is created.

    :::note
      The process of deploying the cluster typically takes about two minutes. Following this, an extra five minutes are needed for the deployment of both the Argo CD and Tekton.
    :::

4. As soon as cluster is deployed, ensure all the marketplace applications are installed, too:

    ![Check applications](../assets/operator-guide/civo-installed-applications.png "Check applications")

5. Download and apply the kubeconfig file:

    ![Download kubeconfig](../assets/operator-guide/download-kubeconfig.png "Download kubeconfig")

6. Ensure all the pods are up and running in both the Tekton and Argo CD namespaces after 5 minutes of waiting. Restart deployments if the pods are failed to deploy:

    ```bash
    kubectl get ns
    kubectl get pods -n tekton-pipelines
    kubectl get pods -n argocd
    ```

    ![Verify installation](../assets/operator-guide/check-ns-and-pods.png "Verify installation")

## Install KubeRocketCI

As soon as the cluster is deployed, it is time to install the KubeRocketCI application.

1. In the Civo portal, navigate to **Marketplace** -> **CI/CD**:

    ![Civo Marketplace](../assets/operator-guide/civo-marketplace.png "Civo Marketplace")

2. Select `KubeRocketCI` and choose which Version Control Systems you would prefer to integrate it with and click the **Install Apps** button:

    ![Add KubeRocketCI](../assets/operator-guide/civo-add-kuberocketci.png "Add KubeRocketCI")

3. Wait till the KubeRocketCI app appears in the **Installed applications** list:

    ![KubeRocketCI installed](../assets/operator-guide/civo-kuberocketci-installed.png "KubeRocketCI installed")

4. Wait till all the pods are up and running. Use the `kubectl get pods` command to check the status of the pods:

    ```bash
    kubectl get pods -n edp
    ```

    ![KubeRocketCI pods](../assets/operator-guide/civo-check-kuberocketci-ns.png "KubeRocketCI pods")

5. As soon as all the pods are deployed. Navigate to the **Cluster Information** tab and copy the DNS name:

    ![Getting DNS](../assets/operator-guide/civo-get-dns.png "Getting DNS")

6. In the new browser tab, access the Portal UI by typing the URL according to the `https://portal-edp.<DNS_name>` format.

7. Accept the security warning and click the **service access token** link to open the [instructions](../quick-start/platform-installation.md) step 5 on how to get a token to log in to the Portal UI.

8. As soon as the token is created, paste it in the **ID token** field and click the **Authenticate** button.

9. Click the notification in the bottom right corner to open the Account settings menu:

    ![Click notification](../assets/operator-guide/civo-cluster-settings.png "Click notification")

10. In the Cluster Settings menu, enter **edp** in both default and allowed namespaces and click the **CLOSE** button:

    :::note
      Don't forget to click the **+ ADD** button to add the allowed namespace.
    :::

    ![Account settings menu](../assets/operator-guide/civo-kuberocketci-portal-cluster-settings-menu.png "Account settings menu")

Well done! You've successfully installed the KubeRocketCI platform on the Civo cluster. You're now set to integrate KubeRocketCI with the necessary third-party tools.
Proceed to the [SonarQube Integration](../quick-start/integrate-sonarcloud.md) page.

## Related Articles

* [Install via AWS Marketplace](aws-marketplace-install.md)
* [KubeRocketCI Installation](install-kuberocketci.md)
* [SonarQube Integration](../quick-start/integrate-sonarcloud.md)
* [Argo CD Integration](cd/argocd-integration.md)
