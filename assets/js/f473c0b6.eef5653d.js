"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[51406],{92090:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"operator-guide/auth/keycloak","title":"Install Keycloak","description":"Inspect the prerequisites and the main steps to perform for installing Keycloak.","source":"@site/docs/operator-guide/auth/keycloak.md","sourceDirName":"operator-guide/auth","slug":"/operator-guide/auth/keycloak","permalink":"/docs/next/operator-guide/auth/keycloak","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/operator-guide/auth/keycloak.md","tags":[],"version":"current","lastUpdatedBy":"Mykola Marusenko","lastUpdatedAt":1727953214000,"frontMatter":{},"sidebar":"operatorGuideSidebar","previous":{"title":"Overview","permalink":"/docs/next/operator-guide/auth/platform-auth-model"},"next":{"title":"Portal OIDC Configuration","permalink":"/docs/next/operator-guide/auth/ui-portal-oidc"}}');var t=s(74848),l=s(28453);const r={},i="Install Keycloak",o={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"PostgreSQL Installation",id:"postgresql-installation",level:2},{value:"Keycloak Installation",id:"keycloak-installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Related Articles",id:"related-articles",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components},{Details:a}=n;return a||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"install-keycloak",children:"Install Keycloak"})}),"\n",(0,t.jsx)(n.p,{children:"Inspect the prerequisites and the main steps to perform for installing Keycloak."}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"The installation process below is given for a Kubernetes cluster. The steps that differ for an OpenShift cluster are\nindicated in the warnings blocks."})}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Kubectl version 1.26.0+ is installed. Please refer to the ",(0,t.jsx)(n.a,{href:"https://kubernetes.io/releases/download/",children:"Kubernetes official website"})," for details."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://helm.sh",children:"Helm"})," version 3.14.0+ is installed. Please refer to the ",(0,t.jsx)(n.a,{href:"https://github.com/helm/helm/releases",children:"Helm page"})," on GitHub for details."]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["Out team recommends a Keycloakx helm chart from the ",(0,t.jsx)(n.a,{href:"https://github.com/codecentric/helm-charts/tree/master/charts/keycloakx",children:"codecentric"})," repository, but other repositories can be used as well (e.g. ",(0,t.jsx)(n.a,{href:"https://github.com/bitnami/charts/tree/master/bitnami/keycloak/",children:"Bitnami"}),").\nBefore installing Keycloak, it is necessary to install a ",(0,t.jsx)(n.a,{href:"https://www.postgresql.org/download/",children:"PostgreSQL database"}),"."]})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["It is also possible to install Keycloak using the cluster add-ons. For details, please refer to the ",(0,t.jsx)(n.a,{href:"/docs/next/operator-guide/add-ons-overview",children:"Install via Add-Ons"})," page."]})}),"\n",(0,t.jsx)(n.h2,{id:"postgresql-installation",children:"PostgreSQL Installation"}),"\n",(0,t.jsx)(n.p,{children:"To install PostgreSQL, follow the steps below:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Check that a security namespace is created. If not, run the following command to create it:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"kubectl create namespace security\n"})}),"\n",(0,t.jsxs)(n.admonition,{type:"warning",children:[(0,t.jsxs)(n.p,{children:["On the OpenShift platform, apply the ",(0,t.jsx)(n.code,{children:"SecurityContextConstraints"})," resource. Change the namespace in the ",(0,t.jsx)(n.code,{children:"users"})," section if required."]}),(0,t.jsxs)(a,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)("b",{children:"View: keycloak-scc.yaml"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'allowHostDirVolumePlugin: false\nallowHostIPC: false\nallowHostNetwork: false\nallowHostPID: false\nallowHostPorts: false\nallowPrivilegeEscalation: true\nallowPrivilegedContainer: false\nallowedCapabilities: null\napiVersion: security.openshift.io/v1\nallowedFlexVolumes: []\ndefaultAddCapabilities: []\nfsGroup:\n  type: MustRunAs\n  ranges:\n    - min: 999\n      max: 65543\ngroups: []\nkind: SecurityContextConstraints\nmetadata:\n  annotations:\n    "helm.sh/hook": "pre-install"\n  name: keycloak\npriority: 1\nreadOnlyRootFilesystem: false\nrequiredDropCapabilities:\n  - KILL\n  - MKNOD\n  - SETUID\n  - SETGID\nrunAsUser:\n  type: MustRunAsRange\n  uidRangeMin: 1\n  uidRangeMax: 65543\nseLinuxContext:\n  type: MustRunAs\nsupplementalGroups:\n  type: RunAsAny\nusers:\n  - system:serviceaccount:security:keycloakx\nvolumes:\n  - configMap\n  - downwardAPI\n  - emptyDir\n  - persistentVolumeClaim\n  - projected\n  - secret\n'})})]}),(0,t.jsxs)(a,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)("b",{children:"View: postgresql-keycloak-scc.yaml"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'allowHostDirVolumePlugin: false\nallowHostIPC: false\nallowHostNetwork: false\nallowHostPID: false\nallowHostPorts: false\nallowPrivilegeEscalation: true\nallowPrivilegedContainer: false\nallowedCapabilities: null\napiVersion: security.openshift.io/v1\nallowedFlexVolumes: []\ndefaultAddCapabilities: []\nfsGroup:\n  type: MustRunAs\n  ranges:\n    - min: 999\n      max: 65543\ngroups: []\nkind: SecurityContextConstraints\nmetadata:\n  annotations:\n      "helm.sh/hook": "pre-install"\n  name: postgresql-keycloak\npriority: 1\nreadOnlyRootFilesystem: false\nrequiredDropCapabilities:\n- KILL\n- MKNOD\n- SETUID\n- SETGID\nrunAsUser:\n  type: MustRunAsRange\n  uidRangeMin: 1\n  uidRangeMax: 65543\nseLinuxContext:\n  type: MustRunAs\nsupplementalGroups:\n  type: RunAsAny\nusers:\n- system:serviceaccount:security:default\nvolumes:\n- configMap\n- downwardAPI\n- emptyDir\n- persistentVolumeClaim\n- projected\n- secret\n'})})]})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Create PostgreSQL admin secret:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"kubectl -n security create secret generic keycloak-postgresql \\\n--from-literal=password=<postgresql_password> \\\n--from-literal=postgres-password=<postgresql_postgres_password>\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Add a helm chart repository:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"helm repo add bitnami https://charts.bitnami.com/bitnami\nhelm repo update\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Install PostgreSQL v15.2.0 using ",(0,t.jsx)(n.a,{href:"https://artifacthub.io/packages/helm/bitnami/postgresql",children:"bitnami/postgresql"})," Helm chart v12.1.15:"]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["The PostgreSQL can be deployed in production ready mode. For example, it may include multiple replicas, persistent storage, autoscaling, and monitoring.\nFor details, please refer to the ",(0,t.jsx)(n.a,{href:"https://github.com/bitnami/charts/tree/master/bitnami/postgresql",children:"official Chart documentation"}),"."]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"helm install postgresql bitnami/postgresql \\\n--version 12.1.15 \\\n--values values.yaml \\\n--namespace security\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Check out the ",(0,t.jsx)(n.em,{children:"values.yaml"})," file sample of the PostgreSQL customization:"]}),"\n",(0,t.jsxs)(a,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)("b",{children:"View: values.yaml"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"# PostgreSQL read only replica parameters\nreadReplicas:\n  # Number of PostgreSQL read only replicas\n  replicaCount: 1\n\nimage:\n  tag: 15.2.0-debian-11-r0\n\nglobal:\n  postgresql:\n    auth:\n      username: admin\n      existingSecret: keycloak-postgresql\n      database: keycloak\n\nprimary:\n  persistence:\n    enabled: true\n    size: 3Gi\n"})})]}),"\n",(0,t.jsx)(n.h2,{id:"keycloak-installation",children:"Keycloak Installation"}),"\n",(0,t.jsx)(n.p,{children:"To install Keycloak, follow the steps below:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Use ",(0,t.jsx)(n.code,{children:"security"})," namespace from the PostgreSQL installation."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Add a chart repository:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"helm repo add codecentric https://codecentric.github.io/helm-charts\nhelm repo update\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Create Keycloak admin secret:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"kubectl -n security create secret generic keycloak-admin-creds \\\n--from-literal=username=<keycloak_admin_username> \\\n--from-literal=password=<keycloak_admin_password>\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Install Keycloak 20.0.3 using ",(0,t.jsx)(n.a,{href:"https://artifacthub.io/packages/helm/codecentric/keycloakx",children:"codecentric/keycloakx"})," Helm chart:"]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["Keycloak can be deployed in production ready mode. For example, it may include multiple replicas, autoscaling, and monitoring.\nFor details, please refer to the ",(0,t.jsx)(n.a,{href:"https://github.com/codecentric/helm-charts/tree/master/charts/keycloakx",children:"official Chart documentation"}),"."]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"helm install keycloakx codecentric/keycloakx \\\n--version 2.3.0 \\\n--values values.yaml \\\n--namespace security\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Check out the ",(0,t.jsx)(n.em,{children:"values.yaml"})," file sample of the Keycloak customization:"]}),"\n",(0,t.jsxs)(a,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)("b",{children:"View: values.yaml"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'replicas: 1\n\n# Deploy the latest version\nimage:\n  tag: "24.0.4"\n\n# The following parameter is unrecommended to expose. Exposed health checks lead to an unnecessary attack vector.\nhealth:\n  enabled: false\n# The following parameter is unrecommended to expose. Exposed metrics lead to an unnecessary attack vector.\nmetrics:\n  enabled: false\n\ncommand:\n  - "/opt/keycloak/bin/kc.sh"\n  - "--verbose"\n  - "start"\n\nextraEnv: |\n  - name: KC_HOSTNAME\n    value: "keycloak.<ROOT_DOMAIN>"\n  - name: KC_SPI_HOSTNAME_DEFAULT_ADMIN\n    value: "keycloak.<ROOT_DOMAIN>"\n  - name: KC_HTTP_ENABLED\n    value: "true"\n  - name: KC_HOSTNAME_STRICT\n    value: "false"\n  - name: KC_HOSTNAME_STRICT_HTTPS\n    value: "false"\n  - name: KC_SPI_EVENTS_LISTENER_JBOSS_LOGGING_SUCCESS_LEVEL\n    value: "info"\n  - name: KEYCLOAK_ADMIN\n    valueFrom:\n      secretKeyRef:\n        name: keycloak-admin-creds\n        key: username\n  - name: KEYCLOAK_ADMIN_PASSWORD\n    valueFrom:\n      secretKeyRef:\n        name: keycloak-admin-creds\n        key: password\n  - name: JAVA_OPTS_APPEND\n    value: >-\n      -XX:+UseContainerSupport\n      -XX:MaxRAMPercentage=50.0\n      -Djava.awt.headless=true\n      -Djgroups.dns.query={{ include "keycloak.fullname" . }}-headless\n      -Dkeycloak.connectionsHttpClient.default.expect-continue-enabled=true\n      -Dkeycloak.connectionsHttpClient.default.reuse-connections=false\n  - name: HTTP_ADDRESS_FORWARDING\n    value: "true"\n  - name: PROXY_ADDRESS_FORWARDING\n    value: "true"\n\n# This block should be uncommented if you install Keycloak on Kubernetes\ningress:\n  enabled: true\n  annotations:\n    nginx.ingress.kubernetes.io/proxy-buffer-size: 256k\n  # Defines the class of the Ingress Controller.\n  # It allows you to choose which Ingress controller in cluster should be used to expose the Keycloak service to the outside world.\n  ingressClassName: "nginx"\n  # Exposes Keycloak paths according to the rules from documentation.\n  # Ref: https://www.keycloak.org/server/reverseproxy#_exposed_path_recommendations\n  console:\n    enabled: false\n  rules:\n    - host: keycloak.<ROOT_DOMAIN>\n      paths:\n        - path: \'{{ tpl .Values.http.relativePath $ | trimSuffix "/" }}/\'\n          pathType: Prefix\n\nproxy:\n  enabled: true\n  mode: "edge"\n\n# This block should be uncommented if you set Keycloak to OpenShift and change the host field\n# route:\n#   enabled: false\n#   # Path for the Route\n#   path: \'/\'\n#   # Host name for the Route\n#   host: "keycloak.<ROOT_DOMAIN>"\n#   # TLS configuration\n#   tls:\n#     enabled: true\n\nresources:\n  limits:\n    memory: "2048Mi"\n  requests:\n    cpu: "50m"\n    memory: "512Mi"\n\n# Check database readiness at startup\ndbchecker:\n  enabled: true\n\ndatabase:\n  vendor: postgres\n  existingSecret: keycloak-postgresql\n  hostname: postgresql\n  port: 5432\n  username: admin\n  database: keycloak\n'})})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsxs)(n.p,{children:["For configuring Keycloak within your environment, it's recommended to utilize the ",(0,t.jsx)(n.a,{href:"https://github.com/epam/edp-keycloak-operator",children:"edp-keycloak-operator"}),".\nThis operator simplifies the integration process by automating the deployment and management of Keycloak instances.\nIt ensures that Keycloak is correctly configured to serve as an identity provider, facilitating secure access management across your applications."]}),"\n",(0,t.jsx)(n.p,{children:"By leveraging the edp-keycloak-operator, you can efficiently manage realms, users, and client configurations, making it an essential tool for robust access control in Kubernetes environments."}),"\n",(0,t.jsx)(n.p,{children:"To create a Keycloak user in the Master realm who can manage other realms, follow these steps:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Create the ",(0,t.jsx)(n.code,{children:"edp_<EDP_PROJECT>"})," user and set the password in the ",(0,t.jsx)(n.code,{children:"Master"})," realm."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["This user should be used by Keycloak Operator to access Keycloak. Please refer to the ",(0,t.jsx)(n.a,{href:"/docs/next/operator-guide/install-kuberocketci",children:"Install KubeRocketCI"})," page for details."]})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In the ",(0,t.jsx)(n.code,{children:"Role Mapping"})," tab, assign the proper roles to the user:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Realm Roles:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"create-realm,"}),"\n",(0,t.jsx)(n.li,{children:"offline_access,"}),"\n",(0,t.jsx)(n.li,{children:"uma_authorization"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Client Roles ",(0,t.jsx)(n.code,{children:"openshift-realm"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"impersonation,"}),"\n",(0,t.jsx)(n.li,{children:"manage-authorization,"}),"\n",(0,t.jsx)(n.li,{children:"manage-clients,"}),"\n",(0,t.jsx)(n.li,{children:"manage-users"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Role mappings",src:s(87350).A+"",title:"Role mappings",width:"1922",height:"624"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"openshift-realm"})," is the realm name used as the ",(0,t.jsx)(n.code,{children:"broker"})," realm, which is utilized for integrating third-party Identity Providers. You can find more information about this integration in the ",(0,t.jsx)(n.a,{href:"https://github.com/epam/edp-cluster-add-ons/tree/main/add-ons/kuberocketci-rbac",children:"kuberocketci-rbac"})," repository of the KubeRocketCI platform."]})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/next/operator-guide/install-kuberocketci",children:"Install KubeRocketCI"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/next/operator-guide/artifacts-management/harbor-installation",children:"Install Harbor"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/next/operator-guide/add-ons-overview",children:"Install via Add-Ons"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},87350:(e,n,s)=>{s.d(n,{A:()=>a});const a=s.p+"assets/images/keycloak-roles-f38ded3fb7e26b9022fbf0123554152f.png"},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>i});var a=s(96540);const t={},l=a.createContext(t);function r(e){const n=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);