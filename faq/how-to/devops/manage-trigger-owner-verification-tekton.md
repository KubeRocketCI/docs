# How to Manage Trigger Owner Verification in Tekton?

<head>
  <link rel="canonical" href="https://docs.kuberocketci.io/faq/how-to/devops/manage-trigger-owner-verification-tekton" />
</head>

Tekton provides a feature to control which commits can trigger Tekton pipelines, enhancing security by preventing the execution of potentially harmful scripts from unauthorized contributors. This is achieved through the use of Tekton Interceptors, which verify whether the individual initiating a pull request is an owner of the repository (i.e., has write access) before permitting pipeline execution. For more details consult official [GitHub documentation](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners).

This functionality is enabled by default. To disable it, you need to update the relevant flag in the [values.yaml](https://github.com/epam/edp-tekton/blob/master/charts/pipelines-library/values.yaml#L64) file during the installation of Tekton.

```yaml title="values.yaml"
githubOwners:
  enabled: false
```
