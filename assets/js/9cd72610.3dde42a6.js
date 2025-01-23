"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[93687],{46322:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>n,toc:()=>a});const n=JSON.parse('{"id":"developer-guide/autotest-coverage","title":"Quality Control","description":"In KubeRocketCI, we guarantee the quality of the product not only by using the most advanced tools and best practices but also by covering the whole product functionality with our dedicated automated tests.","source":"@site/versioned_docs/version-3.10/developer-guide/autotest-coverage.md","sourceDirName":"developer-guide","slug":"/developer-guide/autotest-coverage","permalink":"/docs/developer-guide/autotest-coverage","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/developer-guide/autotest-coverage.md","tags":[],"version":"3.10","lastUpdatedBy":"Sergiy Kulanov","lastUpdatedAt":1737665576000,"frontMatter":{},"sidebar":"developerGuideSidebar","previous":{"title":"Verification of KubeRocketCI Artifacts","permalink":"/docs/developer-guide/artifacts-verification"},"next":{"title":"Telemetry","permalink":"/docs/developer-guide/telemetry"}}');var s=i(74848),o=i(28453);const r={},l="Quality Control",d={},a=[{value:"Autotest Coverage Scheme",id:"autotest-coverage-scheme",level:2},{value:"Release Testing",id:"release-testing",level:2},{value:"Related Articles",id:"related-articles",level:2}];function c(e){const t={a:"a",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components},{Head:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"quality-control",children:"Quality Control"})}),"\n",(0,s.jsx)(n,{children:(0,s.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/developer-guide/autotest-coverage/"})}),"\n",(0,s.jsx)(t.p,{children:"In KubeRocketCI, we guarantee the quality of the product not only by using the most advanced tools and best practices but also by covering the whole product functionality with our dedicated automated tests."}),"\n",(0,s.jsx)(t.h2,{id:"autotest-coverage-scheme",children:"Autotest Coverage Scheme"}),"\n",(0,s.jsx)(t.p,{children:"Autotests are significant part of our verification flow. Continuous improvement of the verification mechanisms quality is performed to provide users with the most stable version of the platform."}),"\n",(0,s.jsx)(t.p,{children:"The autotest coverage status is presented on the scheme below:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Autotest coverage status",src:i(2510).A+"",title:"Autotest coverage status",width:"2431",height:"901"})}),"\n",(0,s.jsx)(t.h2,{id:"release-testing",children:"Release Testing"}),"\n",(0,s.jsx)(t.p,{children:"In our testing flow, each release is verified by the following tests:"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Test Group"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"What's Covered"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"API Tests"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Tekton Gerrit, GitHub, and GitLab API long regression"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Codebase provisioning, reviewing and building pipelines, adding new branches, deploying applications (in a custom namespace), Jira integration, and rechecking for review pipeline."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"UI Tests"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Tekton Gerrit, GitHub, and GitLab UI long regression"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Codebase provisioning, reviewing and building pipelines, adding new branches, deploying applications (in a custom namespace), Jira integration, and rechecking for review pipeline."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Short Tests"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Tekton Gerrit , GitHub, and GitLab API short regression"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Codebase provisioning, reviewing and building pipelines, deploying applications (in a custom namespace), rechecking for review pipeline"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Smoke"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Tekton Gerrit Smoke"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Codebase provisioning, reviewing and building pipelines, deploying applications."})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/docs/developer-guide/edp-workflow",children:"KubeRocketCI Project Rules. Working Process"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/docs/developer-guide/local-development",children:"Operator Development"})}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},2510:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/autotests-coverage-d57bb1d44716ca85678be1d0bd7fb599.png"},28453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>l});var n=i(96540);const s={},o=n.createContext(s);function r(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);