"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[16112],{49805:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"use-cases/tekton-custom-pipelines","title":"Application With Custom Build Tool/Framework","description":"Learn how to integrate custom build tools and frameworks in KubeRocketCI for enhanced CI/CD pipelines, catering to unique project requirements and workflows.","source":"@site/versioned_docs/version-3.10/use-cases/tekton-custom-pipelines.md","sourceDirName":"use-cases","slug":"/use-cases/tekton-custom-pipelines","permalink":"/docs/use-cases/tekton-custom-pipelines","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/use-cases/tekton-custom-pipelines.md","tags":[],"version":"3.10","lastUpdatedBy":"Oleksandr_Stepanov@epam.com","lastUpdatedAt":1739954692000,"frontMatter":{"title":"Application With Custom Build Tool/Framework","description":"Learn how to integrate custom build tools and frameworks in KubeRocketCI for enhanced CI/CD pipelines, catering to unique project requirements and workflows.","sidebar_label":"Deploy Application With Custom Build Tool/Framework"},"sidebar":"useCasesSidebar","previous":{"title":"Create and Use Custom Tekton Pipelines","permalink":"/docs/use-cases/custom-pipelines-flow"},"next":{"title":"Set Test Suite Parameters Using Environment Variables in CD Pipelines","permalink":"/docs/use-cases/cd-autotests-run-with-env-variables"}}');var s=t(74848),l=t(28453);const o={title:"Application With Custom Build Tool/Framework",description:"Learn how to integrate custom build tools and frameworks in KubeRocketCI for enhanced CI/CD pipelines, catering to unique project requirements and workflows.",sidebar_label:"Deploy Application With Custom Build Tool/Framework"},r="Deploy Application With Custom Build Tool/Framework",c={},a=[{value:"Goals",id:"goals",level:2},{value:"Preconditions",id:"preconditions",level:2},{value:"Scenario",id:"scenario",level:2},{value:"Add Custom Application to KubeRocketCI",id:"add-custom-application-to-kuberocketci",level:3},{value:"Add Tekton Library",id:"add-tekton-library",level:3},{value:"Modify Tekton Pipeline",id:"modify-tekton-pipeline",level:3},{value:"Deliver Custom Tekton Pipelines to the cluster",id:"deliver-custom-tekton-pipelines-to-the-cluster",level:3},{value:"Create Application Merge Request",id:"create-application-merge-request",level:3},{value:"Related Articles",id:"related-articles",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components},{Head:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"deploy-application-with-custom-build-toolframework",children:"Deploy Application With Custom Build Tool/Framework"})}),"\n",(0,s.jsx)(i,{children:(0,s.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/use-cases/tekton-custom-pipelines/"})}),"\n",(0,s.jsxs)(n.p,{children:["This use case demonstrates how to implement custom CI/CD pipelines within the KubeRocketCI platform to address project-specific requirements.\nKubeRocketCI extends this capability by supporting the ",(0,s.jsx)(n.strong,{children:"customization"})," of Applications (Components) and Tekton pipelines, allowing teams to integrate and develop functionalities or services not readily available on the platform."]}),"\n",(0,s.jsx)(n.h2,{id:"goals",children:"Goals"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Incorporate and manage custom Tekton pipeline libraries that addresses project requirements."}),"\n",(0,s.jsx)(n.li,{children:"Modify existing pipelines and tasks within these libraries to align with specific developmental goals and introduce novel functionalities."}),"\n",(0,s.jsx)(n.li,{children:"Facilitate a swift setup and implementation process, enabling teams to focus on development without being hindered by platform limitations."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"preconditions",children:"Preconditions"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["KubeRocketCI instance with GitHub and Tekton is ",(0,s.jsx)(n.a,{href:"/docs/operator-guide/prerequisites",children:"configured"}),";"]}),"\n",(0,s.jsx)(n.li,{children:"Developer has access to the KubeRocketCI instances using the Single-Sign-On approach;"}),"\n",(0,s.jsxs)(n.li,{children:["Developer has ",(0,s.jsx)(n.code,{children:"Write"})," permissions for GitHub repository to merge the code;"]}),"\n",(0,s.jsxs)(n.li,{children:["Configured Argo CD instance with the ",(0,s.jsx)(n.a,{href:"/docs/operator-guide/add-ons-overview",children:"Add-ons repository"})," added."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"scenario",children:"Scenario"}),"\n",(0,s.jsx)(n.p,{children:"To streamline the process of implementing custom logic within the KubeRocketCI platform, follow this scenario:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Add Custom Application: Begin by adding your application to the KubeRocketCI platform."}),"\n",(0,s.jsx)(n.li,{children:"Add Custom Tekton Library: Create and add a custom Tekton library designed to implement the CI/CD logic required by your application."}),"\n",(0,s.jsx)(n.li,{children:"Validate the Implementation: After setting up your Application and Tekton library, conduct testing to ensure that the pipelines execute as intended."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"add-custom-application-to-kuberocketci",children:"Add Custom Application to KubeRocketCI"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.code,{children:"Custom Application"})," refers to any application that utilizes a programming language, framework, or build tool not natively supported by the platform, or an existing application that necessitates specific customizations to its pipeline.\nThis encompasses scenarios where the default pipeline configurations and toolchains are unable to meet the unique requirements of the application, thereby requiring the development and integration of tailored solutions."]})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Open the KubeRocketCI portal. Use the ",(0,s.jsx)(n.strong,{children:"Sign-In"})," option:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Logging Page",src:t(45791).A+"",title:"Logging Screen",width:"3364",height:"1670"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In the top right corner, enter the ",(0,s.jsx)(n.code,{children:"Account settings"})," and ensure that both ",(0,s.jsx)(n.code,{children:"Default namespace"})," and ",(0,s.jsx)(n.code,{children:"Allowed namespace"})," are set:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Settings",src:t(12769).A+"",title:"Cluster Settings",width:"1918",height:"1078"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Select the ",(0,s.jsx)(n.strong,{children:"Components"})," tab and push the create ",(0,s.jsx)(n.strong,{children:"+ CREATE COMPONENT"})," button:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Components Overview",src:t(6745).A+"",title:"Components Overview",width:"1914",height:"1079"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Choose the ",(0,s.jsx)(n.code,{children:"Application"})," type since it is intended for containerization and deployment within a Kubernetes cluster. Click the ",(0,s.jsx)(n.strong,{children:"Next"})," button."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Create Application Menu",src:t(99494).A+"",title:"Create Application Menu",width:"1913",height:"1080"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Choose the ",(0,s.jsx)(n.code,{children:"Clone"})," strategy, since we are cloning the application from the existing repository:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Clone Project",src:t(94178).A+"",title:"Clone Project",width:"1914",height:"1077"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.strong,{children:"Add component info"})," tab, define the following values and click the ",(0,s.jsx)(n.strong,{children:"Proceed"})," button:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Repository URL: ",(0,s.jsx)(n.code,{children:"https://github.com/epmd-edp/go-go-beego.git"})]}),"\n",(0,s.jsxs)(n.li,{children:["Repository name: ",(0,s.jsx)(n.code,{children:"tekton-hello-world"})]}),"\n",(0,s.jsxs)(n.li,{children:["Component name: ",(0,s.jsx)(n.code,{children:"tekton-hello-world"})]}),"\n",(0,s.jsxs)(n.li,{children:["Description: ",(0,s.jsx)(n.code,{children:"Custom tekton-hello-world application"})]}),"\n",(0,s.jsxs)(n.li,{children:["Application code language: ",(0,s.jsx)(n.code,{children:"Other"})]}),"\n",(0,s.jsxs)(n.li,{children:["Language version/framework: ",(0,s.jsx)(n.code,{children:"go"})]}),"\n",(0,s.jsxs)(n.li,{children:["Build tool: ",(0,s.jsx)(n.code,{children:"shell"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Application Menu",src:t(84683).A+"",title:"Application Menu",width:"1915",height:"1078"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.strong,{children:"Advances Settings"})," tab, define the below values and click the ",(0,s.jsx)(n.strong,{children:"Create"})," button:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Default branch: ",(0,s.jsx)(n.code,{children:"main"})]}),"\n",(0,s.jsxs)(n.li,{children:["Codebase versioning type: ",(0,s.jsx)(n.code,{children:"edp"})]}),"\n",(0,s.jsxs)(n.li,{children:["Leave ",(0,s.jsx)(n.code,{children:"Specify the pattern to validate a commit message"})," empty."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Application Menu",src:t(34772).A+"",title:"Application Menu",width:"1912",height:"1080"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Check the application status. It should be green."}),"\n",(0,s.jsx)(n.p,{children:"Now that the application is successfully created, proceed to adding the Tekton library to the KubeRocketCI platform."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.admonition,{type:"warning",children:[(0,s.jsx)(n.p,{children:"It's important to align with the Tekton Pipeline name to ensure correct pipeline execution for review and build events."}),(0,s.jsxs)(n.p,{children:["The name for PipelineRun is dynamically generated via ",(0,s.jsx)(n.code,{children:"TriggerTemplates"})," located in the ",(0,s.jsx)(n.a,{href:"https://github.com/epam/edp-tekton/tree/master/charts/pipelines-library/templates/triggers",children:"pipelines-library"})," and aligned to the structure provided below:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"pipelineRef:\n  name: github-$(tt.params.buildtool)-$(tt.params.framework)-$(tt.params.cbtype)-build-$(tt.params.versioning-type)\n"})}),(0,s.jsx)(n.p,{children:"This naming convention facilitates the automatic creation of PipelineRun instances in response to payload from GitHub during Merge Request events.\nEnsure that the Pipeline name matches this structure to enable the correct triggering of pipeline executions."}),(0,s.jsxs)(n.p,{children:["In our case, the build pipeline name should be ",(0,s.jsx)(n.code,{children:"github-shell-go-app-build-edp"})]})]}),"\n",(0,s.jsx)(n.h3,{id:"add-tekton-library",children:"Add Tekton Library"}),"\n",(0,s.jsx)(n.p,{children:"KubeRocketCI allows for the creation of custom Tekton libraries to address specific project requirements. This feature enables the modification of existing pipelines and tasks to align with the unique needs of the application."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Select the ",(0,s.jsx)(n.strong,{children:"Components"})," tab and push the create ",(0,s.jsx)(n.strong,{children:"+ CREATE COMPONENT"})," button:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Components Overview",src:t(55901).A+"",title:"Components tab",width:"1916",height:"1078"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Create a new Codebase with the ",(0,s.jsx)(n.code,{children:"Library"})," type:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Create Library",src:t(74694).A+"",title:"Create Library",width:"1915",height:"1075"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Select ",(0,s.jsx)(n.strong,{children:"Create from template"})," and click ",(0,s.jsx)(n.strong,{children:"Create"})," button:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Create From Template",src:t(39887).A+"",title:"Create From Template",width:"1916",height:"1078"})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["The KubeRocketCI ",(0,s.jsx)(n.code,{children:"Create"})," strategy will automatically pull the code for the Tekton Helm application from ",(0,s.jsx)(n.a,{href:"https://github.com/epmd-edp/helm-helm-pipeline.git",children:"the template"}),"."]})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In the Application Info tab, define the following values and click the ",(0,s.jsx)(n.code,{children:"Proceed"})," button:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Repository name: ",(0,s.jsx)(n.code,{children:"custom-tekton-chart"})]}),"\n",(0,s.jsxs)(n.li,{children:["Component name: ",(0,s.jsx)(n.code,{children:"custom-tekton-chart"})]}),"\n",(0,s.jsxs)(n.li,{children:["Description: ",(0,s.jsx)(n.code,{children:"Repository for storing and managing custom Tekton resources"})]}),"\n",(0,s.jsxs)(n.li,{children:["Application code language: ",(0,s.jsx)(n.code,{children:"Helm"})]}),"\n",(0,s.jsxs)(n.li,{children:["Language version/framework: ",(0,s.jsx)(n.code,{children:"Pipeline"})]}),"\n",(0,s.jsxs)(n.li,{children:["Build tool: ",(0,s.jsx)(n.code,{children:"Helm"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Codebase Info",src:t(65080).A+"",title:"Step codebase info",width:"1916",height:"1073"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.code,{children:"Advances Settings"})," tab, define the below values and click the ",(0,s.jsx)(n.code,{children:"Apply"})," button:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Default branch: ",(0,s.jsx)(n.code,{children:"main"})]}),"\n",(0,s.jsxs)(n.li,{children:["Codebase versioning type: ",(0,s.jsx)(n.code,{children:"edp"})]}),"\n",(0,s.jsxs)(n.li,{children:["Leave ",(0,s.jsx)(n.code,{children:"Specify the pattern to validate a commit message"})," empty."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Advanced Settings",src:t(86209).A+"",title:"Advanced settings",width:"1915",height:"1076"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Check the codebases status:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Components overview page",src:t(12027).A+"",title:"Codebase status",width:"1917",height:"1078"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"You have successfully added the custom Tekton library to the KubeRocketCI platform and are now ready to modify the Tekton pipeline to align with the specific requirements of your custom application."}),"\n",(0,s.jsx)(n.h3,{id:"modify-tekton-pipeline",children:"Modify Tekton Pipeline"}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"We strongly advise against altering the platform's default Tekton resources. To ensure seamless upgrades and maintain custom functionality, it is recommended to develop and manage your custom pipelines within a dedicated Custom Tekton Library. This approach safeguards your customizations and facilitates a smoother update process."})}),"\n",(0,s.jsx)(n.p,{children:"Now that the Tekton Helm library is created, it is time to clone, modify and then apply it to the Kubernetes cluster."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In the Components tab, click one of the ",(0,s.jsx)(n.code,{children:"custom-tekton-chart"})," to enter the application menu:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Components overview page",src:t(80850).A+"",title:"Codebase status",width:"1917",height:"1077"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Navigate to ",(0,s.jsx)(n.strong,{children:"Branches"})," and click to the ",(0,s.jsx)(n.strong,{children:"Git"})," button:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Branches tab",src:t(11817).A+"",title:"Branches tab",width:"1899",height:"1080"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Clone the repository with ",(0,s.jsx)(n.code,{children:"SSH"})," using ",(0,s.jsx)(n.strong,{children:"Code"})," button:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Create branch in GitHub",src:t(33696).A+"",title:"Create branch in GitHub",width:"1900",height:"1074"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Examine the repository structure. It should look this way by default:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plaintext",children:"tekton-custom-pipelines\n\u251c\u2500\u2500 Chart.yaml\n\u251c\u2500\u2500 templates\n\u2502\xa0\xa0 \u251c\u2500\u2500 pipelines\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 deploy\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 custom-clean.yaml\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 custom-deploy.yaml\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 bitbucket-build-default.yaml\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 bitbucket-build-edp.yaml\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 bitbucket-build-lib-default.yaml\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 bitbucket-build-lib-edp.yaml\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 bitbucket-review.yaml\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 gerrit-build-default.yaml\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 gerrit-build-edp.yaml\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 gerrit-build-lib-default.yaml\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 gerrit-build-lib-edp.yaml\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 gerrit-review.yaml\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 github-build-default.yaml\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 github-build-edp.yaml\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 github-build-lib-default.yaml\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 github-build-lib-edp.yaml\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 github-review.yaml\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 gitlab-build-default.yaml\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 gitlab-build-edp.yaml\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 gitlab-build-lib-default.yaml\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 gitlab-build-lib-edp.yaml\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 gitlab-review.yaml\n\u2502\xa0\xa0 \u251c\u2500\u2500 resources\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 npm-settings.yaml\n\u2502\xa0\xa0 \u251c\u2500\u2500 tasks\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 deploy\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 hello-world-deploy.yaml\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 hello-world.yaml\n\u2502\xa0\xa0 \u2514\u2500\u2500 triggers\n\u2502\xa0\xa0     \u251c\u2500\u2500 custom-clean.yaml\n\u2502\xa0\xa0     \u2514\u2500\u2500 custom-deploy.yaml\n\u2514\u2500\u2500 values.yaml\n"})}),"\n",(0,s.jsxs)(n.p,{children:["For more detailed information and explanations regarding the repository structure, please refer to ",(0,s.jsx)(n.a,{href:"/docs/use-cases/custom-pipelines-flow",children:"Creating and Using Custom Tekton Pipelines"})," use case."]}),"\n",(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsxs)(n.p,{children:["Update the values in the ",(0,s.jsx)(n.code,{children:"values.yaml"})," file."]}),(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.a,{href:"https://github.com/epam/edp-install/blob/v3.9.0/deploy-templates/values.yaml#L10",children:"dnsWildCard"})," parameter is the platform address."]})]}),"\n",(0,s.jsxs)(n.p,{children:["Below is a sample configuration for the ",(0,s.jsx)(n.code,{children:"values.yaml"})," file:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'dnsWildCard: "example.domain.com"\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Modify and add tasks or pipelines."}),"\n",(0,s.jsxs)(n.p,{children:["Consider the scenario where it's necessary to incorporate the ",(0,s.jsx)(n.code,{children:"helm-lint"})," task into the review pipeline.\nTo achieve this, append the following code snippet to the ",(0,s.jsx)(n.code,{children:"templates/pipelines/github-review.yaml"})," file, specifically below the ",(0,s.jsx)(n.code,{children:"hello-world"})," task, located here: ",(0,s.jsx)(n.a,{href:"https://github.com/epmd-edp/helm-helm-pipeline/blob/master/templates/pipelines/github-review.yaml#L114",children:"github-review.yaml"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'apiVersion: tekton.dev/v1beta1\nkind: Pipeline\nmetadata:\n  name: github-shell-go-app-review\n...\n- name: hello-world\n  taskRef:\n    name: hello-world\n  runAfter:\n  - init-values\n  params:\n  - name: BASE_IMAGE\n    value: "$(params.image-version)"\n  - name: username\n    value: "$(params.username)"\n  workspaces:\n    - name: source\n      workspace: shared-workspace\n      subPath: source\n\n- name: helm-lint\n  taskRef:\n    kind: Task\n    name: helm-lint\n  runAfter:\n    - hello-world\n  params:\n    - name: EXTRA_COMMANDS\n      value: |\n        ct lint --validate-maintainers=false --charts deploy-templates/\n  workspaces:\n    - name: source\n      workspace: shared-workspace\n      subPath: source\n'})}),"\n",(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"helm-lint"})," task references to the default ",(0,s.jsx)(n.code,{children:"pipeline-library"})," Helm chart which is deployed to the cluster as part of the KubeRocketCI setup process."]}),(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"runAfter"})," parameter indicates the execution sequence, specifying that the ",(0,s.jsx)(n.code,{children:"helm-lint"})," task is scheduled to run subsequent to the completion of the ",(0,s.jsx)(n.code,{children:"hello-world"})," task."]})]}),"\n",(0,s.jsxs)(n.p,{children:["Also, in the ",(0,s.jsx)(n.code,{children:"templates/pipelines/github-build-edp.yaml"})," file, specify the name ",(0,s.jsx)(n.code,{children:"github-shell-go-app-build-edp"})," for the custom build pipeline:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"apiVersion: tekton.dev/v1beta1\nkind: Pipeline\nmetadata:\n  name: github-shell-go-app-build-edp\n...\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Commit and push the modified Tekton Helm chart to GitHub:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'git checkout -b helm\ngit add .\ngit commit -m "Add Helm chart testing for go-shell application"\ngit push -u origin helm\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Navigate Github -> ",(0,s.jsx)(n.strong,{children:"Pull requests"})," -> ",(0,s.jsx)(n.strong,{children:"Compare & pull request"})," -> ",(0,s.jsx)(n.strong,{children:"Create pull request"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Create pull request",src:t(71734).A+"",title:"Create pull request",width:"3480",height:"2050"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Check the GitHub code review for the custom Helm chart pipelines repository in KubeRocketCI. Navigate ",(0,s.jsx)(n.strong,{children:"Components"})," -> ",(0,s.jsx)(n.strong,{children:"Component name"})," and click to the review pipeline run:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"KubeRocketCI pipelines overview",src:t(85023).A+"",title:"KubeRocketCI pipelines overview",width:"1916",height:"1073"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Explore the pipeline status and steps:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Explore pipeline",src:t(85709).A+"",title:"Explore pipeline",width:"1915",height:"1071"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Go to the GitHub ",(0,s.jsx)(n.strong,{children:"Pull requests"})," -> ",(0,s.jsx)(n.strong,{children:"Add Helm chart testing for go-shell application"})," -> and click ",(0,s.jsx)(n.strong,{children:"Merge pull request"}),":"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Merge PR",src:t(31812).A+"",title:"Merge PR",width:"1899",height:"1077"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"deliver-custom-tekton-pipelines-to-the-cluster",children:"Deliver Custom Tekton Pipelines to the cluster"}),"\n",(0,s.jsxs)(n.p,{children:["To deploy custom pipelines to the cluster, you can use Argo CD, which includes a repository with ",(0,s.jsx)(n.a,{href:"https://github.com/epam/edp-cluster-add-ons/tree/main",children:"add-ons"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"To deliver custom Tekton pipelines to the cluster, follow these steps:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Clone the forked repository with add-ons and make the following changes. In the ",(0,s.jsx)(n.code,{children:"clusters/core/apps/values.yaml"})," file, set the ",(0,s.jsx)(n.code,{children:"repoUrl"})," and ",(0,s.jsx)(n.code,{children:"namespace"})," fields to specify the Git URL of the ",(0,s.jsx)(n.code,{children:"tekton-custom-pipelines"})," repository and the namespace where the KubeRocketCI platform is deployed. Also, set the ",(0,s.jsx)(n.code,{children:"kuberocketci-pipelines.enabled"})," field to ",(0,s.jsx)(n.code,{children:"true"})," to enable the deployment of the ",(0,s.jsx)(n.code,{children:"tekton-custom-pipelines"})," Argo CD Application:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"kuberocketci-pipelines:\n  enable: true\n  namespace: <krci-namespace>\n  repoUrl: ssh://git@github.com:22/<account-name>/tekton-custom-pipelines.git\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Commit and push the changes to the repository."}),"\n",(0,s.jsx)(n.p,{children:"After making the necessary changes, commit and push the changes to the repository. Use the following commands to commit and push the changes:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'git add .\ngit commit -m "Enable custom Tekton pipelines deployment"\ngit push origin main\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["After pushing the changes, access ",(0,s.jsx)(n.strong,{children:"Argo CD"}),", navigate to the Application that corresponds to the repository with the ",(0,s.jsx)(n.strong,{children:"add-ons"}),", and initiate the ",(0,s.jsx)(n.code,{children:"Sync"})," process. This will apply the ",(0,s.jsx)(n.code,{children:"tekton-custom-pipelines"})," Helm Chart to the cluster within the specified namespace."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Argo CD Sync",src:t(25485).A+"",title:"Argo CD Sync",width:"3364",height:"1660"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"create-application-merge-request",children:"Create Application Merge Request"}),"\n",(0,s.jsxs)(n.p,{children:["Since we applied the Tekton library to the Kubernetes cluster in the previous step, let's test the review and build pipelines for our ",(0,s.jsx)(n.code,{children:"tekton-hello-world"})," application."]}),"\n",(0,s.jsx)(n.p,{children:"Perform the below steps to merge new code (Merge Request) that passes the Code Review flow. For the steps below, we use GitHub UI but the same actions can be performed using the command line and Git tool:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In the Components tab, click one of the ",(0,s.jsx)(n.code,{children:"custom-tekton-chart"})," to enter the application menu."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Navigate to ",(0,s.jsx)(n.strong,{children:"Branches"})," and click to the ",(0,s.jsx)(n.strong,{children:"Git"})," button:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Component&#39;s branch tab",src:t(92035).A+"",title:"Component&#39;s branch tab",width:"1902",height:"1080"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Navigate to the ",(0,s.jsx)(n.strong,{children:"Branches"})," menu, create new branch from ",(0,s.jsx)(n.strong,{children:"New branch"})," menu with name ",(0,s.jsx)(n.code,{children:"test"}),", and the click on the test branch:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Create Branch",src:t(27930).A+"",title:"Create Branch",width:"3452",height:"2058"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Change file ",(0,s.jsx)(n.code,{children:"deploy-templates/values.yaml"})," with values below:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"...\ningress:\n  enabled: true\n...\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Create Merge Request",src:t(50154).A+"",title:"Create Merge Request",width:"3492",height:"2284"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Navigate to the ",(0,s.jsx)(n.strong,{children:"Pull requests"})," -> ",(0,s.jsx)(n.strong,{children:"Compare & pull request"})," -> and click ",(0,s.jsx)(n.strong,{children:"Create pull request"}),":"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Check the Review Pipeline status. Navigate KubeRocketCI -> ",(0,s.jsx)(n.strong,{children:"Components"})," -> ",(0,s.jsx)(n.code,{children:"tekton-hello-world"})," and click on review pipeline. The ",(0,s.jsx)(n.code,{children:"helm-lint"})," task should be displayed there:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Explore Lint Step",src:t(5363).A+"",title:"Explore Lint Step",width:"1899",height:"1079"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["After review procedure successfully ended - approve merge request. Navigate Github -> ",(0,s.jsx)(n.strong,{children:"Pull requests"})," -> ",(0,s.jsx)(n.code,{children:"test"})," and click on ",(0,s.jsx)(n.strong,{children:"Merge pull request"})," button. Then, your code is merged to the main branch, triggering the Build Pipeline:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Merge Pull Request",src:t(14520).A+"",width:"1900",height:"1074"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Check the pipelines in the KubeRocketCI dashboard:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Explore Build Pipeline",src:t(99137).A+"",title:"Explore Build Pipeline",width:"1899",height:"1079"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Under the hood, the following process takes place:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"GitHub sends a payload to the Tekton EventListener when a Merge Request event occurs."}),"\n",(0,s.jsx)(n.li,{children:"The EventListener captures the payload with the assistance of an Interceptor."}),"\n",(0,s.jsx)(n.li,{children:"The TriggerTemplate creates a PipelineRun."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The detailed scheme is shown below:"}),"\n",(0,s.jsx)(n.mermaid,{value:"graph LR;\n    A[GitHub events] --\x3e |Payload| B(Tekton EventListener) --\x3e C(Tekton Interceptor CEL filter) --\x3e D(TriggerTemplate)--\x3e E(PipelineRun)"}),"\n",(0,s.jsxs)(n.p,{children:["This chart will be using the core of ",(0,s.jsx)(n.code,{children:"common-library"})," and ",(0,s.jsx)(n.code,{children:"pipelines-library"})," and custom resources on the top of them."]}),"\n",(0,s.jsx)(n.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/operator-guide/ci/tekton-overview",children:"Tekton Overview"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/user-guide/add-application",children:"Add Application using KubeRocketCI Portal"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},25485:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/argocd-sync-08ec758debc26703520580ddb00b5332.png"},45791:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/login-847da373e3eb52fd46ac9274e082515a.png"},12769:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/cluster-settings-24eb545f800c00b2a51729179e5dfb98.png"},6745:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/components-cb491229cad562e56ee24ac7dccfa1f5.png"},99494:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/tekton-custom01-3a08f14d873e403d3074edc3f35f6b83.png"},94178:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/tekton-custom02-0c68bdb5e827cb17c829b222bbee1457.png"},84683:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/tekton-custom03-6bee114a45d1b610402e5ae30944da1f.png"},34772:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/tekton-custom04-498a68a34fb9bf2aaedde7c8ad9da5cd.png"},55901:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/tekton-custom05-8f2cb0dcb5f45d044b636ced157fbac4.png"},74694:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/tekton-custom06-d3aede77daec75d8cd1a86f661af3fa2.png"},39887:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/tekton-custom07-8862753def30d0758749f37cc201d46b.png"},65080:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/tekton-custom08-3c98b8ee535059cdf03730953abd0b13.png"},86209:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/tekton-custom09-38e4dc87f4a8e53bfb98b5306dcf804e.png"},12027:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/tekton-custom10-a0e2476c2afc7b5854d858a2b776098c.png"},80850:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/tekton-custom11-54b7ccb85b4049822e7b74427abdd451.png"},11817:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/tekton-custom12-b0809ad7a627d6cb89f61d9a3c1a2156.png"},33696:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/tekton-custom13-68c31d472c0a04984c7c44af5c21957d.png"},85023:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/tekton-custom14-2a72d50d08b1efbe3f5360596b5eb38d.png"},71734:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/tekton-custom15-0705cec045b8d5f6f4a37772c012b5ca.png"},85709:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/tekton-custom16-fc1e42dc74aee22b373f8bd8c27d8165.png"},31812:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/tekton-custom17-a7a5c26583021e3e4d0c6d4aaab39fe3.png"},92035:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/tekton-custom18-f29c44dc18e96f9df0153acfed66ad81.png"},27930:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/tekton-custom19-1d8e223e72dc8421fd2ebc543843dfb5.png"},50154:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/tekton-custom20-604313b7bc2a1db3855f447c183d5c5e.png"},5363:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/tekton-custom21-779172c6ec4d360ba8841952a5ba67d0.png"},14520:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/tekton-custom22-02b78fe087153500d1b0e730e4b93c93.png"},99137:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/tekton-custom23-1f3361270f2e86e0ba1bb0853212956d.png"},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>r});var i=t(96540);const s={},l=i.createContext(s);function o(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);