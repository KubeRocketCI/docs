"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[15345],{42875:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"use-cases/cd-autotests-run-with-env-variables","title":"Set Test Suite Parameters Using Environment Variables in CD Pipelines","description":"This use case demonstrates how the KubeRocketCI platform uses environment variables to flexibly configure commands in deployment pipelines. Teams can dynamically adjust parameters adding, modifying, or removing them without changing the test suite code. This provides precise control over quality gates, streamlines workflows, and allows pipelines to adapt to different environments or requirements while maintaining efficiency and quality standards.","source":"@site/docs/use-cases/cd-autotests-run-with-env-variables.md","sourceDirName":"use-cases","slug":"/use-cases/cd-autotests-run-with-env-variables","permalink":"/docs/next/use-cases/cd-autotests-run-with-env-variables","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/use-cases/cd-autotests-run-with-env-variables.md","tags":[],"version":"current","lastUpdatedBy":"oleksandr_taruraiev","lastUpdatedAt":1733211750000,"frontMatter":{},"sidebar":"useCasesSidebar","previous":{"title":"Deploy Application With Custom Build Tool/Framework","permalink":"/docs/next/use-cases/tekton-custom-pipelines"}}');var i=t(74848),l=t(28453);const a={},r="Set Test Suite Parameters Using Environment Variables in CD Pipelines",o={},c=[{value:"Goals",id:"goals",level:2},{value:"Preconditions",id:"preconditions",level:2},{value:"Scenario",id:"scenario",level:2},{value:"Fork the Tekton Chart",id:"fork-the-tekton-chart",level:3},{value:"Add an Application",id:"add-an-application",level:3},{value:"Add the Autotests",id:"add-the-autotests",level:3},{value:"Create Deployment Flow, Environment, and Set Variables",id:"create-deployment-flow-environment-and-set-variables",level:3},{value:"Validate",id:"validate",level:3},{value:"Related Articles",id:"related-articles",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"set-test-suite-parameters-using-environment-variables-in-cd-pipelines",children:"Set Test Suite Parameters Using Environment Variables in CD Pipelines"})}),"\n",(0,i.jsx)(n.p,{children:"This use case demonstrates how the KubeRocketCI platform uses environment variables to flexibly configure commands in deployment pipelines. Teams can dynamically adjust parameters adding, modifying, or removing them without changing the test suite code. This provides precise control over quality gates, streamlines workflows, and allows pipelines to adapt to different environments or requirements while maintaining efficiency and quality standards."}),"\n",(0,i.jsx)(n.h2,{id:"goals",children:"Goals"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Flexible and convenient preparation and validation of the testing environment using environment variables."}),"\n",(0,i.jsx)(n.li,{children:"The ability to manage environment variables by overriding, adding, or removing their values and keys to configure test parameters."}),"\n",(0,i.jsx)(n.li,{children:"A streamlined setup process that allows teams to focus on development without platform constraints."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"preconditions",children:"Preconditions"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["KubeRocketCI instance with GitHub is ",(0,i.jsx)(n.a,{href:"/docs/next/operator-guide/prerequisites",children:"configured"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Developer has access to the KubeRocketCI instances using the Single-Sign-On approach."}),"\n",(0,i.jsxs)(n.li,{children:["Developer has ",(0,i.jsx)(n.code,{children:"Write"})," permissions for GitHub repository to merge the code."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"scenario",children:"Scenario"}),"\n",(0,i.jsx)(n.p,{children:"To implement specific logic in deployment flow quality gate within the KubeRocketCI platform, follow these steps:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Fork the Tekton Chart"}),": Fork, clone and deploy the prepared Tekton chart that implements the required Tekton resources with the environment variables usage."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Add the Application"}),": Add a simple application from the platform marketplace and build the application to prepare it for deployment."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Add the Autotests"}),": Set up the autotests with the clone strategy to include them in the Deployment Flow."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Create Deployment Flow, Environment, and Set Variables"}),": Create a Deployment Flow, Set up an environment for the deployment, add Autotests as a quality gate to the flow, and define the variable."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Validate"}),": Review the pipeline logs to ensure autotests execute correctly and produce the expected output."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"fork-the-tekton-chart",children:"Fork the Tekton Chart"}),"\n",(0,i.jsx)(n.p,{children:"The first step is to clone and install the Tekton chart:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Create a private repository and copy the ",(0,i.jsx)(n.a,{href:"https://github.com/KubeRocketCI/variables-case-tekton",children:"chart repository"})," content. Below is the repository structure:"]}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:"Repository structure"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"  variables-case-tekton\n    .\n    \u251c\u2500\u2500 Chart.lock\n    \u251c\u2500\u2500 Chart.yaml\n    \u251c\u2500\u2500 README.md\n    \u251c\u2500\u2500 chart_schema.yaml\n    \u251c\u2500\u2500 ct.yaml\n    \u251c\u2500\u2500 lintconf.yaml\n    \u251c\u2500\u2500 templates\n    \u2502   \u251c\u2500\u2500 pipelines\n    \u2502   \u2502   \u2514\u2500\u2500 cd\n    \u2502   \u2502       \u251c\u2500\u2500 autotest-variables.yaml\n    \u2502   \u2502       \u2514\u2500\u2500 deploy-with-autotests-variables.yaml\n    \u2502   \u251c\u2500\u2500 tasks\n    \u2502   \u2502   \u2514\u2500\u2500 cd\n    \u2502   \u2502       \u251c\u2500\u2500 init-autotests-variables.yaml\n    \u2502   \u2502       \u2514\u2500\u2500 run-autotests-variables-java.yaml\n    \u2502   \u2514\u2500\u2500 triggers\n    \u2502       \u2514\u2500\u2500 cd\n    \u2502           \u2514\u2500\u2500 deploy-with-autotests-variables.yaml\n    \u2514\u2500\u2500 values.yaml\n"})})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Clone your private repository to your local machine:"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Clone repo",src:t(82343).A+"",title:"Clone repo",width:"1989",height:"1212"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git clone git@github.com:<github_account_name>/variables-case-tekton.git\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Update the component configuration in the ",(0,i.jsx)(n.code,{children:"values.yaml"})," file:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'# Replace `example.domain.com` with the appropriate wildcard domain for your setup.\n dnsWildCard: "example.domain.com"\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Install the chart:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"helm upgrade --install custom-tekton-chart variables-case-tekton -n krci\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"add-an-application",children:"Add an Application"}),"\n",(0,i.jsx)(n.p,{children:"As soon as the Helm chart is installed, the new deploy pipeline will appear in the Environment configuration window. The next step is to create an application from a template:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Navigate to the ",(0,i.jsx)(n.code,{children:"Marketplace"})," section on the navigation bar to see the ",(0,i.jsx)(n.code,{children:"Marketplace"})," overview page."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Select the component ",(0,i.jsx)(n.code,{children:"Simple Spring Boot Application"}),", open its details window, and click ",(0,i.jsx)(n.code,{children:"Create"})," from template:"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Marketplace application",src:t(44795).A+"",title:"Marketplace application",width:"3584",height:"1782"})}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Fill in the required fields and click ",(0,i.jsx)(n.code,{children:"Create"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Component name:",(0,i.jsx)(n.code,{children:"spring-boot-app"})]}),"\n",(0,i.jsxs)(n.li,{children:["Description: ",(0,i.jsx)(n.code,{children:"Simple spring boot application"})]}),"\n",(0,i.jsxs)(n.li,{children:["Git server: ",(0,i.jsx)(n.code,{children:"github"})]}),"\n",(0,i.jsxs)(n.li,{children:["Repository name: ",(0,i.jsx)(n.code,{children:"<github_account_name>/spring-boot-app"})]}),"\n",(0,i.jsxs)(n.li,{children:["Codebase versioning type: ",(0,i.jsx)(n.code,{children:"edp"})]}),"\n",(0,i.jsxs)(n.li,{children:["Start version from: ",(0,i.jsx)(n.code,{children:"0.1.0"})]}),"\n",(0,i.jsxs)(n.li,{children:["Suffix: ",(0,i.jsx)(n.code,{children:"SNAPSHOT"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Application creation",src:t(83277).A+"",title:"Application creation",width:"3578",height:"1770"})}),"\n",(0,i.jsxs)(n.ol,{start:"4",children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click the ",(0,i.jsx)(n.strong,{children:"Go to application"})," button."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click on ",(0,i.jsx)(n.strong,{children:"Branches"})," and click the ",(0,i.jsx)(n.strong,{children:"Trigger build PipelineRun"})," button:"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Trigger build",src:t(93376).A+"",title:"Trigger build",width:"3548",height:"1770"})}),"\n",(0,i.jsxs)(n.ol,{start:"6",children:["\n",(0,i.jsx)(n.li,{children:"Wait until the build is successful:"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Successful Build",src:t(79758).A+"",title:"Successful Build",width:"3552",height:"1766"})}),"\n",(0,i.jsx)(n.h3,{id:"add-the-autotests",children:"Add the Autotests"}),"\n",(0,i.jsx)(n.p,{children:"Now you need to create template autotests that will be executed when deploying application:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["To add an autotest, navigate to the ",(0,i.jsx)(n.strong,{children:"Components"})," section on the navigation bar and click ",(0,i.jsx)(n.strong,{children:"+ Create component"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Once clicked, the ",(0,i.jsx)(n.strong,{children:"Create new component"})," dialog will appear, then select ",(0,i.jsx)(n.strong,{children:"Autotest"})," and click ",(0,i.jsx)(n.strong,{children:"Next"}),":"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Autotests component",src:t(77947).A+"",title:"Autotests component",width:"3582",height:"1772"})}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsxs)(n.li,{children:["Choose ",(0,i.jsx)(n.strong,{children:"Clone project"})," strategy and click the ",(0,i.jsx)(n.strong,{children:"CREATE"})," button:"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Autotests clone strategy",src:t(2536).A+"",title:"Autotests clone strategy",width:"3584",height:"1776"})}),"\n",(0,i.jsxs)(n.ol,{start:"4",children:["\n",(0,i.jsxs)(n.li,{children:["Fill in the following fields in ",(0,i.jsx)(n.strong,{children:"Add components info"})," and click the ",(0,i.jsx)(n.strong,{children:"NEXT"})," button to proceed:"]}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["RepoUrl: ",(0,i.jsx)(n.code,{children:"https://github.com/KubeRocketCI/demo-autotests-gradle"})]}),"\n",(0,i.jsxs)(n.li,{children:["Git server: ",(0,i.jsx)(n.code,{children:"github"})]}),"\n",(0,i.jsxs)(n.li,{children:["Repository name: ",(0,i.jsx)(n.code,{children:"<github_account_name>/autotests"})]}),"\n",(0,i.jsxs)(n.li,{children:["Component name: ",(0,i.jsx)(n.code,{children:"autotest"})]}),"\n",(0,i.jsxs)(n.li,{children:["Description: ",(0,i.jsx)(n.code,{children:"simple autotests gradle"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Specify the autotest language properties:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Autotest code language: ",(0,i.jsx)(n.code,{children:"Java"})]}),"\n",(0,i.jsxs)(n.li,{children:["Language version/framework: ",(0,i.jsx)(n.code,{children:"Java17"})]}),"\n",(0,i.jsxs)(n.li,{children:["Build Tool: ",(0,i.jsx)(n.code,{children:"Maven"})]}),"\n",(0,i.jsxs)(n.li,{children:["Autotest report framework: ",(0,i.jsx)(n.code,{children:"allure"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Autotests codebase",src:t(55436).A+"",title:"Autotests codebase",width:"1927",height:"982"})}),"\n",(0,i.jsxs)(n.ol,{start:"5",children:["\n",(0,i.jsxs)(n.li,{children:["Fill in the following fields in ",(0,i.jsx)(n.strong,{children:"Specify advanced settings"}),"* and click ",(0,i.jsx)(n.strong,{children:"CREATE"}),":"]}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Default branch: ",(0,i.jsx)(n.code,{children:"master"})]}),"\n",(0,i.jsxs)(n.li,{children:["Codebase versioning type: ",(0,i.jsx)(n.code,{children:"edp"})]}),"\n",(0,i.jsxs)(n.li,{children:["Start version from: ",(0,i.jsx)(n.code,{children:"0.1.0"})]}),"\n",(0,i.jsxs)(n.li,{children:["Suffix: ",(0,i.jsx)(n.code,{children:"SNAPSHOT"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Autotests codebase advanced settings",src:t(21864).A+"",title:"Autotests codebase advanced settings",width:"3584",height:"1770"})}),"\n",(0,i.jsxs)(n.ol,{start:"6",children:["\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.strong,{children:"Close"}),". Now the application and autotest are created:"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Components overview",src:t(62140).A+"",title:"Components overview",width:"3584",height:"1776"})}),"\n",(0,i.jsx)(n.h3,{id:"create-deployment-flow-environment-and-set-variables",children:"Create Deployment Flow, Environment, and Set Variables"}),"\n",(0,i.jsx)(n.p,{children:"The next step is to configure deployment flow with appropriate deploy pipeline, application, autotests, and variables:"}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["To utilize and manage various environments through the KubeRocketCI platform, the initial step is to onboard a new ",(0,i.jsx)(n.a,{href:"/docs/next/user-guide/gitops",children:"GitOps repository"}),"."]})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Navigate to the ",(0,i.jsx)(n.code,{children:"Deployment flows"})," section and click the ",(0,i.jsx)(n.strong,{children:"Click here to add a repository"})," button:"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Components overview",src:t(8353).A+"",title:"Components overview",width:"3584",height:"1774"})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:["Click the ",(0,i.jsx)(n.strong,{children:"+ Add GitOps Repository"})," button and fill ",(0,i.jsx)(n.code,{children:"<github_account_name>"})," in the ",(0,i.jsx)(n.strong,{children:"Git repo relative path"})," and click ",(0,i.jsx)(n.strong,{children:"SAVE"})," button:"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Components overview",src:t(32289).A+"",title:"Components overview",width:"3582",height:"1776"})}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Navigate to the ",(0,i.jsx)(n.code,{children:"Deployment flows"})," section on the navigation bar and click ",(0,i.jsx)(n.strong,{children:"+ Create deployment flow"}),". Once clicked, the Create deployment flow dialog will appear."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Enter ",(0,i.jsx)(n.code,{children:"demo-pipeline"})," and click the ",(0,i.jsx)(n.strong,{children:"NEXT"})," button:"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Create pipeline",src:t(45557).A+"",title:"Create pipeline",width:"3584",height:"1776"})}),"\n",(0,i.jsxs)(n.ol,{start:"5",children:["\n",(0,i.jsxs)(n.li,{children:["On the Applications tab, add the ",(0,i.jsx)(n.code,{children:"spring-boot-app"})," application, specify the ",(0,i.jsx)(n.strong,{children:"main"})," branch for it, and click ",(0,i.jsx)(n.strong,{children:"CREATE"})," button and ",(0,i.jsx)(n.strong,{children:"GO TO DEPLOYMENT FLOW"}),":"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Add application to deployment",src:t(83033).A+"",title:"Add application to deployment",width:"3578",height:"1764"})}),"\n",(0,i.jsxs)(n.ol,{start:"6",children:["\n",(0,i.jsxs)(n.li,{children:["Click the ",(0,i.jsx)(n.strong,{children:"CREATE ENVIRONMENT"})," button, define the following values, and click ",(0,i.jsx)(n.strong,{children:"NEXT"}),":"]}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Cluster: ",(0,i.jsx)(n.code,{children:"In cluster"})]}),"\n",(0,i.jsxs)(n.li,{children:["Stage name: ",(0,i.jsx)(n.code,{children:"qa"})]}),"\n",(0,i.jsxs)(n.li,{children:["Description: ",(0,i.jsx)(n.code,{children:"qa"})]}),"\n",(0,i.jsxs)(n.li,{children:["Trigger type: ",(0,i.jsx)(n.code,{children:"Manual"})]}),"\n",(0,i.jsxs)(n.li,{children:["Pipeline template: ",(0,i.jsx)(n.code,{children:"deploy-with-autotests-variables"})]}),"\n",(0,i.jsxs)(n.li,{children:["Clean pipeline template: ",(0,i.jsx)(n.code,{children:"clean"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Configure stage",src:t(5239).A+"",title:"Configure stage",width:"3584",height:"1756"})}),"\n",(0,i.jsxs)(n.ol,{start:"7",children:["\n",(0,i.jsxs)(n.li,{children:["In the Add quality gates menu, click the ",(0,i.jsx)(n.strong,{children:"+"})," button. Specify the following parameters and click ",(0,i.jsx)(n.strong,{children:"Create"}),":"]}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Quality gate type: ",(0,i.jsx)(n.code,{children:"Autotest"})]}),"\n",(0,i.jsxs)(n.li,{children:["Step name: ",(0,i.jsx)(n.code,{children:"Autotest"})]}),"\n",(0,i.jsxs)(n.li,{children:["Autotest: ",(0,i.jsx)(n.code,{children:"autotest"})]}),"\n",(0,i.jsxs)(n.li,{children:["Autotest branch: ",(0,i.jsx)(n.code,{children:"master"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Configure stage",src:t(72793).A+"",title:"Configure stage",width:"3582",height:"1768"})}),"\n",(0,i.jsxs)(n.ol,{start:"8",children:["\n",(0,i.jsxs)(n.li,{children:["Click the ",(0,i.jsx)(n.strong,{children:"GO TO ENVIRONMENT"})," button:"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Environment details",src:t(92789).A+"",title:"Environment details",width:"3582",height:"1784"})}),"\n",(0,i.jsxs)(n.ol,{start:"9",children:["\n",(0,i.jsxs)(n.li,{children:["Select the ",(0,i.jsx)(n.strong,{children:"Variables"})," tab. Click the ",(0,i.jsx)(n.strong,{children:"Click here to add a new variable."})," button:"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Add variables",src:t(26102).A+"",title:"Add variables",width:"3584",height:"1782"})}),"\n",(0,i.jsxs)(n.ol,{start:"10",children:["\n",(0,i.jsxs)(n.li,{children:["Enter ",(0,i.jsx)(n.code,{children:"MY_COMMAND"}),", and set the ",(0,i.jsx)(n.strong,{children:"Value"})," to ",(0,i.jsx)(n.code,{children:"gradle -q hello"}),". Then, click the ",(0,i.jsx)(n.strong,{children:"SAVE"})," button:"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Set variable",src:t(92322).A+"",title:"Set variable",width:"3568",height:"1786"})}),"\n",(0,i.jsx)(n.p,{children:"In the Tekton task run-autotests-java-variables, we have implemented logic to check for the MY_COMMAND variable. If it exists, the task uses the value of this variable as the command. If it is missing or empty, the task falls back to using the logic defined in the run.json file from the autotests repository."}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:"run-autotests-java-variables.yaml"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'apiVersion: tekton.dev/v1\nkind: Task\nmetadata:\n  name: run-autotests-java-variables\n  labels:\n    app.kubernetes.io/based-on: "0.2"\n    {{- include "edp-tekton.labels" $ | nindent 4 }}\n  annotations:\n    tekton.dev/pipelines.minVersion: "0.12.1"\n    tekton.dev/categories: Autotest Tools\n    tekton.dev/tags: autotest-tool\n    tekton.dev/platforms: "linux/amd64,linux/s390x,linux/ppc64le"\nspec:\n  description: >-\n    This task runs autotests for a specified stage using either Maven or Gradle based on the provided configuration, extracting and executing the relevant commands from a `run.json` file.\n  workspaces:\n    - name: source\n      description: A workspace that contains the repository.\n  params:\n    - name: cd-pipeline-name\n      type: string\n    - name: stage-name\n      type: string\n    - name: base-image\n      type: string\n  steps:\n    - name: run-autotest\n      image: "$(params.base-image)"\n      workingDir: $(workspaces.source.path)\n      env:\n        - name: STAGE_NAME\n          value: $(params.stage-name)\n        - name: CD_PIPELINE_NAME\n          value: $(params.cd-pipeline-name)\n      envFrom:\n        - configMapRef:\n            name: $(params.cd-pipeline-name)-$(params.stage-name)\n      script: |\n        #!/bin/bash\n\n        set -exo pipefail\n\n        # Check if the MY_COMMAND variable is set and not empty\n        if [[ -n "${MY_COMMAND}" ]]; then\n            # If MY_COMMAND is defined, execute its content\n            eval "${MY_COMMAND}"\n        else\n            # If MY_COMMAND is not set, execute the existing logic\n            $(sed -n \'s/.*"\'$STAGE_NAME\'": "\\(.*\\)",/\\1/p\' run.json | awk -F \'"\' \'{print $1}\')\n        fi\n'})})]}),"\n",(0,i.jsxs)(n.ol,{start:"11",children:["\n",(0,i.jsxs)(n.li,{children:["Navigate to the ",(0,i.jsx)(n.strong,{children:"APPLICATIONS"})," tab. Then click ",(0,i.jsx)(n.strong,{children:"CONFIGURE DEPLOY"})," then ",(0,i.jsx)(n.strong,{children:"LATEST"})," button and click ",(0,i.jsx)(n.strong,{children:"START DEPLOY"})," button:"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Deploy application",src:t(49054).A+"",title:"Deploy application",width:"3576",height:"1758"})}),"\n",(0,i.jsx)(n.h3,{id:"validate",children:"Validate"}),"\n",(0,i.jsx)(n.p,{children:"Now it is time to review the pipeline logs to ensure autotests pass successfully and application produces the expected output:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["To find autotests logs, navigate to the ",(0,i.jsx)(n.strong,{children:"PIPELINES"})," section and wait until all pipelines are done:"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Pipelines list",src:t(10589).A+"",title:"Pipelines list",width:"3582",height:"1786"})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:["Click on ",(0,i.jsx)(n.strong,{children:"autotests-variables-gradle-run-xxxxx"}),", then stage ",(0,i.jsx)(n.strong,{children:"run autotests"}),", and task ",(0,i.jsx)(n.strong,{children:"run autotests"})," in the logs tab. You will see your autotests output:"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Autotests logs",src:t(41344).A+"",title:"Autotests logs",width:"3584",height:"1784"})}),"\n",(0,i.jsx)(n.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/next/user-guide/add-application",children:"Add Application"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/next/user-guide/add-autotest",children:"Add Autotest"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/next/user-guide/add-cd-pipeline",children:"Add Deployment Flow"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/next/user-guide/add-quality-gate",children:"Add Quality Gate"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/next/operator-guide/cd/customize-deploy-pipeline",children:"Customize Deploy Pipeline"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/next/user-guide/manage-environments",children:"Manage Deployment Flows"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},45557:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/add-deployment-pipeline-8badfcc3a4731ad6f279dc240f212742.png"},72793:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/add-quality-gates-6b0df012f055b8fec94231f9337b650f.png"},26102:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/add-variables-99d298370c64e91a3f5ff967b9c2062a.png"},41344:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/autotest-logs-8ac081b8b8bc48634bed5c12981f9145.png"},55436:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/autotests-component-info-09d06c886121319276d710c21335dc5d.png"},82343:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/clone-repo-bb3c4ca8e47fc42bdf9918c233aafc51.png"},21864:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/codebase-advanced-settings-7d6c68e00fe9835e31e637a9be89ce00.png"},83277:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/codebase-app-c444cbe4f904a431116b5257cd7881f3.png"},77947:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/codebase-autotest-d1d23095f06ba3010597820d7b881bc4.png"},2536:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/codebase-autotests-clone-d49a650d46c7b9774790a9fa2630a2c5.png"},62140:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/components-overview-e555254868a9621ddb178fef30bc7b5e.png"},5239:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/configurate-stage-be06f7cd6c26dae08d4d6c61cc36dddd.png"},8353:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/create-gitops-repository-fba53fa7ed522bb2591e475a06b531f3.png"},83033:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/deployment-add-application-c7c37ecc69acd8de0bfb22d36420e62b.png"},92789:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/environment-details-533de991c25cdc61d421dcac1eb46dc4.png"},32289:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/gitops-repository-parameters-f5d12cc110e1f0981ff2d3147a29d165.png"},44795:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/marketplace-application-6890156dc98944e1a543b2789ea5a709.png"},10589:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/pipelines-list-4c6dfcb7f06ee5dc08750adcd0b32ef1.png"},92322:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/set-variable-2cee62a644a452dfbbd1459f5fc8e029.png"},49054:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/start-deploy-application-100a9f4e4ad3a192a3d2f1823ff2f1ec.png"},79758:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/successful-build-5f7bc8dd553fb367f8f83a2bf12eb5f1.png"},93376:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/trigger-build-64bb016eca5b5f0dcb1e3cb681d999d4.png"},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var s=t(96540);const i={},l=s.createContext(i);function a(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);