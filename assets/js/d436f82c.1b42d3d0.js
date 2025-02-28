"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[17755],{34482:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"operator-guide/artifacts-management/harbor-installation","title":"Install Harbor","description":"Step-by-step guide on installing Harbor within KubeRocketCI for secure and efficient application image storage during the build process.","source":"@site/versioned_docs/version-3.10/operator-guide/artifacts-management/harbor-installation.md","sourceDirName":"operator-guide/artifacts-management","slug":"/operator-guide/artifacts-management/harbor-installation","permalink":"/docs/operator-guide/artifacts-management/harbor-installation","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/operator-guide/artifacts-management/harbor-installation.md","tags":[],"version":"3.10","lastUpdatedBy":"Oleksandr_Stepanov@epam.com","lastUpdatedAt":1740746844000,"frontMatter":{"title":"Install Harbor","description":"Step-by-step guide on installing Harbor within KubeRocketCI for secure and efficient application image storage during the build process.","sidebar_label":"Install Harbor"},"sidebar":"operatorGuideSidebar","previous":{"title":"Sonatype Nexus Integration","permalink":"/docs/operator-guide/artifacts-management/package-registry"},"next":{"title":"Harbor OIDC Configuration","permalink":"/docs/operator-guide/artifacts-management/harbor-oidc"}}');var s=n(74848),a=n(28453);const i={title:"Install Harbor",description:"Step-by-step guide on installing Harbor within KubeRocketCI for secure and efficient application image storage during the build process.",sidebar_label:"Install Harbor"},o="Install Harbor",l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation",level:2},{value:"Related Articles",id:"related-articles",level:2}];function d(e){const r={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components},{Details:n,Head:t}=r;return n||p("Details",!0),t||p("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.header,{children:(0,s.jsx)(r.h1,{id:"install-harbor",children:"Install Harbor"})}),"\n",(0,s.jsx)(t,{children:(0,s.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/operator-guide/artifacts-management/harbor-installation/"})}),"\n",(0,s.jsx)(r.p,{children:"One of the storage options for application images within KubeRocketCI is Harbor, utilized during the application build process."}),"\n",(0,s.jsxs)(r.p,{children:["Inspect the prerequisites and the main steps to perform for enabling ",(0,s.jsx)(r.a,{href:"https://goharbor.io/docs/2.8.0/",children:"Harbor"})," on the platform."]}),"\n",(0,s.jsx)(r.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["Kubectl version 1.29.0+ is installed. Please refer to the ",(0,s.jsx)(r.a,{href:"https://kubernetes.io/releases/download/",children:"Kubernetes official website"})," for details."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"https://helm.sh",children:"Helm"})," version 3.14.0+ is installed. Please refer to the ",(0,s.jsx)(r.a,{href:"https://github.com/helm/helm/releases",children:"Helm page"})," on GitHub for details."]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(r.p,{children:"To install Harbor with Helm, follow the steps below:"}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"Create a namespace for Harbor:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"kubectl create namespace harbor\n"})}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"Create a secret for administrator user and registry:"}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"Manually"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"kubectl create secret generic harbor \\\n    --from-literal=HARBOR_ADMIN_PASSWORD=<secret> \\\n    --from-literal=REGISTRY_HTPASSWD=<secret> \\\n    --from-literal=REGISTRY_PASSWD=<secret> \\\n    --from-literal=secretKey=<secret> \\\n    --namespace harbor\n"})}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["Using ",(0,s.jsx)(r.code,{children:"External Secret Operator"})," (ESO)"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:(0,s.jsx)("b",{children:"Create Secret data with ESO"})}),(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-yaml",children:"apiVersion: external-secrets.io/v1beta1\nkind: ExternalSecret\nmetadata:\n  name: harbor\n  namespace: harbor\nspec:\n  refreshInterval: 1h\n  secretStoreRef:\n    kind: SecretStore\n    name: aws-parameterstore\ndata:\n- secretKey: HARBOR_ADMIN_PASSWORD\n  remoteRef:\n    conversionStrategy: Default\n    decodingStrategy: None\n    key: /control-plane/deploy-secrets\n    property: harbor.HARBOR_ADMIN_PASSWORD\n- secretKey: secretKey\n  remoteRef:\n    conversionStrategy: Default\n    decodingStrategy: None\n    key: /control-plane/deploy-secrets\n    property: harbor.secretKey\n- secretKey: REGISTRY_HTPASSWD\n  remoteRef:\n    conversionStrategy: Default\n    decodingStrategy: None\n    key: /control-plane/deploy-secrets\n    property: harbor.REGISTRY_HTPASSWD\n- secretKey: REGISTRY_PASSWD\n  remoteRef:\n    conversionStrategy: Default\n    decodingStrategy: None\n    key: /control-plane/deploy-secrets\n    property: harbor.REGISTRY_PASSWD\n"})})]}),"\n",(0,s.jsxs)(r.admonition,{type:"note",children:[(0,s.jsxs)(r.p,{children:["The ",(0,s.jsx)(r.code,{children:"HARBOR_ADMIN_PASSWORD"})," is the initial password of Harbor admin.",(0,s.jsx)("br",{}),"\nThe ",(0,s.jsx)(r.code,{children:"secretKey"})," is the secret key that is used for encryption. Must be 16 characters long.",(0,s.jsx)("br",{}),"\nThe ",(0,s.jsx)(r.code,{children:"REGISTRY_PASSWD"})," is Harbor registry password.",(0,s.jsx)("br",{}),"\nThe ",(0,s.jsx)(r.code,{children:"REGISTRY_HTPASSWD"})," is login and password in htpasswd string format. This value is the string in the password\nfile generated by the ",(0,s.jsx)(r.code,{children:"htpasswd"})," command where the username is ",(0,s.jsx)(r.code,{children:"harbor_registry_user"})," and the encryption type\nis ",(0,s.jsx)(r.code,{children:"bcrypt"}),".",(0,s.jsx)("br",{}),"\nSee the example below:"]}),(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"htpasswd -bBc passwordfile harbor_registry_user harbor_registry_password\n"})}),(0,s.jsxs)(r.p,{children:["The username must be ",(0,s.jsx)(r.code,{children:"harbor_registry_user"}),".\nThe password must be the value from ",(0,s.jsx)(r.code,{children:"REGISTRY_PASSWD"}),"."]})]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"Add the Helm Harbor Charts for the local client."}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"helm repo add harbor https://helm.goharbor.io\n"})}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["Check the parameters in the Harbor installation chart. For details, please refer to\nthe ",(0,s.jsx)(r.a,{href:"https://github.com/goharbor/harbor-helm/blob/master/values.yaml",children:"values.yaml"})," file."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["Install Harbor in the ",(0,s.jsx)(r.em,{children:"harbor"})," namespace with the Helm tool."]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"helm install harbor harbor/harbor\n    --version 1.12.2 \\\n    --namespace harbor \\\n    --values values.yaml\n"})}),"\n",(0,s.jsx)(r.p,{children:"See the details on the parameters below:"}),"\n",(0,s.jsx)(r.admonition,{title:"Example values.yaml",type:"note",children:(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-yaml",children:'# we use Harbor secret to consolidate all the Harbor secrets\nexistingSecretAdminPassword: harbor\nexistingSecretAdminPasswordKey: HARBOR_ADMIN_PASSWORD\nexistingSecretSecretKey: harbor\n\ncore:\n  # The XSRF key. Will be generated automatically if it isn\'t specified\n  xsrfKey: ""\njobservice:\n  # Secret is used when job service communicates with other components.\n  # If a secret key is not specified, Helm will generate one.\n  # Must be a string of 16 chars.\n  secret: ""\nregistry:\n  # Secret is used to secure the upload state from client\n  # and registry storage backend.\n  # If a secret key is not specified, Helm will generate one.\n  # Must be a string of 16 chars.\n  secret: ""\n  credentials:\n    username: harbor_registry_user\n    existingSecret: harbor\nfullnameOverride: harbor\n# If Harbor is deployed behind the proxy, set it as the URL of proxy\nexternalURL: https://core.harbor.domain\nipFamily:\n  ipv6:\n    enabled: false\nexpose:\n  tls:\n    enabled: false\n  ingress:\n    hosts:\n      core: core.harbor.domain\n      notary: notary.harbor.domain\nupdateStrategy:\n  type: Recreate\npersistence:\n  persistentVolumeClaim:\n    registry:\n      size: 30Gi\n    jobservice:\n      jobLog:\n        size: 1Gi\n    database:\n      size: 2Gi\n    redis:\n      size: 1Gi\n    trivy:\n      size: 5Gi\ndatabase:\n  internal:\n    # The initial superuser password for internal database\n    password: "changeit"\n'})})}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"To check if the installation is successful, run the command below:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"helm status <harbor-release> -n harbor\n"})}),"\n",(0,s.jsx)(r.p,{children:"You can also check ingress endpoints to get Harbor endpoint to enter Harbor UI:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"kubectl describe ingress <harbor_ingress> -n harbor\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"/docs/operator-guide/install-kuberocketci",children:"Install KubeRocketCI"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"/docs/operator-guide/artifacts-management/harbor-integration",children:"Integrate Harbor With KubeRocketCI Pipelines"})}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}function p(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>o});var t=n(96540);const s={},a=t.createContext(s);function i(e){const r=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(a.Provider,{value:r},e.children)}}}]);