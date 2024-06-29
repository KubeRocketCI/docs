# KubeRocketCI Documentation

Welcome to the official GitHub repository for KubeRocketCI documentation! KubeRocketCI is a cutting-edge Continuous Integration (CI) solution designed to seamlessly integrate with Kubernetes, empowering developers to streamline their CI/CD pipelines in cloud-native environments.

## Overview

KubeRocketCI aims to provide a robust platform for automating the build, test, and deployment phases of your software life cycle, all within Kubernetes. By leveraging KubeRocketCI, teams can achieve faster iteration cycles, improved reliability, and scalability in their development processes.

## Repository Structure

This repository is organized to facilitate easy navigation and contribution. Below is a brief overview of the primary directories:

- `docs/`: Contains the Markdown files for all documentation. This is where you can find detailed guides, tutorials, and references.
- `src/`: Includes the source code for custom documentation components or scripts.
- `static/`: Houses static assets used across the documentation, such as images and icons.
- `versioned_docs/`: Holds documentation for specific versions of KubeRocketCI, ensuring users have access to accurate information for their installed version.
- `versioned_sidebars/`: Contains the sidebar configurations for different documentation versions.

## Contributing

Contributions to the KubeRocketCI documentation are welcome! Whether you're fixing typos, improving existing content, or adding new guides, your input is valuable. Please refer to the contributing guidelines before making a submission.

## Building and Running Locally

The documentation site is built using Docusaurus, a modern static website generator. Follow these steps to run the site locally:

### Prerequisites

- Node.js
- Yarn

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/KubeRocketCI/docs.git
cd docs
yarn install
```

### Local Development

Start a local development server:

```bash
yarn start
```

This command opens up a browser window and reflects most changes live without needing to restart the server.

### Build

Generate static content into the `build` directory:

```bash
yarn build
```

The content can then be served using any static content hosting service.

### Deployment

To deploy using SSH:

```bash
USE_SSH=true yarn deploy
```

For deployments not using SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

This is particularly useful if you're hosting the documentation on GitHub pages.

## License

This project is licensed under the Apache License - see the [LICENSE](LICENSE.txt) file for details.

## More Information

For more information and resources, visit the [KubeRocketCI documentation site](https://docs.kuberocketci.io).

Thank you for supporting KubeRocketCI documentation!
