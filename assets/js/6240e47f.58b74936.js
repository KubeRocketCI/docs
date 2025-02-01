"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[17111],{99505:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"operator-guide/ci/tekton-overview","title":"Tekton Overview","description":"KubeRocketCI provides Continuous Integration based on Tekton.","source":"@site/versioned_docs/version-3.10/operator-guide/ci/tekton-overview.md","sourceDirName":"operator-guide/ci","slug":"/operator-guide/ci/tekton-overview","permalink":"/docs/operator-guide/ci/tekton-overview","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/operator-guide/ci/tekton-overview.md","tags":[],"version":"3.10","lastUpdatedBy":"oleksandr_taruraiev","lastUpdatedAt":1738343428000,"frontMatter":{},"sidebar":"operatorGuideSidebar","previous":{"title":"Configuring Fluent Bit for Elasticsearch ILM Rollover","permalink":"/docs/operator-guide/monitoring-and-observability/kibana-ilm-rollover"},"next":{"title":"Pipeline Monitoring with Prometheus and Grafana","permalink":"/docs/operator-guide/ci/tekton-monitoring"}}');var o=t(74848),s=t(28453);const r={},a="Tekton Overview",c={},l=[];function d(e){const n={a:"a",code:"code",h1:"h1",header:"header",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,s.R)(),...e.components},{Head:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"tekton-overview",children:"Tekton Overview"})}),"\n",(0,o.jsx)(i,{children:(0,o.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/operator-guide/ci/tekton-overview/"})}),"\n",(0,o.jsxs)(n.p,{children:["KubeRocketCI provides Continuous Integration based on ",(0,o.jsx)(n.a,{href:"https://tekton.dev/",children:"Tekton"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"Tekton is an open-source Kubernetes native framework for managing pipelines, allowing a user to compile, build and\ntest applications."}),"\n",(0,o.jsxs)(n.p,{children:["Tekton is an open-source Kubernetes native solution, designed for orchestrating complex pipelines that allows users to define ",(0,o.jsx)(n.code,{children:"pipelines as code"}),". It enables users to compile, build, and test applications seamlessly."]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.a,{href:"https://github.com/epam/edp-tekton",children:"edp-tekton"})," GitHub repository provides all Tekton implementation logic on the platform.\nThe Helm charts are used to deploy the resources inside the Kubernetes cluster.\nTekton logic is decoupled into separate components:"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Edp-tekton components diagram",src:t(57520).A+"",width:"1023",height:"873"})}),"\n",(0,o.jsx)(n.p,{children:"The diagram above describes the following:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Common-library"})," is the Helm chart of Library type which stores the common logic shareable across all Tekton pipelines.\nThis library contains Helm templates that generate common Tekton resources."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Pipelines-library"})," is the Helm chart of the Application type which stores the core logic for the KubeRocketCI pipelines.\nTekton CRs like Pipelines, Tasks, EventListeners, Triggers, TriggerTemplates, and other resources are delivered with\nthis chart."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"EDP Interceptor"})," is the custom ",(0,o.jsx)(n.code,{children:"Tekton Interceptor"})," which enriches the payload from the VCSs events with the KubeRocketCI data from the ",(0,o.jsx)(n.code,{children:"Codebase"})," Custom Resource (CR) specification. These data are used to define the Pipeline logic."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Custom-pipelines"})," is the Helm chart of the Application type which implements custom logic running\nspecifically for internal platform development, for example, CI and Release.\nIt also demonstrates the customization flow on the platform."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Inspect the schema below that describes the logic behind the Tekton functionality on the platform:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Component view for the Tekton on KubeRocketCI",src:t(51145).A+"",width:"3760",height:"1695"})}),"\n",(0,o.jsx)(n.p,{children:"The platform logic consists of the following:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"EventListener"})," exposes a dedicated Pod that runs the sink logic and receives incoming events from the\nVCSs (Gerrit, GitHub, GitLab) through the Ingress. It contains triggers with filtering and routing rules for\nincoming requests."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Upon the Event Payload arrival, the ",(0,o.jsx)(n.code,{children:"EventListener"})," runs triggers to process information or validate it via\ndifferent interceptors."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"EDP Interceptor"})," extracts information from the ",(0,o.jsx)(n.code,{children:"codebases.v2.edp.epam.com"})," CR and injects the received data\ninto top-level 'extensions' field of the Event Payload. The Interceptor consists of running Pod and Service."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"Tekton Cel Interceptor"})," does simple transformations of the resulting data and prepares them for the Pipeline\nparameters substitution."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"TriggerTemplate"})," creates a PipelineRun instance with the required parameters extracted from the Event Payload\nby Interceptors. These parameters are mandatory for Pipelines."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"PipelineRun"})," has a mapping to the platform Tekton Pipelines using a template approach which reduces code duplication.\nEach Pipeline is designed for a specific VCS (Gerrit, GitLab, GitHub), technology stack (such as Java or Python),\nand type (code-review, build)."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["A ",(0,o.jsx)(n.code,{children:"Pipeline"})," consists of separate Tekton Tasks. They are arranged in a specific order of execution\nin the Pipeline."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Each ",(0,o.jsx)(n.code,{children:"Task"})," is executed as a Pod on the Kubernetes cluster.\nAlso, Tasks can have a different number of steps that are executed as a Container in Pod."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["The Kubernetes native approach allows the creation of PipelineRun either with the kubectl tool or\nusing the ",(0,o.jsx)(n.a,{href:"/docs/user-guide/application",children:"Portal UI"}),"."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},51145:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/edp-tekton-component-view-diagram-a1a1bab4e1c1eff8976eb20b40ad6620.png"},57520:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/edp-tekton-components-diagram-5191236a78030494ea103664446af296.png"},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var i=t(96540);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);