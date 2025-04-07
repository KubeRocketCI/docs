"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[30546],{30203:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>a,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>t,toc:()=>p});const t=JSON.parse('{"id":"user-guide/argo-cd-preview","title":"Argo CD Deployment Preview: Visualize Changes Before Deployment","description":"Learn how to use Argo CD\'s diff preview feature in KubeRocketCI deploy pipelines to inspect, verify, and approve Kubernetes manifests before deployment for enhanced GitOps safety.","source":"@site/versioned_docs/version-3.11/user-guide/argo-cd-preview.md","sourceDirName":"user-guide","slug":"/user-guide/argo-cd-preview","permalink":"/docs/user-guide/argo-cd-preview","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/user-guide/argo-cd-preview.md","tags":[],"version":"3.11","lastUpdatedBy":"Oleksandr_Stepanov@epam.com","lastUpdatedAt":1744029663000,"frontMatter":{"title":"Argo CD Deployment Preview: Visualize Changes Before Deployment","description":"Learn how to use Argo CD\'s diff preview feature in KubeRocketCI deploy pipelines to inspect, verify, and approve Kubernetes manifests before deployment for enhanced GitOps safety.","sidebar_label":"Argo CD Deployment Preview"},"sidebar":"userGuideSidebar","previous":{"title":"Application and Pipeline Statuses","permalink":"/docs/user-guide/application-and-pipeline-statuses"},"next":{"title":"Configuration Overview","permalink":"/docs/user-guide/configuration-overview"}}');var r=n(74848),s=n(28453);const o={title:"Argo CD Deployment Preview: Visualize Changes Before Deployment",description:"Learn how to use Argo CD's diff preview feature in KubeRocketCI deploy pipelines to inspect, verify, and approve Kubernetes manifests before deployment for enhanced GitOps safety.",sidebar_label:"Argo CD Deployment Preview"},l="Preview Argo CD Diff in Deploy Pipelines",a={},p=[{value:"Set Argo CD Diff Pipeline",id:"set-argo-cd-diff-pipeline",level:2},{value:"Pipeline Usage",id:"pipeline-usage",level:2},{value:"Related Articles",id:"related-articles",level:2}];function d(e){const i={a:"a",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.header,{children:(0,r.jsx)(i.h1,{id:"preview-argo-cd-diff-in-deploy-pipelines",children:"Preview Argo CD Diff in Deploy Pipelines"})}),"\n",(0,r.jsxs)(i.p,{children:["Comprehensive oversight of deployment procedures is critical when introducing changes to environments, particularly in production contexts. The ",(0,r.jsx)(i.strong,{children:"deploy-diff-approve"})," pipeline addresses this requirement by enabling a controlled deployment review process. Prior to approving or rejecting a deployment, the pipeline presents a link to the corresponding Argo CD Application resource in the logs. This integration allows operators to examine the precise Kubernetes resource changes that will be applied during deployment using Argo CD's native diff visualization capabilities."]}),"\n",(0,r.jsx)(i.p,{children:"This GitOps-aligned approach significantly enhances deployment control, minimizing the risk of failures and improving overall application stability through visual verification of changes before they reach production environments."}),"\n",(0,r.jsx)(i.h2,{id:"set-argo-cd-diff-pipeline",children:"Set Argo CD Diff Pipeline"}),"\n",(0,r.jsxs)(i.p,{children:["To leverage the ",(0,r.jsx)(i.strong,{children:"deploy-diff-approve"})," pipeline, select it when creating or editing an Environment:"]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{alt:"Create/update environment",src:n(60995).A+"",title:"Create/update environment",width:"1922",height:"1114"})}),"\n",(0,r.jsxs)(i.p,{children:["For advanced use cases where you need to incorporate the Argo CD diff functionality into a custom deploy pipeline, please refer to the ",(0,r.jsx)(i.a,{href:"/docs/operator-guide/cd/customize-deploy-pipeline",children:"Customize Deploy Pipeline"})," documentation. The ",(0,r.jsx)(i.a,{href:"https://github.com/epam/edp-tekton/blob/master/charts/pipelines-library/templates/pipelines/cd/deploy-diff-approve.yaml",children:"deploy-diff-approve"})," pipeline template provides a reference implementation that can be adapted to your specific requirements."]}),"\n",(0,r.jsx)(i.h2,{id:"pipeline-usage",children:"Pipeline Usage"}),"\n",(0,r.jsx)(i.p,{children:"To utilize the pipeline with Argo CD preview functionality, follow this sequence:"}),"\n",(0,r.jsxs)(i.ol,{children:["\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["Configure the ",(0,r.jsx)(i.strong,{children:"deploy-diff-approve"})," pipeline in your Environment as detailed in the ",(0,r.jsx)(i.a,{href:"#set-argo-cd-diff-pipeline",children:"previous section"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["Initiate the deployment of your application. For comprehensive deployment instructions, consult the ",(0,r.jsx)(i.a,{href:"/docs/quick-start/deploy-application#application-deployment",children:"Deploy Application"})," documentation."]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["Navigate to the Environment details page, select the ",(0,r.jsx)(i.strong,{children:"Pipelines"})," tab, and access the pipeline by selecting its name:"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{alt:"Click pipeline name",src:n(70317).A+"",title:"Click pipeline name",width:"1922",height:"1114"})}),"\n",(0,r.jsxs)(i.ol,{start:"4",children:["\n",(0,r.jsxs)(i.li,{children:["Within the Pipeline details page, locate the ",(0,r.jsx)(i.strong,{children:"approve-diff"})," Step within the ",(0,r.jsx)(i.strong,{children:"preview-changes"})," Task. The Argo CD application link will be displayed in the logs. Select this link to open the corresponding Argo CD application:"]}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{alt:"Argo CD link",src:n(99631).A+"",title:"Argo CD link",width:"1922",height:"1114"})}),"\n",(0,r.jsxs)(i.ol,{start:"5",children:["\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:"Authenticate with Argo CD if prompted."}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["In the Argo CD Application details interface, select the ",(0,r.jsx)(i.strong,{children:"Diff"})," button to view the comparison:"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{alt:"Open diff",src:n(59565).A+"",title:"Open diff",width:"1922",height:"1114"})}),"\n",(0,r.jsxs)(i.ol,{start:"7",children:["\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:"Review the Application diff visualization that displays:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Resources being added (highlighted in green)"}),"\n",(0,r.jsx)(i.li,{children:"Resources being removed (highlighted in red)"}),"\n",(0,r.jsx)(i.li,{children:"Resources being modified (showing both previous and new configurations)"}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:"Verify that these changes align with your expected deployment modifications:"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{alt:"View diff",src:n(33888).A+"",title:"View diff",width:"1922",height:"1114"})}),"\n",(0,r.jsxs)(i.ol,{start:"8",children:["\n",(0,r.jsx)(i.li,{children:"Return to the KubeRocketCI pipeline interface to approve or reject the deployment based on your review."}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"/docs/operator-guide/cd/customize-deploy-pipeline",children:"Customize Deploy Pipeline"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"/docs/operator-guide/cd/auto-stable-trigger-type",children:"Deployment Strategies in KubeRocketCI"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"/docs/operator-guide/cd/argocd-integration",children:"Argo CD Integration"})}),"\n"]})]})}function c(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},99631:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/argo-cd-link-0b0bf56ba0f355de0f6bf63715d47016.png"},70317:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/click-pipeline-f94bfd8ba5913ae89e2c8e1e0c58a3c2.png"},60995:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/create-update-environment-1711f45243ef0d9d5003339d57b1ebef.png"},59565:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/open-diff-26806ec9e8d14589d68c0ead7c672126.png"},33888:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/view-diff-7496c08dd0beb25a0f57fb0445c54b6f.png"},28453:(e,i,n)=>{n.d(i,{R:()=>o,x:()=>l});var t=n(96540);const r={},s=t.createContext(r);function o(e){const i=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(s.Provider,{value:i},e.children)}}}]);