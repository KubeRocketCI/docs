---

title: "Basic Concepts"
description: "Overview of the core features and capabilities of the KubeRocketCI platform, including CI/CD for microservices, VCS integration, branching strategy, and artifacts versioning."
sidebar_label: "Basic Concepts"

---
<!-- markdownlint-disable MD025 -->

# Basic Concepts

<head>
  <link rel="canonical" href="https://docs.kuberocketci.io/docs/basic-concepts/" />
</head>

Consult [KubeRocketCI Glossary](./glossary.md) section for definitions mentioned on this page. The below table contains a list of capabilities provided by the platform.

|Features|Description|
|-|-|
|**Cloud Agnostic**|Platform runs on any Kubernetes cluster, including those provided by Public Cloud Providers or deployed on-premises.|
|**CI/CD for Microservices**|KubeRocketCI is designed to support CI/CD for [Microservices](https://microservices.io/) running as containerized applications inside a Kubernetes Cluster. It provides CI Pipelines for [different technology stacks](./about-platform.md#features).|
|**Version Control System (VCS)**|The platform integrates with **GitHub**, **GitLab**, **Bitbucket**, and **Gerrit**.|
|**Branching Strategy**|KubeRocketCI supports both [Trunk-based](https://trunkbaseddevelopment.com/) development and [GitHub/GitLab flow](https://guides.github.com/introduction/flow/). It creates two Pipelines per codebase branch: *Code Review* and *Build*.|
|**Repository Structure**|By default, the platform provides a separate Git repository for each Codebase. It does not support *Monorepo* out of the box, but can be customized to align with the *Monorepo* approach.|
|**Artifacts Versioning**|The platform supports two approaches for Artifacts versioning: <br />- `default` (BRANCH-[DATETIME])<br />- `EDP` (MAJOR.MINOR.PATCH-BUILD_ID), which follows [SemVer](https://semver.org/). <br />You can also create custom versioning by implementing the `get-version` CI step.|
|**Application Library**|KubeRocketCI offers baseline codebase templates for Microservices and Libraries, using the *create* strategy when onboarding new Codebases.|
|**CI Pipelines**|The platform provides CI Pipelines for [different technology stacks](./about-platform.md#features).|
|**CD Pipelines**|KubeRocketCI allows you to design CD Pipelines (in Portal UI) for Microservices and defines the logic for artifact flow (promotion) from lower to higher environments. Artifact promotion can be performed automatically (*Autotests*), manually (*User Approval*), or using a combination of both.|
|**Autotests**|KubeRocketCI provides a CI pipeline for autotests implemented in Java. These autotests can be used as *Quality Gates* in CD Pipelines.|
|**Custom Pipeline Library**|You can extend KubeRocketCI pipelines by introducing a Custom Pipeline Library.|
|**Dynamic Environments**|KubeRocketCI's CD Pipelines can create and destroy environments based on user requests, allowing for flexible and dynamic deployment of applications.|
|**GitOps Approach**| The platform adopts a GitOps approach for CI/CD, using Git repositories as the single source of truth for infrastructure and application configuration. This practice enhances collaboration, simplifies the deployment process, and improves the auditability of changes.|
|**Monitoring and Observability**| The platform includes an observability stack that enables logging, monitoring, and tracing of applications and infrastructure. This helps in identifying issues early and maintaining the health and performance of the deployed applications.|
|**Security Covering Authentication, Authorization, and SSO for Platform Services**| KubeRocketCI implements robust security mechanisms, including authentication, authorization, and Single Sign-On (SSO) capabilities for all platform services. This ensures that access to the platform is secure and controlled, aligning with best practices for cloud-native application development.|
|**Static Application Security Testing (SAST)**| KubeRocketCI integrates tools that perform [static analysis](operator-guide/devsecops/overview.md) of the source code to identify potential vulnerabilities early in the development process. This analysis is performed without executing the code and can pinpoint issues such as input validation errors, insecure dependencies, and other common vulnerabilities.|
|**Container Registries**| KubeRocketCI demonstrates adaptability and interoperability with leading [container registries](user-guide/manage-container-registries.md), empowering developers to select the most suitable tools and services based on their specific project requirements. The integration process is designed to be as simple as possible, making it easy for developers to connect their projects with the desired registries. The incorporation of these registries is pivotal in upholding the security, effectiveness, and dependability of the CI/CD pipeline.|
