"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[51775],{11049:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"operator-guide/advanced-installation/capsule","title":"Install Capsule","description":"This article explains how the KubeRocketCI leverages Capsule capabilities to enable isolation for both the core platform components and the business applications workload.","source":"@site/docs/operator-guide/advanced-installation/capsule.md","sourceDirName":"operator-guide/advanced-installation","slug":"/operator-guide/advanced-installation/capsule","permalink":"/docs/next/operator-guide/advanced-installation/capsule","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/operator-guide/advanced-installation/capsule.md","tags":[],"version":"current","lastUpdatedBy":"Sergiy Kulanov","lastUpdatedAt":1737662090000,"frontMatter":{},"sidebar":"operatorGuideSidebar","previous":{"title":"Overview","permalink":"/docs/next/operator-guide/advanced-installation/overview"},"next":{"title":"Custom Certificates","permalink":"/docs/next/operator-guide/advanced-installation/custom-certificates"}}');var s=a(74848),i=a(28453);const o={},l="Install Capsule",r={},c=[{value:"Integration",id:"integration",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Related Articles",id:"related-articles",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{Head:a}=n;return a||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"install-capsule",children:"Install Capsule"})}),"\n",(0,s.jsx)(a,{children:(0,s.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/operator-guide/advanced-installation/capsule/"})}),"\n",(0,s.jsxs)(n.p,{children:["This article explains how the KubeRocketCI leverages Capsule capabilities to enable isolation for both the ",(0,s.jsx)(n.a,{href:"/docs/next/operator-guide/install-kuberocketci",children:"core"})," platform components and the business applications ",(0,s.jsx)(n.a,{href:"/docs/next/user-guide/add-cd-pipeline",children:"workload"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"KubeRocketCI uses Capsule to ensure resource isolation. It is essential to define constraints through the Capsule tenant approach. This approach serves two primary objectives: limiting the resources allocated to the KubeRocketCI components and regulating the resources utilized by each deployed environment."}),"\n",(0,s.jsxs)(n.p,{children:["To ensure isolation for the core platform components, create the ",(0,s.jsx)(n.code,{children:"edp"})," namespace under the Capsule tenant. Use the template provided in this instruction to create the Capsule tenant specifically for the core components."]}),"\n",(0,s.jsx)(n.h2,{id:"integration",children:"Integration"}),"\n",(0,s.jsx)(n.p,{children:"The following diagram outlines the general steps involved in configuring Capsule for seamless integration with KubeRocketCI. This process ensures efficient resource isolation, allowing for the deployment and management of both KubeRocketCI core platform components and business application workloads.\nFollow the sequential flow of the diagram to successfully integrate Capsule with the KubeRocketCI platform:"}),"\n",(0,s.jsx)(n.mermaid,{value:"graph LR;\n    A(Capsule Installation) --\x3e B(Tenant Configuration) --\x3e C(Impersonation) --\x3e D(Create Namespace)--\x3e E(Deploy KubeRocketCI)"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Capsule Installation"})," - This initial step involves setting up Capsule on your environment."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Tenant Configuration"})," - Once Capsule is installed, the next critical step is configuring the Capsule tenant. This involves defining specific parameters and constraints to regulate the allocation of resources to KubeRocketCI components."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Impersonation"})," - Impersonation plays a role in managing user identities and permissions within the Capsule environment. This step ensures secure and controlled access to resources."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Create Namespace"})," - The creation of a dedicated namespace under Capsule is crucial for isolating and managing the core components of the platform. This step establishes the environment where KubeRocketCI will be deployed (",(0,s.jsx)(n.code,{children:"edp"})," by default)."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Deploy KubeRocketCI"})," - The final step involves deploying the platform within the configured Capsule environment."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(n.p,{children:"The installation procedure consists of two steps:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Define the namespace where KubeRocketCI will be installed in Capsule values:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:'title="values.yaml"',children:"manager:\n  options:\n    # -- Boolean, enforces the Tenant owner, during Namespace creation, to name it using the selected Tenant name as prefix, separated by a dash\n    forceTenantPrefix: true\n    # enable capsule for KubeRocketCI tenant and cd-pipeline-operator\n    # NOTE: Capsule cannot manage cluster system namespaces\n    capsuleUserGroups:\n      - capsule.clastix.io\n      # enable for cd-pipeline-operator https://github.com/epam/edp-cd-pipeline-operator/blob/release/2.17/deploy-templates/values.yaml#L10\n      - system:serviceaccounts:edp  # edp - Namespace where KubeRocketCI will be installed.\n      - masters                     # Kubernetes group that manages the KubeRocketCI tenant.\n      # uncomment if Argo CD manage main KubeRocketCI tenant\n      #- system:serviceaccounts:argocd\n      # uncomment if edp-oidc-admins group manage main KubeRocketCI tenant\n      #- edp-oidc-admins\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["To install the Capsule tool, use the ",(0,s.jsx)(n.a,{href:"https://github.com/epam/edp-cluster-add-ons",children:"Cluster Add-Ons"})," approach. For more details, please refer to the ",(0,s.jsx)(n.a,{href:"https://capsule.clastix.io/docs/general",children:"Capsule"})," official page."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsx)(n.p,{children:"After installing Capsule, the next crucial step is configuration. Follow the guidelines provided below to configure Capsule and ensure seamless integration with your system:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Specify the Capsule tenant configuration:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:'title="edp-tenant-example.yaml"',children:"apiVersion: capsule.clastix.io/v1beta2\nkind: Tenant\nmetadata:\n  name: edp-tenant\nspec:\n  ...\n  owners:\n    - clusterRoles:\n        - admin\n        - capsule-namespace-manager\n      kind: Group\n      name: system:masters\n    #\n    # Uncomment if Argo CD manage KubeRocketCI tenant\n    #- clusterRoles:\n    #    - admin\n    #    - capsule-namespace-manager\n    #  kind: ServiceAccount\n    #  name: system:serviceaccount:argocd:argocd-application-controller\n    #\n    # Uncomment if edp-oidc-admins group manage KubeRocketCI tenant\n    #- clusterRoles:\n    #    - admin\n    #    - capsule-namespace-manager\n    #  kind: Group\n    #  name: edp-oidc-admins\n  ...\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"system:masters"})," Group that manages the KubeRocketCI tenant. Must be declared in the above configuration of the ",(0,s.jsx)(n.code,{children:"capsuleUserGroups"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"The following example includes additional specifications that can be used to manage the KubeRocketCI tenant:"}),"\n",(0,s.jsx)(n.admonition,{title:"Tenant configuration example",type:"note",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"apiVersion: capsule.clastix.io/v1beta2\nkind: Tenant\nmetadata:\n  name: edp-tenant\nspec:\n  ingressOptions:\n    allowWildcardHostnames: false\n    allowedHostnames:\n      allowedRegex: ^.*example.com$ # DNSwildcard for KubeRocketCI usage\n    hostnameCollisionScope: Tenant\n  limitRanges:\n    items:\n      - limits:\n            # The default limits apply to each container unless otherwise specified by default\n          - default:\n              cpu: 768m\n              memory: 768Mi\n            # The default requests apply to each container unless otherwise specified by default\n            defaultRequest:\n              cpu: 256m\n              memory: 512Mi\n            type: Container\n      - limits:\n          # In case Tekton pipelines need to use volume workspaces. If use emptydir please set it to 0.\n          - max:\n              storage: 3Gi\n            min:\n              storage: 3Gi\n            type: PersistentVolumeClaim\n  # Since EDKubeRocketCIP uses one namespace, the namespace quota is set to 1\n  namespaceOptions:\n    quota: 1\n  networkPolicies:\n    items:\n      - ingress:\n          - from:\n              - namespaceSelector:\n                  matchLabels:\n                    capsule.clastix.io/tenant: edp-tenant\n              - podSelector: {}\n              - ipBlock:\n                  cidr: 172.32.0.0/16\n        podSelector: {}\n        policyTypes:\n          - Ingress\n  # Default KubeRocketCI admins group to make admin users tenant owners\n  owners:\n    - clusterRoles:\n        - admin\n        - capsule-namespace-manager\n      kind: Group\n      name: system:masters\n    #\n    # Uncomment if Argo CD manage main KubeRocketCI tenant\n    #- clusterRoles:\n    #    - admin\n    #    - capsule-namespace-manager\n    #  kind: ServiceAccount\n    #  name: system:serviceaccount:argocd:argocd-application-controller\n    #\n    # Uncomment if edp-oidc-admins group manage main KubeRocketCI tenant\n    #- clusterRoles:\n    #    - admin\n    #    - capsule-namespace-manager\n    #  kind: Group\n    #  name: sandbox-oidc-cluster-admins\n  resourceQuotas:\n    items:\n        # The maximum CPU and Memory capacity for the KubeRocketCI tenant\n      - hard:\n          limits.cpu: '2'\n          limits.memory: 2Gi\n        # The maximum number of pods that can be deployed within a namespace\n      - hard:\n          pods: '15'\n    scope: Tenant\n  serviceOptions:\n    # Enable the capabilities to create ClusterIP service types only\n    allowedServices:\n      externalName: false\n      loadBalancer: false\n      nodePort: false\n"})})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["To install the Capsule tenant, use the ",(0,s.jsx)(n.a,{href:"https://github.com/epam/edp-cluster-add-ons",children:"Cluster Add-Ons"})," approach."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://capsule.clastix.io/docs/general/tutorial/#create-namespaces",children:"Create namespace"})," for the KubeRocketCI tenant:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Log in as a ",(0,s.jsx)(n.code,{children:"system:masters"})," member and create a namespace for platform deployment under the Capsule tenant using the following command:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"kubectl create namespace edp\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["To ensure that the ",(0,s.jsx)(n.code,{children:"edp"})," namespace is successfully created under the Capsule tenant, you can verify the status of the Capsule tenant using the following command:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"kubectl get tenant edp-tenant -o yaml\n"})}),"\n",(0,s.jsx)(n.p,{children:"Expected output:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"...\nstatus:\n  namespaces:\n  - edp\n  size: 1\n  state: Active\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Enable Capsule in the values.yaml file to make it possible to manage deployable environments:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:'title="values.yaml"',children:'cd-pipeline-operator:\n  tenancyEngine: "capsule"\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["By following these instructions, Capsule policies are utilized to manage the KubeRocketCI core components and deployable environments. By adhering to these guidelines, you should successfully install KubeRocketCI with Capsule enabled as the ",(0,s.jsx)(n.code,{children:"tenancyEngine"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/next/operator-guide/install-kuberocketci",children:"Install KubeRocketCI With Values File"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/next/operator-guide/add-ons-overview",children:"Cluster Add-Ons Overview"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>o,x:()=>l});var t=a(96540);const s={},i=t.createContext(s);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);