"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6817],{30826:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>a});var i=t(74848),s=t(28453);const o={},l="Deploy Application",r={id:"quick-start/deploy-application",title:"Deploy Application",description:"Now, let's proceed to deploy our first application. This page offers detailed instructions on how to create an environment and deploy the application within it.",source:"@site/docs/quick-start/deploy-application.md",sourceDirName:"quick-start",slug:"/quick-start/deploy-application",permalink:"/docs/next/quick-start/deploy-application",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"quickStartSidebar",previous:{title:"Integrate Argo CD",permalink:"/docs/next/quick-start/integrate-argocd"},next:{title:"Basic Concepts",permalink:"/docs/next/basic-concepts"}},c={},a=[{value:"Create GitOps Repository",id:"create-gitops-repository",level:2},{value:"Create Environment",id:"create-environment",level:2},{value:"Application Deployment",id:"application-deployment",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"deploy-application",children:"Deploy Application"}),"\n",(0,i.jsx)(n.p,{children:"Now, let's proceed to deploy our first application. This page offers detailed instructions on how to create an environment and deploy the application within it."}),"\n",(0,i.jsx)(n.h2,{id:"create-gitops-repository",children:"Create GitOps Repository"}),"\n",(0,i.jsx)(n.p,{children:"As a prerequisite, create a GitOps repository in your GitHub account. KubeRocketCI Portal adheres to the GitOps approach when working with environments. In a GitOps repository, values are saved to redefine the default behavior (parameters) of deployment for each environment. The creation of a GitOps repository involves the following two steps:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the UI Portal, navigate to ",(0,i.jsx)(n.strong,{children:"Configuration"})," -> ",(0,i.jsx)(n.strong,{children:"Deployment"})," -> ",(0,i.jsx)(n.strong,{children:"GitOps"}),":"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"GitOps tab",src:t(24874).A+"",title:"GitOps tab",width:"1919",height:"919"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Define the following values and click ",(0,i.jsx)(n.strong,{children:"Save"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Git server: ",(0,i.jsx)(n.code,{children:"github"})]}),"\n",(0,i.jsxs)(n.li,{children:["Git repo relative path: ",(0,i.jsx)(n.code,{children:"github_account_name"})]}),"\n",(0,i.jsxs)(n.li,{children:["Repository Name: ",(0,i.jsx)(n.code,{children:"edp-gitops"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Add GitOps repository",src:t(75546).A+"",title:"Add GitOps repository",width:"1920",height:"924"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"create-environment",children:"Create Environment"}),"\n",(0,i.jsx)(n.p,{children:"To create an environment, follow the steps below:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the UI Portal, navigate to ",(0,i.jsx)(n.strong,{children:"Environments"})," and click the ",(0,i.jsx)(n.strong,{children:"+ CREATE ENVIRONMENT"})," button:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Environments section",src:t(41448).A+"",title:"Environments section",width:"1919",height:"928"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.strong,{children:"Create CD Pipeline"})," window, enter the pipeline name and click the ",(0,i.jsx)(n.strong,{children:"Proceed"})," button:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Pipelines tab",src:t(44005).A+"",title:"Pipelines tab",width:"1919",height:"925"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.strong,{children:"Applications"})," tab, select the go-application and main branch:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Applications tab",src:t(65947).A+"",title:"Applications tab",width:"1914",height:"926"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.strong,{children:"Stages"})," tab, click the ",(0,i.jsx)(n.strong,{children:"Add Stage"})," button."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Define the following values and click ",(0,i.jsx)(n.strong,{children:"Apply"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Cluster: ",(0,i.jsx)(n.code,{children:"in-cluster"})]}),"\n",(0,i.jsxs)(n.li,{children:["Stage name: ",(0,i.jsx)(n.code,{children:"dev"})]}),"\n",(0,i.jsxs)(n.li,{children:["Namespace: ",(0,i.jsx)(n.code,{children:"edp-my-go-gin-app-dev"})]}),"\n",(0,i.jsxs)(n.li,{children:["Description: ",(0,i.jsx)(n.code,{children:"Development stage"})]}),"\n",(0,i.jsxs)(n.li,{children:["Trigger type: ",(0,i.jsx)(n.code,{children:"Manual"})]}),"\n",(0,i.jsxs)(n.li,{children:["Pipeline template: ",(0,i.jsx)(n.code,{children:"deploy"})]}),"\n",(0,i.jsxs)(n.li,{children:["Quality gate type: ",(0,i.jsx)(n.code,{children:"Manual"})]}),"\n",(0,i.jsxs)(n.li,{children:["Step name: ",(0,i.jsx)(n.code,{children:"dev"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Create Stage window",src:t(28367).A+"",title:"Create Stage window",width:"956",height:"584"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.strong,{children:"Stages"})," tab, click the ",(0,i.jsx)(n.strong,{children:"Apply"})," button."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"application-deployment",children:"Application Deployment"}),"\n",(0,i.jsx)(n.p,{children:"To Deploy application, follow the steps below:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"In the Environments list, click the Environment name:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Environments list",src:t(95224).A+"",title:"Environments list",width:"1915",height:"924"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"In the Environment details page, click the stage name to enter the stage details:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Environment details",src:t(92356).A+"",title:"Environment details",width:"1916",height:"918"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Once you enter the stage details, proceed to deploy the application:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Select an application;"}),"\n",(0,i.jsx)(n.li,{children:"Select the Image stream version;"}),"\n",(0,i.jsxs)(n.li,{children:["Click the ",(0,i.jsx)(n.strong,{children:"Deploy"})," button."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Deploying application",src:t(47144).A+"",title:"Deploying application",width:"1918",height:"924"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Congratulations on completing the Quick Start guide! We hope you found this journey enjoyable."}),"\n",(0,i.jsxs)(n.p,{children:["Now that you have a good understanding of how KubeRocketCI works, you can further enhance its capabilities by integrating it with ",(0,i.jsx)(n.a,{href:"/docs/next/operator-guide/artifacts-management/nexus-sonatype",children:"Nexus"}),". Additionally, explore other functionalities detailed in our ",(0,i.jsx)(n.a,{href:"/docs/next/use-cases/",children:"Use Cases"})," section. If you're eager to unlock the full potential of KubeRocketCI, navigate to the ",(0,i.jsx)(n.a,{href:"/docs/next/operator-guide/",children:"Operator Guide"})," to fine-tune your KubeRocketCI for your specific requirements!"]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},75546:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/add_gitops-5289e0a3e08e16cea07d5b61a151518f.png"},65947:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/applications_tab-6c42a9b70e9c4cd8b006616e1b493a32.png"},41448:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/create_environment-2886b8f844a352224987c7ab3add81c6.png"},47144:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/deploy_application-623924d842f7e243797b5a4b638c0601.png"},92356:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/environment_details-47ed077b0bd3ecacfc8e9c4ce7599675.png"},95224:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/environment_list-6d02bcab1a3e050e7212299c75516321.png"},24874:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/gitops_section-3b8dfab9d48263847a45cd8be21a5914.png"},44005:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/pipelines_tab-c8f5e17800ae133f5f492469cc04cbe1.png"},28367:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/stages_tab-1e3bc5be9d8def05846a333c01d5562e.png"},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>r});var i=t(96540);const s={},o=i.createContext(s);function l(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);