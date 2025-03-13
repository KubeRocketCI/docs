---

title: "Install KubeRocketCI"
description: "Comprehensive guide on installing KubeRocketCI, covering prerequisites, various deployment methods including Helm, Argo CD GitOps, and AWS Marketplace, and additional setup options."
sidebar_label: "Install KubeRocketCI"

---
<!-- markdownlint-disable MD025 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Install KubeRocketCI

<head>
  <link rel="canonical" href="https://docs.kuberocketci.io/docs/operator-guide/install-kuberocketci" />
</head>

Inspect the main steps to install KubeRocketCI. Please check the [Prerequisites Overview](prerequisites.md) page before starting the installation. Also, to authenticate each of the release artifacts, please refer to the [Verification of KubeRocketCI Artifacts](../developer-guide/artifacts-verification.md) guide.
There are multiple ways to deploy KubeRocketCI:

* Using Helm (see below);
* Using [Argo CD GitOps approach](./add-ons-overview.md);
* Using [AWS Marketplace](./aws-marketplace-install.md).

:::note
  The installation process below is given for a Kubernetes cluster. The steps that differ for an OpenShift cluster are indicated in the notes.
:::

:::warning
  KubeRocketCI is aligned with industry standards for storing and managing sensitive data, ensuring optimal security. However, the use of custom solutions introduces uncertainties, thus the responsibility for the safety of your data is fully covered by the platform administrator.
:::

1. (Optional) KubeRocketCI manages secrets via `External Secret Operator` to integrate with a variety of tools. For more information about the secrets being used and how they are utilized, please refer to the [External Secrets Operator Integration](./secrets-management/external-secrets-operator-integration.md) guide.

2. (Optional) Deploy and configure Keycloak to enable Single Sign-On approach. To see the details on how to configure Keycloak correctly, please refer to the [Install Keycloak](./auth/keycloak.md#configuration) page.

3. Add the Helm charts repository:

    ```bash
    helm repo add epamedp https://epam.github.io/edp-helm-charts/stable
    ```

4. Choose the required Helm chart version:

    ```bash
    helm search repo epamedp/edp-install
    NAME                    CHART VERSION   APP VERSION     DESCRIPTION
    epamedp/edp-install     3.10.5          3.10.5           A Helm chart for KubeRocketCI Platform
    ```

    :::note
      It is highly recommended to use the latest released version.
    :::

5. KubeRocketCI can be integrated with the following version control systems:

    * [GitHub](https://docs.github.com/en) (by default)
    * [GitLab](https://docs.gitlab.com/)
    * [Gerrit](https://gerrit-review.googlesource.com/Documentation/)

    This integration implies in what system the development of the application will be or is already being carried out. The `global.gitProviders` flag in the edp-install controls this integration:

    Global VCS configuration (can be multiple values):

    ```yaml title="values.yaml"
    ...
    global:
      gitProviders:
        - gerrit
        - github
        - gitlab
        - bitbucket
    ...
    ```

    Tekton event listner configuration:

    <Tabs
      defaultValue="github"
      values={[
        {label: 'GitHub', value: 'github'},
        {label: 'GitLab', value: 'gitlab'},
        {label: 'Bitbucket', value: 'bitbucket'},
        {label: 'Gerrit', value: 'gerrit'}
      ]}>

      <TabItem value="github">
        ``` yaml title="values.yaml"
        ...
        edp-tekton:
          gitServers:
            github:
              gitProvider: github
              host: github.com
              webhook:
                skipWebhookSSLVerification: false
              eventListener:
                enabled: true
                resources:
                  requests:
                    memory: "64Mi"
                    cpu: "50m"
                  limits:
                    memory: "128Mi"
                    cpu: "500m"
                ingress:
                  enabled: true
        ...
        ```
      </TabItem>
      <TabItem value="gitlab">
        ``` yaml title="values.yaml"
        ...
        edp-tekton:
          gitServers:
            gitlab:
              gitProvider: gitlab
              host: gitlab.com
              webhook:
                skipWebhookSSLVerification: false
              eventListener:
                enabled: true
                resources:
                  requests:
                    memory: "64Mi"
                    cpu: "50m"
                  limits:
                    memory: "128Mi"
                    cpu: "500m"
                ingress:
                  enabled: true
        ...
        ```
      </TabItem>
      <TabItem value="bitbucket">
        ``` yaml title="values.yaml"
        ...
        edp-tekton:
          gitServers:
            bitbucket:
              gitProvider: bitbucket
              host: bitbucket.org
              webhook:
                skipWebhookSSLVerification: false
              eventListener:
                enabled: true
                resources:
                  requests:
                    memory: "64Mi"
                    cpu: "50m"
                  limits:
                    memory: "128Mi"
                    cpu: "500m"
                ingress:
                  enabled: true
        ...
        ```
      </TabItem>
      <TabItem value="gerrit">
        ``` yaml title="values.yaml"
        ...
        gerrit-operator:
          enabled: true
        ...
        edp-tekton:
          gitServers:
            gerrit:
              eventListener:
                enabled: true
                ingress:
                  enabled: false
                resources:
                  limits:
                    cpu: 500m
                    memory: 128Mi
                  requests:
                    cpu: 50m
                    memory: 64Mi
              gitProvider: gerrit
              gitUser: edp-ci
              host: gerrit.edp
              nameSshKeySecret: gerrit-ciuser-sshkey
              quickLink:
                host: gerrit.example.com
              sshPort: <gerrit_port>
              webhook:
                skipWebhookSSLVerification: false
        ...
        ```
      </TabItem>
    </Tabs>

    Gerrit server can be deployed as a part of KubeRocketCI platform when the Gerrit is enabled.
    For more details on how to integrate KubeRocketCI with GitLab or GitHub, please refer to the [Add GitServer](../user-guide/add-git-server.md) page.

6. Configure Container Registry.

    KubeRocketCI supports integration with multiple container registries, providing flexibility for projects using either OpenShift or Kubernetes clusters.
    The supported container registries include AWS ECR, DockerHub, Harbor, OpenShift (OCR), Nexus, and GitHub (GHCR). This integration simplifies the process
    of storing and managing container images across various environments.

    For more details on integrating these container registries with KubeRocketCI, refer to the following documentation: [Container Registries Integration Guide](../user-guide/change-container-registry.md) and [Manage Container Registries](../user-guide/manage-container-registries.md)

    For example, to enable [Harbor](artifacts-management/harbor-integration.md) as a registry storage, use the values below:

    ```yaml
    global:
      dockerRegistry:
        type: "harbor"
        url: "harbor.example.com"
    ```

7. Install platform in the **krci** namespace with the Helm tool:

    Check the parameters in the installation chart [values.yaml](https://github.com/epam/edp-install/blob/v3.10.3/deploy-templates/values.yaml) file.

    ```bash
    helm install krci epamedp/edp-install --wait --timeout=900s \
    --version 3.10.5 \
    --values values.yaml \
    --namespace krci \
    --create-namespace
    ```

    See the example on the parameters below:

    ```yaml title="Example values.yaml file"
    global:
      # -- platform type that can be either "kubernetes" or "openshift"
      platform: "kubernetes"
      # DNS wildcard for routing in the Kubernetes cluster;
      dnsWildCard: "example.com"
      # -- Administrators of your tenant
      # -- Can be gerrit, github or gitlab. By default: github
      gitProviders:
        - github
      dockerRegistry:
        # -- Docker Registry endpoint
        url: "<AWS_ACCOUNT_ID>.dkr.ecr.<AWS_REGION>.amazonaws.com"
        type: "ecr"
        space: "edp"

    sso:
      enabled: false
      # Keycloak address with which the platform will be integrated
      keycloakUrl: "https://keycloak.example.com"
      admins:
        - "stub_user_one@example.com"
      developers:
        - "stub_user_one@example.com"
        - "stub_user_two@example.com"

    edp-tekton:
      # Tekton Kaniko configuration section
      kaniko:
        # -- AWS IAM role to be used for kaniko pod service account (IRSA). Format: arn:aws:iam::<AWS_ACCOUNT_ID>:role/<AWS_IAM_ROLE_NAME>
        roleArn: arn:aws:iam::<AWS_ACCOUNT_ID>:role/<AWS_IAM_ROLE_NAME>
      gitServers:
        github:
          gitProvider: github
          host: github.com
          webhook:
            skipWebhookSSLVerification: false
          eventListener:
            enabled: true
            resources:
              requests:
                memory: "64Mi"
                cpu: "50m"
              limits:
                memory: "128Mi"
                cpu: "500m"
            ingress:
              enabled: true

    edp-headlamp:
      config:
        oidc:
          enabled: false
    ```

    :::note
      Set `global.platform=openshift` while deploying KubeRocketCI in OpenShift.
    :::

    :::info
      The full installation with integration between tools will take at least 5 minutes.
    :::

8. To check if the installation is successful, run the command below:

    ```bash
    helm status edp -n krci
    ```

    You can also check ingress endpoints to get the Portal endpoint to enter Portal UI:

    ```bash
    kubectl get ingress portal -n krci
    ```

9. Once KubeRocketCI is successfully installed, you can explore our [Use Cases](../use-cases/index.md) to try out the functionality of the KubeRocketCI platform.

## Related Articles

* [Quick Start](../quick-start/platform-installation.md)
* [Manage Git Providers](../user-guide/add-git-server.md)
* [Set Up Kubernetes](kubernetes-cluster-settings.md)
* [Set Up OpenShift](openshift-cluster-settings.md)
* [KubeRocketCI Installation Prerequisites Overview](prerequisites.md)
* [UI Portal OIDC Integration](auth/ui-portal-oidc.md)
* [Verification of KubeRocketCI Artifacts](../developer-guide/artifacts-verification.md)
