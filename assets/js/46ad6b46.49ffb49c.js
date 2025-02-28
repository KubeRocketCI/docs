"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[72804],{84915:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"operator-guide/upgrade/upgrade-edp-3.10","title":"Upgrade KubeRocketCI v3.9 to 3.10","description":"Guide on upgrading KubeRocketCI to version 3.10, including steps for updating Custom Resource Definitions and performing the upgrade procedure.","source":"@site/versioned_docs/version-3.10/operator-guide/upgrade/upgrade-edp-3.10.md","sourceDirName":"operator-guide/upgrade","slug":"/operator-guide/upgrade/upgrade-edp-3.10","permalink":"/docs/operator-guide/upgrade/upgrade-edp-3.10","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/operator-guide/upgrade/upgrade-edp-3.10.md","tags":[],"version":"3.10","lastUpdatedBy":"Oleksandr_Stepanov@epam.com","lastUpdatedAt":1740746844000,"frontMatter":{"title":"Upgrade KubeRocketCI v3.9 to 3.10","description":"Guide on upgrading KubeRocketCI to version 3.10, including steps for updating Custom Resource Definitions and performing the upgrade procedure.","sidebar_label":"Upgrade KubeRocketCI to 3.10"},"sidebar":"operatorGuideSidebar","previous":{"title":"Restore KubeRocketCI Tenant With Velero","permalink":"/docs/operator-guide/disaster-recovery/velero-restore-platform"},"next":{"title":"Upgrade KubeRocketCI to 3.9","permalink":"/docs/operator-guide/upgrade/upgrade-edp-3.9"}}');var a=t(74848),s=t(28453),o=t(65537),i=t(79329);const l={title:"Upgrade KubeRocketCI v3.9 to 3.10",description:"Guide on upgrading KubeRocketCI to version 3.10, including steps for updating Custom Resource Definitions and performing the upgrade procedure.",sidebar_label:"Upgrade KubeRocketCI to 3.10"},c="Upgrade KubeRocketCI v3.9 to 3.10",d={},p=[{value:"Tekton Dashboard",id:"tekton-dashboard",level:2},{value:"Approach 1: Deploy Using Argo CD",id:"approach-1-deploy-using-argo-cd",level:3},{value:"Approach 2: Deploy Using Helm",id:"approach-2-deploy-using-helm",level:3}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{Details:t,Head:r}=n;return t||m("Details",!0),r||m("Head",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"upgrade-kuberocketci-v39-to-310",children:"Upgrade KubeRocketCI v3.9 to 3.10"})}),"\n",(0,a.jsx)(r,{children:(0,a.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/operator-guide/upgrade/upgrade-edp-3.10/"})}),"\n",(0,a.jsx)(n.p,{children:"This section provides detailed instructions for upgrading KubeRocketCI to version 3.10. Follow the steps and requirements outlined below:"}),"\n",(0,a.jsx)(n.admonition,{type:"important",children:(0,a.jsx)(n.p,{children:"We suggest backing up the KubeRocketCI environment before starting the upgrade procedure."})}),"\n",(0,a.jsx)(n.admonition,{type:"important",children:(0,a.jsxs)(n.p,{children:["Starting from version 3.10, the Tekton Dashboard is no longer installed with KubeRocketCI. Instead, it is now installed via a Helm chart from the ",(0,a.jsx)(n.a,{href:"https://github.com/epam/edp-cluster-add-ons",children:"edp-cluster-add-ons"})," repository. For more information, refer to the ",(0,a.jsx)(n.a,{href:"#tekton-dashboard",children:"Tekton Dashboard"})," section."]})}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Update Custom Resource Definitions (CRDs). Run the following command to apply all necessary CRDs to the cluster:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"kubectl apply -f https://raw.githubusercontent.com/epam/edp-codebase-operator/v2.24.0/deploy-templates/crds/v2.edp.epam.com_cdstagedeployments.yaml\nkubectl apply -f https://raw.githubusercontent.com/epam/edp-codebase-operator/v2.24.0/deploy-templates/crds/v2.edp.epam.com_codebasebranches.yaml\nkubectl apply -f https://raw.githubusercontent.com/epam/edp-codebase-operator/v2.24.0/deploy-templates/crds/v2.edp.epam.com_codebaseimagestreams.yaml\nkubectl apply -f https://raw.githubusercontent.com/epam/edp-codebase-operator/v2.24.0/deploy-templates/crds/v2.edp.epam.com_codebases.yaml\nkubectl apply -f https://raw.githubusercontent.com/epam/edp-codebase-operator/v2.24.0/deploy-templates/crds/v2.edp.epam.com_gitservers.yaml\nkubectl apply -f https://raw.githubusercontent.com/epam/edp-codebase-operator/v2.24.0/deploy-templates/crds/v2.edp.epam.com_jiraissuemetadatas.yaml\nkubectl apply -f https://raw.githubusercontent.com/epam/edp-codebase-operator/v2.24.0/deploy-templates/crds/v2.edp.epam.com_jiraservers.yaml\nkubectl apply -f https://raw.githubusercontent.com/epam/edp-cd-pipeline-operator/v2.21.0/deploy-templates/crds/v2.edp.epam.com_cdpipelines.yaml\nkubectl apply -f https://raw.githubusercontent.com/epam/edp-cd-pipeline-operator/v2.21.0/deploy-templates/crds/v2.edp.epam.com_stages.yaml\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["(Optional) If you are using the ",(0,a.jsx)(n.strong,{children:"Gerrit Operator"}),", update the necessary CRDs for Gerrit. Run the following command to apply the necessary CRDs to the cluster:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"kubectl apply -f https://raw.githubusercontent.com/epam/edp-gerrit-operator/v2.22.0/deploy-templates/crds/v2.edp.epam.com_gerritgroupmembers.yaml\nkubectl apply -f https://raw.githubusercontent.com/epam/edp-gerrit-operator/v2.22.0/deploy-templates/crds/v2.edp.epam.com_gerritgroups.yaml\nkubectl apply -f https://raw.githubusercontent.com/epam/edp-gerrit-operator/v2.22.0/deploy-templates/crds/v2.edp.epam.com_gerritmergerequests.yaml\nkubectl apply -f https://raw.githubusercontent.com/epam/edp-gerrit-operator/v2.22.0/deploy-templates/crds/v2.edp.epam.com_gerritprojectaccesses.yaml\nkubectl apply -f https://raw.githubusercontent.com/epam/edp-gerrit-operator/v2.22.0/deploy-templates/crds/v2.edp.epam.com_gerritprojects.yaml\nkubectl apply -f https://raw.githubusercontent.com/epam/edp-gerrit-operator/v2.22.0/deploy-templates/crds/v2.edp.epam.com_gerritreplicationconfigs.yaml\nkubectl apply -f https://raw.githubusercontent.com/epam/edp-gerrit-operator/v2.22.0/deploy-templates/crds/v2.edp.epam.com_gerrits.yaml\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Update the Quick Links configuration section:"}),"\n",(0,a.jsxs)(n.p,{children:["In version 3.10, the section for configuring Quick Links resources has been updated. Ensure that the ",(0,a.jsx)(n.code,{children:"quickLinks"})," section is correctly defined in the ",(0,a.jsx)(n.code,{children:"values.yaml"})," file. Below is an example of the updated configuration:"]}),"\n",(0,a.jsxs)(o.A,{defaultValue:"3.9",values:[{label:"3.9",value:"3.9"},{label:"3.10",value:"3.10"}],children:[(0,a.jsx)(i.A,{value:"3.9",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",metastring:'title="values.yaml"',children:'quickLinks:\n  # Base URL value for the argocd Quick Link\n  argocd: ""\n  # Base URL value for the defectdojo Quick Link\n  defectdojo: ""\n  # Base URL value for the dependency track Quick Link\n  dependency_track: ""\n  # Base URL value for the container registry Quick Link (e.g. Nexus, DockerHub, ECR, etc.)\n  docker_registry: ""\n  # Base URL value for the Grafana Quick Link\n  grafana: ""\n  # Base URL value for the Kibana Quick Link\n  kibana: ""\n  # Base URL value for the nexus Quick Link\n  nexus: ""\n  # Base URL value for the sonar Quick Link\n  sonar: ""\n  # Base URL value for the codemie Quick Link\n  codemie: ""\n'})})}),(0,a.jsx)(i.A,{value:"3.10",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",metastring:'title="values.yaml"',children:'quickLinks:\n  # Base URL value for the argocd Quick Link\n  argocd: ""\n  # Base URL value for the codemie Quick Link\n  codemie: ""\n  # Base URL value for the defectdojo Quick Link\n  defectdojo: ""\n  # Base URL value for the dependency track Quick Link\n  dependency_track: ""\n  # Base URL value for the container registry Quick Link (e.g. Nexus, DockerHub, ECR, etc.)\n  docker_registry: ""\n  # Configuration for the logging Quick Link\n  logging:\n    # -- Define the provider name for correct URL generation.\n    # Available providers: "opensearch", "datadog".\n    # If the provider name is not specified, the base URL will be used.\n    provider: ""\n    # Base URL value for the logging Quick Link\n    url: ""\n  # Configuration for the monitoring Quick Link\n  monitoring:\n    # -- Define the provider name for correct URL generation.\n    # Available providers: "grafana", "datadog".\n    # If the provider name is not specified, the base URL will be used.\n    provider: ""\n    # Base URL value for the monitoring Quick Link\n    url: ""\n  # Base URL value for the nexus Quick Link\n  nexus: ""\n  # Base URL value for the sonar Quick Link\n  sonar: ""\n'})})})]}),"\n",(0,a.jsxs)(n.p,{children:["Also, ensure that the ",(0,a.jsx)(n.code,{children:"quickLink.enabled"})," field is set for each Git Server provider specified in the ",(0,a.jsx)(n.code,{children:"edp-tekton"})," section. Below is an example of the updated configuration:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",metastring:'title="values.yaml"',children:"edp-tekton:\n  enabled: true\n  ...\n  gitServers:\n    github:\n      # -- Enable creation of QuickLink for GitHub\n      quickLink:\n        enabled: true\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"(Optional) Update Tekton Pipeline labels:"}),"\n",(0,a.jsxs)(n.p,{children:["In version 3.10, Tekton pipelines require specific labels to indicate their type: ",(0,a.jsx)(n.strong,{children:"build"}),", ",(0,a.jsx)(n.strong,{children:"review"}),", ",(0,a.jsx)(n.strong,{children:"clean"}),", or ",(0,a.jsx)(n.strong,{children:"deploy"}),". These labels allow KubeRocketCI portal to correctly display pipeline data."]}),"\n",(0,a.jsx)(n.p,{children:"Below are examples of the required labels for each pipeline type:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Build Pipeline"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"metadata:\n  name: build\n  labels:\n    app.edp.epam.com/pipelinetype: build\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Review Pipeline"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"metadata:\n  name: review\n  labels:\n    app.edp.epam.com/pipelinetype: review\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Clean Pipeline"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"metadata:\n  name: clean\n  labels:\n    app.edp.epam.com/pipelinetype: clean\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Deploy Pipeline"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"metadata:\n  name: deploy\n  labels:\n    app.edp.epam.com/pipelinetype: deploy\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsx)(n.p,{children:"For any custom Tekton pipelines created in earlier versions, ensure that each pipeline has the appropriate label to maintain compatibility."})}),"\n",(0,a.jsx)(n.p,{children:"To label an existing custom pipeline, you can use the following command as a reference:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"kubectl label pipeline <pipeline-name> app.edp.epam.com/pipelinetype=<build | review | deploy> -n <krci-namespace>\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"(Optional) Migrate Git providers credentials to a new AWS Parameter Store object:"}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["In version 3.9.0, Git providers credentials were included in the ",(0,a.jsx)(n.code,{children:"manageEDPInstallSecretsName"})," object in AWS Parameter Store. Due to character limit restrictions, these credentials should now be migrated to a dedicated AWS Parameter Store object named ",(0,a.jsx)(n.code,{children:"manageGitProviderSecretsName"}),"."]})}),"\n",(0,a.jsxs)(n.p,{children:["If you are using the ",(0,a.jsx)(n.strong,{children:"External Secret Operator"})," to manage secrets, specify a new field in the ",(0,a.jsx)(n.code,{children:"values.yaml"})," file: ",(0,a.jsx)(n.code,{children:"manageGitProviderSecretsName"}),". This field should be defined as follows:"]}),"\n",(0,a.jsxs)(o.A,{defaultValue:"3.10",values:[{label:"3.9",value:"3.9"},{label:"3.10",value:"3.10"}],children:[(0,a.jsx)(i.A,{value:"3.9",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",metastring:'title="values.yaml"',children:"externalSecrets:\n  enabled: true\n  ...\n  manageEDPInstallSecretsName: /infra/core/addons/kuberocketci\n"})})}),(0,a.jsx)(i.A,{value:"3.10",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",metastring:'title="values.yaml"',children:"externalSecrets:\n  enabled: true\n  ...\n  manageEDPInstallSecretsName: /infra/core/addons/kuberocketci\n  manageGitProviderSecretsName: /infra/core/addons/kuberocketci-git-provider-secrets\n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["Below is an example of the object structure for ",(0,a.jsx)(n.code,{children:"manageGitProviderSecretsName"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "github-config": {\n    "id_rsa": "LS0tLS1...",\n    "token": "ghp_fdO1joO...",\n    "secretString": "kfr1ndk4..."\n  },\n  "gitlab-config": {\n    "id_rsa": "LS0tLS1...",\n    "token": "RW1UG2EAdEjPEC1NSoVm3A",\n    "secretString": "kfr1ndk4..."\n  },\n  "bitbucket-config": {\n    "id_rsa": "LS0tLS1...",\n    "token": "YXV0b19lcG1kLWVkc...",\n    "secretString": "kfr1ndk4..."\n  }\n}\n'})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"(Optional) Enable Code Quality Widgets:"}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsx)(n.p,{children:"Starting from version 3.10, KrakenD is used to manage Code Quality widgets in KubeRocketCI portal. This migration simplifies the integration with third-party APIs, improves performance, and provides a scalable, flexible API gateway."})}),"\n",(0,a.jsx)(n.p,{children:"By default, in version 3.10, Code Quality widgets are disabled. To enable them, follow these steps:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Install KrakenD"}),": For detailed installation instructions, refer to the ",(0,a.jsx)(n.a,{href:"/docs/operator-guide/extensions/krakend",children:"KrakenD installation guide"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsxs)(n.strong,{children:["Configure the ",(0,a.jsx)(n.code,{children:"values.yaml"})," file"]}),": In the ",(0,a.jsx)(n.strong,{children:"edp-install"})," chart, set the ",(0,a.jsx)(n.code,{children:"apiGatewayUrl"})," key to specify the API URL of KrakenD as configured during its installation."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",metastring:'title="values.yaml"',children:'global:\n  apiGatewayUrl: "https://api.example.com"\n'})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"(Optional) Migrate SSO (OAuth2-proxy) configuration:"}),"\n",(0,a.jsx)(n.admonition,{type:"danger",children:(0,a.jsxs)(n.p,{children:["Starting from version 3.10, the platform no longer supports setting Single Sign-on (SSO) configuration through the ",(0,a.jsx)(n.code,{children:"edp-install"})," chart. This includes the installation of the ",(0,a.jsx)(n.code,{children:"oauth2-proxy"})," component and the creation of required Keycloak resources."]})}),"\n",(0,a.jsxs)(n.p,{children:["Deprecated fields in ",(0,a.jsx)(n.code,{children:"values.yaml"})," file for SSO configuration are listed below:"]}),"\n",(0,a.jsxs)(t,{children:[(0,a.jsx)("summary",{children:(0,a.jsx)("b",{children:"View: Deprecated fields in values.yaml"})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:'sso:\n  # -- Install OAuth2-proxy and Keycloak CRs as a part of EDP deployment.\n  enabled: false\n\n  keycloakOperatorResources:\n    # Set to false if using the add-ons approach (refer to https://github.com/epam/edp-cluster-add-ons)\n    # for EDP installation and if the extension-oidc is already installed.\n    # This prevents the creation of an additional Keycloak resource and secret.\n    # The \'kind\' and \'name\' must be specified in case of using an existing Keycloak/ClusterKeycloak resource.\n    # Create kind: Keycloak as a part of chart installation\n    createKeycloakCR: true\n    # Can be Keycloak or ClusterKeycloak.\n    kind: Keycloak\n    # Name of kind: Keycloak/ClusterKeycloak CR.\n    name: main\n\n  # -- Defines the Keycloak realm name, which by default is named after the namespace where EDP is deployed.\n  # realmName: edp\n  # -- Defines Keycloak sso realm name that is used as the Identity Provider (IdP) realm\n  ssoRealmName: "broker"\n  # -- Defines Keycloak client name that is used for the Identity Provider (IdP) client\n  ssoClientName: "edp"\n  # -- Keycloak URL.\n  keycloakUrl: https://keycloak.example.com/auth\n  # -- Administrators of your tenant.\n  admins:\n    - "stub_user_one@example.com"\n  # -- Developers of your tenant\n  developers:\n    - "stub_user_one@example.com"\n    - "stub_user_two@example.com"\n\n  # Oauth2-proxy image\n  image:\n    # -- OAuth2-proxy image repository\n    repository: quay.io/oauth2-proxy/oauth2-proxy\n    # -- OAuth2-proxy image tag\n    tag: v7.4.0\n\n  # Create a cookie-secret with the following command:\n  # \'openssl rand -base64 32 | head -c 32 | base64\'\n  # Use an existing secret for OAuth2 cookie-secret\n  existingSecret:\n    # -- Secret name which stores cookie-secret\n    secretName: oauth2-proxy-cookie-secret\n    # -- Secret key which stores cookie-secret\n    secretKey: cookie-secret\n\n  # -- Additional container environment variables\n  extraEnv: []\n  # -- Extra arguments to provide to the OAuth2-proxy\n  extraArgs: {}\n\n  # -- Additional volumes to be added to the OAuth2-proxy pod\n  extraVolumes: []\n  #  - name: custom-ca\n  #    secret:\n  #      defaultMode: 420\n  #      secretName: custom-ca\n\n  # -- Additional volumeMounts to be added to the OAuth2-proxy container\n  extraVolumeMounts: []\n  #  - name: custom-ca\n  #    mountPath: /etc/ssl/certs/CA.crt\n  #    readOnly: true\n  #    subPath: CA.crt\n\n  ingress:\n    # -- Enable ingress controller resource\n    enabled: true\n    # -- Additional ingress annotations\n    annotations: {}\n    # -- Ingress path type. One of `Exact`, `Prefix` or `ImplementationSpecific`\n    pathType: Prefix\n\n    # For Kubernetes >= 1.18 you should specify the ingress-controller via the field ingressClassName\n    # Ref: https://kubernetes.io/blog/2020/04/02/improvements-to-the-ingress-api-in-kubernetes-1.18/#specifying-the-class-of-an-ingress\n    # -- Defines which ingress controller will implement the resource, e.g. nginx\n    ingressClassName: ""\n    # -- Ingress TLS configuration\n    tls: []\n    #  - secretName: chart-example-tls\n    #    hosts:\n    #      - chart-example.local\n  # -- Node labels for pod assignment\n  nodeSelector: {}\n  # -- Toleration labels for pod assignment\n  tolerations: []\n  # -- Affinity settings for pod assignment\n  affinity: {}\n'})})]}),"\n",(0,a.jsx)(n.p,{children:"If you previously used SSO configuration section, follow these migration steps:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Manually remove all Keycloak resources previously created by the ",(0,a.jsx)(n.strong,{children:"edp-install"})," chart. The list of resources to remove can be found ",(0,a.jsx)(n.a,{href:"https://github.com/epam/edp-install/tree/v3.9.0/deploy-templates/templates/keycloak",children:"here"}),".\nRemove the resources sequentially, following the specified deletion order. Sample commands for deleting Keycloak resources are provided below:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"kubectl delete keycloakclient gerrit -n <krci-namespace>\nkubectl delete keycloakclient oauth2-proxy -n <krci-namespace>\nkubectl delete keycloakclientscope edp -n <krci-namespace>\nkubectl delete keycloakrealmrole default-roles-administrator -n <krci-namespace>\nkubectl delete keycloakrealmrole default-roles-developer -n <krci-namespace>\nkubectl delete keycloakrealmrolebatch default-roles -n <krci-namespace>\nkubectl delete keycloakauthflow keycloakauthflow-browser -n <krci-namespace>\nkubectl delete keycloakrealmidentityprovider broker-idp -n <krci-namespace>\nkubectl delete keycloakrealm main -n <krci-namespace>\nkubectl delete keycloak keycloak -n <krci-namespace>\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Review and configure the ",(0,a.jsx)(n.a,{href:"https://github.com/epam/edp-cluster-add-ons/tree/main/clusters/core/addons/kuberocketci-rbac",children:"kuberocketci-rbac"})," chart in the add-ons repository.\nSet the required values in the ",(0,a.jsx)(n.code,{children:"values.yaml"})," file and install the chart. Verify that all necessary ",(0,a.jsx)(n.a,{href:"https://github.com/epam/edp-cluster-add-ons/tree/main/clusters/core/addons/kuberocketci-rbac/templates",children:"Keycloak resources"})," have been successfully created in Keycloak."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Review and configure the ",(0,a.jsx)(n.a,{href:"https://github.com/epam/edp-cluster-add-ons/tree/main/clusters/core/addons/oauth2-proxy",children:"oauth2-proxy"})," chart in the add-ons repository.\nSet the required values in the ",(0,a.jsx)(n.code,{children:"values.yaml"})," file and install the chart. Ensure that ",(0,a.jsx)(n.strong,{children:"oauth2-proxy"})," is running correctly."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Once the ",(0,a.jsx)(n.strong,{children:"kuberocketci-rbac"})," and ",(0,a.jsx)(n.strong,{children:"oauth2-proxy"})," charts are installed and verified, proceed with upgrading the platform to version 3.10."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["(Optional) Update the OIDC Integration section for ",(0,a.jsx)(n.strong,{children:"edp-headlamp"})," chart:"]}),"\n",(0,a.jsxs)(n.p,{children:["In version 3.10, the OpenID Connect (OIDC) section for the ",(0,a.jsx)(n.strong,{children:"edp-headlamp"})," chart has been modified. Certain fields have been renamed or removed. For example, the ",(0,a.jsx)(n.code,{children:"keycloakUrl"})," field has been renamed to ",(0,a.jsx)(n.code,{children:"issuerUrl"}),", and the ",(0,a.jsx)(n.code,{children:"issuerRealm"})," field is no longer required.\nRefer to the example values configurations below for versions 3.9 and 3.10 to identify the fields that need to be modified for compatibility:"]}),"\n",(0,a.jsxs)(o.A,{defaultValue:"3.9",values:[{label:"3.9",value:"3.9"},{label:"3.10",value:"3.10"}],children:[(0,a.jsx)(i.A,{value:"3.9",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",metastring:'title="values.yaml"',children:'edp-headlamp:\n  enabled: true\n  ...\n  config:\n    oidc:\n      enabled: true\n      keycloakUrl: "https://keycloak.example.com"\n      clientID: ""\n      clientSecretName: "keycloak-client-headlamp-secret"\n      clientSecretKey: "clientSecret"\n      issuerRealm: ""\n      scopes: ""\n'})})}),(0,a.jsx)(i.A,{value:"3.10",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",metastring:'title="values.yaml"',children:'edp-headlamp:\n  enabled: true\n  ...\n  config:\n    oidc:\n      enabled: true\n      issuerUrl: "https://keycloak.example.com/auth/realms/<realm_name>"\n      clientID: ""\n      clientSecretName: "keycloak-client-headlamp-secret"\n      clientSecretKey: "clientSecret"\n      scopes: ""\n'})})})]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"(Optional) Update Gerrit configuration:"}),"\n",(0,a.jsxs)(n.p,{children:["Update the following configuration for the ",(0,a.jsx)(n.strong,{children:"gerrit-operator"})," section in ",(0,a.jsx)(n.code,{children:"values.yaml"}),":"]}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Update the ",(0,a.jsx)(n.code,{children:"extraEnv"})," variable. Modify the ",(0,a.jsx)(n.code,{children:"OAUTH_KEYCLOAK_CLIENT_ID"})," value to follow the ",(0,a.jsx)(n.code,{children:"gerrit-<KRCI_NAMESPACE_NAME>"})," format:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",metastring:'title="values.yaml"',children:"gerrit-operator:\n  enabled: true\n  ...\n  gerrit:\n    extraEnv:\n      - name: OAUTH_KEYCLOAK_CLIENT_ID\n        value: gerrit-<KRCI_NAMESPACE_NAME>\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Specify the Single Sign-on (SSO) configuration. Ensure the SSO configuration is defined as follows:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",metastring:'title="values.yaml"',children:"sso:\n  enabled: true\n  keycloakUrl: https://keycloak.example.com\n  kind: ClusterKeycloakRealm\n  name: main\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"To upgrade KubeRocketCI to the v3.10, run the following command:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"helm upgrade krci epamedp/edp-install -n krci --values values.yaml --version=3.10.5\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["To verify the installation, you can test the deployment before applying it to the cluster with the ",(0,a.jsx)(n.code,{children:"--dry-run"})," key:\n",(0,a.jsx)(n.code,{children:"helm upgrade krci epamedp/edp-install -n krci --values values.yaml --version=3.10.5 --dry-run"})]})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"tekton-dashboard",children:"Tekton Dashboard"}),"\n",(0,a.jsxs)(n.p,{children:["In version 3.10, the Tekton Dashboard is migrated from the ",(0,a.jsx)(n.a,{href:"https://github.com/epam/edp-tekton",children:"edp-tekton"})," repository to a separate Helm chart in the ",(0,a.jsx)(n.a,{href:"https://github.com/epam/edp-cluster-add-ons",children:"edp-cluster-add-ons"})," repository. There are two approaches to install the Tekton Dashboard using the add-ons repository:"]}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["For more information about deploying applications using ",(0,a.jsx)(n.a,{href:"https://github.com/epam/edp-cluster-add-ons",children:"edp-cluster-add-ons"})," repository, refer to the ",(0,a.jsx)(n.a,{href:"/docs/operator-guide/add-ons-overview",children:"Install via Add-Ons"})," page."]})}),"\n",(0,a.jsx)(n.h3,{id:"approach-1-deploy-using-argo-cd",children:"Approach 1: Deploy Using Argo CD"}),"\n",(0,a.jsx)(n.p,{children:"The first approach implies installing the Tekton Dashboard via resource synchronization in Argo CD:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Clone the forked ",(0,a.jsx)(n.a,{href:"https://github.com/epam/edp-cluster-add-ons/tree/main/clusters/core/addons/tekton-dashboard",children:"edp-cluster-add-ons"})," repository."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Navigate to the ",(0,a.jsx)(n.code,{children:"clusters/core/addons/tekton-dashboard"})," directory and configure the ",(0,a.jsx)(n.code,{children:"values.yaml"})," file with the necessary values for the Tekton Dashboard installation."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["After configuring the Tekton Dashboard Helm chart values, navigate to the ",(0,a.jsx)(n.code,{children:"clusters/core/apps"})," directory. In the ",(0,a.jsx)(n.code,{children:"values.yaml"})," file, update the ",(0,a.jsx)(n.code,{children:"tekton-dashboard"})," section by specifying the ",(0,a.jsx)(n.code,{children:"enable"})," field as ",(0,a.jsx)(n.code,{children:"true"})," to enable Argo CD Application creation for the Tekton Dashboard. Also, specify the ",(0,a.jsx)(n.code,{children:"namespace"})," field to define the target namespace where the Tekton Dashboard will be deployed."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",metastring:'title="clusters/core/apps/values.yaml"',children:"tekton-dashboard:\n  enable: true\n  namespace: krci\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Commit and push the changes to the remote repository. After the changes are pushed, navigate to the Argo CD and sync the Tekton Dashboard application. Verify that the Tekton Dashboard is successfully deployed."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"approach-2-deploy-using-helm",children:"Approach 2: Deploy Using Helm"}),"\n",(0,a.jsx)(n.p,{children:"The second approach deploys Tekton Dashboard as a common Helm chart:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Clone the forked ",(0,a.jsx)(n.a,{href:"https://github.com/epam/edp-cluster-add-ons/tree/main/clusters/core/addons/tekton-dashboard",children:"edp-cluster-add-ons"})," repository."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Navigate to the ",(0,a.jsx)(n.code,{children:"clusters/core/addons/tekton-dashboard"})," directory and configure the ",(0,a.jsx)(n.code,{children:"values.yaml"})," file with the necessary values for the Tekton Dashboard installation."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"After configuring the Tekton Dashboard Helm chart values, run the following command to deploy the Tekton Dashboard:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"helm upgrade --install tekton-dashboard . -n <krci-namespace>\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Replace ",(0,a.jsx)(n.code,{children:"<krci-namespace>"})," with the target namespace where the Tekton Dashboard will be deployed."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Verify that the Tekton Dashboard is successfully deployed."}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}function m(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},79329:(e,n,t)=>{t.d(n,{A:()=>o});t(96540);var r=t(34164);const a={tabItem:"tabItem_Ymn6"};var s=t(74848);function o(e){let{children:n,hidden:t,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,o),hidden:t,children:n})}},65537:(e,n,t)=>{t.d(n,{A:()=>v});var r=t(96540),a=t(34164),s=t(65627),o=t(56347),i=t(50372),l=t(30604),c=t(11861),d=t(78749);function p(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return p(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const a=(0,o.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=u(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[c,p]=m({queryString:t,groupId:a}),[g,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,d.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),b=(()=>{const e=c??g;return h({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{b&&l(b)}),[b]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),p(e),f(e)}),[p,f,s]),tabValues:s}}var f=t(9136);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=t(74848);function k(e){let{className:n,block:t,selectedValue:r,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),a=i[t].value;a!==r&&(c(n),o(a))},p=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>{l.push(e)},onKeyDown:p,onClick:d,...s,className:(0,a.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function x(e){let{lazy:n,children:t,selectedValue:s}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function j(e){const n=g(e);return(0,y.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,y.jsx)(k,{...n,...e}),(0,y.jsx)(x,{...n,...e})]})}function v(e){const n=(0,f.A)();return(0,y.jsx)(j,{...e,children:p(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var r=t(96540);const a={},s=r.createContext(a);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);