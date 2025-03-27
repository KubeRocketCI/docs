"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[79680],{37549:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>c,contentTitle:()=>t,default:()=>u,frontMatter:()=>a,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"operator-guide/infrastructure-providers/aws/ebs-csi-driver","title":"Amazon EBS CSI Driver","description":"Enable Amazon EKS clusters to manage Amazon EBS volumes with the EBS CSI driver, covering prerequisites, IAM setup, and add-on installation.","source":"@site/versioned_docs/version-3.10/operator-guide/infrastructure-providers/aws/ebs-csi-driver.md","sourceDirName":"operator-guide/infrastructure-providers/aws","slug":"/operator-guide/infrastructure-providers/aws/ebs-csi-driver","permalink":"/docs/3.10/operator-guide/infrastructure-providers/aws/ebs-csi-driver","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/operator-guide/infrastructure-providers/aws/ebs-csi-driver.md","tags":[],"version":"3.10","lastUpdatedBy":"Sergiy Kulanov","lastUpdatedAt":1740847812000,"frontMatter":{"title":"Amazon EBS CSI Driver","description":"Enable Amazon EKS clusters to manage Amazon EBS volumes with the EBS CSI driver, covering prerequisites, IAM setup, and add-on installation.","sidebar_label":"Amazon EBS CSI Driver"},"sidebar":"operatorGuideSidebar","previous":{"title":"Configure AWS WAF With Terraform","permalink":"/docs/3.10/operator-guide/infrastructure-providers/aws/waf-tf-configuration"},"next":{"title":"Associate IAM Roles With Service Accounts","permalink":"/docs/3.10/operator-guide/infrastructure-providers/aws/enable-irsa"}}');var o=s(74848),i=s(28453);const a={title:"Amazon EBS CSI Driver",description:"Enable Amazon EKS clusters to manage Amazon EBS volumes with the EBS CSI driver, covering prerequisites, IAM setup, and add-on installation.",sidebar_label:"Amazon EBS CSI Driver"},t="Amazon EBS CSI Driver",c={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Related Articles",id:"related-articles",level:3}];function d(e){const r={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components},{Details:s,Head:n}=r;return s||h("Details",!0),n||h("Head",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.header,{children:(0,o.jsx)(r.h1,{id:"amazon-ebs-csi-driver",children:"Amazon EBS CSI Driver"})}),"\n",(0,o.jsx)(n,{children:(0,o.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/operator-guide/infrastructure-providers/aws/ebs-csi-driver"})}),"\n",(0,o.jsx)(r.p,{children:"The Amazon Elastic Block Store (Amazon EBS) Container Storage Interface (CSI) driver allows Amazon Elastic Kubernetes Service (Amazon EKS) clusters to manage the lifecycle of Amazon EBS volumes for Kubernetes Persistent Volumes."}),"\n",(0,o.jsx)(r.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,o.jsxs)(r.p,{children:["An existing AWS Identity and Access Management (IAM) OpenID Connect (OIDC) provider for your cluster. To determine whether you already have an OIDC provider or to create a new one, see ",(0,o.jsx)(r.a,{href:"https://docs.aws.amazon.com/eks/latest/userguide/enable-iam-roles-for-service-accounts.html",children:"Creating an IAM OIDC provider for your cluster"}),"."]}),"\n",(0,o.jsx)(r.p,{children:"To add an Amazon EBS CSI add-on, please follow the steps below:"}),"\n",(0,o.jsxs)(r.ol,{children:["\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsx)(r.p,{children:"Check your cluster details (the random value in the cluster name will be required in the next step):"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-bash",children:"kubectl cluster-info\n"})}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:["Create Kubernetes IAM Trust Policy for Amazon EBS CSI Driver. Replace ",(0,o.jsx)(r.code,{children:"AWS_ACCOUNT_ID"})," with your account ID, ",(0,o.jsx)(r.code,{children:"AWS_REGION"})," with your AWS Region, and ",(0,o.jsx)(r.code,{children:"EXAMPLED539D4633E53DE1B71EXAMPLE"})," with the value that was returned in the previous step. Save this Trust Policy into a file ",(0,o.jsx)(r.code,{children:"aws-ebs-csi-driver-trust-policy.json"}),"."]}),"\n",(0,o.jsxs)(s,{children:[(0,o.jsx)("summary",{children:(0,o.jsx)("b",{children:"aws-ebs-csi-driver-trust-policy.json"})}),(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-json",children:'  {\n    "Version": "2012-10-17",\n    "Statement": [\n      {\n        "Effect": "Allow",\n        "Principal": {\n          "Federated": "arn:aws:iam::AWS_ACCOUNT_ID:oidc-provider/oidc.eks.AWS_REGION.amazonaws.com/id/EXAMPLED539D4633E53DE1B71EXAMPLE"\n        },\n        "Action": "sts:AssumeRoleWithWebIdentity",\n        "Condition": {\n          "StringEquals": {\n            "oidc.eks.AWS_REGION.amazonaws.com/id/EXAMPLED539D4633E53DE1B71EXAMPLE:aud": "sts.amazonaws.com",\n            "oidc.eks.AWS_REGION.amazonaws.com/id/EXAMPLED539D4633E53DE1B71EXAMPLE:sub": "system:serviceaccount:kube-system:ebs-csi-controller-sa"\n          }\n        }\n      }\n    ]\n  }\n'})})]}),"\n",(0,o.jsxs)(r.p,{children:["To get the notion of the IAM Role creation, please refer to the ",(0,o.jsx)(r.a,{href:"https://docs.aws.amazon.com/eks/latest/userguide/csi-iam-role.html",children:"official documentation"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsx)(r.p,{children:"Create the IAM role, for example:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-bash",children:'aws iam create-role \\\n  --role-name AmazonEKS_EBS_CSI_DriverRole \\\n  --assume-role-policy-document file://"aws-ebs-csi-driver-trust-policy.json"\n'})}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:["Attach the required AWS Managed Policy ",(0,o.jsx)(r.code,{children:"AmazonEBSCSIDriverPolicy"})," to the role with the following command:"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-bash",children:"aws iam attach-role-policy \\\n  --policy-arn arn:aws:iam::aws:policy/service-role/AmazonEBSCSIDriverPolicy \\\n  --role-name AmazonEKS_EBS_CSI_DriverRole\n"})}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:["Add the Amazon EBS CSI add-on using the AWS CLI. Replace ",(0,o.jsx)(r.code,{children:"my-cluster"})," with the name of your cluster, ",(0,o.jsx)(r.code,{children:"AWS_ACCOUNT_ID"})," with your account ID, and ",(0,o.jsx)(r.code,{children:"AmazonEKS_EBS_CSI_DriverRole"})," with the name of the role that was created earlier:"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-bash",children:"aws eks create-addon --cluster-name my-cluster --addon-name aws-ebs-csi-driver \\\n  --service-account-role-arn arn:aws:iam::AWS_ACCOUNT_ID:role/AmazonEKS_EBS_CSI_DriverRole\n"})}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(r.admonition,{type:"note",children:[(0,o.jsxs)(r.p,{children:["When the plugin is deployed, it creates the ",(0,o.jsx)(r.code,{children:"ebs-csi-controller-sa"})," service account. The service account is bound to a Kubernetes ",(0,o.jsx)(r.code,{children:"ClusterRole"})," with the required Kubernetes permissions.\nThe ",(0,o.jsx)(r.code,{children:"ebs-csi-controller-sa"})," service account should already be annotated with ",(0,o.jsx)(r.code,{children:"arn:aws:iam::AWS_ACCOUNT_ID:role/AmazonEKS_EBS_CSI_DriverRole"}),". To check the annotation, please run:"]}),(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-bash",children:"kubectl get sa ebs-csi-controller-sa -n kube-system -o=jsonpath='{.metadata.annotations}'\n"})}),(0,o.jsxs)(r.p,{children:["In case pods have errors, restart the ",(0,o.jsx)(r.code,{children:"ebs-csi-controller"})," deployment:"]}),(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-bash",children:"kubectl rollout restart deployment ebs-csi-controller -n kube-system\n"})})]}),"\n",(0,o.jsx)(r.h3,{id:"related-articles",children:"Related Articles"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:(0,o.jsx)(r.a,{href:"https://docs.aws.amazon.com/eks/latest/userguide/enable-iam-roles-for-service-accounts.html",children:"Creating an IAM OIDC provider for your cluster"})}),"\n",(0,o.jsx)(r.li,{children:(0,o.jsx)(r.a,{href:"https://docs.aws.amazon.com/eks/latest/userguide/csi-iam-role.html",children:"Creating the Amazon EBS CSI driver IAM role for service accounts"})}),"\n",(0,o.jsx)(r.li,{children:(0,o.jsx)(r.a,{href:"https://docs.aws.amazon.com/eks/latest/userguide/managing-ebs-csi.html",children:"Managing the Amazon EBS CSI driver as an Amazon EKS add-on"})}),"\n"]})]})}function u(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}function h(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(e,r,s)=>{s.d(r,{R:()=>a,x:()=>t});var n=s(96540);const o={},i=n.createContext(o);function a(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function t(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);