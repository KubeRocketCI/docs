import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# KrakenD Integration

This guide provides comprehensive instructions for integrating KrakenD into KubeRocketCI. KrakenD is a high-performance, open-source API gateway that securely hides sensitive data and manages routing.

## Prerequisites

Ensure that an **ingress controller** and **kuberocketci-rbac** are preinstalled on the cluster. You can install them using the resources available in the [Cluster Add-Ons](https://github.com/epam/edp-cluster-add-ons) repository.

# Installation

To streamline the installation of KrakenD in your environment, use the resources available in the [Cluster Add-Ons](https://github.com/epam/edp-cluster-add-ons) repository. This method involves deploying KrakenD alongside the appropriate components, ensuring efficient management and integration into your infrastructure.

Once KrakenD is installed, update the KrakenD deployment configuration by adding the **envFrom** parameter with the secret name:

  ```bash
    kubectl patch deployment krakend -n krakend --type=json -p='[{"op": "add", "path": "/spec/template/spec/containers/0/envFrom", "value": [{"secretRef": {"name": "krakend"}}]}]'
  ```

# Configuration

1. KubeRocketCI API Gateway URL Configuration

  To configure KrakenD as the API gateway, set the following parameter in the KubeRocketCI [values.yaml](https://github.com/epam/edp-install/blob/v3.10.2/deploy-templates/values.yaml#L16) file during installation or an upgrade:

    ```yaml
      global:
        apiGatewayUrl: "https://api.example.com"
    ```

    :::note
      This URL should point to the ingress URL of the KrakenD API Gateway. By default, this [value](https://github.com/epam/edp-install/blob/v3.10.2/deploy-templates/values.yaml#L16) is left empty, which disables widgets.
    :::

2. Create krakenD secret that contains the following data

    * SONARQUBE_URL: Determine the URL of your SonarQube instance. For example: `http://sonar.sonar:9000`

    * SONARQUBE_TOKEN: Use [SonarQube Integration](../code-quality/sonarqube.md#configuration) guide for token generation(string in base64) ending with ':'.

    ```bash
      sonarqube_user_token="squ_19f5xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx46b6"
      echo -n "${TOKEN}:" | base64
    ```

    * DEPTRACK_URL: Specify the api server URL of your Dependency-Track instance. For example: `http://dependency-track-api-server.dependency-track:8080`

    * DEPTRACK_TOKEN: Use the [Dependency-Track Integration](../devsecops/dependency-track.md#configuration) guide to generate the token.

    * JWK_URL: Determine the URL for obtaining the JWK. The format is: `https://keycloak.example.com/auth/realms/<REALM_NAME>/protocol/openid-connect/certs`

  <Tabs
    defaultValue="externalsecret"
    values={[
      {label: 'Manifests', value: 'manifests'},
      {label: 'External Secrets Operator', value: 'externalsecret'},
    ]}>

    <TabItem value="manifests">

    ```yaml
    apiVersion: v1
    kind: Secret
    metadata:
      name: krakend
      namespace: krakend
    type: Opaque
    stringData:
      SONARQUBE_URL: http://sonar.sonar:9000
      SONARQUBE_TOKEN: <sonarqube-token>
      DEPTRACK_URL: http://dependency-track-api-server.dependency-track:8080
      DEPTRACK_TOKEN: <dependency-track-token>
      JWK_URL: https://keycloak.example.com/auth/realms/<sharedService>/protocol/openid-connect/certs
    ```

    </TabItem>

    <TabItem value="externalsecret">

    ```json
    {
      "SONARQUBE_URL": "http://sonar.sonar:9000",
      "SONARQUBE_TOKEN": "<sonarqube-token>",
      "DEPTRACK_URL": "http://dependency-track-api-server.dependency-track:8080",
      "DEPTRACK_TOKEN": "<dependency-track-token>",
      "JWK_URL": "https://keycloak.example.com/auth/realms/<sharedService>/protocol/openid-connect/certs"
    }
    ```

    More details about External Secrets Operator integration can be found in the [External Secrets Operator](../secrets-management/install-external-secrets-operator) page. [Cluster Add-Ons](https://github.com/epam/edp-cluster-add-ons)
    </TabItem>

  </Tabs>

* [Install KubeRocketCI With Values File](../install-kuberocketci.md)
* [Cluster Add-Ons Overview](../add-ons-overview.md)
* [SonarQube Integration](../code-quality/sonarqube.md)
* [DependencyTrack Integrate](../devsecops/dependency-track.md)
* [Keycloak Integrate](../auth/keycloak.md)
* [Ingress Controller](../install-ingress-nginx.md)
