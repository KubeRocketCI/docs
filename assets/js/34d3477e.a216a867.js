"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[13718],{48484:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"user-guide/add-cd-pipeline","title":"Add Deployment Flow","description":"Learn how to establish Deployment Flows in KubeRocketCI for streamlined GitOps, automated deployment, and efficient multi-environment management.","source":"@site/docs/user-guide/add-cd-pipeline.md","sourceDirName":"user-guide","slug":"/user-guide/add-cd-pipeline","permalink":"/docs/next/user-guide/add-cd-pipeline","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/user-guide/add-cd-pipeline.md","tags":[],"version":"current","lastUpdatedBy":"Oleksandr_Stepanov@epam.com","lastUpdatedAt":1739954692000,"frontMatter":{"title":"Add Deployment Flow","sidebar_label":"Add Deployment Flow","description":"Learn how to establish Deployment Flows in KubeRocketCI for streamlined GitOps, automated deployment, and efficient multi-environment management."},"sidebar":"userGuideSidebar","previous":{"title":"Manage Branches","permalink":"/docs/next/user-guide/manage-branches"},"next":{"title":"Manage Deployment Flows","permalink":"/docs/next/user-guide/manage-environments"}}');var s=t(74848),l=t(28453);const o={title:"Add Deployment Flow",sidebar_label:"Add Deployment Flow",description:"Learn how to establish Deployment Flows in KubeRocketCI for streamlined GitOps, automated deployment, and efficient multi-environment management."},r="Add Deployment Flow",a={},d=[{value:"Create Deployment Flow",id:"create-deployment-flow",level:2},{value:"The Deployment Flow Menu",id:"the-deployment-flow-menu",level:3},{value:"The Environments Menu",id:"the-environments-menu",level:3},{value:"Create Deployment Flow in YAML",id:"create-deployment-flow-in-yaml",level:2},{value:"Related Articles",id:"related-articles",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,l.R)(),...e.components},{Head:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"add-deployment-flow",children:"Add Deployment Flow"})}),"\n",(0,s.jsx)(i,{children:(0,s.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/user-guide/add-cd-pipeline/"})}),"\n",(0,s.jsx)(n.p,{children:"In KubeRocketCI, deployments are managed through Deployment Flows, a versatile mechanism that enables GitOps, automated deploy, promotion within pipelines, and multi-environment support."}),"\n",(0,s.jsxs)(n.p,{children:["Navigate to the ",(0,s.jsx)(n.strong,{children:"Deployment flows"})," section on the navigation bar and click ",(0,s.jsx)(n.strong,{children:"+ Create deployment flow"}),". Once clicked, the ",(0,s.jsx)(n.strong,{children:"Create deployment flow"})," dialog will appear."]}),"\n",(0,s.jsxs)(n.p,{children:["The creation of the Deployment Flow becomes available as soon as an application is created including its provisioning\nin a branch and the necessary entities for the Deployment Flow. You can create a Deployment Flow ",(0,s.jsx)(n.a,{href:"#create-deployment-flow-in-yaml",children:"in YAML"})," or ",(0,s.jsx)(n.a,{href:"#create-deployment-flow",children:"via the two-steps menu"})," in the dialog."]}),"\n",(0,s.jsx)(n.h2,{id:"create-deployment-flow",children:"Create Deployment Flow"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"Create Deployment Flow"})," dialog contains the two steps:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.strong,{children:"Enter name"})," step"]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.strong,{children:"Add applications"})," step"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"the-deployment-flow-menu",children:"The Deployment Flow Menu"}),"\n",(0,s.jsxs)(n.p,{children:["Before proceeding, ensure to familiarize yourself with the ",(0,s.jsx)(n.a,{href:"/docs/next/user-guide/gitops",children:"Manage GitOps"})," page as it is required to add a GitOps repository first before creating an environment:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Add GitOps repository",src:t(37762).A+"",title:"Add GitOps repository",width:"1920",height:"1109"})}),"\n",(0,s.jsx)(n.p,{children:"To create a deployment flow, follow the steps below:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Navigate to the ",(0,s.jsx)(n.strong,{children:"Deployment Flows"})," tab and click the ",(0,s.jsx)(n.strong,{children:"+ Create Deployment Flow"})," button:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Deployment Flows menu",src:t(95882).A+"",title:"Deployment Flows menu",width:"1919",height:"1110"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"Enter name"})," tab of the ",(0,s.jsx)(n.strong,{children:"Create Deployment Flow"})," window is presented below:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Create CD pipeline",src:t(97784).A+"",title:"Create CD pipeline",width:"1918",height:"1111"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Enter the deployment flow name that will be displayed in the Deployment Flows list. Enter at least two characters, use the lower-case letters, numbers, and dashes."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click the ",(0,s.jsx)(n.strong,{children:"Next"})," button to move onto the ",(0,s.jsx)(n.strong,{children:"Add applications"})," tab."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["The namespace created by the environment has the following pattern combination: ",(0,s.jsx)(n.strong,{children:"[KubeRocketCI namespace]-[environment name]-[stage name]"}),".\nPlease be aware that the namespace length should not exceed 63 symbols."]})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"Component"})," tab of the ",(0,s.jsx)(n.strong,{children:"Environments"})," menu is presented below:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Environment applications",src:t(81444).A+"",title:"Environment applications",width:"1919",height:"1112"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Select the necessary application from the ",(0,s.jsx)(n.strong,{children:"Mapping field name"})," drop-down menu and click by it name."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Specify the application parameters:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Branch"})," - Select the application branch from the drop-down menu."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Promote in pipeline"})," - Select the this check box in order to transfer the application from one to another stage\nby the specified codebase branch. If the ",(0,s.jsx)(n.strong,{children:"Promote in pipeline"})," check box is not selected,\nthe same codebase stream will be deployed regardless of the stage, i.e. the codebase stream input,\nwhich was selected for the pipeline, will always be used."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["If there is another deployed environment stage with the respective codebase stream (equal image stream as an OpenShift term), the pattern combination will be as follows: ",(0,s.jsx)(n.code,{children:"[pipeline name]-[stage name]-[application name]-[verified]"}),"."]})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click the ",(0,s.jsx)(n.strong,{children:"Create"})," button to finish deployment flow configuration and proceed with configuring environment."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Adding stage",src:t(80938).A+"",title:"Adding stage",width:"1917",height:"1112"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"the-environments-menu",children:"The Environments Menu"}),"\n",(0,s.jsx)(n.p,{children:"Stages are created the following way:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["On the ",(0,s.jsx)(n.strong,{children:"Environments"})," menu, click the ",(0,s.jsx)(n.strong,{children:"Create Environment"})," button and fill in the necessary fields in the corresponding window:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"CD stages",src:t(33374).A+"",title:"CD stages",width:"1919",height:"1111"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"Configure Stage"})," tab of the ",(0,s.jsx)(n.strong,{children:"Create Stage"})," menu is presented below:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"CD stages",src:t(69016).A+"",title:"CD stages",width:"1918",height:"1111"})}),"\n",(0,s.jsx)(n.p,{children:"Set the proper cluster options:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Cluster"})," - Choose the cluster to deploy the stage in;"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Stage name"})," - Enter the stage name;"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Namespace"})," - Specify the Kubernetes namespace where the resources will be deployed in. By default, this field is pre-populated automatically but keep in mind that the namespace name must be no longer than 63 symbols;"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Description"})," - Enter the description for this stage;"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Trigger type"})," - Select the trigger type. The key benefit of the automatic deploy feature is to keep environments up-to-date. The available trigger types are ",(0,s.jsx)(n.em,{children:"Manual"})," and ",(0,s.jsx)(n.em,{children:"Auto"}),". When the ",(0,s.jsx)(n.em,{children:"Auto"})," trigger type is chosen, the environment will initiate automatically once the image is built. ",(0,s.jsx)(n.em,{children:"Manual"})," implies that user has to perform deploy manually by clicking the ",(0,s.jsx)(n.strong,{children:"Deploy"})," button in the environment menu. Please refer to the ",(0,s.jsx)(n.a,{href:"https://github.com/epam/edp-cd-pipeline-operator/blob/master/docs/arch.md",children:"Architecture Scheme of CD Pipeline Operator"})," page for additional details."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Pipeline template"})," - Choose a predefined blueprint outlining the deployment process for your application. While you have the option to incorporate custom deployment templates by generating a resource of the PipelineTemplate category, you can also opt for one of the preexisting options: with autotests or without."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Clean Pipeline template"})," - Choose one of the pre-defined pipelines offered by KubeRocketCI to define the cleanup logic. In case if you have specific requirements to the environment cleanup procedure, you can make up your own cleanup pipeline to use, which will be added to the ",(0,s.jsx)(n.strong,{children:"Clean Pipeline template"})," drop-down list."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click the ",(0,s.jsx)(n.strong,{children:"Next"})," button to move onto the ",(0,s.jsx)(n.strong,{children:"Add quality gates"})," tab:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Add quality gates menu",src:t(50433).A+"",title:"Add quality gates menu",width:"1918",height:"1112"})}),"\n",(0,s.jsx)(n.p,{children:"Select the quality gate options:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Quality gate type"})," - Select the quality gate type:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Manual - means that the promoting process should be confirmed in Tekton manually;"}),"\n",(0,s.jsx)(n.li,{children:"Autotests - means that the promoting process should be confirmed by the successful passing of the autotests.;"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Step name"})," - Type the step name, which will be displayed in Tekton, for every quality gate;"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Autotest"})," - Select the previously created ",(0,s.jsx)(n.a,{href:"/docs/next/user-guide/add-autotest",children:"autotest"})," name;"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Autotest branch"})," - Specify a branch for the autotest."]}),"\n",(0,s.jsx)(n.admonition,{title:"Execution sequence",type:"info",children:(0,s.jsx)(n.p,{children:"The image promotion and execution of the pipelines depend on the sequence in which the environments are added."})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click the ",(0,s.jsx)(n.strong,{children:"Create"})," button to start the provisioning of the pipeline:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Adding stage",src:t(5591).A+"",title:"Adding stage",width:"1916",height:"1108"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"As a result, a new environment will be created in the environments list."}),"\n",(0,s.jsx)(n.h2,{id:"create-deployment-flow-in-yaml",children:"Create Deployment Flow in YAML"}),"\n",(0,s.jsxs)(n.p,{children:["Click ",(0,s.jsx)(n.strong,{children:"Edit YAML"})," in the upper-right corner of the ",(0,s.jsx)(n.strong,{children:"Create CD Pipeline"})," dialog to open the YAML editor and create a deployment flow:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Edit YAML",src:t(82680).A+"",title:"Edit YAML",width:"1919",height:"1111"})}),"\n",(0,s.jsx)(n.p,{children:"Type you pipeline configuration in the YAML format:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Deployment flow in YAML",src:t(23595).A+"",title:"Deployment flow in YAML",width:"1918",height:"1113"})}),"\n",(0,s.jsxs)(n.p,{children:["To edit YAML in the minimal editor, turn on the ",(0,s.jsx)(n.strong,{children:"Use minimal editor"})," toggle in the upper-right corner of the ",(0,s.jsx)(n.strong,{children:"Create CD Pipeline"})," dialog."]}),"\n",(0,s.jsxs)(n.p,{children:["To save the changes, select the ",(0,s.jsx)(n.strong,{children:"Save & Apply"})," button."]}),"\n",(0,s.jsx)(n.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/next/user-guide/manage-environments",children:"Manage Deployment Flows"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/next/user-guide/add-quality-gate",children:"Add Quality Gate"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},37762:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/add-gitops-repo-1dfb288c07cdb9e9f0b6c4b6e4f389db.png"},82680:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/deployment-flow-edit-yaml-ddd90e2846d494d1664532b22540580e.png"},50433:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/edp-portal-cd-adding-stage1-797d69a0ce9d79a081f30c36430d1416.png"},33374:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/edp-portal-cd-pipeline-add-stages-090598e2cb5a1df1d7322a54bf352404.png"},81444:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/edp-portal-cd-pipeline-applications-2455d0ace2763190a257a28b1f7c1412.png"},69016:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/edp-portal-cd-pipeline-stages-7a0816446400ce12282b5714f5f30d49.png"},95882:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/edp-portal-create-new-pipeline-a2184e4b46b7b87edb067fa6bb6ad11e.png"},80938:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/edp-portal-environment-final-e3f71b53f4ac163ebd2bddcf109128ab.png"},97784:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/edp-portal-pipeline-menu-71aa6cdde27bf2e9aafa8d9622c234a5.png"},5591:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/edp-portal-stage-final-ecd06b81355e991cf7764d3e0b64fe84.png"},23595:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/edp-portal-yaml-editor-30031abe51d68d5b2057d716c7f7e32b.png"},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>r});var i=t(96540);const s={},l=i.createContext(s);function o(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);