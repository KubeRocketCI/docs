---
title: "User Guide: Portal Features and CI/CD Flow"
description: "The KubeRocketCI portal user guide is intended for developers and provides details on working with the KubeRocketCI portal, different codebase types, and the KubeRocketCI CI/CD flow."
sidebar_label: "Overview"
---
<!-- markdownlint-disable MD025 -->

import Head from '@docusaurus/Head';

<Head>
  <meta property="og:title" content="User Guide: Portal Features and CI/CD Flow" />
  <meta property="og:description" content="How to use the KubeRocketCI portal: features, codebase types, and the CI/CD flow for developers." />
  <meta property="og:image" content="https://docs.kuberocketci.io/img/logo-white-vertical.png" />
  <meta property="og:url" content="https://docs.kuberocketci.io/docs/user-guide" />
  <meta property="og:type" content="article" />
  <link rel="canonical" href="https://docs.kuberocketci.io/docs/user-guide" />
</Head>

# User Guide: Portal Features and CI/CD Flow

The KubeRocketCI portal user guide is intended for developers and provides details on working with the KubeRocketCI portal, different codebase types, and the KubeRocketCI CI/CD flow.

## KubeRocketCI Portal

The KubeRocketCI portal is a central management tool in the KubeRocketCI ecosystem that provides the ability to define pipelines, project resources and new technologies in a simple way. Using the KubeRocketCI portal enables to manage business entities:

* Create such codebase types as Applications, Libraries, Autotests and Infrastructures;
* Create/Update CD Pipelines;
* Add external Git servers and Clusters.

Below is the Overview page of the KubeRocketCI portal:

![Overview page](../assets/user-guide/kuberocketci-portal-overview-page.png "Overview page")

* **Application widgets** – shows the information on codebases created in the default and allowed namespaces, reflecting the overall amount of entities and their statuses.
* **Top bar panel** – contains chat assistant button (if configured) documentation link, notifications, KubeRocketCI portal settings, cluster settings, such as default and allowed namespaces.
* **Quick links** – displays the corresponding links to the major adjusted tool set.
* **KubeRocketCI/Kubernetes mode switcher** - Toggle between KubeRocketCI and K8s modes to view and configure corresponding resources.
* **Create resource as code** – Allows creating resources using Kubernetes manifests.

KubeRocketCI portal is a complete tool allowing to manage and control the codebases (applications, autotests, libraries and infrastructures) added to the environment as well as to create a CD pipeline.

Inspect the main features available in the KubeRocketCI portal by following the corresponding link:

* [Add Application](add-application.md)
* [Add Autotest](add-autotest.md)
* [Add Library](add-library.md)
* [Add Git Server](add-git-server.md)
* [Add CD Pipeline](add-cd-pipeline.md)
* [Add Quality Gate](add-quality-gate.md)
