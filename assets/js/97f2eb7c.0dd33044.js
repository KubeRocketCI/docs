"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9448],{11529:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var n=i(74848),s=i(28453);const r={},o="Reference CI/CD Pipeline",a={id:"developer-guide/reference-cicd-pipeline",title:"Reference CI/CD Pipeline",description:"This document provides an in-depth overview of the Continuous Integration and Continuous Delivery (CI/CD) pipeline reference architecture implemented within the KubeRocketCI. The pipeline is designed to facilitate efficient and automated software deployment across diverse environments, leveraging a suite of tools and methodologies for enhanced reliability, scalability, and security.",source:"@site/docs/developer-guide/reference-cicd-pipeline.md",sourceDirName:"developer-guide",slug:"/developer-guide/reference-cicd-pipeline",permalink:"/docs/next/developer-guide/reference-cicd-pipeline",draft:!1,unlisted:!1,editUrl:"https://github.com/KubeRocketCI/docs/edit/main/docs/developer-guide/reference-cicd-pipeline.md",tags:[],version:"current",lastUpdatedBy:"Mykola Serdiuk",lastUpdatedAt:1718899086e3,frontMatter:{},sidebar:"developerGuideSidebar",previous:{title:"Kubernetes Deployment",permalink:"/docs/next/developer-guide/kubernetes-deployment"},next:{title:"KubeRocketCI Reference Architecture on AWS",permalink:"/docs/next/developer-guide/aws-reference-architecture"}},c={},l=[{value:"CI/CD Pipeline Architecture",id:"cicd-pipeline-architecture",level:2}];function d(e){const t={admonition:"admonition",em:"em",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"reference-cicd-pipeline",children:"Reference CI/CD Pipeline"})}),"\n",(0,n.jsx)(t.p,{children:"This document provides an in-depth overview of the Continuous Integration and Continuous Delivery (CI/CD) pipeline reference architecture implemented within the KubeRocketCI. The pipeline is designed to facilitate efficient and automated software deployment across diverse environments, leveraging a suite of tools and methodologies for enhanced reliability, scalability, and security."}),"\n",(0,n.jsx)(t.h2,{id:"cicd-pipeline-architecture",children:"CI/CD Pipeline Architecture"}),"\n",(0,n.jsx)(t.p,{children:"The CI/CD pipeline within KubeRocketCI orchestrates the software delivery process, encompassing several sequential stages to ensure robustness and reliability."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"KubeRocketCI CI/CD Pipeline",src:i(36807).A+"",width:"3135",height:"1377"})}),"\n",(0,n.jsx)(t.p,{children:"The CI/CD Pipeline follows a modular and scalable architecture that leverages various tools to ensure the reliability and efficiency of the software delivery process. The architecture can be divided into stages, each responsible for specific tasks. Explore the key components involved in the pipeline and their functionalities:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Source Code:"})," The pipeline starts with the source code, representing the application's codebase. Developers commit their changes to the source code repository, triggering the pipeline."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Validate Commit Message:"})," The commit message validation component checks the format and content of the commit message. It ensures the commit message follows the correct format and includes a valid Tracking Issue key. It helps maintain a standardized commit message format throughout the application development."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Build:"})," The Build component compiles the source code, runs unit tests, and generates the application artifact. It consumes the artifact from the Artifact Repository (Nexus), ensuring consistent and reliable builds."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"SAST with SonarQube:"})," The Static Analysis Security Testing (SAST) component utilizes SonarQube to analyze the source code for potential security vulnerabilities, code smells, and quality issues. This step helps identify and address security or code quality issues early in development."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"SCA:"})," The Software Composition Analysis (SCA) component performs dependency analysis using cdxgen, Dependency-Track, Semgrep, and DefectDojo. It checks for known vulnerabilities or license compliance issues in the application's dependencies. By identifying and resolving these issues, it ensures the security and stability of the software."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Publish:"})," The Publish component publishes the application artifact to the Artifact Repository. It posts Docker images to the Docker Registry and stores binary artifacts in the Nexus Repository. This process ensures that the artifacts are securely stored and easily accessed for future deployments."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Deploy:"})," The Deploy component uses Argo CD or Tekton to deploy applications to target environments in Kubernetes, leveraging Helm charts to ensure seamless deployment. Deploy to Test/Quality Assurance/Performance Environments: The final stages of the pipeline involve deploying the application to different environments for testing and quality assurance purposes. The results of the tests are consolidated and reported to the Report Portal, facilitating efficient test reporting and analysis."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"The overall architecture of the CI/CD Pipeline ensures a streamlined and automated software delivery process, from source code to deployment. It provides developers with the necessary tools and processes to ensure their applications' quality, security, and scalability. Furthermore, Tekton Chains enhances supply chain security by signing and generating in-toto metadata that verifies the integrity of artifacts and the CI/CD Pipeline."}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["The tools mentioned in this document are just examples and can be replaced with other tools that offer similar functionality. For instance, instead of ",(0,n.jsx)(t.strong,{children:"Harbor"})," for the Docker Registry, it is possible to use ",(0,n.jsx)(t.strong,{children:"AWS ECR"}),". Consider using ",(0,n.jsx)(t.strong,{children:"Azure Artifacts"})," or ",(0,n.jsx)(t.strong,{children:"JFrog Artifactory"})," instead of ",(0,n.jsx)(t.strong,{children:"Nexus"})," for the artifact repository. Instead of setting up an self-managed instance of ",(0,n.jsx)(t.strong,{children:"SonarQube"}),", leverage ",(0,n.jsx)(t.em,{children:"SonarCloud"}),", the cloud-based version of SonarQube, as an alternative. The CI/CD Pipeline architecture is flexible and adaptable, allowing the use of different tools based on specific project requirements and platform preferences."]})})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},36807:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/reference-cicd-pipeline-57ce5f12fa46feb76bb8ccffbe0e2172.png"},28453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>a});var n=i(96540);const s={},r=n.createContext(s);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);