"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[33907],{92458:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"faq/artifacts","title":"Artifacts Management","description":"A list of frequently asked questions about the Artifacts Management in KubeRocketCI.","source":"@site/versioned_docs/version-3.9/faq/artifacts.md","sourceDirName":"faq","slug":"/faq/artifacts","permalink":"/docs/3.9/faq/artifacts","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/faq/artifacts.md","tags":[],"version":"3.9","lastUpdatedBy":"Sergiy Kulanov","lastUpdatedAt":1737665242000,"sidebarPosition":0,"frontMatter":{"title":"Artifacts Management","description":"A list of frequently asked questions about the Artifacts Management in KubeRocketCI.","sidebar_label":"Artifact Management","sidebar_position":0},"sidebar":"faqSidebar","next":{"title":"Logging, Monitoring & Tracing","permalink":"/docs/3.9/faq/observability"}}');var i=n(74848),r=n(28453);const a={title:"Artifacts Management",description:"A list of frequently asked questions about the Artifacts Management in KubeRocketCI.",sidebar_label:"Artifact Management",sidebar_position:0},o=void 0,c={},d=[{value:"How Does Artifact Versioning Work?",id:"how-does-artifact-versioning-work",level:3}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{Head:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"This page contains a list of frequently asked questions related to artifact management in KubeRocketCI."}),"\n",(0,i.jsx)(n,{children:(0,i.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/faq/artifacts/"})}),"\n",(0,i.jsx)(t.h3,{id:"how-does-artifact-versioning-work",children:"How Does Artifact Versioning Work?"}),"\n",(0,i.jsx)(t.p,{children:"Artifact versioning in KubeRocketCI is designed to ensure each build and deployment can be uniquely identified, managed, and traced back to its source."}),"\n",(0,i.jsxs)(t.p,{children:["KubeRocketCI supports two major ",(0,i.jsx)(t.strong,{children:"versioning schemes"}),":"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"default"}),": generates versions based on the branch name and datetime, e.g. (",(0,i.jsx)(t.code,{children:"BRANCH-DATETIME"}),")."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"edp"}),": structures versions as ",(0,i.jsx)(t.code,{children:"MAJOR.MINOR.PATCH-BUILD_ID"}),", based on the Semantic Versioning standards."]}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.p,{children:["User can implement ",(0,i.jsx)(t.strong,{children:"Custom Versioning"})," by updating ",(0,i.jsx)(t.a,{href:"https://github.com/epam/edp-tekton/tree/master/charts/pipelines-library/templates/tasks/getversion",children:(0,i.jsx)(t.code,{children:"get-version"})})," CI step."]})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Artifact Tagging and Storage"}),": Artifacts are tagged on the ",(0,i.jsx)(t.code,{children:"build pipeline"})," and stored in ",(0,i.jsx)(t.code,{children:"git"}),", ",(0,i.jsx)(t.a,{href:"/docs/3.9/api/codebase#codebaseimagestream",children:(0,i.jsx)(t.code,{children:"CodebaseImageStream"})})," and ",(0,i.jsx)(t.a,{href:"/docs/3.9/api/codebase#codebasebranch",children:(0,i.jsx)(t.code,{children:"CodebaseBranch"})}),"."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"CodebaseBranch"}),": The CodebaseBranch custom resource is integral to the artifact versioning process in KubeRocketCI. It tracks and stores versioning details related to each branch. This includes:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Version History"}),": A list of all versions created from the branch."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Build Information"}),": Details of the current and last successful builds, which can include version identifiers."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var s=n(96540);const i={},r=s.createContext(i);function a(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);