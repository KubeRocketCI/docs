---
title: "Tekton Dashboard Authentication"
description: "Guide on securing Tekton Dashboard using OAuth2-Proxy with Keycloak OIDC provider, enhancing endpoint security within KubeRocketCI."
sidebar_label: "Tekton Dashboard Authentication"
---
<!-- markdownlint-disable MD025 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Tekton Dashboard Authentication

<head>
  <link rel="canonical" href="https://docs.kuberocketci.io/docs/operator-guide/auth/oauth2-proxy/" />
</head>

[OAuth2-Proxy](https://oauth2-proxy.github.io/oauth2-proxy/) is a versatile tool that serves as a reverse proxy, utilizing the OAuth 2.0 protocol with various providers like Google, GitHub, and Keycloak to provide both authentication and authorization. This guide instructs readers on how to protect their applications' endpoints using OAuth2-Proxy. By following these steps, users can enhance the security of their endpoints without modifying their current application code. In the context of KubeRocketCI, it has integration with the Keycloak OIDC provider, enabling it to connect with any component that lacks built-in authentication.

## Prerequisites

* [Keycloak](keycloak.md) with OIDC authentication is installed.
* [Keycloak operator](../add-ons-overview.md) is installed.

## Integration OAuth2-Proxy

To streamline the installation of OAuth2-Proxy in your environment, it is advised to utilize the resources available in the [Cluster Add-Ons](https://github.com/epam/edp-cluster-add-ons/tree/main/clusters/core/addons/oauth2-proxy) and their [applications](https://github.com/epam/edp-cluster-add-ons/blob/main/chart/values.yaml#L120).

## Enable OAuth2-Proxy on Tekton Dashboard

The example below illustrates how to use OAuth2-Proxy in practice when using the Tekton dashboard:

    <Tabs
      defaultValue="kubernetes"
      values={[
        {label: 'Kubernetes', value: 'kubernetes'},
        {label: 'Openshift', value: 'openshift'}
      ]}>

      <TabItem value="kubernetes">
          Edit the Tekton dashboard Ingress annotation by adding `auth-signin` and `auth-url` of oauth2-proxy by `kubectl` command:

          ```bash
          kubectl annotate ingress <application-ingress-name> \
          nginx.ingress.kubernetes.io/auth-signin='https://<oauth-ingress-host>/oauth2/start?rd=https://$host$request_uri' \
          nginx.ingress.kubernetes.io/auth-url='http://oauth2-proxy.oauth2-proxy.svc.cluster.local:80/oauth2/auth'
          ```
      </TabItem>

      <TabItem value="openshift">
          1. Generate a cookie-secret for proxy with the following command:

          ```bash
          tekton_dashboard_cookie_secret=$(openssl rand -base64 32 | head -c 32)
          ```

          2. Create `tekton-dashboard-proxy-cookie-secret` in the edp namespace:

          ```bash
          kubectl -n edp create secret generic tekton-dashboard-proxy-cookie-secret \
            --from-literal=cookie-secret=${tekton_dashboard_cookie_secret}
          ```
          3. Run `helm upgrade` to update edp-install release:

          ```bash
          helm upgrade --version <version> --set 'edp-tekton.dashboard.openshift_proxy.enabled=true' edp-install --namespace edp
          ```
      </TabItem>
    </Tabs>

## Related Articles

* [Keycloak Installation](keycloak.md)
* [Keycloak OIDC Installation](configure-keycloak-oidc-eks.md)
* [Tekton Installation](../install-tekton.md)
