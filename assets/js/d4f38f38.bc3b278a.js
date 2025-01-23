"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[6013],{11122:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"operator-guide/microsoft-entra/harbor-authentication","title":"Guide: Microsoft Entra SSO integration with Harbor","description":"This guide provides instructions on how to configure Harbor with OpenID Connect (OIDC) authentication using Microsoft Entra as the Identity Provider (IdP).","source":"@site/versioned_docs/version-3.10/operator-guide/microsoft-entra/harbor-authentication.md","sourceDirName":"operator-guide/microsoft-entra","slug":"/operator-guide/microsoft-entra/harbor-authentication","permalink":"/docs/operator-guide/microsoft-entra/harbor-authentication","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/operator-guide/microsoft-entra/harbor-authentication.md","tags":[],"version":"3.10","lastUpdatedBy":"Sergiy Kulanov","lastUpdatedAt":1737665576000,"frontMatter":{"id":"harbor-authentication","sidebar_label":"Harbor"},"sidebar":"operatorGuideSidebar","previous":{"title":"Grafana","permalink":"/docs/operator-guide/microsoft-entra/grafana-authentication"},"next":{"title":"Nexus","permalink":"/docs/operator-guide/microsoft-entra/nexus-authentication"}}');var r=i(74848),s=i(28453);const o={id:"harbor-authentication",sidebar_label:"Harbor"},c="Guide: Microsoft Entra SSO integration with Harbor",a={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuring Microsoft Entra Application",id:"configuring-microsoft-entra-application",level:2},{value:"Creating the Groups",id:"creating-the-groups",level:2},{value:"Configuring Harbor",id:"configuring-harbor",level:2},{value:"Related Articles",id:"related-articles",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{Head:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"guide-microsoft-entra-sso-integration-with-harbor",children:"Guide: Microsoft Entra SSO integration with Harbor"})}),"\n",(0,r.jsx)(t,{children:(0,r.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/operator-guide/microsoft-entra/harbor-authentication/"})}),"\n",(0,r.jsx)(n.p,{children:"This guide provides instructions on how to configure Harbor with OpenID Connect (OIDC) authentication using Microsoft Entra as the Identity Provider (IdP)."}),"\n",(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Access to the ",(0,r.jsx)(n.a,{href:"https://entra.microsoft.com/",children:"Microsoft Entra Admin Center"})," with administrative privileges."]}),"\n",(0,r.jsx)(n.li,{children:"Created Microsoft Entra Tenant."}),"\n",(0,r.jsx)(n.li,{children:"Installed Harbor."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"configuring-microsoft-entra-application",children:"Configuring Microsoft Entra Application"}),"\n",(0,r.jsx)(n.p,{children:"To configure Microsoft Entra as the Identity Provider for Harbor, it is necessary to create and configure an Application in the Microsoft Entra Admin Center."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Log in to the ",(0,r.jsx)(n.a,{href:"https://entra.microsoft.com/?feature.msaljs=true#home",children:"Microsoft Entra Admin Center"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Microsoft Entra Admin Center",src:i(32491).A+"",width:"3364",height:"1648"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["In the left sidebar menu, select ",(0,r.jsx)(n.strong,{children:"Applications"})," and click ",(0,r.jsx)(n.strong,{children:"App registrations"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"App registrations",src:i(77396).A+"",width:"3364",height:"1648"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Click on the ",(0,r.jsx)(n.strong,{children:"New registration"})," button."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"New registration",src:i(90522).A+"",width:"3364",height:"1648"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Fill in the required fields, such as ",(0,r.jsx)(n.strong,{children:"Name"}),", ",(0,r.jsx)(n.strong,{children:"Supported account types"})," and ",(0,r.jsx)(n.strong,{children:"Redirect URI"}),". Click ",(0,r.jsx)(n.strong,{children:"Register"})," to create the application."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"Redirect URI"})," should be in the format ",(0,r.jsx)(n.code,{children:"https://<Harbor URL>/c/oidc/callback"}),"."]})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Register application",src:i(64656).A+"",width:"3364",height:"1658"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Navigate to the ",(0,r.jsx)(n.strong,{children:"Certificates & secrets"})," section from the left sidebar menu. In the ",(0,r.jsx)(n.strong,{children:"Client secrets"})," tab, click on the ",(0,r.jsx)(n.strong,{children:"New client secret"})," button to create a new secret. Fill in the required fields and click ",(0,r.jsx)(n.strong,{children:"Add"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Client secrets",src:i(25226).A+"",width:"3364",height:"1660"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Copy the generated Client secret value and store it securely."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Client secret",src:i(74021).A+"",width:"3364",height:"1660"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Navigate to the ",(0,r.jsx)(n.strong,{children:"Token configuration"})," section and click on ",(0,r.jsx)(n.strong,{children:"Add groups claim"})," button. Choose the group type as ",(0,r.jsx)(n.strong,{children:"Security Groups"})," and for the ID token type, select ",(0,r.jsx)(n.strong,{children:"Group ID"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Token configuration",src:i(25281).A+"",width:"3364",height:"1660"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Navigate to the ",(0,r.jsx)(n.strong,{children:"API permissions"})," section. Click on the ",(0,r.jsx)(n.strong,{children:"Add a permission"})," button. Select ",(0,r.jsx)(n.strong,{children:"Microsoft Graph"})," and then ",(0,r.jsx)(n.strong,{children:"Delegated permissions"}),". Add the following permissions:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"email"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"openid"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"profile"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"User.Read"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"API permissions",src:i(58780).A+"",width:"3364",height:"1660"})}),"\n",(0,r.jsxs)(n.p,{children:["After adding the permissions, click on the ",(0,r.jsx)(n.strong,{children:"Grant admin consent for 'Tenant name'"})," button to grant the required permissions."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"After configuring the Microsoft Entra Application, you can proceed with the Harbor configuration."}),"\n",(0,r.jsx)(n.h2,{id:"creating-the-groups",children:"Creating the Groups"}),"\n",(0,r.jsx)(n.p,{children:"To manage access to Harbor, it is necessary to create the groups in Microsoft Entra and assign users to it."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["In the Microsoft Entra Admin Center, in the left sidebar menu, select ",(0,r.jsx)(n.strong,{children:"Groups"})," and then ",(0,r.jsx)(n.strong,{children:"All groups"}),". Click on ",(0,r.jsx)(n.strong,{children:"New group"})," button to create a new group(s) for users who will have access to Harbor (e.g., ",(0,r.jsx)(n.code,{children:"administrator"}),")."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"New group",src:i(15868).A+"",width:"3364",height:"1647"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Fill in the required fields, such as ",(0,r.jsx)(n.strong,{children:"Groups type"})," and ",(0,r.jsx)(n.strong,{children:"Group name"}),". In the ",(0,r.jsx)(n.strong,{children:"Members"})," section, add users who will have access to SonarQube."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Create group",src:i(83380).A+"",width:"3364",height:"1658"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["After adding the necessary members, review the group settings and click ",(0,r.jsx)(n.strong,{children:"Create"})," to save the group."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"configuring-harbor",children:"Configuring Harbor"}),"\n",(0,r.jsx)(n.p,{children:"To integrate Harbor with the configured Microsoft Entra application, it is necessary to configure the OIDC parameters directly in Harbor."}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["The Application data, such as ",(0,r.jsx)(n.strong,{children:"Application (client) ID"})," and ",(0,r.jsx)(n.strong,{children:"Directory (tenant) ID"}),", can be found in the ",(0,r.jsx)(n.strong,{children:"Overview"})," section of the Application in the Microsoft Entra Admin Center.\n",(0,r.jsx)(n.img,{alt:"Application data",src:i(68740).A+"",width:"1296",height:"659"})]})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"Object ID"})," can be found in the ",(0,r.jsx)(n.strong,{children:"Overview"})," section of the group in the Microsoft Entra Admin Center.\n",(0,r.jsx)(n.img,{alt:"Group Object ID",src:i(17412).A+"",width:"1350",height:"903"})]})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Log in to the Harbor web interface as an administrator."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["In the left sidebar menu, navigate to ",(0,r.jsx)(n.strong,{children:"Administration"})," tab and click on ",(0,r.jsx)(n.strong,{children:"Configuration"})," section. In the ",(0,r.jsx)(n.strong,{children:"Authentication"})," tab, fill in the required fields for the OIDC configuration:"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Harbor Configuration",src:i(91257).A+"",width:"3364",height:"1656"})}),"\n",(0,r.jsx)(n.p,{children:"Replace the following values with the data from the Microsoft Entra Application:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["OIDC Provider Name: ",(0,r.jsx)(n.code,{children:"azure"})]}),"\n",(0,r.jsxs)(n.li,{children:["OIDC Endpoint: ",(0,r.jsx)(n.code,{children:"https://login.microsoftonline.com/<Directory (tenant) ID>/v2.0"}),", where ",(0,r.jsx)(n.code,{children:"<Directory (tenant) ID>"})," is the Directory ID of your Microsoft Entra Tenant."]}),"\n",(0,r.jsx)(n.li,{children:"OIDC Client ID: The Application (client) ID of your Microsoft Entra Application."}),"\n",(0,r.jsx)(n.li,{children:"OIDC Client Secret: The Client Secret value from the Microsoft Entra Application."}),"\n",(0,r.jsxs)(n.li,{children:["Group Claim Name: ",(0,r.jsx)(n.code,{children:"groups"})]}),"\n",(0,r.jsxs)(n.li,{children:["OIDC Admin Group: The ",(0,r.jsx)(n.strong,{children:"Object ID"})," of the ",(0,r.jsx)(n.code,{children:"administrator"})," group from the Microsoft Entra Admin Center."]}),"\n",(0,r.jsxs)(n.li,{children:["OIDC Scope: ",(0,r.jsx)(n.code,{children:"openid,profile,email,offline_access"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Click on the ",(0,r.jsx)(n.strong,{children:"Test OIDC Server"})," button to verify the configuration. If the test is successful, click on the ",(0,r.jsx)(n.strong,{children:"Save"})," button to apply the changes."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Verify that the OIDC authentication is configured correctly by logging in to the Harbor web interface using the ",(0,r.jsx)(n.strong,{children:"Login via OIDC Provider"})," button."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Harbor Login",src:i(19656).A+"",width:"3364",height:"1658"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"After completing these steps, Harbor is configured to use Microsoft Entra as the Identity Provider for OIDC authentication."}),"\n",(0,r.jsx)(n.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/operator-guide/microsoft-entra/oidc-authentication-overview",children:"OpenID Connect (OIDC) Authentication Overview"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},77396:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/app-registrations-85bb491010c97a96c465bae8c5f3d238.png"},83380:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/create-group-9dbf252dc7cd4c8f3b75962d9c234114.png"},58780:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/harbor-api-permissions-8f5d39cb50aa227d6d6b591005feff62.png"},68740:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/harbor-application-data-0de8788c368ad7c2631f605fb49e254b.png"},74021:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/harbor-client-secret-62e62ae3ffef4db972aeb34dbf4511c4.png"},25226:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/harbor-client-secrets-250d5e821c79d63c32567f1250385512.png"},91257:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/harbor-configuration-c79f9716e33e1c1c0dce231c09badb8d.png"},19656:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/harbor-login-7c302fd9ab5bb6b57a7863bd72dde23b.png"},25281:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/harbor-token-configuration-034f129d21db0f06c6df5451a877010c.png"},32491:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/microsoft-entra-admin-center-156ae7d9496f05355dce9a20eca80969.png"},15868:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/new-group-e01c9c34e53e303a3e24acfa7233005c.png"},90522:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/new-registration-47e751488bf7b3fc6c9c019c7e635ac8.png"},17412:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/oauth2-proxy-group-object-id-7e806c8677ce759613bad1cb357c7af5.png"},64656:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/register-application-abe176af450d421aa7dd9713dd3bf5cf.png"},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>c});var t=i(96540);const r={},s=t.createContext(r);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);