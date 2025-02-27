---

title: "Quick Start: Overview"
description: "Introductory overview of the Quick Start guide for KubeRocketCI, covering the setup flow from prerequisites through platform installation, integration, to application deployment."
sidebar_label: "Overview"

---
<!-- markdownlint-disable MD025 -->

# Quick Start: Overview

<head>
  <link rel="canonical" href="https://docs.kuberocketci.io/docs/quick-start/quick-start-overview/" />
</head>

This page serves as an introductory part of the Quick Start guide. It outlines the core steps and reasons to perform them.

## Introduction

The purpose of this guide is to provide a comprehensive overview of the KubeRocketCI platform and its key functionalities. By following this guide, users will gain a clear understanding of the platform's capabilities and be able to explore its features quickly. This guide is specifically designed for individuals who want to swiftly familiarize themselves with the KubeRocketCI platform.

## Setup Flow

The installation procedure of the platform can be divided into four logical parts:

```mermaid
graph LR;
    A(Prerequisites) --> B(Platform Installation) --> C(Integration) --> D(Application Deployment)
```

1. **Prerequisites**: In this step, Tekton and Argo CD are installed to provide KubeRocketCI with CI/CD capabilities.

2. **Platform Installation**: Here, we deploy the platform itself and configure it for work.

3. **Integration**: This step involves integrating third-party tools with KubeRocketCI to provide the platform with a minimum functionality set.

4. **Application Deployment**: In this final step, we create and deploy an application, which serves as the target endpoint of the entire guide.

The guide is formally divided into two parts: **CI** and **CD**, corresponding to the stages of the pipeline that the platform supports at each moment.

## Prerequisites

Before deploying KubeRocketCI, it is important to ensure that a local Kubernetes cluster is set up. We recommend allocating 4 CPUs and 8 GB of RAM to the cluster. Alternatively, you can use a cloud provider that offers a Kubernetes service with sufficient CPU and RAM capacity. For example, you can check out our [video tutorial](https://www.youtube.com/watch?v=QjZoPnIKDtA) where we demonstrate the installation of the platform via the [Civo Marketplace](../operator-guide/install-via-civo.md). This allows you to skip the installation part of the guide and proceed with adjusting integrations.

## Starting Point

The first step of the guide is to prepare the cluster environment for the KubeRocketCI setup process by installing the Tekton tool. Once this is done, you can proceed with the installation of the platform itself. Detailed guidelines for the platform installation can be found in the [Platform Installation](./platform-installation.md) page. Alternatively, you can watch our [video tutorial](https://www.youtube.com/watch?v=QjZoPnIKDtA) which provides a clear demonstration of the installation process.

Good luck with your installation!
