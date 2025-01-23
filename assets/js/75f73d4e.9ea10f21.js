"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[21970],{55946:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"operator-guide/infrastructure-providers/aws/kaniko-irsa","title":"IAM Roles for Kaniko Service Accounts","description":"The information below is relevant in case ECR is used as Docker container registry.","source":"@site/versioned_docs/version-3.10/operator-guide/infrastructure-providers/aws/kaniko-irsa.md","sourceDirName":"operator-guide/infrastructure-providers/aws","slug":"/operator-guide/infrastructure-providers/aws/kaniko-irsa","permalink":"/docs/operator-guide/infrastructure-providers/aws/kaniko-irsa","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/operator-guide/infrastructure-providers/aws/kaniko-irsa.md","tags":[],"version":"3.10","lastUpdatedBy":"Sergiy Kulanov","lastUpdatedAt":1737665576000,"frontMatter":{},"sidebar":"operatorGuideSidebar","previous":{"title":"Associate IAM Roles With Service Accounts","permalink":"/docs/operator-guide/infrastructure-providers/aws/enable-irsa"},"next":{"title":"Deploy OKD 4.9 Cluster","permalink":"/docs/operator-guide/infrastructure-providers/okd/deploy-okd-4.9"}}');var t=r(74848),i=r(28453);const s={},a="IAM Roles for Kaniko Service Accounts",c={},d=[{value:"Related Articles",id:"related-articles",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{Head:o}=n;return o||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"iam-roles-for-kaniko-service-accounts",children:"IAM Roles for Kaniko Service Accounts"})}),"\n",(0,t.jsx)(o,{children:(0,t.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/operator-guide/infrastructure-providers/aws/kaniko-irsa/"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["The information below is relevant in case ECR is used as Docker container registry.\nMake sure that IRSA is enabled and ",(0,t.jsx)(n.a,{href:"https://github.com/aws/amazon-eks-pod-identity-webhook/tree/master",children:"amazon-eks-pod-identity-webhook"})," is deployed according to the ",(0,t.jsx)(n.a,{href:"/docs/operator-guide/infrastructure-providers/aws/enable-irsa",children:"Associate IAM Roles With Service Accounts"})," documentation."]})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Alternatively, the Kaniko IAM Role can also be created automatically during the cluster installation process.\nFor more details, refer to the ",(0,t.jsx)(n.a,{href:"/docs/operator-guide/deploy-aws-eks",children:"Deploy AWS EKS Cluster"})," page."]})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"build-image-kaniko"})," stage, used in Tekton build pipelines, manages ",(0,t.jsx)(n.a,{href:"https://aws.amazon.com/ecr/",children:"ECR"})," through IRSA that should be available on the cluster. Follow the steps below to create a required role:"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Create AWS IAM Policy ",(0,t.jsx)(n.code,{children:"AWSIRSA_<CLUSTER_NAME>_Kaniko_policy"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n        "Effect": "Allow",\n        "Action": [\n            "ecr:*",\n            "cloudtrail:LookupEvents"\n        ],\n        "Resource": "arn:aws:ecr:<AWS_REGION>:<AWS_ACCOUNT_ID>:repository/*"\n    },\n    {\n        "Effect": "Allow",\n        "Action": "ecr:GetAuthorizationToken",\n        "Resource": "*"\n    },\n    {\n        "Effect": "Allow",\n        "Action": [\n            "ecr:DescribeRepositories",\n            "ecr:CreateRepository"\n        ],\n        "Resource": "arn:aws:ecr:<AWS_REGION>:<AWS_ACCOUNT_ID>:repository/*"\n    }\n  ]\n}\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Create AWS IAM Role ",(0,t.jsx)(n.code,{children:"AWSIRSA_<CLUSTER_NAME>_Kaniko"})," with trust relationships:"]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"OIDC_PROVIDER"})," value can be found in the AWS Management Console under the Elastic Kubernetes Service (EKS) service. Select the appropriate cluster and navigate to the ",(0,t.jsx)(n.strong,{children:"Overview"})," tab to find the ",(0,t.jsx)(n.code,{children:"OpenID Connect provider URL"})," value.\n",(0,t.jsx)(n.img,{alt:"OIDC_PROVIDER",src:r(44504).A+"",width:"2646",height:"392"})]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Effect": "Allow",\n      "Principal": {\n        "Federated": "arn:aws:iam::<AWS_ACCOUNT_ID>:oidc-provider/<OIDC_PROVIDER>"\n      },\n      "Action": "sts:AssumeRoleWithWebIdentity",\n      "Condition": {\n        "StringEquals": {\n          "<OIDC_PROVIDER>:sub": "system:serviceaccount:*"\n        }\n      }\n    }\n  ]\n}\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Attach the ",(0,t.jsx)(n.code,{children:"AWSIRSA_<CLUSTER_NAME>_Kaniko_policy"})," policy to the ",(0,t.jsx)(n.code,{children:"AWSIRSA_<CLUSTER_NAME>_Kaniko"})," role."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Set the resulting Amazon Resource Name (ARN) of the role in the ",(0,t.jsx)(n.code,{children:"edp-tekton.kaniko.roleArn"})," field within the ",(0,t.jsx)(n.code,{children:"values.yaml"})," file during the ",(0,t.jsx)(n.a,{href:"/docs/operator-guide/install-kuberocketci",children:"KubeRocketCI installation"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/operator-guide/infrastructure-providers/aws/enable-irsa",children:"Associate IAM Roles With Service Accounts"})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},44504:(e,n,r)=>{r.d(n,{A:()=>o});const o=r.p+"assets/images/oidc-provider-b3f5e2cbf5fbeba4a20e63c3ecd953ca.png"},28453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>a});var o=r(96540);const t={},i=o.createContext(t);function s(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);