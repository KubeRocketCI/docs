"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5812],{68114:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var s=n(74848),a=n(28453);const i={},r="Install via AWS Marketplace",o={id:"operator-guide/aws-marketplace-install",title:"Install via AWS Marketplace",description:"This documentation provides detailed instructions on how to install the KubeRocketCI via the AWS Marketplace.",source:"@site/docs/operator-guide/aws-marketplace-install.md",sourceDirName:"operator-guide",slug:"/operator-guide/aws-marketplace-install",permalink:"/docs/next/operator-guide/aws-marketplace-install",draft:!1,unlisted:!1,editUrl:"https://github.com/KubeRocketCI/docs/edit/main/docs/operator-guide/aws-marketplace-install.md",tags:[],version:"current",lastUpdatedBy:"oleksandr_taruraiev",lastUpdatedAt:1720195892e3,frontMatter:{},sidebar:"operatorGuideSidebar",previous:{title:"Install KubeRocketCI",permalink:"/docs/next/operator-guide/install-kuberocketci"},next:{title:"Install via Civo Marketplace",permalink:"/docs/next/operator-guide/install-via-civo"}},l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Deploy KubeRocketCI Platform",id:"deploy-kuberocketci-platform",level:2},{value:"Related Articles",id:"related-articles",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"install-via-aws-marketplace",children:"Install via AWS Marketplace"})}),"\n",(0,s.jsx)(t.p,{children:"This documentation provides detailed instructions on how to install the KubeRocketCI via the AWS Marketplace."}),"\n",(0,s.jsxs)(t.p,{children:["To initiate the installation process, navigate to our dedicated ",(0,s.jsx)(t.a,{href:"https://aws.amazon.com/marketplace/pp/prodview-u7xcz6pvwwwoa#pdp-overview",children:"AWS Marketplace"})," page and commence the deployment of KubeRocketCI."]}),"\n",(0,s.jsx)(t.admonition,{type:"warning",children:(0,s.jsx)(t.p,{children:"KubeRocketCI is aligned with industry standards for storing and managing sensitive data, ensuring optimal security. However, the use of custom solutions introduces uncertainties, thus the responsibility for the safety of your data is totally covered by the platform administrator."})}),"\n",(0,s.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["A basic understanding of AWS services and navigation is preferred to facilitate smoother setup and deployment processes. If you are new to AWS, please refer to the ",(0,s.jsx)(t.a,{href:"https://docs.aws.amazon.com/index.html",children:"AWS Documentation"})," for detailed information on the services and their usage."]}),"\n",(0,s.jsx)(t.li,{children:"Understanding of Kubernetes: Knowledge of Kubernetes concepts and architecture is recommended for effective management and operation of clusters."}),"\n"]})}),"\n",(0,s.jsxs)(t.p,{children:["Please ensure that you review the ",(0,s.jsx)(t.a,{href:"/docs/next/operator-guide/prerequisites",children:"Prerequisites"})," page before proceeding with the deployment of the product. To perform a minimal installation, please ensure that you meet the following requirements:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["You have an available AWS Elastic Kubernetes Service (EKS) cluster for deployment. For detailed instructions on creating a new cluster, please refer to the ",(0,s.jsx)(t.a,{href:"https://docs.aws.amazon.com/eks/latest/userguide/create-cluster.html",children:"AWS EKS Cluster Creation Guide"}),". Additionally, you can consult our ",(0,s.jsx)(t.a,{href:"/docs/next/operator-guide/infrastructure-providers/aws/deploy-aws-eks",children:"EKS Deployment Guide"})," for step-by-step instructions tailored to your specific needs."]}),"\n",(0,s.jsx)(t.li,{children:"You have a domain name available and associated with the ingress object in the cluster."}),"\n",(0,s.jsx)(t.li,{children:"You have cluster administrator access."}),"\n",(0,s.jsxs)(t.li,{children:["The ",(0,s.jsx)(t.a,{href:"/docs/next/operator-guide/install-tekton",children:"Tekton"})," resources are deployed."]}),"\n",(0,s.jsx)(t.li,{children:"You have access to the cluster via a Service Account token."}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"deploy-kuberocketci-platform",children:"Deploy KubeRocketCI Platform"}),"\n",(0,s.jsx)(t.p,{children:"To deploy the platform, follow the steps below:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Deploy Tekton resources using the following commands:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"kubectl create ns tekton-pipelines\nkubectl create ns tekton-chains\nkubectl create ns tekton-pipelines-resolvers\nkubectl apply --filename https://storage.googleapis.com/tekton-releases/triggers/latest/release.yaml\nkubectl apply --filename https://storage.googleapis.com/tekton-releases/triggers/latest/interceptors.yaml\nkubectl apply --filename https://storage.googleapis.com/tekton-releases/pipeline/latest/release.yaml\nkubectl apply --filename https://storage.googleapis.com/tekton-releases/chains/latest/release.yaml\n"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Define the mandatory parameters you would like to use for installation using the following command:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"kubectl create ns edp\nhelm install edp-install \\\n  --namespace edp ./* \\\n  --set global.dnsWildCard=example.com \\\n"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"(Optional) Provide token to sign in to the Portal. Run the following command to create Service Account with cluster admin permissions:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"kubectl create serviceaccount edp-admin -n edp\nkubectl create clusterrolebinding edp-cluster-admin --clusterrole=cluster-admin --serviceaccount=edp:edp-admin\nkubectl apply -f - <<EOF\napiVersion: v1\nkind: Secret\nmetadata:\n  name: edp-admin-token\n  namespace: edp\n  annotations:\n    kubernetes.io/service-account.name: edp-admin\ntype: kubernetes.io/service-account-token\nEOF\n"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"(Optional) To get access to the Portal, run the port-forwarding command:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"kubectl port-forward service/portal 59480:80 -n edp\n"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["(Optional) To open Portal, navigate to the ",(0,s.jsx)(t.code,{children:"http://localhost:59480"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"(Optional) To get admin token to sign in to the Portal:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"kubectl get secrets -o jsonpath=\"{.items[?(@.metadata.annotations['kubernetes\\.io/service-account\\.name']=='edp-admin')].data.token}\" -n edp|base64 --decode; echo\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["As a result, you will get access to KubeRocketCI components via KubeRocketCI Portal UI. Navigate to our ",(0,s.jsx)(t.a,{href:"/docs/next/use-cases/",children:"Use Cases"})," to try out KubeRocketCI functionality. Visit other subsections of the ",(0,s.jsx)(t.a,{href:"/docs/next/operator-guide/",children:"Operator Guide"})," to figure out how to configure KubeRocketCI and integrate it with various tools."]}),"\n",(0,s.jsx)(t.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://aws.amazon.com/marketplace/pp/prodview-u7xcz6pvwwwoa#pdp-overview",children:"KubeRocketCI on AWS Marketplace"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/docs/next/user-guide/add-git-server",children:"Manage Git Providers"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/docs/next/operator-guide/kubernetes-cluster-settings",children:"Set Up Kubernetes"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/docs/next/operator-guide/openshift-cluster-settings",children:"Set Up OpenShift"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/docs/next/operator-guide/prerequisites",children:"KubeRocketCI Installation Prerequisites Overview"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/docs/next/operator-guide/auth/ui-portal-oidc",children:"UI Portal OIDC Integration"})}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var s=n(96540);const a={},i=s.createContext(a);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);