"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[31457],{15276:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"quick-start/quick-start-overview","title":"Quick Start: Overview","description":"Introductory overview of the Quick Start guide for KubeRocketCI, covering the setup flow from prerequisites through platform installation, integration, to application deployment.","source":"@site/versioned_docs/version-3.10/quick-start/quick-start-overview.md","sourceDirName":"quick-start","slug":"/quick-start/quick-start-overview","permalink":"/docs/quick-start/quick-start-overview","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/quick-start/quick-start-overview.md","tags":[],"version":"3.10","lastUpdatedBy":"Oleksandr_Stepanov@epam.com","lastUpdatedAt":1740747157000,"frontMatter":{"title":"Quick Start: Overview","description":"Introductory overview of the Quick Start guide for KubeRocketCI, covering the setup flow from prerequisites through platform installation, integration, to application deployment.","sidebar_label":"Overview"},"sidebar":"quickStartSidebar","previous":{"title":"About KubeRocketCI","permalink":"/docs/about-platform"},"next":{"title":"Integrate SonarQube","permalink":"/docs/quick-start/platform-installation"}}');var r=i(74848),n=i(28453);const s={title:"Quick Start: Overview",description:"Introductory overview of the Quick Start guide for KubeRocketCI, covering the setup flow from prerequisites through platform installation, integration, to application deployment.",sidebar_label:"Overview"},a="Quick Start: Overview",l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Setup Flow",id:"setup-flow",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Starting Point",id:"starting-point",level:2}];function d(e){const t={a:"a",h1:"h1",h2:"h2",header:"header",li:"li",mermaid:"mermaid",ol:"ol",p:"p",strong:"strong",...(0,n.R)(),...e.components},{Head:i}=t;return i||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"quick-start-overview",children:"Quick Start: Overview"})}),"\n",(0,r.jsx)(i,{children:(0,r.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/quick-start/quick-start-overview/"})}),"\n",(0,r.jsx)(t.p,{children:"This page serves as an introductory part of the Quick Start guide. It outlines the core steps and reasons to perform them."}),"\n",(0,r.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsx)(t.p,{children:"The purpose of this guide is to provide a comprehensive overview of the KubeRocketCI platform and its key functionalities. By following this guide, users will gain a clear understanding of the platform's capabilities and be able to explore its features quickly. This guide is specifically designed for individuals who want to swiftly familiarize themselves with the KubeRocketCI platform."}),"\n",(0,r.jsx)(t.h2,{id:"setup-flow",children:"Setup Flow"}),"\n",(0,r.jsx)(t.p,{children:"The installation procedure of the platform can be divided into four logical parts:"}),"\n",(0,r.jsx)(t.mermaid,{value:"graph LR;\n    A(Prerequisites) --\x3e B(Platform Installation) --\x3e C(Integration) --\x3e D(Application Deployment)"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Prerequisites"}),": In this step, Tekton and Argo CD are installed to provide KubeRocketCI with CI/CD capabilities."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Platform Installation"}),": Here, we deploy the platform itself and configure it for work."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Integration"}),": This step involves integrating third-party tools with KubeRocketCI to provide the platform with a minimum functionality set."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Application Deployment"}),": In this final step, we create and deploy an application, which serves as the target endpoint of the entire guide."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["The guide is formally divided into two parts: ",(0,r.jsx)(t.strong,{children:"CI"})," and ",(0,r.jsx)(t.strong,{children:"CD"}),", corresponding to the stages of the pipeline that the platform supports at each moment."]}),"\n",(0,r.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(t.p,{children:["Before deploying KubeRocketCI, it is important to ensure that a local Kubernetes cluster is set up. We recommend allocating 4 CPUs and 8 GB of RAM to the cluster. Alternatively, you can use a cloud provider that offers a Kubernetes service with sufficient CPU and RAM capacity. For example, you can check out our ",(0,r.jsx)(t.a,{href:"https://www.youtube.com/watch?v=QjZoPnIKDtA",children:"video tutorial"})," where we demonstrate the installation of the platform via the ",(0,r.jsx)(t.a,{href:"/docs/operator-guide/install-via-civo",children:"Civo Marketplace"}),". This allows you to skip the installation part of the guide and proceed with adjusting integrations."]}),"\n",(0,r.jsx)(t.h2,{id:"starting-point",children:"Starting Point"}),"\n",(0,r.jsxs)(t.p,{children:["The first step of the guide is to prepare the cluster environment for the KubeRocketCI setup process by installing the Tekton tool. Once this is done, you can proceed with the installation of the platform itself. Detailed guidelines for the platform installation can be found in the ",(0,r.jsx)(t.a,{href:"/docs/quick-start/platform-installation",children:"Platform Installation"})," page. Alternatively, you can watch our ",(0,r.jsx)(t.a,{href:"https://www.youtube.com/watch?v=QjZoPnIKDtA",children:"video tutorial"})," which provides a clear demonstration of the installation process."]}),"\n",(0,r.jsx)(t.p,{children:"Good luck with your installation!"})]})}function u(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>a});var o=i(96540);const r={},n=o.createContext(r);function s(e){const t=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(n.Provider,{value:t},e.children)}}}]);