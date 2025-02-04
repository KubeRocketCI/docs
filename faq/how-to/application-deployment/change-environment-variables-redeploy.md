# How to Change Variables for an Environment and Redeploy with Updated Variables?

<head>
  <link rel="canonical" href="https://docs.kuberocketci.io/faq/how-to/application-deployment/change-environment-variables-redeploy/" />
</head>


KubeRocketCI leverages Helm charts for application deployments, with each application repository including a Helm chart located in the `deploy-templates` folder. This chart defines the default parameters used during deployment.

To customize parameters for a specific environment, a `values.yaml` file is utilized. This file provides flexibility by allowing environment-specific configurations without altering the default settings. Instead of modifying parameters directly within the `deploy-templates` directory, which we strongly discourage, a structured approach is followed by managing the `values.yaml` file in the `krci-gitops` repository. This ensures a clean and maintainable configuration process for Helm chart deployments.

:::note
Do not store sensitive information (e.g., passwords, API keys) in the `values.yaml` file. Instead, use a secret management tool like **External Secret Operator** or **Vault by HashiCorp** to handle sensitive data securely.
:::

Redefining Helm chart configuration using the **Values Override** option is described in the [Deploying Feature Branches with KubeRocketCI](/docs/use-cases/deploy-application-from-feature-branch) page.
