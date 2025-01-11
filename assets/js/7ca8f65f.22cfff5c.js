"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[67083],{89391:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"operator-guide/auth/eks-oidc-integration","title":"AWS EKS OIDC Integration","description":"This page serves as a comprehensive guide on integrating Keycloak with the edp-keycloak-operator to act as an identity provider for AWS Elastic Kubernetes Service (EKS). It provides detailed step-by-step instructions for creating the necessary realms, users, roles, and client configurations to seamlessly collaborate between Keycloak and EKS. Additionally, it includes instructions on installing the edp-keycloak-operator using Helm charts.","source":"@site/docs/operator-guide/auth/eks-oidc-integration.md","sourceDirName":"operator-guide/auth","slug":"/operator-guide/auth/eks-oidc-integration","permalink":"/docs/next/operator-guide/auth/eks-oidc-integration","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/operator-guide/auth/eks-oidc-integration.md","tags":[],"version":"current","lastUpdatedBy":"oleksandr_taruraiev","lastUpdatedAt":1733240186000,"frontMatter":{}}');var r=a(74848),t=a(28453);const o={},i="AWS EKS OIDC Integration",l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Install Keycloak Operator",id:"install-keycloak-operator",level:2},{value:"Connect Keycloak Operator to Keycloak",id:"connect-keycloak-operator-to-keycloak",level:2},{value:"Related Articles",id:"related-articles",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"aws-eks-oidc-integration",children:"AWS EKS OIDC Integration"})}),"\n",(0,r.jsxs)(n.p,{children:["This page serves as a comprehensive guide on integrating Keycloak with the ",(0,r.jsx)(n.a,{href:"https://github.com/epam/edp-keycloak-operator",children:"edp-keycloak-operator"})," to act as an identity provider for AWS Elastic Kubernetes Service (EKS). It provides detailed step-by-step instructions for creating the necessary realms, users, roles, and client configurations to seamlessly collaborate between Keycloak and EKS. Additionally, it includes instructions on installing the edp-keycloak-operator using Helm charts."]}),"\n",(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/docs/next/operator-guide/auth/configure-keycloak-oidc-eks",children:"EKS Configuration"})," is performed;"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://github.com/helm/helm/releases/tag/v3.10.0",children:"Helm v3.10.0"})," is installed;"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/docs/next/operator-guide/auth/keycloak",children:"Keycloak"})," is installed."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"install-keycloak-operator",children:"Install Keycloak Operator"}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["Alternately, the edp-keycloak-operator can be installed using a GitOps approach via the ",(0,r.jsx)(n.a,{href:"https://github.com/epam/edp-cluster-add-ons/tree/main/clusters/core/addons/kuberocketci-rbac",children:"edp-cluster-add-ons"})," repository. For detailed installation instructions, please refer to the ",(0,r.jsx)(n.a,{href:"/docs/next/operator-guide/add-ons-overview",children:"Install via Add-ons"})," guide."]})}),"\n",(0,r.jsx)(n.p,{children:"To install the Keycloak operator, follow the steps below:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Add the ",(0,r.jsx)(n.code,{children:"epamedp"})," Helm chart to a local client:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"helm repo add epamedp https://epam.github.io/edp-helm-charts/stable\nhelm repo update\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Install the Keycloak operator:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"helm install keycloak-operator epamedp/keycloak-operator --namespace security --set name=keycloak-operator\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"connect-keycloak-operator-to-keycloak",children:"Connect Keycloak Operator to Keycloak"}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["It is also possible to install Keycloak resources using the ",(0,r.jsx)(n.a,{href:"https://github.com/epam/edp-cluster-add-ons/tree/main/clusters/core/addons/eks",children:"edp-cluster-add-ons"})," repository. For details, please refer to the ",(0,r.jsx)(n.a,{href:"/docs/next/operator-guide/add-ons-overview",children:"Install via Add-Ons"})," page."]})}),"\n",(0,r.jsx)(n.p,{children:"The next stage after installing Keycloak is to integrate it with the Keycloak operator. It can be implemented with the following steps:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Create the ",(0,r.jsx)(n.strong,{children:"keycloak"})," secret that contains username and password defined on the ",(0,r.jsx)(n.a,{href:"/docs/next/operator-guide/auth/keycloak#configuration",children:"configuration step"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"kubectl -n security create secret generic keycloak \\\n  --from-literal=username=<username> \\\n  --from-literal=password=<password>\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Create the Keycloak Custom Resource with the Keycloak instance URL and the secret created in the previous step:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"apiVersion: v1.edp.epam.com/v1\nkind: Keycloak\nmetadata:\n  name: main\n  namespace: security\nspec:\n  secret: keycloak                   # Secret name\n  url: https://keycloak.example.com  # Keycloak URL\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Create the KeycloakRealm Custom Resource:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"apiVersion: v1.edp.epam.com/v1\nkind: KeycloakRealm\nmetadata:\n  name: control-plane\n  namespace: security\nspec:\n  realmName: control-plane\n  keycloakOwner: main\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Create the ",(0,r.jsx)(n.code,{children:"KeycloakRealmGroup"})," Custom Resource for both administrators and developers:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"administrators:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"apiVersion: v1.edp.epam.com/v1\nkind: KeycloakRealmGroup\nmetadata:\n  name: administrators\n  namespace: security\nspec:\n  realm: control-plane\n  name: eks-oidc-administrator\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"developers:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"apiVersion: v1.edp.epam.com/v1\nkind: KeycloakRealmGroup\nmetadata:\n  name: developers\n  namespace: security\nspec:\n  realm: control-plane\n  name: eks-oidc-developers\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Create the ",(0,r.jsx)(n.code,{children:"KeycloakClientScope"})," Custom Resource:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'apiVersion: v1.edp.epam.com/v1\nkind: KeycloakClientScope\nmetadata:\n  name: groups-keycloak-eks\n  namespace: security\nspec:\n  name: groups\n  realm: control-plane\n  description: "Group Membership"\n  protocol: openid-connect\n  protocolMappers:\n    - name: groups\n      protocol: openid-connect\n      protocolMapper: "oidc-group-membership-mapper"\n      config:\n        "access.token.claim": "true"\n        "claim.name": "groups"\n        "full.path": "false"\n        "id.token.claim": "true"\n        "userinfo.token.claim": "true"\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Create the ",(0,r.jsx)(n.code,{children:"KeycloakClient"})," Custom Resource:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'apiVersion: v1.edp.epam.com/v1\nkind: KeycloakClient\nmetadata:\n  name: eks\n  namespace: security\nspec:\n  advancedProtocolMappers: true\n  clientId: eks\n  directAccess: true\n  public: false\n  defaultClientScopes:\n    - groups\n  targetRealm: control-plane\n  webUrl: "http://localhost:8000"\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Create the KeycloakRealmUser Custom Resource for both administrator and developer roles:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"administrator:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'apiVersion: v1.edp.epam.com/v1\nkind: KeycloakRealmUser\nmetadata:\n  name: keycloakrealmuser-admin\n  namespace: security\nspec:\n  realm: control-plane\n  username: "administrator"\n  firstName: "John"\n  lastName: "Snow"\n  email: "administrator@example.com"\n  enabled: true\n  emailVerified: true\n  password: "12345678"\n  keepResource: true\n  requiredUserActions:\n    - UPDATE_PASSWORD\n  groups:\n    - eks-oidc-administrator\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"developer:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'apiVersion: v1.edp.epam.com/v1\nkind: KeycloakRealmUser\nmetadata:\n  name: keycloakrealmuser-developer\n  namespace: security\nspec:\n  realm: control-plane\n  username: "developers"\n  firstName: "John"\n  lastName: "Snow"\n  email: "developers@example.com"\n  enabled: true\n  emailVerified: true\n  password: "12345678"\n  keepResource: true\n  requiredUserActions:\n    - UPDATE_PASSWORD\n  groups:\n    - eks-oidc-developers\n'})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["To connect the created Keycloak resources with permissions, it is necessary to bind the created Keycloak groups to Kubernetes roles, e.g., assigning the Keycloak group ",(0,r.jsx)(n.code,{children:"administrators"})," the Kubernetes Cluster role ",(0,r.jsx)(n.code,{children:"cluster-admin"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"apiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRoleBinding\nmetadata:\n  name: oidc-cluster-admins\nsubjects:\n  - kind: Group\n    apiGroup: rbac.authorization.k8s.io\n    name: administrators\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: ClusterRole\n  name: cluster-admin\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["As a result, Keycloak is integrated with the AWS Elastic Kubernetes Service. This integration allows users to easily log in to the EKS cluster using their kubeconfig files and ",(0,r.jsx)(n.code,{children:"kubelogin"}),", while managing permissions through Keycloak. This seamless integration enhances the user experience and streamlines the management of access control within the KubeRocketCI platform."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/next/operator-guide/auth/keycloak",children:"Keycloak Installation"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/next/operator-guide/auth/configure-keycloak-oidc-eks",children:"EKS OIDC With Keycloak"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>o,x:()=>i});var s=a(96540);const r={},t=s.createContext(r);function o(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);