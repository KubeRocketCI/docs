"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[52834],{78376:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"operator-guide/cd/auto-stable-trigger-type","title":"Deployment Strategies Overview","description":"Deploying applications to production environments involves risks of downtime and service disruptions. To mitigate such issues and enhance stability, KubeRocketCI provides several deployment strategies.","source":"@site/docs/operator-guide/cd/auto-stable-trigger-type.md","sourceDirName":"operator-guide/cd","slug":"/operator-guide/cd/auto-stable-trigger-type","permalink":"/docs/next/operator-guide/cd/auto-stable-trigger-type","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/operator-guide/cd/auto-stable-trigger-type.md","tags":[],"version":"current","lastUpdatedBy":"Sergiy Kulanov","lastUpdatedAt":1737662090000,"frontMatter":{},"sidebar":"operatorGuideSidebar","previous":{"title":"Deploy RPM Packages","permalink":"/docs/next/operator-guide/cd/deploy-rpm"},"next":{"title":"Argo CD Integration","permalink":"/docs/next/operator-guide/cd/argocd-integration"}}');var s=i(74848),a=i(28453);const r={},o="Deployment Strategies Overview",l={},d=[{value:"Deployment Strategies in KubeRocketCI",id:"deployment-strategies-in-kuberocketci",level:2},{value:"Enable Auto-Stable Strategy",id:"enable-auto-stable-strategy",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Configure Deployment Flow",id:"configure-deployment-flow",level:2},{value:"Related Articles",id:"related-articles",level:2}];function c(e){const t={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components},{Head:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"deployment-strategies-overview",children:"Deployment Strategies Overview"})}),"\n",(0,s.jsx)(n,{children:(0,s.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/operator-guide/cd/auto-stable-trigger-type/"})}),"\n",(0,s.jsx)(t.p,{children:"Deploying applications to production environments involves risks of downtime and service disruptions. To mitigate such issues and enhance stability, KubeRocketCI provides several deployment strategies."}),"\n",(0,s.jsx)(t.h2,{id:"deployment-strategies-in-kuberocketci",children:"Deployment Strategies in KubeRocketCI"}),"\n",(0,s.jsx)(t.p,{children:"In KubeRocketCI, application deployment can be triggered once the new application version is released. Application deployment strategies are managed by the trigger type resource. There are three trigger types:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Manual"}),": Requires a user to manually initiate the deployment process after a new application version is ready."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Auto-deploy"}),": Automatically triggers the deployment pipeline as soon as a new application version is built, all the applications will deployed with latest version available."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Auto-stable"}),": This one is similar to ",(0,s.jsx)(t.strong,{children:"Auto-deploy"})," but features more complicated logic. In this trigger type, the newly released application version is deployed, whereas the rest of applications in the Environment will use the ",(0,s.jsx)(t.strong,{children:"Stable"})," image tag, even if they have an application image version marked as ",(0,s.jsx)(t.strong,{children:"Latest"}),". If there are no application images with the ",(0,s.jsx)(t.strong,{children:"Stable"})," tag available, the ",(0,s.jsx)(t.strong,{children:"Latest"})," application version will be used."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["The diagram below illustrates how the ",(0,s.jsx)(t.strong,{children:"Auto-deploy"})," trigger type works:"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Auto-deploy trigger type",src:i(4033).A+"",title:"Auto-deploy trigger type",width:"1368",height:"539"})}),"\n",(0,s.jsx)(t.p,{children:"As soon as a new application artifact is built, it is immediately deployed to the environment along with the rest of the applications using their latest versions."}),"\n",(0,s.jsx)(t.p,{children:"In this strategy, if several application versions were built in a short period of time, only the latest of them will be deployed."}),"\n",(0,s.jsxs)(t.p,{children:["The diagram below illustrates how the ",(0,s.jsx)(t.strong,{children:"Auto-stable"})," trigger type works:"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Auto-stable trigger type",src:i(6574).A+"",title:"Auto-stable trigger type",width:"1369",height:"539"})}),"\n",(0,s.jsxs)(t.p,{children:["In contrast to the ",(0,s.jsx)(t.strong,{children:"Auto-deploy"})," trigger type, where deploy pipelines always deploy the latest application version, ",(0,s.jsx)(t.strong,{children:"Auto-stable"})," can safeguard application stability by preventing deployment of latest application version if this version wasn't unstable. If there are several build pipelines running at a time, they are placed in a queue and deployed consequently."]}),"\n",(0,s.jsxs)(t.p,{children:["Understanding the difference between ",(0,s.jsx)(t.strong,{children:"Latest"})," and ",(0,s.jsx)(t.strong,{children:"Stable"})," tags is essential:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Latest"}),": Assigned to an application image as soon as a new version is built by developers and deployment process was initiated with this new application version. Application can have no tags if a new version is built but build pipeline wasn't completed successfully."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Stable"}),": The latest successfully deployed application. Application image gets the ",(0,s.jsx)(t.strong,{children:"Stable"})," tag when a new application image passes project's ",(0,s.jsx)(t.a,{href:"/docs/next/user-guide/autotest#add-autotest-as-a-quality-gate",children:"quality gates"}),". Only one application image can be stable at the same time."]}),"\n"]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["Each application can have only one ",(0,s.jsx)(t.strong,{children:"Latest"})," and one ",(0,s.jsx)(t.strong,{children:"Stable"})," version at a time. However, a single version can be marked as ",(0,s.jsx)(t.strong,{children:"Latest"})," and ",(0,s.jsx)(t.strong,{children:"Stable"})," at the same time. This typically occurs when a newly built version of the application passes all quality checks immediately after its release, making it both the most recent (",(0,s.jsx)(t.strong,{children:"Latest"}),") and the verified stable (",(0,s.jsx)(t.strong,{children:"Stable"}),") version."]})}),"\n",(0,s.jsx)(t.h2,{id:"enable-auto-stable-strategy",children:"Enable Auto-Stable Strategy"}),"\n",(0,s.jsxs)(t.p,{children:["Enabling the ",(0,s.jsx)(t.strong,{children:"Auto-stable"})," trigger type necessitates proper Environment configuration."]}),"\n",(0,s.jsx)(t.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(t.p,{children:["Before proceeding, ensure you already have at least two ",(0,s.jsx)(t.a,{href:"/docs/next/user-guide/add-application",children:"applications"})," created and added into one ",(0,s.jsx)(t.a,{href:"/docs/next/user-guide/manage-environments",children:"Environment"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"configure-deployment-flow",children:"Configure Deployment Flow"}),"\n",(0,s.jsx)(t.p,{children:"To enable the auto-stable deployment strategy, follow the steps below:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["When creating/editing Environment, set the ",(0,s.jsx)(t.strong,{children:"auto-stable"})," trigger type:"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Auto-stable trigger type",src:i(44116).A+"",title:"Auto-stable trigger type",width:"1922",height:"1114"})}),"\n",(0,s.jsxs)(t.ol,{start:"2",children:["\n",(0,s.jsxs)(t.li,{children:["Make sure you have an application with both ",(0,s.jsx)(t.strong,{children:"latest"})," and ",(0,s.jsx)(t.strong,{children:"stable"})," image tags:"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Stable and latest application tag",src:i(86934).A+"",title:"Stable and latest application tag",width:"1922",height:"1114"})}),"\n",(0,s.jsxs)(t.ol,{start:"3",children:["\n",(0,s.jsx)(t.li,{children:"Build one of your application that are included in the Environment:"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Application build",src:i(48918).A+"",title:"Application build",width:"1922",height:"1114"})}),"\n",(0,s.jsxs)(t.ol,{start:"4",children:["\n",(0,s.jsx)(t.li,{children:"View the deploy pipeline details to see that it deploys only stable application version:"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Applications image versions",src:i(15138).A+"",title:"Applications image versions",width:"1922",height:"1114"})}),"\n",(0,s.jsxs)(t.p,{children:["Note that ",(0,s.jsx)(t.strong,{children:"notifications-service"})," application, which has both both ",(0,s.jsx)(t.strong,{children:"Latest"})," and ",(0,s.jsx)(t.strong,{children:"Stable"})," images, was deployed with the stable version. While the application version 2 (latest) exists, it was deployed with the version 1 (stable)."]}),"\n",(0,s.jsx)(t.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/docs/next/user-guide/manage-environments",children:"Manage Deployment Flows"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/docs/next/user-guide/add-application",children:"Add Application"})}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},6574:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/auto-stable-trigger-type-scheme-877f868a1a7cf329515e43b10d5947b8.png"},44116:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/auto-stable-trigger-type-edb5550556fa0a528d2822e615957221.png"},4033:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/autodeploy-trigger-type-scheme-b66ccb7e2ed9dd935150fe0b367deb9d.png"},48918:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/build_application-8f80b0d186d907efdc65649eff18dc1c.png"},15138:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/pipeline-details-e745f3189a1754361fde219a5d19d4de.png"},86934:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/stable-and-latest-39f3f91dd01af81c9ddd87d8ccb7cfc8.png"},28453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>o});var n=i(96540);const s={},a=n.createContext(s);function r(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);