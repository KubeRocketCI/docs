# How Can I Set Namespaces in KubeRocketCI?

<head>
  <link rel="canonical" href="https://docs.kuberocketci.io/faq/how-to/devops/set-namespaces-kuberocketci" />
</head>

There are two ways to define namespaces in KubeRocketCI: an administrator sets the initial value for all users, and each user can change it for their own browser.

## 1. Set the Initial Value in the Helm Values

The `DEFAULT_CLUSTER_NAMESPACE` parameter of the portal defines the namespace that new users get on their first login. Set it in the `edp-install` values file, either [during the installation](/docs/operator-guide/install-kuberocketci) or later:

```yaml title="values.yaml"
krci-portal:
  configEnv:
    DEFAULT_CLUSTER_NAMESPACE: krci
```

The default value is `krci`. Set it to the namespace where KubeRocketCI is installed. After you upgrade the release, the portal restarts and serves the new value.

:::note
The new value reaches only the users whose browser has no saved namespaces. Everyone else keeps the namespaces they selected before.
:::

## 2. Set the Namespaces in the Portal

Each user can set the namespaces manually:

1. Click the cluster name in the upper left corner of the portal and select **Namespaces**. You can also click **Manage Namespaces** in the **Quick Actions** section of the **Home** page.

2. In the **Namespaces** window, set the following fields:

    * **Default Namespace** – the namespace used when you apply a resource without specifying a namespace. Permission checks for buttons also use this namespace.
    * **Allowed namespaces** – the namespaces whose resources the portal lists.

3. Click **Save**.

The portal keeps these values in the browser, so you set them again after clearing the site data or in another browser. For more details, refer to the [Portal Settings](/docs/user-guide/portal-settings#manage-namespaces) page.

:::tip
For information about how KubeRocketCI determines the default namespace on first login, see [How Does KubeRocketCI Determine the Default Namespace on First Login?](/faq/how-to/devops/determine-default-namespace-first-login)
:::
