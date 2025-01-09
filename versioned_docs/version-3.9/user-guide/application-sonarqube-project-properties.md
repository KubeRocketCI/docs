# Sonarqube Project Properties for Application

The KubeRocketCI platform simplifies this process by supporting SonarQube integration with predefined configurations. However, specific use cases may require customization. Below is a guide how to set the SonarQube project properties to meet all application requirements.

## Application repo structure

When application added to the KubeRocketCI, a default `sonar-project.properties` file is automatically generated during the execution process of the build and review pipelines. However, depending on the specific needs of the application, a separate configuration file can be created, placed in the root directory of the application repository, and used for sonarqube code quality during the pipeline:

  <details>
  <summary><b>example repository structure</b></summary>
  ```text
  go-example-project
    ├── deploy-templates
    │   └── ..
    ├── Dockerfile
    ├── Makefile
    ├── controllers
    │   ├── hello.go
    │   └── hello_test.go
    ├── go.mod
    ├── go.sum
    ├── main.go
    ├── routers
    │   └── router.go
    └── sonar-project.properties
  ```
  </details>


## Default project parameters

* **sonar.projectKey:** A unique identifier for the SonarQube project. This is also set to the application **codebase name** by the KubeRocketCI pipelines.
* **sonar.projectName:** A readable name for the project. This is also set to the application **codebase name** by the KubeRocketCI pipelines.
* **sonar.qualitygate.wait:** Enables waiting for Quality Gate results before proceeding (e.g., **true** or **false**) by default KubeRocketCI pipelines set it **true**.
* **sonar.host.url:** by default set from KuberocketCI pipelines from [KuberocketCI sonarqube integration **url**](../operator-guide/code-quality/sonarqube.md#configuration).
* **sonar.login:** by default set from KuberocketCI pipelines from [KuberocketCI sonarqube integration **token**](../operator-guide/code-quality/sonarqube.md#configuration).
* **sonar.organization:** by default not set from KuberocketCI pipelines and used only for [sonar cloud integration](../quick-start/integrate-sonarcloud.md).

  <details>
  <summary><b>sonar-project.properties: file example of configuration</b></summary>
  ```text
  sonar.projectKey=go-example-project
  sonar.projectName=go-example-project
  sonar.exclusions=**/cmd/**,**/deploy/**,**/deploy-templates/**,**/*.groovy,**/config/**
  sonar.language=go
  ```
  </details>

For additional assistance with configuring SonarQube properties, please refer to the [SonarQube documentation](https://docs.sonarsource.com/sonarqube-server/10.6/analyzing-source-code/scanners/sonarscanner/)

## Related Articles

* [Add Application](add-application.md)
* [Integrate SonarQube](../quick-start/integrate-sonarcloud.md)
* [Create Application](../quick-start/create-application.md)
