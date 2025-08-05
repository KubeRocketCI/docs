---

title: "Configuration Overview: Integrations and Features"
sidebar_label: "Configuration Overview"
description: "Explore integration capabilities in KubeRocketCI, from container registries to security tools, enhancing your CI/CD workflows and code quality."

---
<!-- markdownlint-disable MD025 -->

# Configuration Overview: Integrations and Features

<head>
  <link rel="canonical" href="https://docs.kuberocketci.io/docs/user-guide/configuration-overview" />
</head>

The Configuration tab of the KubeRocketCI portal is designed to integrate KubeRocketCI with third-party components. In this page you will get a brief overview of all the sections presented in the Configuration tab.

## Configuration Features

Here is the list of all the sections provided in the Configuration tab. Familiarize yourself with purposes of each section:

| Configuration Section | Description |
|:-|:-|
| [Quick Access](quick-links.md) | Configure quick links for quick access to required tools that will be displayed on the Overview page or in specific resource details, such as application or stage details. Additionally, this section is used to configure widgets, such as SonarQube and DependencyTrack. |
| [Tekton](../user-guide/tekton-pipelines.md) | View all the Tekton Pipelines and Tasks CRDs created in the platform. This section allows to oversee all the Tekton resources and compare them to one another. |
| [Artifacts Storage](../user-guide/manage-container-registries.md) | This section contains settings on related to application deployment. There are three tabs in the section:<ul><li><strong>Nexus</strong>: Integrate platform with Nexus as an application artifact storage solution.</li><li><strong>Registry</strong>: Integrate with a container registry to store container artifacts. The supported container registry solutions are AWS ECR, DockerHub, Harbor, Nexus, GitHub CR, and OpenShift CR.</li></ul> |
| [Deployment](../quick-start/integrate-container-registry.md) | This section contains settings on integrating both artifact and container registries. There are two tabs in the section:<ul><li><strong>Clusters</strong>: Connect the platform to a remote cluster to deploy application into them.</li><li><strong>GitOps</strong>: Create a GitOps repository to redefine parameters for application Helm charts.</li><li><strong>Argo CD</strong>: Configure Argo CD integration as a mandatory component for deploying applications.</li></ul> |
| [Security](../operator-guide/devsecops/overview.md) | Integrate platform with [DefectDojo](../operator-guide/devsecops/defectdojo.md) and [DependencyTrack](../operator-guide/devsecops/dependency-track.md) to scan your codebases for security vulnerabilities.|
| [Code Quality](../operator-guide/code-quality/sonarqube.md) | Integrate platform with SonarQube as a mandatory component to scan your application when executing deploy pipelines. This integration also enables users to view code quality metrics and dependency scan results of your application directly in the KubeRocketCI portal. |
| [Version Control System](../user-guide/add-git-server.md) | Connect platform to a Git Server as a mandatory component to enable a CI/CD workflow. |
| [Management Tool](../operator-guide/project-management-and-reporting/jira-integration.md) | Integrate platform with a Jira server to add pull the the useful codebase metadata into Jira tickets. |
| [Gen AI](../user-guide/add-ai-assistant.md) | Integrate platform an AI assistant for getting intellectual answers to any questions in the chat. |

## Related Articles

* [Add Quick Link](quick-links.md)
* [Add Git Server](add-git-server.md)
* [Add Cluster](add-cluster.md)
* [Manage GitOps](gitops.md)
* [Manage Container Registries](manage-container-registries.md)
