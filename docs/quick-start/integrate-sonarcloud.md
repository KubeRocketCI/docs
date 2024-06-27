# Integrate SonarQube

It is essential for KubeRocketCI to have SonarQube integrated with the platform as all the pipelines include the `sonar` step.

SonarQube is a powerful tool used in build and code review pipelines to enhance code quality by identifying and reporting issues, as well as providing recommendations for improvement. SonarCloud, the SaaS solution offered by SonarQube, serves this purpose.

This guide will walk you through the configuration process of SonarCloud for your project.

:::note
  An alternative option is to use an independent [SonarQube instance](../operator-guide/code-quality/sonarqube.md).
:::

## Integrate SonarCloud

To integrate SonarCloud with the platform, follow the steps below:

1. Sign up in the [SonarCloud](https://sonarcloud.io) with your GitHub account.

2. Once you are logged in with GitHub, import an organization from GitHub:

    ![Import organization](../assets/quick-start/import_from_github.png "Import organization")

    :::note
      It is crucial to have the organization created in SonarCloud. If you were signed up in SonarCloud using a GitHub account, SonarCloud will suggest you creating an organization with name that is equivalent to your GitHub account name.
    :::

3. In the Create an organization menu, choose the free plan and click **Create organization**:

    ![Create organization](../assets/quick-start/free_plan.png "Choose plan")

4. In your account menu, select the **Security** tab and generate token:

    ![Create organization](../assets/quick-start/generate_token.png "Generate token")

5. In the UI Portal, navigate to `Configuration` -> `Code Quality`. Define the following values and click **Save**:

    * URL: `https://sonarcloud.io`
    * Token: `account token generated in SonarCloud`

    ![SonarQube integration](../assets/quick-start/sonarqube_integrated.png "SonarQube integration")

After completing the SonarQube integration, proceed to integrate the platform with GitHub. Navigate to the [Integrate GitHub](./integrate-github.md) page for further instructions.
