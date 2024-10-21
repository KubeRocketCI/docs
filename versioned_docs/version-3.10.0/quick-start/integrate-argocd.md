# Integrate Argo CD

KubeRocketCI employs Argo CD as a Continuous Deployment tool for its purposes. This page provides guidance on the installation procedure for Argo CD.

## Installation

To install Argo CD, follow the steps below:

1. Add a Helm Chart repository:

    ```bash
    helm repo add argocd https://argoproj.github.io/argo-helm
    helm repo update
    ```

2. Create the `argocd-values.yaml` file and paste the following data:

    <details>
    <summary><b>View: argocd-values.yaml</b></summary>

    ```yaml
    redis-ha:
      enabled: false
    redis:
      enabled: true

    server:
      replicas: 1
      env:
        - name: ARGOCD_API_SERVER_REPLICAS
          value: '1'

      ingress:
        enabled: true
        hosts:
          # after domain creation update
          - "argocd-dev.example.com"

      # we use Keycloak so no DEX is required
    dex:
      enabled: false

      # Disabled for multitenancy env with single instance deployment
    applicationSet:
      enabled: false

    configs:
      secret:
        # -- Create the argocd-secret
        createSecret: true
      cm:
        application.instanceLabelKey: argocd.argoproj.io/instance-kuberocketci

      params:
        server.insecure: true
        application.namespaces: >-
          edp
    ```

    </details>

3. Apply the argocd-values.yaml file using the `helm install` command:

    ```bash
    helm install argo-cd argocd/argo-cd --values argocd-values.yaml --version 5.51.4 --create-namespace --atomic -n argocd
    ```

:::info
  It may take a while for the Argo CD to be installed. The installation time depends on cluster capabilities.
:::

## Integration

The next step is to integrate Argo CD with the platform. Proceed with the instructions below:

1. Navigate to the directory that stores the `ed25519` key created during the [GitHub integration](./integrate-github.md).

2. Copy the SSH private key to the Argo CD namespace. Make sure to provide the appropriate value for the `ACCOUNT_NAME` variable:

    ```bash
    EDP_NAMESPACE=edp
    VCS_HOST="github.com"
    ACCOUNT_NAME="<github_account>"
    URL="ssh://git@${VCS_HOST}:22/${ACCOUNT_NAME}"
    kubectl create secret generic ${EDP_NAMESPACE} -n argocd \
    --from-file=sshPrivateKey=ed25519 \
    --from-literal=url="${URL}"
    kubectl label --overwrite secret ${EDP_NAMESPACE} -n argocd "argocd.argoproj.io/secret-type=repo-creds"
    ```

3. Add GitHub host to the Argo CD config map with known hosts:

    ```bash
    VCS_HOST="github.com"
    KNOWN_HOSTS_FILE="/tmp/ssh_known_hosts"
    ARGOCD_KNOWN_HOSTS_NAME="argocd-ssh-known-hosts-cm"
    rm -f ${KNOWN_HOSTS_FILE}
    kubectl get cm ${ARGOCD_KNOWN_HOSTS_NAME} -n argocd -o jsonpath='{.data.ssh_known_hosts}' > ${KNOWN_HOSTS_FILE}
    ssh-keyscan ${VCS_HOST} >> ${KNOWN_HOSTS_FILE}
    kubectl create configmap ${ARGOCD_KNOWN_HOSTS_NAME} -n argocd --from-file ${KNOWN_HOSTS_FILE} -o yaml --dry-run=client | kubectl apply -f -
    ```

4. Create the argocd-project.yaml file, using, for example, the `edp` name:

    <details>
    <summary><b>View: argocd-project.yaml</b></summary>
      ```yaml
        apiVersion: argoproj.io/v1alpha1
        kind: AppProject
        metadata:
          name: edp
          namespace: argocd
          # Finalizer that ensures that project is not deleted until it is not referenced by any application
          finalizers:
            - resources-finalizer.argocd.argoproj.io
        spec:
          description: CD pipelines for my application
          roles:
            - name: developer
              description: Users for kuberocketci tenant
              policies:
                - p, proj:edp:developer, applications, create, edp/*, allow
                - p, proj:edp:developer, applications, delete, edp/*, allow
                - p, proj:edp:developer, applications, get, edp/*, allow
                - p, proj:edp:developer, applications, override, edp/*, allow
                - p, proj:edp:developer, applications, sync, edp/*, allow
                - p, proj:edp:developer, applications, update, edp/*, allow
                - p, proj:edp:developer, repositories, create, edp/*, allow
                - p, proj:edp:developer, repositories, delete, edp/*, allow
                - p, proj:edp:developer, repositories, update, edp/*, allow
                - p, proj:edp:developer, repositories, get, edp/*, allow
          destinations:
            # ensure we can deploy to ns with tenant prefix
            - namespace: 'edp-*'
            # allow to deploy to specific server (local in our case)
              server: https://kubernetes.default.svc
          # Deny all cluster-scoped resources from being created, except for Namespace
          clusterResourceWhitelist:
          - group: ''
            kind: Namespace
          # Allow all namespaced-scoped resources to be created, except for ResourceQuota, LimitRange, NetworkPolicy
          namespaceResourceBlacklist:
          - group: ''
            kind: ResourceQuota
          - group: ''
            kind: LimitRange
          - group: ''
            kind: NetworkPolicy
          # we are ok to create any resources inside namespace
          namespaceResourceWhitelist:
          - group: '*'
            kind: '*'
          # enable access only for specific git server. The example below 'edp' - it is namespace where KubeRocketCI is deployed
          sourceRepos:
            - ssh://git@github.com:22/<github_account>/*
          # enable capability to deploy objects from namespaces
          sourceNamespaces:
            - edp
      ```

      :::info
        Please enter your GitHub account name at `<github_account>`.
      :::
    </details>

5. Retrieve the Argo CD admin secret and securely save it, as it will be required for further steps:

    ```bash
    kubectl -n argocd get secret argocd-initial-admin-secret -o jsonpath="{.data.password}" | base64 -d
    ```

Now that all the necessary preparations are completed, we can proceed with the [Application Deployment](./deploy-application.md).
