---

title: "Scaffold and Deploy FastAPI Application"
description: "Learn how to scaffold and deploy a FastAPI application using KubeRocketCI, from setting up your development environment to deploying with GitOps."
sidebar_label: "Scaffold and Deploy FastAPI Application"

---
<!-- markdownlint-disable MD025 -->

# Scaffold and Deploy FastAPI Application

<head>
  <link rel="canonical" href="https://docs.kuberocketci.io/docs/use-cases/application-scaffolding" />
</head>

This use case outlines the process of creating and deploying a FastAPI application using KubeRocketCI.
The purpose is to provide developers with a streamlined approach to generate a functional code structure for a FastAPI web application, including basic read functionality. The process also allows for customization to meet specific requirements and deployment to a development environment. By utilizing a standardized process for code review, testing, and deployment, developers can save time and effort while ensuring high code quality and reliability.
The goal is to empower the development team to release new features and applications more efficiently, while maintaining a high level of code quality and reliability.
The KubeRocketCI is used to facilitate this process.

<div style={{ display: 'flex', justifyContent: 'center' }}>
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/TcPcIKYvKFo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
</div>

### Roles

This documentation is tailored for the Developers and Team Leads.

### Goals

- Create a new FastAPI application quickly.
- Deploy the initial code to the DEV environment.
- Check CI pipelines.
- Delivery update using the GitOps approach.

### Preconditions

- KubeRocketCI instance is [configured](../operator-guide/prerequisites.md) with [GitOps](../user-guide/gitops.md) repo.
- Developer has access to the KubeRocketCI instances using the Single-Sign-On approach.
- Developer has merge permissions in the [GitOps](../user-guide/gitops.md) repository on GitHub.

## Scenario

To scaffold and deploy FastAPI Application, follow the steps below.

### Scaffold the New FastAPI Application

1. Log in to the KubeRocketCI portal:

    ![Logging Page](../assets/use-cases/general/login-1.png "Logging screen")

2. On the main menu, click the **Manage Namespaces** button:

    ![Manage Namespaces](../assets/use-cases/general/settings-1.png "Manage Namespaces button")

3. Ensure the `Namespace` value points to the namespace with the KubeRocketCI installation:

    ![Default and allowed namespaces](../assets/use-cases/fastapi-scaffolding/default-allowed-namespace.png "Default and allowed namespaces")

    :::note
    Don't forget to press Enter to add the namespace to the allowed namespaces list.
    :::

4. Create a new Project with the `Application` type using the `Create` strategy. Select the **Projects** section and click **+ Create project**:

    ![Components Overview](../assets/use-cases/general/components-1.png "Components tab")

5. Select the **Custom configuration** option, choose the `Application` Codebase type as we intend to deliver our application as a container and deploy it within the Kubernetes cluster. Select the **Create** strategy to scaffold our application from the template provided by the KubeRocketCI and click **Continue**:

    ![Initial setup](../assets/use-cases/general/component-type-1.png "Initial setup")

6. On the **Git & project info** tab, define the following values and click **Continue**:

    - Git server: `github`
    - Owner: `github_account_name`
    - Repository name: `fastapi-demo`
    - Default branch: `main`
    - Project name: `fastapi-demo`
    - Description: `FastAPI application for demo purposes`

    ![Application info](../assets/use-cases/fastapi-scaffolding/create-application.png "Application info")

7. On the **Build config** tab, define the values and click **Continue**:

    - Code language: `Python`
    - Language version/framework: `FastAPI`
    - Build tool: `Python`
    - Deployment options: `helm-chart`
    - Codebase versioning type: `semver`
    - Start version from: `0.1.0` 
    - Suffix: `SNAPSHOT`

    ![Build config](../assets/use-cases/fastapi-scaffolding/create-application-advance.png "Build config")

8. On the **Review** tab, verify the project configuration and click **Create project**:

    ![Review and create](../assets/use-cases/fastapi-scaffolding/review-and-create.png "Review and create")

9. On the congratulations menu, click **Open project**:

    ![Components overview page](../assets/use-cases/fastapi-scaffolding/ready-component.png "Application status")

### Deploy Application to the Development Environment

This section outlines the approach for deploying the application from the latest commit on the `main` branch. The following steps are involved:

1. Build the initial version of the application from the last commit on the `main` branch. This version is generated from the provided template.

2. Set up a deployment flow to enable continuous delivery to the development environment.

3. Deploy the initial version of the application to the development environment.

To succeed with the steps above, follow the instructions below:

1. Build Container from the latest branch commit. To build the initial version of the application's `main` branch, go to the **Branches** -> **main** and click the **Build** button:

    ![Build Main Branch](../assets/use-cases/fastapi-scaffolding/build-application.png "Application building")

2. Build pipeline for the `fastapi-demo` application starts. Track Pipeline's status by clicking the **build-fastapi-demo-main-xxxx** pipeline link or **Go to page**:

    ![Branch Build Pipeline](../assets/use-cases/fastapi-scaffolding/build-in-process.png "Pipeline building")

3. Observe the build pipeline details:

    ![Pipeline details](../assets/use-cases/fastapi-scaffolding/build-details.png "Pipeline details")

4. Ensure that build pipeline was successfully completed.

5. To enable application deployment, create a Deployment with a single environment - Development (with the name `dev`).

    :::note
    To utilize and manage various environments through the KubeRocketCI platform, the initial step is to onboard a new GitOps repository.
    :::

6. Navigate to the **Deployments** tab and click the corresponding button to create new GitOps repository:

    ![Deployment flow tab](../assets/use-cases/fastapi-scaffolding/add-gitops-repo.png "Deployment flow tab")

7. Click to the **+ Add GitOps repository**:

    ![Onboard gitops repository](../assets/use-cases/fastapi-scaffolding/add-gitops-button.png "Onboard GitOps repository")

8. Select the `Create` strategy and `github` server, enter GitHub account name and click **Save**:

    ![Configure gitops repository](../assets/use-cases/fastapi-scaffolding/create-gitops.png "Configure gitops repository")

9. In the KubeRocketCI portal, navigate to **Deployments** tab and click the **+ Create deployment** button:

    ![Create deployment](../assets/use-cases/general/create-cd-pipeline-1.png "Create deployment")

10. In the **Create new deployment** dialog, fill in the required fields:

    - **Applications**:

      - Applications: Add `fastapi-demo` application
      - Branch: Select `main` branch

      ![Applications step](../assets/use-cases/fastapi-scaffolding/create-deployment-applications.png "Applications step")

    - **Pipeline configuration**:

      - Pipeline name: `mypipe`
      - Description: `Deployment for FastAPI application`
      - Deployment type: Select `Container`
      - Promote applications: Leave unchecked

      ![Pipeline configuration step](../assets/use-cases/fastapi-scaffolding/create-deployment-pipeline-configuration.png "Pipeline configuration step")

    - **Review**:

      Verify the Deployment configuration and click **Create deployment**:

      ![Review step](../assets/use-cases/fastapi-scaffolding/create-deployment-review.png "Review step")


11. Now click the `Open deployment` button to continue creating the environment:

    ![Deployment created](../assets/use-cases/fastapi-scaffolding/deployment-created.png "Deployment created")

12. In the Deployment details page, click the **+ Create environment** button to create new environment and fill in the required fields:

    ![Create environment](../assets/use-cases/fastapi-scaffolding/add-environment.png "Create environment")

    - **Basic configuration**:

      - Cluster: `in-cluster`
      - Environment name: `dev`
      - Deploy namespace: `krci-mypipe-dev`
      - Description: `Development Environment`

      ![Basic configuration step](../assets/use-cases/fastapi-scaffolding/create-environment-basic-configuration.png "Basic configuration step")


      - Trigger type: `Manual`
      - Deploy Pipeline template: `deploy`
      - Clean Pipeline template: `clean`

      ![Pipeline configuration step](../assets/use-cases/fastapi-scaffolding/create-environment-pipeline-configuration.png "Pipeline configuration step")

    - **Quality Gates**:

      Leave everything as is:

      ![Quality gates step](../assets/use-cases/fastapi-scaffolding/create-environment-quality-gates.png "Quality gates step")

    - **Review**:

      Review the specified values and click the **Create environment** button:

      ![Review step](../assets/use-cases/fastapi-scaffolding/create-environment-review.png "Review step")

13. As soon as the Environment is created, click **Open environment**:

    ![Open environment](../assets/use-cases/fastapi-scaffolding/open-environment.png "Open environment")

14. Deploy the initial version of the application to the development environment:

    - Select **Applications** tab.
    - Click the **Configure deploy** button.
    - In the **Select image tag** field select version `0.1.0-SNAPSHOT.1` and click the **Start deploy** button.

    ![CD Pipeline Deploy initial version](../assets/use-cases/fastapi-scaffolding/start-deploy.png "CD Pipeline deploy")

15. Navigate to the **Pipelines** tab and click the pipeline name to view its details:

    ![Deploy pipeline (clickable)](../assets/use-cases/fastapi-scaffolding/deploy-pipeline-clickable.png "Deploy pipeline (clickable)")

16. View the Pipeline details until it finishes:

    ![Deploy pipeline details](../assets/use-cases/fastapi-scaffolding/deploy-pipeline-details.png "Deploy pipeline details")

### Check the Application Status

To ensure the application is deployed successfully, follow the steps below:

1. Ensure application status is `Healthy` and `Synced`, and the `Deployed version` points to `0.1.0-SNAPSHOT.1`:

    ![Deployment health status](../assets/use-cases/fastapi-scaffolding/deploy-is-healthy.png "Deployment health status")

2. Check that the selected version of the container is deployed on the `dev` environment. `${KRCI_ENV}` - is the KRCI namespace name:

    ```bash
    # Check the deployment status of fastapi-demo application
    $ kubectl get deployments -n ${KRCI_ENV}-mypipe-dev
    NAME           READY   UP-TO-DATE   AVAILABLE   AGE
    fastapi-demo   1/1     1            1           14m
    ```

### Deliver New Code

This section describes the code delivery process. We need to deploy our `fastapi-demo` application that deploys `Ingress` object to expose API outside the Kubernetes cluster.

Within the [GitOps](../user-guide/gitops.md) repository, follow the naming convention `<deployment-flow>/<environment>/<application-name>-values.yaml` to create the chart values file. For our case, use `mypipe/dev/fastapi-demo-values.yaml` as the file name. To deploy application with custom application Helm chart values, follow he steps below:

1. Commit `mypipe/dev/fastapi-demo-values.yaml` file to the default branch of the GitOps repository:

  ```yaml title="mypipe/dev/fastapi-demo-values.yaml"
  ingress:
    enabled: true
  ```

2. Deploy the `fastapi-demo` application to the environment. Before the new version deployment, check the ingress object in `dev` environment:

    ```bash
    $ kubectl get ingress -n ${KRCI_ENV}-mypipe-dev
    No resources found in ${KRCI_ENV}-mypipe-dev namespace.
    ```

    No ingress object exists as expected.

3. Deploy the `fastapi-demo` application which has the ingress object in place. Since we use `Manual` deployment approach, we perform version upgrade manually:

    To ensure our application recognizes the changes in the GitOps repository related to enabling the creation of the `Ingress` resource, we need to set the **Override values** checkbox to `true` before deploying.

    - Go to the **Deployments** section of the KubeRocketCI portal, select `mypipe` and choose the **dev** Environment.
    - In the **Select image tag** section select the version `0.1.0-SNAPSHOT.1`.
    - Set the **Values override** checkbox to `true` and click the **Start deploy** button.
    - Check that the application is deployed and application status is `Healthy` and `Synced`.

    ![Values override](../assets/use-cases/fastapi-scaffolding/deploy-with-override.png "Values override")

4. Check that the new version with Ingress is deployed:

    ```bash
    # Check Ingress object
    kubectl get ingress -n ${KRCI_ENV}-mypipe-dev
    NAME           CLASS    HOSTS                                     ADDRESS          PORTS   AGE
    fastapi-demo   <none>   fastapi-demo-ko1zs-example.com         10.100.182.134        80    14m

    # Check application external URL
    curl https://your-hostname-appeared-in-hosts-column-above.example.com
    {"Hello":"World"}
    ```

## Related Articles

- [Use Cases](./index.md)
- [Autotest as a Quality Gate](./autotest-as-quality-gate.md)
- [Create and Use Custom Tekton Pipelines](./custom-pipelines-flow.md)
