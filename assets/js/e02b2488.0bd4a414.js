"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[23502],{56305:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>i,frontMatter:()=>s,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"operator-guide/upgrade/upgrade-edp-3.4","title":"Upgrade EDP v3.3 to 3.4","description":"We suggest making a backup of the EDP environment before starting the upgrade procedure.","source":"@site/docs/operator-guide/upgrade/upgrade-edp-3.4.md","sourceDirName":"operator-guide/upgrade","slug":"/operator-guide/upgrade/upgrade-edp-3.4","permalink":"/docs/next/operator-guide/upgrade/upgrade-edp-3.4","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/operator-guide/upgrade/upgrade-edp-3.4.md","tags":[],"version":"current","lastUpdatedBy":"Sergiy Kulanov","lastUpdatedAt":1719487399000,"frontMatter":{},"sidebar":"operatorGuideSidebar","previous":{"title":"Upgrade EDP v3.4 to 3.5","permalink":"/docs/next/operator-guide/upgrade/upgrade-edp-3.5"},"next":{"title":"Upgrade EDP v3.2 to 3.3","permalink":"/docs/next/operator-guide/upgrade/upgrade-edp-3.3"}}');var o=a(74848),n=a(28453);const s={},p="Upgrade EDP v3.3 to 3.4",l={},c=[];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,n.R)(),...e.components},{Details:a}=t;return a||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"upgrade-edp-v33-to-34",children:"Upgrade EDP v3.3 to 3.4"})}),"\n",(0,o.jsx)(t.admonition,{type:"warning",children:(0,o.jsx)(t.p,{children:"We suggest making a backup of the EDP environment before starting the upgrade procedure."})}),"\n",(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsxs)(t.p,{children:["Pay attention that the following components: ",(0,o.jsx)(t.code,{children:"perf-operator"}),", ",(0,o.jsx)(t.code,{children:"edp-admin-console"}),", ",(0,o.jsx)(t.code,{children:"edp-admin-console-operator"}),", and ",(0,o.jsx)(t.code,{children:"edp-jenkins-operator"})," are deprecated and should be additionally migrated in order to avoid their deletion. For migration details, please refer to the ",(0,o.jsx)(t.a,{href:"/docs/next/operator-guide/upgrade/migrate-ci-pipelines-from-jenkins-to-tekton",children:"Migrate CI Pipelines From Jenkins to Tekton"})," instruction."]})}),"\n",(0,o.jsx)(t.p,{children:"This section provides the details on the EDP upgrade to v3.4.1. Explore the actions and requirements below."}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"Update Custom Resource Definitions (CRDs). Run the following command to apply all necessary CRDs to the cluster:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"kubectl apply -f https://raw.githubusercontent.com/epam/edp-cd-pipeline-operator/v2.15.0/deploy-templates/crds/v2.edp.epam.com_cdpipelines.yaml\nkubectl apply -f https://raw.githubusercontent.com/epam/edp-cd-pipeline-operator/v2.15.0/deploy-templates/crds/v2.edp.epam.com_stages.yaml\nkubectl apply -f https://raw.githubusercontent.com/epam/edp-keycloak-operator/v1.17.0/deploy-templates/crds/v1.edp.epam.com_clusterkeycloakrealms.yaml\nkubectl apply -f https://raw.githubusercontent.com/epam/edp-keycloak-operator/v1.17.0/deploy-templates/crds/v1.edp.epam.com_clusterkeycloaks.yaml\nkubectl apply -f https://raw.githubusercontent.com/epam/edp-keycloak-operator/v1.17.0/deploy-templates/crds/v1.edp.epam.com_keycloakauthflows.yaml\nkubectl apply -f https://raw.githubusercontent.com/epam/edp-keycloak-operator/v1.17.0/deploy-templates/crds/v1.edp.epam.com_keycloakclients.yaml\nkubectl apply -f https://raw.githubusercontent.com/epam/edp-keycloak-operator/v1.17.0/deploy-templates/crds/v1.edp.epam.com_keycloakclientscopes.yaml\nkubectl apply -f https://raw.githubusercontent.com/epam/edp-keycloak-operator/v1.17.0/deploy-templates/crds/v1.edp.epam.com_keycloakrealmcomponents.yaml\nkubectl apply -f https://raw.githubusercontent.com/epam/edp-keycloak-operator/v1.17.0/deploy-templates/crds/v1.edp.epam.com_keycloakrealmgroups.yaml\nkubectl apply -f https://raw.githubusercontent.com/epam/edp-keycloak-operator/v1.17.0/deploy-templates/crds/v1.edp.epam.com_keycloakrealmidentityproviders.yaml\nkubectl apply -f https://raw.githubusercontent.com/epam/edp-keycloak-operator/v1.17.0/deploy-templates/crds/v1.edp.epam.com_keycloakrealmrolebatches.yaml\nkubectl apply -f https://raw.githubusercontent.com/epam/edp-keycloak-operator/v1.17.0/deploy-templates/crds/v1.edp.epam.com_keycloakrealmroles.yaml\nkubectl apply -f https://raw.githubusercontent.com/epam/edp-keycloak-operator/v1.17.0/deploy-templates/crds/v1.edp.epam.com_keycloakrealms.yaml\nkubectl apply -f https://raw.githubusercontent.com/epam/edp-keycloak-operator/v1.17.0/deploy-templates/crds/v1.edp.epam.com_keycloakrealmusers.yaml\nkubectl apply -f https://raw.githubusercontent.com/epam/edp-keycloak-operator/v1.17.0/deploy-templates/crds/v1.edp.epam.com_keycloaks.yaml\nkubectl apply -f https://raw.githubusercontent.com/epam/edp-codebase-operator/v2.17.0/deploy-templates/crds/v2.edp.epam.com_templates.yaml\nkubectl apply -f https://raw.githubusercontent.com/epam/edp-codebase-operator/v2.17.0/deploy-templates/crds/v2.edp.epam.com_codebasebranches.yaml\nkubectl apply -f https://raw.githubusercontent.com/epam/edp-codebase-operator/v2.17.0/deploy-templates/crds/v2.edp.epam.com_codebaseimagestreams.yaml\nkubectl apply -f https://raw.githubusercontent.com/epam/edp-codebase-operator/v2.17.0/deploy-templates/crds/v2.edp.epam.com_codebases.yaml\nkubectl apply -f https://raw.githubusercontent.com/epam/edp-codebase-operator/v2.17.0/deploy-templates/crds/v2.edp.epam.com_gitservers.yaml\nkubectl apply -f https://raw.githubusercontent.com/epam/edp-codebase-operator/v2.17.0/deploy-templates/crds/v2.edp.epam.com_jiraservers.yaml\nkubectl apply -f https://raw.githubusercontent.com/epam/edp-gerrit-operator/v2.16.0/deploy-templates/crds/v2.edp.epam.com_gerrits.yaml\n"})}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"Remove deprecated components:"}),"\n",(0,o.jsxs)(a,{children:[(0,o.jsx)("summary",{children:(0,o.jsx)("b",{children:"View: values.yaml"})}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-yaml",children:"perf-operator:\n  enabled: false\nadmin-console-operator:\n  enabled: false\njenkins-operator:\n  enabled: false\n"})})]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Since the ",(0,o.jsx)(t.a,{href:"https://github.com/epam/edp-install/blob/master/deploy-templates/values.yaml#L37",children:"values.yaml"})," file structure has been modified, move the ",(0,o.jsx)(t.strong,{children:"dockerRegistry"})," subsection to the ",(0,o.jsx)(t.strong,{children:"global"})," section:"]}),"\n",(0,o.jsx)(t.p,{children:"The dockerRegistry value has been moved to the global section:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-yaml",children:'global:\n  dockerRegistry:\n    # -- Define Image Registry that will to be used in Pipelines. Can be ecr (default), harbor\n    type: "ecr"\n    # -- Docker Registry endpoint\n    url: "<AWS_ACCOUNT_ID>.dkr.ecr.<AWS_REGION>.amazonaws.com"\n'})}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["(Optional) To integrate EDP with Jira, rename the default values from ",(0,o.jsx)(t.code,{children:"epam-jira-user"})," to ",(0,o.jsx)(t.code,{children:"jira-user"})," for a secret name. In case Jira is already integrated, it will continue working."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-yaml",children:'codebase-operator:\n  jira:\n    credentialName: "jira-user"\n'})}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["(Optional) To switch to the Harbor registry, change the secret format for the external secret from ",(0,o.jsx)(t.a,{href:"https://raw.githubusercontent.com/epam/edp-install/v3.3.0/deploy-templates/templates/external-secrets/externalsecret-kaniko.yaml",children:"kaniko-docker-config v3.3.0"})," to ",(0,o.jsx)(t.a,{href:"https://raw.githubusercontent.com/epam/edp-install/v3.4.0/deploy-templates/templates/external-secrets/externalsecret-kaniko.yaml",children:"kaniko-docker-config v3.4.1"}),":"]}),"\n",(0,o.jsxs)(a,{children:[(0,o.jsx)("summary",{children:(0,o.jsx)("b",{children:"View: old format"})}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-json",children:'"kaniko-docker-config": {"secret-string"} //base64 format\n'})})]}),"\n",(0,o.jsxs)(a,{children:[(0,o.jsx)("summary",{children:(0,o.jsx)("b",{children:"View: new format"})}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-json",children:'"kaniko-docker-config": {\n  "auths" : {\n    "registry.com" :\n    {"username":"<registry-username>","password":"<registry-password>","auth":"secret-string"}\n  }\n}\n'})})]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"To upgrade EDP to the v3.4.1, run the following command:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"helm upgrade edp epamedp/edp-install -n edp --values values.yaml --version=3.4.1\n"})}),"\n",(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsxs)(t.p,{children:["To verify the installation, it is possible to test the deployment before applying it to the cluster with the ",(0,o.jsx)(t.code,{children:"--dry-run"})," tag:",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(t.code,{children:"helm upgrade edp epamedp/edp-install -n edp --values values.yaml --version=3.4.1 --dry-run"})]})}),"\n"]}),"\n"]})]})}function i(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,t,a)=>{a.d(t,{R:()=>s,x:()=>p});var r=a(96540);const o={},n=r.createContext(o);function s(e){const t=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function p(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(n.Provider,{value:t},e.children)}}}]);