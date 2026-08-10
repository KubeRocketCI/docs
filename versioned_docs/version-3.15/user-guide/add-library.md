---
title: "Add Library"
sidebar_label: "Add Library"
description: "Discover how to add and manage libraries in KubeRocketCI, from cloning repositories to leveraging external sources for improved development."
---
<!-- markdownlint-disable MD025 -->

# Add Library

<head>
  <link rel="canonical" href="https://docs.kuberocketci.io/docs/user-guide/add-library" />
</head>

KubeRocketCI portal allows you to create a library, clone an existing repository with the library to your Version Control System (VCS), or use an external repository and import a library to the environment. When a library is created or cloned, the system automatically generates a corresponding repository within the integrated Version Control System.

Before following these guidelines, be sure to [add Git Server](./add-git-server.md) to the platform.

The **Create Library** wizard contains four steps:

* Initial Setup
* Git & Project Info
* Build Config
* Review

To add a library, navigate to the **Projects** section on the navigation bar and click **+ Create Project**.

## Initial Setup

Once clicked, the **Create new project** wizard will appear. In this dialog, you can make a choice:

* **Select Ready Template** – this option allows you to select a preconfigured, ready-to-go library (e.g., shared pipeline or Terraform module).
* **Custom Configuration** – this option allows you to create any of the supported Project types. In this case, you should select **Library**.

Choose one of the strategies and click **Continue**:

* **Create** – creates a sample Project on the pattern in accordance with a library language, a build tool, and a framework. This strategy is recommended for projects that start developing their libraries from scratch.

* **Import** – allows using an existing VCS repository to integrate with KubeRocketCI. While importing the existing repository, select the Git server from the drop-down list and define the relative path to the repository, such as `epmd-edp/python-python-flask`.

* **Clone** – clones the indicated repository into KubeRocketCI. While cloning the existing repository, it is required to fill in the **Repository URL** field and specify the credentials if needed.

## Git & Project Info

In our example, we will use the **Create** strategy:

Select all the settings that define how the library will be added to the Git server:

* **Git server** – the pre-configured server where the component will be hosted. Select one from the drop-down list. Please refer to the [Manage Git Servers](git-server-overview.md) page to learn how to create one.
* **Owner** - the relative path to the Git repository where Project will be created (e.g., `MyGithubUsername123` or `my-github-username`).
* **Repository name** - the name of the repository that will store code for this Project. Must be at least two characters using the lower-case letters, numbers and inner dashes.
* **Default branch** – the default branch the Project will be created with. The default branch cannot be deleted.
* **Project name** – the name of the library. Must be at least two characters using lower-case letters, numbers, and inner dashes.
* **Description** – brief and concise description that explains the purpose of the library.
* **Private** – by default, all created Projects have private visibility settings in your Git account. Uncheck this option to create a public Git repository.
* **Empty project** – check this box to create a library with an empty repository. The empty repository option is available only for the **Create** strategy.

## Build Config

Specify the library language and versioning properties:

* **Code Language** – defines the code language with its supported frameworks:

  * Java – selecting a specific Java version (17, 21, and 25 are available; Java 8 and 11 have been deprecated starting from KubeRocketCI version 3.12).
  * JavaScript – selecting JavaScript allows using React, Vue, Angular, Express, and Next.js frameworks.
  * Python – selecting Python allows using Python v.3.8, FastAPI, and Flask frameworks.
  * Groovy-pipeline – selecting Groovy-pipeline allows customizing stage logic.
  * Terraform – selecting Terraform allows using different Terraform versions via the **Terraform version manager** ([tfenv](https://github.com/tfutils/tfenv#usage)). KubeRocketCI supports all actions available in Terraform. For details, please refer to the [Use Terraform Library in KubeRocketCI](../operator-guide/ci/ci-pipeline-terraform.md) page.
  * Rego – this option allows using Rego code language with an Open Policy Agent (OPA) Library.
  * Container – this option allows using the Kaniko tool for building container images from a Dockerfile.
  * Helm – this option allows using [chart testing lint](https://github.com/helm/chart-testing) for Helm charts or using a Helm chart as a set of other Helm charts.
  * C# – selecting C# allows using .Net v.3.1 and .Net v.6.0 frameworks.
  * Other – selecting Other allows extending the default code languages when creating a codebase with the Clone/Import strategy.

  :::note
    The **Create from template** strategy does not allow customizing the default code language set.
  :::

* **Language version/framework** – defines the specific framework or language version of the library. The field depends on the selected code language.
* **Build Tool** – allows you to choose the build tool to use. The set of tools can be changed in accordance with the selected code language.

  :::note
    The **Select Build Tool** field disposes of the default tools and can be changed in accordance with the selected code language.
  :::

* **Codebase versioning type** – defines how the library tag will be changed once the new image version is built. There are two versioning types:
  * **default**: Using the `default` versioning type, to specify the version of the current artifacts, images, and tags in the Version Control System, a developer should navigate to the corresponding file and change the version **manually**.
  * **semver**: Using the `semver` versioning type, a developer indicates the version number from which all artifacts will be versioned and, as a result, **automatically** registered in the corresponding file (e.g. pom.xml). When selecting the `semver` versioning type, extra fields will appear; type the version number from which you want the artifacts to be versioned. This versioning type is recommended and selected by default.

  :::note
    The **Start Version From** field should be filled out in compliance with the semantic versioning rules, e.g. 1.2.3 or 10.10.10 (0.1.0 by default). The **Suffix** field is also mandatory and has the **SNAPSHOT** value by default. Please refer to the [Semantic Versioning](https://semver.org/) page for details.
  :::

* **Specify the pattern to validate a commit message** – the regular expression used to indicate the pattern that is followed on the project to validate a commit message in the code review pipeline. An example of the pattern: `^[PROJECT_NAME-d{4}]:.*$`.

* **Integrate with Jira server** – this check box is used in case it is required to connect Jira tickets with the commits and have a respective label in the **Fix Version** field.

  :::note
    To adjust the Jira integration functionality, first apply the necessary changes described on the [Adjust Jira Integration](../operator-guide/project-management-and-reporting/jira-integration.md) page.
  :::

* **Jira Server** – the integrated Jira server with related Jira tasks.

* **Specify the pattern to find a Jira ticket number in a commit message** – based on this pattern, the value from KubeRocketCI will be displayed in Jira.

* **Mapping field name** – the section where the additional Jira fields are specified, i.e. the names of the Jira fields that should be filled in with attributes from KubeRocketCI:

  * Select the name of the field in a Jira ticket. The available fields are: _Fix Version/s_, _Component/s_, and _Labels_.
  * Click the **Add** button to add the mapping field name.
  * Enter the Jira pattern for the field name:

    * For the **Fix Version/s** field, select the **EDP_VERSION** variable that represents a KubeRocketCI upgrade version, as in _2.7.0-SNAPSHOT_. Combine variables to make the value more informative. For example, the pattern **EDP_VERSION-EDP_COMPONENT** will be displayed as _2.7.0-SNAPSHOT-nexus-operator_ in Jira.
    * For the **Component/s** field, select the **EDP_COMPONENT** variable that defines the name of the existing repository. For example, _nexus-operator_.
    * For the **Labels** field, select the **EDP_GITTAG** variable that defines a tag assigned to the commit in GitHub. For example, _build/2.7.0-SNAPSHOT.59_.

  * Click the bin icon to remove the Jira field name.

## Review and Create

The **Review and Create** window allows you to ensure the library configuration suits your needs and verify you entered the specifications correctly.

:::note
After the complete adding of the library, inspect the [Manage Libraries](library.md) page to learn how you can operate libraries.
:::

## Related Articles

* [Manage Libraries](library.md)
* [Add CD Pipeline](add-cd-pipeline.md)
* [Adjust Jira Integration](../operator-guide/project-management-and-reporting/jira-integration.md)
* [Manage Git Servers](git-server-overview.md)
