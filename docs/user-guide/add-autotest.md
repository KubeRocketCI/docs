---
title: "Add Autotest"
sidebar_label: "Add Autotest"
description: "Learn how to add autotests in KubeRocketCI, integrating them into CI/CD workflows for enhanced quality assurance and deployment."
---
<!-- markdownlint-disable MD025 -->

# Add Autotest

<head>
  <link rel="canonical" href="https://docs.kuberocketci.io/docs/user-guide/add-autotest" />
</head>

KubeRocketCI portal allows you to clone an existing repository with the autotest to your Version Control System (VCS), or use an external repository and import an autotest to the environment for running in stages or using as quality gates for applications. When an autotest is cloned or imported, the system automatically generates a corresponding repository within the integrated Version Control System. You can create an Autotest [in YAML](#create-autotest-in-yaml) or [via the dialog](#create-autotest-via-ui).

<div style={{ display: 'flex', justifyContent: 'center' }}>
<iframe width="560" height="315" src="https://www.youtube.com/embed/ytaO-ZaQb0c" title="KubeRocketCI: Autotests Overview" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
</div>

The **Create Autotest** dialog contains four steps:

* Initial Setup
* Git & Project Info
* Build Config
* Review

To add an autotest, navigate to the **Projects** section on the navigation bar and click **+ Create Project**.

## Initial Setup

Once clicked, the **Create new project** dialog will appear. In this dialog, you can make a choice:

* **Select Ready Template** – this option allows you to select a preconfigured, ready-to-go autotest template.
* **Custom Configuration** – this option allows you to create any of the supported Project types. In this case, you should select **Autotest**.

Choose one of the strategies and click **Continue**:

* **Import** – allows using an existing VCS repository to integrate with KubeRocketCI. While importing the existing repository, select the Git server from the drop-down list and define the relative path to the repository, such as `epmd-edp/examples/basic/edp-auto-tests-simple-example`.

* **Clone** – clones the indicated repository into KubeRocketCI. While cloning the existing repository, it is required to fill in the **Repository URL** field and specify the credentials if needed.

:::note
Autotest does not support the **Create** strategy. Use **Import** or **Clone** to add an autotest.
:::

## Git & Project Info

In our example, we will use the **Import** strategy:

Select all the settings that define how the autotest will be added to the Git server:

* **Git server** – the pre-configured server where the component will be hosted. Select one from the drop-down list. Please refer to the [Manage Git Servers](git-server-overview.md) page to learn how to create one.
* **Git URL Path** – the relative path to the Git repository where the codebase will be created (e.g., `epmd-edp` or `my-github-username`).
* **Project name** – the name of the autotest. Must be at least two characters using lower-case letters, numbers, and inner dashes.
* **Default Branch** – the default branch the Project will be created with. The default branch cannot be deleted.
* **Description** – brief and concise description that explains the purpose of the autotest.
* **Private** – by default, all created Projects have private visibility settings in your Git account. Uncheck this option to create a public Git repository.

## Build Config

Specify the autotest language and versioning properties:

* **Code Language** – defines the code language with its supported frameworks. For autotests, **Other** is often used to extend the default code languages when using the Clone/Import strategy.
* **Language version/framework** – defines the specific framework or language version of the autotest. The field depends on the selected code language. Specify Java 17, Java 21, or Java 25 to be used. Java 8 and 11 have been deprecated starting from KubeRocketCI version 3.12.
* **Build Tool** – allows you to choose the build tool to use. For autotests, Gradle and Maven are available.
* **Autotest report framework** – all autotest reports are created in the Allure framework by default.

* **Codebase versioning type** – defines how the autotest tag will be changed once the new image version is built. There are two versioning types:
  * **default**: Using the `default` versioning type, to specify the version of the current artifacts, images, and tags in the Version Control System, a developer should navigate to the corresponding file and change the version **manually**.
  * **semver**: Using the `semver` versioning type, a developer indicates the version number from which all artifacts will be versioned and, as a result, **automatically** registered in the corresponding file (e.g. pom.xml). When selecting the `semver` versioning type, extra fields will appear; type the version number from which you want the artifacts to be versioned.

  :::note
    The **Start Version From** field should be filled out in compliance with the semantic versioning rules, e.g. 1.2.3 or 10.10.10. Please refer to the [Semantic Versioning](https://semver.org/) page for details.
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

The **Review and Create** window allows you to ensure the autotest configuration suits your needs and verify you entered the specifications correctly.

:::note
After the complete adding of the autotest, inspect the [Manage Autotests](autotest.md) page to learn how you can operate autotests.
:::

## Related Articles

* [Manage Autotests](autotest.md)
* [Add Application](add-application.md)
* [Add CD Pipeline](add-cd-pipeline.md)
* [Adjust Jira Integration](../operator-guide/project-management-and-reporting/jira-integration.md)
* [Manage Git Servers](git-server-overview.md)
