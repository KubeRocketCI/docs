"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1696],{83829:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>n,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var r=t(74848),i=t(28453);const o={},n="Codebase Creation Issues",a={id:"operator-guide/troubleshooting/codebase-creation-issues",title:"Codebase Creation Issues",description:"This troubleshooting page covers issues related to codebases.",source:"@site/docs/operator-guide/troubleshooting/codebase-creation-issues.md",sourceDirName:"operator-guide/troubleshooting",slug:"/operator-guide/troubleshooting/codebase-creation-issues",permalink:"/docs/next/operator-guide/troubleshooting/codebase-creation-issues",draft:!1,unlisted:!1,editUrl:"https://github.com/KubeRocketCI/docs/edit/main/docs/operator-guide/troubleshooting/codebase-creation-issues.md",tags:[],version:"current",lastUpdatedBy:"Mykola Serdiuk",lastUpdatedAt:1721214787e3,frontMatter:{},sidebar:"operatorGuideSidebar",previous:{title:"Sync and Health Status Unknown",permalink:"/docs/next/operator-guide/troubleshooting/sync-health-status-unknown"},next:{title:"Forbidden Messages on the Overview Page",permalink:"/docs/next/operator-guide/troubleshooting/forbidden-messages"}},d={},c=[{value:"Problem",id:"problem",level:2},{value:"Cause",id:"cause",level:2},{value:"Solution",id:"solution",level:2},{value:"Related Articles",id:"related-articles",level:2}];function l(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"codebase-creation-issues",children:"Codebase Creation Issues"})}),"\n",(0,r.jsx)(s.p,{children:"This troubleshooting page covers issues related to codebases."}),"\n",(0,r.jsx)(s.h2,{id:"problem",children:"Problem"}),"\n",(0,r.jsx)(s.p,{children:"Application can't be added in the KubeRocketCI portal:"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"Insufficient permissions error",src:t(44772).A+"",title:"Insufficient permissions error",width:"1910",height:"1044"})}),"\n",(0,r.jsx)(s.h2,{id:"cause",children:"Cause"}),"\n",(0,r.jsx)(s.p,{children:"Multiple factors can contribute to this issue occurring:"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Short error"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:["Need at least read",":org"," scope"]}),(0,r.jsxs)(s.td,{children:["This error occurs when the token used for Git Server integration lacks specific rights. To resolve this issue, adjust the token rights or create a new token with the required set of permissions. Refer to ",(0,r.jsx)(s.a,{href:"../../user-guide/add-git-server/",children:"Manage Git Providers"})," for details. Ensure to set correct Git Server properties as described in ",(0,r.jsx)(s.a,{href:"../../user-guide/add-git-server/",children:"Manage Git Servers"}),"."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Name already exist"}),(0,r.jsx)(s.td,{children:"This error indicates that the application name you are trying to add in the KubeRocketCI portal already exists. Check if the application or codebase with the same name has been created previously. If necessary, choose a different name for your application or codebase to avoid naming conflicts."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Failed to push changes"}),(0,r.jsx)(s.td,{children:"This error might occur due to insufficient permissions or issues with the repository access. Ensure the token or SSH key used has the proper rights to push changes to the repository. Additionally, verify that the repository URL and branch specified in the codebase configuration are correct and accessible."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Invalid project ID"}),(0,r.jsx)(s.td,{children:'The "Invalid project ID" error message appears when creating a codebase with an incorrectly set repository relative path. To resolve this issue, ensure that the Git repository relative path is formatted correctly, prefixing the repository name with the respective account or organization name.'})]})]})]}),"\n",(0,r.jsx)(s.h2,{id:"solution",children:"Solution"}),"\n",(0,r.jsxs)(s.p,{children:["For instance, to address the ",(0,r.jsx)(s.code,{children:"Need at least read:org"})," scope issue:"]}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Adjust token rights or create a new token with the required set of permissions. Please refer to the ",(0,r.jsx)(s.a,{href:"/docs/next/user-guide/add-git-server",children:"Manage Git Providers"})," for details."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Ensure to set correct Git Server properties. The process of adding a Git Server is described in the ",(0,r.jsx)(s.a,{href:"/docs/next/user-guide/add-git-server",children:"Manage Git Servers"})," page."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Retry to create application."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"Codebase created",src:t(16351).A+"",title:"Codebase created",width:"1916",height:"1044"})}),"\n",(0,r.jsx)(s.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/docs/next/user-guide/add-git-server",children:"Manage GitServer"})}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},16351:(e,s,t)=>{t.d(s,{A:()=>r});const r=t.p+"assets/images/codebase_synced-284202f1301c36ad1b9bb62c47b3274e.png"},44772:(e,s,t)=>{t.d(s,{A:()=>r});const r=t.p+"assets/images/insufficient_permissions-db43a9f6bdc410b72693b60ea7652230.png"},28453:(e,s,t)=>{t.d(s,{R:()=>n,x:()=>a});var r=t(96540);const i={},o=r.createContext(i);function n(e){const s=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:n(e.components),r.createElement(o.Provider,{value:s},e.children)}}}]);