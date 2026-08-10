---

title: "Test Environment Using Environment Variables"
description: "Discover how KubeRocketCI leverages environment variables in CD pipelines to flexibly configure test suites, ensuring streamlined workflows and precise quality control."
sidebar_label: "Set Test Suite Parameters Using Environment Variables in CD Pipelines"

---

<!-- markdownlint-disable MD025 -->

# Set Test Suite Parameters Using Environment Variables in CD Pipelines

<head>
  <link rel="canonical" href="https://docs.kuberocketci.io/docs/use-cases/cd-autotests-run-with-env-variables" />
</head>

This use case demonstrates how KubeRocketCI uses environment variables to flexibly configure commands in deployment pipelines.
Teams can dynamically adjust parameters by adding, modifying, or removing them without changing the test suite code. This provides precise control over quality gates, streamlines workflows, and allows pipelines to adapt to different environments or requirements while maintaining efficiency and quality standards.

## Goals

- Flexible and convenient preparation and validation of the testing environment using environment variables.
- The ability to manage environment variables by overriding, adding, or removing their values and keys to configure test parameters.
- A streamlined setup process that allows teams to focus on development without platform constraints.

## Preconditions

- KubeRocketCI instance with GitHub is [configured](../operator-guide/prerequisites.md).
- Developer has access to the KubeRocketCI instance using the Single-Sign-On approach.
- Developer has `Write` permissions for GitHub repository to merge the code.

## Scenario

To implement specific logic in deployment quality gate within the KubeRocketCI platform, follow these steps:

- **Fork the Tekton Chart**: Fork, clone and deploy the prepared Tekton chart that implements the required Tekton resources using environment variables.
- **Add the Application**: Add a simple application from the platform marketplace and build the application to prepare it for deployment.
- **Add the Autotests**: Set up the autotests with the clone strategy to include them in the Deployment.
- **Create Deployment, Environment, and Set Variables**: Create a Deployment, Set up an environment for the deployment, add Autotests as a quality gate to the deployment, and define the variable.
- **Validate**: Review the pipeline logs to ensure autotests execute correctly and produce the expected output.

### Fork the Tekton Chart

The first step is to clone and install the Tekton chart:

1. In GitHub, create a private repository.

2. Clone your private repository to your local machine:

  ![Clone repo](../assets/use-cases/cd-autotests-run-with-env-variables/clone-repo.png "Clone repo")

    ```bash
    git clone git@github.com:<github_account_name>/variables-case-tekton.git
    ```

3. Copy the [chart repository](https://github.com/KubeRocketCI/variables-case-tekton) content to your newly created repository. The repository structure should be as follows:

    <details>
    <summary>Repository structure</summary>
    ```bash
      variables-case-tekton
        .
        ├── Chart.lock
        ├── Chart.yaml
        ├── README.md
        ├── chart_schema.yaml
        ├── ct.yaml
        ├── lintconf.yaml
        ├── templates
        │   ├── pipelines
        │   │   └── cd
        │   │       ├── autotest-variables.yaml
        │   │       └── deploy-with-autotests-variables.yaml
        │   ├── tasks
        │   │   └── cd
        │   │       ├── init-autotests-variables.yaml
        │   │       └── run-autotests-variables-java.yaml
        │   └── triggers
        │       └── cd
        │           └── deploy-with-autotests-variables.yaml
        └── values.yaml
    ```
    </details>

4. Update the component configuration in the `values.yaml` file:

    ```yaml
    # Replace `example.domain.com` with the appropriate wildcard domain for your setup.
     dnsWildCard: "example.domain.com"
    ```

5. Install the chart:

    ```bash
    cd variables-case-tekton
    helm upgrade --install custom-tekton-chart . -n krci
    ```

### Add Application

As soon as the Helm chart is installed, the new deploy pipeline will appear in the Environment configuration window. The next step is to create an application from a template:

1. Create a new Project with the `Application` type using the `Create` strategy. Select the **Projects** section and click **+ Create project**:

    ![Projects tab](../assets/use-cases/general/components-1.png "Projects tab")

2. Select the **Select ready template** option, **Simple Spring Boot Application** and click **Continue**:

    ![Initial setup](../assets/use-cases/cd-autotests-run-with-env-variables/predefined-template.png "Initial setup")

3. On the **Git & project info** tab, define the following values and click **Continue**:

   * Git server: `github`
   * Owner: `GitHub_username`
   * Repository name: `spring-boot-app`
   * Default branch: `main`
   * Project name: `spring-boot-app`
   * Description: `Simple spring boot application`

  ![Application creation](../assets/use-cases/cd-autotests-run-with-env-variables/codebase-app.png "Application creation")

4. On the **Build config** tab, define the values and click **Continue**:

   * Codebase versioning type: `semver`
   * Start version from: `0.1.0`
   * Suffix: `SNAPSHOT`

  ![Application creation](../assets/use-cases/cd-autotests-run-with-env-variables/git-project-info.png "Application creation")

5. On the **Review** tab, verify the project configuration and click **Create project**:

    ![Review and create](../assets/use-cases/cd-autotests-run-with-env-variables/review-and-create.png "Review and create")

6. On the congratulations menu, click **Open project**:

    ![Ready project](../assets/use-cases/cd-autotests-run-with-env-variables/ready-component.png "Ready project")

7. Select the **Branches** tab and click the **Build** button:

  ![Trigger build](../assets/use-cases/cd-autotests-run-with-env-variables/trigger-build.png "Trigger build")

8. Click the PipelineRun name to view its details:

  ![Click PipelineRun name](../assets/use-cases/cd-autotests-run-with-env-variables/click-pipeline-name.png "Click PipelineRun name")

9. Wait until the build is successful and its status is **Completed**:

  ![PipelineRun completed](../assets/use-cases/cd-autotests-run-with-env-variables/pipeline-completed.png "PipelineRun completed")

### Add Autotests

Now you need to create template autotests that will be executed when deploying the application:

1. To add an autotest, navigate to the **Projects** section on the navigation bar and click **+ Create project**.

2. On the **Create new project** dialog, select **Custom configuration** -> **Autotest** -> **Clone** and click **Continue**:

  ![Autotests project](../assets/use-cases/cd-autotests-run-with-env-variables/codebase-autotest.png "Autotests project")

3. On the **Git & project info** tab, define the following values and click **Continue**:

  * RepoUrl: `https://github.com/KubeRocketCI/demo-autotests-gradle`
  * Git server: `github`
  * Owner: `GitHub_username`
  * Repository name: `autotests`
  * Default branch: `master`
  * Project name: `autotests`
  * Description: `Simple autotests gradle`

  ![Autotests codebase](../assets/use-cases/cd-autotests-run-with-env-variables/autotests-project-info.png "Autotests codebase")

4. On the **Build config** tab, define the values and click **Continue**:

  * Autotest code language: `Java`
  * Language version/framework: `Java17`
  * Build tool: `Gradle`
  * Autotest report framework: `allure`
  * Codebase versioning type: `semver`
  * Start version from: `0.1.0`
  * Suffix: `SNAPSHOT`

  ![Autotests codebase](../assets/use-cases/cd-autotests-run-with-env-variables/autotests-build-config.png "Autotests codebase")

5. On the **Review** tab, verify the project configuration and click **Create project**:

  ![Autotests codebase advanced settings](../assets/use-cases/cd-autotests-run-with-env-variables/autotest-review.png "Autotests codebase advanced settings")

6. On the congratulations menu, click **View all projects**.

7. Click **Close**. Now the application and autotest are created:

  ![Projects overview](../assets/use-cases/cd-autotests-run-with-env-variables/projects-overview.png "Projects overview")

### Create Deployment, Environment, and Set Variables

The next step is to configure a Deployment with appropriate deploy pipeline, application, autotests, and variables:

  :::note
  To utilize and manage various environments through the KubeRocketCI platform, the initial step is to onboard a new [GitOps repository](../user-guide/gitops.md).
  :::

1. Navigate to the `Deployments` section and click the **Click here to add a repository** button:

    ![Deployments tab](../assets/use-cases/fastapi-scaffolding/add-gitops-repo.png "Deployments tab")

2. Click to the **+ Add GitOps repository**:

    ![Onboard gitops repository](../assets/use-cases/fastapi-scaffolding/add-gitops-button.png "Onboard GitOps repository")

3. Select the `Create` strategy and `github` server, enter GitHub account name and click **Save**:

    ![Configure gitops repository](../assets/use-cases/fastapi-scaffolding/create-gitops.png "Configure gitops repository")

4. In the KubeRocketCI portal, navigate to **Deployments** tab and click the **+ Create deployment** button:

    ![Create deployment](../assets/use-cases/general/create-cd-pipeline-1.png "Create deployment")

5. On the **Applications** tab, add the `spring-boot-app` application, specify the **main** branch for it, and click **Continue**:

    ![Applications tab](../assets/use-cases/cd-autotests-run-with-env-variables/deployment-add-application.png "Applications tab")

6. On the **Pipeline configuration** tab, fill in the required fields and click **Continue**:

    * Pipeline name: `demo-pipeline`
    * Description: `Deployment with specific variables`
    * Deployment type: `Container`

    ![Pipeline configuration tab](../assets/use-cases/cd-autotests-run-with-env-variables/deployment-pipeline-configuration.png "Pipeline configuration tab")

7. On the **Review** tab, verify the configuration and click **Create deployment**:

    ![Review deployment](../assets/use-cases/cd-autotests-run-with-env-variables/review-deployment.png "Review deployment")

8. On the congratulations page, select **Open deployment**:

    ![Deployment created](../assets/use-cases/cd-autotests-run-with-env-variables/deployment-created.png "Deployment created")

9. On the Deployment details page, click the **+ Create Environment** button:

    ![Create Environment](../assets/use-cases/cd-autotests-run-with-env-variables/create-environment.png "Create Environment")

10. On the **Basic configuration** tab, define the following values and click **Continue**:

    * Cluster: `in-cluster`
    * Environment name: `qa`
    * Description: `Testing environment`

    ![Basic configuration tab](../assets/use-cases/cd-autotests-run-with-env-variables/environment-basic-configuration.png "Basic configuration tab")

11. On the **Pipeline configuration** tab, define the following values and click **Continue**:

    * Trigger type: `Manual`
    * Pipeline template: `deploy-with-autotests-variables`
    * Clean pipeline template: `clean`

    ![Pipeline configuration](../assets/use-cases/cd-autotests-run-with-env-variables/environment-pipeline-configuration.png "Pipeline configuration")

12. On the **Quality gates** tab, click the pencil icon to edit the first quality gate. Specify the following parameters and click **Update quality gate** and then **Continue**:

    * Quality gate type: `Autotest`
    * Autotest: `autotests`
    * Step name: `Autotest`
    * Autotest branch: `master`

    ![Add quality gates](../assets/use-cases/cd-autotests-run-with-env-variables/add-quality-gates.png "Add quality gates")

13. On the **Review** tab, verify the Environment configuration and click **Create environment**:

    ![Environment details](../assets/use-cases/cd-autotests-run-with-env-variables/environment-review.png "Environment details")

14. Click the **Open environment** button:

    ![Open Environment](../assets/use-cases/cd-autotests-run-with-env-variables/open-environment.png "Open Environment")

15. Select the **Variables** tab and click the **Add variable** button:

    ![Add variables](../assets/use-cases/cd-autotests-run-with-env-variables/add-variables.png "Add variables")

16. Enter `MY_COMMAND`, and set the **Value** to `gradle -q hello`. Then, click the **Save** button:

    ![Set variable](../assets/use-cases/cd-autotests-run-with-env-variables/set-variable.png "Set variable")

    In the Tekton task run-autotests-gradle-variables, we have implemented logic to check for the MY_COMMAND variable. If it exists, the task uses the value of this variable as the command. If it is missing or empty, the task falls back to using the logic defined in the run.json file from the autotests repository.

  <details>
  <summary>run-autotests-gradle-variables.yaml</summary>

  ```yaml
  apiVersion: tekton.dev/v1
  kind: Task
  metadata:
    name: run-autotests-gradle-variables
    labels:
      app.kubernetes.io/based-on: "0.2"
      {{- include "edp-tekton.labels" $ | nindent 4 }}
    annotations:
      tekton.dev/pipelines.minVersion: "0.12.1"
      tekton.dev/categories: Autotest Tools
      tekton.dev/tags: autotest-tool
      tekton.dev/platforms: "linux/amd64,linux/s390x,linux/ppc64le"
  spec:
    description: >-
      This task runs autotests for a specified Environment using either Maven or Gradle based on the provided configuration, extracting and executing the relevant commands from a `run.json` file.
    workspaces:
      - name: source
        description: A workspace that contains the repository.
    params:
      - name: DEPLOYMENT_FLOW
        type: string
      - name: ENVIRONMENT
        type: string
      - name: base-image
        type: string
    steps:
      - name: run-autotest
        image: "$(params.base-image)"
        workingDir: $(workspaces.source.path)
        env:
          - name: ENVIRONMENT
            value: $(params.ENVIRONMENT)
          - name: DEPLOYMENT_FLOW
            value: $(params.DEPLOYMENT_FLOW)
        envFrom:
          - configMapRef:
              name: $(params.DEPLOYMENT_FLOW)-$(params.ENVIRONMENT)
        script: |
          #!/bin/bash

          set -exo pipefail

          # Check if the MY_COMMAND variable is set and not empty
          if [[ -n "${MY_COMMAND}" ]]; then
              # If MY_COMMAND is defined, execute its content
              eval "${MY_COMMAND}"
          else
              # If MY_COMMAND is not set, execute the existing logic
              $(sed -n 's/.*"'$ENVIRONMENT'": "\(.*\)",/\1/p' run.json | awk -F '"' '{print $1}')
          fi
  ```
  </details>

17. Navigate to the **Applications** tab. Then click **Configure deploy** -> **Latest** -> **Start deploy**:

    ![Deploy application](../assets/use-cases/cd-autotests-run-with-env-variables/start-deploy-application.png "Deploy application")

### Validate

Now it is time to review the pipeline logs to ensure autotests pass successfully and application produces the expected output:

1. To find autotests logs, navigate to **CI/CD Pipelines** -> **PipelineRuns** and wait until all pipelines are done:

    ![Pipelines list](../assets/use-cases/cd-autotests-run-with-env-variables/pipelines-list.png "Pipelines list")

2. Click on the **autotests-variables-gradle-run-xxxxx** PipelineRun, select the **run autotests** stage and the **run autotests** task in the logs page. You will see your autotests output:

    ![Autotests logs](../assets/use-cases/cd-autotests-run-with-env-variables/autotest-logs.png "Autotests logs")

## Related Articles

- [Add Application](../user-guide/add-application.md)
- [Add Autotest](../user-guide/add-autotest.md)
- [Add Deployment](../user-guide/add-cd-pipeline.md)
- [Add Quality Gate](../user-guide/add-quality-gate.md)
- [Customize Deploy Pipeline](../operator-guide/cd/customize-deploy-pipeline.md)
- [Manage Deployments](../user-guide/manage-environments.md)
