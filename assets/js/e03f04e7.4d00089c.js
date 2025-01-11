"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[85627],{2125:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"user-guide/autotest","title":"Manage Autotests","description":"This section describes the subsequent possible actions that can be performed with the newly added or existing autotests.","source":"@site/versioned_docs/version-3.10/user-guide/autotest.md","sourceDirName":"user-guide","slug":"/user-guide/autotest","permalink":"/docs/user-guide/autotest","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/user-guide/autotest.md","tags":[],"version":"3.10","lastUpdatedBy":"Sergiy Kulanov","lastUpdatedAt":1730106685000,"frontMatter":{},"sidebar":"userGuideSidebar","previous":{"title":"Add Autotest","permalink":"/docs/user-guide/add-autotest"},"next":{"title":"Add Library","permalink":"/docs/user-guide/add-library"}}');var i=n(74848),a=n(28453);const o={},r="Manage Autotests",l={},d=[{value:"Check and Remove Autotest",id:"check-and-remove-autotest",level:2},{value:"Edit Existing Autotest",id:"edit-existing-autotest",level:2},{value:"Add Autotest as a Quality Gate",id:"add-autotest-as-a-quality-gate",level:2},{value:"Configure Autotest Launch at Specific Stage",id:"configure-autotest-launch-at-specific-stage",level:2},{value:"Launch Autotest Locally",id:"launch-autotest-locally",level:2},{value:"Related Articles",id:"related-articles",level:2}];function c(e){const t={a:"a",admonition:"admonition",em:"em",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"manage-autotests",children:"Manage Autotests"})}),"\n",(0,i.jsx)(t.p,{children:"This section describes the subsequent possible actions that can be performed with the newly added or existing autotests."}),"\n",(0,i.jsx)(t.h2,{id:"check-and-remove-autotest",children:"Check and Remove Autotest"}),"\n",(0,i.jsx)(t.p,{children:"As soon as the autotest is successfully provisioned, the following will be created:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"An Autotest Codebase type will appear in the Codebase list of the Components section."}),"\n",(0,i.jsxs)(t.li,{children:["With the ",(0,i.jsx)(t.strong,{children:"Create"})," strategy, a new project will be generated on GitHub or another integrated VCS. When ",(0,i.jsx)(t.strong,{children:"Clone"})," is chosen, the repository will be forked from the original and copied to the KubeRocketCI-integrated repository. If ",(0,i.jsx)(t.strong,{children:"Import"})," is selected, the platform connects to the chosen repository."]}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["To navigate quickly to Tekton, Version Control System, SonarQube, Nexus, and other resources, click the ",(0,i.jsx)(t.strong,{children:"Overview"})," section on the navigation bar and hit the necessary link."]})}),"\n",(0,i.jsx)(t.p,{children:"The added autotest will be listed in the Autotests list allowing you to do the following:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Autotests page",src:n(2942).A+"",title:"Autotests page",width:"4334",height:"2159"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Component status"})," - displays the autotest status. Can be red or green depending on KubeRocketCI portal managed to connect to the Git Server with the specified credentials or not."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Component name (clickable)"})," - displays the autotest name set during the autotest creation."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Open documentation"})," - opens the autotest related documentation page."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Enable filtering"})," - enables filtering by autotest name and namespace where this custom resource is located in."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Selector"})," - Allows you to select multiple autotests for bulk actions."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Delete selected"})," - Deletes all selected autotests."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Create new component"})," - displays the ",(0,i.jsx)(t.strong,{children:"Create new component"})," menu."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Actions menu"})," provides additional options for each individual application:"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Edit"})," - edit the autotest by selecting the options icon next to its name in the autotests list, and then selecting ",(0,i.jsx)(t.strong,{children:"Edit"}),". For details see the ",(0,i.jsx)(t.a,{href:"#edit-existing-autotest",children:"Edit Existing Autotest"})," section."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Delete"})," - remove autotest by clicking the vertical ellipsis button and then selecting ",(0,i.jsx)(t.strong,{children:"Delete"}),"."]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"The autotest that is used in a CD pipeline cannot be removed."})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"There are also options to sort the autotests:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Enable filtering"})," - Sort the existing autotests in a table by clicking the sorting icons in the table header. Sort the autotests alphabetically by their name, language, build tool, framework, and CI tool. You can also sort the autotests by their status: Created, Failed, or In progress."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Pagination menu"})," - Select a number of autotests displayed per page (15, 25 or 50 rows)  and navigate between pages if the number of autotests exceeds the capacity of a single page."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"edit-existing-autotest",children:"Edit Existing Autotest"}),"\n",(0,i.jsx)(t.p,{children:"KubeRocketCI portal provides the ability to enable, disable or edit the Jira Integration functionality for autotests."}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"To edit an autotest directly from the Autotests overview page or when viewing the autotest data:"}),"\n",(0,i.jsxs)(t.p,{children:["Select ",(0,i.jsx)(t.strong,{children:"Edit"})," in the options icon menu:"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Edit autotest on the autotests overview page",src:n(91941).A+"",title:"Edit autotest on the autotests overview page",width:"1922",height:"1114"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Edit autotest when viewing the autotest data",src:n(80462).A+"",title:"Edit autotest when viewing the autotest data",width:"1922",height:"1114"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["To enable Jira integration, on the ",(0,i.jsx)(t.strong,{children:"Edit Autotest"})," page do the following:"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Edit autotest",src:n(67415).A+"",title:"Edit library",width:"1922",height:"1114"})}),"\n",(0,i.jsxs)(t.p,{children:["a. Mark the ",(0,i.jsx)(t.strong,{children:"Integrate with Jira server"})," check box and fill in the necessary fields. Please see steps d-h on the ",(0,i.jsx)(t.a,{href:"/docs/user-guide/add-autotest",children:"Add Autotests"})," page."]}),"\n",(0,i.jsxs)(t.p,{children:["b. Click the ",(0,i.jsx)(t.strong,{children:"Apply"})," button to apply the changes."]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["To adjust the Jira integration functionality, first apply the necessary changes described on the ",(0,i.jsx)(t.a,{href:"/docs/operator-guide/project-management-and-reporting/jira-integration",children:"Adjust Jira Integration"}),"."]})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["To disable Jira integration, in the ",(0,i.jsx)(t.strong,{children:"Edit Autotest"})," dialog do the following:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Clear the ",(0,i.jsx)(t.strong,{children:"Integrate with Jira server"})," check box."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Click the ",(0,i.jsx)(t.strong,{children:"Apply"})," button to apply the changes."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["To create, edit and delete application branches, please refer to the ",(0,i.jsx)(t.a,{href:"/docs/user-guide/manage-branches",children:"Manage Branches"})," page."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"add-autotest-as-a-quality-gate",children:"Add Autotest as a Quality Gate"}),"\n",(0,i.jsx)(t.p,{children:"In order to add an autotest as a quality gate to a newly added CD pipeline, do the following:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Create a CD pipeline with the necessary parameters. Please refer to the ",(0,i.jsx)(t.a,{href:"/docs/user-guide/add-cd-pipeline",children:"Add CD Pipeline"})," section for the details."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["In the ",(0,i.jsx)(t.strong,{children:"Stages"})," menu, select the ",(0,i.jsx)(t.strong,{children:"Autotest"})," quality gate type. It means the promoting process should be confirmed by the successful passing of the autotests."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"In the additional fields, select the previously created autotest name and specify its branch."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["After filling in all the necessary fields, click the Create button to start the provisioning of the pipeline. After the CD pipeline is added, the new namespace containing the stage name will be created in Kubernetes (in OpenShift, a new project will be created) with the following name pattern: ",(0,i.jsx)(t.em,{children:"[cluster name]-[cd pipeline name]-[stage name]"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"configure-autotest-launch-at-specific-stage",children:"Configure Autotest Launch at Specific Stage"}),"\n",(0,i.jsx)(t.p,{children:"In order to configure the added autotest launch at the specific stage with necessary parameters, do the following:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Add the necessary stage to the CD pipeline. Please refer to the ",(0,i.jsx)(t.a,{href:"/docs/user-guide/add-cd-pipeline",children:"Add CD Pipeline"})," documentation for the details."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Navigate to the ",(0,i.jsx)(t.strong,{children:"run.json"})," file and add the stage name and the specific parameters."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"launch-autotest-locally",children:"Launch Autotest Locally"}),"\n",(0,i.jsx)(t.p,{children:"There is an ability to run the autotests locally using the IDEA (Integrated Development Environment Application, such as IntelliJ, NetBeans etc.). To launch the autotest project for the local verification, perform the following steps:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Clone the project to the local machine."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Open the project in IDEA and find the ",(0,i.jsx)(t.strong,{children:"run.json"})," file to copy out the necessary command value."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Paste the copied command value into the Command line field and run it with the necessary values and namespace."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"As a result, all the launched tests will be executed."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/user-guide/add-application",children:"Add Application"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/user-guide/add-autotest",children:"Add Autotests"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/user-guide/add-cd-pipeline",children:"Add CD Pipeline"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/operator-guide/project-management-and-reporting/jira-integration",children:"Adjust Jira Integration"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/user-guide/manage-branches",children:"Manage Branches"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},91941:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/autotests-manage-components-codebase-edit-1-df17acf29da5b2fa0ff462c5aa8d6de0.png"},80462:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/autotests-manage-components-codebase-edit-2-f7f2b5789daec62601ccdc180a86ecfe.png"},67415:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/autotests-manage-edit-codebase-autotests-435ffa1055bacfb1cc653cee27647301.png"},2942:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/components-manage-components-menu-d2157cd05dc7756711ec3874493caa12.png"},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>r});var s=n(96540);const i={},a=s.createContext(i);function o(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);