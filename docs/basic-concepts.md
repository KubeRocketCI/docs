# Basic Concepts

Consult [KubeRocketCI Glossary](./glossary.md) section for definitions mentioned on this page. The below table contains a list of capabilities provided by the platform.

|Features|Description|
|-|-|
|Cloud Agnostic|Platform runs on Kubernetes cluster, so any Public Cloud Provider which provides Kubernetes can be used. Kubernetes clusters deployed on-premises work as well|
|CI/CD for Microservices|KubeRocketCI is initially designed to support CI/CD for [Microservices](https://microservices.io/) running as containerized applications inside Kubernetes Cluster. Platform provides CI Pipelines for [different technology stacks](./about-platform.md#features)|
|Version Control System (VCS)|Platform supports *GitHub* and *GitLab* integration|
|Branching Strategy|Platform supports [Trunk-based](https://trunkbaseddevelopment.com/) development as well as [GitHub/GitLab flow](https://guides.github.com/introduction/flow/). KubeRocketCI creates two Pipelines per each codebase branch: *Code Review* and *Build*|
|Repository Structure|Platform provides separate Git repository per each Codebase and doesn't work with *Monorepo* out of the box. However, KubeRocketCI does support customization and can be aligned to *Monorepo* approach.|
|Artifacts Versioning|Platform supports two approaches for Artifacts versioning: <br />- *default* (BRANCH-[TECH_STACK_VERSION]-BUILD_ID)<br />- *EDP* (MAJOR.MINOR.PATCH-BUILD_ID), which is [SemVer](https://semver.org/). <br />Custom versioning can be created by implementing `get-version` CI step|
|Application Library|The platform offers baseline codebase templates for Microservices and Libraries, using the *create* strategy when onboarding new Codebases.|
|CI Pipelines|KubeRocketCI provides CI Pipelines for [different technology stacks](./about-platform.md#features)|
|CD Pipelines|KubeRocketCI provides capabilities to design CD Pipelines (in Portal UI) for Microservices and defines logic for artifacts flow (promotion) from lower to higher environments. Artifacts promotion is performed automatically (*Autotests*), manually (*User Approval*) or combining both approaches|
|Autotests|KubeRocketCI provides CI pipeline for autotest implemented in Java. Autotests can be used as *Quality Gates* in CD Pipelines|
|Custom Pipeline Library|KubeRocketCI pipelines can be extended by introducing Custom Pipeline Library|
|Dynamic Environments|KubeRocketCI CD Pipelines have the ability to create and destroy environments based on user requests. This allows for flexible and dynamic deployment of applications.|
