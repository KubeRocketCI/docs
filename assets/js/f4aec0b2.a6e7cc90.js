"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[59582],{57275:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"user-guide/add-application","title":"Add Application","description":"Master application creation in KubeRocketCI, from cloning repositories to importing projects, for streamlined software development.","source":"@site/versioned_docs/version-3.10/user-guide/add-application.md","sourceDirName":"user-guide","slug":"/user-guide/add-application","permalink":"/docs/user-guide/add-application","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/user-guide/add-application.md","tags":[],"version":"3.10","lastUpdatedBy":"Oleksandr_Stepanov@epam.com","lastUpdatedAt":1739954692000,"frontMatter":{"title":"Add Application","sidebar_label":"Add Application","description":"Master application creation in KubeRocketCI, from cloning repositories to importing projects, for streamlined software development."},"sidebar":"userGuideSidebar","previous":{"title":"Components Overview","permalink":"/docs/user-guide/components"},"next":{"title":"Manage Applications","permalink":"/docs/user-guide/application"}}');var s=i(74848),r=i(28453);const o={title:"Add Application",sidebar_label:"Add Application",description:"Master application creation in KubeRocketCI, from cloning repositories to importing projects, for streamlined software development."},a="Add Application",l={},c=[{value:"Create Application in YAML",id:"create-application-in-yaml",level:2},{value:"Create Application via UI",id:"create-application-via-ui",level:2},{value:"Codebase Info Menu",id:"codebase-info-menu",level:3},{value:"Advanced Settings Menu",id:"advanced-settings-menu",level:3},{value:"Related Articles",id:"related-articles",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{Head:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"add-application",children:"Add Application"})}),"\n",(0,s.jsx)(t,{children:(0,s.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/user-guide/add-application/"})}),"\n",(0,s.jsxs)(n.p,{children:["KubeRocketCI portal allows you to create an application, clone an existing repository with the application to your Version Control System (VCS), or using an external repository and importing an application to the environment. When an application is created or cloned, the system automatically generates a corresponding repository within the integrated Version Control System. You can create an Application ",(0,s.jsx)(n.a,{href:"#create-application-in-yaml",children:"in YAML"})," or ",(0,s.jsx)(n.a,{href:"#create-application-via-ui",children:"via the two-step menu"})," in the dialog."]}),"\n",(0,s.jsxs)(n.p,{children:["To add an application, navigate to the ",(0,s.jsx)(n.strong,{children:"Components"})," section on the navigation bar and click ",(0,s.jsx)(n.strong,{children:"+ Create component"}),":"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Create new application",src:i(11709).A+"",title:"Create new application",width:"1922",height:"1114"})}),"\n",(0,s.jsxs)(n.p,{children:["Once clicked, the ",(0,s.jsx)(n.strong,{children:"Create new component"})," dialog will appear, then select ",(0,s.jsx)(n.strong,{children:"Application"})," and click ",(0,s.jsx)(n.strong,{children:"Next"}),":"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Application info",src:i(16278).A+"",title:"Application info",width:"1922",height:"1114"})}),"\n",(0,s.jsxs)(n.p,{children:["Choose one of the strategies and click ",(0,s.jsx)(n.strong,{children:"Create"}),":"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Select strategy",src:i(10037).A+"",title:"Select strategy",width:"1922",height:"1114"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Create from template"})," \u2013 creates a project on the pattern in accordance with an application language, a build tool, and a framework. This strategy is recommended for projects that start developing their applications from scratch."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Import project"})," - allows using existing VCS repository to integrate with KubeRocketCI. While importing the existing repository, select the Git server from the drop-down list and define the relative path to the repository, such as ",(0,s.jsx)(n.code,{children:"epmd-edp/python-python-flask"}),"."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["In order to use the ",(0,s.jsx)(n.strong,{children:"Import project"})," strategy, make sure to adjust it with the ",(0,s.jsx)(n.a,{href:"/docs/user-guide/add-git-server",children:"Integrate GitLab/GitHub in Tekton"})," page."]})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Clone project"})," \u2013 clones the indicated repository into KubeRocketCI. While cloning the existing repository, it is required to fill in the ",(0,s.jsx)(n.strong,{children:"Repository URL"})," field and specify the credentials if needed:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Clone application",src:i(93666).A+"",title:"Clone application",width:"1920",height:"1112"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"create-application-in-yaml",children:"Create Application in YAML"}),"\n",(0,s.jsxs)(n.p,{children:["Click ",(0,s.jsx)(n.strong,{children:"Edit YAML"})," in the upper-right corner of the ",(0,s.jsx)(n.strong,{children:"Create Application"})," dialog to open the YAML editor and create the Application."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Edit YAML",src:i(48162).A+"",title:"Edit YAML",width:"2550",height:"1718"})}),"\n",(0,s.jsxs)(n.p,{children:["To edit YAML in the minimal editor, turn on the ",(0,s.jsx)(n.strong,{children:"Use minimal editor"})," toggle in the upper-right corner of the ",(0,s.jsx)(n.strong,{children:"Create Application"})," dialog."]}),"\n",(0,s.jsxs)(n.p,{children:["To save the changes, select the ",(0,s.jsx)(n.strong,{children:"Save & Apply"})," button."]}),"\n",(0,s.jsx)(n.h2,{id:"create-application-via-ui",children:"Create Application via UI"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"Create Application"})," dialog contains two steps:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The Codebase Info Menu"}),"\n",(0,s.jsx)(n.li,{children:"The Advanced Settings Menu"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"codebase-info-menu",children:"Codebase Info Menu"}),"\n",(0,s.jsxs)(n.p,{children:["Follow the instructions below to fill in the fields of the ",(0,s.jsx)(n.strong,{children:"Codebase Info"})," menu:"]}),"\n",(0,s.jsxs)(n.p,{children:["In our example, we will use the ",(0,s.jsx)(n.strong,{children:"Create from template"})," strategy:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Create application",src:i(91855).A+"",title:"Create application",width:"1922",height:"1114"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Select all the settings that define how the application will be added to Git server:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Git server"})," - the pre-configured server where the component will be hosted. Select one from the from the drop-down list. Please refer to the ",(0,s.jsx)(n.a,{href:"/docs/user-guide/git-server-overview",children:"Manage Git Servers"})," page to learn how to create the one."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Repository name"})," - the relative path to the repository, such as ",(0,s.jsx)(n.code,{children:"epmd-edp/python-python-flask"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Component name"})," - the name of the application. Must be at least two characters using the lower-case letters, numbers and inner dashes."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Description"})," - brief and concise description that explains the purpose of the application."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Empty project"})," - check this box to create a application with an empty repository. The empty repository option is available only for the ",(0,s.jsx)(n.strong,{children:"Create from template"})," strategy."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Specify the application language properties:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Application Code Language"})," - defines the code language with its supported frameworks:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Java \u2013 selecting specific Java version (8,11,17 are available)."}),"\n",(0,s.jsx)(n.li,{children:"JavaScript - selecting JavaScript allows using React, Vue, Angular, Express, Next.js and Antora frameworks."}),"\n",(0,s.jsx)(n.li,{children:"Python - selecting Python allows using the Python v.3.8, FastAPI, Flask frameworks."}),"\n",(0,s.jsx)(n.li,{children:"Go - selecting Go allows using the Beego, Gin and Operator SDK frameworks."}),"\n",(0,s.jsx)(n.li,{children:"C# - selecting C# allows using the .Net v.3.1 and .Net v.6.0 frameworks."}),"\n",(0,s.jsx)(n.li,{children:"Helm - selecting Helm allows using the Helm framework."}),"\n",(0,s.jsx)(n.li,{children:"Other - selecting Other allows extending the default code languages when creating a codebase with the clone/import strategy."}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"Create from template"})," strategy does not allow to customize the default code language set."]})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Language version/framework"})," - defines the specific framework or language version of the application. The field depends on the selected code language."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Select Build Tool"})," -  allows to choose the build tool to use. A set tools and can be changed in accordance with the selected code language."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Java - selecting Java allows using the Gradle or Maven tool."}),"\n",(0,s.jsx)(n.li,{children:"JavaScript - selecting JavaScript allows using the NPM tool."}),"\n",(0,s.jsx)(n.li,{children:"C# - selecting C# allows using the .Net tool."}),"\n",(0,s.jsx)(n.li,{children:"Python - selecting Python allows using Python tool."}),"\n",(0,s.jsx)(n.li,{children:"Go - selecting Go allows using Go tool."}),"\n",(0,s.jsx)(n.li,{children:"Helm - selecting Helm allows using Helm tool."}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"Select Build Tool"})," field disposes of the default tools and can be changed in accordance with the selected code language."]})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["Tekton pipelines offer built-in support for Java Maven Multi-Module projects. These pipelines are capable of recognizing Java deployable modules based on the information in the ",(0,s.jsx)(n.strong,{children:"pom.xml"})," file and performing relevant deployment actions. It's important to note that although the Dockerfile is typically located in the root directory, Kaniko, the tool used for building container images, uses the targets folder within the deployable module's context. For a clear illustration of a Multi-Module project structure, please refer to this ",(0,s.jsx)(n.a,{href:"https://github.com/epmd-edp/java-maven-java17-multimodule.git",children:"example"})," on GitHub, which showcases a commonly used structure for Java Maven Multi-Module projects."]})}),"\n",(0,s.jsx)(n.h3,{id:"advanced-settings-menu",children:"Advanced Settings Menu"}),"\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.strong,{children:"Advanced Settings"})," menu, specify the branch options and define the Jira settings:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Advanced settings",src:i(5117).A+"",title:"Advanced settings",width:"1922",height:"1114"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Default branch"})," - the name of the branch where you want the development to be performed."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"The default branch cannot be deleted."})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Deployment Options"})," - Select the deployment option available."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"helm-chart"}),": Application will be deployed as a Helm chart using the Argo CD tool."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"rpm-package"}),": Application will be deployed as an rpm package using the Ansible tool. For more details, please refer to the ",(0,s.jsx)(n.a,{href:"/docs/operator-guide/cd/deploy-rpm",children:"Deploy RPM Packages"})," page."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Codebase versioning type"})," - defines how will the application tag be changed once the new image version is built. There are two versioning types:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"default"}),": Using the default versioning type, in order to specify the version of the current artifacts, images, and tags in the Version Control System, a developer should navigate to the corresponding file and change the version ",(0,s.jsx)(n.strong,{children:"manually"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"edp"}),": Using the edp versioning type, a developer indicates the version number from which all the artifacts will be versioned and, as a result, ",(0,s.jsx)(n.strong,{children:"automatically"})," registered in the corresponding file (e.g. pom.xml). When selecting the edp versioning type, the extra fields will appear, type the version number from which you want the artifacts to be versioned:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Edp versioning",src:i(13621).A+"",title:"Edp versioning",width:"1922",height:"1114"})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"Start Version From"})," field should be filled out in compliance with the semantic versioning rules, e.g. 1.2.3 or 10.10.10. Please refer to the ",(0,s.jsx)(n.a,{href:"https://semver.org/",children:"Semantic Versioning"})," page for details."]})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Specify the pattern to validate a commit message"})," - the regular expression used to indicate the pattern that is followed on the project to validate a commit message in the code review pipeline. An example of the pattern: ",(0,s.jsx)(n.code,{children:"^[PROJECT_NAME-d{4}]:.*$"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"JIRA integration",src:i(22707).A+"",title:"JIRA integration",width:"1922",height:"1114"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Integrate with Jira server"})," - this check box is used in case it is required to connect Jira tickets with the commits\nand have a respective label in the ",(0,s.jsx)(n.strong,{children:"Fix Version"})," field."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["To adjust the Jira integration functionality, first apply the necessary changes described on the ",(0,s.jsx)(n.a,{href:"/docs/operator-guide/project-management-and-reporting/jira-integration",children:"Adjust Jira Integration"})," page."]})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Jira Server"})," - the integrated Jira server with related Jira tasks."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Specify the pattern to find a Jira ticket number in a commit message"})," - based on this pattern, the value from KubeRocketCI will be displayed in Jira."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Mapping field name",src:i(93433).A+"",title:"Mapping fields",width:"1922",height:"1114"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Mapping field name"})," - the section where the additional Jira fields are specified the names of the Jira fields that should be filled in with attributes from KubeRocketCI:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Select the name of the field in a Jira ticket. The available fields are the following: ",(0,s.jsx)(n.em,{children:"Fix Version/s"}),", ",(0,s.jsx)(n.em,{children:"Component/s"})," and ",(0,s.jsx)(n.em,{children:"Labels"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click the ",(0,s.jsx)(n.strong,{children:"Add"})," button to add the mapping field name."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Enter Jira pattern for the field name:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["For the ",(0,s.jsx)(n.strong,{children:"Fix Version/s"})," field, select the ",(0,s.jsx)(n.strong,{children:"EDP_VERSION"})," variable that represents an EDP upgrade version, as in ",(0,s.jsx)(n.em,{children:"2.7.0-SNAPSHOT"}),".Combine variables to make the value more informative. For example, the pattern ",(0,s.jsx)(n.strong,{children:"EDP_VERSION-EDP_COMPONENT"})," will be displayed as ",(0,s.jsx)(n.em,{children:"2.7.0-SNAPSHOT-nexus-operator"})," in Jira."]}),"\n",(0,s.jsxs)(n.li,{children:["For the ",(0,s.jsx)(n.strong,{children:"Component/s"})," field select the ",(0,s.jsx)(n.strong,{children:"EDP_COMPONENT"})," variable that defines the name of the existing repository. For example, ",(0,s.jsx)(n.em,{children:"nexus-operator"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["For the ",(0,s.jsx)(n.strong,{children:"Labels"})," field select the ",(0,s.jsx)(n.strong,{children:"EDP_GITTAG"}),"variable that defines a tag assigned to the commit in Git Hub. For example, ",(0,s.jsx)(n.em,{children:"build/2.7.0-SNAPSHOT.59"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Click the bin icon to remove the Jira field name."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Click the ",(0,s.jsx)(n.strong,{children:"Apply"})," button to add the application to the Components list."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["After the complete adding of the application, inspect the ",(0,s.jsx)(n.a,{href:"/docs/user-guide/application",children:"Manage Applications"})," page to learn how you can operate applications."]})}),"\n",(0,s.jsx)(n.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/user-guide/application",children:"Manage Applications"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/user-guide/add-cd-pipeline",children:"Add CD Pipeline"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/operator-guide/project-management-and-reporting/jira-integration",children:"Adjust Jira Integration"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/user-guide/add-git-server",children:"Manage Git Providers"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},93666:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/application-clone-application-b97e7611dc406de81128b4bcb1807660.png"},91855:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/application-create-application-c123b0568f24e7e7d0c4130dca06eedb.png"},16278:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/application-create-new-application-8595e18ead4e333527d469af36bed01b.png"},48162:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/application-yaml-edit-6a285d092595fe7c22065d221ad29c7d.png"},11709:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/components-create-new-codebase-76c260a02f23b6ff5a7cd8b4df44ac29.png"},13621:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/components-edp-versioning-ddfdcae4888bed4009bf2ec44140d81d.png"},93433:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/components-jira-advanced-mapping-456b39ab41dec65e54f9b76e927b72d8.png"},22707:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/components-jira-server-dcccd23fd1096676f79738cdb7714ac6.png"},10037:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/components-select-strategy-f8507ec26c07f703e9ebd00aefe27a55.png"},5117:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/components-specify-advanced-settings-4fa590f7c781d6184a208929bd7ecef5.png"},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>a});var t=i(96540);const s={},r=t.createContext(s);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);