"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[47684],{99121:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"user-guide/add-autotest","title":"Add Autotest","description":"KubeRocketCI portal allows you to clone an existing repository with the autotest to your Version Control System (VCS), or using an external repository and adding an autotest for further running in stages or using them as quality gates for applications. When an autotest is cloned, the system automatically generates a corresponding repository within the integrated VCS. You can create an autotest in YAML or via the two-step menu in the dialog.","source":"@site/versioned_docs/version-3.9/user-guide/add-autotest.md","sourceDirName":"user-guide","slug":"/user-guide/add-autotest","permalink":"/docs/3.9/user-guide/add-autotest","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/user-guide/add-autotest.md","tags":[],"version":"3.9","lastUpdatedBy":"Sergiy Kulanov","lastUpdatedAt":1730106685000,"frontMatter":{},"sidebar":"userGuideSidebar","previous":{"title":"Sonarqube Project Properties for Application","permalink":"/docs/3.9/user-guide/application-sonarqube-project-properties"},"next":{"title":"Manage Autotests","permalink":"/docs/3.9/user-guide/autotest"}}');var i=n(74848),r=n(28453);const a={},o="Add Autotest",d={},l=[{value:"Create Autotest in YAML",id:"create-autotest-in-yaml",level:2},{value:"Create Autotest via UI",id:"create-autotest-via-ui",level:2},{value:"The Codebase Info Menu",id:"the-codebase-info-menu",level:3},{value:"The Advanced Settings Menu",id:"the-advanced-settings-menu",level:3},{value:"Related Articles",id:"related-articles",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"add-autotest",children:"Add Autotest"})}),"\n",(0,i.jsxs)(t.p,{children:["KubeRocketCI portal allows you to clone an existing repository with the autotest to your Version Control System (VCS), or using an external repository and adding an autotest for further running in stages or using them as quality gates for applications. When an autotest is cloned, the system automatically generates a corresponding repository within the integrated VCS. You can create an autotest ",(0,i.jsx)(t.a,{href:"#create-autotest-in-yaml",children:"in YAML"})," or ",(0,i.jsx)(t.a,{href:"#create-autotest-via-ui",children:"via the two-step menu"})," in the dialog."]}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["Please refer to the ",(0,i.jsx)(t.a,{href:"/docs/3.9/user-guide/add-application",children:"Add Application"})," section for the details on how to add an application codebase type.\nFor the details on how to use autotests as quality gates, please refer to the ",(0,i.jsx)(t.a,{href:"/docs/3.9/user-guide/add-cd-pipeline",children:"Stages Menu"})," section of the ",(0,i.jsx)(t.a,{href:"/docs/3.9/user-guide/add-cd-pipeline",children:"Add Environment"})," documentation."]})}),"\n",(0,i.jsxs)(t.p,{children:["To add an autotest, navigate to the ",(0,i.jsx)(t.strong,{children:"Components"})," section on the navigation bar and click ",(0,i.jsx)(t.strong,{children:"+ Create component"}),":"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Create new autotest",src:n(96546).A+"",title:"Create new autotest",width:"3584",height:"1864"})}),"\n",(0,i.jsxs)(t.p,{children:["Once clicked, the ",(0,i.jsx)(t.strong,{children:"Create new component"})," dialog will appear, then select ",(0,i.jsx)(t.strong,{children:"Autotest"})," and click ",(0,i.jsx)(t.strong,{children:"Next"}),":"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Create new autotest",src:n(94667).A+"",title:"Create new autotest",width:"3584",height:"2016"})}),"\n",(0,i.jsxs)(t.p,{children:["Choose one of the strategies and click ",(0,i.jsx)(t.strong,{children:"Create"}),":"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Select strategy",src:n(92015).A+"",title:"Select strategy",width:"3584",height:"2016"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Clone project"})," \u2013 clones the indicated repository into KubeRocketCI. While cloning the existing repository, it is required to fill in the ",(0,i.jsx)(t.strong,{children:"Repository URL"})," field and specify the credentials if needed."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Import project"})," - allows using existing VCS repository to integrate with KubeRocketCI. While importing the existing repository, select the Git server from the drop-down list and define the relative path to the repository, such as ",(0,i.jsx)(t.code,{children:"/epmd-edp/examples/basic/edp-auto-tests-simple-example"}),"."]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["In order to use the ",(0,i.jsx)(t.strong,{children:"Import project"})," strategy, make sure to adjust it with the ",(0,i.jsx)(t.a,{href:"/docs/3.9/user-guide/add-git-server",children:"Integrate GitLab/GitHub With Tekton"})," page."]})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"create-autotest-in-yaml",children:"Create Autotest in YAML"}),"\n",(0,i.jsxs)(t.p,{children:["Click ",(0,i.jsx)(t.strong,{children:"Edit YAML"})," in the upper-right corner of the ",(0,i.jsx)(t.strong,{children:"Create Autotest"})," dialog to open the YAML editor and create an autotest:"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Edit YAML",src:n(1507).A+"",title:"Edit YAML",width:"3584",height:"2016"})}),"\n",(0,i.jsxs)(t.p,{children:["To edit YAML in the minimal editor, turn on the ",(0,i.jsx)(t.strong,{children:"Use minimal editor"})," toggle in the upper-right corner of the ",(0,i.jsx)(t.strong,{children:"Create Autotest"})," dialog."]}),"\n",(0,i.jsxs)(t.p,{children:["To save the changes, select the ",(0,i.jsx)(t.strong,{children:"Save & Apply"})," button."]}),"\n",(0,i.jsx)(t.h2,{id:"create-autotest-via-ui",children:"Create Autotest via UI"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.strong,{children:"Create Autotest"})," dialog contains the two steps:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"The Codebase Info Menu"}),"\n",(0,i.jsx)(t.li,{children:"The Advanced Settings Menu"}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"the-codebase-info-menu",children:"The Codebase Info Menu"}),"\n",(0,i.jsxs)(t.p,{children:["In our case, we will use the ",(0,i.jsx)(t.strong,{children:"Clone"})," strategy:"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Clone autotest",src:n(63297).A+"",title:"Clone autotest",width:"3585",height:"2017"})}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Select all the settings that define how the autotest will be added to Git server:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Git server"})," - the pre-configured server where the component will be hosted. Select one from the from the drop-down list. Please refer to the ",(0,i.jsx)(t.a,{href:"/docs/3.9/user-guide/git-server-overview",children:"Manage Git Servers"})," page to learn how to create the one."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Repository name"})," - the relative path to the repository, such as ",(0,i.jsx)(t.code,{children:"/epmd-edp/examples/basic/edp-auto-tests-simple-example"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Component name"})," - the name of the autotest. Must be at least two characters using the lower-case letters, numbers and inner dashes."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Description"})," - brief and concise description that explains the purpose of the autotest."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Specify the autotest language properties:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Autotest code language"})," - defines the code language with its supported frameworks. Selecting ",(0,i.jsx)(t.strong,{children:"Other"})," allows extending the default code languages and get the necessary build tool."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Language version/framework"})," - defines the specific framework or language version of the autotest. The field depends on the selected code language. Specify Java 8, Java 11 or Java 17 to be used."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Build Tool"})," - allows to choose the build tool to use. In case of autotests, Gradle and Maven are available."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Autotest report framework"})," - all the autotest reports will be created in the Allure framework by default."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Click the ",(0,i.jsx)(t.strong,{children:"Next"})," button to proceed."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"the-advanced-settings-menu",children:"The Advanced Settings Menu"}),"\n",(0,i.jsxs)(t.p,{children:["In the ",(0,i.jsx)(t.strong,{children:"Advanced Settings"})," menu, specify the branch options and define the Jira settings:"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Advanced settings",src:n(75369).A+"",title:"Advanced settings",width:"3585",height:"2017"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Default branch"})," - the name of the branch where you want the development to be performed."]}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsx)(t.p,{children:"The default branch cannot be deleted."})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Codebase versioning type"})," - defines how will the autotest tag be changed once the new image version is built. There are two versioning types:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"default"}),": Using the default versioning type, in order to specify the version of the current artifacts, images, and tags in the Version Control System, a developer should navigate to the corresponding file and change the version ",(0,i.jsx)(t.strong,{children:"manually"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"edp"}),": Using the edp versioning type, a developer indicates the version number from which all the artifacts will be versioned and, as a result, ",(0,i.jsx)(t.strong,{children:"automatically"})," registered in the corresponding file (e.g. pom.xml). When selecting the edp versioning type, the extra fields will appear, type the version number from which you want the artifacts to be versioned:"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Edp versioning",src:n(50232).A+"",title:"Edp versioning",width:"3584",height:"2016"})}),"\n",(0,i.jsx)(t.p,{children:"Type the version number from which you want the artifacts to be versioned."}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.strong,{children:"Start Version From"})," field must be filled out in compliance with the semantic versioning rules, e.g. 1.2.3 or 10.10.10. Please refer to the ",(0,i.jsx)(t.a,{href:"https://semver.org/",children:"Semantic Versioning"})," page for details."]})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Specify the pattern to validate a commit message"})," - the regular expression used to indicate the pattern that is followed on the project to validate a commit message in the code review pipeline. An example of the pattern: ",(0,i.jsx)(t.code,{children:"^[PROJECT_NAME-d{4}]:.*$"}),"."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Jira integration",src:n(53700).A+"",width:"3585",height:"2016"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Integrate with Jira server"})," - this check box is used in case it is required to connect Jira tickets with the commits\nand have a respective label in the ",(0,i.jsx)(t.strong,{children:"Fix Version"})," field."]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["To adjust the Jira integration functionality, first apply the necessary changes described on the ",(0,i.jsx)(t.a,{href:"/docs/3.9/operator-guide/project-management-and-reporting/jira-integration",children:"Adjust Jira Integration"})," page."]})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Jira Server"})," - the integrated Jira server with related Jira tasks."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Specify the pattern to find a Jira ticket number in a commit message"})," - based on this pattern, the value from KubeRocketCI will be displayed in Jira."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Mapping field name",src:n(38858).A+"",title:"Mapping field name",width:"3585",height:"1888"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Mapping field name"})," - the section where the additional Jira fields are specified the names of the Jira fields that should be filled in with attributes from KubeRocketCI:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Select the name of the field in a Jira ticket. The available fields are the following: ",(0,i.jsx)(t.em,{children:"Fix Version/s"}),", ",(0,i.jsx)(t.em,{children:"Component/s"})," and ",(0,i.jsx)(t.em,{children:"Labels"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Click the ",(0,i.jsx)(t.strong,{children:"Add"})," button to add the mapping field name."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Enter Jira pattern for the field name:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["For the ",(0,i.jsx)(t.strong,{children:"Fix Version/s"})," field, select the ",(0,i.jsx)(t.strong,{children:"EDP_VERSION"})," variable that represents an KubeRocketCI upgrade version, as in ",(0,i.jsx)(t.em,{children:"2.7.0-SNAPSHOT"}),".Combine variables to make the value more informative. For example, the pattern ",(0,i.jsx)(t.strong,{children:"EDP_VERSION-EDP_COMPONENT"})," will be displayed as ",(0,i.jsx)(t.em,{children:"2.7.0-SNAPSHOT-nexus-operator"})," in Jira."]}),"\n",(0,i.jsxs)(t.li,{children:["For the ",(0,i.jsx)(t.strong,{children:"Component/s"})," field select the ",(0,i.jsx)(t.strong,{children:"EDP_COMPONENT"})," variable that defines the name of the existing repository. For example, ",(0,i.jsx)(t.em,{children:"nexus-operator"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["For the ",(0,i.jsx)(t.strong,{children:"Labels"})," field select the ",(0,i.jsx)(t.strong,{children:"EDP_GITTAG"}),"variable that defines a tag assigned to the commit in Git Hub. For example, ",(0,i.jsx)(t.em,{children:"build/2.7.0-SNAPSHOT.59"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Click the bin icon to remove the Jira field name."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["After the complete adding of the autotest, inspect the ",(0,i.jsx)(t.a,{href:"/docs/3.9/user-guide/autotest",children:"Autotest Overview"})," page to learn how you can operate applications."]}),"\n",(0,i.jsx)(t.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/3.9/user-guide/autotest",children:"Manage Autotests"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/3.9/user-guide/add-application",children:"Add Application"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/3.9/user-guide/add-cd-pipeline",children:"Add CD Pipelines"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/3.9/operator-guide/project-management-and-reporting/jira-integration",children:"Adjust Jira Integration"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/3.9/user-guide/add-git-server",children:"Manage Git Providers"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},75369:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/autotests-advanced-settings-autotest-725e956426a1fc9c36c8e24f8356a7a5.png"},63297:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/autotests-clone-autotests-7444002a89df6b3b2965756b8348abdd.png"},92015:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/autotests-select-strategy-ec266d92cd1f755e9f04381d4b16e0fd.png"},1507:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/autotests-yaml-edit-1e85041dcca3d1717eb8889c9eb47133.png"},96546:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/components-create-new-codebase-58641c14c1e2d310a8e6a4d66361f411.png"},50232:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/components-edp-versioning-55a5a290b6306a16afc215a0bc42a5de.png"},38858:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/components-jira-advanced-mapping-457761810df51f9ca3bec4d4d048afdb.png"},53700:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/components-jira-server-6fa73475a43bd1f090e509186245d0fc.png"},94667:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/components-select-type-new-codebase-5f6dcf7d9cacc9da34bd47c01eb52a4e.png"},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var s=n(96540);const i={},r=s.createContext(i);function a(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);