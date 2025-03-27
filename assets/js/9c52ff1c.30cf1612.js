"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[47562],{98698:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"operator-guide/microsoft-entra/oauth2-proxy-authentication","title":"Guide: Microsoft Entra SSO Integration With OAuth2-proxy (Tekton Dashboard)","description":"Instructions on configuring OAuth2-proxy for Tekton Dashboard with OIDC authentication using Microsoft Entra as the Identity Provider.","source":"@site/versioned_docs/version-3.11/operator-guide/microsoft-entra/oauth2-proxy-authentication.md","sourceDirName":"operator-guide/microsoft-entra","slug":"/operator-guide/microsoft-entra/oauth2-proxy-authentication","permalink":"/docs/operator-guide/microsoft-entra/oauth2-proxy-authentication","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/operator-guide/microsoft-entra/oauth2-proxy-authentication.md","tags":[],"version":"3.11","lastUpdatedBy":"Mykola Serdiuk","lastUpdatedAt":1743077202000,"frontMatter":{"title":"Guide: Microsoft Entra SSO Integration With OAuth2-proxy (Tekton Dashboard)","description":"Instructions on configuring OAuth2-proxy for Tekton Dashboard with OIDC authentication using Microsoft Entra as the Identity Provider.","sidebar_label":"OAuth2-proxy (Tekton Dashboard)"},"sidebar":"operatorGuideSidebar","previous":{"title":"Nexus","permalink":"/docs/operator-guide/microsoft-entra/nexus-authentication"},"next":{"title":"OpenSearch","permalink":"/docs/operator-guide/microsoft-entra/opensearch-authentication"}}');var r=n(74848),s=n(28453);const o={title:"Guide: Microsoft Entra SSO Integration With OAuth2-proxy (Tekton Dashboard)",description:"Instructions on configuring OAuth2-proxy for Tekton Dashboard with OIDC authentication using Microsoft Entra as the Identity Provider.",sidebar_label:"OAuth2-proxy (Tekton Dashboard)"},c="Guide: Microsoft Entra SSO Integration With OAuth2-proxy (Tekton Dashboard)",a={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuring Microsoft Entra Application",id:"configuring-microsoft-entra-application",level:2},{value:"Creating the Groups",id:"creating-the-groups",level:2},{value:"Configuring OAuth2-proxy Helm chart",id:"configuring-oauth2-proxy-helm-chart",level:2},{value:"Configuring Tekton Dashboard",id:"configuring-tekton-dashboard",level:2},{value:"Related Articles",id:"related-articles",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{Head:i}=t;return i||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"guide-microsoft-entra-sso-integration-with-oauth2-proxy-tekton-dashboard",children:"Guide: Microsoft Entra SSO Integration With OAuth2-proxy (Tekton Dashboard)"})}),"\n",(0,r.jsx)(i,{children:(0,r.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/operator-guide/microsoft-entra/oauth2-proxy-authentication"})}),"\n",(0,r.jsx)(t.p,{children:"This guide provides instructions on how to configure OAuth2-proxy for the Tekton Dashboard with OIDC authentication using Microsoft Entra as the Identity Provider."}),"\n",(0,r.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Access to the ",(0,r.jsx)(t.a,{href:"https://entra.microsoft.com/",children:"Microsoft Entra Admin Center"})," with administrative privileges."]}),"\n",(0,r.jsx)(t.li,{children:"Created Microsoft Entra Tenant."}),"\n",(0,r.jsx)(t.li,{children:"Installed Tekton Dashboard."}),"\n",(0,r.jsxs)(t.li,{children:["Installed OAuth2-proxy (can be installed during ",(0,r.jsx)(t.strong,{children:"Configuring Helm chart"})," step)."]}),"\n",(0,r.jsxs)(t.li,{children:["Fork copy of the ",(0,r.jsx)(t.a,{href:"https://github.com/epam/edp-cluster-add-ons",children:"edp-cluster-add-ons"})," repository."]}),"\n",(0,r.jsx)(t.li,{children:"(Optional) Installed External Secrets Operator."}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"configuring-microsoft-entra-application",children:"Configuring Microsoft Entra Application"}),"\n",(0,r.jsx)(t.p,{children:"To configure Microsoft Entra as the Identity Provider for the OAuth2-proxy, it is necessary to create and configure an Application in the Microsoft Entra Admin Center."}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Log in to the ",(0,r.jsx)(t.a,{href:"https://entra.microsoft.com/?feature.msaljs=true#home",children:"Microsoft Entra Admin Center"}),"."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Microsoft Entra Admin Center",src:n(52831).A+"",width:"3364",height:"1648"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["In the left sidebar menu, select ",(0,r.jsx)(t.strong,{children:"Applications"})," and click ",(0,r.jsx)(t.strong,{children:"App registrations"}),"."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"App registrations",src:n(33896).A+"",width:"3364",height:"1648"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Click on the ",(0,r.jsx)(t.strong,{children:"New registration"})," button."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"New registration",src:n(44606).A+"",width:"3364",height:"1648"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Fill in the required fields, such as ",(0,r.jsx)(t.strong,{children:"Name"}),", ",(0,r.jsx)(t.strong,{children:"Supported account types"})," and ",(0,r.jsx)(t.strong,{children:"Redirect URI"})," (You can skip setting the ",(0,r.jsx)(t.strong,{children:"Redirect URI"})," if you don't deploy OAuth2-proxy yet). Click ",(0,r.jsx)(t.strong,{children:"Register"})," to create the application."]}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.strong,{children:"Redirect URI"})," should be in the format ",(0,r.jsx)(t.code,{children:"https://<OAuth2-proxy ingress URL>/oauth2/callback"}),"."]})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Register application",src:n(13884).A+"",width:"3364",height:"1658"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["In the created application, navigate to the ",(0,r.jsx)(t.strong,{children:"Certificates & secrets"})," section from the left sidebar menu. In the ",(0,r.jsx)(t.strong,{children:"Client secrets"})," tab, click on the ",(0,r.jsx)(t.strong,{children:"New client secret"})," button to create a new secret. Fill in the required fields and click ",(0,r.jsx)(t.strong,{children:"Add"}),"."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Client secrets",src:n(62998).A+"",width:"3364",height:"1660"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Copy the generated Client secret value and store it securely. You will need this value to configure the OAuth2-proxy Helm chart."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Client secret",src:n(20937).A+"",width:"3364",height:"1660"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Navigate to the ",(0,r.jsx)(t.strong,{children:"Token configuration"})," section and click on ",(0,r.jsx)(t.strong,{children:"Add groups claim"})," button. Choose the group type as ",(0,r.jsx)(t.strong,{children:"Security Groups"})," and for the ID token type, select ",(0,r.jsx)(t.strong,{children:"Group ID"}),"."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Token configuration",src:n(77373).A+"",width:"3364",height:"1660"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Navigate to the ",(0,r.jsx)(t.strong,{children:"API permissions"})," section. Click on the ",(0,r.jsx)(t.strong,{children:"Add a permission"})," button. Select ",(0,r.jsx)(t.strong,{children:"Microsoft Graph"})," and then ",(0,r.jsx)(t.strong,{children:"Delegated permissions"}),". Add the following permissions:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:"email"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:"openid"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:"profile"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:"User.Read"})}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"API permissions",src:n(80120).A+"",width:"3364",height:"1660"})}),"\n",(0,r.jsxs)(t.p,{children:["After adding the permissions, click on the ",(0,r.jsx)(t.strong,{children:"Grant admin consent for 'Tenant name'"})," button to grant the required permissions."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"After the application is configured, you can proceed with the OAuth2-proxy Helm chart configuration."}),"\n",(0,r.jsx)(t.h2,{id:"creating-the-groups",children:"Creating the Groups"}),"\n",(0,r.jsx)(t.p,{children:"To manage access to the Tekton Dashboard (or any other application with OAuth2-proxy), it is necessary to create groups in the Microsoft Entra Admin Center and assign users to it."}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["In the Microsoft Entra Admin Center, in the left sidebar menu, select ",(0,r.jsx)(t.strong,{children:"Groups"})," and then ",(0,r.jsx)(t.strong,{children:"All groups"}),". Click on ",(0,r.jsx)(t.strong,{children:"New group"})," button to create a new group(s) for users who will have access to Tekton Dashboard (e.g., ",(0,r.jsx)(t.code,{children:"administrator"}),", ",(0,r.jsx)(t.code,{children:"developer"}),")."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"New group",src:n(25040).A+"",width:"3364",height:"1647"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Fill in the required fields, such as ",(0,r.jsx)(t.strong,{children:"Groups type"})," and ",(0,r.jsx)(t.strong,{children:"Group name"}),". In the ",(0,r.jsx)(t.strong,{children:"Members"})," section, add users who will have access to SonarQube."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Create group",src:n(51792).A+"",width:"3364",height:"1658"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["After adding the necessary members, review the group settings and click ",(0,r.jsx)(t.strong,{children:"Create"})," to save the group. Repeat this process for each required group."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"configuring-oauth2-proxy-helm-chart",children:"Configuring OAuth2-proxy Helm chart"}),"\n",(0,r.jsx)(t.p,{children:"To integrate OAuth2-proxy with the configured Microsoft Entra Application, it is necessary to configure the OAuth2-proxy Helm chart."}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["The Application data, such as ",(0,r.jsx)(t.strong,{children:"Application (client) ID"})," and ",(0,r.jsx)(t.strong,{children:"Directory (tenant) ID"}),", can be found in the ",(0,r.jsx)(t.strong,{children:"Overview"})," section of the Application in the Microsoft Entra Admin Center.\n",(0,r.jsx)(t.img,{alt:"Application data",src:n(95016).A+"",width:"1296",height:"659"})]})}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.strong,{children:"Object ID"})," can be found in the ",(0,r.jsx)(t.strong,{children:"Overview"})," section of the group in the Microsoft Entra Admin Center.\n",(0,r.jsx)(t.img,{alt:"Group Object ID",src:n(40992).A+"",width:"1350",height:"903"})]})}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Navigate to the forked ",(0,r.jsx)(t.a,{href:"https://github.com/epam/edp-cluster-add-ons",children:"Cluster Add-Ons repository"})," and locate the ",(0,r.jsx)(t.code,{children:"values.yaml"})," file in the ",(0,r.jsx)(t.code,{children:"clusters/core/addons/oauth2-proxy"})," directory."]}),"\n",(0,r.jsxs)(t.p,{children:["Update the ",(0,r.jsx)(t.code,{children:"values.yaml"})," file with the following values:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",metastring:'title="clusters/core/addons/oauth2-proxy/values.yaml"',children:'oauth2-proxy:\n  config:\n    configFile: |-\n      allowed_groups = ["<Object ID of Administrator Group>", "<Object ID of Developer Group>"]\n      code_challenge_method="S256"\n      azure_tenant = "<Directory (tenant) ID>"\n      client_id = "<Application (client) ID>"\n      cookie_domains = ["example.domain.com"]\n      cookie_secure = "false"\n      email_domains = [ "*" ]\n      insecure_oidc_allow_unverified_email = "true"\n      oidc_issuer_url = "https://login.microsoftonline.com/<Directory (tenant) ID>/v2.0"\n      pass_authorization_header = "true"\n      pass_basic_auth = "false"\n      pass_user_headers = "true"\n      oidc_email_claim = "preferred_username"\n      provider = "oidc"\n      redirect_url = "https://oauth-oauth2-proxy.example.domain.com/oauth2/callback"\n      reverse_proxy = "true"\n      skip_jwt_bearer_tokens = "true"\n      skip_provider_button = "true"\n      whitelist_domains = ".example.domain.com"\n      scope = "openid email profile"\n\n    existingSecret: oauth2-proxy\n\n  ingress:\n    enabled: true\n    hosts:\n      - oauth-oauth2-proxy.example.domain.com\n'})}),"\n",(0,r.jsx)(t.p,{children:"Replace the following placeholders with the actual values:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"<Object ID of Administrator Group>"})," - Object ID of the ",(0,r.jsx)(t.code,{children:"administrator"})," group created in the Microsoft Entra Admin Center."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"<Object ID of Developer Group>"})," - Object ID of the ",(0,r.jsx)(t.code,{children:"developer"})," group created in the Microsoft Entra Admin Center."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"<Directory (tenant) ID>"})," - Directory (tenant) ID of the Microsoft Entra Tenant."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"<Application (client) ID>"})," - Application (client) ID of the Microsoft Entra Application created in the previous step."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"example.domain.com"})," - Domain name associated with the OAuth2-proxy."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Update or create the ",(0,r.jsx)(t.code,{children:"oauth2-proxy"})," secret with the Application Client Secret value."]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Using External Secrets Operator"}),"\n",(0,r.jsxs)(t.p,{children:["Be sure to update the AWS Parameter Store object path specified in the ",(0,r.jsx)(t.code,{children:"clusters/core/addons/oauth2-proxy/values.yaml"})," file in the ",(0,r.jsx)(t.code,{children:"eso.secretName"})," field with the ",(0,r.jsx)(t.code,{children:"client-id"}),", ",(0,r.jsx)(t.code,{children:"client-secret"})," and ",(0,r.jsx)(t.code,{children:"cookie-secret"})," values."]}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"client-id"})," refers to the ",(0,r.jsx)(t.strong,{children:"Application (client) ID"})," of your Microsoft Entra Application."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"client-secret"})," refers to the ",(0,r.jsx)(t.strong,{children:"Application Client Secret"})," value of your Microsoft Entra Application."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"cookie-secret"})," is a randomly generated secret value."]}),"\n"]})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",metastring:'title="AWS Parameter Store object"',children:'{\n  "oauth2-proxy": {\n    "client-id": "<Application (client) ID>",\n    "client-secret": "<Application Client Secret>",\n    "cookie-secret": "<Randomly generated secret>"\n  }\n}\n'})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Manual approach"}),"\n",(0,r.jsxs)(t.p,{children:["Create the ",(0,r.jsx)(t.code,{children:"oauth2-proxy"})," secret manually using the following template:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",metastring:'title="oauth2-proxy-secret.yaml"',children:"apiVersion: v1\nkind: Secret\nmetadata:\n  name: oauth2-proxy\n  namespace: <namespace>\ntype: Opaque\ndata:\n  client-id: <Application (client) ID>\n  client-secret: <Application Client Secret>\n  cookie-secret: <Randomly generated secret>\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Replace ",(0,r.jsx)(t.code,{children:"<Application (client) ID>"}),", ",(0,r.jsx)(t.code,{children:"<Application Client Secret>"}),", and ",(0,r.jsx)(t.code,{children:"<Randomly generated secret>"})," with the appropriate values."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["After updating the ",(0,r.jsx)(t.code,{children:"values.yaml"})," file and creating the ",(0,r.jsx)(t.code,{children:"oauth2-proxy"})," secret, commit the changes to the repository and apply the changes with Helm or Argo CD."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"After the OAuth2-proxy is configured, it can serve as a reverse proxy, enabling secure access to various applications by handling authentication and passing validated user identity data."}),"\n",(0,r.jsx)(t.h2,{id:"configuring-tekton-dashboard",children:"Configuring Tekton Dashboard"}),"\n",(0,r.jsx)(t.p,{children:"To configure the Tekton Dashboard to use OAuth2-proxy for OIDC authentication, it is necessary to update the Tekton Dashboard Ingress resource."}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Log in to the Kubernetes cluster where the Tekton Dashboard is installed."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Edit the Ingress resource associated with the Tekton Dashboard by adding ",(0,r.jsx)(t.code,{children:"auth-signin"})," and ",(0,r.jsx)(t.code,{children:"auth-url"})," of oauth2-proxy to the annotations."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"kubectl annotate ingress <application-ingress-name> -n <namespace> \\\nnginx.ingress.kubernetes.io/auth-signin='https://<oauth-ingress-host>/oauth2/start?rd=https://$host$request_uri' \\\nnginx.ingress.kubernetes.io/auth-url='http://oauth2-proxy.oauth2-proxy.svc.cluster.local:80/oauth2/auth'\n"})}),"\n",(0,r.jsx)(t.p,{children:"Replace the following placeholders with the actual values."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Verify that the OIDC authentication is configured correctly by accessing the Tekton Dashboard URL and logging in with the Microsoft Entra credentials."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Tekton Dashboard login",src:n(59826).A+"",width:"3364",height:"1660"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"After completing these steps, the Tekton Dashboard will be configured to use OAuth2-proxy with Microsoft Entra as the Identity Provider for authentication. Users will be able to log in to the Tekton Dashboard using their Microsoft Entra credentials."}),"\n",(0,r.jsx)(t.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/docs/operator-guide/microsoft-entra/oidc-authentication-overview",children:"OpenID Connect (OIDC) Authentication Overview"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},33896:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/app-registrations-85bb491010c97a96c465bae8c5f3d238.png"},51792:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/create-group-9dbf252dc7cd4c8f3b75962d9c234114.png"},52831:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/microsoft-entra-admin-center-156ae7d9496f05355dce9a20eca80969.png"},25040:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/new-group-e01c9c34e53e303a3e24acfa7233005c.png"},44606:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/new-registration-47e751488bf7b3fc6c9c019c7e635ac8.png"},80120:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/oauth2-proxy-api-permissions-460140c905e1dab69304da5c1e987313.png"},95016:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/oauth2-proxy-application-data-e48bafa648085a6410552b4acda891a2.png"},20937:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/oauth2-proxy-client-secret-67f0e84323803e0e58de6c5b73349503.png"},62998:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/oauth2-proxy-client-secrets-85d394f237dbbf7561b0c0fbed056dfc.png"},40992:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/oauth2-proxy-group-object-id-7e806c8677ce759613bad1cb357c7af5.png"},77373:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/oauth2-proxy-token-configuration-382bb164dc550d8719bc6721c841f28b.png"},13884:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/register-application-abe176af450d421aa7dd9713dd3bf5cf.png"},59826:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/tekton-dashboard-login-e6ab4304bc73b2169899cd82c718c1e9.png"},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>c});var i=n(96540);const r={},s=i.createContext(r);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);