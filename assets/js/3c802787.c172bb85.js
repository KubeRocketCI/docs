"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[46931],{33212:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>t,toc:()=>p});const t=JSON.parse('{"id":"operator-guide/upgrade/upgrade-edp-3.3","title":"Upgrade EDP v3.2 to 3.3","description":"Guide on upgrading EDP to version 3.3, including steps for updating Custom Resource Definitions and performing the upgrade procedure.","source":"@site/docs/operator-guide/upgrade/upgrade-edp-3.3.md","sourceDirName":"operator-guide/upgrade","slug":"/operator-guide/upgrade/upgrade-edp-3.3","permalink":"/docs/next/operator-guide/upgrade/upgrade-edp-3.3","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/operator-guide/upgrade/upgrade-edp-3.3.md","tags":[],"version":"current","lastUpdatedBy":"Oleksandr_Stepanov@epam.com","lastUpdatedAt":1740746844000,"frontMatter":{"title":"Upgrade EDP v3.2 to 3.3","description":"Guide on upgrading EDP to version 3.3, including steps for updating Custom Resource Definitions and performing the upgrade procedure.","sidebar_label":"Upgrade EDP to 3.3"},"sidebar":"operatorGuideSidebar","previous":{"title":"Upgrade EDP to 3.4","permalink":"/docs/next/operator-guide/upgrade/upgrade-edp-3.4"},"next":{"title":"Upgrade EDP to 3.2","permalink":"/docs/next/operator-guide/upgrade/upgrade-edp-3.2"}}');var o=r(74848),d=r(28453);const i={title:"Upgrade EDP v3.2 to 3.3",description:"Guide on upgrading EDP to version 3.3, including steps for updating Custom Resource Definitions and performing the upgrade procedure.",sidebar_label:"Upgrade EDP to 3.3"},a="Upgrade EDP v3.2 to 3.3",s={},p=[];function c(e){const n={admonition:"admonition",code:"code",h1:"h1",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,d.R)(),...e.components},{Head:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"upgrade-edp-v32-to-33",children:"Upgrade EDP v3.2 to 3.3"})}),"\n",(0,o.jsx)(r,{children:(0,o.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/operator-guide/upgrade/upgrade-edp-3.3/"})}),"\n",(0,o.jsx)(n.admonition,{type:"warning",children:(0,o.jsx)(n.p,{children:"We suggest making a backup of the EDP environment before starting the upgrade procedure."})}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"We currently disabled cache volumes for go and npm in the EDP 3.3 release."})}),"\n",(0,o.jsx)(n.p,{children:"This section provides the details on the EDP upgrade to v3.3.0. Explore the actions and requirements below."}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Update Custom Resource Definitions (CRDs). Run the following command to apply all necessary CRDs to the cluster:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"kubectl apply -f https://raw.githubusercontent.com/epam/edp-codebase-operator/v2.16.0/deploy-templates/crds/v2.edp.epam.com_codebases.yaml\nkubectl apply -f https://raw.githubusercontent.com/epam/edp-jenkins-operator/v2.15.0/deploy-templates/crds/v2.edp.epam.com_jenkins.yaml\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"If you use Gerrit VCS, delete the corresponding resource due to changes in annotations:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"kubectl -n edp delete EDPComponent gerrit\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The deployment will create a new EDPComponent called ",(0,o.jsx)(n.code,{children:"gerrit"})," instead."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"To upgrade EDP to the v3.3.0, run the following command:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"helm upgrade edp epamedp/edp-install -n edp --values values.yaml --version=3.3.0\n"})}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["To verify the installation, it is possible to test the deployment before applying it to the cluster with the ",(0,o.jsx)(n.code,{children:"--dry-run"})," tag:",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(n.code,{children:"helm upgrade edp epamedp/edp-install -n edp --values values.yaml --version=3.3.0  --dry-run"})]})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["In EDP v3.3.0, a new feature was introduced allowing manual pipeline re-triggering by sending a comment with ",(0,o.jsx)(n.code,{children:"/recheck"}),".\nTo enable the re-trigger feature for applications that were added before the upgrade, please proceed with the following:"]}),"\n",(0,o.jsxs)(n.p,{children:["4.1 For Gerrit VCS, add the following event to the ",(0,o.jsx)(n.code,{children:"webhooks.config"})," configuration file in the ",(0,o.jsx)(n.code,{children:"All-Projects"})," repository:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'[remote "commentadded"]\n  url = http://el-gerrit-listener:8080\n  event = comment-added\n'})}),"\n",(0,o.jsxs)(n.p,{children:["4.2 For GitHub VCS, check the ",(0,o.jsx)(n.code,{children:"Issue comments"})," permission for each webhook in every application added before the EDP upgrade to 3.3.0."]}),"\n",(0,o.jsxs)(n.p,{children:["4.3 For GitLab VCS, check the ",(0,o.jsx)(n.code,{children:"Comments"})," permission for each webhook in every application added before the EDP upgrade to 3.3.0."]}),"\n"]}),"\n"]})]})}function l(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>a});var t=r(96540);const o={},d=t.createContext(o);function i(e){const n=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);