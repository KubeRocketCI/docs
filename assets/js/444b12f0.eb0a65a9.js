"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[63534],{68974:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>l});const o=JSON.parse('{"id":"user-guide/application-sonarqube-project-properties","title":"Sonarqube Project Properties for Application","description":"The KubeRocketCI platform simplifies this process by supporting SonarQube integration with predefined configurations. However, specific use cases may require customization. Below is a guide on setting the SonarQube project properties to meet all application requirements.","source":"@site/versioned_docs/version-3.10/user-guide/application-sonarqube-project-properties.md","sourceDirName":"user-guide","slug":"/user-guide/application-sonarqube-project-properties","permalink":"/docs/user-guide/application-sonarqube-project-properties","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/user-guide/application-sonarqube-project-properties.md","tags":[],"version":"3.10","lastUpdatedBy":"Sergiy Kulanov","lastUpdatedAt":1736607131000,"frontMatter":{},"sidebar":"userGuideSidebar","previous":{"title":"Manage Applications","permalink":"/docs/user-guide/application"},"next":{"title":"Add Autotest","permalink":"/docs/user-guide/add-autotest"}}');var t=n(74848),i=n(28453);const s={},a="Sonarqube Project Properties for Application",c={},l=[{value:"Application repo structure",id:"application-repo-structure",level:2},{value:"Default project parameters",id:"default-project-parameters",level:2},{value:"Related Articles",id:"related-articles",level:2}];function p(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{Details:n}=r;return n||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"sonarqube-project-properties-for-application",children:"Sonarqube Project Properties for Application"})}),"\n",(0,t.jsx)(r.p,{children:"The KubeRocketCI platform simplifies this process by supporting SonarQube integration with predefined configurations. However, specific use cases may require customization. Below is a guide on setting the SonarQube project properties to meet all application requirements."}),"\n",(0,t.jsx)(r.h2,{id:"application-repo-structure",children:"Application repo structure"}),"\n",(0,t.jsxs)(r.p,{children:["When an application is added to the KubeRocketCI, a default ",(0,t.jsx)(r.code,{children:"sonar-project.properties"})," file is automatically generated during the codebase onboarding process. However, depending on the specific needs of the application, a separate configuration file can be created, placed in the root directory of the application repository, and used for sonarqube code quality during the pipeline:"]}),"\n",(0,t.jsxs)(n,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)("b",{children:"example repository structure"})}),(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-text",children:"go-example-project\n  \u251c\u2500\u2500 deploy-templates\n  \u2502   \u2514\u2500\u2500 ..\n  \u251c\u2500\u2500 Dockerfile\n  \u251c\u2500\u2500 Makefile\n  \u251c\u2500\u2500 controllers\n  \u2502   \u251c\u2500\u2500 hello.go\n  \u2502   \u2514\u2500\u2500 hello_test.go\n  \u251c\u2500\u2500 go.mod\n  \u251c\u2500\u2500 go.sum\n  \u251c\u2500\u2500 main.go\n  \u251c\u2500\u2500 routers\n  \u2502   \u2514\u2500\u2500 router.go\n  \u2514\u2500\u2500 sonar-project.properties\n"})})]}),"\n",(0,t.jsx)(r.h2,{id:"default-project-parameters",children:"Default project parameters"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"sonar.projectKey:"})," A unique identifier for the SonarQube project. This is also set to the application ",(0,t.jsx)(r.strong,{children:"codebase name"})," by the KubeRocketCI pipelines."]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"sonar.projectName:"})," A readable name for the project. This is also set to the application ",(0,t.jsx)(r.strong,{children:"codebase name"})," by the KubeRocketCI pipelines."]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"sonar.qualitygate.wait:"})," Enables waiting for Quality Gate results before proceeding (e.g., ",(0,t.jsx)(r.strong,{children:"true"})," or ",(0,t.jsx)(r.strong,{children:"false"}),") by default KubeRocketCI pipelines set it ",(0,t.jsx)(r.strong,{children:"true"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"sonar.host.url:"})," by default set from KuberocketCI pipelines from ",(0,t.jsxs)(r.a,{href:"/docs/operator-guide/code-quality/sonarqube#configuration",children:["KuberocketCI sonarqube integration ",(0,t.jsx)(r.strong,{children:"url"})]}),"."]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"sonar.login:"})," by default set from KuberocketCI pipelines from ",(0,t.jsxs)(r.a,{href:"/docs/operator-guide/code-quality/sonarqube#configuration",children:["KuberocketCI sonarqube integration ",(0,t.jsx)(r.strong,{children:"token"})]}),"."]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"sonar.organization:"})," by default not set from KuberocketCI pipelines and used only for ",(0,t.jsx)(r.a,{href:"/docs/quick-start/integrate-sonarcloud",children:"sonar cloud integration"}),"."]}),"\n",(0,t.jsxs)(n,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)("b",{children:"sonar-project.properties: file example of configuration"})}),(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-text",children:"sonar.projectKey=go-example-project\nsonar.projectName=go-example-project\nsonar.exclusions=**/cmd/**,**/deploy/**,**/deploy-templates/**,**/*.groovy,**/config/**\nsonar.language=go\n"})})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["For additional assistance with configuring SonarQube properties, please refer to the ",(0,t.jsx)(r.a,{href:"https://docs.sonarsource.com/sonarqube-server/10.6/analyzing-source-code/scanners/sonarscanner/",children:"SonarQube documentation"})]}),"\n",(0,t.jsx)(r.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"/docs/user-guide/add-application",children:"Add Application"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"/docs/quick-start/integrate-sonarcloud",children:"Integrate SonarQube"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"/docs/quick-start/create-application",children:"Create Application"})}),"\n"]})]})}function d(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>s,x:()=>a});var o=n(96540);const t={},i=o.createContext(t);function s(e){const r=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),o.createElement(i.Provider,{value:r},e.children)}}}]);