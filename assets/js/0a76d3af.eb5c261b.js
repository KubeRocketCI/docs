"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[83303],{97195:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"operator-guide/install-argocd","title":"Install Argo CD","description":"Review the necessary prerequisites and follow the steps to enable Argo CD within KubeRocketCI.","source":"@site/versioned_docs/version-3.9/operator-guide/install-argocd.md","sourceDirName":"operator-guide","slug":"/operator-guide/install-argocd","permalink":"/docs/3.9/operator-guide/install-argocd","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/operator-guide/install-argocd.md","tags":[],"version":"3.9","lastUpdatedBy":"Mykola Serdiuk","lastUpdatedAt":1734511584000,"frontMatter":{},"sidebar":"operatorGuideSidebar","previous":{"title":"Installation Overview","permalink":"/docs/3.9/operator-guide/installation-overview"},"next":{"title":"Install via Add-Ons","permalink":"/docs/3.9/operator-guide/add-ons-overview"}}');var i=s(74848),t=s(28453);const l={},o="Install Argo CD",a={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation",level:2},{value:"Install With Helm",id:"install-with-helm",level:3},{value:"Next Step",id:"next-step",level:2},{value:"Related Articles",id:"related-articles",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components},{Details:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"install-argo-cd",children:"Install Argo CD"})}),"\n",(0,i.jsx)(n.p,{children:"Review the necessary prerequisites and follow the steps to enable Argo CD within KubeRocketCI."}),"\n",(0,i.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsx)(n.p,{children:"The following tools must be installed:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/3.9/operator-guide/install-kuberocketci",children:"KubeRocketCI"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://kubernetes.io/docs/tasks/tools/",children:"Kubectl version 1.24+"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/helm/helm/releases",children:"Helm version 3.10+"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/docs/3.9/operator-guide/auth/keycloak",children:"Keycloak"})," (optional)"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(n.p,{children:"Enabling Argo CD on the platform involves two main steps:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Argo CD installation"}),"\n",(0,i.jsx)(n.li,{children:"Argo CD integration with Add-Ons"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Argo CD can be installed in several ways, please follow the ",(0,i.jsx)(n.a,{href:"https://argo-cd.readthedocs.io/en/stable/operator-manual/installation/",children:"official documentation"})," for more details. It is also possible to install Argo CD using the ",(0,i.jsx)(n.a,{href:"https://github.com/epam/edp-cluster-add-ons/tree/main/argo-cd",children:"edp-cluster-add-ons"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"install-with-helm",children:"Install With Helm"}),"\n",(0,i.jsx)(n.p,{children:"Follow the steps below to install Argo CD using Helm:"}),"\n",(0,i.jsxs)(n.admonition,{title:'"For the OpenShift users"',type:"warning",children:[(0,i.jsxs)(n.p,{children:["When using the OpenShift platform, apply the ",(0,i.jsx)(n.code,{children:"SecurityContextConstraints"})," resource. Change the namespace in the ",(0,i.jsx)(n.code,{children:"users"})," section if required."]}),(0,i.jsxs)(r,{children:[(0,i.jsx)("summary",{children:(0,i.jsx)("b",{children:"View: SecurityContextConstraints"})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'allowHostDirVolumePlugin: false\nallowHostIPC: false\nallowHostNetwork: false\nallowHostPID: false\nallowHostPorts: false\nallowPrivilegeEscalation: true\nallowPrivilegedContainer: false\nallowedCapabilities: null\napiVersion: security.openshift.io/v1\nallowedFlexVolumes: []\ndefaultAddCapabilities: []\nfsGroup:\n  type: MustRunAs\n  ranges:\n    - min: 99\n      max: 65543\ngroups: []\nkind: SecurityContextConstraints\nmetadata:\n  annotations:\n      "helm.sh/hook": "pre-install"\n  name: argo-redis-ha\npriority: 1\nreadOnlyRootFilesystem: false\nrequiredDropCapabilities:\n- KILL\n- MKNOD\n- SETUID\n- SETGID\nrunAsUser:\n  type: MustRunAsRange\n  uidRangeMin: 1\n  uidRangeMax: 65543\nseLinuxContext:\n  type: MustRunAs\nsupplementalGroups:\n  type: RunAsAny\nseccompProfiles:\n  - \'*\'\nusers:\n- system:serviceaccount:argocd:argo-redis-ha\n- system:serviceaccount:argocd:argo-redis-ha-haproxy\n- system:serviceaccount:argocd:argocd-notifications-controller\n- system:serviceaccount:argocd:argo-argocd-repo-server\n- system:serviceaccount:argocd:argocd-server\nvolumes:\n- configMap\n- downwardAPI\n- emptyDir\n- persistentVolumeClaim\n- projected\n- secret\n'})})]})]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Fork the ",(0,i.jsx)(n.a,{href:"https://github.com/epam/edp-cluster-add-ons/tree/main/argo-cd",children:"Add-Ons"})," repository to personal account."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Run the installation:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"helm dependency update argo-cd\nhelm install argocd argo-cd -n argocd --create-namespace\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Port-forward Argo CD service using kubectl:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"kubectl port-forward svc/argo-argocd-server 8080:80 -n argocd\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Login to the Argo CD server in browser using login and password:"}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsx)(n.p,{children:"By default, to access the console with administrative privileges, use the following credentials:"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"URL: localhost:8080"}),"\n",(0,i.jsx)(n.li,{children:"Login: admin"}),"\n"]})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:'title="password"',children:"kubectl get secret -n argocd argocd-initial-admin-secret --template={{.data.password}} | base64 -d\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Integrate Argo CD with ",(0,i.jsx)(n.a,{href:"/docs/3.9/operator-guide/add-ons-overview",children:"Add-Ons"})," and Install Core Add-Ons"]}),"\n",(0,i.jsx)(n.p,{children:"To ensure the environment functions correctly, it is necessary to install the following core components:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Nginx Ingress Controller"}),": Provides external endpoint management through ingress resources."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"External Secrets Operator (ESO)"}),": Manages secure provisioning and access to secrets."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Keycloak (KK)"}),": Enables Single Sign-On (SSO) for authentication."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Keycloak Operator"}),": Simplifies the configuration and management of Keycloak instances."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["These components can be installed using the prepared ",(0,i.jsx)(n.a,{href:"https://github.com/epam/edp-cluster-add-ons",children:"add-ons repository"}),". Detailed installation instructions are available in the ",(0,i.jsx)(n.a,{href:"add-ons-overview",children:"add-ons installation guide"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["To configure these components, refer to the relevant sections in ",(0,i.jsx)(n.code,{children:"values.yaml"}),", which include the required parameters for enabling and customizing the add-ons."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Add-Ons Overview",src:s(59791).A+"",title:"Add-Ons Overview",width:"1922",height:"882"})}),"\n",(0,i.jsx)(n.p,{children:"After completing the installation of these components, proceed with the configuration of Argo CD."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Update Argo CD helm chart:"}),"\n",(0,i.jsxs)(n.admonition,{type:"note",children:[(0,i.jsxs)(n.p,{children:["After installing the necessary add-ons, such as the External Secrets Operator, it is recommended to add ESO components for all secrets that were manually created during the integration of ",(0,i.jsx)(n.a,{href:"/docs/3.9/operator-guide/add-ons-overview",children:"add-ons with Argo CD"}),". An example can be found ",(0,i.jsx)(n.a,{href:"https://github.com/epam/edp-cluster-add-ons/blob/main/argo-cd/templates/external-secrets/externalsecret-argocd-github.yaml",children:"here"}),"."]}),(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsx)(n.p,{children:"Make sure Kubernetes resources have the required labels for Argo CD to manage them."}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"metadata:\n  label:\n    app.kubernetes.io/part-of: argocd\n"})})]})]}),"\n",(0,i.jsxs)(n.p,{children:["To enable features such as ingress, login via oidc provider, provisioning secret using ESO need to update Argo CD with ",(0,i.jsx)(n.a,{href:"https://github.com/epam/edp-cluster-add-ons/blob/main/argo-cd/values.yaml",children:"values"})," below:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:'title=" kubernetes values.yaml"',children:'argo-cd:\n  global:\n    # -- Default domain used by all components\n    ## Used for ingresses, certificates, SSO, notifications, etc.\n    domain: argocd.example.com\n  configs:\n    cm:\n      # required when SSO is enabled\n      url: "https://argocd.example.com"\n    oidc.config: |\n      issuer: https://keycloak.example/auth/realms/shared\n  server:\n    ingress:\n      enabled: true\n      hosts:\n        - "argocd.example.com"\noidc:\n  enabled: true\neso:\n  enabled: true\n'})}),"\n",(0,i.jsxs)(r,{children:[(0,i.jsx)("summary",{children:(0,i.jsx)("b",{children:"View: openshift values.yaml"})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'argo-cd:\nglobal:\n  # -- Default domain used by all components\n  ## Used for ingresses, certificates, SSO, notifications, etc.\n  domain: argocd.example.com\nconfigs:\n  cm:\n    # required when SSO is enabled\n    url: "https://argocd.example.com"\n  oidc.config: |\n    issuer: https://keycloak.example/auth/realms/shared\nserver:\n  route:\n    enabled: true\n    hostname: "argocd.example.com"\n    termination_type: edge\n    termination_policy: Redirect\noidc:\nenabled: true\neso:\nenabled: true\n'})})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"next-step",children:"Next Step"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Install third-party tools via ",(0,i.jsx)(n.a,{href:"add-ons-overview",children:"Add-Ons"})]}),"\n",(0,i.jsxs)(n.li,{children:["Install ",(0,i.jsx)(n.a,{href:"install-kuberocketci",children:"KubeRocketCI"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"After completing the steps outlined in this documentation, the following results should be achieved:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Centralized Argo CD Instance"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"A fully deployed and operational Argo CD instance installed using Helm."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Add-Ons Repository Configured"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Add-ons repository integrated and configured with Argo CD for managing additional components."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Core Components Deployed"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Essential infrastructure components, such as:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"External Secrets Operator (ESO)"})," for secure secret management."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Keycloak"})," and ",(0,i.jsx)(n.strong,{children:"Keycloak Operator"})," for Single Sign-On (SSO)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Nginx Ingress Controller"})," for external endpoint management."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/3.9/operator-guide/cd/argocd-integration",children:"Argo CD Integration"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/3.9/operator-guide/add-ons-overview",children:"Install via Add-Ons"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},59791:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/argocd-addons-0fa66b46c5da511e4f35d528e97f4b9d.png"},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>o});var r=s(96540);const i={},t=r.createContext(i);function l(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);