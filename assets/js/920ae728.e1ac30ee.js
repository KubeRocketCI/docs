"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[40853],{7173:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>o});var n=r(74848),t=r(28453);const s={},l="Manage Libraries",a={id:"user-guide/library",title:"Manage Libraries",description:"This section describes the subsequent possible actions that can be performed with the newly added or existing libraries.",source:"@site/versioned_docs/version-3.10/user-guide/library.md",sourceDirName:"user-guide",slug:"/user-guide/library",permalink:"/docs/user-guide/library",draft:!1,unlisted:!1,editUrl:"https://github.com/KubeRocketCI/docs/edit/main/docs/user-guide/library.md",tags:[],version:"3.10",lastUpdatedBy:"Sergiy Kulanov",lastUpdatedAt:1730106685e3,frontMatter:{},sidebar:"userGuideSidebar",previous:{title:"Add Library",permalink:"/docs/user-guide/add-library"},next:{title:"Add Infrastructure",permalink:"/docs/user-guide/add-infrastructure"}},d={},o=[{value:"Check and Remove Library",id:"check-and-remove-library",level:2},{value:"Edit Existing Library",id:"edit-existing-library",level:2},{value:"Related Articles",id:"related-articles",level:2}];function c(e){const i={a:"a",admonition:"admonition",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.header,{children:(0,n.jsx)(i.h1,{id:"manage-libraries",children:"Manage Libraries"})}),"\n",(0,n.jsx)(i.p,{children:"This section describes the subsequent possible actions that can be performed with the newly added or existing libraries."}),"\n",(0,n.jsx)(i.h2,{id:"check-and-remove-library",children:"Check and Remove Library"}),"\n",(0,n.jsx)(i.p,{children:"As soon as the library is successfully provisioned, the following will be created:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"A Library Codebase type will appear in the Codebase list of the Components section."}),"\n",(0,n.jsxs)(i.li,{children:["With the ",(0,n.jsx)(i.strong,{children:"Create"})," strategy, a new project will be generated on GitHub or another integrated VCS. When ",(0,n.jsx)(i.strong,{children:"Clone"})," is chosen, the repository will be forked from the original and copied to the KubeRocketCI-integrated repository. If ",(0,n.jsx)(i.strong,{children:"Import"})," is selected, the platform connects to the chosen repository."]}),"\n"]}),"\n",(0,n.jsx)(i.admonition,{type:"info",children:(0,n.jsxs)(i.p,{children:["To navigate quickly to OpenShift, Tekton, Gerrit, SonarQube, Nexus, and other resources, click the ",(0,n.jsx)(i.strong,{children:"Overview"})," section on the navigation bar and hit the necessary link."]})}),"\n",(0,n.jsx)(i.p,{children:"The added library will be listed in the Libraries list allowing to do the following:"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"Library menu",src:r(2942).A+"",title:"Library menu",width:"4334",height:"2159"})}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Component status"})," - displays the library status. Can be red or green depending on if the KubeRocketCI portal managed to connect to the Git Server with the specified credentials or not."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Component name (clickable)"})," - displays the library name set during the library creation."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Open documentation"})," - opens the library related documentation page."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Enable filtering"})," - enables filtering by library name and namespace where this custom resource is located in."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Selector"})," - Allows you to select multiple library for bulk actions."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Delete selected"})," - Deletes all selected library. This option is only available when one or more library`s are selected using the ",(0,n.jsx)(i.strong,{children:"Selector"}),"."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Create new component"})," - displays the ",(0,n.jsx)(i.strong,{children:"Create new component"})," menu."]}),"\n",(0,n.jsxs)(i.li,{children:["*",(0,n.jsx)(i.strong,{children:"Actions menu"})]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Edit"})," - edit the library by selecting the options icon next to its name in the libraries list, and then selecting ",(0,n.jsx)(i.strong,{children:"Edit"}),". For details see the ",(0,n.jsx)(i.a,{href:"#edit-existing-library",children:"Edit Existing Library"})," section."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Delete"})," - remove library by clicking the vertical ellipsis button and then selecting ",(0,n.jsx)(i.strong,{children:"Delete"}),"."]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"There are also options to sort the libraries:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Enable filtering"})," - Sort the existing libraries in a table by clicking the sorting icons in the table header. Sort the libraries alphabetically by their name, language, build tool, framework, and CI tool. You can also sort the libraries by their status: Created, Failed, or In progress."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Pagination menu"})," - Select a number of libraries displayed per page (15, 25 or 50 rows) and navigate between pages if the number of libraries exceeds the capacity of a single page."]}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"edit-existing-library",children:"Edit Existing Library"}),"\n",(0,n.jsx)(i.p,{children:"KubeRocketCI portal provides the ability to enable, disable or edit the Jira Integration functionality for libraries."}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsx)(i.p,{children:"To edit a library directly from the Libraries overview page or when viewing the library data:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:["Select ",(0,n.jsx)(i.strong,{children:"Edit"})," in the options icon menu:"]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"Edit library on the libraries overview page",src:r(54736).A+"",title:"Edit library on the libraries overview page",width:"1922",height:"1114"})}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:["Select ",(0,n.jsx)(i.strong,{children:"Edit"})," in the library details menu:"]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"Edit library when viewing the library data",src:r(68555).A+"",title:"Edit library when viewing the library data",width:"1922",height:"1114"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:["To enable Jira integration, in the ",(0,n.jsx)(i.strong,{children:"Edit Library"})," dialog do the following:"]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"Edit library",src:r(81126).A+"",title:"Edit library",width:"1922",height:"1114"})}),"\n",(0,n.jsxs)(i.p,{children:["a. Mark the ",(0,n.jsx)(i.strong,{children:"Integrate with Jira server"})," check box and fill in the necessary fields. Please see the steps of the ",(0,n.jsx)(i.a,{href:"/docs/user-guide/add-library",children:"Add Library"})," page."]}),"\n",(0,n.jsxs)(i.p,{children:["b. Select the ",(0,n.jsx)(i.strong,{children:"Apply"})," button to apply the changes."]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:["To disable Jira integration, in the ",(0,n.jsx)(i.strong,{children:"Edit Library"})," dialog do the following:"]}),"\n",(0,n.jsxs)(i.p,{children:["a. Clear the ",(0,n.jsx)(i.strong,{children:"Integrate with Jira server"})," check box."]}),"\n",(0,n.jsxs)(i.p,{children:["b. Select the ",(0,n.jsx)(i.strong,{children:"Apply"})," button to apply the changes."]}),"\n",(0,n.jsx)(i.p,{children:"As a result, the necessary changes will be applied."}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:["To create, edit and delete library branches, please refer to the ",(0,n.jsx)(i.a,{href:"/docs/user-guide/manage-branches",children:"Manage Branches"})," page."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"/docs/user-guide/add-library",children:"Add Library"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"/docs/user-guide/manage-branches",children:"Manage Branches"})}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},2942:(e,i,r)=>{r.d(i,{A:()=>n});const n=r.p+"assets/images/components-manage-components-menu-d2157cd05dc7756711ec3874493caa12.png"},54736:(e,i,r)=>{r.d(i,{A:()=>n});const n=r.p+"assets/images/library-manage-components-library-edit-1-55611608918b0ced33de9290759fbbed.png"},68555:(e,i,r)=>{r.d(i,{A:()=>n});const n=r.p+"assets/images/library-manage-components-library-edit-2-403fceae16e2abb7889d61948f8140cc.png"},81126:(e,i,r)=>{r.d(i,{A:()=>n});const n=r.p+"assets/images/library-manage-edit-codebase-library-6a8ce912ae4704e4bd6044b9f132466d.png"},28453:(e,i,r)=>{r.d(i,{R:()=>l,x:()=>a});var n=r(96540);const t={},s=n.createContext(t);function l(e){const i=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),n.createElement(s.Provider,{value:i},e.children)}}}]);