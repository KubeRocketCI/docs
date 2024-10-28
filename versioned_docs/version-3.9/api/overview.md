# Introduction

This documentation provides an overview of the Custom Resource Definitions (CRDs) used within KubeRocketCI, enabling the extension of Kubernetes capabilities to manage complex applications directly.
These CRDs represent a variety of resources essential for the continuous deployment pipeline, codebase management, artifact storage, authentication, and code quality analysis.

- **CD Pipeline**: Defines the structure and flow of the continuous deployment pipeline, allowing for automated updates and deployments. [Learn more](cd-pipeline.md).
- **Codebase**: Manages source code repositories, supporting various operations such as branching, tagging, and merging. [Learn more](codebase.md).
- **Nexus**: Facilitates artifact storage and management, providing a reliable way to store, share, and manage binary software components. [Learn more](nexus.md).
- **Keycloak**: Handles authentication and authorization, offering a comprehensive solution for user management and access control. [Learn more](keycloak.md).
- **SonarQube**: Ensures code quality by analyzing source code for bugs, vulnerabilities, and code smells. [Learn more](sonarqube.md).

By leveraging these CRDs, our platform simplifies the management of complex applications, enhancing automation, security, and efficiency throughout the software development lifecycle.
