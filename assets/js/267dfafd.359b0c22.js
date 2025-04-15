"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[56551],{41325:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"operator-guide/kubernetes-cluster-scaling/overview","title":"Kubernetes Cluster Scaling","description":"Explore KubeRocketCI\'s dynamic scaling solution for Kubernetes clusters, utilizing Karpenter for node scaling and KEDA for pod scaling to optimize performance and costs.","source":"@site/docs/operator-guide/kubernetes-cluster-scaling/overview.md","sourceDirName":"operator-guide/kubernetes-cluster-scaling","slug":"/operator-guide/kubernetes-cluster-scaling/overview","permalink":"/docs/next/operator-guide/kubernetes-cluster-scaling/overview","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/operator-guide/kubernetes-cluster-scaling/overview.md","tags":[],"version":"current","lastUpdatedBy":"Oleksandr_Stepanov@epam.com","lastUpdatedAt":1744698564000,"frontMatter":{"title":"Kubernetes Cluster Scaling","description":"Explore KubeRocketCI\'s dynamic scaling solution for Kubernetes clusters, utilizing Karpenter for node scaling and KEDA for pod scaling to optimize performance and costs.","sidebar_label":"Overview"},"sidebar":"operatorGuideSidebar","previous":{"title":"Tekton Integration","permalink":"/docs/next/operator-guide/project-management-and-reporting/reportportal-tekton"},"next":{"title":"Scaling With Karpenter and KEDA","permalink":"/docs/next/operator-guide/kubernetes-cluster-scaling/namespace-and-cluster-autoscaling"}}');var s=t(74848),i=t(28453);const o={title:"Kubernetes Cluster Scaling",description:"Explore KubeRocketCI's dynamic scaling solution for Kubernetes clusters, utilizing Karpenter for node scaling and KEDA for pod scaling to optimize performance and costs.",sidebar_label:"Overview"},a="Kubernetes Cluster Scaling",c={},l=[{value:"Architecture Overview",id:"architecture-overview",level:2}];function d(e){const n={a:"a",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{Head:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"kubernetes-cluster-scaling",children:"Kubernetes Cluster Scaling"})}),"\n",(0,s.jsx)(r,{children:(0,s.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/operator-guide/kubernetes-cluster-scaling/overview"})}),"\n",(0,s.jsx)(n.p,{children:"KubeRocketCI provides a solution for dynamically scaling pods and nodes in a Kubernetes cluster. This approach ensures resources are provisioned based on demand, reducing latency and optimizing costs. By automatically adjusting capacity, the cluster remains responsive to workload fluctuations, improving performance during peak loads while minimizing resource waste during low activity."}),"\n",(0,s.jsx)(n.p,{children:"This solution enhances reliability by preventing resource shortages, supports high availability by efficiently distributing workloads, and simplifies infrastructure management by automating scaling decisions."}),"\n",(0,s.jsx)(n.h2,{id:"architecture-overview",children:"Architecture Overview"}),"\n",(0,s.jsx)(n.p,{children:"KubeRocketCI can use these tools for automatic resource scaling:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Karpenter"})," \u2013 dynamically manages node scaling in the cluster, creating new instances as the load increases and removing resources when demand decreases."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"KEDA"})," \u2013 adjusts the number of pods based on workload, ensuring flexibility and optimal resource utilization."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The diagram below illustrates the AWS EKS cluster architecture, including key components, dependencies, and scaling mechanisms:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"System Node"})," \u2013 contains control components such as Tekton Controller, KEDA, Ingress Controller, and Karpenter."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Tekton Node"})," \u2013 runs CI/CD pipelines."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Dynamic Node"})," \u2013 hosts operators and services that are scaled by Karpenter."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Auto Scaling Groups (ASG)"})," \u2013 manage system and Tekton Nodes."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Architecture diagram",src:t(20975).A+"",title:"Architecture diagram",width:"871",height:"481"})}),"\n",(0,s.jsxs)(n.p,{children:["Automatic scaling ensures efficient resource allocation, reduces latency, and optimizes costs. Read the ",(0,s.jsx)(n.a,{href:"/docs/next/operator-guide/kubernetes-cluster-scaling/namespace-and-cluster-autoscaling",children:"Efficient Kubernetes Autoscaling with Karpenter and KEDA: A Comprehensive Guide"})," to set up automatic scaling in your cluster."]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},20975:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/architecture-diagram-e54464155cc08434e6627a33e5e93075.png"},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var r=t(96540);const s={},i=r.createContext(s);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);