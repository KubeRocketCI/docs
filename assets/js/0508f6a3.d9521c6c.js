"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[19626],{15160:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"basic-concepts","title":"Basic Concepts","description":"Consult KubeRocketCI Glossary section for definitions mentioned on this page. The below table contains a list of capabilities provided by the platform.","source":"@site/versioned_docs/version-3.9/basic-concepts.md","sourceDirName":".","slug":"/basic-concepts","permalink":"/docs/3.9/basic-concepts","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/basic-concepts.md","tags":[],"version":"3.9","lastUpdatedBy":"Sergiy Kulanov","lastUpdatedAt":1737666151000,"frontMatter":{},"sidebar":"quickStartSidebar","previous":{"title":"Deploy Application","permalink":"/docs/3.9/quick-start/deploy-application"},"next":{"title":"Glossary","permalink":"/docs/3.9/glossary"}}');var n=s(74848),r=s(28453);const o={},c="Basic Concepts",d={},a=[];function l(e){const t={a:"a",code:"code",em:"em",h1:"h1",header:"header",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components},{Head:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"basic-concepts",children:"Basic Concepts"})}),"\n",(0,n.jsx)(s,{children:(0,n.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/basic-concepts/"})}),"\n",(0,n.jsxs)(t.p,{children:["Consult ",(0,n.jsx)(t.a,{href:"/docs/3.9/glossary",children:"KubeRocketCI Glossary"})," section for definitions mentioned on this page. The below table contains a list of capabilities provided by the platform."]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Features"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"Cloud Agnostic"})}),(0,n.jsx)(t.td,{children:"Platform runs on any Kubernetes cluster, including those provided by Public Cloud Providers or deployed on-premises."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"CI/CD for Microservices"})}),(0,n.jsxs)(t.td,{children:["KubeRocketCI is designed to support CI/CD for ",(0,n.jsx)(t.a,{href:"https://microservices.io/",children:"Microservices"})," running as containerized applications inside a Kubernetes Cluster. It provides CI Pipelines for ",(0,n.jsx)(t.a,{href:"/docs/3.9/about-platform#features",children:"different technology stacks"}),"."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"Version Control System (VCS)"})}),(0,n.jsxs)(t.td,{children:["The platform integrates with ",(0,n.jsx)(t.strong,{children:"GitHub"})," and ",(0,n.jsx)(t.strong,{children:"GitLab"}),"."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"Branching Strategy"})}),(0,n.jsxs)(t.td,{children:["KubeRocketCI supports both ",(0,n.jsx)(t.a,{href:"https://trunkbaseddevelopment.com/",children:"Trunk-based"})," development and ",(0,n.jsx)(t.a,{href:"https://guides.github.com/introduction/flow/",children:"GitHub/GitLab flow"}),". It creates two Pipelines per codebase branch: ",(0,n.jsx)(t.em,{children:"Code Review"})," and ",(0,n.jsx)(t.em,{children:"Build"}),"."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"Repository Structure"})}),(0,n.jsxs)(t.td,{children:["By default, the platform provides a separate Git repository for each Codebase. It does not support ",(0,n.jsx)(t.em,{children:"Monorepo"})," out of the box, but can be customized to align with the ",(0,n.jsx)(t.em,{children:"Monorepo"})," approach."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"Artifacts Versioning"})}),(0,n.jsxs)(t.td,{children:["The platform supports two approaches for Artifacts versioning: ",(0,n.jsx)("br",{}),"- ",(0,n.jsx)(t.code,{children:"default"})," (BRANCH-[DATETIME])",(0,n.jsx)("br",{}),"- ",(0,n.jsx)(t.code,{children:"EDP"})," (MAJOR.MINOR.PATCH-BUILD_ID), which follows ",(0,n.jsx)(t.a,{href:"https://semver.org/",children:"SemVer"}),". ",(0,n.jsx)("br",{}),"You can also create custom versioning by implementing the ",(0,n.jsx)(t.code,{children:"get-version"})," CI step."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"Application Library"})}),(0,n.jsxs)(t.td,{children:["KubeRocketCI offers baseline codebase templates for Microservices and Libraries, using the ",(0,n.jsx)(t.em,{children:"create"})," strategy when onboarding new Codebases."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"CI Pipelines"})}),(0,n.jsxs)(t.td,{children:["The platform provides CI Pipelines for ",(0,n.jsx)(t.a,{href:"/docs/3.9/about-platform#features",children:"different technology stacks"}),"."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"CD Pipelines"})}),(0,n.jsxs)(t.td,{children:["KubeRocketCI allows you to design CD Pipelines (in Portal UI) for Microservices and defines the logic for artifact flow (promotion) from lower to higher environments. Artifact promotion can be performed automatically (",(0,n.jsx)(t.em,{children:"Autotests"}),"), manually (",(0,n.jsx)(t.em,{children:"User Approval"}),"), or using a combination of both."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"Autotests"})}),(0,n.jsxs)(t.td,{children:["KubeRocketCI provides a CI pipeline for autotests implemented in Java. These autotests can be used as ",(0,n.jsx)(t.em,{children:"Quality Gates"})," in CD Pipelines."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"Custom Pipeline Library"})}),(0,n.jsx)(t.td,{children:"You can extend KubeRocketCI pipelines by introducing a Custom Pipeline Library."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"Dynamic Environments"})}),(0,n.jsx)(t.td,{children:"KubeRocketCI's CD Pipelines can create and destroy environments based on user requests, allowing for flexible and dynamic deployment of applications."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"GitOps Approach"})}),(0,n.jsx)(t.td,{children:"The platform adopts a GitOps approach for CI/CD, using Git repositories as the single source of truth for infrastructure and application configuration. This practice enhances collaboration, simplifies the deployment process, and improves the auditability of changes."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"Monitoring and Observability"})}),(0,n.jsx)(t.td,{children:"The platform includes an observability stack that enables logging, monitoring, and tracing of applications and infrastructure. This helps in identifying issues early and maintaining the health and performance of the deployed applications."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"Security Covering Authentication, Authorization, and SSO for Platform Services"})}),(0,n.jsx)(t.td,{children:"KubeRocketCI implements robust security mechanisms, including authentication, authorization, and Single Sign-On (SSO) capabilities for all platform services. This ensures that access to the platform is secure and controlled, aligning with best practices for cloud-native application development."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"Static Application Security Testing (SAST)"})}),(0,n.jsxs)(t.td,{children:["KubeRocketCI integrates tools that perform ",(0,n.jsx)(t.a,{href:"/docs/3.9/operator-guide/devsecops/overview",children:"static analysis"})," of the source code to identify potential vulnerabilities early in the development process. This analysis is performed without executing the code and can pinpoint issues such as input validation errors, insecure dependencies, and other common vulnerabilities."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"Container Registries"})}),(0,n.jsxs)(t.td,{children:["KubeRocketCI demonstrates adaptability and interoperability with leading ",(0,n.jsx)(t.a,{href:"/docs/3.9/user-guide/manage-container-registries",children:"container registries"}),", empowering developers to select the most suitable tools and services based on their specific project requirements. The integration process is designed to be as simple as possible, making it easy for developers to connect their projects with the desired registries. The incorporation of these registries is pivotal in upholding the security, effectiveness, and dependability of the CI/CD pipeline."]})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>c});var i=s(96540);const n={},r=i.createContext(n);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);