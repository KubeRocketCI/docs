"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8910],{9033:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>n,metadata:()=>c,toc:()=>a});var i=t(74848),r=t(28453);const n={},o="Basic Concepts",c={id:"basic-concepts",title:"Basic Concepts",description:"Consult KubeRocketCI Glossary section for definitions mentioned on this page. The below table contains a list of capabilities provided by the platform.",source:"@site/docs/basic-concepts.md",sourceDirName:".",slug:"/basic-concepts",permalink:"/docs/basic-concepts",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"quickStartSidebar",previous:{title:"Deploy Application",permalink:"/docs/quick-start/deploy-application"},next:{title:"Glossary",permalink:"/docs/glossary"}},d={},a=[];function l(e){const s={a:"a",code:"code",em:"em",h1:"h1",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"basic-concepts",children:"Basic Concepts"}),"\n",(0,i.jsxs)(s.p,{children:["Consult ",(0,i.jsx)(s.a,{href:"/docs/glossary",children:"KubeRocketCI Glossary"})," section for definitions mentioned on this page. The below table contains a list of capabilities provided by the platform."]}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Features"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Cloud Agnostic"}),(0,i.jsx)(s.td,{children:"Platform runs on Kubernetes cluster, so any Public Cloud Provider which provides Kubernetes can be used. Kubernetes clusters deployed on-premises work as well"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"CI/CD for Microservices"}),(0,i.jsxs)(s.td,{children:["KubeRocketCI is initially designed to support CI/CD for ",(0,i.jsx)(s.a,{href:"https://microservices.io/",children:"Microservices"})," running as containerized applications inside Kubernetes Cluster. Platform provides CI Pipelines for ",(0,i.jsx)(s.a,{href:"/docs/about-platform#features",children:"different technology stacks"})]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Version Control System (VCS)"}),(0,i.jsxs)(s.td,{children:["Platform supports ",(0,i.jsx)(s.em,{children:"GitHub"})," and ",(0,i.jsx)(s.em,{children:"GitLab"})," integration"]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Branching Strategy"}),(0,i.jsxs)(s.td,{children:["Platform supports ",(0,i.jsx)(s.a,{href:"https://trunkbaseddevelopment.com/",children:"Trunk-based"})," development as well as ",(0,i.jsx)(s.a,{href:"https://guides.github.com/introduction/flow/",children:"GitHub/GitLab flow"}),". KubeRocketCI creates two Pipelines per each codebase branch: ",(0,i.jsx)(s.em,{children:"Code Review"})," and ",(0,i.jsx)(s.em,{children:"Build"})]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Repository Structure"}),(0,i.jsxs)(s.td,{children:["Platform provides separate Git repository per each Codebase and doesn't work with ",(0,i.jsx)(s.em,{children:"Monorepo"})," out of the box. However, KubeRocketCI does support customization and can be aligned to ",(0,i.jsx)(s.em,{children:"Monorepo"})," approach."]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Artifacts Versioning"}),(0,i.jsxs)(s.td,{children:["Platform supports two approaches for Artifacts versioning: ",(0,i.jsx)("br",{}),"- ",(0,i.jsx)(s.em,{children:"default"})," (BRANCH-[TECH_STACK_VERSION]-BUILD_ID)",(0,i.jsx)("br",{}),"- ",(0,i.jsx)(s.em,{children:"EDP"})," (MAJOR.MINOR.PATCH-BUILD_ID), which is ",(0,i.jsx)(s.a,{href:"https://semver.org/",children:"SemVer"}),". ",(0,i.jsx)("br",{}),"Custom versioning can be created by implementing ",(0,i.jsx)(s.code,{children:"get-version"})," CI step"]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Application Library"}),(0,i.jsxs)(s.td,{children:["The platform offers baseline codebase templates for Microservices and Libraries, using the ",(0,i.jsx)(s.em,{children:"create"})," strategy when onboarding new Codebases."]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"CI Pipelines"}),(0,i.jsxs)(s.td,{children:["KubeRocketCI provides CI Pipelines for ",(0,i.jsx)(s.a,{href:"/docs/about-platform#features",children:"different technology stacks"})]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"CD Pipelines"}),(0,i.jsxs)(s.td,{children:["KubeRocketCI provides capabilities to design CD Pipelines (in Portal UI) for Microservices and defines logic for artifacts flow (promotion) from lower to higher environments. Artifacts promotion is performed automatically (",(0,i.jsx)(s.em,{children:"Autotests"}),"), manually (",(0,i.jsx)(s.em,{children:"User Approval"}),") or combining both approaches"]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Autotests"}),(0,i.jsxs)(s.td,{children:["KubeRocketCI provides CI pipeline for autotest implemented in Java. Autotests can be used as ",(0,i.jsx)(s.em,{children:"Quality Gates"})," in CD Pipelines"]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Custom Pipeline Library"}),(0,i.jsx)(s.td,{children:"KubeRocketCI pipelines can be extended by introducing Custom Pipeline Library"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Dynamic Environments"}),(0,i.jsx)(s.td,{children:"KubeRocketCI CD Pipelines have the ability to create and destroy environments based on user requests. This allows for flexible and dynamic deployment of applications."})]})]})]})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>o,x:()=>c});var i=t(96540);const r={},n=i.createContext(r);function o(e){const s=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(n.Provider,{value:s},e.children)}}}]);