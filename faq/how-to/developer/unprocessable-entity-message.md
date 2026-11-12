# How to Troubleshoot Issues in the Create Resource Window?

<head>
  <link rel="canonical" href="https://docs.kuberocketci.io/faq/how-to/developer/unprocessable-entity-message" />
</head>

The **Create Resource** window opens from the **Create Resource** button in the header of the portal. You paste one or more Kubernetes resources in YAML format and click **Apply**.

## How the Window Treats Existing Resources

The window creates a resource that does not exist. If a resource with the same kind, name, and namespace already exists, the window **replaces** it with the YAML you pasted. It does not show an error and does not ask for confirmation.

:::warning
The replacement is complete, not a merge. Any field that is missing in your YAML is removed from the existing resource. Before you apply a resource that may already exist, open it in the portal and copy its current YAML as a base.
:::

If the metadata has no namespace, the window uses your default namespace. For details, refer to [How Can I Set Namespaces in KubeRocketCI?](/faq/how-to/devops/set-namespaces-kuberocketci).

You can paste several resources in one window and separate them with `---`. After you click **Apply**, the window lists the result for each resource in the `Kind/name` format. If every resource is applied, the window closes and the portal shows the `N resources applied successfully.` message. If some resources fail, the window stays open, shows the `N succeeded, M failed.` message, and the error text next to each failed resource, so you can fix and apply them again.

## Errors in the Create Resource Window

| Message | Cause and solution |
|---------|--------------------|
| A red message above the **Apply** button, and **Apply** is disabled | The text is not valid YAML. YAML relies on whitespace and indentation to indicate nesting. Tab characters cannot be used for indentation, only spaces. Read the [YAML basics in Kubernetes](https://developer.ibm.com/tutorials/yaml-basics-and-usage-in-kubernetes/) page for more details. |
| `No valid YAML documents found.` | The window is empty, or it contains only comments and `---` separators. |
| `Resource is missing apiVersion or kind` | Add the `apiVersion` and `kind` fields to the resource. |
| `Resource kind "<kind>" not found in apiVersion "<apiVersion>"` | The cluster has no such resource type. Check the spelling of `kind` and `apiVersion`, and check that the CRD is installed. |
| `Kubernetes API request failed: 403 Forbidden` | Your account has no permission to create or replace this resource. Ask the cluster administrator for the corresponding RBAC permissions. |
| `Kubernetes API request failed: 422 ...` | Kubernetes rejected the content of the resource, for example, a wrong field name or value type. The message after the status code names the invalid field. |
