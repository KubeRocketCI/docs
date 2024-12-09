import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Nexus Image Registry

This documentation guide provides comprehensive instructions for integrating **Nexus Repository Manager** as a docker image registry with KubeRocketCI.

## Installation

To install Nexus in your environment, it's recommended to use the resources provided in the [Cluster Add-Ons](https://github.com/epam/edp-cluster-add-ons) repository. Here are detailed instructions for installing and managing the [Add-ons Application](../add-ons-overview.md). This approach involves installing both the Nexus repository manager and the [nexus-operator](https://github.com/epam/edp-nexus-operator). Leveraging the Cluster Add-Ons simplifies the deployment and management process, providing a streamlined method to integrate Nexus into your infrastructure.

1. Navigate to **nexus** section within the Cluster Add-Ons repository and align [values.yaml](https://github.com/epam/edp-cluster-add-ons/blob/main/clusters/core/addons/nexus/values.yaml):

2. Update the configuration to enable **nexus** and **nexus-operator** in [Add-Ons](https://github.com/epam/edp-cluster-add-ons/blob/main/clusters/core/apps/values.yaml) repository:

    ```yaml
    nexus:
      createNamespace: true
      enable: true

    nexus-operator:
      createNamespace: true
      enable: true
    ```

3. Sync resources and wait till the all **nexus** and **nexus-operator** resources is created:

    ![Nexus ArgoCD applications](../../assets/operator-guide/artifacts-management/nexus-registry-addons-deploy.png "Nexus ArgoCD applications")

4. **Sign In** into **Nexus Repository Manager** using the default credentials **Username**: `admin` and **Password**: `admin123` and update the default password for better security:

    ![Nexus ArgoCD applications](../../assets/operator-guide/artifacts-management/nexus-registry-change-password.png "Nexus ArgoCD applications")

5. Create a Kubernetes Secret that the **nexus-operator** will use to connect to the **Nexus Repository Manager** and create all resources:

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
        name: nexus-admin-password
        namespace: nexus
      type: Opaque
      data:
        user: YWRtaW4=     # base64-encoded value of "admin"
        password: cGFzcw== # base64-encoded value of "pass"
      ```
    </TabItem>
    <TabItem value="externalsecret">
      ```json
      "nexus-admin-password":
      {
        "user": "XXXXXXX",
        "password": "XXXXXXX"
      }
      ```
      </TabItem>
  </Tabs>

## Configuration

With [Add-ons approach](https://github.com/epam/edp-cluster-add-ons/blob/main/clusters/core) `nexus-operator` create the necessary roles,**Service Account** `ci.user`, blob stores, repository, scripts, cleanup policies automatically. Below is a comprehensive guide on how to create all resources manually.

## Configuration Nexus Repository Manager with [Add-ons approach](https://github.com/epam/edp-cluster-add-ons/blob/main/clusters/core)

  Create a secret using `manifests` or with `External Secrets Operator` to enable the **edp-nexus-operator** to connect to the **Nexus Repository Manager** for provisioning:

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
        name: ci-nexus
        namespace: nexus
      type: Opaque
      stringData:
        password: <nexus-user-password>
      ```
    </TabItem>
    <TabItem value="externalsecret">
      ```json
      "ci-nexus":
      {
        "password": "XXXXXXX"
      }
      ```
      </TabItem>
  </Tabs>

## Configuration Nexus Repository Manager without [Add-ons approach](https://github.com/epam/edp-cluster-add-ons/blob/main/clusters/core)

Without [Add-ons approach](https://github.com/epam/edp-cluster-add-ons/blob/main/clusters/core) you need to manually update: helm chart `Nexus Repository Manager` value and create blob stores, repository, roles, **Service Account** `ci.user`:

1. Update **Nexus Repository Manager** configuration:

    ```yaml
    nexus-repository-manager:
      nexus:
        docker:
          enabled: true
          registries:
            - host: nexus-ci-container.example.com
              port: 5000
    ```

2. Create blob store. Open the Nexus UI and navigate to **Server administration and configuration** -> **Repository** -> **Blob Stores** and click **Create Blob Store**, fill the following fields and click **Save** button:

    * **Type**: `File`;
    * **Name**: `edp-yum`;

    ![Nexus create blob store](../../assets/operator-guide/artifacts-management/nexus-registry-create-roles.png "Nexus create blob store")

3. Create repository. Open the Nexus UI and navigate to **Server administration and configuration** -> **Repository** -> **Repositories**, click **+ Create repository**, select **docker (hosted)**, fill the following fields and click **Save** button:

    * **Name**: `A unique identifier for this repository`;
    * **HTTP**: `5000`;
    * **Enable Docker V1 API**: `check`;
    * **Blob store name**: `edp-yum`;
    * **Strict Content Type Validation**: `check`;

    ![Nexus create registry](../../assets/operator-guide/artifacts-management/nexus-registry-create-repository.png "Nexus create registry")

4. Open the Nexus UI and navigate to **Server administration and configuration** -> **Security** -> **Roles**. Click the **Create Role** button, fill the following fields and click **Save** button:

    * **Type**: `Nexus role`;
    * **Role ID**: `edp-admin`;
    * **Role Name**: `edp-admin`;
    * **Role Descriptions**: `Read and write access to all repos and scripts`;
    * **Applied Privileges**: `nx-apikey-all`, `nx-repository-view-*-*-add`, `nx-repository-view-*-*-browse`,`nx-repository-view-*-*-edit`, `nx-repository-view-*-*-read`, `nx-script-*-add`, `nx-script-*-delete`, `nx-script-*-read`, `nx-script-*-run`;

    ![Roles settings](../../assets/operator-guide/artifacts-management/nexus-settings-user.png "Roles settings")

5. Create repository Service Account `ci.user`. Open the Nexus UI and navigate to **Server administration and configuration** -> **Security** -> **User**. Click the `Create local user` button to create a new user:

    ![Nexus user settings](../../assets/operator-guide/artifacts-management/nexus-settings-user.png "Nexus user settings")

6. Type the `ci.user` username, fill the following fields and click the **Create local user** button to create the ***Service Account**, fill the following fields and click **Save** button::

    * **ID**: `ci.user`;
    * **First name**: `ci.user`;
    * **Last name**: `CI`;
    * **Email**: `<nexus-user-id>@krci.com`;
    * **Password**: `<nexus-user-password>`;
    * **Status**: `Active`;
    * **Roles**: `edp-admin`;

    ![Nexus create user](../../assets/operator-guide/artifacts-management/nexus-registry-create-user.png "Nexus create user")

## Integration Nexus Repository Manager with KubeRocketCI

1. Open **KubeRocketCI** -> **Configuration** -> **ARTIFACTS STORAGE** -> **REGISTRY**. Click **+ ADD REGISTRY**  fill in the fields below, and then click **SAVE** button:

    * **Registry Provider**: `Nexus`;
    * **Registry Endpoint**: `nexus-ci-container.example.com`;
    * **Repository**: `krci`; # The name of folder in nexus repository
    * **Push account User**: `ci.user`;
    * **Push account Password/Token**: `<nexus-user-password>`;
    * **Use the Push Accounts credentials**: `check`;

    ![Kuberocketci add nexus registry](../../assets/operator-guide/artifacts-management/nexus-registry-kuberocketci-integration.png "Kuberocketci add nexus registry")

2. After build application open **Nexus Repository Manager** -> **Browse server contents** -> **Browse** and open container registry:

    ![Nexus create user](../../assets/operator-guide/artifacts-management/nexus-registry-browse-overview.png "Nexus create user")

## Related Articles

* [Install via Add-Ons](../add-ons-overview.md)
* [Manage Container Registries](../../user-guide/manage-container-registries.md)
* [Nexus Sonatype Integration](nexus-sonatype.md)
* [Change Container Registry](../../user-guide/change-container-registry.md)
