"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[47364],{11443:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"operator-guide/auth/namespace-management","title":"Kubernetes Namespace Management","description":"KubeRocketCI deploys applications to namespaces. By default, the platform automatically creates these namespaces. This page provides information on an alternative approach to namespace management.","source":"@site/versioned_docs/version-3.10/operator-guide/auth/namespace-management.md","sourceDirName":"operator-guide/auth","slug":"/operator-guide/auth/namespace-management","permalink":"/docs/operator-guide/auth/namespace-management","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/operator-guide/auth/namespace-management.md","tags":[],"version":"3.10","lastUpdatedBy":"Sergiy Kulanov","lastUpdatedAt":1730106685000,"frontMatter":{},"sidebar":"operatorGuideSidebar","previous":{"title":"Tekton Dashboard Authentication","permalink":"/docs/operator-guide/auth/oauth2-proxy"},"next":{"title":"Overview","permalink":"/docs/operator-guide/microsoft-entra/oidc-authentication-overview"}}');var i=n(74848),s=n(28453);const o={},r="Kubernetes Namespace Management",c={},l=[{value:"Overview",id:"overview",level:2},{value:"Disable Automatic Namespace Creation",id:"disable-automatic-namespace-creation",level:2},{value:"CD Pipeline Operator RBAC Model",id:"cd-pipeline-operator-rbac-model",level:2},{value:"Related Articles",id:"related-articles",level:2}];function p(e){const a={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.header,{children:(0,i.jsx)(a.h1,{id:"kubernetes-namespace-management",children:"Kubernetes Namespace Management"})}),"\n",(0,i.jsxs)(a.p,{children:["KubeRocketCI ",(0,i.jsx)(a.a,{href:"/docs/user-guide/add-cd-pipeline",children:"deploys"})," applications to namespaces. By default, the platform automatically creates these namespaces. This page provides information on an alternative approach to namespace management."]}),"\n",(0,i.jsx)(a.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsxs)(a.p,{children:["Namespaces are created by the platform when user creates CD Pipelines. The operator creates them according to the specific format: ",(0,i.jsx)(a.code,{children:"<platform-namespace>-<application-name>-<stage-name>"}),".\nThe ",(0,i.jsx)(a.a,{href:"https://github.com/epam/edp-cd-pipeline-operator",children:"cd-pipeline-operator"})," should have the permissions to automatically create namespaces when deploying applications and delete them when uninstalling applications."]}),"\n",(0,i.jsx)(a.h2,{id:"disable-automatic-namespace-creation",children:"Disable Automatic Namespace Creation"}),"\n",(0,i.jsxs)(a.p,{children:["In certain scenarios, the automatic generation of namespaces might be restricted. For instance, project-specific security protocols might necessitate disabling this feature. This can be achieved by adjusting the ",(0,i.jsx)(a.code,{children:"manageNamespace"})," parameter within the ",(0,i.jsx)(a.a,{href:"https://github.com/epam/edp-cd-pipeline-operator/blob/release/2.20/deploy-templates/values.yaml#L96",children:"values.yaml"})," file.\nBy default, ",(0,i.jsx)(a.code,{children:"manageNamespace"})," is enabled (true), but it can be toggled off (false). Consequently, users might encounter issues when attempting to deploy applications through the KubeRocketCI Portal UI due to permission constraints:"]}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.img,{alt:"Namespace creation error",src:n(47163).A+"",width:"3482",height:"1986"})}),"\n",(0,i.jsxs)(a.p,{children:["The error highlighted above indicates the necessity for users to manually create a namespace following the ",(0,i.jsx)(a.code,{children:"<platform-namespace>-<application-name>-<stage-name>"})," naming convention prior to stage creation. Moreover, the cd-pipeline-operator requires administrative rights to manage the namespace effectively. For instructions on manually creating a namespace, proceed with the steps outlined below:"]}),"\n",(0,i.jsxs)(a.ol,{children:["\n",(0,i.jsxs)(a.li,{children:["\n",(0,i.jsx)(a.p,{children:"Create the namespace by running the command below:"}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-bash",children:"  kubectl create namespace <platform-namespace>-<application-name>-<stage-name>\n"})}),"\n",(0,i.jsx)(a.admonition,{type:"note",children:(0,i.jsxs)(a.p,{children:["The ",(0,i.jsx)(a.code,{children:"<platform-namespace>-<application-name>-<stage-name>"})," format for namespaces is set by default but is not mandatory. You can set your custom namespace when creating an Environment."]})}),"\n"]}),"\n",(0,i.jsxs)(a.li,{children:["\n",(0,i.jsxs)(a.p,{children:["Create the administrator RoleBinding resource by applying the file below with the ",(0,i.jsx)(a.code,{children:"kubectl apply -f grant_admin_permissions.yaml"})," command:"]}),"\n",(0,i.jsx)(a.admonition,{title:"grant_admin_permissions.yaml",type:"note",children:(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-yaml",children:"kind: RoleBinding\napiVersion: rbac.authorization.k8s.io/v1\nmetadata:\n  name: edp-cd-pipeline-operator-admin\n  namespace: <platform-namespace>-<application-name>-<stage-name>\nsubjects:\n  - kind: ServiceAccount\n    name: edp-cd-pipeline-operator\n    namespace: edp\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: ClusterRole\n  name: admin\n"})})}),"\n"]}),"\n",(0,i.jsxs)(a.li,{children:["\n",(0,i.jsx)(a.p,{children:"Restart the cd-pipeline-operator deployment, to speedup reconciliation."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(a.h2,{id:"cd-pipeline-operator-rbac-model",children:"CD Pipeline Operator RBAC Model"}),"\n",(0,i.jsxs)(a.p,{children:["The ",(0,i.jsx)(a.code,{children:"manageNamespace"})," parameter also defines the resources that will be created depending on the cluster deployed whether it is OpenShift or Kubernetes. This scheme displays the nesting of operator input parameters:"]}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.img,{alt:"CD Pipeline Operator Input Parameter Scheme",src:n(69388).A+"",width:"1013",height:"503"})}),"\n",(0,i.jsx)(a.admonition,{type:"note",children:(0,i.jsxs)(a.p,{children:["When deploying application on the OpenShift cluster, the ",(0,i.jsx)(a.code,{children:"registry-view"})," RoleBinding is created in the main namespace."]})}),"\n",(0,i.jsx)(a.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsx)(a.li,{children:(0,i.jsx)(a.a,{href:"/docs/operator-guide/auth/platform-auth-model",children:"KubeRocketCI Access Model"})}),"\n",(0,i.jsx)(a.li,{children:(0,i.jsx)(a.a,{href:"/docs/operator-guide/auth/configure-keycloak-oidc-eks",children:"EKS OIDC With Keycloak"})}),"\n"]})]})}function d(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},47163:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/failed_cd_pipeline_creation-a8b4b25ee80f57ae52206ea0d049ad91.png"},69388:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/manage-namespace-b2390f2f811b6776a07020c6edae0a9c.png"},28453:(e,a,n)=>{n.d(a,{R:()=>o,x:()=>r});var t=n(96540);const i={},s=t.createContext(i);function o(e){const a=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(s.Provider,{value:a},e.children)}}}]);