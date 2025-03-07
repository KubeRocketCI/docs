---

title: "Deploy Application In Remote Cluster via IRSA"
sidebar_label: "Deploy Application In Remote Cluster via IRSA"
description: "Learn how to securely deploy applications across AWS accounts using IRSA (IAM Roles for Service Accounts) in KubeRocketCI. Step-by-step guide for EKS cross-account access configuration."

---
<!-- markdownlint-disable MD025 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Deploy Application In Remote Cluster via IRSA

<head>
  <link rel="canonical" href="https://docs.kuberocketci.io/docs/operator-guide/cd/deploy-application-in-remote-cluster-via-irsa" />
</head>

KubeRocketCI provides the capability to deploy applications securely using IAM Roles for Service Accounts (IRSA) in AWS EKS.
This integration enables Kubernetes pods to assume IAM roles for secure and temporary access to AWS resources, eliminating the need for long-lived credentials. While the deployment process is streamlined for most users, the platform also supports advanced configurations for custom permissions and role management, ensuring flexibility for more complex scenarios.

## Prerequisites

To start using this approach, you need to have OIDC (OpenID Connect) already configured for your EKS cluster. This setup allows Kubernetes service accounts to securely assume IAM roles. For your convenience, please follow our documentation [EKS OIDC With Keycloak](../auth/configure-keycloak-oidc-eks.md). This setup seamlessly integrates OIDC with minimal effort.

## Roles

Cross-account interaction is performed through IRSA with a two-tiered IAM role setup:

- In AWS Account A, the EKS cluster runs a kuberocketci cd-pipeline-operator with service account.
- This service account obtains temporary credentials through IRSA, which are associated with the `AWSIRSA_\{cluster_name\}_CDPipelineOperator` role.
- `AWSIRSA_\{cluster_name\}_CDPipelineOperator` can then assume the `AWSIRSA_\{cluster_name\}_CDPipelineAgent` role in AWS Account B.
- `AWSIRSA_\{cluster_name\}_CDPipelineAgent` configures the environment (Stage) by creating namespaces, generating service accounts, copying secrets, and preparing for deployment.

### Required IAM Roles, and polices for KRCI

Trust policy for the initial IRSA role that the service account assumes.
<details>
<summary><b>View: AWSIRSA_\{cluster_name\}_CDPipelineOperator (AWS Account A)</b></summary>
```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Principal": {
                "Federated": "arn:aws:iam::<AWS_ACCOUNT_A_ID>:oidc-provider/oidc.eks.<AWS_REGION>.amazonaws.com/id/EXAMPLED539D4633E53DE1B71EXAMPLE"
            },
            "Action": "sts:AssumeRoleWithWebIdentity",
            "Condition": {
                "StringEquals": {
                    "oidc.eks.<AWS_REGION>.amazonaws.com/id/EXAMPLED539D4633E53DE1B71EXAMPLE:sub": [
                        "system:serviceaccount:krci:edp-cd-pipeline-operator"
                    ]
                }
            }
        },
        {
            "Effect": "Allow",
            "Principal": {
                "AWS": "arn:aws:iam::<AWS_ACCOUNT_A_ID>:AWSIRSA_{cluster_name}_CDPipelineOperator"
            },
            "Action": "sts:AssumeRole",
            "Condition": {}
        }
    ]
}
```
</details>
Policy allows assuming roles in Account B.

<details>
<summary><b>View: AWSIRSA_\{cluster_name\}_CDPipelineAssume (AWS Account A)</b></summary>
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": "sts:AssumeRole",
      "Resource": "arn:aws:iam::<AWS_ACCOUNT_B_ID>:role/AWSIRSA_{cluster_name}_CDPipelineAgent"
    }
  ]
}
```
</details>

Trust policy to control access to Account B resources.

<details>
<summary><b>View: AWSIRSA_\{cluster_name\}_CDPipelineAgent (AWS Account B)</b></summary>
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "AWS": "arn:aws:iam::<AWS_ACCOUNT_A_ID>:role/AWSIRSA_{cluster_name}_CDPipelineOperator"
      },
      "Action": "sts:AssumeRole"
    },
    {
      "Effect": "Allow",
      "Principal": {
        "Federated": "arn:aws:iam::<AWS_ACCOUNT_B_ID>:oidc-provider/oidc.eks.<AWS_REGION>.amazonaws.com/id/EXAMPLED539D4633E53DE1B71EXAMPLE"
      },
      "Action": "sts:AssumeRoleWithWebIdentity",
      "Condition": {
        "StringLike": {
          "oidc.eks.<AWS_REGION>.amazonaws.com/id/EXAMPLED539D4633E53DE1B71EXAMPLE:sub": "system:serviceaccount:*"
        }
      }
    }
  ]
}
```
</details>

Policy defines permissions for deployments.

<details>
<summary><b>View: AWSIRSA_\{cluster_name\}_CDPipelineClusterAccess (AWS Account B)</b></summary>
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "eks:DescribeCluster",
        "eks:ListClusters",
        "eks:AccessKubernetesApi"
      ],
      "Resource": "arn:aws:eks:<AWS_REGION>:<AWS_ACCOUNT_B_ID>:cluster/<cluster-name>"
    }
  ]
}
```
</details>

### Required IAM Roles and Policies for ArgoCD Cross-Account Deployment

This section outlines the necessary IAM roles and policies required for ArgoCD to manage Kubernetes clusters across AWS accounts securely. The setup follows AWS best practices by using IAM Roles for Service Accounts (IRSA) and cross-account access to limit privileges effectively.

This IAM role is used by ArgoCD to authenticate via OIDC and assume required permissions.

  ![ArgoCD IRSA access model](../../assets/operator-guide/deploy-application-in-remote-cluster-via-irsa/cluster-irsa-argocd-acess-model.jpg "ArgoCD IRSA access model")

<details>
<summary><b>View: AWSIRSA_\{cluster_name\}_ArgoCDMaster (AWS Account A)</b></summary>

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Principal": {
                "AWS": "arn:aws:iam::<AWS_ACCOUNT_A_ID>:role/AWSIRSA_{cluster_name}_ArgoCDMaster"
            },
            "Action": "sts:AssumeRole"
        },
        {
            "Effect": "Allow",
            "Principal": {
                "Federated": "arn:aws:iam::<AWS_ACCOUNT_B_ID>:oidc-provider/oidc.eks.<AWS_REGION>.amazonaws.com/id/EXAMPLED539D4633E53DE1B71EXAMPLE"
            },
            "Action": "sts:AssumeRoleWithWebIdentity",
            "Condition": {
                "StringLike": {
                    "oidc.eks.<AWS_REGION>.amazonaws.com/id/EXAMPLED539D4633E53DE1B71EXAMPLE:sub": "system:serviceaccount:*"
                },
                "StringEquals": {
                    "oidc.eks.<AWS_REGION>.amazonaws.com/id/EXAMPLED539D4633E53DE1B71EXAMPLE:aud": "sts.amazonaws.com"
                }
            }
        }
    ]
}
```
</details>

This policy allows ArgoCD in Account A to describe and access the EKS cluster in Account B.

<details>
<summary><b>View: AWSIRSA_\{cluster_name\}_ArgoCDMasterClusterAccess (AWS Account A)</b></summary>
```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "eks:DescribeCluster",
                "eks:ListClusters",
                "eks:AccessKubernetesApi"
            ],
            "Resource": "arn:aws:eks:<AWS_REGION>:<AWS_ACCOUNT_B_ID>:cluster/<cluster-name>"
        }
    ]
}
```
</details>

This role allows ArgoCD service accounts to assume permissions necessary for managing deployments in Account B.

<details>
<summary><b>View: AWSIRSA_\{cluster_name\}_ArgoCDAgentAccess (AWS Account B)</b></summary>
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Federated": "arn:aws:iam::<AWS_ACCOUNT_A_ID>:oidc-provider/oidc.eks.<AWS_REGION>.amazonaws.com/id/EXAMPLED539D4633E53DE1B71EXAMPLE"
      },
      "Action": "sts:AssumeRoleWithWebIdentity",
      "Condition": {
        "StringEquals": {
          "oidc.eks.<AWS_REGION>.amazonaws.com/id/EXAMPLED539D4633E53DE1B71EXAMPLE:sub": [
            "system:serviceaccount:argocd:argocd-application-controller",
            "system:serviceaccount:argocd:argocd-applicationset-controller",
            "system:serviceaccount:argocd:argocd-server"
          ],
          "oidc.eks.<AWS_REGION>.amazonaws.com/id/EXAMPLED539D4633E53DE1B71EXAMPLE:aud": "sts.amazonaws.com"
        }
      }
    }
  ]
}
```
</details>

This role enables ArgoCD to assume the necessary permissions within the EKS cluster in Account B.

<details>
<summary><b>View: AWSIRSA_\{cluster_name\}_ArgoCDAssume (AWS Account B)</b></summary>
```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": "sts:AssumeRole",
            "Resource": "arn:aws:iam::<AWS_ACCOUNT_B_ID>:role/AWSIRSA_{cluster_name}_ArgoCDAgentAccess"
        }
    ]
}
```
</details>

## Add annotations to service accounts (Account A)

### Add annotations to cd-pipeline-operator service account (Account A)

<Tabs
  defaultValue="patch"
  values={[
    {label: 'patch', value: 'patch'},
    {label: 'Manifests', value: 'manifests'},
  ]}>

  <TabItem value="patch">

  ```bash title="ServiceAccount: edp-cd-pipeline-operator"
  kubectl patch serviceaccount edp-cd-pipeline-operator -n krci \
    -p '{"metadata": {"annotations": {"eks.amazonaws.com/role-arn": "arn:aws:iam::<AWS_ACCOUNT_A_ID>:role/AWSIRSA_{cluster_name}_CDPipelineOperator"}}}'
  ```

  </TabItem>

  <TabItem value="manifests">

  ```yaml title="ServiceAccount: edp-cd-pipeline-operator"
  apiVersion: v1
  kind: ServiceAccount
  metadata:
    annotations:
      eks.amazonaws.com/role-arn: "arn:aws:iam::<AWS_ACCOUNT_A_ID>:role/AWSIRSA_{cluster_name}_CDPipelineOperator"
    name: edp-cd-pipeline-operator
    namespace: krci
  ```

  </TabItem>

</Tabs>

After applying annotations to service accounts, it is necessary to restart the corresponding deployments to ensure new pods are created with the updated IAM roles configuration. Use the following command:

```bash
kubectl rollout restart deployment cd-pipeline-operator -n krci
```

### Annotate Service Accounts in Kubernetes (Account A)

Annotate the service accounts in the account where Argo CD is located with the corresponding role ARN:

<Tabs
  defaultValue="patch"
  values={[
  {label: 'patch', value: 'patch'},
  {label: 'Manifests', value: 'manifests'},
  ]}>

  <TabItem value="patch">

  ```bash title="ServiceAccount: argocd-application-controller"

  kubectl patch serviceaccount argocd-application-controller -n argocd \
    -p '{"metadata": {"annotations": {"eks.amazonaws.com/role-arn": "arn:aws:iam::<AWS_ACCOUNT_A_ID>:role/AWSIRSA_{cluster_name}_ArgoCDMaster"}}}'
  ```
  ```bash title="ServiceAccount: argocd-applicationset-controller"

  kubectl patch serviceaccount argocd-applicationset-controller -n argocd \
    -p '{"metadata": {"annotations": {"eks.amazonaws.com/role-arn": "arn:aws:iam::<AWS_ACCOUNT_A_ID>:role/AWSIRSA_{cluster_name}_ArgoCDMaster"}}}'
  ```
  ```bash title="ServiceAccount: argocd-server"

  kubectl patch serviceaccount argocd-server -n argocd \
    -p '{"metadata": {"annotations": {"eks.amazonaws.com/role-arn": "arn:aws:iam::<AWS_ACCOUNT_A_ID>:role/AWSIRSA_{cluster_name}_ArgoCDMaster"}}}'
  ```
  </TabItem>

  <TabItem value="manifests">

  ```yaml title="ServiceAccount: argocd service accounts"
  apiVersion: v1
  kind: ServiceAccount
  metadata:
    annotations:
      eks.amazonaws.com/role-arn: "arn:aws:iam::<AWS_ACCOUNT_A_ID>:role/AWSIRSA_{cluster_name}_ArgoCDMaster"
    name: argocd-application-controller
    namespace: argocd
  ---
  apiVersion: v1
  kind: ServiceAccount
  metadata:
    annotations:
      eks.amazonaws.com/role-arn: "arn:aws:iam::<AWS_ACCOUNT_A_ID>:role/AWSIRSA_{cluster_name}_ArgoCDMaster"
    name: argocd-applicationset-controller
    namespace: argocd
  ---
  apiVersion: v1
  kind: ServiceAccount
  metadata:
    annotations:
      eks.amazonaws.com/role-arn: "arn:aws:iam::<AWS_ACCOUNT_A_ID>:role/AWSIRSA_{cluster_name}_ArgoCDMaster"
    name: argocd-server
    namespace: argocd
  ```
  </TabItem>

</Tabs>

After applying annotations to service accounts, it is necessary to restart the corresponding workloads to ensure new pods are created with the updated IAM roles configuration. . Use the following commands:

```bash
kubectl delete pod -l app.kubernetes.io/name=argocd-application-controller -n argocd

kubectl delete pod -l app.kubernetes.io/name=argocd-applicationset-controller -n argocd

kubectl delete pod -l app.kubernetes.io/name=argocd-server -n argocd
```

## Define Argo CD Project for Remote Clusters (Account A)

Update the Argo CD project to add a new destination for the remote cluster:

```yaml
apiVersion: argoproj.io/v1alpha1
kind: AppProject
metadata:
  name: krci
  namespace: argocd
spec:
  destinations:
    - namespace: krci-*
      server: https://EXAMPLED539D4633E53DE1B71EXAMPLE.gr7.<AWS_REGION>.eks.amazonaws.com
```

## Update aws_auth ConfigMap in Target Cluster (Account B)

<details>
<summary><b>View: aws-auth-configmap.yaml</b></summary>
```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: aws-auth
  namespace: kube-system
data:
  mapRoles: |
    - groups:
      - "cd-pipeline-operator"
      rolearn: "arn:aws:iam::<AWS_ACCOUNT_A_ID>:role/AWSIRSA_{cluster_name}_CDPipelineOperator"
      username: "eksadminrole"
    - groups:
      - "system:masters"
      rolearn: "arn:aws:iam::<AWS_ACCOUNT_A_ID>:role/AWSIRSA_{cluster_name}_ArgoCDMaster"
      username: "arn:aws:iam::<AWS_ACCOUNT_A_ID>:role/AWSIRSA_{cluster_name}_ArgoCDMaster"
```
</details>

## Create ClusterCore and ClusterRoleBinding (Account B)

<Tabs
  defaultValue="kubectl"
  values={[
  {label: 'kubectl', value: 'kubectl'},
  {label: 'Manifests', value: 'manifests'},
  ]}>

  <TabItem value="kubectl">

  ```bash title="ServiceAccount: argocd-application-controller"
  kubectl create clusterrole cd-pipeline-rolebinding-access \
    --verb=get,list,create,delete \
    --resource=rolebindings.rbac.authorization.k8s.io \
    --verb=create,get,list \
    --resource=secrets

  kubectl create clusterrolebinding cd-pipeline-operator-rolebinding-access \
    --clusterrole=cd-pipeline-rolebinding-access \
    --group=cd-pipeline-operator
  ```
  </TabItem>

  <TabItem value="manifests">

  ```yaml title="cd-pipeline-rolebinding-access.yaml"
  apiVersion: rbac.authorization.k8s.io/v1
  kind: ClusterRole
  metadata:
    name: cd-pipeline-rolebinding-access
  rules:
    - verbs:
        - get
        - list
        - create
        - delete
      apiGroups:
        - rbac.authorization.k8s.io
      resources:
        - rolebindings
    - verbs:
        - create
        - get
        - list
      apiGroups:
        - ''
      resources:
        - secrets
  ```

  ```yaml title="cd-pipeline-operator-rolebinding-access.yaml"
  apiVersion: rbac.authorization.k8s.io/v1
  kind: ClusterRoleBinding
  metadata:
    name: cd-pipeline-operator-rolebinding-access
  subjects:
    - kind: Group
      apiGroup: rbac.authorization.k8s.io
      name: cd-pipeline-operator
  roleRef:
    apiGroup: rbac.authorization.k8s.io
    kind: ClusterRole
    name: cd-pipeline-rolebinding-access
  ```
  </TabItem>

</Tabs>


## Clusters secret configuration

### KuberocketCI IRSA cluster connection secret configuration

This configuration enables secure cluster connection using IAM Roles for Service Accounts (IRSA) in AWS. You can set it up using one of the following methods:

<Tabs
  defaultValue="kuberocketci"
  values={[
    {label: 'KubeRocketCI portal', value: 'kuberocketci'},
    {label: 'Manifests', value: 'manifests'},
    {label: 'External Secrets Operator', value: 'externalsecret'},
  ]}>

  <TabItem value="kuberocketci">
  Navigate to **KuberocketCI portal** -> **Configuration** -> **DEPLOYMENT** -> **CLUSTERS** and click the **+ ADD CLUSTER** fill in the following fields and click **SAVE** button:

  * **Cluster name** : a unique and descriptive name for the new cluster (e.g., prod-cluster)
  * **Cluster Host** : the cluster’s endpoint URL (e.g., example-cluster-domain.com);
  * **Authority Data** : base64-encoded kubernetes certificate essential for authentication. Obtain this certificate from the configuration file of the user account you intend to use for accessing the cluster.
  * **Role ARN** : arn:aws:iam::\<AWS_ACCOUNT_A_ID\>:role/AWSIRSA_\{cluster_name\}_CDPipelineOperator

  ![Add cluster IRSA](../../assets/operator-guide/deploy-application-in-remote-cluster-via-irsa/cluster-irsa-add-cluster.png "Add cluster IRSA")
  </TabItem>

  <TabItem value="manifests">

  ```yaml
  apiVersion: v1
  kind: Secret
  metadata:
    name: <cluster-name>-cluster
    namespace: krci
    labels:
      app.edp.epam.com/cluster-type: irsa
      app.edp.epam.com/secret-type: cluster
      argocd.argoproj.io/secret-type: cluster
  data:
    config: >-
      {
        "server": "https://EXAMPLED539D4633E53DE1B71EXAMPLE.gr7.<AWS_REGION>.eks.amazonaws.com",
        "awsAuthConfig": {
          "clusterName": "<cluster-name>",
          "roleARN": "arn:aws:iam::<AWS_ACCOUNT_A_ID>:role/AWSIRSA_{cluster_name}_CDPipelineOperator"
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
      "server": "https://EXAMPLED539D4633E53DE1B71EXAMPLE.gr7.<AWS_REGION>.eks.amazonaws.com",
      "awsAuthConfig": {
        "clusterName": "<cluster-name>",
        "roleARN": "arn:aws:iam::<AWS_ACCOUNT_A_ID>:role/AWSIRSA_{cluster_name}_CDPipelineOperator"
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

### ArgoCD IRSA cluster connection secret configuration

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
        "roleARN": "arn:aws:iam::<AWS_ACCOUNT_A_ID>:role/AWSIRSA_{cluster_name}_ArgoCDMaster"
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

After applying the configuration, you can verify the cluster connection `ArgoCD` -> `Settings` -> `Clusters` -> `<cluster-name>`:

  ![ArgoCD cluster IRSA status](../../assets/operator-guide/deploy-application-in-remote-cluster-via-irsa/cluster-irsa-argocd-status.png "ArgoCD cluster IRSA status")

## Update KuberocketCI configmap add new cluster

To add cluster to the KuberocketCI platform click on `kubernetes` icon -> `Configuration` -> `ConfigMap` -> `edp-config` and add parameter `available_clusters` in data with value `<cluster-name>` and click **Save & apply**:

  ```yaml title="edp-config.yaml"
  data:
    available_clusters: <cluster-name>
  ```

  ![Add cluster via configmap edp-config](../../assets/operator-guide/deploy-application-in-remote-cluster-via-irsa/cluster-irsa-configmap-edp-config.png "Add cluster via configmap edp-config")

## Deploy application on new cluster

### Create Deployment Flow

To create a deployment flow, follow the steps below:

1. Navigate to the **Deployment Flows** tab and click the **+ Create Deployment Flow** button.

2. The **Enter name** tab of the **Create Deployment Flow**:

  ![Create deployment flow](../../assets/operator-guide/deploy-application-in-remote-cluster-via-irsa/cluster-irsa-deployment-flow.png "Create deployment flow")

3. Enter the deployment flow name that will be displayed in the Deployment Flows list. Enter at least two characters, use the lower-case letters, numbers, and dashes.

4. Click the **Next** button to move onto the **Add applications** tab.

  :::note
    The namespace created by the environment has the following pattern combination: **[KubeRocketCI namespace]-[environment name]-[stage name]**.
    Please be aware that the namespace length should not exceed 63 symbols.
  :::

3. The Component tab of the Environments menu is presented below:

  ![Create deployment flow](../../assets/operator-guide/deploy-application-in-remote-cluster-via-irsa/cluster-irsa-create-deployment-flow.png "Add cluster via configmap edp-config")

4. Click the Create button to finish deployment flow configuration and proceed with configuring environment.

### Create IRSA cluster Environment

1. On the Environments menu, click the Create Environment button.

2. The Configure Stage tab of the Create Stage menu is presented below:

  ![Select cluster](../../assets/operator-guide/deploy-application-in-remote-cluster-via-irsa/cluster-irsa-select-cluster.png "Select cluster")

Set the proper cluster options:

  * **Cluster** - Choose the `<cluster-name>` to deploy the stage in;
  * **Stage name** - Enter the stage name;
  * **Description** - Enter the description for this stage;

3. Click the Next button to move onto the Add quality gates tab.

4. Click the Create button to start the provisioning of the pipeline. cluster-irsa-krci-deployed-application.png

  ![Environment overview](../../assets/operator-guide/deploy-application-in-remote-cluster-via-irsa/cluster-irsa-environment-overview.png "Environment overview")

### Deployed application summary

  ![Environment overview](../../assets/operator-guide/deploy-application-in-remote-cluster-via-irsa/cluster-irsa-krci-deployed-application.png "Environment overview")

  ![ArgoCD deployed application summary](../../assets/operator-guide/deploy-application-in-remote-cluster-via-irsa/cluster-irsa-deployed-application-summary.png "ArgoCD deployed application summary")


* [Argo CD Integration](argocd-integration.md)
* [Add Cluster](../../user-guide/add-cluster.md)
* [Add Application](../../user-guide/add-application.md)
* [Add CD Pipeline](../../user-guide/add-cd-pipeline.md)
