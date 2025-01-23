"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[50415],{95655:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"user-guide/tekton-pipelines","title":"KubeRocketCI: Tekton Overview","description":"KubeRocketCI is a platform that utilizes the Tekton stack to implement continuous integration and continuous delivery (CI/CD) pipelines, offering access to all Tekton features. It comes pre-configured with various Tekton resources, including pipelines, tasks, triggers, and other components. This documentation outlines how to interact with these Tekton resources within the KubeRocketCI platform, addressing common use cases, pipeline configuration, and execution processes.","source":"@site/docs/user-guide/tekton-pipelines.md","sourceDirName":"user-guide","slug":"/user-guide/tekton-pipelines","permalink":"/docs/next/user-guide/tekton-pipelines","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/user-guide/tekton-pipelines.md","tags":[],"version":"current","lastUpdatedBy":"Sergiy Kulanov","lastUpdatedAt":1737663979000,"frontMatter":{"sidebar_label":"Tekton Overview"},"sidebar":"userGuideSidebar","previous":{"title":"Pipelines Overview","permalink":"/docs/next/user-guide/pipelines"},"next":{"title":"Marketplace Overview","permalink":"/docs/next/user-guide/marketplace"}}');var t=n(74848),l=n(28453);const r={sidebar_label:"Tekton Overview"},o="KubeRocketCI: Tekton Overview",p={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Pipeline Types in the Platform",id:"pipeline-types-in-the-platform",level:2},{value:"Creating a Pipeline",id:"creating-a-pipeline",level:2},{value:"Configuring Pipelines for Projects",id:"configuring-pipelines-for-projects",level:2},{value:"Review and Build Pipelines (CI)",id:"review-and-build-pipelines-ci",level:3},{value:"Deploy and Clean Pipelines",id:"deploy-and-clean-pipelines",level:3},{value:"Trigger Pipelines",id:"trigger-pipelines",level:2},{value:"Review Pipeline",id:"review-pipeline",level:3},{value:"Build Pipeline",id:"build-pipeline",level:3},{value:"Deploy Pipeline",id:"deploy-pipeline",level:3},{value:"Clean Pipeline",id:"clean-pipeline",level:3},{value:"Related Articles",id:"related-articles",level:2}];function a(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,l.R)(),...e.components},{Head:s}=i;return s||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"kuberocketci-tekton-overview",children:"KubeRocketCI: Tekton Overview"})}),"\n",(0,t.jsx)(s,{children:(0,t.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/user-guide/tekton-pipelines/"})}),"\n",(0,t.jsx)(i.p,{children:"KubeRocketCI is a platform that utilizes the Tekton stack to implement continuous integration and continuous delivery (CI/CD) pipelines, offering access to all Tekton features. It comes pre-configured with various Tekton resources, including pipelines, tasks, triggers, and other components. This documentation outlines how to interact with these Tekton resources within the KubeRocketCI platform, addressing common use cases, pipeline configuration, and execution processes."}),"\n",(0,t.jsx)(i.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(i.p,{children:"Before executing pipelines, ensure that the project is onboarded to the KubeRocketCI platform and that the relevant branches are properly configured."}),"\n",(0,t.jsx)(i.h2,{id:"pipeline-types-in-the-platform",children:"Pipeline Types in the Platform"}),"\n",(0,t.jsx)(i.p,{children:"KubeRocketCI supports four main types of pipelines:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Review Pipeline"}),": This pipeline is initiated when a pull request is created. It aims to check code quality and run tests before the code can be merged."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Build Pipeline"}),": This pipeline is triggered when a pull request is merged. It is responsible for building the application and generating deployable artifacts."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Deploy Pipeline"}),": This pipeline handles the deployment of the application to a target environment, applying specific configurations."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Clean Pipeline"}),": This pipeline is responsible for cleaning up any resources created during the deployment, ensuring a fresh environment for future deployments."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"Each pipeline type is identified using specific labels in Kubernetes objects:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"app.edp.epam.com/pipelinetype: review"})," \u2014 for review pipelines;"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"app.edp.epam.com/pipelinetype: build"}),"\u2014 for build pipelines;"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"app.edp.epam.com/pipelinetype: deploy"})," \u2014 for deploy pipelines;"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"app.edp.epam.com/pipelinetype: clean"}),"\u2014 for clean pipelines."]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"creating-a-pipeline",children:"Creating a Pipeline"}),"\n",(0,t.jsx)(i.p,{children:"To create a pipeline, you need to define and apply Tekton resources such as tasks, pipelines, and triggers in the cluster."}),"\n",(0,t.jsx)(i.p,{children:"KubeRocketCI includes a library component for managing Tekton resources declaratively. This library integrates with Argo CD, enabling version control and automatic synchronization of pipeline definitions."}),"\n",(0,t.jsx)(i.p,{children:"Below is the recommended flow for creating comprehensive and efficient Tekton pipelines:"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsx)(i.li,{children:"Start by modifying an existing pipeline example from the library to suit your needs."}),"\n",(0,t.jsx)(i.li,{children:"Test changes by applying resources directly to the cluster."}),"\n",(0,t.jsx)(i.li,{children:"Once verified, commit changes to the repository to ensure they are tracked and version-controlled."}),"\n",(0,t.jsx)(i.li,{children:"Check/apply changes in Argo CD."}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"configuring-pipelines-for-projects",children:"Configuring Pipelines for Projects"}),"\n",(0,t.jsx)(i.p,{children:"Proper pipeline configuration depends on its purpose. Pipeline configuration is different for CI and CD pipelines."}),"\n",(0,t.jsx)(i.h3,{id:"review-and-build-pipelines-ci",children:"Review and Build Pipelines (CI)"}),"\n",(0,t.jsx)(i.p,{children:"Two approaches are available for defining review and build pipelines:"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"https://docs.kuberocketci.io/docs/use-cases/tekton-custom-pipelines",children:"Custom Framework/Build Tool"}),":"]}),"\n"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Useful for onboarding multiple projects with the same pipeline structure."}),"\n",(0,t.jsx)(i.li,{children:"Pipelines follow a naming pattern and are mapped to projects via project settings."}),"\n"]}),"\n",(0,t.jsxs)(i.ol,{start:"2",children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"https://docs.kuberocketci.io/docs/use-cases/custom-pipelines-flow#replace-existing-pipelines-for-components-with-custom-pipelines",children:"Branch-Specific Pipelines"}),":"]}),"\n"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Ideal for enabling different pipelines for different branches of a project."}),"\n",(0,t.jsx)(i.li,{children:"Pipelines are explicitly defined for specific branches."}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"deploy-and-clean-pipelines",children:"Deploy and Clean Pipelines"}),"\n",(0,t.jsx)(i.p,{children:"Deploy and Clean pipelines require the creation of a TriggerTemplate resource with appropriate labels:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"app.edp.epam.com/pipelinetype: deploy"})," \u2014 for deploy pipelines;"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"app.edp.epam.com/pipelinetype: clean"})," \u2014 for clean pipelines."]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"The TriggerTemplate defines parameters (e.g., service account name, timeout) and references the deploy pipeline in its pipelineRef field."}),"\n",(0,t.jsx)(i.h2,{id:"trigger-pipelines",children:"Trigger Pipelines"}),"\n",(0,t.jsx)(i.p,{children:"A specific event triggers each pipeline type."}),"\n",(0,t.jsx)(i.h3,{id:"review-pipeline",children:"Review Pipeline"}),"\n",(0,t.jsx)(i.p,{children:"Trigger a review pipeline using one of the four methods:"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsx)(i.li,{children:"Create a pull request in the repository targeting a configured branch. The review pipeline will be triggered automatically once the pull request is created:"}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Delete branch",src:n(65469).A+"",title:"Delete branch",width:"1470",height:"412"})}),"\n",(0,t.jsxs)(i.ol,{start:"2",children:["\n",(0,t.jsxs)(i.li,{children:["Use the ",(0,t.jsx)(i.strong,{children:"Run Again"})," button on the PipelineRun details page in the KubeRocketCI portal (if a PipelineRun exists):"]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Delete branch",src:n(93014).A+"",title:"Delete branch",width:"1922",height:"539"})}),"\n",(0,t.jsxs)(i.ol,{start:"3",children:["\n",(0,t.jsxs)(i.li,{children:["Use the ",(0,t.jsx)(i.strong,{children:"Rerun"})," button on the PipelineRun details page in the Tekton dashboard (if a PipelineRun exists):"]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Delete branch",src:n(56091).A+"",title:"Delete branch",width:"1922",height:"436"})}),"\n",(0,t.jsxs)(i.ol,{start:"4",children:["\n",(0,t.jsxs)(i.li,{children:["Add a comment with the ",(0,t.jsx)(i.code,{children:"/recheck"})," command on the pull request page:"]}),"\n"]}),"\n",(0,t.jsx)(i.admonition,{type:"note",children:(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.code,{children:"/recheck"})," command works for all the available Version Control Systems."]})}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Delete branch",src:n(8923).A+"",title:"Delete branch",width:"1460",height:"803"})}),"\n",(0,t.jsx)(i.h3,{id:"build-pipeline",children:"Build Pipeline"}),"\n",(0,t.jsx)(i.p,{children:"Overall, there are four methods of triggering a build pipeline:"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"Merge a pull request into a configured branch."}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["Use the ",(0,t.jsx)(i.strong,{children:"Run Again"})," button in the KubeRocketCI portal (if a PipelineRun exists):"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Delete branch",src:n(14480).A+"",title:"Delete branch",width:"1922",height:"545"})}),"\n",(0,t.jsxs)(i.ol,{start:"3",children:["\n",(0,t.jsx)(i.li,{children:"Use the Rerun button in the Tekton dashboard (if a PipelineRun exists):"}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Delete branch",src:n(11667).A+"",title:"Delete branch",width:"1922",height:"395"})}),"\n",(0,t.jsxs)(i.ol,{start:"4",children:["\n",(0,t.jsx)(i.li,{children:"Use the Trigger Build PipelineRun button in the KubeRocketCI portal within the branches section:"}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Delete branch",src:n(30754).A+"",title:"Delete branch",width:"1922",height:"1114"})}),"\n",(0,t.jsx)(i.h3,{id:"deploy-pipeline",children:"Deploy Pipeline"}),"\n",(0,t.jsxs)(i.p,{children:["Deploy pipelines can be triggered manually or automatically. Automatic triggers are implemented using the ",(0,t.jsx)(i.strong,{children:"TriggerType"})," custom resource. There are three ways to trigger a deploy pipeline:"]}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:["Use ",(0,t.jsx)(i.strong,{children:"Configure Deploy"})," and ",(0,t.jsx)(i.strong,{children:"Start Deploy"})," buttons in the KubeRocketCI portal:"]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Delete branch",src:n(20093).A+"",title:"Delete branch",width:"1922",height:"1114"})}),"\n",(0,t.jsxs)(i.ol,{start:"2",children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["Configure the pipeline with the ",(0,t.jsx)(i.code,{children:"Auto"})," TriggerType to deploy automatically after the build pipeline finishes and a new artifact version is created."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["Use the ",(0,t.jsx)(i.code,{children:"Auto-stable"})," TriggerType for deploying stable component versions while updating only the rebuilt component."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"clean-pipeline",children:"Clean Pipeline"}),"\n",(0,t.jsxs)(i.p,{children:["Trigger the clean pipeline using the ",(0,t.jsx)(i.strong,{children:"Clean"})," button in the KubeRocketCI portal within the appropriate stage section."]}),"\n",(0,t.jsx)(i.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"/docs/next/user-guide/pipelines",children:"Pipelines Overview"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"/docs/next/user-guide/add-library",children:"Add Library"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"/docs/next/user-guide/add-autotest",children:"Add Autotest"})}),"\n"]})]})}function d(e={}){const{wrapper:i}={...(0,l.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},8923:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/bitbucket-pull-request-recheck-51039fe4316467ddd9db972c16533d50.png"},65469:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/bitbucket-pull-request-b3b0bc75fea5faedaf043e4bb31306b8.png"},14480:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/build-pipeline-run-again-ea79cf9fbe56a087145a03f2d47f1556.png"},11667:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/build-pipeline-tekton-dashboard-rerun-d0acf6a548783ffbb72bd9524f73394f.png"},20093:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/deploy-pipeline-configure-deploy-dcc518d6e4d5c526aa9b949b862b449f.png"},93014:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/review-pipeline-run-again-ece8fc1110d2c457888c6300a27ba1dd.png"},56091:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/review-pipeline-tekton-dashboard-run-again-524f5f377794d5109c58778293e8fb87.png"},30754:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/trigger-build-pipeline-run-76a00836f765a8b74a897532ead429b8.png"},28453:(e,i,n)=>{n.d(i,{R:()=>r,x:()=>o});var s=n(96540);const t={},l=s.createContext(t);function r(e){const i=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(l.Provider,{value:i},e.children)}}}]);