"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[63110],{64291:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"user-guide/ci-pipeline-details","title":"CI Pipeline Details","description":"CI Pipeline (Continuous Integration Pipeline) - KubeRocketCI business entity that describes the integration of changes made to a codebase into a single project. The main idea of the CI pipeline is to review the changes in the code submitted through a Version Control System (VCS) and build a new codebase version so that it can be transmitted to the Continuous Delivery Pipeline for the rest of the delivery process.","source":"@site/versioned_docs/version-3.9/user-guide/ci-pipeline-details.md","sourceDirName":"user-guide","slug":"/user-guide/ci-pipeline-details","permalink":"/docs/3.9/user-guide/ci-pipeline-details","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/user-guide/ci-pipeline-details.md","tags":[],"version":"3.9","lastUpdatedBy":"Sergiy Kulanov","lastUpdatedAt":1730106685000,"frontMatter":{}}');var s=t(74848),o=t(28453);const r={},a="CI Pipeline Details",d={},l=[{value:"Related Articles",id:"related-articles",level:2}];function c(e){const i={a:"a",admonition:"admonition",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.header,{children:(0,s.jsx)(i.h1,{id:"ci-pipeline-details",children:"CI Pipeline Details"})}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"CI Pipeline (Continuous Integration Pipeline)"})," - KubeRocketCI business entity that describes the integration of changes made to a codebase into a single project. The main idea of the CI pipeline is to review the changes in the code submitted through a Version Control System (VCS) and build a new codebase version so that it can be transmitted to the Continuous Delivery Pipeline for the rest of the delivery process."]}),"\n",(0,s.jsx)(i.p,{children:"There are three codebase types in KubeRocketCI:"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Applications"})," - a codebase that is developed in the Version Control System, has the full lifecycle starting from the Code Review stage to its deployment to the environment;"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Libraries"})," - this codebase is similar to the Application type, but it is not deployed and stored in the Artifactory. The library can be connected to other applications/libraries;"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Autotests"})," - a codebase that inspects the code and can be used as a quality gate for the CD pipeline stage. The autotest only has the Code Review pipeline and is launched for the stage verification."]}),"\n"]}),"\n",(0,s.jsx)(i.admonition,{type:"note",children:(0,s.jsxs)(i.p,{children:["For more information on the above mentioned codebase types, please refer to the ",(0,s.jsx)(i.a,{href:"/docs/3.9/user-guide/add-application",children:"Add Application"}),", ",(0,s.jsx)(i.a,{href:"/docs/3.9/user-guide/add-library",children:"Add Library"}),", ",(0,s.jsx)(i.a,{href:"/docs/3.9/user-guide/add-autotest",children:"Add Autotests"})," and ",(0,s.jsx)(i.a,{href:"/docs/3.9/use-cases/autotest-as-quality-gate",children:"Autotest as Quality Gate"})," pages."]})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"KubeRocketCI CI pipeline",src:t(39157).A+"",title:"KubeRocketCI CI pipeline",width:"910",height:"391"})}),"\n",(0,s.jsx)(i.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"/docs/3.9/user-guide/add-application",children:"Add Application"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"/docs/3.9/user-guide/add-autotest",children:"Add Autotest"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"/docs/3.9/user-guide/add-library",children:"Add Library"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"/docs/3.9/operator-guide/project-management-and-reporting/jira-integration",children:"Adjust Jira Integration"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"/docs/3.9/use-cases/autotest-as-quality-gate",children:"Autotest as Quality Gate"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"/docs/3.9/user-guide/build-pipeline",children:"Build Pipeline"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"/docs/3.9/user-guide/code-review-pipeline",children:"Code Review Pipeline"})}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,o.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},39157:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/edp-ci-pipeline-8e75b0e902acff330920848408e4b244.png"},28453:(e,i,t)=>{t.d(i,{R:()=>r,x:()=>a});var n=t(96540);const s={},o=n.createContext(s);function r(e){const i=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(o.Provider,{value:i},e.children)}}}]);