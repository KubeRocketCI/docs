# Basic Concepts

Consult [EDP Glossary](./glossary.md) section for definitions mentioned on this page and [EDP Toolset](https://epam.github.io/edp-install/getting-started/#edp-toolset) to have a full list of tools used with the Platform. The below table contains a full list of features provided by EDP.

|Features|Description|
|-|-|
|Cloud Agnostic|EDP runs on Kubernetes cluster, so any Public Cloud Provider which provides Kubernetes can be used. Kubernetes clusters deployed on-premises work as well|
|CI/CD for Microservices|EDP is initially designed to support CI/CD for [Microservices](https://microservices.io/) running as containerized applications inside Kubernetes Cluster. EDP also supports CI for:- Terraform Modules, - Open Policy Rules,- Workflows for Java (8,11,17), JavaScript (React, Vue, Angular, Express, Antora), C# (.NET 6.0), Python (FastAPI, Flask, 3.8), Go (Beego, Operator SDK)|
|Version Control System (VCS)|EDP installs *Gerrit* as a default Source Code Management (SCM) tool. EDP also supports *GitHub* and *GitLab* integration|
|Branching Strategy|EDP supports [Trunk-based](https://trunkbaseddevelopment.com/) development as well as [GitHub/GitLab flow](https://guides.github.com/introduction/flow/). EDP creates two Pipelines per each codebase branch: *Code Review* and *Build*|
|Repository Structure|EDP provides separate Git repository per each Codebase and doesn't work with *Monorepo*. However, EDP does support customization and runs *helm-lint*, *dockerfile-lint* steps using *Monorepo* approach.|
|Artifacts Versioning|EDP supports two approaches for Artifacts versioning: - *default* (BRANCH-[TECH_STACK_VERSION]-BUILD_ID)- *EDP* (MAJOR.MINOR.PATCH-BUILD_ID), which is [SemVer](https://semver.org/).Custom versioning can be created by implementing `get-version` stage|
|Application Library|EDP provides baseline codebase templates for Microservices, Libraries, within *create* strategy while onboarding new Codebase|
|Stages Library|Each EDP Pipeline consists of pre-defined steps (stages).|
|CI Pipelines|EDP provides CI Pipelines for first-class citizens: - Applications (Microservices) based on Java (8,11,17), JavaScript (React, Vue, Angular, Express, Antora, Next.js), C# (.NET 3.1, .NET 6.0), Python (FastAPI, Flask, 3.8), Go (Beego, Gin, Operator SDK), Helm (Charts, Pipeline)- Libraries based on Java (8,11,17), JavaScript (React, Vue, Angular, Express), Python (FastAPI, Flask, 3.8), Groovy Pipeline (Codenarc), HCL (Terraform), Rego (OPA), Container (Docker), Helm (Charts, Pipeline), C#(.NET 3.1, .NET 6.0) - Autotests based on Java8, Java11, Java17|
|CD Pipelines|EDP provides capabilities to design CD Pipelines (in EDP Portal UI) for Microservices and defines logic for artifacts flow (promotion) from env to env. Artifacts promotion is performed automatically (*Autotests*), manually (*User Approval*) or combining both approaches|
|Autotests|EDP provides CI pipeline for autotest implemented in Java. Autotests can be used as *Quality Gates* in CD Pipelines|
|Custom Pipeline Library|EDP can be extended by introducing Custom Pipeline Library|
|Dynamic Environments|Each EDP CD Pipeline creates/destroys environment upon user requests|
