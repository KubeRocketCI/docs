"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6595],{67104:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var i=t(74848),s=t(28453);const l={},a="Manage Environments",r={id:"user-guide/manage-environments",title:"Manage Environments",description:"This page describes actions that can be performed to an already created environment. If no environments are created yet, navigate to the Add Environment page:",source:"@site/docs/user-guide/manage-environments.md",sourceDirName:"user-guide",slug:"/user-guide/manage-environments",permalink:"/docs/user-guide/manage-environments",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"userGuideSidebar",previous:{title:"Add Environment",permalink:"/docs/user-guide/add-cd-pipeline"},next:{title:"Add Quality Gate",permalink:"/docs/user-guide/add-quality-gate"}},o={},d=[{value:"View Environment Details",id:"view-environment-details",level:2},{value:"Edit Existing Environment<a></a>",id:"edit-existing-environment",level:3},{value:"Add a New Stage",id:"add-a-new-stage",level:3},{value:"Edit Stage",id:"edit-stage",level:3},{value:"Delete Stage",id:"delete-stage",level:3},{value:"View Stage Data",id:"view-stage-data",level:3},{value:"Deploy Application",id:"deploy-application",level:3},{value:"Troubleshoot Application",id:"troubleshoot-application",level:3},{value:"Related Articles",id:"related-articles",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"manage-environments",children:"Manage Environments"}),"\n",(0,i.jsxs)(n.p,{children:["This page describes actions that can be performed to an already created environment. If no environments are created yet, navigate to the ",(0,i.jsx)(n.a,{href:"/docs/user-guide/add-cd-pipeline",children:"Add Environment"})," page:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Environments page",src:t(47153).A+"",title:"Environments page",width:"2863",height:"1206"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Environment status"})," - displays the environment status. Can be red or green depending on if the KubeRocketCI portal managed to connect to the Git Server with the specified credentials or not."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Environment name"})," (clickable) - displays the Git Server name set during the Git Server creation."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Open documentation"})," - opens the documentation that leads to this page."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Enable filtering"})," - enables filtering by Git Server name and namespace where this environment is located in."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Create new environment"})," - displays the Create new component menu."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Edit environment"})," - edit the environment by selecting the options icon next to its name in the environment list, and then selecting Edit. For details see the ",(0,i.jsx)(n.a,{href:"#edit-existing-environment",children:"Edit Existing Environment"})," section."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Delete environment"})," - remove environment by clicking the vertical ellipsis button and then selecting Delete."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"Please keep in mind that after deleting the environment, all the created resources within the environment will be deleted."})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"view-environment-details",children:"View Environment Details"}),"\n",(0,i.jsx)(n.p,{children:"To view environment details, click the environment name in the environments list. Once clicked, the following data will be displayed:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Environment details",src:t(33253).A+"",title:"Environment details",width:"2854",height:"1253"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Filters"})," - enables filtering by stage name, stage applications and stage health status."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Open environment in Argo CD"})," - opens the corresponding resource in Argo CD."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Edit environment"})," - allows to edit some parameters of the environment."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Delete environment"})," - allows to remove the environment."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Create new stage"})," - displays the ",(0,i.jsx)(n.strong,{children:"Create stage"})," menu."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Stage name (clickable)"})," - opens the stage details page."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Stage status"})," - displays the status of the created stage."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Create new stage"})," - displays the ",(0,i.jsx)(n.strong,{children:"Create stage"})," menu."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Application name (clickable)"})," - opens the details of the application that is deployed within the stage."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Application deployment status"})," - displays the deployed application."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Open application logs"})," - opens the the application container logs."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Open application terminal"})," - opens the container terminal window."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Open application resource in Argo CD"})," - opens a new tab with Argo CD resources related to the application."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Open stage in Argo CD / Grafana / Kibana"})," - allows to view the stage in Argo CD, Grafana or Kibana."]}),"\n"]}),"\n",(0,i.jsxs)(n.h3,{id:"edit-existing-environment",children:["Edit Existing Environment",(0,i.jsx)("a",{name:"edit-existing-environment"})]}),"\n",(0,i.jsx)(n.p,{children:"Edit the environment directly from the environment overview page or when viewing the environment data:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Select ",(0,i.jsx)(n.strong,{children:"Edit"})," in the options icon menu next to the environment name:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Edit environment when viewing the environment data",src:t(70144).A+"",title:"Edit environment when viewing the environment data",width:"1914",height:"929"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Apply the necessary changes (edit the list of applications for deploy, application branches, and promotion in the pipeline). Add new extra stages by clicking the plus sign icon and filling in the application branch and promotion in the pipeline."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Edit environment dialog",src:t(99496).A+"",title:"Edit environment dialog",width:"859",height:"254"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click the ",(0,i.jsx)(n.strong,{children:"Apply"})," button to confirm the changes."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"add-a-new-stage",children:"Add a New Stage"}),"\n",(0,i.jsx)(n.p,{children:"In order to create a new stage for the existing environment, follow the steps below:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Navigate to the ",(0,i.jsx)(n.strong,{children:"Stages"})," block by clicking the environment name link in the environments list."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click the ",(0,i.jsx)(n.strong,{children:"Create stage"})," button:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Add environment stage",src:t(59146).A+"",title:"Add environment stage",width:"1919",height:"927"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Fill in the required fields in the dialog. Alternatively, click ",(0,i.jsx)(n.strong,{children:"Edit YAML"})," in the upper-right corner of the ",(0,i.jsx)(n.strong,{children:"Create stage"})," dialog to open the YAML editor and add a stage. Please see the ",(0,i.jsx)(n.a,{href:"/docs/user-guide/add-cd-pipeline",children:"Stages Menu"})," section for details."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click the ",(0,i.jsx)(n.strong,{children:"Apply"})," button."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"edit-stage",children:"Edit Stage"}),"\n",(0,i.jsx)(n.p,{children:"In order to edit a stage for the existing environment, follow the steps below:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Navigate to the ",(0,i.jsx)(n.strong,{children:"Stages"})," block by clicking the environment name link in the environments list."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Edit environment stage",src:t(86415).A+"",title:"Edit environment stage",width:"1916",height:"935"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Select the options icon related to the necessary stage and then select ",(0,i.jsx)(n.strong,{children:"Edit"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Edit environment stage dialog",src:t(47110).A+"",title:"Edit environment stage dialog",width:"862",height:"168"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.strong,{children:"Edit Stage"})," dialog, change the stage trigger type. See more about this field in the ",(0,i.jsx)(n.a,{href:"#edit-stage",children:"Stages Menu"})," section."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click the ",(0,i.jsx)(n.strong,{children:"Apply"})," button."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"delete-stage",children:"Delete Stage"}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"You cannot remove the last stage, as the environment does not exist without at least one."})}),"\n",(0,i.jsx)(n.p,{children:"In order to delete a stage for the existing environment, follow the steps below:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Navigate to the ",(0,i.jsx)(n.strong,{children:"Stages"})," block by clicking the environment name link in the environments list."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Click the name of the stage that needs to be deleted:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Delete environment stage",src:t(10937).A+"",title:"Delete environment stage",width:"1918",height:"930"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Click the recycle bin button to open the stage deletion menu:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Delete environment stage",src:t(8950).A+"",title:"Delete environment stage",width:"1921",height:"930"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"view-stage-data",children:"View Stage Data"}),"\n",(0,i.jsx)(n.p,{children:"To view the environment stage data for the existing environment, follow the steps below:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Navigate to the ",(0,i.jsx)(n.strong,{children:"Stages"})," block by clicking the environment name link in the environments list."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Expand environment stage",src:t(97372).A+"",title:"Expand environment stage",width:"1917",height:"935"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Click stage name. The following blocks will be displayed:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Environment stage overview",src:t(57779).A+"",title:"Environment stage overview",width:"1917",height:"930"})}),"\n",(0,i.jsxs)(n.p,{children:["a. ",(0,i.jsx)(n.strong,{children:"Applications"})," - displays the status of the applications related to the stage and allows ",(0,i.jsx)(n.a,{href:"#deploy-application",children:"deploying the applications"}),". Applications health and sync statuses are returned from the Argo CD tool."]}),"\n",(0,i.jsxs)(n.p,{children:["b. ",(0,i.jsx)(n.strong,{children:"Pipelines"})," - displays all the deploy pipeline runs launched for this stage."]}),"\n",(0,i.jsxs)(n.p,{children:["c. ",(0,i.jsx)(n.strong,{children:"Monitoring"})," - opens the grafana window that allows for watching various metrics."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"deploy-application",children:"Deploy Application"}),"\n",(0,i.jsx)(n.p,{children:"To deploy an application, follow the steps below:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Deploy the promoted application",src:t(13337).A+"",title:"Deploy the promoted application",width:"1915",height:"933"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Navigate to the ",(0,i.jsx)(n.strong,{children:"Applications"})," block of the stage and select an application."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Select the image stream version from the drop-down list."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["(Optional) Enable setting custom values for Helm Charts. For more details, please refer to the ",(0,i.jsx)(n.a,{href:"/docs/user-guide/gitops",children:"Manage GitOps"})," page."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click ",(0,i.jsx)(n.strong,{children:"Deploy"}),". The application will be deployed in the Argo CD tool as well."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"In case of using OpenShift internal registry, if the deployment fails with the ImagePullBackOff error, delete the pod that was created for this application."})}),"\n",(0,i.jsxs)(n.p,{children:["To update application, use the ",(0,i.jsx)(n.strong,{children:"Deploy"})," button:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Update the application",src:t(53975).A+"",title:"Update the application",width:"1918",height:"932"})}),"\n",(0,i.jsxs)(n.p,{children:["To uninstall the application, click the ",(0,i.jsx)(n.strong,{children:"Uninstall"})," button:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Uninstall the application",src:t(89814).A+"",title:"Uninstall the application",width:"1918",height:"933"})}),"\n",(0,i.jsx)(n.p,{children:"As a result, the application will be updated or uninstalled in the Argo CD tool as well."}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["In a nutshell, the ",(0,i.jsx)(n.strong,{children:"Update"})," button updates your image version in the Helm chart, whereas the ",(0,i.jsx)(n.strong,{children:"Uninstall"})," button deletes the Helm chart from the namespace where the Argo CD application is deployed."]})}),"\n",(0,i.jsx)(n.h3,{id:"troubleshoot-application",children:"Troubleshoot Application"}),"\n",(0,i.jsx)(n.p,{children:"There is a couple of KubeRocketCI portal capabilities that will help in monitoring and troubleshooting deployed applications, namely, terminal and logs."}),"\n",(0,i.jsx)(n.p,{children:"To inspect the deployed application in KubeRocketCI portal, take the following steps:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Open the application logs by clicking the ",(0,i.jsx)(n.code,{children:"Show Logs"})," button:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Show Logs button",src:t(2384).A+"",title:"Show Logs button",width:"1920",height:"935"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Inspect the shown logs:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Inspect Logs",src:t(71766).A+"",title:"Inspect Logs",width:"1917",height:"932"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Open the application terminal by clicking the ",(0,i.jsx)(n.code,{children:"Show Terminal"})," button:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Show Terminal button",src:t(89679).A+"",title:"Show Terminal button",width:"1917",height:"933"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Operate the terminal to fix the problem if any:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Inspect application",src:t(53831).A+"",title:"Inspect application",width:"1917",height:"933"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"related-articles",children:"Related Articles"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/user-guide/add-cd-pipeline",children:"Add Environment"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/user-guide/add-quality-gate",children:"Add Quality Gate"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},71766:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/application_logs-8addd6766f69035a665e8debd8a4a2be.png"},53831:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/application_terminal-e11f1f4b2f7e0bf5ae019b75f3f6562d.png"},59146:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/edp-portal-add-cd-pipeline-stage-e07fe6d55f283b12d439a9a814ab9e96.png"},33253:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/edp-portal-cd-pipeline-overview-0cec3494f62d272355f55d1e242acef8.png"},47153:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/edp-portal-cd-pipeline-page-95441d9908f93d74f1698daa3ead2760.png"},8950:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/edp-portal-delete-cd-pipeline-stage-dba8dd83996b69bac5b26ad7d13f1e08.png"},13337:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/edp-portal-deploy-application-0034aeb39aaf96599700aa99631b9ca0.png"},70144:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/edp-portal-edit-cd-pipeline-1-e957d10d1489876280c7b41ab36de637.png"},99496:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/edp-portal-edit-cd-pipeline-page-76ad450d83059a4b0d3822455ac60b20.png"},47110:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/edp-portal-edit-cd-pipeline-stage-dialog-4700c8b196721449b97e72f00c03bd9c.png"},86415:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/edp-portal-edit-cd-pipeline-stage-791f79f971a5cd8cfc0625df952d1872.png"},97372:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/edp-portal-expand-stage-efe6ca7b05842e87b81ac2f9927880cf.png"},57779:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/edp-portal-stage-overview-a851ad3885c7b8e7632db347fc6e5a28.png"},89814:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/edp-portal-uninstall-application-6da74e4c44b2949b2eb4671ac57c3d48.png"},53975:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/edp-portal-update-application-21bbd550e8c3fc9955045b2eb75cd747.png"},10937:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/enter_stage-c9db4cf24cfb38a5cbe5874e756f0a9e.png"},2384:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/show_logs_button-5a7ad3466ece598644d67424338af0c8.png"},89679:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/show_terminal_button-02a52677df49caa7bcad6d22adf3b6c7.png"},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var i=t(96540);const s={},l=i.createContext(s);function a(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);