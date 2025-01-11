"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[67772],{55340:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"operator-guide/disaster-recovery/velero-restore-platform","title":"Restore KubeRocketCI Tenant With Velero","description":"You can use the Velero tool to restore a platform tenant. Explore the main steps for backup and restoring below.","source":"@site/docs/operator-guide/disaster-recovery/velero-restore-platform.md","sourceDirName":"operator-guide/disaster-recovery","slug":"/operator-guide/disaster-recovery/velero-restore-platform","permalink":"/docs/next/operator-guide/disaster-recovery/velero-restore-platform","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/operator-guide/disaster-recovery/velero-restore-platform.md","tags":[],"version":"current","lastUpdatedBy":"Sergiy Kulanov","lastUpdatedAt":1719322619000,"frontMatter":{},"sidebar":"operatorGuideSidebar","previous":{"title":"IAM Roles for Velero Kubernetes Service Accounts","permalink":"/docs/next/operator-guide/disaster-recovery/velero-irsa"},"next":{"title":"Upgrade KubeRocketCI v3.9 to 3.10","permalink":"/docs/next/operator-guide/upgrade/upgrade-edp-3.10"}}');var n=r(74848),s=r(28453);const a={},l="Restore KubeRocketCI Tenant With Velero",i={},c=[];function d(e){const t={a:"a",code:"code",h1:"h1",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"restore-kuberocketci-tenant-with-velero",children:"Restore KubeRocketCI Tenant With Velero"})}),"\n",(0,n.jsx)(t.p,{children:"You can use the Velero tool to restore a platform tenant. Explore the main steps for backup and restoring below."}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Delete all related entities in ",(0,n.jsx)(t.strong,{children:"Keycloak"}),": realm and clients from ",(0,n.jsx)(t.strong,{children:"master/openshift"})," realms. Navigate to the entities list in the Keycloak, select the necessary ones, and click the deletion icon on the entity overview page.\nIf there are customized configs in Keycloak, save them before making backup."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Remove keycloak realm",src:r(2522).A+"",title:"Remove keycloak realm",width:"1488",height:"681"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["To restore KubeRocketCI, install and configure the Velero tool. Please refer to the ",(0,n.jsx)(t.a,{href:"/docs/next/operator-guide/disaster-recovery/install-velero",children:"Install Velero"})," documentation for details."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Remove all locks for operators. Delete all config maps that have ",(0,n.jsx)(t.code,{children:"<OPERATOR_NAME>-operator-lock"})," names. Then restart all pods with operators, or simply run the following command:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"kubectl -n edp delete cm $(kubectl -n edp get cm | grep 'operator-lock' | awk '{print $1}')\n"})}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},2522:(e,t,r)=>{r.d(t,{A:()=>o});const o=r.p+"assets/images/delete-keycloak-realm-509beb4856a54326a77b11a717f88710.png"},28453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>l});var o=r(96540);const n={},s=o.createContext(n);function a(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);