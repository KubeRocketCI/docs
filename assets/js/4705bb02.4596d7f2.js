"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[12803],{1918:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>d,default:()=>l,frontMatter:()=>r,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"operator-guide/troubleshooting/modify-gitops-repo-path","title":"Modify GitOps Repository Path","description":"Guide on how to change the GitOps repository path in KubeRocketCI, including steps for adjusting the Codebase custom resource and deleting and recreating the repository.","source":"@site/versioned_docs/version-3.9/operator-guide/troubleshooting/modify-gitops-repo-path.md","sourceDirName":"operator-guide/troubleshooting","slug":"/operator-guide/troubleshooting/modify-gitops-repo-path","permalink":"/docs/3.9/operator-guide/troubleshooting/modify-gitops-repo-path","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/operator-guide/troubleshooting/modify-gitops-repo-path.md","tags":[],"version":"3.9","lastUpdatedBy":"Oleksandr_Stepanov@epam.com","lastUpdatedAt":1740746844000,"frontMatter":{"title":"Modify GitOps Repository Path","description":"Guide on how to change the GitOps repository path in KubeRocketCI, including steps for adjusting the Codebase custom resource and deleting and recreating the repository.","sidebar_label":"Modify GitOps Repo Path"},"sidebar":"operatorGuideSidebar","previous":{"title":"Review Pipeline Failure","permalink":"/docs/3.9/operator-guide/troubleshooting/review-pipeline-is-failed"}}');var o=s(74848),n=s(28453);const r={title:"Modify GitOps Repository Path",description:"Guide on how to change the GitOps repository path in KubeRocketCI, including steps for adjusting the Codebase custom resource and deleting and recreating the repository.",sidebar_label:"Modify GitOps Repo Path"},d="Modify GitOps Repository Path",a={},c=[{value:"Problem",id:"problem",level:2},{value:"Cause",id:"cause",level:2},{value:"Solution 1 (Modify the Codebase Custom Resource)",id:"solution-1-modify-the-codebase-custom-resource",level:2},{value:"Solution 2 (Delete and Recreate)",id:"solution-2-delete-and-recreate",level:2},{value:"Related Articles",id:"related-articles",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components},{Head:i}=t;return i||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"modify-gitops-repository-path",children:"Modify GitOps Repository Path"})}),"\n",(0,o.jsx)(i,{children:(0,o.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/operator-guide/troubleshooting/modify-gitops-repo-path/"})}),"\n",(0,o.jsxs)(t.p,{children:["This page explains how to change the path of a ",(0,o.jsx)(t.a,{href:"/docs/3.9/user-guide/gitops",children:"GitOps"})," repository after it has been created."]}),"\n",(0,o.jsx)(t.h2,{id:"problem",children:"Problem"}),"\n",(0,o.jsx)(t.p,{children:"The GitOps repository is located at an incorrect path:"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"GitOps Repository Path",src:s(40644).A+"",title:"GitOps repository path",width:"3364",height:"1660"})}),"\n",(0,o.jsx)(t.h2,{id:"cause",children:"Cause"}),"\n",(0,o.jsx)(t.p,{children:"The GitOps repository path was either misconfigured at creation or needs to be modified as part of a migration or project restructuring."}),"\n",(0,o.jsx)(t.h2,{id:"solution-1-modify-the-codebase-custom-resource",children:"Solution 1 (Modify the Codebase Custom Resource)"}),"\n",(0,o.jsx)(t.p,{children:"This solution involves modifying the existing repository path in Codebase custom resource."}),"\n",(0,o.jsx)(t.p,{children:"To fix the problem, follow the steps below:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Navigate to the ",(0,o.jsx)(t.strong,{children:"Kubernetes"})," tab in the bottom left corner in Portal UI."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Kubernetes Tab",src:s(59659).A+"",title:"Kubernetes tab",width:"3364",height:"1660"})}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Navigate to ",(0,o.jsx)(t.strong,{children:"Cluster"})," -> ",(0,o.jsx)(t.strong,{children:"Custom Resources"}),"."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Custom Resources Tab",src:s(38326).A+"",title:"Custom resources tab",width:"3364",height:"1660"})}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Find and navigate to the ",(0,o.jsx)(t.code,{children:"Codebase"})," custom resource using the search field in the top right corner."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Search Tab",src:s(58043).A+"",title:"Search tab",width:"3364",height:"1660"})}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Find the ",(0,o.jsx)(t.code,{children:"Codebase"})," custom resource that corresponds to the GitOps repository."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"GitOps Custom Resource",src:s(41593).A+"",title:"GitOps custom resource",width:"3364",height:"1660"})}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Navigate to the resource and then press the ",(0,o.jsx)(t.strong,{children:"Edit"})," button in the top right corner."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Edit Button",src:s(96416).A+"",title:"Edit button",width:"3364",height:"1660"})}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["In the ",(0,o.jsx)(t.strong,{children:"Edit"})," window modify the ",(0,o.jsx)(t.code,{children:"gitUrlPath"})," field within the ",(0,o.jsx)(t.code,{children:"spec"})," section to change the GitOps repository path and then press the ",(0,o.jsx)(t.strong,{children:"Save and Apply"})," button."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Edit GitOps Repository Path",src:s(8611).A+"",title:"Edit GitOps repository path",width:"3364",height:"1660"})}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"With the path updated, the GitOps repository will be recreated at the new path on the designated Git Server."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"solution-2-delete-and-recreate",children:"Solution 2 (Delete and Recreate)"}),"\n",(0,o.jsx)(t.p,{children:"This solution involves deleting the existing GitOps repository and recreating it."}),"\n",(0,o.jsx)(t.p,{children:"To fix the problem, follow the steps below:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Navigate to the ",(0,o.jsx)(t.strong,{children:"Kubernetes"})," tab in the bottom left corner in Portal UI."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Kubernetes Tab",src:s(59659).A+"",title:"Kubernetes tab",width:"3364",height:"1660"})}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Navigate to ",(0,o.jsx)(t.strong,{children:"Cluster"})," -> ",(0,o.jsx)(t.strong,{children:"Custom Resources"}),"."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Custom Resources Tab",src:s(38326).A+"",title:"Custom resources tab",width:"3364",height:"1660"})}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Find and navigate to the ",(0,o.jsx)(t.code,{children:"Codebase"})," custom resource using the search field in the top right corner."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Search Tab",src:s(58043).A+"",title:"Search tab",width:"3364",height:"1660"})}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Find the ",(0,o.jsx)(t.code,{children:"Codebase"})," custom resource that corresponds to the GitOps repository."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"GitOps Custom Resource",src:s(41593).A+"",title:"GitOps custom resource",width:"3364",height:"1660"})}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Navigate to the resource and then press the ",(0,o.jsx)(t.strong,{children:"Delete"})," button in the top right corner."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Delete Button",src:s(48728).A+"",title:"Delete button",width:"3364",height:"1660"})}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Confirm the deletion by pressing the ",(0,o.jsx)(t.strong,{children:"Yes"})," button in the confirmation window."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Delete Confirmation",src:s(48570).A+"",title:"Delete confirmation",width:"3364",height:"1660"})}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Click the ",(0,o.jsx)(t.strong,{children:"Portal"})," tab in the bottom left corner. Navigate to ",(0,o.jsx)(t.strong,{children:"Configuration"})," -> ",(0,o.jsx)(t.strong,{children:"Deployment"})," -> ",(0,o.jsx)(t.strong,{children:"GitOps"})," and recreate the GitOps repository with the new desired path."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Create GitOps Repository",src:s(43884).A+"",title:"Create GitOps repository",width:"3364",height:"1660"})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"/docs/3.9/user-guide/gitops",children:"Manage GitOps"})}),"\n"]})]})}function l(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},58043:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/codebase-crd-b1228d1ca5badc04b14d4f4927cf07d4.png"},48570:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/confirm-deletion-3edc99207d571256c721c56ca291a706.png"},38326:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/custom-resources-tab-3a80acdb6e2b9aacb4e9a86ba7f8e2df.png"},48728:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/delete-button-346ba1ba9e904d9f78b470e859dcb5c1.png"},96416:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/edit-button-8ea8ad84d1788635a0a187e2eabca682.png"},8611:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/edit-codebase-resource-11aa7aa52104b121b322a73cf9d74323.png"},41593:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/edp-gitops-cr-745eeaea690b75d55e79cff5de46a7a5.png"},40644:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/gitops-configuration-8eb43fb490ed166b3c6d80055bef0f20.png"},59659:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/kubernetes-tab-c1c248586ec517783d4303d136620972.png"},43884:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/recreate-gitops-repo-879c790dd71aa6e1541e22ebf88a1422.png"},28453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>d});var i=s(96540);const o={},n=i.createContext(o);function r(e){const t=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);