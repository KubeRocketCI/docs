"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4464],{2354:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>n,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var o=r(74848),i=r(28453);const s={},n="Application Already Exists Error (Gerrit VCS)",l={id:"operator-guide/troubleshooting/troubleshoot-applications",title:"Application Already Exists Error (Gerrit VCS)",description:"Problem",source:"@site/versioned_docs/version-3.9.0/operator-guide/troubleshooting/troubleshoot-applications.md",sourceDirName:"operator-guide/troubleshooting",slug:"/operator-guide/troubleshooting/troubleshoot-applications",permalink:"/docs/operator-guide/troubleshooting/troubleshoot-applications",draft:!1,unlisted:!1,editUrl:"https://github.com/KubeRocketCI/docs/edit/main/docs/operator-guide/troubleshooting/troubleshoot-applications.md",tags:[],version:"3.9.0",lastUpdatedBy:"Sergiy Kulanov",lastUpdatedAt:1719645984e3,frontMatter:{},sidebar:"operatorGuideSidebar",previous:{title:"Resource Observability Issue",permalink:"/docs/operator-guide/troubleshooting/resource-observability"},next:{title:"Codebase Build Process is Failed",permalink:"/docs/operator-guide/troubleshooting/application-not-built"}},a={},c=[{value:"Problem",id:"problem",level:2},{value:"Cause",id:"cause",level:2},{value:"Solution",id:"solution",level:2},{value:"Related Articles",id:"related-articles",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"application-already-exists-error-gerrit-vcs",children:"Application Already Exists Error (Gerrit VCS)"}),"\n",(0,o.jsx)(t.h2,{id:"problem",children:"Problem"}),"\n",(0,o.jsx)(t.p,{children:"User receives an error message when creating applications using Gerrit as a Git Server provider."}),"\n",(0,o.jsx)(t.h2,{id:"cause",children:"Cause"}),"\n",(0,o.jsx)(t.p,{children:"Gerrit operator might get stuck during its work."}),"\n",(0,o.jsx)(t.h2,{id:"solution",children:"Solution"}),"\n",(0,o.jsx)(t.p,{children:"Restarting the Gerrit-related pods can be a solution to the problem:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Check the ",(0,o.jsx)(t.code,{children:"GerritProject"}),", ",(0,o.jsx)(t.code,{children:"CodebaseImageStream"}),", ",(0,o.jsx)(t.code,{children:"CodebaseBranch"}),", and ",(0,o.jsx)(t.code,{children:"Codebase"})," custom resources related to the previously created application:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"kubectl get CodebaseBranch -n edp\nkubectl get CodebaseImageStream -n edp\nkubectl get Codebase -n edp\nkubectl get GerritProject -n edp\n"})}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Delete the custom resources that relate to the problem application using the ",(0,o.jsx)(t.code,{children:"kubectl delete"})," command."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"Check the pods in your project namespace:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"kubectl get pods -n edp\n"})}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Delete the ",(0,o.jsx)(t.code,{children:"gerrit-operator"})," and ",(0,o.jsx)(t.code,{children:"gerrit"})," pods so the replica set will be able to spin up new pods:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"kubectl get pods -n edp\n"})}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"Create the application again. Now it is supposed to create application successfully."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"/docs/user-guide/add-application",children:"Add Application"})}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>n,x:()=>l});var o=r(96540);const i={},s=o.createContext(i);function n(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:n(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);