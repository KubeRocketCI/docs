"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[66595],{51881:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>r});const i=JSON.parse('{"id":"user-guide/manage-environments","title":"Manage Deployment Flows","description":"This page describes actions that can be performed to an already created deployment flow. If no deployment flows are created yet, navigate to the Add Deployment Flow page:","source":"@site/docs/user-guide/manage-environments.md","sourceDirName":"user-guide","slug":"/user-guide/manage-environments","permalink":"/docs/next/user-guide/manage-environments","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/user-guide/manage-environments.md","tags":[],"version":"current","lastUpdatedBy":"Sergiy Kulanov","lastUpdatedAt":1737663979000,"frontMatter":{},"sidebar":"userGuideSidebar","previous":{"title":"Add Deployment Flow","permalink":"/docs/next/user-guide/add-cd-pipeline"},"next":{"title":"Inject Variables Into Deploy Pipelines","permalink":"/docs/next/user-guide/cd-pipeline-variables-injection"}}');var l=t(74848),s=t(28453);const o={},a="Manage Deployment Flows",d={},r=[{value:"View Deployment Flow Details",id:"view-deployment-flow-details",level:2},{value:"Edit Existing Deployment Flow<a></a>",id:"edit-existing-deployment-flow",level:3},{value:"Add a New Environment",id:"add-a-new-environment",level:3},{value:"Edit Environment",id:"edit-environment",level:3},{value:"Delete Environment",id:"delete-environment",level:3},{value:"View Environment Data",id:"view-environment-data",level:3},{value:"Deploy Application",id:"deploy-application",level:3},{value:"Troubleshoot Application",id:"troubleshoot-application",level:3},{value:"Delete Application",id:"delete-application",level:3},{value:"Related Articles",id:"related-articles",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{Head:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"manage-deployment-flows",children:"Manage Deployment Flows"})}),"\n",(0,l.jsx)(i,{children:(0,l.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/user-guide/manage-environments/"})}),"\n",(0,l.jsxs)(n.p,{children:["This page describes actions that can be performed to an already created deployment flow. If no deployment flows are created yet, navigate to the ",(0,l.jsx)(n.a,{href:"/docs/next/user-guide/add-cd-pipeline",children:"Add Deployment Flow"})," page:"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"Deployment flows page",src:t(36084).A+"",title:"Deployment flows page",width:"4768",height:"2301"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Deployment flow status"})," - displays the deployment flow status. Can be red or green depending on if the KubeRocketCI portal managed to connect to the Git Server with the specified credentials or not."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Deployment flow name"})," (clickable) - displays the Git Server name set during the Git Server creation."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Open documentation"})," - opens the documentation that leads to this page."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Enable filtering"})," - enables filtering by Git Server name and namespace where this deployment flow is located in."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Create new deployment flow"})," - displays the Create new component menu."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Edit deployment flow"})," - edit the deployment flow by selecting the options icon next to its name in the deployment flow list, and then selecting Edit. For details see the ",(0,l.jsx)(n.a,{href:"#edit-existing-deployment-flow",children:"Edit Existing Deployment Flow"})," section."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Delete deployment flow"})," - remove deployment flow by clicking the vertical ellipsis button and then selecting Delete."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Chat assistant"})," - opens the chat window with AI assistant."]}),"\n",(0,l.jsx)(n.admonition,{type:"note",children:(0,l.jsx)(n.p,{children:"Please keep in mind that after deleting the deployment flow, all the created resources within the deployment flow will be deleted."})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"view-deployment-flow-details",children:"View Deployment Flow Details"}),"\n",(0,l.jsx)(n.p,{children:"To view deployment flow details, click the deployment flow name in the deployment flows list. Once clicked, the following data will be displayed:"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"Deployment flow details",src:t(46044).A+"",title:"Deployment flow details",width:"4629",height:"2387"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Filters"})," - enables filtering by stage name, stage applications and stage health status."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Open deployment flow in Argo CD"})," - opens the corresponding resource in Argo CD."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Edit deployment flow"})," - allows to edit some parameters of the deployment flow."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Delete deployment flow"})," - allows to remove the deployment flow."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Create new stage"})," - displays the ",(0,l.jsx)(n.strong,{children:"Create stage"})," menu."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Stage name (clickable)"})," - opens the stage details page."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Stage status"})," - displays the status of the created stage."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Create new stage"})," - displays the ",(0,l.jsx)(n.strong,{children:"Create stage"})," menu."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Application name (clickable)"})," - opens the details of the application that is deployed within the stage."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Application deployment status"})," - displays the deployed application."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Open application logs"})," - opens the the application container logs."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Open application terminal"})," - opens the container terminal window."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Open application resource in Argo CD"})," - opens a new tab with Argo CD resources related to the application."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Open stage in Argo CD / Grafana / Kibana"})," - allows to view the stage in Argo CD, Grafana or Kibana."]}),"\n"]}),"\n",(0,l.jsxs)(n.h3,{id:"edit-existing-deployment-flow",children:["Edit Existing Deployment Flow",(0,l.jsx)("a",{name:"edit-existing-deployment-flow"})]}),"\n",(0,l.jsx)(n.p,{children:"Edit the deployment flow directly from the deployment flow overview page or when viewing the deployment flow data:"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Select ",(0,l.jsx)(n.strong,{children:"Edit"})," in the options icon menu next to the deployment flow name:"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"Edit deployment flow when viewing the deployment flow data",src:t(94626).A+"",title:"Edit deployment flow when viewing the deployment flow data",width:"1919",height:"1110"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Apply the necessary changes (edit the list of applications for deploy, application branches, and promotion in the pipeline). Add new extra stages by clicking the plus sign icon and filling in the application branch and promotion in the pipeline."}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"Edit deployment flow dialog",src:t(16943).A+"",title:"Edit deployment flow dialog",width:"1918",height:"1110"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Click the ",(0,l.jsx)(n.strong,{children:"Apply"})," button to confirm the changes."]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"add-a-new-environment",children:"Add a New Environment"}),"\n",(0,l.jsx)(n.p,{children:"In order to create a new environment for the existing deployment flow, follow the steps below:"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Navigate to the ",(0,l.jsx)(n.strong,{children:"Environments"})," block by clicking the deployment flow name link in the deployment flows list."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Click the ",(0,l.jsx)(n.strong,{children:"Create environment"})," button:"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"Add environment button",src:t(33374).A+"",title:"Add environment button",width:"1919",height:"1111"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Fill in the required fields in the dialog. Alternatively, click ",(0,l.jsx)(n.strong,{children:"Edit YAML"})," in the upper-right corner of the ",(0,l.jsx)(n.strong,{children:"Create environment"})," dialog to open the YAML editor and add an environment. Please see the ",(0,l.jsx)(n.a,{href:"/docs/next/user-guide/add-cd-pipeline",children:"Stages Menu"})," section for details."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Click the ",(0,l.jsx)(n.strong,{children:"Apply"})," button."]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"edit-environment",children:"Edit Environment"}),"\n",(0,l.jsx)(n.p,{children:"In order to edit an environment for the existing deployment flow, follow the steps below:"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Click the environment name in the deployment flows list to enter its details page."}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["In the upper-right corner of the page, click the ",(0,l.jsx)(n.strong,{children:"Edit"})," button:"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"Edit environment",src:t(27546).A+"",title:"Edit environment",width:"3560",height:"2066"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["In the ",(0,l.jsx)(n.strong,{children:"Edit environment"})," dialog, change the environment trigger type and deploy pipeline template:"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"Edit environment dialog",src:t(7490).A+"",title:"Edit environment dialog",width:"862",height:"168"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Click the ",(0,l.jsx)(n.strong,{children:"Apply"})," button."]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"delete-environment",children:"Delete Environment"}),"\n",(0,l.jsx)(n.admonition,{type:"warning",children:(0,l.jsx)(n.p,{children:"You cannot remove the last environment, as the deployment flow does not exist without at least one."})}),"\n",(0,l.jsx)(n.p,{children:"In order to delete an environment for the existing deployment flow, follow the steps below:"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Navigate to the ",(0,l.jsx)(n.strong,{children:"Environments"})," block by clicking the deployment flow name link in the deployment flows list."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Click the name of the environment that needs to be deleted:"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"Delete environment",src:t(68500).A+"",title:"Delete environment",width:"1919",height:"1112"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Click the recycle bin button to open the environment deletion menu:"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"Delete environment button",src:t(21595).A+"",title:"Delete environment button",width:"1919",height:"1109"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Enter the environment name and click ",(0,l.jsx)(n.strong,{children:"Confirm"}),":"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"Confirm deletion",src:t(9730).A+"",title:"Confirm deletion",width:"1916",height:"1108"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"view-environment-data",children:"View Environment Data"}),"\n",(0,l.jsx)(n.p,{children:"To view the environment data for the existing environment, follow the steps below:"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Navigate to the ",(0,l.jsx)(n.strong,{children:"Stages"})," block by clicking the deployment flow name link in the deployment flows list;"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"Expand environment",src:t(24329).A+"",title:"Expand environment",width:"1918",height:"1110"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Click the environment name. The following blocks will be displayed:"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"Environment overview",src:t(50182).A+"",title:"Environment overview",width:"1920",height:"1113"})}),"\n",(0,l.jsxs)(n.p,{children:["a. ",(0,l.jsx)(n.strong,{children:"Overview"})," - general information and configuration of current environment."]}),"\n",(0,l.jsxs)(n.p,{children:["b. ",(0,l.jsx)(n.strong,{children:"Applications"})," - displays the status of the applications related to the environment and allows for ",(0,l.jsx)(n.a,{href:"#deploy-application",children:"deploying applications"}),". Applications health and sync statuses are returned from the Argo CD tool."]}),"\n",(0,l.jsxs)(n.p,{children:["c. ",(0,l.jsx)(n.strong,{children:"Pipelines"})," - displays all the deploy pipeline runs launched for this environment."]}),"\n",(0,l.jsxs)(n.p,{children:["d. ",(0,l.jsx)(n.strong,{children:"Monitoring"})," - opens the Grafana window that allows for watching various metrics."]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"deploy-application",children:"Deploy Application"}),"\n",(0,l.jsx)(n.p,{children:"To deploy an application, follow the steps below:"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["Navigate to the ",(0,l.jsx)(n.strong,{children:"Applications"})," block and click the ",(0,l.jsx)(n.strong,{children:"Configure deploy"})," button:"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"Configure deploy button",src:t(66120).A+"",title:"Configure deploy button",width:"1918",height:"1111"})}),"\n",(0,l.jsxs)(n.ol,{start:"2",children:["\n",(0,l.jsx)(n.li,{children:"Set deployment properties you need:"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"Deploy the promoted application",src:t(82151).A+"",title:"Deploy the promoted application",width:"1918",height:"1111"})}),"\n",(0,l.jsx)(n.p,{children:"a. Select the image stream version from the drop-down list."}),"\n",(0,l.jsxs)(n.p,{children:["b. (Optional) Enable setting custom values for Helm Charts. For more details, please refer to the ",(0,l.jsx)(n.a,{href:"/docs/next/user-guide/gitops",children:"Manage GitOps"})," page."]}),"\n",(0,l.jsxs)(n.p,{children:["c. Click the ",(0,l.jsx)(n.strong,{children:"Start Deploy"})," button to start a pipeline with the deploy script."]}),"\n",(0,l.jsx)(n.admonition,{type:"info",children:(0,l.jsx)(n.p,{children:"In case of using OpenShift internal registry, if the deployment fails with the ImagePullBackOff error, delete the pod that was created for this application."})}),"\n",(0,l.jsxs)(n.p,{children:["To uninstall the application, click the ",(0,l.jsx)(n.strong,{children:"Delete"})," button:"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"Uninstall the application",src:t(87641).A+"",title:"Uninstall the application",width:"1918",height:"1112"})}),"\n",(0,l.jsx)(n.p,{children:"As a result, the application will be uninstalled in the Argo CD tool as well."}),"\n",(0,l.jsxs)(n.p,{children:["Alternatively, you can use the ",(0,l.jsx)(n.strong,{children:"Clean"})," button. This way will be appropriate when you have some specific requirements to the environment cleanup procedure. Note that you need to make up your own logic in the cleanup pipeline to use the button or choose one of the pre-defined pipelines offered by KubeRocketCI:"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"Clean up application",src:t(16396).A+"",title:"Clean up application",width:"1918",height:"1112"})}),"\n",(0,l.jsx)(n.h3,{id:"troubleshoot-application",children:"Troubleshoot Application"}),"\n",(0,l.jsx)(n.p,{children:"There is a couple of KubeRocketCI portal capabilities that will help in monitoring and troubleshooting deployed applications, namely, terminal and logs."}),"\n",(0,l.jsx)(n.p,{children:"To inspect the deployed application in KubeRocketCI portal, take the following steps:"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Open the application logs by clicking the ",(0,l.jsx)(n.code,{children:"Show Logs"})," button:"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"Show Logs button",src:t(29335).A+"",title:"Show Logs button",width:"1918",height:"1111"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Inspect the shown logs:"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"Inspect Logs",src:t(94517).A+"",title:"Inspect Logs",width:"1918",height:"1112"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Open the application terminal by clicking the ",(0,l.jsx)(n.code,{children:"Show Terminal"})," button:"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"Show Terminal button",src:t(35396).A+"",title:"Show Terminal button",width:"1918",height:"1111"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Operate the terminal to fix the problem if any:"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"Inspect application",src:t(60404).A+"",title:"Inspect application",width:"1918",height:"1111"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"delete-application",children:"Delete Application"}),"\n",(0,l.jsx)(n.p,{children:"There are two buttons on the environment page that can be utilized to delete application in the portal:"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"Clean button",src:t(24856).A+"",title:"Clean button",width:"1918",height:"1112"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Delete"})," - Deletes selected applications and associated resources."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Clean"})," - Manages custom cleanup actions, such as deleting cloud resources and databases, rolling back transactions, etc."]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.strong,{children:"Delete"})," button is optimized for applications based on a single, simple helm chart that can be deployed independently without any specific dependencies."]}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.strong,{children:"Clean"})," button activates a deletion process (triggers a delete pipeline) that includes any custom logic you have defined. This option is most suitable for applications that require complex configurations to function properly. It ensures that any associated resources with the same lifecycle are deleted when the application is no longer needed."]}),"\n",(0,l.jsxs)(n.p,{children:["KubeRocketCI provides an intuitive and streamlined pipeline by default. Initially, there is no distinction between the ",(0,l.jsx)(n.strong,{children:"Delete"})," and ",(0,l.jsx)(n.strong,{children:"Clean"})," buttons, as both perform identical actions. This default behavior encompasses the straightforward deletion of applications, which involves the uninstallation of the associated Helm chart. However, this functionality evolves once a custom delete pipeline is established, enabling manual configuration of the logic behind the ",(0,l.jsx)(n.strong,{children:"Clean"})," button. This customization allows for a more tailored approach to managing application lifecycles within KubeRocketCI."]}),"\n",(0,l.jsxs)(n.p,{children:["For more details on how to create a custom delete pipeline, navigate to the ",(0,l.jsx)(n.a,{href:"/docs/next/operator-guide/cd/customize-environment-deletion",children:"Customize Environment Cleanup"})]}),"\n",(0,l.jsx)(n.h3,{id:"related-articles",children:"Related Articles"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/docs/next/operator-guide/cd/customize-environment-deletion",children:"Customize Environment Cleanup"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/docs/next/user-guide/add-cd-pipeline",children:"Add Deployment Flow"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/docs/next/user-guide/add-quality-gate",children:"Add Quality Gate"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},24856:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/edp-portal-clean-application-0774fe1560c50ed087833d61612078ec.png"},94517:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/application_logs-9c612fac93c440bc0fb9bfd6abf120f0.png"},60404:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/application_terminal-03a26c668a48db27601d1961f2d778e3.png"},66120:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/configure-deploy-button-7d16b347b44dc512c0a5f2382421a619.png"},9730:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/confirm-environment-deletion-5bfe6590fcf6489286946c745d29edbc.png"},82151:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/deploy_application-d94ca935a2f525d87cadaa16b704ce37.png"},33374:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/edp-portal-cd-pipeline-add-stages-090598e2cb5a1df1d7322a54bf352404.png"},46044:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/edp-portal-cd-pipeline-overview-dee80048762d0e3a53376f965e8d834e.png"},36084:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/edp-portal-cd-pipeline-page-44d690af130fc9453019b22885af239b.png"},16396:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/edp-portal-clean-application-c4b4c9d36105d754b882841dbf3e73ce.png"},21595:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/edp-portal-delete-cd-pipeline-stage-2564a5ebc17c630551976dd011f3dfc8.png"},94626:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/edp-portal-edit-cd-pipeline-1-e63d6462b80561dc1e5c36aecbabebc6.png"},16943:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/edp-portal-edit-cd-pipeline-page-9dd51604a03f4466f863e46a9d646770.png"},7490:(e,n,t)=>{t.d(n,{A:()=>i});const i="data:image/png;base64,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"},27546:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/edp-portal-edit-cd-pipeline-stage-e5c0c1a0abf5fa258cde56cc3548080c.png"},24329:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/edp-portal-expand-stage-e3527660b3018d79fff98056e8956011.png"},50182:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/edp-portal-stage-overview-e730d3ace6e2e38ef2a7aca6eaf440ac.png"},87641:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/edp-portal-uninstall-application-8c5aa69d3b5be85b56d084730a25f986.png"},68500:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/enter_stage-ecc274492fb5a8e3c0437f5545fa2f33.png"},29335:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/show_logs_button-b2d6aa7384888f1c7ed62ebf9d6305b0.png"},35396:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/show_terminal_button-ea79502adf2f0f2538b175ec92564746.png"},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var i=t(96540);const l={},s=i.createContext(l);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);