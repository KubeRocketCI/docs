import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Platform Cleanup

During the lifecycle of your projects, various resources are created within the KubeRocketCI platform. There may come a time when you need to clean up resources that are no longer necessary. This might be due to reasons like moving applications out of KubeRocketCI management or complying with regulations requiring migration to a suitable environment. Additionally, if you plan to re-add a component with the same name, cleaning up associated artifacts is essential to ensure the platform operates correctly.

This page provides comprehensive guidelines for the complete deletion of resources in KubeRocketCI, from applications to third-party resources.

## Prerequisites

To follow the guidelines below, ensure you have:

* Admin access to KubeRocketCI portal
* Admin access to third-party tools (Nexus, SonarQube, Container registry, Git)

## Platform Resource Cleanup

This section covers platform resource deletion, such as applications, deployment flows, and pipeline runs.

### Delete Deployment Flow

There are two strategies of deleting a deployment flow:

* **Standard delete functionality in the KubeRocketCI portal**: This approach involves using the **Delete** button to remove a deployment flow. It’s suitable for deployment flows that don’t rely on specific environment setups to deploy.
* **Using a clean pipeline**: this strategy implies creating a [custom clean pipeline](../operator-guide/cd/customize-environment-deletion.md) to handle the deletion of third-party dependencies, such as cloud resources and databases, that share the same lifecycle as your deployment flow. We recommend this strategy for applications with complex third-party interactions.

To delete a [deployment flow](./manage-environments.md) using a standard method, follow the steps below:

1. Navigate to **KubeRocketCI portal** -> **Deployment Flows**:

  ![Deployment flows list](../assets/user-guide/deployment-flows.png "Deployment flows list")

2. Choose a deployment flow to delete. Click the actions button and select **Delete**:

  ![Delete deployment flow](../assets/user-guide/delete-deployment-flow.png "Delete deployment flow")

3. Enter the deployment flow name and click **Delete**:

  ![Confirm deployment flow deletion](../assets/user-guide/confirm-deployment-flow-deletion.png "Confirm deployment flow deletion")

### Delete Applications

To delete an [application](./application.md), follow the steps below:

1. Navigate to **KubeRocketCI portal** -> **Components**:

  ![Components list](../assets/user-guide/components-list.png "Components list")

2. Choose an application to delete. Click the actions button and select **Delete**:

  ![Delete component](../assets/user-guide/delete-component.png "Delete component")

3. Enter the application name and click **Delete**:

  ![Confirm application deletion](../assets/user-guide/confirm-application-deletion.png "Confirm application deletion")

### Delete Pipeline Runs

The last platform resource remaining is [pipeline run](./pipelines.md). To delete pipeline runs, follow the steps below:

1. Navigate to **KubeRocketCI portal** -> **Pipelines**:

  ![Pipelines list](../assets/user-guide/pipelines-list.png "Pipelines list")

2. Choose pipeline runs and click **Delete**:

  ![Inspect application](../assets/user-guide/delete-pipeline-runs.png "Inspect application")

3. On the confirmation window, enter **confirm** and click **Delete**:

  ![Inspect application](../assets/user-guide/confirm-pipeline-runs-deletion.png "Inspect application")

## Third-Party Resource Cleanup

Different tools are involved in the codebase management process. So it is essential to clean them up as well.

### Version Control System

If you want to re-add a component with the same name, cleaning up artifacts is mandatory for the correct operation of the platform. [Codebase Operator](https://github.com/epam/edp-codebase-operator) provisions the repository in the Version Control System (VCS). Below are links to official documentation for deleting code repositories:

<Tabs
      defaultValue="github"
      values={[
        {label: 'GitHub', value: 'github'},
        {label: 'GitLab', value: 'gitlab'},
        {label: 'Bitbucket', value: 'bitbucket'},
        {label: 'Gerrit', value: 'gerrit'}
      ]}>

        <TabItem value="github">
          To delete a GitHub repository, read the [Deleting a repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/deleting-a-repository) page.
        </TabItem>

        <TabItem value="gitlab">
          To delete a GitLab repository, read the [Manage projects](https://docs.gitlab.com/ee/user/project/working_with_projects.html#delete-a-project) page.
        </TabItem>

        <TabItem value="bitbucket">
          To delete a Bitbucket repository, read the [Delete a repository](https://support.atlassian.com/bitbucket-cloud/docs/delete-a-repository/) page.
        </TabItem>

        <TabItem value="gerrit">
          To delete a Gerrit repository, refer to the [Project Deletion](https://gerrit-review.googlesource.com/Documentation/intro-project-owner.html#project-deletion) section.
        </TabItem>
    </Tabs>

### Deleting Nexus Artifacts

KubeRocketCI uses Nexus Repository Manager (by default) as an artifact registry for storing application binaries. If Nexus instance is installed using [add-ons](https://github.com/epam/edp-cluster-add-ons/tree/main), your unused images will be deleted in [30 days](https://github.com/epam/edp-cluster-add-ons/blob/main/clusters/core/addons/nexus-operator/templates/scripts/create-tasks.yaml#L132). Deleting a codebase without removing the corresponding SonarQube project may lead to issues in review pipelines. To clean up unnecessary container images, follow the steps below:

1. Navigate to Nexus main menu and select the **Browse** tab:

  ![Nexus main menu](../assets/user-guide/nexus-main-menu.png "Nexus main menu")

2. On the **Browse** tab, select the folder with the name that represents application type:

  For example, to delete a .NET application, navigate to **edp-dotnet-release** or **edp-dotnet-snapshot** folder. Understanding the difference between the release and snapshot folders is essential:

  * **release**: This type of repository stores applications that were built in release branches. These applications are usually tagged as release candidates (RC).
  * **snapshot**: This type of repository stores any other applications and their versions, which are usually tagged as snapshots.

  ![Browse Nexus repository snapshots](../assets/user-guide/browse-nexus-repository-snapshots.png "Browse Nexus repository snapshots")

3. In the Nexus repository, select the package folder and click **Delete folder**:

  ![Delete Nexus folder](../assets/user-guide/delete-nexus-folder.png "Delete Nexus folder")

4. (Optional) Repeat the steps 1-3 for all the package that need to clean up.

### Deleting Container Images

KubeRocketCI uses container images to deploy the applications to [deployment flows](../user-guide/add-cd-pipeline.md). To clean up a container registry, follow the corresponding guidelines:

<Tabs
      defaultValue="ecr"
      values={[
        {label: 'AWS ECR', value: 'ecr'},
        {label: 'DockerHub', value: 'docker'},
        {label: 'Harbor', value: 'harbor'},
        {label: 'Nexus', value: 'nexus'},
        {label: 'GitHub', value: 'github'}
      ]}>

        <TabItem value="ecr">
          To delete container images from the AWS Elastic Container Registry, read the [Deleting an image in Amazon ECR](https://docs.aws.amazon.com/AmazonECR/latest/userguide/delete_image.html#:~:text=To%20delete%20an%20image%20(AWS%20Management%20Console)&text=In%20the%20navigation%20pane%2C%20choose,to%20delete%20and%20choose%20Delete.) page.
        </TabItem>

        <TabItem value="docker">
          To delete container images from DockerHub, read the [Delete a repository](https://docs.docker.com/docker-hub/repos/delete/) page.
        </TabItem>

        <TabItem value="harbor">
          To delete container images from Harbor, read the [Deleting Artifacts](https://goharbor.io/docs/2.3.0/working-with-projects/working-with-images/deleting-artifact/) page.
        </TabItem>

        <TabItem value="nexus">
          1. Navigate to Nexus main menu and select the **Browse** tab:

            ![Nexus main menu](../assets/user-guide/nexus-main-menu.png "Nexus main menu")

          2. On the **Browse** tab, select the repository with the **edp-container-hosted** name:

            ![edp-container-hosted repository](../assets/user-guide/nexus-edp-container-hosted.png "edp-container-hosted repository")

          3. On the repository details page, select the folder name and click **Delete folder**:

            ![edp-container-hosted repository](../assets/user-guide/nexus-delete-container-image.png "edp-container-hosted repository")
        </TabItem>

        <TabItem value="github">
          To delete container images from GitHub Container Registry, read the [Working with the Container registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry) page.
        </TabItem>
    </Tabs>

### Deleting SonarQube Projects

KubeRocketCI generates a SonarQube project for every new codebase. To clean up application projects, follow the guidelines described in the [official documentation](https://docs.sonarsource.com/sonarqube-server/8.9/project-administration/project-settings/#deleting-a-project).

## Related Articles

* [Add Application](./application.md)
* [Manage Applications](./add-application.md)
* [Manage Deployment Flows](./manage-environments.md)
