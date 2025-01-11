"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[66995],{86466:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>p});const i=JSON.parse('{"id":"operator-guide/cd/manual-approval","title":"Manual Approval in Pipelines","description":"The manual approval feature gives users a smooth and controlled process of promoting applications from lower, non-critical environments, such as development or QA, to mission-critical environments like production. Additionally, it ensures that only thoroughly tested and verified changes are deployed to production, minimizing the risk of causing errors or instability.","source":"@site/docs/operator-guide/cd/manual-approval.md","sourceDirName":"operator-guide/cd","slug":"/operator-guide/cd/manual-approval","permalink":"/docs/next/operator-guide/cd/manual-approval","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/operator-guide/cd/manual-approval.md","tags":[],"version":"current","lastUpdatedBy":"Oleksandr_Stepanov@epam.com","lastUpdatedAt":1731485439000,"frontMatter":{},"sidebar":"operatorGuideSidebar","previous":{"title":"Customize Environment Cleanup","permalink":"/docs/next/operator-guide/cd/customize-environment-deletion"},"next":{"title":"Deploy RPM Packages","permalink":"/docs/next/operator-guide/cd/deploy-rpm"}}');var a=t(74848),o=t(28453);const s={},l="Manual Approval in Pipelines",r={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Enable Pipeline With Manual Approval",id:"enable-pipeline-with-manual-approval",level:2},{value:"New Environments",id:"new-environments",level:3},{value:"Existing Environments",id:"existing-environments",level:3},{value:"Approve/Reject Deployment",id:"approvereject-deployment",level:2},{value:"Create Pipeline With Approval Task",id:"create-pipeline-with-approval-task",level:2},{value:"Related Articles",id:"related-articles",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"manual-approval-in-pipelines",children:"Manual Approval in Pipelines"})}),"\n",(0,a.jsx)(n.p,{children:"The manual approval feature gives users a smooth and controlled process of promoting applications from lower, non-critical environments, such as development or QA, to mission-critical environments like production. Additionally, it ensures that only thoroughly tested and verified changes are deployed to production, minimizing the risk of causing errors or instability."}),"\n",(0,a.jsxs)(n.p,{children:["Manual approval, at its simplest, is an integrable Tekton ",(0,a.jsx)(n.a,{href:"https://github.com/epam/edp-tekton/blob/v0.13.0/charts/pipelines-library/templates/pipelines/cd/deploy-with-approve.yaml#L61",children:"task"})," that can be integrated into common Tekton pipelines. Its purpose is to pause pipeline execution until a user approves or rejects the task."]}),"\n",(0,a.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,a.jsxs)(n.p,{children:["Please note that using the approval task requires you to install the ",(0,a.jsx)(n.a,{href:"https://github.com/KubeRocketCI/tekton-custom-task/tree/main",children:"tekton-custom-task"})," Helm chart."]}),"\n",(0,a.jsx)(n.h2,{id:"enable-pipeline-with-manual-approval",children:"Enable Pipeline With Manual Approval"}),"\n",(0,a.jsxs)(n.p,{children:["KubeRocketCI offers a pre-defined deploy pipeline called ",(0,a.jsx)(n.strong,{children:"deploy-with-approve"}),". It contains an approval task and can be used for most application deployment cases. If you leverage the default deploy pipeline, you can easily switch it to ",(0,a.jsx)(n.strong,{children:"deploy-with-approve"}),". You can apply this pipeline to both existing and new environments."]}),"\n",(0,a.jsx)(n.h3,{id:"new-environments",children:"New Environments"}),"\n",(0,a.jsxs)(n.p,{children:["To apply the ",(0,a.jsx)(n.strong,{children:"deploy-with-approve"})," pipeline template to your environments, follow the steps below:"]}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["In the deployment flow details page, click the ",(0,a.jsx)(n.strong,{children:"Create environment"})," button:"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Create environment button",src:t(76786).A+"",title:"Create environment button",width:"1922",height:"1114"})}),"\n",(0,a.jsxs)(n.ol,{start:"2",children:["\n",(0,a.jsxs)(n.li,{children:["In the ",(0,a.jsx)(n.strong,{children:"Create environment"})," window, select the ",(0,a.jsx)(n.strong,{children:"deploy-with-approve"})," pipeline:"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Select pipeline with approval",src:t(9316).A+"",title:"Select pipeline with approval",width:"1922",height:"1114"})}),"\n",(0,a.jsx)(n.h3,{id:"existing-environments",children:"Existing Environments"}),"\n",(0,a.jsx)(n.p,{children:"If you need to change the default deploy pipeline template in an already existing environment, follow the steps below:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Navigate to the environment details page and click the ",(0,a.jsx)(n.strong,{children:"Edit"})," button:"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Edit environment button",src:t(13274).A+"",title:"Edit environment button",width:"1922",height:"1114"})}),"\n",(0,a.jsxs)(n.ol,{start:"2",children:["\n",(0,a.jsxs)(n.li,{children:["In the ",(0,a.jsx)(n.strong,{children:"Edit environment"})," window, select another deploy pipeline:"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Select pipeline with approval",src:t(63967).A+"",title:"Select pipeline with approval",width:"1922",height:"1114"})}),"\n",(0,a.jsx)(n.h2,{id:"approvereject-deployment",children:"Approve/Reject Deployment"}),"\n",(0,a.jsx)(n.p,{children:"Once the deploy pipeline has been launched and reached the approval step, you will see a corresponding notification on the pipeline details page:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Approve step",src:t(90281).A+"",title:"Approve step",width:"1922",height:"1114"})}),"\n",(0,a.jsx)(n.p,{children:"If the approval is rejected, the pipeline status will be failed:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Manual approve rejected",src:t(88456).A+"",title:"Manual approve rejected",width:"1514",height:"859"})}),"\n",(0,a.jsxs)(n.p,{children:["If you don\u2019t make a selection within the pipeline processing time, which is ",(0,a.jsx)(n.strong,{children:"60 minutes"})," by default, you\u2019ll see a crossed clock icon as the task run status, indicating that the pipeline has timed out:"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Approval timed out",src:t(37049).A+"",title:"Approval timed out",width:"1514",height:"859"})}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["You can set a custom timeout duration in the relevant ",(0,a.jsx)(n.a,{href:"https://github.com/epam/edp-tekton/blob/v0.13.0/charts/pipelines-library/templates/triggers/cd/deploy-with-approve.yaml#L46",children:"TriggerTemplate"}),"."]})}),"\n",(0,a.jsxs)(n.p,{children:["If you choose the ",(0,a.jsx)(n.strong,{children:"Approve"})," option, the pipeline will proceed running:"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Pipeline approved",src:t(60303).A+"",title:"Pipeline approved",width:"1922",height:"1114"})}),"\n",(0,a.jsx)(n.h2,{id:"create-pipeline-with-approval-task",children:"Create Pipeline With Approval Task"}),"\n",(0,a.jsx)(n.p,{children:"The custom deploy pipeline usage flow involves the following steps:"}),"\n",(0,a.jsx)(n.mermaid,{value:"graph LR;\n    A(Create TriggerTemplate resource) --\x3e B(Create Pipeline resource) --\x3e C(Apply changes to environment) --\x3e D(Run deploy pipeline) --\x3e E(Approve/reject deployment)"}),"\n",(0,a.jsx)(n.p,{children:"To create a deploy pipeline with a manual approval task, follow the steps below:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Create and apply the ",(0,a.jsx)(n.strong,{children:"TriggerTemplate"})," custom resource. Refer to the example ",(0,a.jsx)(n.a,{href:"https://github.com/epam/edp-tekton/blob/v0.13.0/charts/pipelines-library/templates/triggers/cd/deploy-with-approve.yaml",children:"TriggerTemplate"}),". Make sure to specify the correct pipeline type in the labels and provide the pipeline reference in the specifications:"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"...\nlabels:\n    app.edp.epam.com/pipelinetype: deploy\n...\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"...\nspec:\n  taskRunTemplate:\n    serviceAccountName: tekton\n  pipelineRef:\n    name: deploy-with-promote-approval\n...\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"2",children:["\n",(0,a.jsxs)(n.li,{children:["Create and apply the ",(0,a.jsx)(n.strong,{children:"Pipeline"})," custom resource. Refer to the example ",(0,a.jsx)(n.a,{href:"https://github.com/epam/edp-tekton/blob/v0.13.0/charts/pipelines-library/templates/pipelines/cd/deploy-with-approve.yaml",children:"Pipeline"}),". Ensure you set the concrete approval task to run:"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"- name: approve\n  params:\n    - name: description\n      value: Promote versions to the next Environment?\n  runAfter:\n    - deploy-app\n  taskRef:\n    apiVersion: edp.epam.com/v1alpha1s\n    kind: ApprovalTask\n    name: approve\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"3",children:["\n",(0,a.jsxs)(n.li,{children:["When ",(0,a.jsx)(n.a,{href:"#new-environments",children:"creating"})," or ",(0,a.jsx)(n.a,{href:"#existing-environments",children:"modifying"})," the deploy pipeline, select your newly added custom deploy pipeline."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/docs/next/operator-guide/cd/customize-environment-deletion",children:"Customize Environment Cleanup"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/docs/next/operator-guide/cd/customize-deploy-pipeline",children:"Customize Deploy Pipeline"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/docs/next/user-guide/add-cd-pipeline",children:"Add Deployment Flow"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/docs/next/user-guide/manage-environments",children:"Manage Deployment Flows"})}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},90281:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/approve_step-bb87941422a78f89bd21c16563a2a5a8.png"},76786:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/create-environment-button-deploy-da15774c14be97560bcfa9e64c13827a.png"},9316:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/custom-approve-pipeline1-65f21cb0994624ce3214eaaa5bd0dc4a.png"},63967:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/custom-approve-pipeline2-128db570171f7620afcfd1d898c72199.png"},13274:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/edit-environment-button-deploy-dee27802ddeda8a5cc5508ed05599eb3.png"},60303:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/manual_approve_approved-42e2bdfd42d35b8fce1e10e4e1fb9f56.png"},88456:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/manual_approve_rejected-8c2c32ac12bd7cf8eafb8d630cde396a.png"},37049:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/manual_approve_timeout-e5664a215e0b95444d642ce2f2f5dd73.png"},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>l});var i=t(96540);const a={},o=i.createContext(a);function s(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);