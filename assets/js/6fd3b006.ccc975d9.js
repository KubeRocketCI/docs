"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[25336],{90225:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"use-cases/custom-pipelines-flow","title":"Create and Use Custom Tekton Pipelines","description":"This use case explains how to create and use custom Tekton pipelines on the KubeRocketCI Platform.","source":"@site/docs/use-cases/custom-pipelines-flow.md","sourceDirName":"use-cases","slug":"/use-cases/custom-pipelines-flow","permalink":"/docs/next/use-cases/custom-pipelines-flow","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/use-cases/custom-pipelines-flow.md","tags":[],"version":"current","lastUpdatedBy":"Oleksandr_Stepanov@epam.com","lastUpdatedAt":1736322039000,"frontMatter":{},"sidebar":"useCasesSidebar","previous":{"title":"Autotest as a Quality Gate","permalink":"/docs/next/use-cases/autotest-as-quality-gate"},"next":{"title":"Deploy Application With Custom Build Tool/Framework","permalink":"/docs/next/use-cases/tekton-custom-pipelines"}}');var i=s(74848),l=s(28453);const o={},r="Create and Use Custom Tekton Pipelines",c={},a=[{value:"Goals",id:"goals",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Scenario",id:"scenario",level:2},{value:"Creating a Tekton Library for Custom Pipelines",id:"creating-a-tekton-library-for-custom-pipelines",level:3},{value:"Defining Custom Tekton Pipelines",id:"defining-custom-tekton-pipelines",level:3},{value:"Deliver Custom Tekton Pipelines to the Cluster",id:"deliver-custom-tekton-pipelines-to-the-cluster",level:3},{value:"Replace Existing Pipelines for Components With Custom Pipelines",id:"replace-existing-pipelines-for-components-with-custom-pipelines",level:3},{value:"Related Articles",id:"related-articles",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"create-and-use-custom-tekton-pipelines",children:"Create and Use Custom Tekton Pipelines"})}),"\n",(0,i.jsx)(n.p,{children:"This use case explains how to create and use custom Tekton pipelines on the KubeRocketCI Platform.\nWhile KubeRocketCI offers pre-configured Tekton pipelines for common use cases, custom pipelines allow you to adapt workflows to meet unique project requirements.\nIt also provides guidance on integrating and using these custom Tekton pipelines within your development processes."}),"\n",(0,i.jsx)(n.h2,{id:"goals",children:"Goals"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Provide a clear method for creating and configuring custom Tekton tasks and pipelines for build, review, deployment, and clean processes within KubeRocketCI."}),"\n",(0,i.jsx)(n.li,{children:"Offer a detailed guide on integrating custom pipelines with the KubeRocketCI platform, ensuring seamless connection and functionality."}),"\n",(0,i.jsx)(n.li,{children:"Clarify the process for replacing existing build, review, deployment, and clean pipelines with custom pipelines, highlighting necessary steps and considerations."}),"\n",(0,i.jsx)(n.li,{children:"Demonstrate the benefits of using custom Tekton pipelines in KubeRocketCI, such as improved flexibility, scalability, and efficiency in development workflows."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsx)(n.p,{children:"Before proceeding with this use case, ensure the following prerequisites are met:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Access to a KubeRocketCI instance with permissions to create and edit ",(0,i.jsx)(n.strong,{children:"Components"})," and ",(0,i.jsx)(n.strong,{children:"Environments"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["A configured KubeRocketCI instance with at least one active ",(0,i.jsx)(n.a,{href:"/docs/next/user-guide/add-git-server",children:"Git Server"})," (e.g., GitHub, GitLab or Bitbucket)."]}),"\n",(0,i.jsxs)(n.li,{children:["Configured Argo CD instance with the ",(0,i.jsx)(n.a,{href:"/docs/next/operator-guide/add-ons-overview",children:"Add-ons repository"})," added."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"scenario",children:"Scenario"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Create a Tekton library in KubeRocketCI for storing and managing custom Tekton resources."}),"\n",(0,i.jsx)(n.li,{children:"Define custom Tekton pipelines for build, review, deployment, or clean processes based on specific project requirements."}),"\n",(0,i.jsx)(n.li,{children:"Integrate custom Tekton pipelines with the KubeRocketCI platform to automate build, review, and deployment workflows using Argo CD and the add-ons repository."}),"\n",(0,i.jsx)(n.li,{children:"Replace existing build, review, deploy, or clean pipelines with custom pipelines."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"creating-a-tekton-library-for-custom-pipelines",children:"Creating a Tekton Library for Custom Pipelines"}),"\n",(0,i.jsx)(n.p,{children:"The first step in creating and using custom Tekton pipelines is to set up a Tekton library in KubeRocketCI. This library acts as a central repository for storing and managing custom Tekton tasks, pipelines, and trigger templates."}),"\n",(0,i.jsx)(n.p,{children:"To create a Tekton library, follow these steps:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Open the KubeRocketCI portal. Use the ",(0,i.jsx)(n.strong,{children:"Sign-In"})," option:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Logging Page",src:s(79825).A+"",title:"Logging screen",width:"3364",height:"1670"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the top-right corner, click the three dots (",(0,i.jsx)(n.strong,{children:"\u22ee"}),") menu. From the dropdown, select your profile name to access additional options:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Settings",src:s(8975).A+"",title:"Settings button",width:"3364",height:"1660"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Ensure that both ",(0,i.jsx)(n.code,{children:"Default namespace"})," and ",(0,i.jsx)(n.code,{children:"Allowed namespaces"})," are set to the same namespace where you want to create the Tekton library:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Namespace",src:s(32429).A+"",title:"Namespace settings",width:"3333",height:"1660"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click the ",(0,i.jsx)(n.code,{children:"Components"})," tab in the left-hand navigation menu. Then, click the ",(0,i.jsx)(n.code,{children:"Create Component"})," button. Choose the ",(0,i.jsx)(n.strong,{children:"Component type"})," as ",(0,i.jsx)(n.code,{children:"Library"}),":"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Create Component",src:s(96415).A+"",title:"Component type",width:"3364",height:"1660"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Select the ",(0,i.jsx)(n.strong,{children:"Strategy type"})," as ",(0,i.jsx)(n.code,{children:"Create from template"}),":"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Strategy type",src:s(66733).A+"",title:"Strategy type",width:"3364",height:"1660"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.strong,{children:"Create Library"})," window, enter the following values:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Repository Name"}),": ",(0,i.jsx)(n.code,{children:"<git-account-name>/tekton-custom-pipelines"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Component name"}),": ",(0,i.jsx)(n.code,{children:"tekton-custom-pipelines"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Description"}),": ",(0,i.jsx)(n.code,{children:"Repository for storing and managing custom Tekton resources"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Library code language"}),": ",(0,i.jsx)(n.code,{children:"Helm"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Language version/framework"}),": ",(0,i.jsx)(n.code,{children:"Pipeline"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Build tool"}),": ",(0,i.jsx)(n.code,{children:"Helm"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Component Info",src:s(85811).A+"",title:"Component Info",width:"3364",height:"1660"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.code,{children:"Specify Advanced Settings"})," section, you can leave all fields at their default values. Click the ",(0,i.jsx)(n.code,{children:"Create"})," button to create the Tekton library:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Advanced Settings",src:s(64013).A+"",title:"Advanced Settings",width:"3364",height:"1660"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Once the library is created, you can start adding custom Tekton tasks, pipelines, and trigger templates to the library."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"defining-custom-tekton-pipelines",children:"Defining Custom Tekton Pipelines"}),"\n",(0,i.jsx)(n.p,{children:"After creating the Tekton library, the next step is to define custom Tekton pipelines for build, review or deployment processes based on your project requirements."}),"\n",(0,i.jsx)(n.p,{children:"To define custom Tekton pipelines, follow these steps:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the KubeRocketCI portal, navigate to the ",(0,i.jsx)(n.code,{children:"Components"})," tab and select the newly created ",(0,i.jsx)(n.code,{children:"tekton-custom-pipelines"})," library:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Tekton Library",src:s(43076).A+"",title:"Tekton Library",width:"3364",height:"1660"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the top-right corner, click the ",(0,i.jsx)(n.strong,{children:"Git"})," button to open the Git repository for the ",(0,i.jsx)(n.code,{children:"tekton-custom-pipelines"})," library:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Git Repository",src:s(32292).A+"",title:"Git Repository",width:"3333",height:"1660"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Clone the repository to your local machine:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Clone Repository",src:s(20625).A+"",title:"Clone Repository",width:"3334",height:"1660"})}),"\n",(0,i.jsx)(n.p,{children:"You can use the following command to clone the repository:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git clone <git-repo-url>\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Examine the repository structure."}),"\n",(0,i.jsx)(n.p,{children:"By default, the repository structure looks as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-plaintext",children:"tekton-custom-pipelines\n\u251c\u2500\u2500 Chart.yaml\n\u251c\u2500\u2500 templates\n\u2502\xa0\xa0 \u251c\u2500\u2500 pipelines\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 deploy\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 custom-clean.yaml\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 custom-deploy.yaml\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 bitbucket-build-default.yaml\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 bitbucket-build-edp.yaml\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 bitbucket-build-lib-default.yaml\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 bitbucket-build-lib-edp.yaml\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 bitbucket-review.yaml\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 gerrit-build-default.yaml\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 gerrit-build-edp.yaml\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 gerrit-build-lib-default.yaml\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 gerrit-build-lib-edp.yaml\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 gerrit-review.yaml\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 github-build-default.yaml\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 github-build-edp.yaml\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 github-build-lib-default.yaml\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 github-build-lib-edp.yaml\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 github-review.yaml\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 gitlab-build-default.yaml\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 gitlab-build-edp.yaml\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 gitlab-build-lib-default.yaml\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 gitlab-build-lib-edp.yaml\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 gitlab-review.yaml\n\u2502\xa0\xa0 \u251c\u2500\u2500 resources\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 npm-settings.yaml\n\u2502\xa0\xa0 \u251c\u2500\u2500 tasks\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 deploy\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 hello-world-deploy.yaml\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 hello-world.yaml\n\u2502\xa0\xa0 \u2514\u2500\u2500 triggers\n\u2502\xa0\xa0     \u251c\u2500\u2500 custom-clean.yaml\n\u2502\xa0\xa0     \u2514\u2500\u2500 custom-deploy.yaml\n\u2514\u2500\u2500 values.yaml\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"templates"})," directory is a main directory that contains templates for custom Tekton resources. This directory is divided into subdirectories for pipelines, tasks, triggers, and resources."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"templates/pipelines"})," directory contains Tekton pipeline templates for build and review processes. For each Git server (e.g., GitHub, GitLab, Bitbucket, or Gerrit), there are specific templates, organized by component and versioning type."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"The appropriate template should be selected based on the configuration of your component. For example:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["If the component is created in GitHub, has the ",(0,i.jsx)(n.code,{children:"Application"})," component type, and uses ",(0,i.jsx)(n.code,{children:"edp"})," versioning, you should use the ",(0,i.jsx)(n.code,{children:"github-build-edp.yaml"})," template."]}),"\n",(0,i.jsxs)(n.li,{children:["If the component is created in Bitbucket, has the ",(0,i.jsx)(n.code,{children:"Library"})," component type, and uses the ",(0,i.jsx)(n.code,{children:"default"})," versioning, you should use the ",(0,i.jsx)(n.code,{children:"bitbucket-build-lib-default.yaml"})," template."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Here is an example illustrating the naming conventions used in template filenames:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Pipeline Templates",src:s(32107).A+"",title:"File name structure",width:"1794",height:"1094"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"templates/pipelines/deploy"})," directory contains Tekton pipeline templates for deploy and clean processes. Select the appropriate template based on the deployment process requirements."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"templates/tasks"})," directory contains Tekton task templates for specific tasks that are part of the build, review, or deployment processes."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"templates/triggers"})," directory contains Tekton trigger templates for triggering the deployment or clean processes."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"templates/resources"})," directory is intended for various templates, such as config maps and secrets, which can be mounted into custom Tekton tasks as needed."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Modify the existing pipeline and task templates or create new ones based on your project requirements."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Result"}),": This step will demonstrate an example of creating custom Tekton resources. After completing this step, you will have a custom Tekton task, pipeline, and trigger template."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Usage"}),": The created custom Tekton resources can be used later for components on the KubeRocketCI platform. This flow serves as an example that can be used when creating your own, specific custom Tekton resources for your project's needs"]}),"\n",(0,i.jsxs)(n.p,{children:["Consider the scenario where a custom task ",(0,i.jsx)(n.code,{children:"hello-world"})," needs to be created and used in a custom Tekton pipeline. Follow the steps below to achieve this:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Create a custom Tekton task."}),"\n",(0,i.jsxs)(n.p,{children:["Create a custom Tekton task called ",(0,i.jsx)(n.code,{children:"hello-world"})," to be used in a custom build pipeline. This task should be created in the ",(0,i.jsx)(n.code,{children:"templates/tasks"})," directory with the name ",(0,i.jsx)(n.code,{children:"hello-world.yaml"}),". The task will accept two parameters: ",(0,i.jsx)(n.code,{children:"BASE_IMAGE"})," and ",(0,i.jsx)(n.code,{children:"username"}),". The ",(0,i.jsx)(n.code,{children:"BASE_IMAGE"})," parameter specifies the base Docker image to be used for the task, while the ",(0,i.jsx)(n.code,{children:"username"})," parameter is used to personalize the task's output."]}),"\n",(0,i.jsxs)(n.p,{children:["Here is an example of the ",(0,i.jsx)(n.code,{children:"hello-world.yaml"})," task template:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'apiVersion: tekton.dev/v1beta1\nkind: Task\nmetadata:\n  name: hello-world\n  labels:\n    {{- include "edp-tekton.labels" . | nindent 4 }}\nspec:\n  params:\n  - name: BASE_IMAGE\n    type: string\n    default: "alpine"\n    description: "The base Docker image to use for the task"\n  - name: username\n    type: string\n    description: "The username to personalize the task\'s output"\n  workspaces:\n    - description: A workspace that contains fetched git repo.\n      name: source\n  steps:\n    - name: hello-world\n      image: $(params.BASE_IMAGE)\n      workingDir: $(workspaces.source.path)\n      script: |\n        #!/bin/sh\n        echo "Hello $(params.username), the repository contains the following files:"\n        ls -al\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Create a Custom Tekton Pipeline."}),"\n",(0,i.jsxs)(n.p,{children:["Define a custom Tekton pipeline that uses the ",(0,i.jsx)(n.code,{children:"hello-world"})," custom task. Since the application for which this pipeline will be used is located in GitHub, has the component type ",(0,i.jsx)(n.code,{children:"Application"}),", and has the versioning type ",(0,i.jsx)(n.code,{children:"edp"}),",\nuse the template ",(0,i.jsx)(n.code,{children:"github-build-edp.yaml"})," in the ",(0,i.jsx)(n.code,{children:"templates/pipelines"})," directory. First, set the parameters in the ",(0,i.jsx)(n.code,{children:"spec.params"})," field that will be used in the custom task:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'labels:\n  app.edp.epam.com/pipelinetype: build\n...\nspec:\n  params:\n    - default: "World"\n      description: "Example parameter"\n      name: username\n      type: string\n    - default: \'alpine:3.18.9\'\n      name: image-version\n      type: string\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Then, in the ",(0,i.jsx)(n.code,{children:"spec.tasks"})," field, after the ",(0,i.jsx)(n.code,{children:"get-version"})," task, describe the custom ",(0,i.jsx)(n.code,{children:"hello-world"})," task. Also, in the subsequent ",(0,i.jsx)(n.code,{children:"git-tag"})," task, specify the ",(0,i.jsx)(n.code,{children:"runAfter: hello-world"})," field to maintain the sequence of execution."]}),"\n",(0,i.jsxs)(n.p,{children:["Here is an example of part of the ",(0,i.jsx)(n.code,{children:"github-build-edp.yaml"})," pipeline template:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'apiVersion: tekton.dev/v1\nkind: Pipeline\nmetadata:\n  name: custom-deploy\n  labels:\n    app.edp.epam.com/pipelinetype: deploy\nspec:\n  tasks:\n    ...\n    - name: hello-world\n      taskRef:\n        name: hello-world\n      runAfter:\n        - get-version\n      params:\n        - name: BASE_IMAGE\n          value: "$(params.image-version)"\n        - name: username\n          value: "$(params.username)"\n      workspaces:\n        - name: source\n          workspace: shared-workspace\n          subPath: source\n\n    - name: git-tag\n      params:\n        - name: GIT_USER_EMAIL\n          value: edp-ci@edp.ci-user\n        - name: GIT_USER_NAME\n          value: edp-ci\n        - name: GIT_SCRIPT\n          value: |\n            git tag -a "$(tasks.get-version.results.VCS_TAG)" -m "Tag is added automatically by CI user"\n            git push --tags\n      runAfter:\n        - hello-world\n      taskRef:\n        kind: Task\n        name: git-cli\n    ...\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Create a Custom Tekton Trigger Template."}),"\n",(0,i.jsxs)(n.p,{children:["Create a Tekton Trigger Template to invoke the custom ",(0,i.jsx)(n.code,{children:"github-build-edp pipeline"}),". Use the ",(0,i.jsx)(n.code,{children:"custom-deploy.yaml"})," template in the ",(0,i.jsx)(n.code,{children:"templates/triggers"})," directory. Modify the ",(0,i.jsx)(n.code,{children:".spec.resourcetemplates.spec.pipelineRef.name"})," field to reference the custom pipeline that uses the ",(0,i.jsx)(n.code,{children:"hello-world"})," custom Tekton task, in this case, ",(0,i.jsx)(n.code,{children:"custom-deploy"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Here is the relevant part of the ",(0,i.jsx)(n.code,{children:"custom-deploy.yaml"})," trigger template:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"apiVersion: triggers.tekton.dev/v1beta1\nkind: TriggerTemplate\nmetadata:\n  name: custom-deploy\n  labels:\n    app.edp.epam.com/pipelinetype: deploy\n...\nspec:\n  resourcetemplates:\n    - apiVersion: tekton.dev/v1beta1\n      kind: PipelineRun\n      ...\n      spec:\n        pipelineRef:\n          name: custom-deploy\n      ...\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Optional: Specify the ",(0,i.jsx)(n.code,{children:"dnsWildCard"})," field in the ",(0,i.jsx)(n.code,{children:"values.yaml"})," file."]}),"\n",(0,i.jsxs)(n.p,{children:["If custom Tekton review pipelines have been created, it is necessary to specify the ",(0,i.jsx)(n.code,{children:"dnsWildCard"})," field in the ",(0,i.jsx)(n.code,{children:"values.yaml"})," file. This field will be used to form the ",(0,i.jsx)(n.code,{children:"pipelineUrl"})," variable, which is utilized in merge and pull requests to navigate to the KubeRocketCI Portal."]}),"\n",(0,i.jsxs)(n.p,{children:["Here is an example of the ",(0,i.jsx)(n.code,{children:"values.yaml"})," file:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'dnsWildCard: "example.com"\n'})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Commit and push the changes to the Git repository."}),"\n",(0,i.jsx)(n.p,{children:"After modifying the pipeline and task templates, commit and push the changes to the Git repository. Use the following commands to commit and push the changes:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'git add .\ngit commit -m "Add custom task and pipeline templates"\ngit push origin main\n'})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"deliver-custom-tekton-pipelines-to-the-cluster",children:"Deliver Custom Tekton Pipelines to the Cluster"}),"\n",(0,i.jsxs)(n.p,{children:["To deploy custom pipelines to the cluster, you can use Argo CD, which includes a repository with ",(0,i.jsx)(n.a,{href:"https://github.com/epam/edp-cluster-add-ons/tree/main",children:"add-ons"}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["Before proceeding, ensure you have added Add-Ons repository and application according to the ",(0,i.jsx)(n.a,{href:"/docs/next/operator-guide/add-ons-overview",children:"Install via Add-Ons"})," page."]})}),"\n",(0,i.jsx)(n.p,{children:"To deliver custom Tekton pipelines to the cluster, follow these steps:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Clone the private repository with add-ons and make the following changes. In the ",(0,i.jsx)(n.code,{children:"clusters/core/apps/values.yaml"})," file, set the ",(0,i.jsx)(n.code,{children:"repoUrl"})," and ",(0,i.jsx)(n.code,{children:"namespace"})," fields to specify the Git URL of the ",(0,i.jsx)(n.code,{children:"tekton-custom-pipelines"})," repository and the namespace where the KubeRocketCI platform is deployed. Also, set the ",(0,i.jsx)(n.code,{children:"kuberocketci-pipelines.enabled"})," field to ",(0,i.jsx)(n.code,{children:"true"})," to enable the deployment of the ",(0,i.jsx)(n.code,{children:"tekton-custom-pipelines"})," Argo CD Application:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"kuberocketci-pipelines:\n  enable: true\n  namespace: <krci-namespace>\n  repoUrl: ssh://git@github.com:22/<account-name>/tekton-custom-pipelines.git\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Commit and push the changes to the repository."}),"\n",(0,i.jsx)(n.p,{children:"After making the necessary changes, commit and push the changes to the repository. Use the following commands to commit and push the changes:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'git add .\ngit commit -m "Enable custom Tekton pipelines deployment"\ngit push origin main\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["After pushing the changes, access ",(0,i.jsx)(n.strong,{children:"Argo CD"}),", navigate to the Application that corresponds to the repository with the ",(0,i.jsx)(n.strong,{children:"add-ons"}),", and initiate the ",(0,i.jsx)(n.code,{children:"Sync"})," process. This will apply the ",(0,i.jsx)(n.code,{children:"tekton-custom-pipelines"})," Helm Chart to the cluster within the specified namespace."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Argo CD Sync",src:s(82091).A+"",title:"Argo CD Sync",width:"3364",height:"1660"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"replace-existing-pipelines-for-components-with-custom-pipelines",children:"Replace Existing Pipelines for Components With Custom Pipelines"}),"\n",(0,i.jsx)(n.p,{children:"This section demonstrates how to replace existing build, review, deploy, and clean pipelines with custom pipelines in KubeRocketCI. Two cases are covered: replacing build and review pipelines for a created component, and replacing deploy and clean pipelines for an existing deployment flow."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"To replace existing review or build pipelines for a component with custom pipelines, follow these steps:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Open the KubeRocketCI portal. Navigate to the ",(0,i.jsx)(n.strong,{children:"Components"})," tab and select the component for which you want to replace the build or review pipeline:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Component",src:s(33361).A+"",title:"Component",width:"3364",height:"1660"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.strong,{children:"Branches"})," tab, select the branch for which you want to replace the pipeline. Click the three dots (",(0,i.jsx)(n.strong,{children:"\u22ee"}),") menu and click ",(0,i.jsx)(n.strong,{children:"Edit"}),":"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Edit Branch",src:s(6160).A+"",title:"Edit Branch",width:"3364",height:"1660"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.strong,{children:"Edit branch"})," dialog, select the required build or review pipeline from the dropdown list:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Select Pipeline",src:s(96602).A+"",title:"Select Pipeline",width:"3333",height:"1660"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"To replace existing deploy or clean pipelines for a deployment flow with custom pipelines, follow these steps:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Open the KubeRocketCI portal. Navigate to the ",(0,i.jsx)(n.strong,{children:"Deployment Flows"})," tab and select the deployment flow for which you want to replace the deploy or clean pipeline:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Deployment Flow",src:s(97047).A+"",title:"Deployment Flow",width:"3364",height:"1660"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Choose the required Environment:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Environment",src:s(63462).A+"",title:"Environment",width:"3364",height:"1660"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.strong,{children:"Edit Environment"})," dialog, select the required deploy or clean pipeline from the dropdown list:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Select Pipeline",src:s(8204).A+"",title:"Select Pipeline",width:"3364",height:"1660"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/next/operator-guide/ci/tekton-overview",children:"Tekton Overview"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/next/user-guide/add-application",children:"Add Application using KubeRocketCI Portal"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/next/user-guide/add-cd-pipeline",children:"Add Deployment Flow using KubeRocketCI Portal"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/next/quick-start/integrate-argocd",children:"Argo CD Overview"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/next/operator-guide/add-ons-overview",children:"Cluster Add-Ons Overview"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},64013:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/advanced-settings-120cadff0c787a43d6d8b6a0fab1a0aa.png"},82091:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/argocd-sync-08ec758debc26703520580ddb00b5332.png"},20625:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/clone-repository-6b4a3996951b2c35d07327865f3b918b.png"},85811:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/component-info-6bbe1e3e0b6eb0d736025cff73d62874.png"},96415:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/component-type-ea02c99fc0f72157509adc75ec8892d1.png"},8204:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/custom-deploy-clean-pipelines-172bf6b376c28d8b9d597e8a219838c8.png"},97047:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/deployment-flow-44cf42aa452d35e0efa5d58fc12ab18c.png"},6160:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/edit-branch-c174315d547be329a03b6b760bf2f6a9.png"},63462:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/environment-32654a1187c344313099e1bb989f251e.png"},32107:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/file-structure-6865aa5d8f60b66ae3c83bdf10d73ad1.png"},32292:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/git-repository-e346510595eaf91e38684db98ccc1a75.png"},33361:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/java-app-component-66c6280b8968dc3a21b9393db8494dcf.png"},96602:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/select-pipeline-80ce55f7964de1484f32e2df25083296.png"},66733:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/strategy-type-016fa1a2aaf38ee5ea0c8fa9c15cd6be.png"},43076:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/tekton-library-994f54ba576a8af07fdc55456ba2858b.png"},32429:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/account-settings-b046669a64b4edeea216c09d6bd97390.png"},79825:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/login-847da373e3eb52fd46ac9274e082515a.png"},8975:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/settings-167d7c8c82db722ba4122b5960b5280a.png"},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>r});var t=s(96540);const i={},l=t.createContext(i);function o(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);