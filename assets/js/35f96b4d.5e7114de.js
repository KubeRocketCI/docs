"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[344],{51991:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>c,contentTitle:()=>s,default:()=>a,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=t(74848),o=t(28453);const r={},s="Code Review Pipeline",l={id:"user-guide/code-review-pipeline",title:"Code Review Pipeline",description:"This section provides details on the Code Review pipeline of the KubeRocketCI CI/CD framework. Explore below the pipeline purpose, stages and possible actions to perform.",source:"@site/docs/user-guide/code-review-pipeline.md",sourceDirName:"user-guide",slug:"/user-guide/code-review-pipeline",permalink:"/docs/next/user-guide/code-review-pipeline",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{}},c={},p=[{value:"Code Review Pipeline Purpose",id:"code-review-pipeline-purpose",level:2}];function d(e){const i={h1:"h1",h2:"h2",li:"li",mermaid:"mermaid",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"code-review-pipeline",children:"Code Review Pipeline"}),"\n",(0,n.jsx)(i.p,{children:"This section provides details on the Code Review pipeline of the KubeRocketCI CI/CD framework. Explore below the pipeline purpose, stages and possible actions to perform."}),"\n",(0,n.jsx)(i.h2,{id:"code-review-pipeline-purpose",children:"Code Review Pipeline Purpose"}),"\n",(0,n.jsx)(i.p,{children:"The purpose of the Code Review pipeline contains the following points:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Check out and test a particular developer's change (Patch Set) in order to inspect whether the code fits all the quality gates and can be built and tested;"}),"\n",(0,n.jsx)(i.li,{children:"Be triggered if any new Patch Set appears in GitHub/GitLab/Gerrit;"}),"\n",(0,n.jsx)(i.li,{children:"Send feedback about the build process in Tekton to review the card in Gerrit;"}),"\n",(0,n.jsx)(i.li,{children:"Send feedback about Sonar violations that have been found during the Sonar stage."}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"Find below the functional diagram of the Code Review pipeline with the default stages:"}),"\n",(0,n.jsx)(i.mermaid,{value:"flowchart TD\n   build --\x3e dockerbuild-verify\n   compile --\x3e test\n   dockerbuild-verify --\x3e stop([fa:fa-circle])\n   dockerfile-lint --\x3e dockerbuild-verify\n   fetch-repository --\x3e init-values\n   fetch-repository --\x3e helm-docs\n   fetch-repository --\x3e dockerfile-lint\n   fetch-repository --\x3e helm-lint\n   helm-docs --\x3e stop([fa:fa-circle])\n   helm-lint --\x3e stop([fa:fa-circle])\n   init-values --\x3e compile\n   start([fa:fa-circle]) --\x3e report-pipeline-start-to-gitlab\n   report-pipeline-start-to-gitlab --\x3e fetch-repository\n   sonar --\x3e build\n   test --\x3e sonar"})]})}function a(e={}){const{wrapper:i}={...(0,o.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,i,t)=>{t.d(i,{R:()=>s,x:()=>l});var n=t(96540);const o={},r=n.createContext(o);function s(e){const i=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(r.Provider,{value:i},e.children)}}}]);