"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[898],{45618:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var i=t(74848),o=t(28453);const r={},a="Integrate SonarQube",s={id:"quick-start/integrate-sonarcloud",title:"Integrate SonarQube",description:"It is essential for KubeRocketCI to have SonarQube integrated with the platform as all the pipelines include the sonar step.",source:"@site/versioned_docs/version-3.9.0/quick-start/integrate-sonarcloud.md",sourceDirName:"quick-start",slug:"/quick-start/integrate-sonarcloud",permalink:"/docs/quick-start/integrate-sonarcloud",draft:!1,unlisted:!1,tags:[],version:"3.9.0",frontMatter:{},sidebar:"quickStartSidebar",previous:{title:"Install KubeRocketCI",permalink:"/docs/quick-start/platform-installation"},next:{title:"Integrate GitHub",permalink:"/docs/quick-start/integrate-github"}},c={},l=[{value:"Integrate SonarCloud",id:"integrate-sonarcloud",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"integrate-sonarqube",children:"Integrate SonarQube"}),"\n",(0,i.jsxs)(n.p,{children:["It is essential for KubeRocketCI to have SonarQube integrated with the platform as all the pipelines include the ",(0,i.jsx)(n.code,{children:"sonar"})," step."]}),"\n",(0,i.jsx)(n.p,{children:"SonarQube is a powerful tool used in build and code review pipelines to enhance code quality by identifying and reporting issues, as well as providing recommendations for improvement. SonarCloud, the SaaS solution offered by SonarQube, serves this purpose."}),"\n",(0,i.jsx)(n.p,{children:"This guide will walk you through the configuration process of SonarCloud for your project."}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["An alternative option is to use an independent ",(0,i.jsx)(n.a,{href:"/docs/operator-guide/code-quality/sonarqube",children:"SonarQube instance"}),"."]})}),"\n",(0,i.jsx)(n.h2,{id:"integrate-sonarcloud",children:"Integrate SonarCloud"}),"\n",(0,i.jsx)(n.p,{children:"To integrate SonarCloud with the platform, follow the steps below:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Sign up in the ",(0,i.jsx)(n.a,{href:"https://sonarcloud.io",children:"SonarCloud"})," with your GitHub account."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Once you are logged in with GitHub, import an organization from GitHub:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Import organization",src:t(72764).A+"",title:"Import organization",width:"1915",height:"933"})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"It is crucial to have the organization created in SonarCloud. If you were signed up in SonarCloud using a GitHub account, SonarCloud will suggest you creating an organization with name that is equivalent to your GitHub account name."})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the Create an organization menu, choose the free plan and click ",(0,i.jsx)(n.strong,{children:"Create organization"}),":"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Create organization",src:t(94474).A+"",title:"Choose plan",width:"1908",height:"930"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In your account menu, select the ",(0,i.jsx)(n.strong,{children:"Security"})," tab and generate token:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Create organization",src:t(14115).A+"",title:"Generate token",width:"1910",height:"932"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the UI Portal, navigate to ",(0,i.jsx)(n.code,{children:"Configuration"})," -> ",(0,i.jsx)(n.code,{children:"Code Quality"}),". Define the following values and click ",(0,i.jsx)(n.strong,{children:"Save"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["URL: ",(0,i.jsx)(n.code,{children:"https://sonarcloud.io"})]}),"\n",(0,i.jsxs)(n.li,{children:["Token: ",(0,i.jsx)(n.code,{children:"account token generated in SonarCloud"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"SonarQube integration",src:t(7252).A+"",title:"SonarQube integration",width:"1915",height:"923"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["After completing the SonarQube integration, proceed to integrate the platform with GitHub. Navigate to the ",(0,i.jsx)(n.a,{href:"/docs/quick-start/integrate-github",children:"Integrate GitHub"})," page for further instructions."]})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},94474:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/free_plan-3bdc1dcf240e87ffdb0d73c3a5306935.png"},14115:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/generate_token-1dab6a968749d94964bec03a1292a628.png"},72764:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/import_from_github-489ec0c94c899402c54ca986a3dfd974.png"},7252:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/sonarqube_integrated-054d773e57b3c224d20d09c40b1c16d7.png"},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>s});var i=t(96540);const o={},r=i.createContext(o);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);