"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[71879],{61381:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"quick-start/integrate-sonarcloud","title":"Integrate SonarQube","description":"It is essential for KubeRocketCI to have SonarQube integrated with the platform as all the pipelines include the sonar step.","source":"@site/versioned_docs/version-3.9/quick-start/integrate-sonarcloud.md","sourceDirName":"quick-start","slug":"/quick-start/integrate-sonarcloud","permalink":"/docs/3.9/quick-start/integrate-sonarcloud","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/quick-start/integrate-sonarcloud.md","tags":[],"version":"3.9","lastUpdatedBy":"Sergiy Kulanov","lastUpdatedAt":1730106685000,"frontMatter":{},"sidebar":"quickStartSidebar","previous":{"title":"Install KubeRocketCI","permalink":"/docs/3.9/quick-start/platform-installation"},"next":{"title":"Integrate GitHub","permalink":"/docs/3.9/quick-start/integrate-github"}}');var o=t(74848),r=t(28453);const a={},s="Integrate SonarQube",c={},l=[{value:"Integrate SonarCloud",id:"integrate-sonarcloud",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"integrate-sonarqube",children:"Integrate SonarQube"})}),"\n",(0,o.jsxs)(n.p,{children:["It is essential for KubeRocketCI to have SonarQube integrated with the platform as all the pipelines include the ",(0,o.jsx)(n.code,{children:"sonar"})," step."]}),"\n",(0,o.jsx)(n.p,{children:"SonarQube is a powerful tool used in build and code review pipelines to enhance code quality by identifying and reporting issues, as well as providing recommendations for improvement. SonarCloud, the SaaS solution offered by SonarQube, serves this purpose."}),"\n",(0,o.jsx)(n.p,{children:"This guide will walk you through the configuration process of SonarCloud for your project."}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["An alternative option is to use an independent ",(0,o.jsx)(n.a,{href:"/docs/3.9/operator-guide/code-quality/sonarqube",children:"SonarQube instance"}),"."]})}),"\n",(0,o.jsx)(n.h2,{id:"integrate-sonarcloud",children:"Integrate SonarCloud"}),"\n",(0,o.jsx)(n.p,{children:"To integrate SonarCloud with the platform, follow the steps below:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Sign up in the ",(0,o.jsx)(n.a,{href:"https://sonarcloud.io",children:"SonarCloud"})," with your GitHub account."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Once you are logged in with GitHub, on ",(0,o.jsx)(n.a,{href:"https://sonarcloud.io/create-organization",children:"organization page"})," import a new one from GitHub:"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Import organization",src:t(33650).A+"",title:"Import organization",width:"1920",height:"1088"})}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"It is crucial to have the organization created in SonarCloud. If you were signed up in SonarCloud using a GitHub account, SonarCloud will suggest you creating an organization with name that is equivalent to your GitHub account name."})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["In the Create an organization menu, choose the free plan and click ",(0,o.jsx)(n.strong,{children:"Create organization"}),":"]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"Organization key must be unique."})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Create organization",src:t(44920).A+"",title:"Choose plan",width:"1904",height:"1083"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["In your account menu, select the ",(0,o.jsx)(n.a,{href:"https://sonarcloud.io/account/security",children:(0,o.jsx)(n.strong,{children:"Security"})})," tab and generate token:"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Create organization",src:t(28601).A+"",title:"Generate token",width:"1904",height:"1076"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["In the UI Portal, navigate to ",(0,o.jsx)(n.strong,{children:"Configuration"})," -> ",(0,o.jsx)(n.strong,{children:"Code Quality"}),". Define the following values and click ",(0,o.jsx)(n.strong,{children:"Save"}),":"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["URL: ",(0,o.jsx)(n.code,{children:"https://sonarcloud.io"})]}),"\n",(0,o.jsxs)(n.li,{children:["Token: ",(0,o.jsx)(n.code,{children:"account token generated in SonarCloud"})]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"SonarQube integration",src:t(41186).A+"",title:"SonarQube integration",width:"1916",height:"1045"})}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["After completing the SonarQube integration, proceed to integrate the platform with GitHub. Navigate to the ",(0,o.jsx)(n.a,{href:"/docs/3.9/quick-start/integrate-github",children:"Integrate GitHub"})," page for further instructions."]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},44920:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/free_plan-6e5aaf76b5b28640712ccf84d0c229ce.png"},28601:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/generate_token-ce1cf216b0f2f432271117ed061fa202.png"},33650:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/import_from_github-a081d67b9def8dadf8fd9886416ff70f.png"},41186:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/sonarqube_integrated-ecdc02a4668f567b6f375a334e63aae5.png"},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>s});var i=t(96540);const o={},r=i.createContext(o);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);