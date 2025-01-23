"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[15755],{75910:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"operator-guide/auth/platform-auth-model","title":"Overview","description":"KubeRocketCI uses Keycloak as central access management solution, handling user permissions across various platform tools, including Kubernetes. Kubernetes clusters leverage Keycloak for RBAC implementation via OIDC. This consistent approach allows administrators to manage access uniformly.","source":"@site/versioned_docs/version-3.9/operator-guide/auth/platform-auth-model.md","sourceDirName":"operator-guide/auth","slug":"/operator-guide/auth/platform-auth-model","permalink":"/docs/3.9/operator-guide/auth/platform-auth-model","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/operator-guide/auth/platform-auth-model.md","tags":[],"version":"3.9","lastUpdatedBy":"Sergiy Kulanov","lastUpdatedAt":1737665242000,"frontMatter":{},"sidebar":"operatorGuideSidebar","previous":{"title":"Uninstall KubeRocketCI","permalink":"/docs/3.9/operator-guide/uninstall-kuberocketci"},"next":{"title":"Install Keycloak","permalink":"/docs/3.9/operator-guide/auth/keycloak"}}');var o=s(74848),t=s(28453);const i={},a="Overview",l={},c=[{value:"Keycloak Components Overview",id:"keycloak-components-overview",level:2},{value:"Keycloak Roles and Groups",id:"keycloak-roles-and-groups",level:2},{value:"Roles",id:"roles",level:3},{value:"Groups",id:"groups",level:3},{value:"SonarQube OIDC",id:"sonarqube-oidc",level:2},{value:"Keycloak Configuration",id:"keycloak-configuration",level:3},{value:"SonarQube Configuration",id:"sonarqube-configuration",level:3},{value:"Group Permissions",id:"group-permissions",level:3},{value:"Nexus Repository Manager",id:"nexus-repository-manager",level:2},{value:"KubeRocketCI Portal and Kubernetes Cluster",id:"kuberocketci-portal-and-kubernetes-cluster",level:2},{value:"Keycloak Groups",id:"keycloak-groups",level:3},{value:"Cluster RBAC Resources",id:"cluster-rbac-resources",level:3},{value:"Grant User Access to the Created Namespaces",id:"grant-user-access-to-the-created-namespaces",level:3},{value:"Argo CD",id:"argo-cd",level:2},{value:"Gerrit",id:"gerrit",level:2},{value:"Related Articles",id:"related-articles",level:2}];function d(e){const r={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components},{Head:s}=r;return s||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.header,{children:(0,o.jsx)(r.h1,{id:"overview",children:"Overview"})}),"\n",(0,o.jsx)(s,{children:(0,o.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/operator-guide/auth/platform-auth-model/"})}),"\n",(0,o.jsxs)(r.p,{children:["KubeRocketCI uses ",(0,o.jsx)(r.a,{href:"https://keycloak.org",children:"Keycloak"})," as central access management solution, handling user permissions across various platform tools, including Kubernetes. Kubernetes clusters leverage Keycloak for RBAC implementation via ",(0,o.jsx)(r.a,{href:"https://kubernetes.io/docs/reference/access-authn-authz/authentication/",children:"OIDC"}),". This consistent approach allows administrators to manage access uniformly.\nWithin Kubernetes, ",(0,o.jsx)(r.a,{href:"https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/",children:"Custom Resources (CRs)"})," are used to refine and enforce access controls by ",(0,o.jsx)(r.a,{href:"https://operatorhub.io/operator/edp-keycloak-operator",children:"configuring Keycloak"}),", translating Kubernetes configurations into Keycloak access policies."]}),"\n",(0,o.jsx)(r.h2,{id:"keycloak-components-overview",children:"Keycloak Components Overview"}),"\n",(0,o.jsx)(r.p,{children:"Keycloak is a critical component in KubeRocketCI for managing authentication and authorization. It uses realms, roles and groups to control access across the platform."}),"\n",(0,o.jsxs)(r.p,{children:["The diagram below illustrates the Keycloak resources within the KubeRocketCI system. It shows how tools and their Keycloak configurations are managed within the ",(0,o.jsx)(r.code,{children:"shared"})," and ",(0,o.jsx)(r.code,{children:"broker"})," realms. The ",(0,o.jsx)(r.code,{children:"broker"}),' realm serves as a central "authentication proxy" (broker), connecting to external Identity Providers (IdPs) such as Google, Facebook, and Active Directory (AD) through OIDC and/or SAML protocols. The ',(0,o.jsx)(r.code,{children:"shared"})," realm consolidates platform tools such as Argo CD, Nexus Repository, SonarQube, Report-portal, Harbor, and others as OIDC (OpenID Connect) clients."]}),"\n",(0,o.jsx)(r.p,{children:"Each component can have its own unique configurations, including Keycloak roles, groups, or client scopes."}),"\n",(0,o.jsx)(r.mermaid,{value:'graph TD;\n    style integrated_services fill:#FFF2CC,stroke:#333,stroke-width:1px\n    style broker_realm fill:#FFF2CC,stroke:#333,stroke-width:1px\n    style IdP fill:#E1D5E7,stroke:#333,stroke-width:2px,dashed\n\n    subgraph integrated_services ["<b>shared realm</b>"]\n        direction TB\n        Report-Portal["<b>Report-portal</b><br>---<br>Keycloak Client<br> Keycloak Client Scope"]\n        Sonar["<b>Sonar</b><br>---<br>Keycloak Client<br>Keycloak Realm Role Batch"]\n        Vault-kms["<b>Vault-kms</b><br> --- <br> Keycloak Client"]\n        Vault-okd["<b>Vault-okd</b><br> --- <br> Keycloak Client"]\n        ArgoCD["<b>Argo CD</b><br> --- <br> Keycloak Client <br> Keycloak Realm Group"]\n\n        EKS["<b>EKS</b><br> --- <br> Keycloak Client <br> Keycloak Client Scope <br> Keycloak Realm Groups"]\n        Harbor["<b>Harbor</b><br> --- <br> Keycloak Client"]\n        Harbor-ha["<b>Harbor-ha</b><br> --- <br> Keycloak Client"]\n        Harbor-ha-okd["<b>Harbor-ha-okd</b><br> --- <br> Keycloak Client"]\n        AWX-operator["<b>AWX Operator</b><br> --- <br> Keycloak Client"]\n\n        Nexus["<b>Nexus</b><br> --- <br> Keycloak Client"]\n        OpenSearch["<b>OpenSearch</b><br> --- <br> Keycloak Client <br> Keycloak Client Scope"]\n        Prometheus-operator["<b>Prometheus-operator</b><br> --- <br> Keycloak Client (Grafana)"]\n        DependencyTrack["<b>Dependency Track</b><br> --- <br> Keycloak Client"]\n        DefectDojo["<b>DefectDojo</b><br> --- <br> Keycloak Client"]\n\n        Portal["<b>Portal UI</b><br> --- <br> KeycloakClient <br> Keycloak Client Secret"]\n\n        %% Define the new 4x4 grid layout\n        Report-Portal ~~~ Nexus ~~~ EKS ~~~ Portal\n        Sonar ~~~ Harbor ~~~ OpenSearch ~~~ ArgoCD\n        Vault-kms ~~~ Harbor-ha ~~~ Prometheus-operator ~~~ AWX-operator\n        Vault-okd ~~~ Harbor-ha-okd ~~~ DependencyTrack ~~~ DefectDojo\n    end\n    subgraph broker_realm ["<b>broker realm</b>"]\n     shared["<b>shared</b><br> --- <br> Keycloak Client"]\n    end\n\n    integrated_services --\x3e shared["<b>shared</b><br> --- <br> Keycloak Client"]\n    broker_realm --\x3e IdP["<b>IdP</b><br> (Google, Facebook, AD)"]'}),"\n",(0,o.jsx)(r.h2,{id:"keycloak-roles-and-groups",children:"Keycloak Roles and Groups"}),"\n",(0,o.jsxs)(r.p,{children:["The diagram below provides an overview of the access control mechanisms for various tools integrated with Keycloak.\nIt illustrates two primary methods of managing user access: ",(0,o.jsx)(r.a,{href:"#roles",children:"Keycloak roles"})," and ",(0,o.jsx)(r.a,{href:"#groups",children:"Keycloak groups"}),"."]}),"\n",(0,o.jsx)(r.mermaid,{value:'graph TD;\n    style component_access_control fill:#F5F5F5,stroke:#333,stroke-width:1px\n    style keycloak_roles fill:#F5F5F5,stroke:#333,stroke-width:1px\n    style keycloak_groups fill:#F5F5F5,stroke:#333,stroke-width:1px\n    style mock_object fill:#FFF2CC,stroke:#FFF2CC,stroke-width:1px\n    style AWX-operator fill:#F8CECC,stroke:#333,stroke-width:1px\n    style DefectDojo fill:#F8CECC,stroke:#333,stroke-width:1px\n    style ReportPortal fill:#F8CECC,stroke:#333,stroke-width:1px\n    style Vault fill:#F8CECC,stroke:#333,stroke-width:1px\n    style Gerrit fill:#F8CECC,stroke:#333,stroke-width:1px\n    style keycloak_roles_components fill:#FFF2CC,stroke:#333,stroke-width:1px\n    style keycloak_groups_components fill:#FFF2CC,stroke:#333,stroke-width:1px\n\n    subgraph keycloak_roles_components [" "]\n        direction TB\n        DependencyTrack["<b>Dependency Track</b><br> --- <br> administrator <br> developer"]\n        Harbor["<b>Harbor</b><br> --- <br> administrator"]\n        TektonDashboard["<b>Tekton Dashboard</b><br> --- <br> administrator <br> developer"]\n\n        OpenSearch["<b>OpenSearch</b><br> --- <br> administrator <br> developer"]\n        Grafana["<b>Grafana</b><br> --- <br> administrator <br> developer"]\n\n        Sonar["<b>Sonar</b><br> --- <br> sonar-administrators <br> sonar-developers"]\n        Nexus["<b>Nexus</b><br> --- <br> administrator <br> developer <br> --- <br> Specific roles are assigned <br> through the CR NexusUser"]\n\n        AWX-operator["<b>AWX Operator</b><br> --- <br> Specific roles are assigned <br> through the UI"]\n\n        DefectDojo["<b>DefectDojo</b><br> --- <br> Specific roles are assigned <br> through the UI"]\n        ReportPortal["<b>Report-portal</b><br> --- <br> Specific roles are assigned <br> through the UI"]\n\n        Vault["<b>Vault</b><br> --- <br> Role \'reader\' by default"]\n\n        DependencyTrack ~~~ OpenSearch ~~~ Sonar ~~~ DefectDojo\n        Harbor ~~~ Grafana ~~~ ReportPortal ~~~ Vault\n        TektonDashboard ~~~ Nexus ~~~ AWX-operator ~~~ mock_object[" "]\n    end\n\n    subgraph keycloak_groups_components [" "]\n        direction TB\n        ArgoCD["<b>Argo CD</b><br> --- <br> ArgoCDAdmins <br> ArgoCDDevelopers"]\n        PortalUI["<b>Portal UI</b><br> --- <br> ${platform}-oidc-admins <br> ${platform}-oidc-developers <br> ${platform}-oidc-viewers"]\n\n        Gerrit["<b>Gerrit</b><br> --- <br> Specific roles are assigned through <br> the CR GerritGroupMember"]\n        ArgoCD ~~~ Gerrit\n        PortalUI ~~~ Gerrit\n    end\n\n    keycloak_roles --\x3e keycloak_roles_components\n    keycloak_groups --\x3e keycloak_groups_components\n\n    component_access_control["Component Access <br> Control"] --\x3e keycloak_roles["Keycloak Roles"]\n    component_access_control["Component Access <br> Control"] --\x3e keycloak_groups["Keycloak Groups"]'}),"\n",(0,o.jsx)(r.p,{children:"Components, highlighted in red, require additional configuration directly within the tool's UI."}),"\n",(0,o.jsx)(r.admonition,{type:"info",children:(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.code,{children:"${platform}"})," is a placeholder for the platform name (namespace), where the KubeRocketCI is deployed."]})}),"\n",(0,o.jsx)(r.p,{children:"For detailed instructions on setting up OIDC integration for various components, please refer to the following articles:"}),"\n",(0,o.jsxs)(r.ol,{children:["\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.strong,{children:"AWX"})," - ",(0,o.jsx)(r.a,{href:"https://ansible.readthedocs.io/projects/awx/en/latest/",children:"Community Documentation"})]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.strong,{children:"DefectDojo"})," - ",(0,o.jsx)(r.a,{href:"https://documentation.defectdojo.com/usage/permissions/",children:"DefectDojo Permissions"})]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.strong,{children:"Nexus"})," - ",(0,o.jsx)(r.a,{href:"#nexus-repository-manager",children:"Nexus authentication process"})]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.strong,{children:"Report Portal"})," - ",(0,o.jsx)(r.a,{href:"/docs/3.9/operator-guide/project-management-and-reporting/reportportal-keycloak",children:"Report Portal Keycloak Integration"})]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.strong,{children:"Vault"})," - ",(0,o.jsx)(r.a,{href:"https://developer.hashicorp.com/vault/docs/auth/jwt/oidc-providers/keycloak",children:"OIDC provider configuration"})]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.strong,{children:"Tekton"})," - ",(0,o.jsx)(r.a,{href:"/docs/3.9/operator-guide/auth/oauth2-proxy",children:"Tekton Dashboard Authentication"})]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.strong,{children:"Gerrit"})," - ",(0,o.jsx)(r.a,{href:"#gerrit",children:"Gerrit Authentication"})]}),"\n"]}),"\n",(0,o.jsx)(r.h3,{id:"roles",children:"Roles"}),"\n",(0,o.jsxs)(r.p,{children:["The ",(0,o.jsx)(r.code,{children:"shared"})," Keycloak realm defines two composite roles:"]}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"Administrator Role"}),":"]}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:"Designed for users who need administrative access to the tools used on the platform."}),"\n",(0,o.jsxs)(r.li,{children:["This composite role includes the ",(0,o.jsx)(r.code,{children:"administrator"})," and ",(0,o.jsx)(r.code,{children:"sonar-administrators"})," roles."]}),"\n",(0,o.jsxs)(r.li,{children:["Users assigned the ",(0,o.jsx)(r.code,{children:"administrator"})," composite role will inherit both roles."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"Developer Role"}),":"]}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:"Designed for users who need access to the development tools used on the platform."}),"\n",(0,o.jsxs)(r.li,{children:["This composite role includes the ",(0,o.jsx)(r.code,{children:"developer"})," and ",(0,o.jsx)(r.code,{children:"sonar-developers"})," roles."]}),"\n",(0,o.jsxs)(r.li,{children:["Users assigned the ",(0,o.jsx)(r.code,{children:"developer"})," composite role will inherit both roles."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(r.p,{children:"These composite roles simplify the assignment of administrative and development permissions within the KubeRocketCI."}),"\n",(0,o.jsxs)(r.p,{children:["The table below provides an overview of the ",(0,o.jsx)(r.code,{children:"shared"})," realm roles and their types:"]}),"\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{children:"Realm Role Name"}),(0,o.jsx)(r.th,{style:{textAlign:"center"},children:"Regular Role"}),(0,o.jsx)(r.th,{style:{textAlign:"center"},children:"Composite role"})]})}),(0,o.jsxs)(r.tbody,{children:[(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"administrator"}),(0,o.jsx)(r.td,{style:{textAlign:"center"}}),(0,o.jsx)(r.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"developer"}),(0,o.jsx)(r.td,{style:{textAlign:"center"}}),(0,o.jsx)(r.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"sonar-administrators"}),(0,o.jsx)(r.td,{style:{textAlign:"center"},children:"\u2705"}),(0,o.jsx)(r.td,{style:{textAlign:"center"}})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"sonar-developers"}),(0,o.jsx)(r.td,{style:{textAlign:"center"},children:"\u2705"}),(0,o.jsx)(r.td,{style:{textAlign:"center"}})]})]})]}),"\n",(0,o.jsx)(r.h3,{id:"groups",children:"Groups"}),"\n",(0,o.jsxs)(r.p,{children:["KubeRocketCI uses the ",(0,o.jsx)(r.code,{children:"shared"})," realm for group management. The ",(0,o.jsx)(r.a,{href:"https://github.com/epam/edp-install/tree/master/deploy-templates/templates/rbac",children:"groups"})," are designed to control access to various components such as Argo CD, the KubeRocketCI portal, and the EKS cluster."]}),"\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{children:"Group Name"}),(0,o.jsx)(r.th,{children:"Purpose"})]})}),(0,o.jsxs)(r.tbody,{children:[(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:(0,o.jsx)(r.code,{children:"ArgoCDAdmins"})}),(0,o.jsx)(r.td,{children:"Administrator access to Argo CD instance"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:(0,o.jsx)(r.code,{children:"ArgoCD-${platform}-users"})}),(0,o.jsxs)(r.td,{children:["Access to the Argo CD project mapped to the ",(0,o.jsx)(r.code,{children:"${platform}"})," tenant"]})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:(0,o.jsx)(r.code,{children:"oidc-cluster-admins"})}),(0,o.jsx)(r.td,{children:"Full administrator (cluster-admin) access to the kubernetes cluster"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:(0,o.jsx)(r.code,{children:"${platform}-oidc-admins"})}),(0,o.jsx)(r.td,{children:"Administrator access to KubeRocketCI"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:(0,o.jsx)(r.code,{children:"${platform}-oidc-developers"})}),(0,o.jsx)(r.td,{children:"Developer access to KubeRocketCI"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:(0,o.jsx)(r.code,{children:"${platform}-oidc-viewers"})}),(0,o.jsx)(r.td,{children:"Read-only access to view resources in KubeRocketCI"})]})]})]}),"\n",(0,o.jsx)(r.p,{children:"These groups simplify the management of permissions and ensure that users have the appropriate level of access based on their roles and responsibilities."}),"\n",(0,o.jsx)(r.h2,{id:"sonarqube-oidc",children:"SonarQube OIDC"}),"\n",(0,o.jsx)(r.p,{children:"Access to SonarQube is managed through configurations in Keycloak (Keycloak Operator) and SonarQube (Sonar Operator). This section provides a detailed walkthrough for configuring access control."}),"\n",(0,o.jsx)(r.h3,{id:"keycloak-configuration",children:"Keycloak Configuration"}),"\n",(0,o.jsxs)(r.p,{children:["SonarQube access is managed using Keycloak roles within the ",(0,o.jsx)(r.code,{children:"shared"})," realm:"]}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.strong,{children:"sonar-developers"}),": Grants developer access to SonarQube."]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.strong,{children:"sonar-administrators"}),": Grants administrative access to SonarQube."]}),"\n"]}),"\n",(0,o.jsx)(r.p,{children:"To grant access, the appropriate role must be assigned to the user in Keycloak."}),"\n",(0,o.jsx)(r.admonition,{title:"Example",type:"note",children:(0,o.jsxs)(r.p,{children:["A user who needs developer access to SonarQube should be assigned the ",(0,o.jsx)(r.code,{children:"sonar-developers"})," role or the ",(0,o.jsx)(r.code,{children:"developer"})," composite role in Keycloak."]})}),"\n",(0,o.jsx)(r.h3,{id:"sonarqube-configuration",children:"SonarQube Configuration"}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.a,{href:"https://github.com/epam/edp-sonar-operator",children:"KubeRocketCI Sonar Operator"})," provides a ",(0,o.jsx)(r.a,{href:"https://docs.sonarsource.com/sonarqube/latest/instance-administration/security/",children:"SonarQube Permission Template"})," to manage user access and permissions for SonarQube projects."]}),"\n",(0,o.jsxs)(r.p,{children:["The template is stored in the SonarQube ",(0,o.jsx)(r.a,{href:"https://github.com/epam/edp-sonar-operator/blob/master/deploy-templates/_crd_examples/permission_template.yaml",children:"custom resource"})," of the operator. An example of a custom resource is shown below."]}),"\n",(0,o.jsx)(r.admonition,{title:"Sonar Permission Template",type:"note",children:(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-yaml",children:'apiVersion: v2.edp.epam.com/v1\nkind: SonarPermissionTemplate\nmetadata:\n  name: edp-default\nspec:\n  name: edp-default\n  description: "KubeRocketCI permission templates (DO NOT REMOVE)"\n  projectKeyPattern: ".+"\n  default: true\n  groupsPermissions:\n    view-group:\n      - user\n    sonar-developers:\n      - user\n      - securityhotspotadmin\n      - issueadmin\n      - codeviewer\n    sonar-administrators:\n      - admin\n      - user\n  sonarRef:\n    name: sonar\n'})})}),"\n",(0,o.jsxs)(r.p,{children:["The SonarQube Permission Template defines three groups: ",(0,o.jsx)(r.code,{children:"view-group"}),", ",(0,o.jsx)(r.code,{children:"sonar-administrators"}),", and ",(0,o.jsx)(r.code,{children:"sonar-developers"}),":"]}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.strong,{children:"view-group"}),": Users who have read-only access to the project. They can view project's data and metrics but cannot modify or interact with it."]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.strong,{children:"sonar-administrators"}),": Users with full control over the SonarQube project. They can create, modify, delete projects, manage user access, and configure SonarQube settings."]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.strong,{children:"sonar-developers"}),": Users actively working on the SonarQube project. They have read and write access, can modify project data and metrics, and configure project-specific settings."]}),"\n"]}),"\n",(0,o.jsx)(r.p,{children:"These groups provide different levels of access based on the user's role and responsibilities."}),"\n",(0,o.jsx)(r.admonition,{type:"info",children:(0,o.jsxs)(r.p,{children:["If a user is not assigned to any group, they will be placed in the ",(0,o.jsx)(r.code,{children:"sonar-users"})," group by default. This group does not have any permissions in the ",(0,o.jsx)(r.code,{children:"edp-default"})," Permission Template."]})}),"\n",(0,o.jsx)(r.h3,{id:"group-permissions",children:"Group Permissions"}),"\n",(0,o.jsx)(r.p,{children:"The following table describes the permissions assigned to each group:"}),"\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{children:"Group Name"}),(0,o.jsx)(r.th,{children:"Sonar Permissions"})]})}),(0,o.jsxs)(r.tbody,{children:[(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"view-group"}),(0,o.jsx)(r.td,{children:"user"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"sonar-administrators"}),(0,o.jsx)(r.td,{children:"admin, user"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"sonar-developers"}),(0,o.jsx)(r.td,{children:"codeviewer, issueadmin, securityhotspotadmin, user"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"sonar-users"}),(0,o.jsx)(r.td,{children:"-"})]})]})]}),"\n",(0,o.jsx)(r.h2,{id:"nexus-repository-manager",children:"Nexus Repository Manager"}),"\n",(0,o.jsx)(r.p,{children:"KubeRocketCI leverages oauth2-proxy to authenticate users in Nexus Repository Manager OSS."}),"\n",(0,o.jsx)(r.p,{children:"The user's access level is determined by the roles assigned in Keycloak."}),"\n",(0,o.jsx)(r.admonition,{type:"info",children:(0,o.jsxs)(r.p,{children:["Only users with either the ",(0,o.jsx)(r.code,{children:"administrator"})," or ",(0,o.jsx)(r.code,{children:"developer"})," role in Keycloak can access Nexus."]})}),"\n",(0,o.jsxs)(r.p,{children:["The platform manages two distinct roles: ",(0,o.jsx)(r.code,{children:"edp-admin"}),", ",(0,o.jsx)(r.code,{children:"edp-viewer"}),"."]}),"\n",(0,o.jsxs)(r.admonition,{title:"Example of edp-admin NexusRole and NexusUser",type:"note",children:[(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-yaml",children:"apiVersion: edp.epam.com/v1alpha1\nkind: NexusRole\nmetadata:\n  name: edp-admin\nspec:\n  id: edp-admin\n  nexusRef:\n    name: nexus\n    kind: Nexus\n  name: edp-admin\n  description: Read and write access to all repos and scripts\n  privileges:\n    - nx-apikey-all\n    - nx-repository-view-*-*-add\n    - nx-repository-view-*-*-browse\n    - nx-repository-view-*-*-edit\n    - nx-repository-view-*-*-read\n    - nx-script-*-add\n    - nx-script-*-delete\n    - nx-script-*-run\n    - nx-search-read\n"})}),(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-yaml",children:"apiVersion: edp.epam.com/v1alpha1\nkind: NexusUser\nmetadata:\n  name: ci-user\n  namespace: nexus\nspec:\n  email: ci.user@edp.com\n  firstName: ci.user\n  id: ci.user\n  lastName: CI\n  nexusRef:\n    kind: Nexus\n    name: nexus\n  roles:\n    - edp-admin\n  secret: $ci-nexus:password\n  status: active\n"})})]}),"\n",(0,o.jsx)(r.h2,{id:"kuberocketci-portal-and-kubernetes-cluster",children:"KubeRocketCI Portal and Kubernetes Cluster"}),"\n",(0,o.jsxs)(r.p,{children:["Both the KubeRocketCI Portal and the Kubernetes cluster use Keycloak groups for access control. Users must be added to the appropriate group in Keycloak to gain access. These groups are configured in the ",(0,o.jsx)(r.code,{children:"broker"})," realm."]}),"\n",(0,o.jsx)(r.admonition,{type:"warning",children:(0,o.jsxs)(r.p,{children:["For the Kubernetes cluster to manage access control correctly, Keycloak must be configured as an OpenID Connect (OIDC) provider. Ensure that your Keycloak setup is properly ",(0,o.jsx)(r.a,{href:"/docs/3.9/operator-guide/auth/configure-keycloak-oidc-eks",children:"configured for OIDC"})," before proceeding."]})}),"\n",(0,o.jsx)(r.admonition,{type:"info",children:(0,o.jsxs)(r.p,{children:["The ",(0,o.jsx)(r.code,{children:"broker"})," realm keeps Kubernetes OIDC client."]})}),"\n",(0,o.jsx)(r.h3,{id:"keycloak-groups",children:"Keycloak Groups"}),"\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{children:"Group Name"}),(0,o.jsx)(r.th,{style:{textAlign:"center"},children:"View"}),(0,o.jsx)(r.th,{style:{textAlign:"center"},children:"Build"}),(0,o.jsx)(r.th,{style:{textAlign:"center"},children:"Deploy"}),(0,o.jsx)(r.th,{style:{textAlign:"center"},children:"Full Namespace Access"})]})}),(0,o.jsxs)(r.tbody,{children:[(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:(0,o.jsx)(r.code,{children:"${platform}-oidc-admins"})}),(0,o.jsx)(r.td,{style:{textAlign:"center"},children:"\u2705"}),(0,o.jsx)(r.td,{style:{textAlign:"center"},children:"\u2705"}),(0,o.jsx)(r.td,{style:{textAlign:"center"},children:"\u2705"}),(0,o.jsx)(r.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:(0,o.jsx)(r.code,{children:"${platform}-oidc-developers"})}),(0,o.jsx)(r.td,{style:{textAlign:"center"},children:"\u2705"}),(0,o.jsx)(r.td,{style:{textAlign:"center"},children:"\u2705"}),(0,o.jsx)(r.td,{style:{textAlign:"center"},children:"\u2705"}),(0,o.jsx)(r.td,{style:{textAlign:"center"}})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:(0,o.jsx)(r.code,{children:"${platform}-oidc-viewers"})}),(0,o.jsx)(r.td,{style:{textAlign:"center"},children:"\u2705"}),(0,o.jsx)(r.td,{style:{textAlign:"center"}}),(0,o.jsx)(r.td,{style:{textAlign:"center"}}),(0,o.jsx)(r.td,{style:{textAlign:"center"}})]})]})]}),"\n",(0,o.jsx)(r.h3,{id:"cluster-rbac-resources",children:"Cluster RBAC Resources"}),"\n",(0,o.jsx)(r.p,{children:"The platform defines five RoleBindings that grant the necessary permissions to the corresponding Keycloak groups mentioned above."}),"\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{children:"RoleBinding Name"}),(0,o.jsx)(r.th,{children:"Role Name"}),(0,o.jsx)(r.th,{children:"Groups"})]})}),(0,o.jsxs)(r.tbody,{children:[(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"tenant-admin"}),(0,o.jsx)(r.td,{children:"cluster-admin"}),(0,o.jsx)(r.td,{children:(0,o.jsx)(r.code,{children:"${platform}-oidc-admins"})})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"tenant-developer"}),(0,o.jsx)(r.td,{children:"tenant-developer"}),(0,o.jsx)(r.td,{children:(0,o.jsx)(r.code,{children:"${platform}-oidc-developers"})})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"tenant-viewer"}),(0,o.jsx)(r.td,{children:"view"}),(0,o.jsxs)(r.td,{children:[(0,o.jsx)(r.code,{children:"${platform}-oidc-viewers"})," , ",(0,o.jsx)(r.code,{children:"${platform}-oidc-developers"})]})]})]})]}),"\n",(0,o.jsx)(r.p,{children:"Platform includes RBAC settings for the full cluster administration privileges."}),"\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{children:"Cluster Role Binding Name"}),(0,o.jsx)(r.th,{children:"Cluster Role Name"}),(0,o.jsx)(r.th,{children:"Group"})]})}),(0,o.jsx)(r.tbody,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"cluster-admin"}),(0,o.jsx)(r.td,{children:"cluster-admin"}),(0,o.jsx)(r.td,{children:(0,o.jsx)(r.code,{children:"oidc-cluster-admins"})})]})})]}),"\n",(0,o.jsx)(r.admonition,{type:"note",children:(0,o.jsxs)(r.p,{children:["KubeRocketCI provides an ",(0,o.jsx)(r.a,{href:"https://kubernetes.io/docs/reference/access-authn-authz/rbac/#aggregated-clusterroles",children:"aggregated"})," ClusterRole ",(0,o.jsx)(r.code,{children:"edp-aggregate-view-${platform}"})," with the permissions to view the KubeRocketCI ",(0,o.jsx)(r.a,{href:"/docs/3.9/api/overview",children:"custom resources"}),"."]})}),"\n",(0,o.jsx)(r.admonition,{type:"info",children:(0,o.jsxs)(r.p,{children:["The ",(0,o.jsx)(r.code,{children:"tenant-admin"})," RoleBinding is created in a namespace by the ",(0,o.jsx)(r.code,{children:"cd-pipeline-operator"}),". The ",(0,o.jsx)(r.code,{children:"tenant-admin"})," RoleBinding assigns the ",(0,o.jsx)(r.code,{children:"admin"})," role to the ",(0,o.jsx)(r.code,{children:"${platform}-oidc-admins"})," and ",(0,o.jsx)(r.code,{children:"${platform}-oidc-developers"})," groups."]})}),"\n",(0,o.jsx)(r.h3,{id:"grant-user-access-to-the-created-namespaces",children:"Grant User Access to the Created Namespaces"}),"\n",(0,o.jsxs)(r.p,{children:["To provide users with admin or developer privileges for project namespaces, they need to be added to the ",(0,o.jsx)(r.code,{children:"${platform}-oidc-admins"})," and ",(0,o.jsx)(r.code,{children:"${platform}-oidc-developers"})," groups in Keycloak."]}),"\n",(0,o.jsx)(r.h2,{id:"argo-cd",children:"Argo CD"}),"\n",(0,o.jsx)(r.p,{children:"In Argo CD, groups are specified when creating an AppProject to restrict access to deployed applications. To gain access to deployed applications within a project, users must be added to the corresponding Argo CD group in Keycloak. This ensures that only authorized users can access and modify applications within the project."}),"\n",(0,o.jsx)(r.admonition,{type:"info",children:(0,o.jsxs)(r.p,{children:["By default, only the ",(0,o.jsx)(r.code,{children:"ArgoCDAdmins"})," group is automatically created in Keycloak."]})}),"\n",(0,o.jsx)(r.h2,{id:"gerrit",children:"Gerrit"}),"\n",(0,o.jsx)(r.p,{children:"Users should authenticate to Gerrit using their Keycloak credentials."}),"\n",(0,o.jsxs)(r.p,{children:["After logging into Gerrit, users are not automatically assigned to any groups. To add a user to a group, a ",(0,o.jsx)(r.code,{children:"GerritGroupMember"})," custom resource must be created. This custom resource specifies the user's email address and the name of the group to which they should be added."]}),"\n",(0,o.jsxs)(r.p,{children:["Below is an example of a ",(0,o.jsx)(r.code,{children:"GerritGroupMember"})," custom resource:"]}),"\n",(0,o.jsx)(r.admonition,{title:"Gerrit Group Member",type:"note",children:(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-yaml",children:"apiVersion: v2.edp.epam.com/v1\nkind: GerritGroupMember\nmetadata:\n  name: user-admins\nspec:\n  accountId: user@user.com\n  groupId: Administrators\n"})})}),"\n",(0,o.jsxs)(r.p,{children:["Once the ",(0,o.jsx)(r.code,{children:"GerritGroupMember"})," resource is created, the user will inherit the permissions and access levels associated with the specified group."]}),"\n",(0,o.jsx)(r.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:(0,o.jsx)(r.a,{href:"/docs/3.9/user-guide/",children:"KubeRocketCI Portal Overview"})}),"\n",(0,o.jsx)(r.li,{children:(0,o.jsx)(r.a,{href:"/docs/3.9/operator-guide/auth/configure-keycloak-oidc-eks",children:"EKS OIDC With Keycloak"})}),"\n",(0,o.jsx)(r.li,{children:(0,o.jsx)(r.a,{href:"/docs/3.9/operator-guide/cd/argocd-integration",children:"Argo CD Integration"})}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,r,s)=>{s.d(r,{R:()=>i,x:()=>a});var n=s(96540);const o={},t=n.createContext(o);function i(e){const r=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(t.Provider,{value:r},e.children)}}}]);