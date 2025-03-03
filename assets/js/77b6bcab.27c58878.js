"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[68573],{96940:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>d,default:()=>c,frontMatter:()=>s,metadata:()=>n,toc:()=>p});const n=JSON.parse('{"id":"operator-guide/upgrade/upgrade-edp-3.6","title":"Upgrade EDP v3.5 to 3.6","description":"Guide on upgrading EDP to version 3.6, including steps for updating Custom Resource Definitions and performing the upgrade procedure.","source":"@site/versioned_docs/version-3.9/operator-guide/upgrade/upgrade-edp-3.6.md","sourceDirName":"operator-guide/upgrade","slug":"/operator-guide/upgrade/upgrade-edp-3.6","permalink":"/docs/3.9/operator-guide/upgrade/upgrade-edp-3.6","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/operator-guide/upgrade/upgrade-edp-3.6.md","tags":[],"version":"3.9","lastUpdatedBy":"Oleksandr_Stepanov@epam.com","lastUpdatedAt":1741021682000,"frontMatter":{"title":"Upgrade EDP v3.5 to 3.6","description":"Guide on upgrading EDP to version 3.6, including steps for updating Custom Resource Definitions and performing the upgrade procedure.","sidebar_label":"v3.5 to 3.6"},"sidebar":"operatorGuideSidebar","previous":{"title":"v3.6 to 3.7","permalink":"/docs/3.9/operator-guide/upgrade/upgrade-edp-3.7"},"next":{"title":"v3.4 to 3.5","permalink":"/docs/3.9/operator-guide/upgrade/upgrade-edp-3.5"}}');var a=r(74848),o=r(28453);const s={title:"Upgrade EDP v3.5 to 3.6",description:"Guide on upgrading EDP to version 3.6, including steps for updating Custom Resource Definitions and performing the upgrade procedure.",sidebar_label:"v3.5 to 3.6"},d="Upgrade EDP v3.5 to 3.6",i={},p=[];function l(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.R)(),...e.components},{Head:r}=t;return r||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"upgrade-edp-v35-to-36",children:"Upgrade EDP v3.5 to 3.6"})}),"\n",(0,a.jsx)(r,{children:(0,a.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/operator-guide/upgrade/upgrade-edp-3.6"})}),"\n",(0,a.jsx)(t.admonition,{type:"warning",children:(0,a.jsx)(t.p,{children:"We suggest backing up the EDP environment before starting the upgrade procedure."})}),"\n",(0,a.jsx)(t.p,{children:"This section provides detailed instructions for upgrading the EPAM Delivery Platform to version 3.6.0. Follow the steps and requirements outlined below:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Update Custom Resource Definitions (CRDs). Run the following command to apply all the necessary CRDs to the cluster:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"kubectl apply -f https://raw.githubusercontent.com/epam/edp-codebase-operator/v2.20.0/deploy-templates/crds/v2.edp.epam.com_codebases.yaml\n"})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Familiarize yourself with the updated structure of the ",(0,a.jsx)(t.a,{href:"https://github.com/epam/edp-install/blob/v3.6.0/deploy-templates/values.yaml#L38",children:"values.yaml"})," file and adjust it accordingly:"]}),"\n",(0,a.jsxs)(t.p,{children:["2.1 A new parameter called ",(0,a.jsx)(t.a,{href:"https://github.com/epam/edp-install/blob/v3.6.0/deploy-templates/values.yaml#L38",children:"space"})," has been added to the ",(0,a.jsx)(t.code,{children:"DockerRegistry"})," section. It is designed to form URLs in CodebaseImageStreams. This parameter is set the same as the ",(0,a.jsx)(t.code,{children:"EPAM Delivery Platform"})," namespace name. Ensure you define the ",(0,a.jsx)(t.code,{children:"space"})," parameter prior to the update."]}),"\n",(0,a.jsx)(t.admonition,{type:"warning",children:(0,a.jsxs)(t.p,{children:["This ",(0,a.jsx)(t.a,{href:"https://github.com/epam/edp-install/blob/v3.6.0/deploy-templates/values.yaml#L38",children:"parameter"})," is a significant change and must be set before the update."]})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",children:'global:\n  dockerRegistry:\n    type: "harbor"\n    url: "registry.example.com"\n    space: "edp"\n'})}),"\n",(0,a.jsxs)(t.p,{children:["2.2 Sub components, such as ",(0,a.jsx)(t.a,{href:"https://github.com/epam/edp-sonar-operator",children:"sonar-operator"}),", ",(0,a.jsx)(t.a,{href:"https://github.com/epam/edp-nexus-operator",children:"nexus-operator"}),", and ",(0,a.jsx)(t.a,{href:"https://github.com/epam/edp-keycloak-operator",children:"keycloak-operator"}),", have been removed since dependencies are no longer provisioned by the ",(0,a.jsx)(t.a,{href:"https://github.com/epam/edp-install/blob/v3.6.0/deploy-templates/values.yaml",children:"edp-install"})," Helm Chart. To install and integrate shared components with EDP, please use the ",(0,a.jsx)(t.a,{href:"https://github.com/epam/edp-cluster-add-ons",children:"edp-cluster-add-ons"})," approach or refer to the ",(0,a.jsx)(t.a,{href:"/docs/3.9/operator-guide/code-quality/sonarqube",children:"SonarQube Integration"})," and ",(0,a.jsx)(t.a,{href:"/docs/3.9/operator-guide/artifacts-management/nexus-sonatype",children:"Nexus Sonatype Integration"})," documentation pages."]}),"\n",(0,a.jsxs)(t.p,{children:["2.3 The Argo CD integration dependency has been deleted as now we implement it using ",(0,a.jsx)(t.a,{href:"https://github.com/epam/edp-cluster-add-ons",children:"edp-cluster-add-ons"})," approach. To install and integrate Argo CD as a shared component, use the ",(0,a.jsx)(t.a,{href:"https://github.com/epam/edp-cluster-add-ons",children:"edp-cluster-add-ons"})," approach."]}),"\n",(0,a.jsxs)(t.p,{children:["2.4 The handling of secrets for stages namespaces in the ",(0,a.jsx)(t.a,{href:"https://github.com/epam/edp-cd-pipeline-operator/blob/v2.17.0/deploy-templates/values.yaml#L102",children:"cd-pipeline-operator"})," has been updated. The parameter ",(0,a.jsx)(t.code,{children:"manageSecrets"})," has been replaced with ",(0,a.jsx)(t.code,{children:"secretManager"}),". If your environment previously utilized this parameter, manually modify it from ",(0,a.jsx)(t.code,{children:"manageSecrets: true"})," to ",(0,a.jsx)(t.code,{children:"secretManager: own"}),". Otherwise, set it to ",(0,a.jsx)(t.code,{children:"secretManager: none"}),":"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",children:"cd-pipeline-operator:\n  # -- flag that indicates whether the operator should manage secrets for stages;\n  # own - just copy secrets;\n  # eso - secrete will be managed by External Secrets Operator(operator should be installed in the cluster);\n  # none - not enable secrets management logic;\n  secretManager: none\n"})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"To upgrade EDP to the v3.6.0, run the following command:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"helm upgrade edp epamedp/edp-install -n edp --values values.yaml --version=3.6.0\n"})}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsxs)(t.p,{children:["To verify the installation, it is possible to test the deployment before applying it to the cluster with the ",(0,a.jsx)(t.code,{children:"--dry-run"})," tag:",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(t.code,{children:"helm upgrade edp epamedp/edp-install -n edp --values values.yaml --version=3.6.0 --dry-run"})]})}),"\n"]}),"\n"]})]})}function c(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>d});var n=r(96540);const a={},o=n.createContext(a);function s(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);