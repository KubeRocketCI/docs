"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8973],{56547:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>r});var t=s(74848),i=s(28453);const l={},a="Autotest as a Quality Gate",c={id:"use-cases/autotest-as-quality-gate",title:"Autotest as a Quality Gate",description:"This use case outlines the process of integrating an autotest as a quality gate into a newly created CD pipeline. The CD pipeline includes a selected build version of an application that needs to be promoted. The purpose of incorporating autotests is to ensure that the application meets predefined criteria for stability and functionality, guaranteeing that only reliable versions are promoted. By implementing this feature, users can perform comprehensive testing, thereby enhancing the overall stability of the application.",source:"@site/docs/use-cases/autotest-as-quality-gate.md",sourceDirName:"use-cases",slug:"/use-cases/autotest-as-quality-gate",permalink:"/docs/next/use-cases/autotest-as-quality-gate",draft:!1,unlisted:!1,editUrl:"https://github.com/KubeRocketCI/docs/edit/main/docs/use-cases/autotest-as-quality-gate.md",tags:[],version:"current",lastUpdatedBy:"Mykola Serdiuk",lastUpdatedAt:1721293803e3,frontMatter:{},sidebar:"useCasesSidebar",previous:{title:"Secured Secrets Management for Application Deployment",permalink:"/docs/next/use-cases/external-secrets"},next:{title:"Deploy Application With Custom Build Tool/Framework",permalink:"/docs/next/use-cases/tekton-custom-pipelines"}},d={},r=[{value:"Roles",id:"roles",level:2},{value:"Goals",id:"goals",level:2},{value:"Preconditions",id:"preconditions",level:2},{value:"Create Applications",id:"create-applications",level:3},{value:"Create Autotests",id:"create-autotests",level:3},{value:"Create CD Pipeline",id:"create-cd-pipeline",level:3},{value:"Run Autotests",id:"run-autotests",level:3},{value:"Related Articles",id:"related-articles",level:2}];function o(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"autotest-as-a-quality-gate",children:"Autotest as a Quality Gate"})}),"\n",(0,t.jsx)(n.p,{children:"This use case outlines the process of integrating an autotest as a quality gate into a newly created CD pipeline. The CD pipeline includes a selected build version of an application that needs to be promoted. The purpose of incorporating autotests is to ensure that the application meets predefined criteria for stability and functionality, guaranteeing that only reliable versions are promoted. By implementing this feature, users can perform comprehensive testing, thereby enhancing the overall stability of the application."}),"\n",(0,t.jsx)(n.p,{children:"In the KubeRocketCI platform, users can seamlessly add autotests as quality gates to their CD pipelines, enabling them to validate the application's stability and functionality before promoting it to the next stage. This ensures that only reliable versions of the application are deployed, improving the overall quality and reliability of the software."}),"\n",(0,t.jsx)(n.h2,{id:"roles",children:"Roles"}),"\n",(0,t.jsx)(n.p,{children:"This documentation is tailored for the Developers and Quality Assurance specialists."}),"\n",(0,t.jsx)(n.h2,{id:"goals",children:"Goals"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Create several applications and autotests quickly."}),"\n",(0,t.jsx)(n.li,{children:"Create a pipeline for Continuous Deployment."}),"\n",(0,t.jsx)(n.li,{children:"Perform testing."}),"\n",(0,t.jsx)(n.li,{children:"Update delivery by deploying the new version."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"preconditions",children:"Preconditions"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["KubeRocketCI instance is ",(0,t.jsx)(n.a,{href:"/docs/next/operator-guide/prerequisites",children:"configured"})," with GitHub, Tekton and ",(0,t.jsx)(n.a,{href:"/docs/next/operator-guide/cd/argocd-integration",children:"Argo CD"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"Developer has access to the platform using the Single-Sign-On approach."}),"\n",(0,t.jsxs)(n.li,{children:["Developer has the ",(0,t.jsx)(n.strong,{children:"Administrator"})," role (to perform merge in GitHub)."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"create-applications",children:"Create Applications"}),"\n",(0,t.jsx)(n.p,{children:"To implement autotests as Quality Gates, follow the steps below:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Ensure the namespace is specified in the cluster settings. Click the ",(0,t.jsx)(n.strong,{children:"Settings"})," icon in the top right corner and select ",(0,t.jsx)(n.strong,{children:"Cluster settings"}),":"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Cluster settings",src:s(15516).A+"",title:"Cluster settings",width:"1917",height:"1045"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Enter the name of the default namespace, then enter your default namespace in the ",(0,t.jsx)(n.strong,{children:"Allowed namespaces"})," field and click the ",(0,t.jsx)(n.strong,{children:"+ ADD"})," button. You can also add other namespaces to the ",(0,t.jsx)(n.strong,{children:"Allowed namespaces"}),":"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Specify namespace",src:s(81804).A+"",title:"Specify namespace",width:"1916",height:"1079"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Create several applications using the ",(0,t.jsx)(n.strong,{children:"Create"})," strategy. Navigate to the ",(0,t.jsx)(n.strong,{children:"Components"})," tab and click the ",(0,t.jsx)(n.strong,{children:"+ CREATE COMPONENT"})," button:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Add application",src:s(37586).A+"",title:"Add application",width:"1916",height:"1080"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Select ",(0,t.jsx)(n.strong,{children:"Application"})," and click ",(0,t.jsx)(n.strong,{children:"Next"}),":"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Application create",src:s(22579).A+"",title:"Application create",width:"1915",height:"1077"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Select ",(0,t.jsx)(n.strong,{children:"Create from template"})," and click ",(0,t.jsx)(n.strong,{children:"Create"}),":"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Create new component menu",src:s(14821).A+"",title:"Create new component menu",width:"1915",height:"1079"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Please refer to the ",(0,t.jsx)(n.a,{href:"/docs/next/user-guide/add-application",children:"Add Application"})," section for details."]})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["On the ",(0,t.jsx)(n.strong,{children:"Codebase info"})," tab, define the following values and press the ",(0,t.jsx)(n.strong,{children:"Next"})," button:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Git server: ",(0,t.jsx)(n.code,{children:"github"})]}),"\n",(0,t.jsxs)(n.li,{children:["Repository name: ",(0,t.jsx)(n.code,{children:"<github_account_name>/js-application"})]}),"\n",(0,t.jsxs)(n.li,{children:["Component name: ",(0,t.jsx)(n.code,{children:"js-application"})]}),"\n",(0,t.jsxs)(n.li,{children:["Description: ",(0,t.jsx)(n.code,{children:"js application"})]}),"\n",(0,t.jsxs)(n.li,{children:["Application code language: ",(0,t.jsx)(n.code,{children:"JavaScript"})]}),"\n",(0,t.jsxs)(n.li,{children:["Language version/Provider: ",(0,t.jsx)(n.code,{children:"Vue"})]}),"\n",(0,t.jsxs)(n.li,{children:["Build tool: ",(0,t.jsx)(n.code,{children:"NPM"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Codebase info tab",src:s(61289).A+"",title:"Codebase info tab",width:"1917",height:"1079"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["On the ",(0,t.jsx)(n.strong,{children:"Advanced settings"})," tab, define the below values and push the ",(0,t.jsx)(n.strong,{children:"Create"})," button:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Default branch: ",(0,t.jsx)(n.code,{children:"main"})]}),"\n",(0,t.jsxs)(n.li,{children:["Codebase versioning type: ",(0,t.jsx)(n.code,{children:"edp"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Advanced settings tab",src:s(90282).A+"",title:"Advanced settings tab",width:"1915",height:"1078"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Repeat the procedure twice to create the ",(0,t.jsx)(n.strong,{children:"go-application"})," and ",(0,t.jsx)(n.strong,{children:"python-application"})," applications. These applications will have the following parameters:"]}),"\n",(0,t.jsx)(n.p,{children:"go-application:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Git server: ",(0,t.jsx)(n.code,{children:"github"})]}),"\n",(0,t.jsxs)(n.li,{children:["Repository name: ",(0,t.jsx)(n.code,{children:"<github_account_name>/go-application"})]}),"\n",(0,t.jsxs)(n.li,{children:["Component name: ",(0,t.jsx)(n.code,{children:"go-application"})]}),"\n",(0,t.jsxs)(n.li,{children:["Description: ",(0,t.jsx)(n.code,{children:"go application"})]}),"\n",(0,t.jsxs)(n.li,{children:["Application code language: ",(0,t.jsx)(n.code,{children:"Go"})]}),"\n",(0,t.jsxs)(n.li,{children:["Language version/Provider: ",(0,t.jsx)(n.code,{children:"Gin"})]}),"\n",(0,t.jsxs)(n.li,{children:["Build tool: ",(0,t.jsx)(n.code,{children:"Go"})]}),"\n",(0,t.jsxs)(n.li,{children:["Default branch: ",(0,t.jsx)(n.code,{children:"main"})]}),"\n",(0,t.jsxs)(n.li,{children:["Codebase versioning type: ",(0,t.jsx)(n.code,{children:"edp"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"python-application:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Git server: ",(0,t.jsx)(n.code,{children:"github"})]}),"\n",(0,t.jsxs)(n.li,{children:["Repository name: ",(0,t.jsx)(n.code,{children:"<github_account_name>/python-application"})]}),"\n",(0,t.jsxs)(n.li,{children:["Component name: ",(0,t.jsx)(n.code,{children:"python-application"})]}),"\n",(0,t.jsxs)(n.li,{children:["Description: ",(0,t.jsx)(n.code,{children:"python application"})]}),"\n",(0,t.jsxs)(n.li,{children:["Application code language: ",(0,t.jsx)(n.code,{children:"Python"})]}),"\n",(0,t.jsxs)(n.li,{children:["Language version/Provider: ",(0,t.jsx)(n.code,{children:"FastAPI"})]}),"\n",(0,t.jsxs)(n.li,{children:["Build tool: ",(0,t.jsx)(n.code,{children:"Python"})]}),"\n",(0,t.jsxs)(n.li,{children:["Default branch: ",(0,t.jsx)(n.code,{children:"main"})]}),"\n",(0,t.jsxs)(n.li,{children:["Codebase versioning type: ",(0,t.jsx)(n.code,{children:"edp"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In the ",(0,t.jsx)(n.strong,{children:"Components"})," tab, click one of the applications name to enter the application menu:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Components list",src:s(19746).A+"",title:"Components list",width:"1916",height:"1078"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Click the ",(0,t.jsx)(n.strong,{children:"Trigger build pipeline run"})," button:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Build Application",src:s(43755).A+"",title:"Build Application",width:"1902",height:"1078"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Click the application run name to watch the building logs:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Application building",src:s(67928).A+"",title:"Application building",width:"1915",height:"1077"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"On the pipeline details page, you can find information about each step, pipeline status, view logs."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"KubeRocketCI pipeline run",src:s(96200).A+"",title:"KubeRocketCI pipeline run",width:"1901",height:"1079"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Wait till the build is successful:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Successful build",src:s(42342).A+"",title:"Successful build",width:"1915",height:"1076"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Repeat steps 9-13 for the rest of the applications."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"create-autotests",children:"Create Autotests"}),"\n",(0,t.jsx)(n.p,{children:"The steps below instruct how to create autotests in KubeRocketCI:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Create a couple of autotests using the ",(0,t.jsx)(n.strong,{children:"Clone"})," strategy. Navigate to the ",(0,t.jsx)(n.strong,{children:"Components"})," tab, click on the ",(0,t.jsx)(n.strong,{children:"+CREATE COMPONENT"})," button. Select ",(0,t.jsx)(n.strong,{children:"Autotest"})," and click ",(0,t.jsx)(n.strong,{children:"Next"}),":"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Add autotest",src:s(33663).A+"",title:"Add autotest",width:"1917",height:"1079"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Please refer to the ",(0,t.jsx)(n.a,{href:"/docs/next/user-guide/add-autotest",children:"Add Autotest"})," section for details."]})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Select ",(0,t.jsx)(n.strong,{children:"Clone project"})," and click ",(0,t.jsx)(n.strong,{children:"Create"}),":"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Add autotest",src:s(35265).A+"",title:"Add autotest",width:"1916",height:"1081"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["On the ",(0,t.jsx)(n.strong,{children:"Codebase info"})," tab, define the following values and press the ",(0,t.jsx)(n.strong,{children:"Proceed"})," button:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Repository URL: ",(0,t.jsx)(n.code,{children:"https://github.com/SergK/autotests.git"})]}),"\n",(0,t.jsxs)(n.li,{children:["Git server: ",(0,t.jsx)(n.code,{children:"github"})]}),"\n",(0,t.jsxs)(n.li,{children:["Repository name: ",(0,t.jsx)(n.code,{children:"<github_account_name>/demo-autotest-gradle"})]}),"\n",(0,t.jsxs)(n.li,{children:["Component name: ",(0,t.jsx)(n.code,{children:"demo-autotest-gradle"})]}),"\n",(0,t.jsxs)(n.li,{children:["Description: ",(0,t.jsx)(n.code,{children:"demo-autotest-gradle"})]}),"\n",(0,t.jsxs)(n.li,{children:["Autotest code language: ",(0,t.jsx)(n.code,{children:"Java"})]}),"\n",(0,t.jsxs)(n.li,{children:["Language version/framework: ",(0,t.jsx)(n.code,{children:"Java11"})]}),"\n",(0,t.jsxs)(n.li,{children:["Build tool: ",(0,t.jsx)(n.code,{children:"Gradle"})]}),"\n",(0,t.jsxs)(n.li,{children:["Autotest report framework: ",(0,t.jsx)(n.code,{children:"Allure"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Codebase info tab for autotests",src:s(41175).A+"",title:"Codebase info tab for autotests",width:"1916",height:"1076"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["On the ",(0,t.jsx)(n.strong,{children:"Advanced settings"})," tab define the below values and push the ",(0,t.jsx)(n.strong,{children:"Create"})," button:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Default branch: ",(0,t.jsx)(n.code,{children:"main"})]}),"\n",(0,t.jsxs)(n.li,{children:["Codebase versioning type: ",(0,t.jsx)(n.code,{children:"edp"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Advanced settings tab for autotests",src:s(99620).A+"",title:"Advanced settings tab for autotests",width:"1917",height:"1079"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Repeat the steps 1-4 to create one more autotest with the parameters below:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Repository URL: ",(0,t.jsx)(n.code,{children:"https://github.com/Rolika4/autotests.git"})]}),"\n",(0,t.jsxs)(n.li,{children:["Git server: ",(0,t.jsx)(n.code,{children:"github"})]}),"\n",(0,t.jsxs)(n.li,{children:["Repository name: ",(0,t.jsx)(n.code,{children:"<github_account_name>/demo-autotest-maven"})]}),"\n",(0,t.jsxs)(n.li,{children:["Component name: ",(0,t.jsx)(n.code,{children:"demo-autotest-maven"})]}),"\n",(0,t.jsxs)(n.li,{children:["Description: ",(0,t.jsx)(n.code,{children:"demo-autotest-maven"})]}),"\n",(0,t.jsxs)(n.li,{children:["Autotest code language: ",(0,t.jsx)(n.code,{children:"Java"})]}),"\n",(0,t.jsxs)(n.li,{children:["Language version/framework: ",(0,t.jsx)(n.code,{children:"Java11"})]}),"\n",(0,t.jsxs)(n.li,{children:["Build tool: ",(0,t.jsx)(n.code,{children:"Maven"})]}),"\n",(0,t.jsxs)(n.li,{children:["Autotest report framework: ",(0,t.jsx)(n.code,{children:"Allure"})]}),"\n",(0,t.jsxs)(n.li,{children:["Default branch: ",(0,t.jsx)(n.code,{children:"main"})]}),"\n",(0,t.jsxs)(n.li,{children:["Codebase versioning type: ",(0,t.jsx)(n.code,{children:"edp"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"create-cd-pipeline",children:"Create CD Pipeline"}),"\n",(0,t.jsx)(n.p,{children:"Now that applications and autotests are created, create pipeline for them by following the steps below:"}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"To utilize and manage various environments through the KubeRocketCI platform, the initial step is to onboard a new GitOps repository."})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Navigate to the ",(0,t.jsx)(n.strong,{children:"Environments"})," tab and click the corresponding button to create new GitOps repository:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"CD pipelines tab",src:s(52909).A+"",title:"CD pipelines tab",width:"1916",height:"1079"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Click to the ",(0,t.jsx)(n.strong,{children:"ADD GITOPS REPOSITORY"}),":"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Onboard gitops repository",src:s(50262).A+"",title:"Onboard GitOps repository",width:"1917",height:"1080"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Select the ",(0,t.jsx)(n.code,{children:"github"})," server, enter GitHub account name and click ",(0,t.jsx)(n.strong,{children:"SAVE"}),":"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Configure gitops repository",src:s(25351).A+"",title:"Configure gitops repository",width:"1915",height:"1078"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Return to the ",(0,t.jsx)(n.strong,{children:"Environments"})," tab and click ",(0,t.jsx)(n.strong,{children:"CREATE ENVIRONMENT"})," button:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Create new environment",src:s(55323).A+"",title:"Create new environment",width:"1914",height:"1079"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Enter ",(0,t.jsx)(n.code,{children:"demo-pipeline"})," and click the ",(0,t.jsx)(n.strong,{children:"NEXT"})," button:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Pipeline tab",src:s(59492).A+"",title:"Pipeline tab",width:"1917",height:"1079"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["On the ",(0,t.jsx)(n.strong,{children:"Applications"})," tab, add all the three applications, specify the ",(0,t.jsx)(n.strong,{children:"main"})," branch for all for them and check ",(0,t.jsx)(n.strong,{children:"Promote in pipeline"}),":"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Applications tab",src:s(10647).A+"",title:"Applications tab",width:"1916",height:"1079"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Once all the steps have been completed, you may begin creating stages."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Environment created",src:s(59558).A+"",title:"Environment created",width:"1916",height:"1080"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["On the ",(0,t.jsx)(n.strong,{children:"Stages"})," menu click to the ",(0,t.jsx)(n.strong,{children:"CREATE STAGE"})," button:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Add new stage",src:s(39677).A+"",title:"Add new stage",width:"1916",height:"1080"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In the ",(0,t.jsx)(n.strong,{children:"Create stage"})," menu, define the following values and click ",(0,t.jsx)(n.strong,{children:"NEXT"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Cluster: ",(0,t.jsx)(n.code,{children:"In cluster"})]}),"\n",(0,t.jsxs)(n.li,{children:["Stage name: ",(0,t.jsx)(n.code,{children:"dev"})]}),"\n",(0,t.jsxs)(n.li,{children:["Description: ",(0,t.jsx)(n.code,{children:"dev"})]}),"\n",(0,t.jsxs)(n.li,{children:["Trigger type: ",(0,t.jsx)(n.code,{children:"Manual"})]}),"\n",(0,t.jsxs)(n.li,{children:["Pipeline template: ",(0,t.jsx)(n.code,{children:"deploy-with-autotests"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Configure stage",src:s(17819).A+"",title:"Configure stage",width:"1917",height:"1079"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In the ",(0,t.jsx)(n.strong,{children:"Add quality gates"})," menu click ",(0,t.jsx)(n.strong,{children:"+"})," button. Specify the following parameters and click ",(0,t.jsx)(n.strong,{children:"Create"}),":"]}),"\n",(0,t.jsx)(n.p,{children:"First Quality Gate:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Quality gate type: ",(0,t.jsx)(n.code,{children:"Autotest"})]}),"\n",(0,t.jsxs)(n.li,{children:["Step name: ",(0,t.jsx)(n.code,{children:"Autotest"})]}),"\n",(0,t.jsxs)(n.li,{children:["Autotest: ",(0,t.jsx)(n.code,{children:"demo-autotest-gradle"})]}),"\n",(0,t.jsxs)(n.li,{children:["Autotest branch: ",(0,t.jsx)(n.code,{children:"main"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Second Quality Gate:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Quality gate type: ",(0,t.jsx)(n.code,{children:"Autotest"})]}),"\n",(0,t.jsxs)(n.li,{children:["Step name: ",(0,t.jsx)(n.code,{children:"Autotest"})]}),"\n",(0,t.jsxs)(n.li,{children:["Autotest: ",(0,t.jsx)(n.code,{children:"demo-autotest-maven"})]}),"\n",(0,t.jsxs)(n.li,{children:["Autotest branch: ",(0,t.jsx)(n.code,{children:"main"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Quality gates tab",src:s(87082).A+"",title:"Quality gates tab",width:"1917",height:"1077"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Repeat the steps 8-10 to create one more stage with the parameters below:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Cluster: ",(0,t.jsx)(n.code,{children:"In cluster"})]}),"\n",(0,t.jsxs)(n.li,{children:["Stage name: ",(0,t.jsx)(n.code,{children:"sit"})]}),"\n",(0,t.jsxs)(n.li,{children:["Description: ",(0,t.jsx)(n.code,{children:"sit"})]}),"\n",(0,t.jsxs)(n.li,{children:["Trigger type: ",(0,t.jsx)(n.code,{children:"manual"})]}),"\n",(0,t.jsxs)(n.li,{children:["Pipeline template: ",(0,t.jsx)(n.code,{children:"deploy"})]}),"\n",(0,t.jsxs)(n.li,{children:["Quality gate type: ",(0,t.jsx)(n.code,{children:"Manual"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"run-autotests",children:"Run Autotests"}),"\n",(0,t.jsx)(n.p,{children:"After the CD pipeline is created, deploy applications and run autotests by following the steps below:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Click the ",(0,t.jsx)(n.strong,{children:"dev"})," stage name to expand its details:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Deploy applications",src:s(96957).A+"",title:"Deploy applications",width:"1902",height:"1079"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Navigate ",(0,t.jsx)(n.strong,{children:"Applications"})," and click ",(0,t.jsx)(n.strong,{children:"CONFIGURE DEPLOY"}),". Then select latest versions of all applications and click ",(0,t.jsx)(n.strong,{children:"START DEPLOY"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Run deploy pipeline",src:s(27872).A+"",title:"Run deploy pipeline",width:"1915",height:"1080"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["To find information about running deploy pipeline navigate ",(0,t.jsx)(n.strong,{children:"PIPELINES"})," and click on pipeline name:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Deploy pipeline information",src:s(10410).A+"",title:"Deploy pipeline information",width:"1914",height:"1079"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Once promotion procedure is finished, the promoted applications will become available in the ",(0,t.jsx)(n.strong,{children:"Sit"})," stage. You will be able to select image stream versions for the promoted applications:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Sit stage",src:s(74595).A+"",title:"Sit stage",width:"1915",height:"1076"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/next/user-guide/add-application",children:"Add Application"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/next/user-guide/add-autotest",children:"Add Autotest"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/next/user-guide/add-cd-pipeline",children:"Add CD Pipeline"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/next/user-guide/add-quality-gate",children:"Add Quality Gate"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},19746:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/3-apps-29a72962f6af33a6067b71ccfe02657f.png"},37586:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/add_application-a605159d4efa7e9e02e0ca5eb7327e49.png"},33663:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/add_autotest-06d5a7fd8a00c0fa4579790da4cf213c.png"},25351:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/add_gitops_repository-51bb1ab9c4002489895bb83a68518785.png"},39677:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/add_new_stage-6f68fce4abdef1d04564a0252a48e656.png"},90282:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/advanced_settings-6f4df14b533f4fe836e31b0d3d7fd44d.png"},67928:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/app_built-953533b34c71f4232253b9a35e0dcda8.png"},22579:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/application_create-c7110d900095a333f4d58b5fecb886a1.png"},10647:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/applications_tab-6b4b5550c87da8eb8da2e4e06452bc2d.png"},99620:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/autotest_advanced_settings-85984cc39a67405e38214baaf1fa4728.png"},43755:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/build_application-58bfc7d58b15ac7a5ed0680f67bb26d5.png"},35265:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/clone_project-6bb6fcedc9fd69e9d480eaeeb6fd32a6.png"},61289:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/codebase_info_menu-bca90893b77eba72a99cb0a197346eef.png"},17819:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/configure_stage-b21d1f953e5579c5534f7ca2aa0975f6.png"},52909:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/create_cd_pipeline-c10a25f9173326910919b40e94ce301d.png"},14821:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/create_new_component-0049aeb85e7663fed5e48577d5b4d7b9.png"},55323:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/create_new_environment-d1fecafaaaea3833b3575014ca7eba79.png"},41175:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/demo_autotest_gradle-c69cb405c3b6b1d7d754c0d31419b6e7.png"},96957:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/deploy_applications-1b8fd723034476a18348cc8c57be8b10.png"},10410:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/deploy_pipeline-7f9e1ec1e7b7f414fddc24036e031333.png"},74595:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/deploy_promoted_stage-5f1f2378ba5e927c3736a71e9cd5f896.png"},59558:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/environment_created-132ffde1550b2f4c06a34da4731c8123.png"},15516:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/kuberocketci_cluster_settings-3c485a525a4a8b8378cb240b5db5dc12.png"},96200:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/kuberocketci_pipeline-81cb5a161814a75dd46b38b428f54c1b.png"},81804:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/kuberocketci_set_namespace-e2609e352f68cece07f966f92a0d0541.png"},50262:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/onboard_gitops-279b901edae2620d5a293c18d6b50d70.png"},59492:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/pipeline_tab-835e9d4ea30deda9c24133988aace9d5.png"},87082:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/quality_gates_tab-be49087eb59705d4344300e8aa33da1c.png"},27872:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/run_deploy_pipeline-0942638cbe3a1c67e6472a9a7d7f40e7.png"},42342:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/wait_application-0403a29903e57b4da0193d7da90b70d9.png"},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>c});var t=s(96540);const i={},l=t.createContext(i);function a(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);