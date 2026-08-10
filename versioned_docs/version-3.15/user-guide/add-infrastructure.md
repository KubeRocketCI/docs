---
title: "Add Infrastructure"
sidebar_label: "Add Infrastructure"
description: "Learn how to add, clone, and import infrastructure projects in KubeRocketCI, automating resource creation in the cloud for robust development."
---
<!-- markdownlint-disable MD025 -->

# Add Infrastructure

<head>
  <link rel="canonical" href="https://docs.kuberocketci.io/docs/user-guide/add-infrastructure" />
</head>

KubeRocketCI portal allows you to create an infrastructure project, clone an existing repository with the infrastructure to your Version Control System (VCS), or use an external repository and import an infrastructure to the environment. The Infrastructure codebase type is used to create and manage resources in a cloud provider. When an infrastructure project is created or cloned, the system automatically generates a corresponding repository within the integrated Version Control System.

Before following these guidelines, be sure to [add Git Server](./add-git-server.md) to the platform.

The **Create Infrastructure** wizard contains four steps:

* Initial Setup
* Git & Project Info
* Build Config
* Review

To add an infrastructure, navigate to the **Projects** section on the navigation bar and click **+ Create Project**.

## Initial Setup

Once clicked, the **Create new project** wizard will appear. In this dialog, you can make a choice:

* **Select Ready Template** – this option allows you to select a preconfigured, ready-to-go infrastructure template (e.g., Terraform).
* **Custom Configuration** – this option allows you to create any of the supported Project types. In this case, you should select **Infrastructure**.

Choose one of the strategies and click **Continue**:

* **Create** – creates a sample Project on the pattern in accordance with an infrastructure language, a build tool, and a framework. This strategy is recommended for projects that start defining their infrastructure from scratch.

* **Import** – allows using an existing VCS repository to integrate with KubeRocketCI. While importing the existing repository, select the Git server from the drop-down list and define the relative path to the repository, such as `epmd-edp/terraform-aws-example`.

* **Clone** – clones the indicated repository into KubeRocketCI. While cloning the existing repository, it is required to fill in the **Repository URL** field and specify the credentials if needed.

## Git & Project Info

In our example, we will use the **Create** strategy:

Select all the settings that define how the infrastructure will be added to the Git server:

* **Git server** – the pre-configured server where the component will be hosted. Select one from the drop-down list. Please refer to the [Manage Git Servers](git-server-overview.md) page to learn how to create one.
* **Owner** - the relative path to the Git repository where Project will be created (e.g., `MyGithubUsername123` or `my-github-username`).
* **Repository name** - the name of the repository that will store code for this Project. Must be at least two characters using the lower-case letters, numbers and inner dashes.
* **Default branch** – the default branch the Project will be created with. The default branch cannot be deleted.
* **Project name** – the name of the infrastructure. Must be at least two characters using lower-case letters, numbers, and inner dashes.
* **Description** – brief and concise description that explains the purpose of the infrastructure.
* **Private** – by default, all created Projects have private visibility settings in your Git account. Uncheck this option to create a public Git repository.
* **Empty project** – check this box to create an infrastructure with an empty repository. The empty repository option is available only for the **Create** strategy.

## Build Config

Specify the infrastructure language and versioning properties:

* **Code Language** – defines the code language with its supported frameworks. For infrastructure, **Terraform** is commonly used; other options may be available depending on the platform configuration.
* **Language version/framework** – defines the specific framework or language version of the infrastructure. The field depends on the selected code language.
* **Build Tool** – allows you to choose the build tool to use. The set of tools can be changed in accordance with the selected code language.

* **Codebase versioning type** – defines how the infrastructure tag will be changed once the new image version is built. There are two versioning types:
  * **default**: Using the `default` versioning type, to specify the version of the current artifacts, images, and tags in the Version Control System, a developer should navigate to the corresponding file and change the version **manually**.
  * **semver**: Using the `semver` versioning type, a developer indicates the version number from which all artifacts will be versioned and, as a result, **automatically** registered in the corresponding file. When selecting the `semver` versioning type, extra fields will appear; type the version number from which you want the artifacts to be versioned. This versioning type is recommended and selected by default.

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

The **Review and Create** window allows you to ensure the infrastructure configuration suits your needs and verify you entered the specifications correctly.

:::note
After the complete adding of the infrastructure, inspect the [Manage Infrastructures](infrastructure.md) page to learn how you can operate infrastructure codebase types.
:::

## Related Articles

* [Manage Infrastructures](infrastructure.md)
* [Add CD Pipeline](add-cd-pipeline.md)
* [Adjust Jira Integration](../operator-guide/project-management-and-reporting/jira-integration.md)
* [Manage Git Servers](git-server-overview.md)
