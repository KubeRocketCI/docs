"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[314],{16960:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>r});var t=n(74848),s=n(28453);const a={},l="Manage Applications",o={id:"user-guide/application",title:"Manage Applications",description:"This section describes the subsequent possible actions that can be performed with the newly added or existing applications.",source:"@site/versioned_docs/version-3.9.0/user-guide/application.md",sourceDirName:"user-guide",slug:"/user-guide/application",permalink:"/docs/user-guide/application",draft:!1,unlisted:!1,editUrl:"https://github.com/KubeRocketCI/docs/edit/main/docs/user-guide/application.md",tags:[],version:"3.9.0",lastUpdatedBy:"Sergiy Kulanov",lastUpdatedAt:1719645984e3,frontMatter:{},sidebar:"userGuideSidebar",previous:{title:"Add Application",permalink:"/docs/user-guide/add-application"},next:{title:"Add Autotest",permalink:"/docs/user-guide/add-autotest"}},c={},r=[{value:"Check and Remove Application",id:"check-and-remove-application",level:2},{value:"Edit Existing Application",id:"edit-existing-application",level:2},{value:"Related Articles",id:"related-articles",level:2}];function d(e){const i={a:"a",admonition:"admonition",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"manage-applications",children:"Manage Applications"}),"\n",(0,t.jsx)(i.p,{children:"This section describes the subsequent possible actions that can be performed with the newly added or existing applications."}),"\n",(0,t.jsx)(i.h2,{id:"check-and-remove-application",children:"Check and Remove Application"}),"\n",(0,t.jsx)(i.p,{children:"As soon as the application is successfully provisioned, the following will be created:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"An Application Codebase type will appear in the Codebase list of the Components section."}),"\n",(0,t.jsxs)(i.li,{children:["With the ",(0,t.jsx)(i.strong,{children:"Create"})," strategy, a new project will be generated on GitHub or another integrated VCS. When ",(0,t.jsx)(i.strong,{children:"Clone"})," is chosen, the repository will be forked from the original and copied to the KubeRocketCI-integrated repository. If ",(0,t.jsx)(i.strong,{children:"Import"})," is selected, the platform connects to the chosen repository."]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"The added application will be listed in the Applications list allowing you to do the following:"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Applications menu",src:n(67056).A+"",title:"Applications menu",width:"2883",height:"1104"})}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Application status"})," - displays the application status. Can be red or green depending on if the KubeRocketCI portal managed to connect to the Git Server with the specified credentials or not."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Application name (clickable)"})," - displays the application name set during the application creation."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Open documentation"})," - opens the application related documentation page."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Enable filtering"})," - enables filtering by application name and namespace where this custom resource is located in."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Create new application"})," - displays the ",(0,t.jsx)(i.strong,{children:"Create new component"})," menu."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Edit application"})," - edit the application by selecting the options icon next to its name in the applications list, and then selecting ",(0,t.jsx)(i.strong,{children:"Edit"}),". For details see the ",(0,t.jsx)(i.a,{href:"#edit-existing-application",children:"Edit Existing Application"})," section."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Delete application"})," - remove application by clicking the vertical ellipsis button and then selecting ",(0,t.jsx)(i.strong,{children:"Delete"}),"."]}),"\n",(0,t.jsx)(i.admonition,{type:"warning",children:(0,t.jsx)(i.p,{children:"The application that is used in a CD pipeline cannot be removed."})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"There are also options to sort the applications:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"Sort the existing applications in a table by clicking the sorting icons in the table header. Sort the applications alphabetically by their name, language, build tool, framework, and CI tool. You can also sort the applications by their status: Created, Failed, or In progress."}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"Select a number of applications displayed per page (15, 25 or 50 rows) and navigate between pages if the number of applications exceeds the capacity of a single page:"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Applications pages",src:n(40608).A+"",title:"Applications pages",width:"1680",height:"174"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"edit-existing-application",children:"Edit Existing Application"}),"\n",(0,t.jsx)(i.p,{children:"KubeRocketCI Portal provides the ability to enable, disable or edit the Jira Integration functionality for applications."}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"To edit an application directly from the Applications overview page or when viewing the application data:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Select ",(0,t.jsx)(i.strong,{children:"Edit"})," in the options icon menu:"]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Edit application on the Applications overview page",src:n(98931).A+"",title:"Edit application on the Applications overview page",width:"1906",height:"937"})}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Edit application when viewing the application data",src:n(99643).A+"",title:"Edit application when viewing the application data",width:"1905",height:"938"})}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"The Edit Application dialog opens."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["To enable Jira integration, in the ",(0,t.jsx)(i.strong,{children:"Edit Application"})," dialog do the following:"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Edit application",src:n(47195).A+"",title:"Edit application",width:"1921",height:"933"})}),"\n",(0,t.jsxs)(i.p,{children:["a. Mark the ",(0,t.jsx)(i.strong,{children:"Integrate with Jira server"})," check box and fill in the necessary fields. Please see steps d-h of the ",(0,t.jsx)(i.a,{href:"/docs/user-guide/add-application",children:"Add Application"})," page."]}),"\n",(0,t.jsxs)(i.p,{children:["b. Select the ",(0,t.jsx)(i.strong,{children:"Apply"})," button to apply the changes."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["To disable Jira integration, in the ",(0,t.jsx)(i.strong,{children:"Edit Application"})," dialog do the following:"]}),"\n",(0,t.jsxs)(i.p,{children:["a. Clear the ",(0,t.jsx)(i.strong,{children:"Integrate with Jira server"})," check box."]}),"\n",(0,t.jsxs)(i.p,{children:["b. Select the ",(0,t.jsx)(i.strong,{children:"Apply"})," button to apply the changes."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["To create, edit and delete application branches, please refer to the ",(0,t.jsx)(i.a,{href:"/docs/user-guide/manage-branches",children:"Manage Branches"})," page."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"/docs/user-guide/add-application",children:"Add Application"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"/docs/user-guide/manage-branches",children:"Manage Branches"})}),"\n"]})]})}function p(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},98931:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/edp-portal-edit-codebase-1-d80601b123188b6311ffee5d5912151b.png"},99643:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/edp-portal-edit-codebase-2-9326b7ffe373712756119a6517b227f1.png"},47195:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/edp-portal-edit-codebase-application-d1527928ab53bf32e40ef52b42032f2d.png"},67056:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/edp-portal-inspect-application-menu-0a5dd15fc9045067f5c8ed59b43a450f.png"},40608:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/edp-portal-inspect-application-menu2-d83771098c92d28e4a2b36a915147f8f.png"},28453:(e,i,n)=>{n.d(i,{R:()=>l,x:()=>o});var t=n(96540);const s={},a=t.createContext(s);function l(e){const i=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(a.Provider,{value:i},e.children)}}}]);