---
title: "KubeRocketCI Developer Guide: Architecture, Components, and Contribution Workflow"
description: "A comprehensive guide for developers on KubeRocketCI's architecture, core components, and contribution workflow, including technical resources and best practices."
sidebar_label: "Overview"
---
<!-- markdownlint-disable MD025 -->

# Overview

<head>
  <link rel="canonical" href="https://docs.kuberocketci.io/docs/developer-guide/" />
</head>

The KubeRocketCI Developer Guide serves as a comprehensive technical resource specifically designed for developers. It offers detailed insights into expanding the functionalities of KubeRocketCI. This section focuses on explaining the development approach and fundamental architectural blueprints that form the basis of the platform's ecosystem.

Within these pages, you'll find architectural diagrams, component schemas, and deployment strategies essential for grasping the structural elements of the platform. These technical illustrations serve as references, providing a detailed understanding of component interactions and deployment methodologies. Understanding the architecture of the KubeRocketCI and integrating third-party solutions into its established framework enables the creation of efficient, scalable, and customizable solutions within the KubeRocketCI.

The KubeRocketCI platform consists of several key components. These components are interconnected, and their relationships are illustrated in the diagram below:

![KubeRocketCI Components Diagram](../assets/developer-guide/architecture/components.svg)

Each component represents one of the following:

- A Helm chart with a Docker image.
- A standalone Helm chart.
- A standalone Docker image.

All components are regularly updated and released as part of the platform's development cycle.

Some components, such as keycloak-operator, nexus-operator, sonar-operator, and tekton-custom-task, are provided separately through the [edp-cluster-add-ons](https://github.com/epam/edp-cluster-add-ons) repository. These components are optional and can be installed independently of the main platform.

## Release Channels

As a publicly available product, the KubeRocketCI relies on various channels to share information, gather feedback, and distribute new releases effectively. This section outlines the diverse channels through which users can engage with our platform and stay informed about the latest developments and enhancements.

### Marketplaces

Our product is presented on AWS and Civo marketplaces. It's essential to ensure that the product information on these platforms is up-to-date and accurately reflects the latest version of our software:

- [AWS Marketplace](https://aws.amazon.com/marketplace/pp/prodview-u7xcz6pvwwwoa)
- [CIVO Marketplace](https://www.civo.com/marketplace/edp)

### OperatorHub

Our product operators are showcased on OperatorHub, enabling seamless integration and management capabilities:

- [Keycloak Operator](https://operatorhub.io/operator/edp-keycloak-operator)
- [Nexus Operator](https://operatorhub.io/operator/nexus-operator)
- [Sonar Operator](https://operatorhub.io/operator/sonar-operator)

## GitHub Repositories

Our platform components, optional enhancements, add-ons, and deployment resources are hosted on GitHub repositories. Explore the following repositories to access the source code of components.

### Platform Components

Each platform component is available in its corresponding GitHub project:

- [CD Pipeline Operator](https://github.com/epam/edp-cd-pipeline-operator/releases)
- [Codebase Operator](https://github.com/epam/edp-codebase-operator/releases)
- [EDP Gerrit](https://github.com/epam/edp-gerrit)
- [EDP Install](https://github.com/epam/edp-install/releases)
- [Gerrit Operator](https://github.com/epam/edp-gerrit-operator/releases)
- [KubeRocketCI Portal](https://github.com/epam/edp-headlamp/releases)
- [Tekton](https://github.com/epam/edp-tekton/releases)

### Optional Components

These optional components enhance the platform's installation and configuration experience:

- [Keycloak Operator](https://github.com/epam/edp-keycloak-operator/releases)
- [Nexus Operator](https://github.com/epam/edp-nexus-operator/releases)
- [Sonar Operator](https://github.com/epam/edp-sonar-operator/releases)

### Add-ons Repository

The Add-ons repository offers a streamlined deployment process. It includes additional components that can be integrated separately into the cluster:

- [Cluster Add-Ons](https://github.com/epam/edp-cluster-add-ons)

### Platform Test Data

Access test data from the 'Create' onboarding strategy:

- [EPMD-EDP Project](https://github.com/epmd-edp)

### Helm Charts

Helm chart artifacts are available in repository:

- [Helm Charts](https://github.com/epam/edp-helm-charts)

## DockerHub

Our DockerHub repository hosts Docker images for various platform components:

- [CD Pipeline Operator](https://hub.docker.com/repository/docker/epamedp/cd-pipeline-operator/)
- [Codebase Operator](https://hub.docker.com/repository/docker/epamedp/codebase-operator/)
- [EDP Gerrit](https://hub.docker.com/r/epamedp/edp-gerrit)
- [Gerrit Operator](https://hub.docker.com/repository/docker/epamedp/gerrit-operator)
- [Keycloak Operator](https://hub.docker.com/repository/docker/epamedp/keycloak-operator/)
- [KubeRocketCI Portal](https://hub.docker.com/repository/docker/epamedp/edp-headlamp/)
- [Nexus Operator](https://hub.docker.com/repository/docker/epamedp/nexus-operator/)
- [Sonar Operator](https://hub.docker.com/repository/docker/epamedp/sonar-operator/)
- [Tekton](https://hub.docker.com/repository/docker/epamedp/edp-tekton)
- [Tekton Cache](https://hub.docker.com/repository/docker/epamedp/tekton-cache)
- [Tekton Custom Task](https://hub.docker.com/repository/docker/epamedp/tekton-custom-task)

## Social Media

To maintain an active presence on social media channels and share valuable content about our software releases, we continuously publish materials across the following media:

- [SolutionsHub](https://solutionshub.epam.com/solution/kuberocketci)
- [Medium](https://medium.com/epam-delivery-platform)
- [YouTube](https://www.youtube.com/@theplatformteam)
