"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[82204],{2203:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"operator-guide/infrastructure-providers/aws/enable-irsa","title":"Associate IAM Roles With Service Accounts","description":"Step-by-step guide on associating IAM roles with Kubernetes service accounts in AWS EKS, including IAM role creation, pod identity webhook setup, and service account annotation.","source":"@site/versioned_docs/version-3.9/operator-guide/infrastructure-providers/aws/enable-irsa.md","sourceDirName":"operator-guide/infrastructure-providers/aws","slug":"/operator-guide/infrastructure-providers/aws/enable-irsa","permalink":"/docs/3.9/operator-guide/infrastructure-providers/aws/enable-irsa","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/operator-guide/infrastructure-providers/aws/enable-irsa.md","tags":[],"version":"3.9","lastUpdatedBy":"Oleksandr_Stepanov@epam.com","lastUpdatedAt":1740746844000,"frontMatter":{"title":"Associate IAM Roles With Service Accounts","description":"Step-by-step guide on associating IAM roles with Kubernetes service accounts in AWS EKS, including IAM role creation, pod identity webhook setup, and service account annotation.","sidebar_label":"Associate IAM Roles With Service Accounts"},"sidebar":"operatorGuideSidebar","previous":{"title":"Amazon EBS CSI Driver","permalink":"/docs/3.9/operator-guide/infrastructure-providers/aws/ebs-csi-driver"},"next":{"title":"IAM Roles for Kaniko Service Accounts","permalink":"/docs/3.9/operator-guide/infrastructure-providers/aws/kaniko-irsa"}}');var o=s(74848),i=s(28453);const r={title:"Associate IAM Roles With Service Accounts",description:"Step-by-step guide on associating IAM roles with Kubernetes service accounts in AWS EKS, including IAM role creation, pod identity webhook setup, and service account annotation.",sidebar_label:"Associate IAM Roles With Service Accounts"},a="Associate IAM Roles With Service Accounts",c={},d=[{value:"Common Configuration of IAM Roles With Service Accounts",id:"common-configuration-of-iam-roles-with-service-accounts",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components},{Head:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"associate-iam-roles-with-service-accounts",children:"Associate IAM Roles With Service Accounts"})}),"\n",(0,o.jsx)(s,{children:(0,o.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/operator-guide/infrastructure-providers/aws/enable-irsa/"})}),"\n",(0,o.jsx)(n.p,{children:"This page contains information on how to associate an IAM role with the service account (IRSA)."}),"\n",(0,o.jsxs)(n.p,{children:["Get acquainted with the ",(0,o.jsx)(n.a,{href:"https://docs.aws.amazon.com/eks/latest/userguide/iam-roles-for-service-accounts-technical-overview.html",children:"AWS Official Documentation"})," on the subject before proceeding."]}),"\n",(0,o.jsx)(n.h2,{id:"common-configuration-of-iam-roles-with-service-accounts",children:"Common Configuration of IAM Roles With Service Accounts"}),"\n",(0,o.jsx)(n.p,{children:"To successfully associate the IAM role with the service account, follow the steps below:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Create an IAM role that will further be associated with the service account. This role must have the following trust policy:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"IAM Role"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Effect": "Allow",\n      "Principal": {\n        "Federated": "arn:aws:iam::<AWS_ACCOUNT_ID>:oidc-provider/<OIDC_PROVIDER>"\n      },\n      "Action": "sts:AssumeRoleWithWebIdentity",\n      "Condition": {\n        "StringEquals": {\n          "<OIDC_PROVIDER>:sub": "system:serviceaccount:<SERVICE_ACCOUNT_NAMESPACE>:<SERVICE_ACCOUNT_NAME>"\n        }\n      }\n    }\n  ]\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["View cluster's ",(0,o.jsx)(n.code,{children:"<OIDC_PROVIDER>"})," URL."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'  aws eks describe-cluster --name <CLUSTER_NAME> --query "cluster.identity.oidc.issuer" --output text\n'})}),"\n",(0,o.jsx)(n.p,{children:"Example output:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"https://oidc.eks.us-west-2.amazonaws.com/id/EXAMPLED539D4633E53DE1B716D3041E\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"<OIDC_PROVIDER>"})," in this example will be:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"oidc.eks.us-west-2.amazonaws.com/id/EXAMPLED539D4633E53DE1B716D3041E\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Deploy the ",(0,o.jsx)(n.a,{href:"https://github.com/aws/amazon-eks-pod-identity-webhook/tree/master",children:"amazon-eks-pod-identity-webhook"})," v0.2.0."]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.a,{href:"https://github.com/aws/amazon-eks-pod-identity-webhook/tree/master",children:"amazon-eks-pod-identity-webhook"})," functionality is provided out of the box in EKS v1.21 and higher. This does not apply if the cluster has been upgraded from older versions. Therefore, skip step 2 and continue from step 3 in this documentation."]})}),"\n",(0,o.jsxs)(n.p,{children:["2.1. Provide the ",(0,o.jsx)(n.a,{href:"https://hub.docker.com/r/amazon/amazon-eks-pod-identity-webhook",children:"stable"}),"(ed8c41f) version of the Docker image in the ",(0,o.jsx)(n.em,{children:"deploy/deployment-base.yaml"})," file."]}),"\n",(0,o.jsxs)(n.p,{children:["2.2. Provide ",(0,o.jsx)(n.code,{children:"${CA_BUNDLE}"})," in the ",(0,o.jsx)(n.em,{children:"deploy/mutatingwebhook.yaml"})," file:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"secret_name=$(kubectl -n default get sa default -o jsonpath='{.secrets[0].name}') \\\nCA_BUNDLE=$(kubectl -n default get secret/$secret_name -o jsonpath='{.data.ca\\.crt}' | tr -d '\\n')\n"})}),"\n",(0,o.jsx)(n.p,{children:"2.3. Deploy the Webhook:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"kubectl apply -f deploy/\n"})}),"\n",(0,o.jsxs)(n.p,{children:["2.4. Approve the ",(0,o.jsx)(n.em,{children:"csr"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"csr_name=$(kubectl get csr -o jsonpath='{.items[?(@.spec.username==\"system:serviceaccount:default:pod-identity-webhook\")].metadata.name}')\nkubectl certificate approve $csr_name\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Annotate the created service account with the IAM role:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Service Account"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:'apiVersion: v1\nkind: ServiceAccount\nmetadata:\n  name: <SERVICE_ACCOUNT_NAME>\n  namespace: <NAMESPACE>\n  annotations:\n    eks.amazonaws.com/role-arn: "arn:aws:iam::<AWS_ACCOUNT_ID>:role/<IAM_ROLE_NAME>"\n'})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"All newly launched pods with this service account will be modified and then use the associated IAM role. Find below the pod specification template:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Pod Template"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"apiVersion: v1\nkind: Pod\nmetadata:\n  name: irsa-test\n  namespace: <POD_NAMESPACE>\nspec:\n  serviceAccountName: <SERVICE_ACCOUNT_NAME>\n  securityContext:\n    fsGroup: 65534\n  containers:\n  - name: terraform\n    image: epamedp/edp-jenkins-terraform-agent:3.0.9\n    command: ['sh', '-c', 'aws sts \"get-caller-identity\" && sleep 3600']\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Check the logs of the created pod from the template above."}),"\n",(0,o.jsx)(n.p,{children:"Example output:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n"UserId": "XXXXXXXXXXXXXXXXXXXXX:botocore-session-XXXXXXXXXX",\n"Account": "XXXXXXXXXXXX",\n"Arn": "arn:aws:sts::XXXXXXXXXXXX:assumed-role/AWSIRSATestRole/botocore-session-XXXXXXXXXX"\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["As a result, it is possible to perform actions in AWS under the ",(0,o.jsx)(n.strong,{children:"AWSIRSATestRole"})," role."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>a});var t=s(96540);const o={},i=t.createContext(o);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);