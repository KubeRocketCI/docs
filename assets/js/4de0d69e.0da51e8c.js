"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[32048],{67229:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>l,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var i=s(74848),n=s(28453);const o={},r="Modify GitOps Repository Path",d={id:"operator-guide/troubleshooting/modify-gitops-repo-path",title:"Modify GitOps Repository Path",description:"This page explains how to change the path of a GitOps repository after it has been created.",source:"@site/versioned_docs/version-3.10.0/operator-guide/troubleshooting/modify-gitops-repo-path.md",sourceDirName:"operator-guide/troubleshooting",slug:"/operator-guide/troubleshooting/modify-gitops-repo-path",permalink:"/docs/operator-guide/troubleshooting/modify-gitops-repo-path",draft:!1,unlisted:!1,editUrl:"https://github.com/KubeRocketCI/docs/edit/main/docs/operator-guide/troubleshooting/modify-gitops-repo-path.md",tags:[],version:"3.10.0",lastUpdatedBy:"Sergiy Kulanov",lastUpdatedAt:1729512744e3,frontMatter:{},sidebar:"operatorGuideSidebar",previous:{title:"Review Pipeline is Failed",permalink:"/docs/operator-guide/troubleshooting/review-pipeline-is-failed"}},a={},c=[{value:"Problem",id:"problem",level:2},{value:"Cause",id:"cause",level:2},{value:"Solution 1 (Modify the Codebase Custom Resource)",id:"solution-1-modify-the-codebase-custom-resource",level:2},{value:"Solution 2 (Delete and Recreate)",id:"solution-2-delete-and-recreate",level:2},{value:"Related Articles",id:"related-articles",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"modify-gitops-repository-path",children:"Modify GitOps Repository Path"})}),"\n",(0,i.jsxs)(t.p,{children:["This page explains how to change the path of a ",(0,i.jsx)(t.a,{href:"/docs/user-guide/gitops",children:"GitOps"})," repository after it has been created."]}),"\n",(0,i.jsx)(t.h2,{id:"problem",children:"Problem"}),"\n",(0,i.jsx)(t.p,{children:"The GitOps repository is located at an incorrect path:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"GitOps Repository Path",src:s(93081).A+"",title:"GitOps repository path",width:"3364",height:"1660"})}),"\n",(0,i.jsx)(t.h2,{id:"cause",children:"Cause"}),"\n",(0,i.jsx)(t.p,{children:"The GitOps repository path was either misconfigured at creation or needs to be modified as part of a migration or project restructuring."}),"\n",(0,i.jsx)(t.h2,{id:"solution-1-modify-the-codebase-custom-resource",children:"Solution 1 (Modify the Codebase Custom Resource)"}),"\n",(0,i.jsx)(t.p,{children:"This solution involves modifying the existing repository path in Codebase custom resource."}),"\n",(0,i.jsx)(t.p,{children:"To fix the problem, follow the steps below:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Navigate to the ",(0,i.jsx)(t.strong,{children:"Kubernetes"})," tab in the bottom left corner in Portal UI."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Kubernetes Tab",src:s(67770).A+"",title:"Kubernetes tab",width:"3364",height:"1660"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Navigate to ",(0,i.jsx)(t.strong,{children:"Cluster"})," -> ",(0,i.jsx)(t.strong,{children:"Custom Resources"}),"."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Custom Resources Tab",src:s(11351).A+"",title:"Custom resources tab",width:"3364",height:"1660"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Find and navigate to the ",(0,i.jsx)(t.code,{children:"Codebase"})," custom resource using the search field in the top right corner."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Search Tab",src:s(89326).A+"",title:"Search tab",width:"3364",height:"1660"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Find the ",(0,i.jsx)(t.code,{children:"Codebase"})," custom resource that corresponds to the GitOps repository."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"GitOps Custom Resource",src:s(2738).A+"",title:"GitOps custom resource",width:"3364",height:"1660"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Navigate to the resource and then press the ",(0,i.jsx)(t.strong,{children:"Edit"})," button in the top right corner."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Edit Button",src:s(24583).A+"",title:"Edit button",width:"3364",height:"1660"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["In the ",(0,i.jsx)(t.strong,{children:"Edit"})," window modify the ",(0,i.jsx)(t.code,{children:"gitUrlPath"})," field within the ",(0,i.jsx)(t.code,{children:"spec"})," section to change the GitOps repository path and then press the ",(0,i.jsx)(t.strong,{children:"Save and Apply"})," button."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Edit GitOps Repository Path",src:s(75306).A+"",title:"Edit GitOps repository path",width:"3364",height:"1660"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"With the path updated, the GitOps repository will be recreated at the new path on the designated Git Server."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"solution-2-delete-and-recreate",children:"Solution 2 (Delete and Recreate)"}),"\n",(0,i.jsx)(t.p,{children:"This solution involves deleting the existing GitOps repository and recreating it."}),"\n",(0,i.jsx)(t.p,{children:"To fix the problem, follow the steps below:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Navigate to the ",(0,i.jsx)(t.strong,{children:"Kubernetes"})," tab in the bottom left corner in Portal UI."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Kubernetes Tab",src:s(67770).A+"",title:"Kubernetes tab",width:"3364",height:"1660"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Navigate to ",(0,i.jsx)(t.strong,{children:"Cluster"})," -> ",(0,i.jsx)(t.strong,{children:"Custom Resources"}),"."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Custom Resources Tab",src:s(11351).A+"",title:"Custom resources tab",width:"3364",height:"1660"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Find and navigate to the ",(0,i.jsx)(t.code,{children:"Codebase"})," custom resource using the search field in the top right corner."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Search Tab",src:s(89326).A+"",title:"Search tab",width:"3364",height:"1660"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Find the ",(0,i.jsx)(t.code,{children:"Codebase"})," custom resource that corresponds to the GitOps repository."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"GitOps Custom Resource",src:s(2738).A+"",title:"GitOps custom resource",width:"3364",height:"1660"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Navigate to the resource and then press the ",(0,i.jsx)(t.strong,{children:"Delete"})," button in the top right corner."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Delete Button",src:s(69060).A+"",title:"Delete button",width:"3364",height:"1660"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Confirm the deletion by pressing the ",(0,i.jsx)(t.strong,{children:"Yes"})," button in the confirmation window."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Delete Confirmation",src:s(88215).A+"",title:"Delete confirmation",width:"3364",height:"1660"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Click the ",(0,i.jsx)(t.strong,{children:"Portal"})," tab in the bottom left corner. Navigate to ",(0,i.jsx)(t.strong,{children:"Configuration"})," -> ",(0,i.jsx)(t.strong,{children:"Deployment"})," -> ",(0,i.jsx)(t.strong,{children:"GitOps"})," and recreate the GitOps repository with the new desired path."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Create GitOps Repository",src:s(92089).A+"",title:"Create GitOps repository",width:"3364",height:"1660"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/user-guide/gitops",children:"Manage GitOps"})}),"\n"]})]})}function l(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},89326:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/codebase-crd-b1228d1ca5badc04b14d4f4927cf07d4.png"},88215:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/confirm-deletion-3edc99207d571256c721c56ca291a706.png"},11351:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/custom-resources-tab-3a80acdb6e2b9aacb4e9a86ba7f8e2df.png"},69060:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/delete-button-346ba1ba9e904d9f78b470e859dcb5c1.png"},24583:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/edit-button-8ea8ad84d1788635a0a187e2eabca682.png"},75306:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/edit-codebase-resource-11aa7aa52104b121b322a73cf9d74323.png"},2738:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/edp-gitops-cr-745eeaea690b75d55e79cff5de46a7a5.png"},93081:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/gitops-configuration-8eb43fb490ed166b3c6d80055bef0f20.png"},67770:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/kubernetes-tab-c1c248586ec517783d4303d136620972.png"},92089:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/recreate-gitops-repo-879c790dd71aa6e1541e22ebf88a1422.png"},28453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>d});var i=s(96540);const n={},o=i.createContext(n);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);