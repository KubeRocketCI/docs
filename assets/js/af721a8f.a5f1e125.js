"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[4257],{33124:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"operator-guide/kubernetes-cluster-scaling/overview","title":"Kubernetes Cluster Scaling","description":"KubeRocketCI provides a solution for dynamically scaling pods and nodes in a Kubernetes cluster. This approach ensures resources are provisioned based on demand, reducing latency and optimizing costs. By automatically adjusting capacity, the cluster remains responsive to workload fluctuations, improving performance during peak loads while minimizing resource waste during low activity.","source":"@site/versioned_docs/version-3.9/operator-guide/kubernetes-cluster-scaling/overview.md","sourceDirName":"operator-guide/kubernetes-cluster-scaling","slug":"/operator-guide/kubernetes-cluster-scaling/overview","permalink":"/docs/3.9/operator-guide/kubernetes-cluster-scaling/overview","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/operator-guide/kubernetes-cluster-scaling/overview.md","tags":[],"version":"3.9","lastUpdatedBy":"Sergiy Kulanov","lastUpdatedAt":1738424597000,"frontMatter":{"sidebar_label":"Overview"},"sidebar":"operatorGuideSidebar","previous":{"title":"Tekton Integration","permalink":"/docs/3.9/operator-guide/project-management-and-reporting/reportportal-tekton"},"next":{"title":"Scaling with Karpenter and KEDA","permalink":"/docs/3.9/operator-guide/kubernetes-cluster-scaling/namespace-and-cluster-autoscaling"}}');var t=r(74848),i=r(28453);const o={sidebar_label:"Overview"},a="Kubernetes Cluster Scaling",c={},l=[{value:"Architecture Overview",id:"architecture-overview",level:2}];function d(e){const n={h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{Head:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"kubernetes-cluster-scaling",children:"Kubernetes Cluster Scaling"})}),"\n",(0,t.jsx)(s,{children:(0,t.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/operator-guide/kubernetes-cluster-scaling/overview/"})}),"\n",(0,t.jsx)(n.p,{children:"KubeRocketCI provides a solution for dynamically scaling pods and nodes in a Kubernetes cluster. This approach ensures resources are provisioned based on demand, reducing latency and optimizing costs. By automatically adjusting capacity, the cluster remains responsive to workload fluctuations, improving performance during peak loads while minimizing resource waste during low activity."}),"\n",(0,t.jsx)(n.p,{children:"This solution enhances reliability by preventing resource shortages, supports high availability by efficiently distributing workloads, and simplifies infrastructure management by automating scaling decisions."}),"\n",(0,t.jsx)(n.h2,{id:"architecture-overview",children:"Architecture Overview"}),"\n",(0,t.jsx)(n.p,{children:"For automatic scaling, two tools are used:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Karpenter"})," \u2013 dynamically manages node scaling in the cluster, creating new instances as the load increases and removing resources when demand decreases."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"KEDA"})," \u2013 adjusts the number of pods based on workload, ensuring flexibility and optimal resource utilization."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The diagram below illustrates the AWS EKS cluster architecture, including key components, dependencies, and scaling mechanisms:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"System Node"})," \u2013 contains control components such as Tekton Controller, KEDA, Ingress Controller, and Karpenter."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Tekton Node"})," \u2013 runs CI/CD pipelines."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Dynamic Node"})," \u2013 hosts operators and services that are scaled by Karpenter."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Auto Scaling Groups (ASG)"})," \u2013 manage system and Tekton nodes."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"This approach ensures efficient resource allocation, reduces latency, and optimizes costs. \ud83d\ude80"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Architecture diagram",src:r(27900).A+"",title:"Architecture diagram",width:"871",height:"481"})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},27900:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/architecture-diagram-e54464155cc08434e6627a33e5e93075.png"},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>a});var s=r(96540);const t={},i=s.createContext(t);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);