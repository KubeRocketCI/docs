"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9064],{1734:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var s=n(74848),i=n(28453);const r={},o="Manage Project Visibility",a={id:"operator-guide/code-quality/sonarqube-visibility",title:"Manage Project Visibility",description:"This manual offers detailed guidance on configuring permissions for SonarQube projects, ensuring that only authorized personnel can access and interact with the data on the SonarQube platform. It caters to both new and existing SonarQube projects, providing a clear pathway to refine visibility settings for enhanced security.",source:"@site/docs/operator-guide/code-quality/sonarqube-visibility.md",sourceDirName:"operator-guide/code-quality",slug:"/operator-guide/code-quality/sonarqube-visibility",permalink:"/docs/next/operator-guide/code-quality/sonarqube-visibility",draft:!1,unlisted:!1,editUrl:"https://github.com/KubeRocketCI/docs/edit/main/docs/operator-guide/code-quality/sonarqube-visibility.md",tags:[],version:"current",lastUpdatedBy:"oleksandr_taruraiev",lastUpdatedAt:1721931864e3,frontMatter:{},sidebar:"operatorGuideSidebar",previous:{title:"SonarQube Integration",permalink:"/docs/next/operator-guide/code-quality/sonarqube"},next:{title:"Jira Integration",permalink:"/docs/next/operator-guide/project-management-and-reporting/jira-integration"}},c={},l=[{value:"Restrict Access for New Projects",id:"restrict-access-for-new-projects",level:2},{value:"Configure Access for Existing Projects",id:"configure-access-for-existing-projects",level:2},{value:"Related Articles",id:"related-articles",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"manage-project-visibility",children:"Manage Project Visibility"}),"\n",(0,s.jsx)(t.p,{children:"This manual offers detailed guidance on configuring permissions for SonarQube projects, ensuring that only authorized personnel can access and interact with the data on the SonarQube platform. It caters to both new and existing SonarQube projects, providing a clear pathway to refine visibility settings for enhanced security."}),"\n",(0,s.jsxs)(t.p,{children:["By leveraging the OpenID Connect mechanism for login, users are automatically assigned to the ",(0,s.jsx)(t.code,{children:"sonar-users"})," group, granting them access to all projects by default. This document outlines methods to alter these default permissions, enhancing the platform's security and data confidentiality. It is structured into two main sections: one focusing on ",(0,s.jsx)(t.a,{href:"#restrict-access-for-new-projects",children:"restricting access to new projects"}),", and the other on ",(0,s.jsx)(t.a,{href:"#configure-access-for-existing-projects",children:"reconfiguring access settings for existing projects"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"restrict-access-for-new-projects",children:"Restrict Access for New Projects"}),"\n",(0,s.jsx)(t.p,{children:"In its default configuration, SonarQube does not restrict access to newly created projects, making them accessible to all instance users. To modify this behavior and set new projects to private by default, follow these instructions:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Open the SonarQube UI in the browser."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Navigate to the ",(0,s.jsx)(t.code,{children:"Administration"})," tab:"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"SonarQube user settings",src:n(19253).A+"",title:"SonarQube user settings",width:"1904",height:"936"})}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["Ensure you have admin rights to see the ",(0,s.jsx)(t.code,{children:"Administration"})," section."]})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Click the ",(0,s.jsx)(t.code,{children:"Projects"})," button and select ",(0,s.jsx)(t.code,{children:"Management"}),":"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"SonarQube user settings",src:n(14352).A+"",title:"SonarQube user settings",width:"1899",height:"912"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"On the project management page, click pencil icon at the top-right corner::"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"SonarQube user settings",src:n(73368).A+"",title:"SonarQube user settings",width:"1898",height:"934"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Select ",(0,s.jsx)(t.strong,{children:"Private"})," and click ",(0,s.jsx)(t.strong,{children:"Change Default Visibility"}),":"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"SonarQube user settings",src:n(3239).A+"",title:"SonarQube user settings",width:"1921",height:"927"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"configure-access-for-existing-projects",children:"Configure Access for Existing Projects"}),"\n",(0,s.jsx)(t.p,{children:"To make all the current projects private, follow the steps below:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["In the ",(0,s.jsx)(t.strong,{children:"Projects"})," tab, enter the project you want to make private."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["In the project page, click the ",(0,s.jsx)(t.strong,{children:"Project Settings"})," button and select ",(0,s.jsx)(t.strong,{children:"Permissions"}),":"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"SonarQube user settings",src:n(33253).A+"",title:"SonarQube user settings",width:"1897",height:"911"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["In the project permissions page, select ",(0,s.jsx)(t.strong,{children:"Private"}),":"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"SonarQube user settings",src:n(30141).A+"",title:"SonarQube user settings",width:"1897",height:"932"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Repeat the procedure for all of the projects you want to make private."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/docs/next/operator-guide/code-quality/sonarqube",children:"SonarQube Integration"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/docs/next/operator-guide/artifacts-management/nexus-sonatype",children:"Nexus Sonatype Integration"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/docs/next/quick-start/integrate-sonarcloud",children:"Integrate SonarQube"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},19253:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/sonar_administration-6edc378028158f1cad372905120bfe5a.png"},73368:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/sonar_pencil-bde9387d7cae69b8bd74643ada163c08.png"},3239:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/sonar_private_visibility-af89b8e447fa66b82dcbab7edab7fb26.png"},33253:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/sonar_project_permissions-44bfc6e634e343cb223094f5794f17ce.png"},30141:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/sonar_project_private_permissions-4582f13d1272121ca2d19a1926229fbe.png"},14352:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/sonar_projects_management-eefebf8d9c45cf0cb40aab6ef489408f.png"},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var s=n(96540);const i={},r=s.createContext(i);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);