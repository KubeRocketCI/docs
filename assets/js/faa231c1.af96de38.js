"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[69505],{17601:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"operator-guide/install-tekton","title":"Install Tekton","description":"EPAM KubeRocketCI uses Tekton resources, such as Tasks, Pipelines, Triggers, Interceptors, and Chains for running the CI/CD pipelines.","source":"@site/versioned_docs/version-3.9/operator-guide/install-tekton.md","sourceDirName":"operator-guide","slug":"/operator-guide/install-tekton","permalink":"/docs/3.9/operator-guide/install-tekton","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/operator-guide/install-tekton.md","tags":[],"version":"3.9","lastUpdatedBy":"Sergiy Kulanov","lastUpdatedAt":1730106685000,"frontMatter":{},"sidebar":"operatorGuideSidebar","previous":{"title":"Install NGINX Ingress Controller","permalink":"/docs/3.9/operator-guide/install-ingress-nginx"},"next":{"title":"Install KubeRocketCI","permalink":"/docs/3.9/operator-guide/install-kuberocketci"}}');var i=n(74848),o=n(28453);const r={},l="Install Tekton",a={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation on Kubernetes Cluster",id:"installation-on-kubernetes-cluster",level:2},{value:"Installation on OKD cluster",id:"installation-on-okd-cluster",level:2},{value:"Related Articles",id:"related-articles",level:2}];function p(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"install-tekton",children:"Install Tekton"})}),"\n",(0,i.jsx)(s.p,{children:"EPAM KubeRocketCI uses Tekton resources, such as Tasks, Pipelines, Triggers, Interceptors, and Chains for running the CI/CD pipelines."}),"\n",(0,i.jsx)(s.p,{children:"Here are the main steps to follow for installing the Tekton resources using the Tekton release files."}),"\n",(0,i.jsx)(s.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Kubectl version 1.26+ is installed. Please refer to the ",(0,i.jsx)(s.a,{href:"https://kubernetes.io/releases/",children:"Kubernetes official website"})," for details."]}),"\n",(0,i.jsxs)(s.li,{children:["For Openshift/OKD, the latest version of the ",(0,i.jsx)(s.code,{children:"oc"})," utility is required. Please refer to the ",(0,i.jsx)(s.a,{href:"https://github.com/okd-project/okd/releases",children:"OKD page"})," on GitHub for details."]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"installation-on-kubernetes-cluster",children:"Installation on Kubernetes Cluster"}),"\n",(0,i.jsx)(s.p,{children:"To install Tekton resources, follow the steps below:"}),"\n",(0,i.jsx)(s.admonition,{type:"info",children:(0,i.jsxs)(s.p,{children:["Please refer to the ",(0,i.jsx)(s.a,{href:"https://tekton.dev/docs/installation/pipelines/",children:"Install Tekton Pipelines"})," and\n",(0,i.jsx)(s.a,{href:"https://tekton.dev/docs/installation/triggers/",children:"Install and set up Tekton Triggers"})," sections for details."]})}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Install Tekton pipelines v0.53.4 using the release file:"}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsxs)(s.p,{children:["Tekton Pipeline resources are used for managing and running KubeRocketCI Tekton Pipelines and Tasks.\nPlease refer to the ",(0,i.jsx)(s.a,{href:"https://github.com/epam/edp-tekton/tree/master/charts/pipelines-library/templates/pipelines",children:"KubeRocketCI Tekton Pipelines"})," and\n",(0,i.jsx)(s.a,{href:"https://github.com/epam/edp-tekton/tree/master/charts/pipelines-library/templates/tasks",children:"KubeRocketCI Tekton Tasks"})," pages for details."]})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"kubectl apply -f https://storage.googleapis.com/tekton-releases/pipeline/previous/v0.53.4/release.yaml\n"})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Install Tekton Triggers v0.25.3 using the release file:"}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsxs)(s.p,{children:["Tekton Trigger resources are used for managing and running KubeRocketCI Tekton EventListeners, Triggers, TriggerBindings and TriggerTemplates.\nPlease refer to the ",(0,i.jsx)(s.a,{href:"https://github.com/epam/edp-tekton/tree/master/charts/pipelines-library/templates/triggers",children:"KubeRocketCI Tekton Triggers"})," page for details."]})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"kubectl apply -f https://storage.googleapis.com/tekton-releases/triggers/previous/v0.25.3/release.yaml\n"})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Install Tekton Interceptors v0.25.3 using the release file:"}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsx)(s.p,{children:"The Platform uses GitLab, GitHub and Cel ClusterInterceptors for processing requests from webhooks."})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"kubectl apply -f https://storage.googleapis.com/tekton-releases/triggers/previous/v0.25.3/interceptors.yaml\n"})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Install Tekton Chains v0.19.0 using the release file:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"kubectl apply -f https://storage.googleapis.com/tekton-releases/chains/previous/v0.19.0/release.yaml\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"installation-on-okd-cluster",children:"Installation on OKD cluster"}),"\n",(0,i.jsx)(s.p,{children:"To install Tekton resources, follow the steps below:"}),"\n",(0,i.jsx)(s.admonition,{type:"info",children:(0,i.jsxs)(s.p,{children:["Please refer to the ",(0,i.jsx)(s.a,{href:"https://tekton.dev/docs/operator/",children:"Install Tekton Operator"})," documentation for details."]})}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsxs)(s.p,{children:["Tekton Operator also deploys ",(0,i.jsx)(s.a,{href:"https://pipelinesascode.com/",children:"Pipelines as Code CI"})," that requires OpenShift v4.11 (based on Kubernetes v1.24) or higher. This feature is optional and its deployments can be scaled to zero replicas."]})}),"\n",(0,i.jsx)(s.p,{children:"Install Tekton Operator v0.67.0 using the release file:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"kubectl apply -f https://github.com/tektoncd/operator/releases/download/v0.67.0/openshift-release.yaml\n"})}),"\n",(0,i.jsx)(s.p,{children:"After the installation, the Tekton Operator will install the following components: Pipeline, Trigger, and Addons."}),"\n",(0,i.jsxs)(s.admonition,{type:"note",children:[(0,i.jsxs)(s.p,{children:["If there is the following error in the ",(0,i.jsx)(s.code,{children:"openshift-operators"})," namespace for ",(0,i.jsx)(s.code,{children:"openshift-pipelines-operator"})," and ",(0,i.jsx)(s.code,{children:"tekton-operator-webhook"})," deployments:"]}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"Error: container has runAsNonRoot and image will run as root\n"})}),(0,i.jsx)(s.p,{children:"Patch the deployments with the following commands:"}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:'kubectl -n openshift-operators patch deployment openshift-pipelines-operator -p \'{"spec": {"template": {"spec": {"securityContext": {"runAsUser": 1000}}}}}\'\nkubectl -n openshift-operators patch deployment tekton-operator-webhook -p \'{"spec": {"template": {"spec": {"securityContext": {"runAsUser": 1000}}}}}\'\n'})})]}),"\n",(0,i.jsxs)(s.p,{children:["Grant access for Tekton Service Accounts in the ",(0,i.jsx)(s.code,{children:"openshift-pipelines"})," namespace to the Privileged SCC:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"oc adm policy add-scc-to-user privileged system:serviceaccount:openshift-pipelines:tekton-operators-proxy-webhook\noc adm policy add-scc-to-user privileged system:serviceaccount:openshift-pipelines:tekton-pipelines-controller\noc adm policy add-scc-to-user privileged system:serviceaccount:openshift-pipelines:tekton-pipelines-resolvers\noc adm policy add-scc-to-user privileged system:serviceaccount:openshift-pipelines:tekton-pipelines-webhook\noc adm policy add-scc-to-user privileged system:serviceaccount:openshift-pipelines:tekton-triggers-controller\noc adm policy add-scc-to-user privileged system:serviceaccount:openshift-pipelines:tekton-triggers-core-interceptors\noc adm policy add-scc-to-user privileged system:serviceaccount:openshift-pipelines:tekton-triggers-webhook\noc adm policy add-scc-to-user privileged system:serviceaccount:openshift-pipelines:pipelines-as-code-controller\noc adm policy add-scc-to-user privileged system:serviceaccount:openshift-pipelines:pipelines-as-code-watcher\noc adm policy add-scc-to-user privileged system:serviceaccount:openshift-pipelines:pipelines-as-code-webhook\noc adm policy add-scc-to-user privileged system:serviceaccount:openshift-pipelines:default\n"})}),"\n",(0,i.jsx)(s.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/docs/3.9/operator-guide/add-ons-overview",children:"Install via Add-Ons"})}),"\n"]})]})}function d(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>l});var t=n(96540);const i={},o=t.createContext(i);function r(e){const s=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);