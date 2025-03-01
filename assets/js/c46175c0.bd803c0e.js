"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[11668],{77210:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"operator-guide/disaster-recovery/velero-restore-platform","title":"Restore KubeRocketCI Tenant With Velero","description":"Learn how to effectively restore a KubeRocketCI tenant using Velero, including steps for deleting Keycloak entities and removing operator locks.","source":"@site/versioned_docs/version-3.9/operator-guide/disaster-recovery/velero-restore-platform.md","sourceDirName":"operator-guide/disaster-recovery","slug":"/operator-guide/disaster-recovery/velero-restore-platform","permalink":"/docs/3.9/operator-guide/disaster-recovery/velero-restore-platform","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/operator-guide/disaster-recovery/velero-restore-platform.md","tags":[],"version":"3.9","lastUpdatedBy":"Sergiy Kulanov","lastUpdatedAt":1740847812000,"frontMatter":{"title":"Restore KubeRocketCI Tenant With Velero","description":"Learn how to effectively restore a KubeRocketCI tenant using Velero, including steps for deleting Keycloak entities and removing operator locks.","sidebar_label":"Restore KubeRocketCI Tenant With Velero"},"sidebar":"operatorGuideSidebar","previous":{"title":"IAM Roles for Velero","permalink":"/docs/3.9/operator-guide/disaster-recovery/velero-irsa"},"next":{"title":"Upgrade KubeRocketCI to 3.10","permalink":"/docs/3.9/operator-guide/upgrade/upgrade-edp-3.10"}}');var n=o(74848),s=o(28453);const i={title:"Restore KubeRocketCI Tenant With Velero",description:"Learn how to effectively restore a KubeRocketCI tenant using Velero, including steps for deleting Keycloak entities and removing operator locks.",sidebar_label:"Restore KubeRocketCI Tenant With Velero"},a="Restore KubeRocketCI Tenant With Velero",l={},c=[];function d(e){const t={a:"a",code:"code",h1:"h1",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components},{Head:r}=t;return r||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"restore-kuberocketci-tenant-with-velero",children:"Restore KubeRocketCI Tenant With Velero"})}),"\n",(0,n.jsx)(r,{children:(0,n.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/operator-guide/disaster-recovery/velero-restore-platform"})}),"\n",(0,n.jsx)(t.p,{children:"You can use the Velero tool to restore a platform tenant. Explore the main steps for backup and restoring below."}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Delete all related entities in ",(0,n.jsx)(t.strong,{children:"Keycloak"}),": realm and clients from ",(0,n.jsx)(t.strong,{children:"master/openshift"})," realms. Navigate to the entities list in the Keycloak, select the necessary ones, and click the deletion icon on the entity overview page.\nIf there are customized configs in Keycloak, save them before making backup."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Remove keycloak realm",src:o(19117).A+"",title:"Remove keycloak realm",width:"1488",height:"681"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["To restore KubeRocketCI, install and configure the Velero tool. Please refer to the ",(0,n.jsx)(t.a,{href:"/docs/3.9/operator-guide/disaster-recovery/install-velero",children:"Install Velero"})," documentation for details."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Remove all locks for operators. Delete all config maps that have ",(0,n.jsx)(t.code,{children:"<OPERATOR_NAME>-operator-lock"})," names. Then restart all pods with operators, or simply run the following command:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"kubectl -n edp delete cm $(kubectl -n edp get cm | grep 'operator-lock' | awk '{print $1}')\n"})}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},19117:(e,t,o)=>{o.d(t,{A:()=>r});const r=o.p+"assets/images/delete-keycloak-realm-509beb4856a54326a77b11a717f88710.png"},28453:(e,t,o)=>{o.d(t,{R:()=>i,x:()=>a});var r=o(96540);const n={},s=r.createContext(n);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);