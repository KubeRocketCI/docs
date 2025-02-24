"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[26653],{13351:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"quick-start/deploy-application","title":"Deploy Application","description":"Now, let\'s proceed to deploy our first application. This page offers detailed instructions on how to create an environment and deploy the application within it.","source":"@site/versioned_docs/version-3.10/quick-start/deploy-application.md","sourceDirName":"quick-start","slug":"/quick-start/deploy-application","permalink":"/docs/quick-start/deploy-application","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/quick-start/deploy-application.md","tags":[],"version":"3.10","lastUpdatedBy":"Sergiy Kulanov","lastUpdatedAt":1737665576000,"frontMatter":{},"sidebar":"quickStartSidebar","previous":{"title":"Integrate Argo CD","permalink":"/docs/quick-start/integrate-argocd"},"next":{"title":"Basic Concepts","permalink":"/docs/basic-concepts"}}');var s=t(74848),o=t(28453);const l={},c="Deploy Application",r={},a=[{value:"Create GitOps Repository",id:"create-gitops-repository",level:2},{value:"Create Deployment Flow",id:"create-deployment-flow",level:2},{value:"Application Deployment",id:"application-deployment",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components},{Head:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"deploy-application",children:"Deploy Application"})}),"\n",(0,s.jsx)(i,{children:(0,s.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/quick-start/deploy-application/"})}),"\n",(0,s.jsx)(n.p,{children:"Now, let's proceed to deploy our first application. This page offers detailed instructions on how to create an environment and deploy the application within it."}),"\n",(0,s.jsx)(n.h2,{id:"create-gitops-repository",children:"Create GitOps Repository"}),"\n",(0,s.jsx)(n.p,{children:"As a prerequisite, create a GitOps repository in your GitHub account. KubeRocketCI Portal adheres to the GitOps approach when working with environments. In a GitOps repository, values are saved to redefine the default behavior (parameters) of deployment for each environment. The creation of a GitOps repository involves the following two steps:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In the UI Portal, navigate to ",(0,s.jsx)(n.strong,{children:"Configuration"})," -> ",(0,s.jsx)(n.strong,{children:"Deployment"})," -> ",(0,s.jsx)(n.strong,{children:"GitOps"})," and click ",(0,s.jsx)(n.strong,{children:"+ Add GitOps repository"}),":"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"GitOps tab",src:t(83737).A+"",title:"GitOps tab",width:"1922",height:"1114"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Define the following values and click ",(0,s.jsx)(n.strong,{children:"Save"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Git server: ",(0,s.jsx)(n.code,{children:"github"})]}),"\n",(0,s.jsxs)(n.li,{children:["Git repo relative path: ",(0,s.jsx)(n.code,{children:"github_account_name"})]}),"\n",(0,s.jsxs)(n.li,{children:["Repository Name: ",(0,s.jsx)(n.code,{children:"edp-gitops"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"GitOps tab",src:t(97390).A+"",title:"GitOps tab",width:"1922",height:"1114"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"create-deployment-flow",children:"Create Deployment Flow"}),"\n",(0,s.jsx)(n.p,{children:"To create a deployment flow, follow the steps below:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In the UI Portal, navigate to ",(0,s.jsx)(n.strong,{children:"Deployment Flows"})," and click the ",(0,s.jsx)(n.strong,{children:"+ Create deployment flow"})," button:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Deployment flows section",src:t(89555).A+"",title:"Deployment Flows section",width:"1922",height:"1114"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.strong,{children:"Create deployment flow"})," window, enter the pipeline name and click the ",(0,s.jsx)(n.strong,{children:"Next"})," button:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Enter name tab",src:t(44096).A+"",title:"Enter name tab",width:"1922",height:"1114"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.strong,{children:"Add applications"})," tab, select the my-go-gin-app application, main branch, and click ",(0,s.jsx)(n.strong,{children:"Create"}),":"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Applications tab",src:t(62636).A+"",title:"Applications tab",width:"1922",height:"1114"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Once the deployment flow is created, click the ",(0,s.jsx)(n.strong,{children:"Go to deployment flow"})," button on the congratulations window:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Congratulations window",src:t(17452).A+"",title:"Congratulations window",width:"1922",height:"1114"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.strong,{children:"Deployment flows"})," section, click the ",(0,s.jsx)(n.strong,{children:"Create environment"})," button:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Create environment",src:t(11085).A+"",title:"Create environment",width:"1922",height:"1114"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["On the ",(0,s.jsx)(n.strong,{children:"Configure stages"})," tab, define the following values and click ",(0,s.jsx)(n.strong,{children:"Next"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Cluster: ",(0,s.jsx)(n.code,{children:"in-cluster"})]}),"\n",(0,s.jsxs)(n.li,{children:["Environment name: ",(0,s.jsx)(n.code,{children:"dev"})]}),"\n",(0,s.jsxs)(n.li,{children:["Namespace: ",(0,s.jsx)(n.code,{children:"edp-my-go-gin-app-dev"})]}),"\n",(0,s.jsxs)(n.li,{children:["Description: ",(0,s.jsx)(n.code,{children:"Development stage"})]}),"\n",(0,s.jsxs)(n.li,{children:["Trigger type: ",(0,s.jsx)(n.code,{children:"Manual"})]}),"\n",(0,s.jsxs)(n.li,{children:["Deploy Pipeline template: ",(0,s.jsx)(n.code,{children:"deploy"})]}),"\n",(0,s.jsxs)(n.li,{children:["Clean Pipeline template: ",(0,s.jsx)(n.code,{children:"clean"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Create environment window",src:t(70592).A+"",title:"Create environment window",width:"1922",height:"1114"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["On the ",(0,s.jsx)(n.strong,{children:"Add quality gates"})," tab, define the quality gates and click ",(0,s.jsx)(n.strong,{children:"Create"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Quality gate type: ",(0,s.jsx)(n.code,{children:"Manual"})]}),"\n",(0,s.jsxs)(n.li,{children:["Step name: ",(0,s.jsx)(n.code,{children:"dev"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Define quality gates window",src:t(94127).A+"",title:"Define quality gates window",width:"1922",height:"1114"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["On the congratulations window, click ",(0,s.jsx)(n.strong,{children:"Go to environment"}),":"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Go to environment",src:t(34537).A+"",title:"Go to environment",width:"1922",height:"1114"})}),"\n",(0,s.jsx)(n.p,{children:"The created deployment flow will be added to the deployment flows list."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"application-deployment",children:"Application Deployment"}),"\n",(0,s.jsx)(n.p,{children:"To deploy application, follow the steps below:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"In the deployment flows section, click the deployment flow name:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Deployment flows list",src:t(79351).A+"",title:"Deployment flows list",width:"1922",height:"1114"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"In the deployment flow details page, click the environment name to enter the environment details page:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Deployment flow details",src:t(54333).A+"",title:"Deployment flow details",width:"1922",height:"1114"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Once you enter the environment details page, proceed to deploy the application:"}),"\n",(0,s.jsxs)(n.p,{children:["a. Click the ",(0,s.jsx)(n.strong,{children:"Configure deploy"})," button;"]}),"\n",(0,s.jsx)(n.p,{children:"b. Select the Image stream version;"}),"\n",(0,s.jsxs)(n.p,{children:["c. Click the ",(0,s.jsx)(n.strong,{children:"Start deploy"})," button."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Deploying application",src:t(69127).A+"",title:"Deploying application",width:"1922",height:"1114"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Congratulations on completing the Quick Start guide! We hope you found this journey enjoyable."}),"\n",(0,s.jsxs)(n.p,{children:["Now that you have a good understanding of how KubeRocketCI works, you can further enhance its capabilities by integrating it with ",(0,s.jsx)(n.a,{href:"/docs/operator-guide/artifacts-management/nexus-sonatype",children:"Nexus"}),". Additionally, explore other functionalities detailed in our ",(0,s.jsx)(n.a,{href:"/docs/use-cases/",children:"Use Cases"})," section. If you're eager to unlock the full potential of KubeRocketCI, navigate to the ",(0,s.jsx)(n.a,{href:"/docs/operator-guide/",children:"Operator Guide"})," to fine-tune your KubeRocketCI for your specific requirements!"]})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},97390:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/add_gitops_repository-3d249798cdebba4b1d6f83d80fd72baf.png"},62636:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/applications_tab-19e1eb9e025d56c805130ebb570254b2.png"},11085:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/create-environment-37e336c5b44957671f1545812912ba32.png"},89555:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/create_environment-57e5f7b20fc6ed5c04d943bb2f288d17.png"},94127:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/define-quality-gates-de9a1c77f1bc8bd8f7d71ac063983bb5.png"},69127:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/deploy_application-a61dc3f3440311c527040f45faaf5eff.png"},17452:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/deployment-flow-congratulations-window-efe3f8225bde7cb7834d428dcbaa2b69.png"},54333:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/environment_details-049bc96aac641c62d7d712c482b1b308.png"},79351:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/environment_list-cf18c8fa499a8161623bff46ee421703.png"},83737:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/gitops_section-9381a5db3c2eed8c94be02354af54292.png"},34537:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/go-to-environment-fec2cd9a1484f9458ecb09c3ec714a69.png"},44096:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/pipelines_tab-292ac1570b4471470e9fe30152f188ca.png"},70592:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/stages_tab-95cf2326f6b426c3a0368ef57f33a256.png"},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>c});var i=t(96540);const s={},o=i.createContext(s);function l(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);