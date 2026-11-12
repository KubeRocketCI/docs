# How Does KubeRocketCI Determine the Default Namespace on First Login?

<head>
  <link rel="canonical" href="https://docs.kuberocketci.io/faq/how-to/devops/determine-default-namespace-first-login" />
</head>

The portal needs two settings to show resources: the **default namespace** and the list of **allowed namespaces**. On the first login, the portal picks the default namespace in the following priority order.

## 1. Value Saved in the Browser

The portal stores the namespaces you choose in the **Namespaces** window in the local storage of your browser, separately for each cluster. If the browser already holds a saved value, the portal uses it and ignores everything below.

Because the value lives in the browser, it is not shared between browsers, devices, or users. Clearing the site data or opening the portal in another browser or in a private window brings you back to the next step.

## 2. Value From the Portal Configuration

If the browser holds no saved value, the portal asks the server for the `DEFAULT_CLUSTER_NAMESPACE` parameter and uses it as both the default namespace and the only allowed namespace. The parameter is set in the `edp-install` Helm values:

```yaml title="values.yaml"
krci-portal:
  configEnv:
    DEFAULT_CLUSTER_NAME: core
    DEFAULT_CLUSTER_NAMESPACE: krci
```

The default value is `krci`. Set it to the namespace where KubeRocketCI is installed. Changing the value later does not affect users whose browser already holds a saved value, see step 1.

:::note
The portal does not read the namespace from Keycloak user attributes, so the `default_namespace` attribute has no effect.
:::

## 3. Manual Setting

If the server returns an empty value and the browser holds nothing, no namespace is specified, and the portal shows no resources. In this case, set the namespaces manually. Click the cluster name in the upper left corner of the portal and select **Namespaces**, or click **Manage Namespaces** in the **Quick Actions** section of the **Home** page. Refer to the [Portal Settings](/docs/user-guide/portal-settings#manage-namespaces) page for more details.

:::tip
If the portal shows empty lists or `Forbidden` messages after the login, see [Empty Widgets on the Overview Page](/docs/operator-guide/troubleshooting/forbidden-messages).
:::
