---

title: "Deploy Application From a Feature Branch"
description: "Master the deployment of feature branches with KubeRocketCI for efficient testing and deployment, ensuring seamless integration and quality control in development workflows."
sidebar_label: "Deploy Application From a Feature Branch"
---

<!-- markdownlint-disable MD025 -->

# Deploying Feature Branches With KubeRocketCI: A Comprehensive Guide for Efficient Application Testing and Deployment

<head>
  <link rel="canonical" href="https://docs.kuberocketci.io/docs/use-cases/deploy-application-from-feature-branch" />
</head>

Deploying feature branches is crucial for testing activities, including manual testing of the product's functionality, running quality gates, and verifying dependencies or integrations with other components.

KubeRocketCI enables the deployment of feature environments straight from feature branches. This guide offers comprehensive instructions for managing and deploying these branches.

For a hands-on, end-to-end walkthrough on a local cluster — covering auto-triggered deployments, proof of namespace isolation, per-environment GitOps values override, and one-click teardown — see the [Ephemeral Environments on Kubernetes: Feature Branch Preview Walkthrough](/blog/ephemeral-preview-environments-kubernetes-feature-branch) blog post.

<div style={{ display: 'flex', justifyContent: 'center' }}>
<iframe width="560" height="315" src="https://www.youtube.com/embed/V_xPrSgbMRg" title="KubeRocketCI: Testing Changes With Feature Branch" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
</div>

### Preconditions

Before you start the use case, ensure to meet the following requirements:

- KubeRocketCI instance is [configured](../operator-guide/prerequisites.md) with [GitOps](../user-guide/gitops.md) repository.
- Developer has access to the KubeRocketCI instance using the [Single-Sign-On](../operator-guide/auth/platform-auth-model.md) approach or via token.
- Developer has access to the KubeRocketCI platform under the [Developer](../operator-guide/auth/platform-auth-model.md#keycloak-groups) role.
- Application you want to add a branch to is [onboarded](../user-guide/add-application.md) in KubeRocketCI.


### Goals

Below are the goals to complete in the use case:

- Onboard a feature branch for the application.
- Configure the GitOps approach for the Environment by adding a values.yaml file with application parameters within it.
- Deploy application with overridden parameters.

## Scenario

The use case scenario contains the following stages:

- **Create a feature branch**: Create a feature branch and build artifact for it.
- **Create a Deployment**: Create a Deployment that contains an Environment and deploy application within the Environment.
- **Configure application parameters**: Adjust a GitOps repository by adding custom application configuration into it.
- **Apply custom settings for application**: Deploy application with custom parameters.

### Create Feature Branch

There are two approaches to onboard a feature branch:

1. **Create a Feature Branch via KubeRocketCI**: KubeRocketCI creates a new branch in GitHub.
2. **Onboard an Existing Branch in KubeRocketCI**: Manually [create the branch in GitHub](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-and-deleting-branches-within-your-repository) using the correct naming convention and then onboard it into KubeRocketCI.

In this use case, we will follow the first approach to add a branch.

When creating a feature branch, ensure the branch name is lowercase to meet Kubernetes restrictions. As an example, we will use the `feature/<jira-ticket>` pattern as a naming convention for feature branches.

To create a feature branch via KubeRocketCI, follow these steps:

1. Open the KubeRocketCI portal and log into the platform:

  ![Login page](../assets/use-cases/general/login-1.png "Login page")

2. Navigate to the **Projects** section and select the desired Project.

3. Select the **Branches** tab and click the **Create branch** button:

  ![Create branch](../assets/use-cases/deploy-application-from-feature-branch/create-branch-button.png "Create branch")

4. Click the **Create branch** button and fill in the form:

  * **Branch Name**: Specify the name (e.g., `feature/tt-000`).
  * **From Commit Hash**: Specify the commit hash or leave it empty for the latest commit.
  * **Branch Version**: Provide a version tag for the branch.
  * **Review Pipeline**: Leave the default pipeline.
  * **Build Pipeline**: Leave the default pipeline.

  ![Create branch button](../assets/use-cases/deploy-application-from-feature-branch/create-branch-window.png "Create branch button")

5. Click **Create** to finalize the branch creation.

6. The branch will also be created in GitHub. Verify its creation in the repository:

  ![Codebase branches in GitHub](../assets/use-cases/deploy-application-from-feature-branch/github-codebase-branches.png "Codebase branches in GitHub")

  Since we don't create a pull request to merge our feature with the main branch, we need to manually trigger the build pipeline in the KubeRocketCI portal.

7. Build the application using the **Build** button:

  ![Build button](../assets/use-cases/deploy-application-from-feature-branch/build-application.png "Build button")

8. View the build pipeline run details by selecting the PipelineRun name:

  ![Build pipeline details](../assets/use-cases/deploy-application-from-feature-branch/build-pipeline-details.png "Build pipeline details")

### Deploy Feature Branch

Once you have completed the onboarding process for the feature branch, you can deploy its artifacts to a dedicated feature environment.

#### Create Deployment

We recommend using initials to name the Deployment. For example, a user with the email `firstname_lastname@example.com` should use `fl` as the identifier.

To create a feature environment, follow the steps below:

1. Open the **Deployments** section and click **Create Deployment**:

  ![Create deployment button](../assets/use-cases/general/create-cd-pipeline-1.png "Create deployment button")

2. In the **Create new deployment** dialog, fill in the required fields:

    - **Applications**:

      - Applications: Add `inventory-service` application
      - Branch: Select `feature/tt-000` branch

      ![Applications step](../assets/use-cases/deploy-application-from-feature-branch/create-deployment-applications.png "Applications step")

    - **Pipeline configuration**:

      - Pipeline name: `fl`
      - Description: `Deploy the "inventory-service" application for the "Firstname Lastname" user`
      - Deployment type: Select `Container`
      - Promote applications: Leave unchecked

      ![Pipeline configuration step](../assets/use-cases/deploy-application-from-feature-branch/create-deployment-pipeline-configuration.png "Pipeline configuration step")

    - **Review**:

      Verify the Deployment configuration and click **Create deployment**:

      ![Review step](../assets/use-cases/deploy-application-from-feature-branch/create-deployment-review.png "Review step")

3. In the congratulations window, click **Open deployment**:

    ![Deployment created](../assets/use-cases/deploy-application-from-feature-branch/deployment-created.png "Deployment created")

#### Create Environment

The next step is to create an Environment:

1. On the Deployment details page, click the **Create Environment** button:

    ![Create environment](../assets/use-cases/deploy-application-from-feature-branch/add-environment.png "Create environment")

2. Fill in the required fields:

    - **Basic configuration**:

      - Cluster: `in-cluster`
      - Environment name: `dev`
      - Deploy namespace: `krci-fl-dev`
      - Description: `Personal environment for Firstname Lastname user`

      ![Basic configuration step](../assets/use-cases/deploy-application-from-feature-branch/create-environment-basic-configuration.png "Basic configuration step")

    - **Pipeline configuration**:

      - Trigger type: `Manual`
      - Deploy Pipeline template: `deploy`
      - Clean Pipeline template: `clean`

      ![Pipeline configuration step](../assets/use-cases/deploy-application-from-feature-branch/create-environment-pipeline-configuration.png "Pipeline configuration step")

    - **Quality Gates**:

      Leave everything as is:

      ![Quality gates step](../assets/use-cases/deploy-application-from-feature-branch/create-environment-quality-gates.png "Quality gates step")

    - **Review**:

      Review the specified values and click the **Create environment** button:

      ![Review step](../assets/use-cases/deploy-application-from-feature-branch/create-environment-review.png "Review step")

3. In the congratulations window, click **Go to environment**.

The feature Environment is now ready for deployment.

#### Deploy Application

To deploy an application, follow the steps below:

1. Click **Configure deploy**, select the image tag to be deployed, and proceed with the **Start deploy** button:

  ![Application deployment](../assets/use-cases/deploy-application-from-feature-branch/deploy-application.png "Application deployment")

2. Verify the deployment status in the **Pipelines** section:

  ![Check deploy pipeline run](../assets/use-cases/deploy-application-from-feature-branch/check-deploy-pipeline.png "Check deploy pipeline run")

3. Click the pipeline run name to view its details:

  ![View deploy pipeline details](../assets/use-cases/deploy-application-from-feature-branch/deploy-pipeline-details.png "View deploy pipeline details")

4. Open the application in Argo CD using the **Argo CD** button:

  ![Check deploy pipeline run](../assets/use-cases/deploy-application-from-feature-branch/open-in-argo-cd.png "Check deploy pipeline run")

5. View enhanced insights and log analysis:

  ![Argo CD application state](../assets/use-cases/deploy-application-from-feature-branch/argo-cd-state.png "Argo CD application state")

### Deploy With Custom Parameters

The platform utilizes a Helm chart found in the **deploy-templates** folder of each Project repository. To deploy a feature branch with custom variables, select the **Values override** option on the Environment page. The **Values override** option allows you to override default parameters in the **deploy-templates** folder of the Helm chart.

:::note
Before enabling this option, you must provide custom parameters for the application. To do this, please add the required values to the `values.yaml` file in the GitOps repository, ensuring you follow the expected structure.
:::

For the `inventory-service` application, no Helm chart variables are defined yet. So, we will modify the Helm chart to add a parameter. If your Helm chart already has variables to override, you can proceed to step 4.

1. In KubeRocketCI, navigate back to the application and open the branch source code:

  ![Open application source code](../assets/use-cases/deploy-application-from-feature-branch/application-source-code.png "Open application source code")

2. Clone the application repository to the local machine. Check out the feature branch and paste the contents below to the `deploy-templates/templates/deployment.yaml` and `deploy-templates/values.yaml` files:

```yaml title="values.yaml"

extraEnv: {}

```

```yaml title="deploy-templates/deployment.yaml"
...
          ports:
            - name: http
              containerPort: {{ .Values.service.port }}
              protocol: TCP
          {{- if .Values.extraEnv }}
          env:
          {{- toYaml .Values.extraEnv | nindent 12 }}
          {{- end }}
          livenessProbe:
            {{- toYaml .Values.livenessProbe | nindent 12 }}
          readinessProbe:
            {{- toYaml .Values.readinessProbe | nindent 12 }}

...
```

The resulting difference should look this way:

  ![Open application source code](../assets/use-cases/deploy-application-from-feature-branch/application-diff.png "Open application source code")

3. Commit your changes, push your branch to the remote repository, and build the application (feature branch) once again. 

4. Open the GitOps repository using the **Go to the source code** button:

  ![Go to the source code button](../assets/use-cases/deploy-application-from-feature-branch/go-to-the-source-code.png "Go to the source code button")

5. Clone the GitOps repository to the local machine. Check out another branch and create a file by the `<deployment-name>/<environment-name>/<application-name>-values.yaml` pattern (in our case, `fl/dev/inventory-service-values.yaml`).

6. Open the `<deployment-name>/<environment-name>/<application-name>-values.yaml` file and paste the contents below:

```yaml title="values.yaml"

extraEnv:
  - name: NAME
    value: "Hello from KubeRocketCI"

```

7. Commit your changes, push your branch to the remote repository and create a pull request:

  ![Pull request details](../assets/use-cases/deploy-application-from-feature-branch/gitops-difference.png "Pull request details")

8. Merge the pull request.

9. On the Environment page, click the **Configure deploy** button. When deploying an application, enable the **Values override** option in the Environment settings:

  ![Enable values override option](../assets/use-cases/deploy-application-from-feature-branch/enable-values-override.png "Enable values override option")

  When the **Values override** option is enabled, the platform navigates to the GitOps repository to pull the parameters from the `<application-name>-values.yaml` file and then overrides them in an Argo CD application accordingly.

10. If the application is deployed in the "in-cluster", open the pod terminal using a dedicated button on the Environment details page:

  ![Show logs button](../assets/use-cases/deploy-application-from-feature-branch/show-terminal-button.png "Show logs button")

11. Run the following command to verify that the variable has been applied to the pod:

```bash
env | grep NAME
```

  ![Show logs button](../assets/use-cases/deploy-application-from-feature-branch/application-terminal-krci.png "Show logs button")

12. (Optional) If you deploy the application in the [remote cluster](../user-guide/add-cluster.md), you can open the deployed application in Argo CD and select the pod block:

  ![Enable values override option](../assets/use-cases/deploy-application-from-feature-branch/application-pod.png "Enable values override option")

13. (Optional) In the **Terminal** tab, run the following command to verify that the variable has been applied to the pod:

```bash
env | grep NAME
```

  ![Application terminal (Argo CD)](../assets/use-cases/deploy-application-from-feature-branch/application-terminal-argo-cd.png "Application terminal (Argo CD)")

### Cleanup

After merging the feature branch, please delete the branch and Environment.

#### Delete Feature Environment

1. In the KubeRocketCI portal, return to the Environment.

2. Select the application from the **Applications** tab and click the **Delete** button to remove the application from the Environment:

  ![Delete application from environment](../assets/use-cases/deploy-application-from-feature-branch/delete-application.png "Delete application from environment")

3. Navigate to the **Deployments** section. Click the actions button and select **Delete**:

  ![Delete deployment](../assets/use-cases/deploy-application-from-feature-branch/delete-deployment.png "Delete deployment")

#### Delete Feature Branch

The last step is to delete a feature branch for the application:

1. Navigate to the **Projects** section.

2. Open the Project that contains the feature branch.

3. Delete the branch from the **Branches** tab:

  ![Delete branch in KubeRocketCI](../assets/use-cases/deploy-application-from-feature-branch/delete-feature-branch-portal.png "Delete branch in KubeRocketCI")

4. Delete the feature branch from GitHub:

  ![Delete branch in GitHub](../assets/use-cases/deploy-application-from-feature-branch/delete-feature-branch-github.png "Delete branch in GitHub")

## Related Articles

- [Use Cases](./index.md)
- [Add Application](../user-guide/add-application.md)
- [Add Deployment](../user-guide/add-cd-pipeline.md)
- [Manage Deployments](../user-guide/manage-environments.md)
- [Manage GitOps](../user-guide/gitops.md)
