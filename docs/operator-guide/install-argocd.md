# Install Argo CD

Review the necessary prerequisites and follow the detailed steps to successfully enable Argo CD within KubeRocketCI.

## Prerequisites

The following tools must be installed:

* [KubeRocketCI](./install-kuberocketci.md)
* [Kubectl version 1.23+](https://kubernetes.io/docs/tasks/tools/)
* [Helm version 3.10+](https://github.com/helm/helm/releases)
* [Keycloak](./auth/keycloak.md) (optional)

## Installation

Argo CD enablement for the platform consists of two major steps:

* Argo CD installation
* Argo CD integration with KubeRocketCI (SSO enablement, git repository onboarding, etc.)

Argo CD can be installed in several ways, please follow the [official documentation](https://argo-cd.readthedocs.io/en/stable/operator-manual/installation/) for more details. It is also possible to install Argo CD using the [edp-cluster-add-ons](https://github.com/epam/edp-cluster-add-ons).

### Install With Helm

Follow the steps below to install Argo CD using Helm:

:::warning "For the OpenShift users"
  When using the OpenShift platform, apply the `SecurityContextConstraints` resource. Change the namespace in the `users` section if required.

  <details>
  <summary><b>View: SecurityContextConstraints</b></summary>

    ```yaml
    allowHostDirVolumePlugin: false
    allowHostIPC: false
    allowHostNetwork: false
    allowHostPID: false
    allowHostPorts: false
    allowPrivilegeEscalation: true
    allowPrivilegedContainer: false
    allowedCapabilities: null
    apiVersion: security.openshift.io/v1
    allowedFlexVolumes: []
    defaultAddCapabilities: []
    fsGroup:
      type: MustRunAs
      ranges:
        - min: 99
          max: 65543
    groups: []
    kind: SecurityContextConstraints
    metadata:
      annotations:
          "helm.sh/hook": "pre-install"
      name: argo-redis-ha
    priority: 1
    readOnlyRootFilesystem: false
    requiredDropCapabilities:
    - KILL
    - MKNOD
    - SETUID
    - SETGID
    runAsUser:
      type: MustRunAsRange
      uidRangeMin: 1
      uidRangeMax: 65543
    seLinuxContext:
      type: MustRunAs
    supplementalGroups:
      type: RunAsAny
    seccompProfiles:
      - '*'
    users:
    - system:serviceaccount:argocd:argo-redis-ha
    - system:serviceaccount:argocd:argo-redis-ha-haproxy
    - system:serviceaccount:argocd:argocd-notifications-controller
    - system:serviceaccount:argocd:argo-argocd-repo-server
    - system:serviceaccount:argocd:argocd-server
    volumes:
    - configMap
    - downwardAPI
    - emptyDir
    - persistentVolumeClaim
    - projected
    - secret
    ```
  </details>
:::

1. Check out the _values.yaml_ file sample of the Argo CD customization, which is based on the `HA mode without autoscaling`:

    <details>
    <summary><b>View: kubernetes-values.yaml</b></summary>

      ```yaml
      redis-ha:
        enabled: true

      controller:
        enableStatefulSet: true

      server:
        replicas: 2
        extraArgs:
          - "--insecure"
        env:
          - name: ARGOCD_API_SERVER_REPLICAS
            value: '2'
        ingress:
          enabled: true
          hosts:
            - "argocd.<Values.global.dnsWildCard>"

        rbacConfig:
          # users may be still be able to login,
          # but will see no apps, projects, etc...
          policy.default: ''
          scopes: '[groups]'
          policy.csv: |
            # default global admins
            g, ArgoCDAdmins, role:admin

      repoServer:
        replicas: 2

      # Deploy without sso
      dex:
        enabled: false

      # Disabled for multitenancy env with single instance deployment
      applicationSet:
        enabled: false
      ```

    </details>

    <details>
    <summary><b>View: openshift-values.yaml</b></summary>

      ```yaml
      redis-ha:
        enabled: true

      controller:
        enableStatefulSet: true

      server:
        replicas: 2
        extraArgs:
          - "--insecure"
        env:
          - name: ARGOCD_API_SERVER_REPLICAS
            value: '2'
        route:
          enabled: true
          hostname: "argocd.<.Values.global.dnsWildCard>"
          termination_type: edge
          termination_policy: Redirect

        rbacConfig:
          # users may be still be able to login,
          # but will see no apps, projects, etc...
          policy.default: ''
          scopes: '[groups]'
          policy.csv: |
            # default global admins
            g, ArgoCDAdmins, role:admin

      repoServer:
        replicas: 2

      # Deploy without sso
      dex:
        enabled: false

      # Disabled for multitenancy env with single instance deployment
      applicationSet:
        enabled: false
      ```

    </details>

2. Run the installation:

    ```bash
    kubectl create ns argocd
    helm repo add argo https://argoproj.github.io/argo-helm
    helm install argo --version 5.33.1 argo/argo-cd -f values.yaml -n argocd
    ```

## Related Articles

* [Argo CD Integration](cd/argocd-integration.md)
* [Install via Add-Ons](add-ons-overview.md)
