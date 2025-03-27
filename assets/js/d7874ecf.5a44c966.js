"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[16553],{70565:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});const o=JSON.parse('{"id":"operator-guide/upgrade/upgrade-edp-3.7","title":"Upgrade EDP v3.6 to 3.7","description":"Guide on upgrading EDP to version 3.7, including steps for updating Custom Resource Definitions and performing the upgrade procedure.","source":"@site/versioned_docs/version-3.11/operator-guide/upgrade/upgrade-edp-3.7.md","sourceDirName":"operator-guide/upgrade","slug":"/operator-guide/upgrade/upgrade-edp-3.7","permalink":"/docs/operator-guide/upgrade/upgrade-edp-3.7","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/operator-guide/upgrade/upgrade-edp-3.7.md","tags":[],"version":"3.11","lastUpdatedBy":"Mykola Serdiuk","lastUpdatedAt":1743077202000,"frontMatter":{"title":"Upgrade EDP v3.6 to 3.7","description":"Guide on upgrading EDP to version 3.7, including steps for updating Custom Resource Definitions and performing the upgrade procedure.","sidebar_label":"v3.6 to 3.7"},"sidebar":"operatorGuideSidebar","previous":{"title":"v3.7 to 3.8","permalink":"/docs/operator-guide/upgrade/upgrade-edp-3.8"},"next":{"title":"v3.5 to 3.6","permalink":"/docs/operator-guide/upgrade/upgrade-edp-3.6"}}');var n=t(74848),d=t(28453);const i={title:"Upgrade EDP v3.6 to 3.7",description:"Guide on upgrading EDP to version 3.7, including steps for updating Custom Resource Definitions and performing the upgrade procedure.",sidebar_label:"v3.6 to 3.7"},a="Upgrade EDP v3.6 to 3.7",s={},p=[];function u(e){const r={admonition:"admonition",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,d.R)(),...e.components},{Head:t}=r;return t||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"upgrade-edp-v36-to-37",children:"Upgrade EDP v3.6 to 3.7"})}),"\n",(0,n.jsx)(t,{children:(0,n.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/operator-guide/upgrade/upgrade-edp-3.7"})}),"\n",(0,n.jsx)(r.admonition,{type:"warning",children:(0,n.jsx)(r.p,{children:"We suggest backing up the EDP environment before starting the upgrade procedure."})}),"\n",(0,n.jsx)(r.p,{children:"This section provides detailed instructions for upgrading the EPAM Delivery Platform to version 3.7.5. Follow the steps and requirements outlined below:"}),"\n",(0,n.jsx)(r.p,{children:"To upgrade EDP to the v3.7.5, run the following command:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"helm upgrade edp epamedp/edp-install -n edp --values values.yaml --version=3.7.5\n"})}),"\n",(0,n.jsx)(r.admonition,{type:"note",children:(0,n.jsxs)(r.p,{children:["To verify the installation, it is possible to test the deployment before applying it to the cluster with the ",(0,n.jsx)(r.code,{children:"--dry-run"})," tag:",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(r.code,{children:"helm upgrade edp epamedp/edp-install -n edp --values values.yaml --version=3.7.5 --dry-run"})]})})]})}function c(e={}){const{wrapper:r}={...(0,d.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>a});var o=t(96540);const n={},d=o.createContext(n);function i(e){const r=o.useContext(d);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),o.createElement(d.Provider,{value:r},e.children)}}}]);