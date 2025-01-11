"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[89340],{47037:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"operator-guide/project-management-and-reporting/reportportal-keycloak","title":"Keycloak Integration","description":"Follow the steps below to integrate the ReportPortal with Keycloak.","source":"@site/versioned_docs/version-3.10/operator-guide/project-management-and-reporting/reportportal-keycloak.md","sourceDirName":"operator-guide/project-management-and-reporting","slug":"/operator-guide/project-management-and-reporting/reportportal-keycloak","permalink":"/docs/operator-guide/project-management-and-reporting/reportportal-keycloak","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/operator-guide/project-management-and-reporting/reportportal-keycloak.md","tags":[],"version":"3.10","lastUpdatedBy":"oleksandr_taruraiev","lastUpdatedAt":1733240186000,"frontMatter":{},"sidebar":"operatorGuideSidebar","previous":{"title":"Install ReportPortal","permalink":"/docs/operator-guide/project-management-and-reporting/install-reportportal"},"next":{"title":"Tekton Integration","permalink":"/docs/operator-guide/project-management-and-reporting/reportportal-tekton"}}');var i=n(74848),s=n(28453);const o={},l="Keycloak Integration",a={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Keycloak Configuration",id:"keycloak-configuration",level:2},{value:"ReportPortal Configuration",id:"reportportal-configuration",level:2},{value:"Related Articles",id:"related-articles",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"keycloak-integration",children:"Keycloak Integration"})}),"\n",(0,i.jsx)(t.p,{children:"Follow the steps below to integrate the ReportPortal with Keycloak."}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["It is also possible to install ReportPortal using the cluster add-ons. For details, please refer to the ",(0,i.jsx)(t.a,{href:"/docs/operator-guide/add-ons-overview",children:"Install via Add-Ons"})," page."]})}),"\n",(0,i.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Keycloak is installed. For detailed instructions, please refer to the provided ",(0,i.jsx)(t.a,{href:"/docs/operator-guide/auth/keycloak",children:"documentation"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["ReportPortal is installed. To install it using the Helm Chart, please follow the instructions outlined in the corresponding ",(0,i.jsx)(t.a,{href:"../project-management-and-reporting/install-reportportal",children:"documentation"}),"."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"keycloak-configuration",children:"Keycloak Configuration"}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["The Keycloak configuration can also be applied using Keycloak resources from the ",(0,i.jsx)(t.a,{href:"https://github.com/epam/edp-cluster-add-ons/tree/main/clusters/core/addons/report-portal/templates/saml",children:"Cluster Add-Ons"})," repository.\nTo apply the Keycloak configuration, the Keycloak Operator is required. For installation details, refer to the ",(0,i.jsx)(t.a,{href:"https://docs.kuberocketci.io/docs/next/operator-guide/auth/eks-oidc-integration#install-keycloak-operator",children:"Install Keycloak Operator"})," page."]})}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Navigate to ",(0,i.jsx)(t.strong,{children:"Client Scopes"})," > ",(0,i.jsx)(t.strong,{children:"Create client scope"})," and create a new scope with the ",(0,i.jsx)(t.em,{children:"SAML"})," protocol type."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Navigate to ",(0,i.jsx)(t.strong,{children:"Client Scopes"})," > ",(0,i.jsx)(t.strong,{children:"your_scope_name"})," > ",(0,i.jsx)(t.strong,{children:"Mappers"})," > ",(0,i.jsx)(t.strong,{children:"Configure a new mapper"})," > select the ",(0,i.jsx)(t.em,{children:"User Attribute"})," mapper type. Add three mappers for the email, first name, and last name by typing ",(0,i.jsx)(t.code,{children:"lastName"}),", ",(0,i.jsx)(t.code,{children:"firstName"}),", and ",(0,i.jsx)(t.code,{children:"email"})," in the ",(0,i.jsx)(t.em,{children:"User Attribute"})," field:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.em,{children:"Name"})," is a display name in Keycloak."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.em,{children:"User Attribute"})," is a user property for mapping."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.em,{children:"SAML Attribute Name"})," is an attribute used for requesting information in the ReportPortal configuration."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.em,{children:"SAML Attribute NameFormat"}),": ",(0,i.jsx)(t.code,{children:"Basic"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.em,{children:"Aggregate attribute values"}),": ",(0,i.jsx)(t.code,{children:"Off"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{alt:"User mapper sample",src:n(90982).A+"",title:"User mapper sample",width:"1107",height:"665"}),"\n",(0,i.jsx)(t.img,{alt:"Scope mappers",src:n(72189).A+"",title:"Scope mappers",width:"1630",height:"460"})]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Navigate to ",(0,i.jsx)(t.strong,{children:"Clients"})," > ",(0,i.jsx)(t.strong,{children:"Create client"})," and fill in the following fields:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.em,{children:"Client type"}),": ",(0,i.jsx)(t.code,{children:"SAML"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.em,{children:"Client ID"}),": ",(0,i.jsx)(t.code,{children:"report.portal.sp.id"}),"."]}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{type:"warning",children:(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"report.portal.sp.id"})," Client ID is a constant value."]})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Navigate to ",(0,i.jsx)(t.strong,{children:"Client"})," > ",(0,i.jsx)(t.strong,{children:"your_client"})," > ",(0,i.jsx)(t.strong,{children:"Settings"})," and add ",(0,i.jsx)(t.code,{children:"https://<report-portal-url>/*"})," to the ",(0,i.jsx)(t.em,{children:"Valid redirect URIs"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Navigate to ",(0,i.jsx)(t.strong,{children:"Client"})," > ",(0,i.jsx)(t.strong,{children:"your_client"})," > ",(0,i.jsx)(t.strong,{children:"Keys"})," and disable ",(0,i.jsx)(t.em,{children:"Client signature required"}),"."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Client keys",src:n(51060).A+"",title:"Client keys",width:"1031",height:"742"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Navigate to ",(0,i.jsx)(t.strong,{children:"Client"})," > ",(0,i.jsx)(t.strong,{children:"your_client"})," > ",(0,i.jsx)(t.strong,{children:"Client scopes"})," and add the scope created on step 3 with the default ",(0,i.jsx)(t.em,{children:"Assigned type"}),"."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Client scopes",src:n(23352).A+"",title:"Client scopes",width:"1627",height:"556"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"reportportal-configuration",children:"ReportPortal Configuration"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Log in to the ReportPortal with the admin permissions."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Navigate to ",(0,i.jsx)(t.strong,{children:"Client"})," > ",(0,i.jsx)(t.strong,{children:"Administrate"})," > ",(0,i.jsx)(t.strong,{children:"Plugins"})," and select the SAML plugin."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Plugins menu",src:n(10466).A+"",title:"Plugins menu",width:"1920",height:"977"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"To add a new integration, fill in the following fields:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Add SAML configuration",src:n(93401).A+"",title:"Add SAML configuration",width:"1920",height:"1097"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.em,{children:"Provider name"})," is the display name in the ReportPortal login page."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.em,{children:"Metadata URL"})," ",(0,i.jsx)(t.code,{children:"https://<keycloak_url>/auth/realms/<realm>/protocol/saml/descriptor"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.em,{children:"Email"})," is the value from the ",(0,i.jsx)(t.em,{children:"SAML Attribute Name"})," field in the Keycloak mapper."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.em,{children:"RP callback URL"})," ",(0,i.jsx)(t.code,{children:"https://<report_portal_url>/uat"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.em,{children:"Name attributes mode"})," is the first & last name (type based on your mapper)."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.em,{children:"First name"})," is the value from the ",(0,i.jsx)(t.em,{children:"SAML Attribute Name"})," field in the Keycloak mapper."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.em,{children:"Last name"})," is the value from the ",(0,i.jsx)(t.em,{children:"SAML Attribute Name"})," field in the Keycloak mapper."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Log in to the ReportPortal."}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["By default, after the first login, ReportPortal creates the ",(0,i.jsx)(t.code,{children:"<your_email>_personal"})," project and adds an account with the ",(0,i.jsx)(t.code,{children:"Project manager"})," role."]})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Report portal login page",src:n(87152).A+"",title:"Report portal login page",width:"1920",height:"977"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"../project-management-and-reporting/install-reportportal",children:"Install ReportPortal"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/operator-guide/project-management-and-reporting/reportportal-tekton",children:"Integration With Tekton"})}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},90982:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/reportportal-keycloak-1-95c7057415307093880ec7f72164610a.png"},72189:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/reportportal-keycloak-2-a162ced308614d3fa5776425f9705262.png"},51060:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/reportportal-keycloak-3-c5ec242c56055cc26673b1920de8b5da.png"},23352:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/reportportal-keycloak-4-576f044360fa64742f13dc1efaa68963.png"},10466:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/reportportal-keycloak-5-53df8f5fceb1e934e2fc3f2f937a32db.png"},93401:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/reportportal-keycloak-6-589136ba4bc6683506c71d9ed0f40bfb.png"},87152:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/reportportal-keycloak-7-7133f5af1916045daa56b604dc14cc2d.png"},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>l});var r=n(96540);const i={},s=r.createContext(i);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);