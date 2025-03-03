"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[71381],{7730:(e,t,p)=>{p.r(t),p.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>i,frontMatter:()=>s,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"operator-guide/upgrade/upgrade-edp-3.2","title":"Upgrade EDP v3.1 to 3.2","description":"Guide on upgrading EDP to version 3.2, including steps for updating Custom Resource Definitions and performing the upgrade procedure.","source":"@site/versioned_docs/version-3.10/operator-guide/upgrade/upgrade-edp-3.2.md","sourceDirName":"operator-guide/upgrade","slug":"/operator-guide/upgrade/upgrade-edp-3.2","permalink":"/docs/operator-guide/upgrade/upgrade-edp-3.2","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/operator-guide/upgrade/upgrade-edp-3.2.md","tags":[],"version":"3.10","lastUpdatedBy":"Oleksandr_Stepanov@epam.com","lastUpdatedAt":1741021682000,"frontMatter":{"title":"Upgrade EDP v3.1 to 3.2","description":"Guide on upgrading EDP to version 3.2, including steps for updating Custom Resource Definitions and performing the upgrade procedure.","sidebar_label":"v3.1 to 3.2"},"sidebar":"operatorGuideSidebar","previous":{"title":"v3.2 to 3.3","permalink":"/docs/operator-guide/upgrade/upgrade-edp-3.3"},"next":{"title":"v3.0 to 3.1","permalink":"/docs/operator-guide/upgrade/upgrade-edp-3.1"}}');var r=p(74848),o=p(28453);const s={title:"Upgrade EDP v3.1 to 3.2",description:"Guide on upgrading EDP to version 3.2, including steps for updating Custom Resource Definitions and performing the upgrade procedure.",sidebar_label:"v3.1 to 3.2"},n="Upgrade EDP v3.1 to 3.2",c={},d=[];function l(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.R)(),...e.components},{Head:p}=t;return p||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"upgrade-edp-v31-to-32",children:"Upgrade EDP v3.1 to 3.2"})}),"\n",(0,r.jsx)(p,{children:(0,r.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/operator-guide/upgrade/upgrade-edp-3.2"})}),"\n",(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsx)(t.p,{children:"We suggest making a backup of the EDP environment before starting the upgrade procedure."})}),"\n",(0,r.jsx)(t.p,{children:"This section provides the details on the EDP upgrade to v3.2.2. Explore the actions and requirements below."}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Update Custom Resource Definitions (CRDs). Run the following command to apply all necessary CRDs to the cluster:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"kubectl apply -f https://raw.githubusercontent.com/epam/edp-codebase-operator/v2.15.0/deploy-templates/crds/v2.edp.epam.com_cdstagedeployments.yaml\nkubectl apply -f https://raw.githubusercontent.com/epam/edp-codebase-operator/v2.15.0/deploy-templates/crds/v2.edp.epam.com_codebasebranches.yaml\nkubectl apply -f https://raw.githubusercontent.com/epam/edp-codebase-operator/v2.15.0/deploy-templates/crds/v2.edp.epam.com_codebaseimagestreams.yaml\nkubectl apply -f https://raw.githubusercontent.com/epam/edp-codebase-operator/v2.15.0/deploy-templates/crds/v2.edp.epam.com_codebases.yaml\nkubectl apply -f https://raw.githubusercontent.com/epam/edp-codebase-operator/v2.15.0/deploy-templates/crds/v2.edp.epam.com_gitservers.yaml\nkubectl apply -f https://raw.githubusercontent.com/epam/edp-codebase-operator/v2.15.0/deploy-templates/crds/v2.edp.epam.com_gittags.yaml\nkubectl apply -f https://raw.githubusercontent.com/epam/edp-codebase-operator/v2.15.0/deploy-templates/crds/v2.edp.epam.com_imagestreamtags.yaml\nkubectl apply -f https://raw.githubusercontent.com/epam/edp-codebase-operator/v2.15.0/deploy-templates/crds/v2.edp.epam.com_jiraissuemetadatas.yaml\nkubectl apply -f https://raw.githubusercontent.com/epam/edp-codebase-operator/v2.15.0/deploy-templates/crds/v2.edp.epam.com_jiraservers.yaml\nkubectl apply -f https://raw.githubusercontent.com/epam/edp-jenkins-operator/v2.14.0/deploy-templates/crds/v2.edp.epam.com_cdstagejenkinsdeployments.yaml\nkubectl apply -f https://raw.githubusercontent.com/epam/edp-jenkins-operator/v2.14.0/deploy-templates/crds/v2.edp.epam.com_jenkins.yaml\nkubectl apply -f https://raw.githubusercontent.com/epam/edp-jenkins-operator/v2.14.0/deploy-templates/crds/v2.edp.epam.com_jenkinsagents.yaml\nkubectl apply -f https://raw.githubusercontent.com/epam/edp-jenkins-operator/v2.14.0/deploy-templates/crds/v2.edp.epam.com_jenkinsauthorizationrolemappings.yaml\nkubectl apply -f https://raw.githubusercontent.com/epam/edp-jenkins-operator/v2.14.0/deploy-templates/crds/v2.edp.epam.com_jenkinsauthorizationroles.yaml\nkubectl apply -f https://raw.githubusercontent.com/epam/edp-jenkins-operator/v2.14.0/deploy-templates/crds/v2.edp.epam.com_jenkinsfolders.yaml\nkubectl apply -f https://raw.githubusercontent.com/epam/edp-jenkins-operator/v2.14.0/deploy-templates/crds/v2.edp.epam.com_jenkinsjobbuildruns.yaml\nkubectl apply -f https://raw.githubusercontent.com/epam/edp-jenkins-operator/v2.14.0/deploy-templates/crds/v2.edp.epam.com_jenkinsjobs.yaml\nkubectl apply -f https://raw.githubusercontent.com/epam/edp-jenkins-operator/v2.14.0/deploy-templates/crds/v2.edp.epam.com_jenkinsscripts.yaml\nkubectl apply -f https://raw.githubusercontent.com/epam/edp-jenkins-operator/v2.14.0/deploy-templates/crds/v2.edp.epam.com_jenkinsserviceaccounts.yaml\nkubectl apply -f https://raw.githubusercontent.com/epam/edp-jenkins-operator/v2.14.0/deploy-templates/crds/v2.edp.epam.com_jenkinssharedlibraries.yaml\nkubectl apply -f https://raw.githubusercontent.com/epam/edp-component-operator/v0.13.0/deploy-templates/crds/v1.edp.epam.com_edpcomponents.yaml\nkubectl apply -f https://raw.githubusercontent.com/epam/edp-cd-pipeline-operator/v2.14.1/deploy-templates/crds/v2.edp.epam.com_cdpipelines.yaml\nkubectl apply -f https://raw.githubusercontent.com/epam/edp-cd-pipeline-operator/v2.14.1/deploy-templates/crds/v2.edp.epam.com_stages.yaml\nkubectl apply -f https://raw.githubusercontent.com/epam/edp-nexus-operator/v2.14.1/deploy-templates/crds/v2.edp.epam.com_nexuses.yaml\nkubectl apply -f https://raw.githubusercontent.com/epam/edp-nexus-operator/v2.14.1/deploy-templates/crds/v2.edp.epam.com_nexususers.yaml\nkubectl apply -f https://raw.githubusercontent.com/epam/edp-sonar-operator/v2.14.0/deploy-templates/crds/v2.edp.epam.com_sonargroups.yaml\nkubectl apply -f https://raw.githubusercontent.com/epam/edp-sonar-operator/v2.14.0/deploy-templates/crds/v2.edp.epam.com_sonarpermissiontemplates.yaml\nkubectl apply -f https://raw.githubusercontent.com/epam/edp-sonar-operator/v2.14.0/deploy-templates/crds/v2.edp.epam.com_sonars.yaml\nkubectl apply -f https://raw.githubusercontent.com/epam/edp-gerrit-operator/v2.14.0/deploy-templates/crds/v2.edp.epam.com_gerritgroupmembers.yaml\nkubectl apply -f https://raw.githubusercontent.com/epam/edp-gerrit-operator/v2.14.0/deploy-templates/crds/v2.edp.epam.com_gerritgroups.yaml\nkubectl apply -f https://raw.githubusercontent.com/epam/edp-gerrit-operator/v2.14.0/deploy-templates/crds/v2.edp.epam.com_gerritmergerequests.yaml\nkubectl apply -f https://raw.githubusercontent.com/epam/edp-gerrit-operator/v2.14.0/deploy-templates/crds/v2.edp.epam.com_gerritprojectaccesses.yaml\nkubectl apply -f https://raw.githubusercontent.com/epam/edp-gerrit-operator/v2.14.0/deploy-templates/crds/v2.edp.epam.com_gerritprojects.yaml\nkubectl apply -f https://raw.githubusercontent.com/epam/edp-gerrit-operator/v2.14.0/deploy-templates/crds/v2.edp.epam.com_gerritreplicationconfigs.yaml\nkubectl apply -f https://raw.githubusercontent.com/epam/edp-gerrit-operator/v2.14.0/deploy-templates/crds/v2.edp.epam.com_gerrits.yaml\nkubectl apply -f https://raw.githubusercontent.com/epam/edp-perf-operator/v2.13.0/deploy-templates/crds/v2.edp.epam.com_perfdatasourcegitlabs.yaml\nkubectl apply -f https://raw.githubusercontent.com/epam/edp-perf-operator/v2.13.0/deploy-templates/crds/v2.edp.epam.com_perfdatasourcejenkinses.yaml\nkubectl apply -f https://raw.githubusercontent.com/epam/edp-perf-operator/v2.13.0/deploy-templates/crds/v2.edp.epam.com_perfdatasourcesonars.yaml\nkubectl apply -f https://raw.githubusercontent.com/epam/edp-perf-operator/v2.13.0/deploy-templates/crds/v2.edp.epam.com_perfservers.yaml\n"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Generate a cookie-secret for proxy with the following command:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"nexus_proxy_cookie_secret=$(openssl rand -base64 32 | head -c 32)\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Create ",(0,r.jsx)(t.code,{children:"nexus-proxy-cookie-secret"})," in the ",(0,r.jsx)(t.code,{children:"<edp-project>"})," namespace:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"kubectl -n <edp-project> create secret generic nexus-proxy-cookie-secret \\\n    --from-literal=cookie-secret=${nexus_proxy_cookie_secret}\n"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["EDP 3.2.2 features OIDC configuration for EDP Portal. If this parameter is required, create ",(0,r.jsx)(t.code,{children:"keycloak-client-headlamp-secret"})," as described in this ",(0,r.jsx)(t.a,{href:"/docs/operator-guide/auth/ui-portal-oidc",children:"article"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"kubectl -n <edp-project> create secret generic keycloak-client-edp-portal-secret \\\n    --from-literal=clientSecret=<keycloak_client_secret_key>\n"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Delete the following resources:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"kubectl -n <edp-project> delete KeycloakClient nexus\nkubectl -n <edp-project> delete EDPComponent nexus\nkubectl -n <edp-project> delete Ingress nexus\nkubectl -n <edp-project> delete deployment edp-tekton-dashboard\n"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["EDP release 3.2.2 uses the default cluster storageClass and we must check previous storageClass parameters. Align , if required, the ",(0,r.jsx)(t.code,{children:"storageClassName"})," in EDP ",(0,r.jsx)(t.code,{children:"values.yaml"})," to the same that were used by EDP PVC. For example:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"edp-tekton:\n  buildTool:\n    go:\n      cache:\n        persistentVolume:\n          # -- Specifies storageClass type. If not specified, a default storageClass for go-cache volume is used\n          storageClass: ebs-sc\n\njenkins-operator:\n  enabled: true\n  jenkins:\n    storage:\n      # -- Storageclass for Jenkins data volume\n      class: gp2\n\nsonar-operator:\n  sonar:\n    storage:\n      data:\n        # --  Storageclass for Sonar data volume\n        class: gp2\n      database:\n        # --  Storageclass for database data volume\n        class: gp2\n\ngerrit-operator:\n  gerrit:\n    storage:\n      # --  Storageclass for Gerrit data volume\n      class: gp2\n\nnexus-operator:\n  nexus:\n    storage:\n      # --  Storageclass for Nexus data volume\n      class: gp2\n"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"To upgrade EDP to the v3.2.2, run the following command:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"helm upgrade edp epamedp/edp-install -n <edp-namespace> --values values.yaml --version=3.2.2\n"})}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["To verify the installation, it is possible to test the deployment before applying it to the cluster with the following command:",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(t.code,{children:"helm upgrade edp epamedp/edp-install -n <edp-namespace> --values values.yaml --version=3.2.2  --dry-run"})]})}),"\n"]}),"\n"]})]})}function i(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,t,p)=>{p.d(t,{R:()=>s,x:()=>n});var a=p(96540);const r={},o=a.createContext(r);function s(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function n(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);