"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[88252],{20582:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"developer-guide/kubernetes-deployment","title":"Kubernetes Deployment","description":"This section provides a comprehensive overview of the KubeRocketCI deployment approach on a Kubernetes cluster. KubeRocketCI is designed and functions based on a set of key guiding principles:","source":"@site/versioned_docs/version-3.10/developer-guide/kubernetes-deployment.md","sourceDirName":"developer-guide","slug":"/developer-guide/kubernetes-deployment","permalink":"/docs/developer-guide/kubernetes-deployment","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/developer-guide/kubernetes-deployment.md","tags":[],"version":"3.10","lastUpdatedBy":"Sergiy Kulanov","lastUpdatedAt":1737665576000,"frontMatter":{},"sidebar":"developerGuideSidebar","previous":{"title":"Reference Architecture","permalink":"/docs/developer-guide/reference-architecture"},"next":{"title":"Reference CI/CD Pipeline","permalink":"/docs/developer-guide/reference-cicd-pipeline"}}');var o=t(74848),s=t(28453);const i={},l="Kubernetes Deployment",a={},d=[];function c(e){const n={a:"a",h1:"h1",header:"header",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{Head:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"kubernetes-deployment",children:"Kubernetes Deployment"})}),"\n",(0,o.jsx)(r,{children:(0,o.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/developer-guide/kubernetes-deployment/"})}),"\n",(0,o.jsx)(n.p,{children:"This section provides a comprehensive overview of the KubeRocketCI deployment approach on a Kubernetes cluster. KubeRocketCI is designed and functions based on a set of key guiding principles:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Operator Pattern Approach:"})," ",(0,o.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/extend-kubernetes/operator/",children:"Approach"})," is used for deployment and configuration, ensuring that the platform aligns with Kubernetes native methodologies (see schema below)."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Loosely Coupling:"})," KubeRocketCI comprises several loosely coupled operators responsible for different platform parts. These operators can be deployed independently, enabling the most straightforward platform customization and delivery approach."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Kubernetes Operator",src:t(40075).A+"",width:"3234",height:"2832"})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"The following deployment diagram illustrates the platform's core components, which provide the minimum functional capabilities required for the platform operation: build, push, deploy, and run applications. The platform relies on several mandatory dependencies:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Ingress:"})," An ingress controller responsible for routing traffic to the platform."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Tekton Stack:"})," Includes Tekton pipelines, triggers, dashboard, chains, etc."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"ArgoCD:"})," Responsible for GitOps deployment."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"KubeRocketCI Deployment Diagram",src:t(9040).A+"",width:"2586",height:"2013"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Codebase Operator:"})," Responsible for managing git repositories, versioning, and branching. It also implements Jira integration controller."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"CD Pipeline Operator:"})," Manages Continuous Delivery (CD) pipelines and CD stages (which is an abstraction of Kubernetes Namespace). Operator acts as the bridge between the artifact and deployment tools, like Argo CD. It defines the CD pipeline structure, artifacts promotion logic and triggers the pipeline execution."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Tekton Pipelines:"})," Manages Tekton pipelines and processes events (EventListener, Interceptor) from Version Control Systems. The pipelines are integrated with external tools like SonarQube, Nexus, etc."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"KubeRocketCI:"})," This is the User Interface (UI) component, built on top of Headlamp."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Business applications"})," are deployed on the platform using the CD Pipeline Operator and Argo CD. By default, the CD Pipeline Operator uses Argo CD as a deployment tool. However, it can be replaced with any other tool, like FluxCD, Spinnaker, etc. The target environment for the application deployment is a Kubernetes cluster where KubeRocketCI is deployed, but it can be any other Kubernetes cluster."]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},9040:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/deployment-diagram-851033ed9be72097384bbbb2d38e3456.png"},40075:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/operator-pattern-approach-d3c4101a7343e0b7574f95fe25d50692.png"},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var r=t(96540);const o={},s=r.createContext(o);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);