"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[38039],{2443:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"developer-guide/telemetry","title":"Telemetry","description":"The codebase operator for the KubeRocketCI gathers anonymous data through telemetry. This data provides a clear picture of how the platform is being used and empowers the development team to make informed decisions and strategic enhancements to meet evolving operational needs. The anonymous data collected also plays an essential role in adopting a Software Development Life Cycle (SDLC) process strategically.","source":"@site/versioned_docs/version-3.10/developer-guide/telemetry.md","sourceDirName":"developer-guide","slug":"/developer-guide/telemetry","permalink":"/docs/developer-guide/telemetry","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/developer-guide/telemetry.md","tags":[],"version":"3.10","lastUpdatedBy":"Sergiy Kulanov","lastUpdatedAt":1737665576000,"frontMatter":{},"sidebar":"developerGuideSidebar","previous":{"title":"Quality Control","permalink":"/docs/developer-guide/autotest-coverage"},"next":{"title":"Annotations and Labels","permalink":"/docs/developer-guide/annotations-and-labels"}}');var n=o(74848),a=o(28453);const s={},i="Telemetry",l={},d=[{value:"Telemetry Data",id:"telemetry-data",level:2},{value:"Collecting Timeline",id:"collecting-timeline",level:2},{value:"Disabling Telemetry",id:"disabling-telemetry",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components},{Head:o}=t;return o||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"telemetry",children:"Telemetry"})}),"\n",(0,n.jsx)(o,{children:(0,n.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/developer-guide/telemetry/"})}),"\n",(0,n.jsx)(t.p,{children:"The codebase operator for the KubeRocketCI gathers anonymous data through telemetry. This data provides a clear picture of how the platform is being used and empowers the development team to make informed decisions and strategic enhancements to meet evolving operational needs. The anonymous data collected also plays an essential role in adopting a Software Development Life Cycle (SDLC) process strategically."}),"\n",(0,n.jsx)(t.h2,{id:"telemetry-data",children:"Telemetry Data"}),"\n",(0,n.jsx)(t.p,{children:"The codebase-operator collects the following data:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"The version of the platform"}),"\n",(0,n.jsx)(t.li,{children:"The number of codebases created and their parameters: language (for example, Java, NodeJS, etc.), framework (for example, FastAPI, Flask, etc.), build tool (for example, Maven, Gradle, etc.), strategy (for example, Clone, Create, Import), and Type (for example, library, application, etc.)"}),"\n",(0,n.jsx)(t.li,{children:"The number of CD pipelines created and their parameters: deployment type (for example, Auto, Manual), and the number of stages"}),"\n",(0,n.jsx)(t.li,{children:"The number of Git providers connected to the platform and their types (for example GitHub, GitLab, Bitbucket, or Gerrit)"}),"\n",(0,n.jsx)(t.li,{children:"Where Jira is enabled or not"}),"\n",(0,n.jsx)(t.li,{children:"The type of the Docker registry connected to the platform (for example, Docker Hub, Harbor, ECR)"}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-go",children:'package telemetry\n\ntype CodebaseMetrics struct {\n  Lang       string `json:"lang"`\n  Framework  string `json:"framework"`\n  BuildTool  string `json:"buildTool"`\n  Strategy   string `json:"strategy"`\n  Type       string `json:"type"`\n  Versioning string `json:"versioning"`\n}\n\ntype CdPipelineMetrics struct {\n  DeploymentType string `json:"deploymentType"`\n  NumberOfStages int    `json:"numberOfStages"`\n}\n\ntype PlatformMetrics struct {\n  CodebaseMetrics   []CodebaseMetrics   `json:"codebaseMetrics"`\n  CdPipelineMetrics []CdPipelineMetrics `json:"cdPipelineMetrics"`\n  GitProviders      []string            `json:"gitProviders"`\n  JiraEnabled       bool                `json:"jiraEnabled"`\n  RegistryType      string              `json:"registryType"`\n  Version           string              `json:"version"`\n}\n'})}),"\n",(0,n.jsxs)(t.p,{children:["You can verify the code which collects the data in the ",(0,n.jsx)(t.a,{href:"https://github.com/epam/edp-codebase-operator/tree/master/pkg/telemetry",children:"codebase-operator"})," repository."]}),"\n",(0,n.jsx)(t.h2,{id:"collecting-timeline",children:"Collecting Timeline"}),"\n",(0,n.jsx)(t.p,{children:"The codebase-operator collects the data every 24 hours and sends it to the KubeRocketCI Telemetry Service. The first data points are collected 24 hours after the codebase-operator is deployed to allow users to opt-out of telemetry."}),"\n",(0,n.jsx)(t.h2,{id:"disabling-telemetry",children:"Disabling Telemetry"}),"\n",(0,n.jsxs)(t.p,{children:["The codebase-operator collects telemetry data by default. To disable telemetry, set the ",(0,n.jsx)(t.code,{children:"TELEMETRY_ENABLED"})," environment variable to ",(0,n.jsx)(t.code,{children:"false"})," in the codebase-operator's deployment configuration. To achieve this, run the following command:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'helm upgrade --install codebase-operator codebase-operator/codebase-operator --set "telemetryEnabled=false"\n'})})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,t,o)=>{o.d(t,{R:()=>s,x:()=>i});var r=o(96540);const n={},a=r.createContext(n);function s(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);