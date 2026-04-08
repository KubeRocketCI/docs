---
title: "Portal Settings"
description: "Learn how to configure KubeRocketCI portal settings, manage namespaces, customize appearance, view user information, handle kubeconfig, and access community resources."
sidebar_label: "Portal Settings"
---

<!-- markdownlint-disable MD025 -->

<head>
  <link rel="canonical" href="https://docs.kuberocketci.io/docs/user-guide/portal-settings" />
</head>

# Portal Settings

This page describes all the general settings related to KubeRocketCI portal. It explains how to adjust resource view, namespace visibility, and use the kubeconfig file provided by the portal.

## Overview

KubeRocketCI portal has a number of settings that can help you define resource visibility and provide you with system information.

The cluster name is displayed in the top left corner of the screen. By clicking on the cluster name, you can set default and allowed namespaces or get the kubeconfig file.

You can also find helpful information in the **Quick Actions** section of the Main Menu, at the top right corner of the screen.

## Manage Namespaces

In the **Manage Namespaces** window, you can view the namespace accessibility configuration you are supposed to specify at your first login. Here you can also edit the default and allowed namespaces:

* **Default namespace** – when you create a resource within the portal, it will be deployed in this namespace. You can set only one default namespace. By default, the namespace where the KubeRocketCI instance is deployed will be set here.
* **Allowed namespace** – resources from these namespaces will be visible in the portal.

:::note
  You can't view resources in the namespaces that you are not allowed to access according to your RBAC configuration. KubeRocketCI portal doesn't grant you extra access rights.
:::

## Get Kubeconfig

You can see the kubeconfig file used by the portal by clicking the **Get Kubeconfig** button:

Here you can view the current kubeconfig file and its expiry time. Additionally, you can also copy this kubeconfig file to use it locally. To access KubeRocketCI resources from your local machine, follow the steps below:

1. Copy the kubeconfig file from the portal.

2. Open your terminal and navigate to the **./ssh** directory.

3. Create a file and paste the kubeconfig data there.

4. Switch to this kubeconfig file:

```bash
export KUBECONFIG=/Users/<username>/.ssh/<filename>
```

5. Verify you can access KubeRocketCI resources.

## User Details

On the **User Details** window, you can view your personal information:

* **Name**: your Keycloak username;
* **Email**: your Keycloak user email;
* **Subject**: your Keycloak user ID;
* **Issuer URL**: the URL of the Keycloak realm that handles authorization;
* **Groups**: your Keycloak group membership.

## User Profile

Click the User profile button in the bottom left corner of the screen to access helpful resources and support options.

When clicked, the following options are displayed:

* **Documentation**: opens the product documentation site;
* **Join discussions**: opens the GitHub Discussions page for the product, where you can participate in community conversations;
* **Open an issue/request**: Opens the GitHub page where you can create a new issue or feature request for the product;
* **Log out**: terminates the session and redirects you to the login page.

:::note
  The profile picture is also pulled from Keycloak.
:::

## Related Articles

* [Authentication and Authorization: Overview](../operator-guide/auth/platform-auth-model#keycloak-roles-and-groups)
* [Install Keycloak](../operator-guide/auth/keycloak#configuration)
