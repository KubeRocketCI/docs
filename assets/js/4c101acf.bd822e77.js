"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9070],{5221:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>a});var i=n(74848),s=n(28453);const r={},l="Customize Deploy Pipeline",o={id:"operator-guide/cd/customize-deploy-pipeline",title:"Customize Deploy Pipeline",description:"When deploying applications into environments, it's important to automate both pre-deployment and post-deployment steps.",source:"@site/docs/operator-guide/cd/customize-deploy-pipeline.md",sourceDirName:"operator-guide/cd",slug:"/operator-guide/cd/customize-deploy-pipeline",permalink:"/docs/next/operator-guide/cd/customize-deploy-pipeline",draft:!1,unlisted:!1,editUrl:"https://github.com/KubeRocketCI/docs/edit/main/docs/operator-guide/cd/customize-deploy-pipeline.md",tags:[],version:"current",lastUpdatedBy:"Sergiy Kulanov",lastUpdatedAt:1719409518e3,frontMatter:{},sidebar:"operatorGuideSidebar",previous:{title:"CI Pipeline for Terraform",permalink:"/docs/next/operator-guide/ci/ci-pipeline-terraform"},next:{title:"Customize Environment Cleanup",permalink:"/docs/next/operator-guide/cd/customize-environment-deletion"}},c={},a=[{value:"Deploy Custom Pipeline",id:"deploy-custom-pipeline",level:2},{value:"Related Articles",id:"related-articles",level:2}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"customize-deploy-pipeline",children:"Customize Deploy Pipeline"})}),"\n",(0,i.jsxs)(t.p,{children:["When deploying applications into environments, it's important to automate both ",(0,i.jsx)(t.code,{children:"pre-deployment"})," and ",(0,i.jsx)(t.code,{children:"post-deployment"})," steps."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"Pre-deployment"})," procedures include essential tasks such as deploying databases, configuring specific software, and preparing the environment. Additionally, ",(0,i.jsx)(t.code,{children:"post-deployment"})," procedures, such as testing, configuring, and removing old information from the environment, are crucial for ensuring the smooth operation of the deployed application. To facilitate these processes, the custom deployment feature is implemented in KubeRocketCI."]}),"\n",(0,i.jsx)(t.p,{children:"This page provides comprehensive guidelines on how to adjust the deployment logic to cater your needs."}),"\n",(0,i.jsx)(t.h2,{id:"deploy-custom-pipeline",children:"Deploy Custom Pipeline"}),"\n",(0,i.jsx)(t.p,{children:"Overall, the custom pipeline creation involves the following steps:"}),"\n",(0,i.jsx)(t.mermaid,{value:"graph LR;\n    A(Create TriggerTemplate resource) --\x3e B(Create Pipeline resource) --\x3e C(Deploy custom environment)"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Create TriggerTemplate resource"})," -  On this step, create the ",(0,i.jsx)(t.code,{children:"TriggerTemplate"})," custom resource that will appear as an option in the in the environment stage creation menu."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Create Pipeline"})," - On this step, create custom resource called ",(0,i.jsx)(t.code,{children:"Pipeline"})," that complements the trigger template. This resource contains all the tasks to perform within the custom pipeline."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Integration"})," - On this step, you simply select your custom pipeline logic when creating a stage for your environment."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"To customize your deployment pipeline, follow the steps below:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Create the ",(0,i.jsx)(t.code,{children:"TriggerTemplate"})," custom resource by adding the following label:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"labels:\n    app.edp.epam.com/pipelinetype: deploy\n"})}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["Please refer to the ",(0,i.jsx)(t.code,{children:"TriggerTemplate"})," ",(0,i.jsx)(t.a,{href:"https://github.com/epam/edp-tekton/blob/release/0.12/charts/pipelines-library/templates/triggers/cd/deploy.yaml",children:"example"})," for more details. Remember to set your pipeline name in the ",(0,i.jsx)(t.code,{children:"spec.resourcetemplates.spec.pipelineRef.name"})," ",(0,i.jsx)(t.a,{href:"https://github.com/epam/edp-tekton/blob/release/0.12/charts/pipelines-library/templates/triggers/cd/deploy.yaml#L35",children:"parameter"}),"."]})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Create the custom pipeline with your custom logic. Refer to the custom pipeline ",(0,i.jsx)(t.a,{href:"https://github.com/epam/edp-tekton/blob/release/0.12/charts/pipelines-library/templates/triggers/cd/deploy.yaml",children:"example"})," for more details."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Apply the created manifest files in the platform namespace (e.g., ",(0,i.jsx)(t.code,{children:"edp"}),")."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["On the ",(0,i.jsx)(t.code,{children:"Create stage"})," step on the KubeRocketCI portal, select the added trigger template in the ",(0,i.jsx)(t.code,{children:"Pipeline template"})," section:"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Select trigger template",src:n(17863).A+"",title:"Select trigger template",width:"3364",height:"1662"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"(Optional) In case you need to implement custom deployment in a remote cluster, do the following:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Connect the KubeRocketCI platform with the remote cluster if it is not integrated yet. Please refer to the ",(0,i.jsx)(t.a,{href:"/docs/next/user-guide/add-cluster",children:"Add Cluster"})," page for more details;"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Mount the secret to the ",(0,i.jsx)(t.code,{children:"run-quality-gate"})," resource by changing the ",(0,i.jsx)(t.a,{href:"https://github.com/epam/edp-tekton/blob/master/charts/pipelines-library/templates/tasks/run-quality-gate.yaml#L19",children:"volumes"})," and ",(0,i.jsx)(t.a,{href:"https://github.com/epam/edp-tekton/blob/master/charts/pipelines-library/templates/tasks/run-quality-gate.yaml#L27",children:"volumeMounts"})," sections;"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Switch the ",(0,i.jsx)(t.a,{href:"https://github.com/epam/edp-tekton/blob/master/charts/pipelines-library/templates/tasks/run-quality-gate.yaml#L32",children:"context"})," by specifying the appropriate kube config file of the ",(0,i.jsx)(t.code,{children:"run-quality-gate"})," resource;"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["On the ",(0,i.jsx)(t.code,{children:"Create stage"})," step on the KubeRocketCI portal, select the appropriate cluster in the ",(0,i.jsx)(t.code,{children:"cluster"})," section:"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Select cluster",src:n(19863).A+"",title:"Select cluster",width:"3364",height:"1662"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/next/user-guide/add-cluster",children:"Add Cluster"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/next/use-cases/tekton-custom-pipelines",children:"Deploy Application With Custom Build Tool/Framework"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/next/user-guide/add-cd-pipeline",children:"Add Environment"})}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},17863:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/select_trigger_template-1dae0c2841b88184ffbd3e07edabdfa8.png"},19863:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/select-cluster-c5a1b212914c6fa2cbb180ff86032e3d.png"},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>o});var i=n(96540);const s={},r=i.createContext(s);function l(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);