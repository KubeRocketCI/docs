---

title: "External Secrets Operator Integration"
description: "Guide on integrating the External Secrets Operator with KubeRocketCI for secure and efficient secrets management using Kubernetes Secrets and AWS Systems Manager Parameter Store."
sidebar_label: "External Secrets Operator Integration"

---
<!-- markdownlint-disable MD025 -->

# External Secrets Operator Integration

<head>
  <link rel="canonical" href="https://docs.kuberocketci.io/docs/operator-guide/secrets-management/external-secrets-operator-integration/" />
</head>

[External Secrets Operator (ESO)](https://external-secrets.io/) can be integrated with KubeRocketCI.

There are [multiple Secrets Providers](https://external-secrets.io/latest/introduction/stability-support) that can be used within ESO. On this page, we detail the integration of KubeRocketCI with the two foremost providers:

* [Kubernetes Secrets](https://kubernetes.io/docs/concepts/configuration/secret/)
* [AWS Systems Manager Parameter Store](https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-parameter-store.html)

KubeRocketCI leverages a variety of secrets to facilitate the integration of different solutions. This document provides a comprehensive overview of the secrets utilized within the KubeRocketCI platform, along with their respective descriptions. Please note that all secrets are encoded in Base64 format.

|Secret Name|Fields|Description|Used by|
|:-|:-|:-|:-|
|keycloak|username<br />password|Username and password with [specific permissions](../auth/keycloak.md#configuration) for the Platform tenant management in Keycloak|keycloak-operator|
|ci-defectdojo|token<br />url|DefectDojo token<br />DefectDojo URL|edp-tekton|
|kaniko-docker-config|.dockerconfigjson|Serialized JSON that follows docker config patterns|edp-tekton|
|regcred|.dockerconfigjson|Serialized JSON that follows docker config patterns|cd-pipeline-operator|
|ci-github|id_rsa<br />token<br />secretString|Private key from github repo <br />API token<br />Random string|edp-tekton|
|ci-gitlab|id_rsa<br />token<br />secretString|Private key from gitlab repo <br />API token<br />Random string|edp-tekton|
|ci-bitbucket|id_rsa<br />token<br />secretString|Private key from bitbucket repo <br />App Password<br />Random string|edp-tekton|
|ci-jira|username<br />password|Jira username <br />Jira password|edp-codebase-operator|
|ci-sonarqube|token<br />url|SonarQube token<br />SonarQube URL|edp-tekton|
|ci-nexus|username<br />password<br />url|Nexus username<br />Nexus password<br />Nexus URL|edp-tekton|
|ci-dependency-track|token<br />url<br />|Dependency-Track token<br />Dependency-Track URL<br />|edp-tekton|
|oauth2-proxy-cookie-secret|cookie-secret|Secret key for oauth2-proxy|edp-install|
|keycloak-client-headlamp-secret|clientSecret|Secret key for keycloak client |keycloak-operator|
|ci-argocd|token<br />url<br />|Argo CD token<br />Argo CD URL<br />|edp-tekton|

## Platform Core Secrets

The list below represents the baseline required for full operation within platform core components:

* kaniko-docker-config: Used for pushing container images to a specific registry.
* ci-sonarqube: Used in the CI process for SonarQube integration.
* ci-nexus: Used for pushing artifacts to the Nexus storage.

:::warning
  These secrets are mandatory for Tekton pipelines to work properly.
:::

## Kubernetes Provider

All secrets are stored in Kubernetes in pre-defined namespaces. Platform suggests using the following approach for secrets management:

* `EDP_NAMESPACE-vault`, where `EDP_NAMESPACE` is a name of the namespace where KubeRocketCI is deployed, such as `edp-vault`. This namespace is used by the platform. Access to secrets in the `edp-vault` is granted only for `Administrators`.

* `EDP_NAMESPACE-cicd-vault`, where `EDP_NAMESPACE` is a name of the namespace where KubeRocketCI is deployed, such as `edp-cicd-vault`. Development team uses secrets in the `edp-cicd-vault` for microservices development.

See a diagram below for more details:

![eso-with-kubernetes](../../assets/operator-guide/eso-k8s.png)

In order to [Install KubeRocketCI](../install-kuberocketci.md), a list of passwords must be created. Secrets are provided automatically when using ESO.

1. Create a common namespace for secrets and platform:

    ```bash
    kubectl create namespace edp-vault
    kubectl create namespace edp
    ```

2. Create secrets in the `edp-vault` namespace:

    ```yaml
    apiVersion: v1
    kind: Secret
    metadata:
      name: keycloak
      namespace: edp-vault
    data:
      password: cGFzcw==  # pass in base64
      username: dXNlcg==  # user in base64
    type: Opaque
    ```

3. In the `edp-vault` namespace, create a Role with a permission to read secrets:

    ```yaml
    apiVersion: rbac.authorization.k8s.io/v1
    kind: Role
    metadata:
      namespace: edp-vault
      name: external-secret-store
    rules:
    - apiGroups: [""]
      resources:
      - secrets
      verbs:
      - get
      - list
      - watch
    - apiGroups:
      - authorization.k8s.io
      resources:
      - selfsubjectrulesreviews
      verbs:
      - create
    ```

4. In the `edp-vault` namespace, create a ServiceAccount used by `SecretStore`:

    ```yaml
    apiVersion: v1
    kind: ServiceAccount
    metadata:
      name: secret-manager
      namespace: edp
    ```

5. Connect the Role from the `edp-vault` namespace with the ServiceAccount in the `edp` namespace:

    ```yaml
    apiVersion: rbac.authorization.k8s.io/v1
    kind: RoleBinding
    metadata:
      name: eso-from-edp
      namespace: edp-vault
    subjects:
      - kind: ServiceAccount
        name: secret-manager
        namespace: edp
    roleRef:
      apiGroup: rbac.authorization.k8s.io
      kind: Role
      name: external-secret-store
    ```

6. Create a SecretStore in the `edp` namespace, and use ServiceAccount for authentication:

    ```yaml
    apiVersion: external-secrets.io/v1beta1
    kind: SecretStore
    metadata:
      name: edp-vault
      namespace: edp
    spec:
      provider:
        kubernetes:
          remoteNamespace: edp-vault  # namespace with secrets
          auth:
            serviceAccount:
              name: secret-manager
          server:
            caProvider:
              type: ConfigMap
              name: kube-root-ca.crt
              key: ca.crt
    ```

7. Each secret must be defined by the `ExternalSecret` object. A code example below creates the `keycloak` secret in the `edp` namespace based on a secret with the same name in the `edp-vault` namespace:

    ```yaml
    apiVersion: external-secrets.io/v1beta1
    kind: ExternalSecret
    metadata:
      name: keycloak
      namespace: edp
    spec:
      refreshInterval: 1h
      secretStoreRef:
        kind: SecretStore
        name: edp-vault
      # target:
      #   name: secret-to-be-created  # name of the k8s Secret to be created. metadata.name used if not defined
      data:
      - secretKey: username       # key to be created
        remoteRef:
          key: keycloak           # remote secret name
          property: username      # value will be fetched from this field
      - secretKey: password       # key to be created
        remoteRef:
          key: keycloak           # remote secret name
          property: password      # value will be fetched from this field
    ```

Apply the same approach for enabling secrets management in the namespaces used for microservices development, such as `sit` and `qa` on the diagram above.

## AWS Systems Manager Parameter Store

AWS SSM Parameter Store can be used as a [Secret Provider for ESO](https://external-secrets.io/latest/provider/aws-parameter-store). For the platform, it is recommended to use the [IAM Roles For Service Accounts approach](https://external-secrets.io/latest/provider/aws-parameter-store/#eks-service-account-credentials) (see a diagram below).

![eso-with-ssm](../../assets/operator-guide/eso-ssm.png)

### AWS Parameter Store Scenario in KubeRocketCI

In order to [Install KubeRocketCI](../install-kuberocketci.md), a list of passwords must be created. Follow the steps below, to get secrets from the SSM:

1. In the AWS, create an AWS IAM policy and an IAM role used by `ServiceAccount` in `SecretStore`. The IAM role must have permissions to get values from the SSM Parameter Store.

    a. Create an IAM policy that allows to get values from the Parameter Store with the `edp/` path. Use your `AWS Region` and `AWS Account Id`:

    ```json
    {
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "VisualEditor0",
            "Effect": "Allow",
            "Action": "ssm:GetParameter*",
            "Resource": "arn:aws:ssm:eu-central-1:012345678910:parameter/edp/*"
        }
    ]
    }
    ```

    b. Create an AWS IAM role with trust relationships (defined below) and attach the IAM policy. Put your string for `Federated` value ([see more](../infrastructure-providers/aws/enable-irsa.md) on IRSA enablement for EKS Cluster) and AWS region.

    ```json
    {
        "Version": "2012-10-17",
        "Statement": [
            {
                "Effect": "Allow",
                "Principal": {
                    "Federated": "arn:aws:iam::012345678910:oidc-provider/oidc.eks.eu-central-1.amazonaws.com/id/XXXXXXXXXXXXXXXXXX"
                },
                "Action": "sts:AssumeRoleWithWebIdentity",
                "Condition": {
                    "StringLike": {
                        "oidc.eks.eu-central-1.amazonaws.com/id/XXXXXXXXXXXXXXXXXX:sub": "system:serviceaccount:edp:*"
                    }
                }
            }
        ]
    }
    ```

2. Create a secret in the AWS Parameter Store with the name `/edp/my-json-secret`. This secret is represented as a parameter of type string within the AWS Parameter Store:

    <details>
      <summary><b>View: Parameter Store JSON</b></summary>
      ```json
      {
        "keycloak":
        {
          "username": "keycloak-username",
          "password": "keycloak-password"
        },
        "ci-defectdojo":
        {
          "token": "XXXXXXXXXXXX",
          "url": "https://defectdojo.example.com"
        },
        "kaniko-docker-config":
        {
          "auths" :
          {
            "registry.com":
            {
              "username":"registry-username",
              "password":"registry-password",
              "auth": "<base64 encoded 'user:secret' string>"
            }
        }},
        "regcred":
        {
            "auths":
            {
              "registry.com":
              {
                "username":"registry-username",
                "password":"registry-password",
                "auth":"<base64 encoded 'user:secret' string>"
              }
        }},
        "ci-github":
        {
          "id_rsa": "id-rsa-key",
          "token": "github-token",
          "secretString": "XXXXXXXXXXXX"
        },
        "ci-gitlab":
        {
          "id_rsa": "id-rsa-key",
          "token": "gitlab-token",
          "secretString": "XXXXXXXXXXXX"
        },
        "ci-jira":
        {
          "username": "jira-username",
          "password": "jira-password"
        },
        "ci-sonarqube":
        {
          "username": "<ci-user>",
          "secret": "<secret>"
        },
        "ci-nexus":
        {
          "username": "<ci.user>",
          "password": "<secret>"
        },
        "oauth2-proxy-cookie-secret":
        {
          "cookie-secret": "XXXXXXXXXXXX"
        },
        "keycloak-client-headlamp-secret": "XXXXXXXXXXXX",
        "ci-argocd":
        {
          "token": "argocd-token",
          "url": "https://argocd.example.com"
        },
        "ci-dependency-track":
        {
          "token": "dependency-track-token",
          "url": "https://dependency-track.example.com"
        }
      }
      ```
    </details>

3. Set External Secret operator enabled by updating the values.yaml file:

    ```yaml install values.yaml
    externalSecrets:
      enabled: true
    ```

4. Install/upgrade edp-install:

    ```bash
    helm upgrade --install edp epamedp/edp-install --wait --timeout=900s \
    --version <edp_version> \
    --values values.yaml \
    --namespace edp \
    --atomic
    ```

## Related Articles

* [Install External Secrets Operator](install-external-secrets-operator.md)
