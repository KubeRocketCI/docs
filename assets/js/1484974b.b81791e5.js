"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[7142],{66578:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>p,default:()=>c,frontMatter:()=>l,metadata:()=>t,toc:()=>s});const t=JSON.parse('{"id":"operator-guide/cd/manual-approval","title":"Manual Approval in Pipelines","description":"Guide on implementing manual approval in deploy pipelines within KubeRocketCI, ensuring controlled promotion of applications to critical environments.","source":"@site/versioned_docs/version-3.10/operator-guide/cd/manual-approval.md","sourceDirName":"operator-guide/cd","slug":"/operator-guide/cd/manual-approval","permalink":"/docs/3.10/operator-guide/cd/manual-approval","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/operator-guide/cd/manual-approval.md","tags":[],"version":"3.10","lastUpdatedBy":"Sergiy Kulanov","lastUpdatedAt":1740847812000,"frontMatter":{"title":"Manual Approval in Pipelines","description":"Guide on implementing manual approval in deploy pipelines within KubeRocketCI, ensuring controlled promotion of applications to critical environments.","sidebar_label":"Manual Approval in Pipelines"},"sidebar":"operatorGuideSidebar","previous":{"title":"Customize Environment Cleanup","permalink":"/docs/3.10/operator-guide/cd/customize-environment-deletion"},"next":{"title":"Deploy RPM Packages","permalink":"/docs/3.10/operator-guide/cd/deploy-rpm"}}');var o=i(74848),a=i(28453);const l={title:"Manual Approval in Pipelines",description:"Guide on implementing manual approval in deploy pipelines within KubeRocketCI, ensuring controlled promotion of applications to critical environments.",sidebar_label:"Manual Approval in Pipelines"},p="Manual Approval in Pipelines",r={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Enable Pipeline With Manual Approval",id:"enable-pipeline-with-manual-approval",level:2},{value:"New Environments",id:"new-environments",level:3},{value:"Existing Environments",id:"existing-environments",level:3},{value:"Approve/Reject Deployment",id:"approvereject-deployment",level:2},{value:"Create Pipeline With Approval Task",id:"create-pipeline-with-approval-task",level:2},{value:"Related Articles",id:"related-articles",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components},{Head:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"manual-approval-in-pipelines",children:"Manual Approval in Pipelines"})}),"\n",(0,o.jsx)(t,{children:(0,o.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/operator-guide/cd/manual-approval"})}),"\n",(0,o.jsx)(n.p,{children:"The manual approval feature gives users a smooth and controlled process of promoting applications from lower, non-critical environments, such as development or QA, to mission-critical environments like production. Additionally, it ensures that only thoroughly tested and verified changes are deployed to production, minimizing the risk of causing errors or instability."}),"\n",(0,o.jsxs)(n.p,{children:["Manual approval, at its simplest, is an integrable Tekton ",(0,o.jsx)(n.a,{href:"https://github.com/epam/edp-tekton/blob/v0.13.0/charts/pipelines-library/templates/pipelines/cd/deploy-with-approve.yaml#L61",children:"task"})," that can be integrated into common Tekton pipelines. Its purpose is to pause pipeline execution until a user approves or rejects the task."]}),"\n",(0,o.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,o.jsxs)(n.p,{children:["Please note that using the approval task requires you to install the ",(0,o.jsx)(n.a,{href:"https://github.com/KubeRocketCI/tekton-custom-task/tree/main",children:"tekton-custom-task"})," Helm chart."]}),"\n",(0,o.jsx)(n.h2,{id:"enable-pipeline-with-manual-approval",children:"Enable Pipeline With Manual Approval"}),"\n",(0,o.jsxs)(n.p,{children:["KubeRocketCI offers a pre-defined deploy pipeline called ",(0,o.jsx)(n.strong,{children:"deploy-with-approve"}),". It contains an approval task and can be used for most application deployment cases. If you leverage the default deploy pipeline, you can easily switch it to ",(0,o.jsx)(n.strong,{children:"deploy-with-approve"}),". You can apply this pipeline to both existing and new environments."]}),"\n",(0,o.jsx)(n.h3,{id:"new-environments",children:"New Environments"}),"\n",(0,o.jsxs)(n.p,{children:["To apply the ",(0,o.jsx)(n.strong,{children:"deploy-with-approve"})," pipeline template to your environments, follow the steps below:"]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["In the deployment flow details page, click the ",(0,o.jsx)(n.strong,{children:"Create environment"})," button:"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Create environment button",src:i(35).A+"",title:"Create environment button",width:"1922",height:"1114"})}),"\n",(0,o.jsxs)(n.ol,{start:"2",children:["\n",(0,o.jsxs)(n.li,{children:["In the ",(0,o.jsx)(n.strong,{children:"Create environment"})," window, select the ",(0,o.jsx)(n.strong,{children:"deploy-with-approve"})," pipeline:"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Select pipeline with approval",src:i(13441).A+"",title:"Select pipeline with approval",width:"1922",height:"1114"})}),"\n",(0,o.jsx)(n.h3,{id:"existing-environments",children:"Existing Environments"}),"\n",(0,o.jsx)(n.p,{children:"If you need to change the default deploy pipeline template in an already existing environment, follow the steps below:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Navigate to the environment details page and click the ",(0,o.jsx)(n.strong,{children:"Edit"})," button:"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Edit environment button",src:i(66191).A+"",title:"Edit environment button",width:"1922",height:"1114"})}),"\n",(0,o.jsxs)(n.ol,{start:"2",children:["\n",(0,o.jsxs)(n.li,{children:["In the ",(0,o.jsx)(n.strong,{children:"Edit environment"})," window, select another deploy pipeline:"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Select pipeline with approval",src:i(64458).A+"",title:"Select pipeline with approval",width:"1922",height:"1114"})}),"\n",(0,o.jsx)(n.h2,{id:"approvereject-deployment",children:"Approve/Reject Deployment"}),"\n",(0,o.jsx)(n.p,{children:"Once the deploy pipeline has been launched and reached the approval step, you will see a corresponding notification on the pipeline details page:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Approve step",src:i(38384).A+"",title:"Approve step",width:"1922",height:"1114"})}),"\n",(0,o.jsx)(n.p,{children:"If the approval is rejected, the pipeline status will be failed:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Manual approve rejected",src:i(95787).A+"",title:"Manual approve rejected",width:"1514",height:"859"})}),"\n",(0,o.jsxs)(n.p,{children:["If you don\u2019t make a selection within the pipeline processing time, which is ",(0,o.jsx)(n.strong,{children:"60 minutes"})," by default, you\u2019ll see a crossed clock icon as the task run status, indicating that the pipeline has timed out:"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Approval timed out",src:i(31052).A+"",title:"Approval timed out",width:"1514",height:"859"})}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["You can set a custom timeout duration in the relevant ",(0,o.jsx)(n.a,{href:"https://github.com/epam/edp-tekton/blob/v0.13.0/charts/pipelines-library/templates/triggers/cd/deploy-with-approve.yaml#L46",children:"TriggerTemplate"}),"."]})}),"\n",(0,o.jsxs)(n.p,{children:["If you choose the ",(0,o.jsx)(n.strong,{children:"Approve"})," option, the pipeline will proceed running:"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Pipeline approved",src:i(56940).A+"",title:"Pipeline approved",width:"1922",height:"1114"})}),"\n",(0,o.jsx)(n.h2,{id:"create-pipeline-with-approval-task",children:"Create Pipeline With Approval Task"}),"\n",(0,o.jsx)(n.p,{children:"The custom deploy pipeline usage flow involves the following steps:"}),"\n",(0,o.jsx)(n.mermaid,{value:"graph LR;\n    A(Create TriggerTemplate resource) --\x3e B(Create Pipeline resource) --\x3e C(Apply changes to environment) --\x3e D(Run deploy pipeline) --\x3e E(Approve/reject deployment)"}),"\n",(0,o.jsx)(n.p,{children:"To create a deploy pipeline with a manual approval task, follow the steps below:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Create and apply the ",(0,o.jsx)(n.strong,{children:"TriggerTemplate"})," custom resource. Refer to the example ",(0,o.jsx)(n.a,{href:"https://github.com/epam/edp-tekton/blob/v0.13.0/charts/pipelines-library/templates/triggers/cd/deploy-with-approve.yaml",children:"TriggerTemplate"}),". Make sure to specify the correct pipeline type in the labels and provide the pipeline reference in the specifications:"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"...\nlabels:\n    app.edp.epam.com/pipelinetype: deploy\n...\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"...\nspec:\n  taskRunTemplate:\n    serviceAccountName: tekton\n  pipelineRef:\n    name: deploy-with-promote-approval\n...\n"})}),"\n",(0,o.jsxs)(n.ol,{start:"2",children:["\n",(0,o.jsxs)(n.li,{children:["Create and apply the ",(0,o.jsx)(n.strong,{children:"Pipeline"})," custom resource. Refer to the example ",(0,o.jsx)(n.a,{href:"https://github.com/epam/edp-tekton/blob/v0.13.0/charts/pipelines-library/templates/pipelines/cd/deploy-with-approve.yaml",children:"Pipeline"}),". Ensure you set the concrete approval task to run:"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"- name: approve\n  params:\n    - name: description\n      value: Promote versions to the next Environment?\n  runAfter:\n    - deploy-app\n  taskRef:\n    apiVersion: edp.epam.com/v1alpha1s\n    kind: ApprovalTask\n    name: approve\n"})}),"\n",(0,o.jsxs)(n.ol,{start:"3",children:["\n",(0,o.jsxs)(n.li,{children:["When ",(0,o.jsx)(n.a,{href:"#new-environments",children:"creating"})," or ",(0,o.jsx)(n.a,{href:"#existing-environments",children:"modifying"})," the deploy pipeline, select your newly added custom deploy pipeline."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/docs/3.10/operator-guide/cd/customize-environment-deletion",children:"Customize Environment Cleanup"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/docs/3.10/operator-guide/cd/customize-deploy-pipeline",children:"Customize Deploy Pipeline"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/docs/3.10/user-guide/add-cd-pipeline",children:"Add Deployment Flow"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/docs/3.10/user-guide/manage-environments",children:"Manage Deployment Flows"})}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},38384:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/approve_step-bb87941422a78f89bd21c16563a2a5a8.png"},35:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/create-environment-button-deploy-da15774c14be97560bcfa9e64c13827a.png"},13441:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/custom-approve-pipeline1-65f21cb0994624ce3214eaaa5bd0dc4a.png"},64458:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/custom-approve-pipeline2-128db570171f7620afcfd1d898c72199.png"},66191:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/edit-environment-button-deploy-dee27802ddeda8a5cc5508ed05599eb3.png"},56940:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/manual_approve_approved-42e2bdfd42d35b8fce1e10e4e1fb9f56.png"},95787:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/manual_approve_rejected-8c2c32ac12bd7cf8eafb8d630cde396a.png"},31052:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/manual_approve_timeout-e5664a215e0b95444d642ce2f2f5dd73.png"},28453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>p});var t=i(96540);const o={},a=t.createContext(o);function l(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function p(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);