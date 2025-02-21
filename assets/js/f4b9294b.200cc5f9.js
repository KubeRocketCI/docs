"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[71479],{3659:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"operator-guide/troubleshooting/review-pipeline-is-failed","title":"Review Pipeline is Failed","description":"Problem","source":"@site/versioned_docs/version-3.9/operator-guide/troubleshooting/review-pipeline-is-failed.md","sourceDirName":"operator-guide/troubleshooting","slug":"/operator-guide/troubleshooting/review-pipeline-is-failed","permalink":"/docs/3.9/operator-guide/troubleshooting/review-pipeline-is-failed","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/operator-guide/troubleshooting/review-pipeline-is-failed.md","tags":[],"version":"3.9","lastUpdatedBy":"Sergiy Kulanov","lastUpdatedAt":1737665242000,"frontMatter":{},"sidebar":"operatorGuideSidebar","previous":{"title":"Forbidden Messages on the Overview Page","permalink":"/docs/3.9/operator-guide/troubleshooting/forbidden-messages"},"next":{"title":"Modify GitOps Repository Path","permalink":"/docs/3.9/operator-guide/troubleshooting/modify-gitops-repo-path"}}');var n=r(74848),t=r(28453);const s={},a="Review Pipeline is Failed",l={},d=[{value:"Problem",id:"problem",level:2},{value:"Cause",id:"cause",level:2},{value:"Solution (Sonar Scanner Error)",id:"solution-sonar-scanner-error",level:2},{value:"Related Articles",id:"related-articles",level:2}];function c(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components},{Head:o}=i;return o||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.header,{children:(0,n.jsx)(i.h1,{id:"review-pipeline-is-failed",children:"Review Pipeline is Failed"})}),"\n",(0,n.jsx)(o,{children:(0,n.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/operator-guide/troubleshooting/review-pipeline-is-failed/"})}),"\n",(0,n.jsx)(i.h2,{id:"problem",children:"Problem"}),"\n",(0,n.jsx)(i.p,{children:"Application can't succeed with review."}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"Tree diagram window",src:r(80606).A+"",title:"Tree diagram window",width:"1900",height:"1046"})}),"\n",(0,n.jsx)(i.h2,{id:"cause",children:"Cause"}),"\n",(0,n.jsx)(i.p,{children:"The review pipeline can fail for various reasons related to the Merge Request, including linter errors, scanner issues, tests, and more. The standard approach to troubleshooting involves navigating to the pipeline status to examine the error, and then making adjustments based on the type of error encountered."}),"\n",(0,n.jsx)(i.h2,{id:"solution-sonar-scanner-error",children:"Solution (Sonar Scanner Error)"}),"\n",(0,n.jsx)(i.p,{children:"This error occurs because SonarQube does not have complete source code data and is unable to compare changes from the patch with the main code. To resolve this issue, execute the build pipeline to submit a comprehensive report of the source code to SonarQube."}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsx)(i.p,{children:"Navigate to your application in KubeRocketCI portal."}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:["In the main branch section, click the ",(0,n.jsx)(i.strong,{children:"Trigger build pipeline run"})," button to run scanning of full repository."]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:["After successful finished build pipeline - re-trigger review pipeline, for example by using ",(0,n.jsx)(i.code,{children:"/recheck"})," feature."]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"Tree diagram window",src:r(31489).A+"",title:"Tree diagram window",width:"1901",height:"1043"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"/docs/3.9/quick-start/create-application",children:"Create Application"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"/docs/3.9/operator-guide/code-quality/sonarqube",children:"SonarQube Integration"})}),"\n"]})]})}function p(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},80606:(e,i,r)=>{r.d(i,{A:()=>o});const o=r.p+"assets/images/sonar_review_failed-436fbc75982c49f1a4393b4a97c76bc1.png"},31489:(e,i,r)=>{r.d(i,{A:()=>o});const o=r.p+"assets/images/successful_pass_review-2aa824485642088cdb01577b36ede1b5.png"},28453:(e,i,r)=>{r.d(i,{R:()=>s,x:()=>a});var o=r(96540);const n={},t=o.createContext(n);function s(e){const i=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),o.createElement(t.Provider,{value:i},e.children)}}}]);