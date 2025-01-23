"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[56133],{85861:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"use-cases/external-secrets","title":"Secured Secrets Management for Application Deployment","description":"This use case demonstrates the secure management of sensitive data, such as passwords, API keys, and other credentials used by an application during development or production runtime.","source":"@site/versioned_docs/version-3.9/use-cases/external-secrets.md","sourceDirName":"use-cases","slug":"/use-cases/external-secrets","permalink":"/docs/3.9/use-cases/external-secrets","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/use-cases/external-secrets.md","tags":[],"version":"3.9","lastUpdatedBy":"Sergiy Kulanov","lastUpdatedAt":1737665242000,"frontMatter":{},"sidebar":"useCasesSidebar","previous":{"title":"Scaffold and Deploy FastAPI Application","permalink":"/docs/3.9/use-cases/application-scaffolding"},"next":{"title":"Autotest as a Quality Gate","permalink":"/docs/3.9/use-cases/autotest-as-quality-gate"}}');var i=s(74848),r=s(28453);const a={},c="Secured Secrets Management for Application Deployment",l={},o=[{value:"Roles",id:"roles",level:2},{value:"Goals",id:"goals",level:2},{value:"Preconditions",id:"preconditions",level:2},{value:"Scenario",id:"scenario",level:2},{value:"Add Application",id:"add-application",level:3},{value:"Create CD Pipeline",id:"create-cd-pipeline",level:3},{value:"Configure RBAC for External Secret Store",id:"configure-rbac-for-external-secret-store",level:3},{value:"Add External Secret to Helm Chart",id:"add-external-secret-to-helm-chart",level:3},{value:"Deploy Application",id:"deploy-application",level:3},{value:"Check Application Status",id:"check-application-status",level:3},{value:"Related Articles",id:"related-articles",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{Head:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"secured-secrets-management-for-application-deployment",children:"Secured Secrets Management for Application Deployment"})}),"\n",(0,i.jsx)(t,{children:(0,i.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/use-cases/external-secrets/"})}),"\n",(0,i.jsxs)(n.p,{children:["This use case demonstrates the secure management of sensitive data, such as passwords, API keys, and other credentials used by an application during development or production runtime.\nThe process involves storing sensitive data in an external secret store within a ",(0,i.jsx)(n.code,{children:"demo-vault"})," namespace. The confidential information is then transmitted from the ",(0,i.jsx)(n.code,{children:"demo-vault"})," namespace to the namespace where the application is deployed. This ensures that the application can utilize these credentials to establish a secure connection to the database.\nIn this scenario, the KubeRocketCI platform leverages capabilities of the ",(0,i.jsx)(n.code,{children:"External Secret Operator"}),". Developers can use another external secret store (Hashicorp Vault, AWS Secret Store, or another provider) to ensure that confidential information is securely stored and accessed only when necessary."]}),"\n",(0,i.jsx)(n.p,{children:"To follow this approach, the next steps are involved:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Configure the KubeRocketCI platform with the external secret store provider, ",(0,i.jsx)(n.a,{href:"/docs/3.9/operator-guide/secrets-management/external-secrets-operator-integration#kubernetes-provider",children:"namespace will be used"})," for the below scenario."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Create a separate namespace, with the name ",(0,i.jsx)(n.code,{children:"demo-vault"}),", to store the sensitive data."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Keep sensitive data, such as passwords, API keys, and credentials, in the ",(0,i.jsx)(n.code,{children:"demo-vault"})," namespace."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Establish a connection between the deployed namespace and the vault namespace to securely access the sensitive data when required."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"By following these steps, developers can ensure that sensitive data is protected and accessed securely within the KubeRocketCI platform. This approach enhances the overall security of the application and reduces the risk of unauthorized access to confidential information."}),"\n",(0,i.jsx)(n.h2,{id:"roles",children:"Roles"}),"\n",(0,i.jsx)(n.p,{children:"This documentation is tailored for the Platform Team, Developers and Team Leads."}),"\n",(0,i.jsx)(n.h2,{id:"goals",children:"Goals"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Ensure secure handling of confidential information within the deployment environment."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"preconditions",children:"Preconditions"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["KubeRocketCI instance is ",(0,i.jsx)(n.a,{href:"/docs/3.9/operator-guide/prerequisites",children:"configured"})," with ",(0,i.jsx)(n.a,{href:"/docs/3.9/user-guide/gitops",children:"GitOps"})," repo (to be able to create components);"]}),"\n",(0,i.jsxs)(n.li,{children:["External Secrets Operator is ",(0,i.jsx)(n.a,{href:"/docs/3.9/operator-guide/secrets-management/install-external-secrets-operator",children:"installed"}),";"]}),"\n",(0,i.jsx)(n.li,{children:"Developer has access to the KubeRocketCI instances using the Single-Sign-On approach;"}),"\n",(0,i.jsxs)(n.li,{children:["Developer has merge permissions in the one of the ",(0,i.jsx)(n.a,{href:"/docs/3.9/user-guide/git-server-overview",children:"Git Server"})," repository, e.g. GitHub;"]}),"\n",(0,i.jsx)(n.li,{children:"Developer has permissions to create resources such as namespace, roles, and role bindings."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"scenario",children:"Scenario"}),"\n",(0,i.jsx)(n.p,{children:"To utilize External Secrets in the KubeRocketCI platform, follow the steps outlined below:"}),"\n",(0,i.jsx)(n.h3,{id:"add-application",children:"Add Application"}),"\n",(0,i.jsx)(n.p,{children:"To begin, you will need an application first. Here are the steps to create it:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Open the UI Portal. Use the ",(0,i.jsx)(n.strong,{children:"Sign In"})," option:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Logging Page",src:s(16309).A+"",title:"Logging screen",width:"3364",height:"1670"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the top right corner, enter the ",(0,i.jsx)(n.strong,{children:"Account settings"})," and ensure that both ",(0,i.jsx)(n.code,{children:"Default namespace"})," and ",(0,i.jsx)(n.code,{children:"Allowed namespaces"})," are set:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Settings",src:s(54275).A+"",title:"Cluster settings",width:"3364",height:"1670"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Create the new component with the ",(0,i.jsx)(n.code,{children:"Application"})," type using the ",(0,i.jsx)(n.code,{children:"Create from template"})," strategy. Select the ",(0,i.jsx)(n.strong,{children:"Components"})," section and press the ",(0,i.jsx)(n.strong,{children:"Create component"})," button:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Cluster Overview",src:s(67168).A+"",title:"Cluster components",width:"3364",height:"1058"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Choose the ",(0,i.jsx)(n.strong,{children:"Application"})," component type. Click the ",(0,i.jsx)(n.strong,{children:"Next"})," button:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Component Type",src:s(28486).A+"",title:"Component type",width:"1292",height:"1228"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Opt for the ",(0,i.jsx)(n.strong,{children:"Create from template"})," strategy to scaffold our application from the template provided by the KubeRocketCI and press the ",(0,i.jsx)(n.strong,{children:"Create"})," button:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Component Strategy",src:s(75973).A+"",title:"Step component strategy",width:"1292",height:"1028"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["On the ",(0,i.jsx)(n.strong,{children:"Add component info"})," tab, define the following values and press the ",(0,i.jsx)(n.strong,{children:"Next"})," button:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Git server: ",(0,i.jsx)(n.code,{children:"github"})]}),"\n",(0,i.jsxs)(n.li,{children:["Repository name: ",(0,i.jsx)(n.code,{children:"{github_account_name}/es-usage"})]}),"\n",(0,i.jsxs)(n.li,{children:["Component name: ",(0,i.jsx)(n.code,{children:"es-usage"})]}),"\n",(0,i.jsxs)(n.li,{children:["Description: ",(0,i.jsx)(n.code,{children:"external-secrets usage"})]}),"\n",(0,i.jsxs)(n.li,{children:["Application code language: ",(0,i.jsx)(n.code,{children:"Java"})]}),"\n",(0,i.jsxs)(n.li,{children:["Language version/framework: ",(0,i.jsx)(n.code,{children:"Java 17"})]}),"\n",(0,i.jsxs)(n.li,{children:["Build tool: ",(0,i.jsx)(n.code,{children:"Maven"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Application Info",src:s(47944).A+"",title:"Step application info",width:"3364",height:"1662"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["On the ",(0,i.jsx)(n.strong,{children:"Specify advanced settings"})," tab, define the below values and push the ",(0,i.jsx)(n.strong,{children:"Create"})," button:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Default branch: ",(0,i.jsx)(n.code,{children:"main"})]}),"\n",(0,i.jsxs)(n.li,{children:["Codebase versioning type: ",(0,i.jsx)(n.code,{children:"default"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Advanced Settings",src:s(65451).A+"",title:"Step advanced settings",width:"3364",height:"1662"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Check the application status. It should be green:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Application Status",src:s(97114).A+"",title:"Application status",width:"3364",height:"1662"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"create-cd-pipeline",children:"Create CD Pipeline"}),"\n",(0,i.jsx)(n.p,{children:"This section outlines the process of establishing a CD pipeline within UI Portal. There are two fundamental steps in this procedure:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Create a ",(0,i.jsx)(n.code,{children:"CD pipeline"}),";"]}),"\n",(0,i.jsxs)(n.li,{children:["Configure the CD pipeline ",(0,i.jsx)(n.code,{children:"stage"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["Ensure ",(0,i.jsx)(n.a,{href:"/docs/3.9/user-guide/gitops",children:"GitOps repository"})," is connected to the KubeRocketCI instance."]})}),"\n",(0,i.jsx)(n.p,{children:"Follow the instructions below to complete the process successfully:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the UI Portal, navigate to ",(0,i.jsx)(n.strong,{children:"Environments"})," tab and push the ",(0,i.jsx)(n.strong,{children:"Create environment"})," button to create pipeline:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"CD-Pipeline Overview",src:s(91899).A+"",title:"CD-Pipeline tab",width:"3364",height:"1402"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.strong,{children:"Create environment"})," dialog, define the below values:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Enter name"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Pipeline name: ",(0,i.jsx)(n.code,{children:"deploy"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"CD Pipeline name",src:s(99191).A+"",title:"Pipeline tab with parameters",width:"3364",height:"1667"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Add components"}),". Add ",(0,i.jsx)(n.code,{children:"es-usage"})," application, select ",(0,i.jsx)(n.code,{children:"main"})," branch, and leave ",(0,i.jsx)(n.code,{children:"Promote in pipeline"})," unchecked. Click the ",(0,i.jsx)(n.strong,{children:"Create"})," button:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"CD Pipeline Add Application",src:s(4026).A+"",title:"Applications tab with parameters",width:"3364",height:"1667"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Navigate to the created ",(0,i.jsx)(n.code,{children:"deploy"})," CD pipeline and click the ",(0,i.jsx)(n.strong,{children:"Create Stage"})," button."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Create Stage Button",src:s(86897).A+"",title:"Create stage button",width:"3364",height:"1667"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.strong,{children:"Create stage"})," dialog add the ",(0,i.jsx)(n.code,{children:"sit"})," stage with the values below:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Configure stage"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Cluster: ",(0,i.jsx)(n.code,{children:"in cluster"})]}),"\n",(0,i.jsxs)(n.li,{children:["Stage name: ",(0,i.jsx)(n.code,{children:"sit"})]}),"\n",(0,i.jsxs)(n.li,{children:["Description: ",(0,i.jsx)(n.code,{children:"System integration testing"})]}),"\n",(0,i.jsxs)(n.li,{children:["Trigger type: ",(0,i.jsx)(n.code,{children:"Manual"})]}),"\n",(0,i.jsxs)(n.li,{children:["Pipeline template: ",(0,i.jsx)(n.code,{children:"deploy"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Pipeline tab",src:s(960).A+"",title:"Pipeline tab with parameters",width:"3364",height:"1667"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Add quality gates"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Quality gate type: ",(0,i.jsx)(n.code,{children:"Manual"})]}),"\n",(0,i.jsxs)(n.li,{children:["Step name: ",(0,i.jsx)(n.code,{children:"approve"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Pipeline tab",src:s(8149).A+"",title:"Pipeline tab with parameters",width:"3364",height:"1667"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"configure-rbac-for-external-secret-store",children:"Configure RBAC for External Secret Store"}),"\n",(0,i.jsxs)(n.admonition,{type:"note",children:[(0,i.jsx)(n.p,{children:"In this scenario, three namespaces are used:"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"demo"}),", the namespace where KubeRocketCI is deployed,"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"demo-vault"}),", the vault namespace, where sensitive data is stored, and"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"demo-<cd_pipeline_name>-<stage_name>"}),", the namespace used for deploying the application (",(0,i.jsx)(n.code,{children:"demo-deploy-sit"})," for this scenario)."]}),"\n"]})]}),"\n",(0,i.jsx)(n.p,{children:"To ensure the proper functioning of the system, it is crucial to create the following resources:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Create namespace ",(0,i.jsx)(n.code,{children:"demo-vault"})," to store secrets:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"kubectl create namespace demo-vault\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Create Secret:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"apiVersion: v1\nkind: Secret\nmetadata:\n  name: mongo\n  namespace: demo-vault\nstringData:\n  password: pass\n  username: user\ntype: Opaque\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Create Role to access the secret:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'apiVersion: rbac.authorization.k8s.io/v1\nkind: Role\nmetadata:\n  namespace: demo-vault\n  name: external-secret-store\nrules:\n- apiGroups: [""]\n  resources:\n  - secrets\n  verbs:\n  - get\n  - list\n  - watch\n- apiGroups:\n  - authorization.k8s.io\n  resources:\n  - selfsubjectrulesreviews\n  verbs:\n  - create\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Create RoleBinding:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"apiVersion: rbac.authorization.k8s.io/v1\nkind: RoleBinding\nmetadata:\n  name: eso-from-krci\n  namespace: demo-vault\nsubjects:\n  - kind: ServiceAccount\n    name: secret-manager\n    namespace: demo-deploy-sit\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: Role\n  name: external-secret-store\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"add-external-secret-to-helm-chart",children:"Add External Secret to Helm Chart"}),"\n",(0,i.jsx)(n.p,{children:"Now that RBAC is configured properly, it is time to add external secrets templates to application Helm chart. Follow the instructions provided below:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Navigate to one of the ",(0,i.jsx)(n.code,{children:"Git Servers"})," where the ",(0,i.jsx)(n.code,{children:"es-usage"})," application was created during the ",(0,i.jsx)(n.a,{href:"#add-application",children:"Add Application"})," step. In this example, it is ",(0,i.jsx)(n.code,{children:"GitHub"}),":"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Github Repository",src:s(911).A+"",title:"Github repository",width:"3333",height:"1662"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Create a commit in the ",(0,i.jsx)(n.code,{children:"es-usage"})," repository and add the following configuration files to the helm chart:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"deploy-templates/templates/sa.yaml"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"apiVersion: v1\nkind: ServiceAccount\nmetadata:\n  name: secret-manager\n  namespace: demo-deploy-sit\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"deploy-templates/templates/secret-store.yaml"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"apiVersion: external-secrets.io/v1beta1\nkind: SecretStore\nmetadata:\n  name: demo\n  namespace: demo-deploy-sit\nspec:\n  provider:\n    kubernetes:\n      remoteNamespace: demo-vault\n      auth:\n        serviceAccount:\n          name: secret-manager\n      server:\n        caProvider:\n          type: ConfigMap\n          name: kube-root-ca.crt\n          key: ca.crt\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"deploy-templates/templates/external-secret.yaml"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"apiVersion: external-secrets.io/v1beta1\nkind: ExternalSecret\nmetadata:\n  name: mongo                            # target secret name\n  namespace: demo-deploy-sit             # target namespace\nspec:\n  refreshInterval: 1h\n  secretStoreRef:\n    kind: SecretStore\n    name: demo\n  data:\n  - secretKey: username                   # target value property\n    remoteRef:\n      key: mongo                          # remote secret key\n      property: username                  # value will be fetched from this field\n  - secretKey: password                   # target value property\n    remoteRef:\n      key: mongo                          # remote secret key\n      property: password                  # value will be fetched from this field\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"deploy-templates/templates/deployment.yaml"}),". Add the environment variable for mongodb to the existing deployment configuration that used the secret:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"env:\n  - name: MONGO_USERNAME\n    valueFrom:\n      secretKeyRef:\n        name: mongo\n        key: username\n  - name: MONGO_PASSWORD\n    valueFrom:\n      secretKeyRef:\n        name: mongo\n        key: password\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Push the changes made to the ",(0,i.jsx)(n.code,{children:"es-usage"})," repository."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"deploy-application",children:"Deploy Application"}),"\n",(0,i.jsx)(n.p,{children:"Deploy the application by following the steps below:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Build Container from the latest branch commit. To build the initial version of the application's ",(0,i.jsx)(n.code,{children:"main"})," branch, go to the ",(0,i.jsx)(n.strong,{children:"Components"})," -> ",(0,i.jsx)(n.strong,{children:"es-usage"})," -> ",(0,i.jsx)(n.strong,{children:"Branches"})," -> ",(0,i.jsx)(n.strong,{children:"main"})," and press the ",(0,i.jsx)(n.strong,{children:"Trigger build pipeline run"})," button."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Build Pipeline",src:s(68171).A+"",title:"Build pipeline",width:"3333",height:"1662"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Build pipeline for the ",(0,i.jsx)(n.code,{children:"es-usage"})," application starts."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Build Status",src:s(95614).A+"",title:"Build status",width:"3333",height:"1662"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Once the build pipeline has successfully completed, navigate to the ",(0,i.jsx)(n.strong,{children:"Environments"})," tab and select the ",(0,i.jsx)(n.code,{children:"deploy"})," pipeline. Choose the ",(0,i.jsx)(n.strong,{children:"SIT"})," stage and click on the ",(0,i.jsx)(n.strong,{children:"Configure deploy"})," button:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Configure Deploy",src:s(91013).A+"",title:"Configure deploy",width:"3364",height:"1662"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.code,{children:"Image stream version"}),", select latest version and push the ",(0,i.jsx)(n.strong,{children:"Start deploy"})," button."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Start Deploy",src:s(17117).A+"",title:"Start deploy",width:"3364",height:"1662"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Ensure application status is ",(0,i.jsx)(n.code,{children:"Healthy"})," and ",(0,i.jsx)(n.code,{children:"Synced"}),":"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"App Synced",src:s(41393).A+"",title:"App synced",width:"3364",height:"1662"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"check-application-status",children:"Check Application Status"}),"\n",(0,i.jsx)(n.p,{children:"To ensure the application is deployed successfully, do the following:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Check that the resources are deployed:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"kubectl get secretstore -n demo-deploy-sit\nNAME   AGE     STATUS   CAPABILITIES   READY\ndemo   4m38s   Valid    ReadWrite      True\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"kubectl get externalsecret -n demo-deploy-sit\nNAME    STORE   REFRESH INTERVAL   STATUS         READY\nmongo   demo    1h                 SecretSynced   True\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the top right corner, enter the ",(0,i.jsx)(n.code,{children:"Account settings"})," and add ",(0,i.jsx)(n.code,{children:"demo-deploy-sit"})," to the ",(0,i.jsx)(n.code,{children:"Allowed namespaces"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Navigate to the ",(0,i.jsx)(n.strong,{children:"Kubernetes"})," tab in the bottom left corner, then go to ",(0,i.jsx)(n.strong,{children:"Configuration"})," -> ",(0,i.jsx)(n.strong,{children:"Secrets"})," and ensure that the ",(0,i.jsx)(n.code,{children:"mongo"})," secret has been successfully created:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Secrets",src:s(17847).A+"",title:"Secrets",width:"3364",height:"1662"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Navigate to ",(0,i.jsx)(n.strong,{children:"Workloads"})," -> ",(0,i.jsx)(n.strong,{children:"Pods"})," and access the pod for the ",(0,i.jsx)(n.code,{children:"es-usage"})," application, e.g. ",(0,i.jsx)(n.code,{children:"es-usage-7fdb577994-pwjps"}),". Ensure that the environment variables for ",(0,i.jsx)(n.code,{children:"mongo"})," have been successfully applied:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Pod information",src:s(16865).A+"",title:"Pod information",width:"3333",height:"1662"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/3.9/use-cases/",children:"Use Cases"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/3.9/user-guide/add-application",children:"Add Application"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/3.9/user-guide/add-cd-pipeline",children:"CD Pipeline"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},65451:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/advanced-settings-e10709a6f63ecd5fa886f4c7a33a0c2f.png"},41393:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/app_synced-032f28e6fb73e79a851b2716d19e418a.png"},47944:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/application-info-f5498773e4292495a1074949e3692862.png"},97114:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/application-status-2cf96fc420a267718afa666cbf3badc1.png"},95614:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/build_status-90b27547a2fe4eaf23bba770f0a1cc33.png"},68171:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/component_build-1c76efb2a8cac64f6dd2fe37a12b5210.png"},91013:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/configure_deploy-9823b1fde826a5c98e53a105c414a386.png"},8149:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/create-cd-pipeline-stage-window-2-f32783fde66d97a0467703785f86978c.png"},960:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/create-cd-pipeline-stage-window-34b15842b994223166bbaa6501943491.png"},4026:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/create-cd-pipeline-window-2-7602ccf18ee77b74037a42cd9ecabb82.png"},99191:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/create-cd-pipeline-window-46a3228b0045f33c1e614deb8b7aa086.png"},86897:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/create-stage-button-f1a30fc3620eec00f788595eb599dd39.png"},16865:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/env_vars-399cd47796e27807f825948fefeb14c7.png"},911:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/github_repo-05fd0e9ee9bef7787a57d15bdc7ee7df.png"},17847:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/secret_list-e61c5a5a99c76986aa3097c37e0b2467.png"},17117:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/start_deploy-b0812a00af7631627bedf87a41352191.png"},75973:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/component-strategy-517bb87e683750f3b440662cf410190b.png"},28486:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/component-type-2f5400caf2a57425bc0c09118147e158.png"},67168:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/components-c990b2eaf4a4e71b20e2ba71e015c191.png"},91899:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/create-cd-pipeline-c1f6f274764cddbe514d7d986674ef76.png"},16309:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/login-847da373e3eb52fd46ac9274e082515a.png"},54275:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/settings-07be6924b3afbb43b1d7b1ce64e3b569.png"},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>c});var t=s(96540);const i={},r=t.createContext(i);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);