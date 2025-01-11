"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[64316],{41852:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"operator-guide/microsoft-entra/opensearch-authentication","title":"Guide: Microsoft Entra SSO integration with OpenSearch","description":"This guide provides instructions on how to configure OpenSearch with OpenID Connect (OIDC) authentication using Microsoft Entra as the Identity Provider (IdP).","source":"@site/versioned_docs/version-3.10/operator-guide/microsoft-entra/opensearch-authentication.md","sourceDirName":"operator-guide/microsoft-entra","slug":"/operator-guide/microsoft-entra/opensearch-authentication","permalink":"/docs/operator-guide/microsoft-entra/opensearch-authentication","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/operator-guide/microsoft-entra/opensearch-authentication.md","tags":[],"version":"3.10","lastUpdatedBy":"Daniil Nedostup","lastUpdatedAt":1734946723000,"frontMatter":{"id":"opensearch-authentication","sidebar_label":"OpenSearch"},"sidebar":"operatorGuideSidebar","previous":{"title":"OAuth2-proxy (Tekton Dashboard)","permalink":"/docs/operator-guide/microsoft-entra/oauth2-proxy-authentication"},"next":{"title":"SonarQube","permalink":"/docs/operator-guide/microsoft-entra/sonar-oidc-authentication"}}');var i=t(74848),r=t(28453);const o={id:"opensearch-authentication",sidebar_label:"OpenSearch"},c="Guide: Microsoft Entra SSO integration with OpenSearch",a={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuring Microsoft Entra Application",id:"configuring-microsoft-entra-application",level:2},{value:"Creating the Groups",id:"creating-the-groups",level:2},{value:"Configuring OpenSearch Helm chart",id:"configuring-opensearch-helm-chart",level:2},{value:"Related Articles",id:"related-articles",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"guide-microsoft-entra-sso-integration-with-opensearch",children:"Guide: Microsoft Entra SSO integration with OpenSearch"})}),"\n",(0,i.jsx)(n.p,{children:"This guide provides instructions on how to configure OpenSearch with OpenID Connect (OIDC) authentication using Microsoft Entra as the Identity Provider (IdP)."}),"\n",(0,i.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Access to the ",(0,i.jsx)(n.a,{href:"https://entra.microsoft.com/",children:"Microsoft Entra Admin Center"})," with administrative privileges."]}),"\n",(0,i.jsx)(n.li,{children:"Created Microsoft Entra Tenant."}),"\n",(0,i.jsxs)(n.li,{children:["Installed OpenSearch (can be installed during ",(0,i.jsx)(n.strong,{children:"Configuring Helm chart"})," step)."]}),"\n",(0,i.jsxs)(n.li,{children:["Fork copy of the ",(0,i.jsx)(n.a,{href:"https://github.com/epam/edp-cluster-add-ons",children:"edp-cluster-add-ons"})," repository."]}),"\n",(0,i.jsx)(n.li,{children:"(Optional) Installed External Secrets Operator."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"configuring-microsoft-entra-application",children:"Configuring Microsoft Entra Application"}),"\n",(0,i.jsx)(n.p,{children:"To configure Microsoft Entra as the Identity Provider for OpenSearch, it is necessary to create and configure an Application in the Microsoft Entra Admin Center."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Log in to the ",(0,i.jsx)(n.a,{href:"https://entra.microsoft.com/?feature.msaljs=true#home",children:"Microsoft Entra Admin Center"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Microsoft Entra Admin Center",src:t(32491).A+"",width:"3364",height:"1648"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the left sidebar menu, select ",(0,i.jsx)(n.strong,{children:"Applications"})," and click ",(0,i.jsx)(n.strong,{children:"App registrations"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"App registrations",src:t(77396).A+"",width:"3364",height:"1648"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click on the ",(0,i.jsx)(n.strong,{children:"New registration"})," button."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"New registration",src:t(90522).A+"",width:"3364",height:"1648"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Fill in the required fields, such as ",(0,i.jsx)(n.strong,{children:"Name"}),", ",(0,i.jsx)(n.strong,{children:"Supported account types"})," and ",(0,i.jsx)(n.strong,{children:"Redirect URI"})," (You can skip setting the ",(0,i.jsx)(n.strong,{children:"Redirect URI"})," if you don't deploy OpenSearch yet). Click ",(0,i.jsx)(n.strong,{children:"Register"})," to create the application."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"Redirect URI"})," should be in the format ",(0,i.jsx)(n.code,{children:"https://<OpenSearch Dashboard URL>/auth/openid/login"}),"."]})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Register application",src:t(64656).A+"",width:"3364",height:"1658"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the created application, navigate to the ",(0,i.jsx)(n.strong,{children:"Authentication"})," section from the left sidebar menu. In the ",(0,i.jsx)(n.strong,{children:"Implicit grant and hybrid flows"})," section, select ",(0,i.jsx)(n.strong,{children:"ID tokens"})," for the token type. In the ",(0,i.jsx)(n.strong,{children:"Allow public client flows"})," section, set the value to ",(0,i.jsx)(n.strong,{children:"No"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Authentication settings",src:t(85779).A+"",width:"3364",height:"1662"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Navigate to the ",(0,i.jsx)(n.strong,{children:"Certificates & secrets"})," section. In the ",(0,i.jsx)(n.strong,{children:"Client secrets"})," tab, click on the ",(0,i.jsx)(n.strong,{children:"New client secret"})," button to create a new secret. Fill in the required fields and click ",(0,i.jsx)(n.strong,{children:"Add"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Client secrets",src:t(96644).A+"",width:"3364",height:"1662"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Copy the generated client secret value and store it securely. You will need this value to configure the OpenSearch Helm chart."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Client secret",src:t(32303).A+"",width:"3364",height:"1662"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Navigate to the ",(0,i.jsx)(n.strong,{children:"Token configuration"})," section and click on ",(0,i.jsx)(n.strong,{children:"Add groups claim"})," button. Choose the group type as ",(0,i.jsx)(n.strong,{children:"Security Groups"})," and for the ID token type, select ",(0,i.jsx)(n.strong,{children:"Group ID"}),". Also, choose the ",(0,i.jsx)(n.strong,{children:"Emit groups as role claims"})," option."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Token configuration",src:t(42507).A+"",width:"3364",height:"1662"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Navigate to the ",(0,i.jsx)(n.strong,{children:"API permissions"})," section. Click on the ",(0,i.jsx)(n.strong,{children:"Add a permission"})," button. Select ",(0,i.jsx)(n.strong,{children:"Microsoft Graph"})," and then ",(0,i.jsx)(n.strong,{children:"Delegated permissions"}),". Add the following permissions:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"email"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"openid"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"profile"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"User.Read"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"API permissions",src:t(63890).A+"",width:"3364",height:"1662"})}),"\n",(0,i.jsxs)(n.p,{children:["After adding the permissions, click on the ",(0,i.jsx)(n.strong,{children:"Grant admin consent for 'Tenant name'"})," button to grant the required permissions."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"After configuring the Microsoft Entra Application, you can proceed with the OpenSearch configuration."}),"\n",(0,i.jsx)(n.h2,{id:"creating-the-groups",children:"Creating the Groups"}),"\n",(0,i.jsx)(n.p,{children:"To manage access to OpenSearch, it is necessary to create the groups in Microsoft Entra and assign users to it."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the Microsoft Entra Admin Center, in the left sidebar menu, select ",(0,i.jsx)(n.strong,{children:"Groups"})," and then ",(0,i.jsx)(n.strong,{children:"All groups"}),". Click on ",(0,i.jsx)(n.strong,{children:"New group"})," button to create a new group(s) for users who will have access to OpenSearch (e.g., ",(0,i.jsx)(n.code,{children:"administrator"}),", ",(0,i.jsx)(n.code,{children:"developer"}),")."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"New group",src:t(15868).A+"",width:"3364",height:"1647"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Fill in the required fields, such as ",(0,i.jsx)(n.strong,{children:"Groups type"})," and ",(0,i.jsx)(n.strong,{children:"Group name"}),". In the ",(0,i.jsx)(n.strong,{children:"Members"})," section, add users who will be part of the group."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Create group",src:t(83380).A+"",width:"3364",height:"1658"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["After adding the necessary members, review the group settings and click ",(0,i.jsx)(n.strong,{children:"Create"})," to save the group. Repeat this process for each required group."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"configuring-opensearch-helm-chart",children:"Configuring OpenSearch Helm chart"}),"\n",(0,i.jsxs)(n.p,{children:["To integrate OpenSearch with configured Microsoft Entra Application, it is necessary to configure the OpenSearch Helm chart. In this example, we will use the ",(0,i.jsx)(n.a,{href:"https://github.com/epam/edp-cluster-add-ons",children:"edp-cluster-add-ons"})," repository to deploy OpenSearch to the Kubernetes (e.g. AWS EKS) cluster."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["The Application data, such as ",(0,i.jsx)(n.strong,{children:"Application (client) ID"})," and ",(0,i.jsx)(n.strong,{children:"Directory (tenant) ID"}),", can be found in the ",(0,i.jsx)(n.strong,{children:"Overview"})," section of the Application in the Microsoft Entra Admin Center.\n",(0,i.jsx)(n.img,{alt:"Application data",src:t(29434).A+"",width:"1287",height:"587"})]})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"Object ID"})," can be found in the ",(0,i.jsx)(n.strong,{children:"Overview"})," section of the group in the Microsoft Entra Admin Center.\n",(0,i.jsx)(n.img,{alt:"Group Object ID",src:t(17412).A+"",width:"1350",height:"903"})]})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Navigate to the forked ",(0,i.jsx)(n.a,{href:"https://github.com/epam/edp-cluster-add-ons",children:"Cluster Add-Ons repository"})," and locate the ",(0,i.jsx)(n.code,{children:"values.yaml"})," file in the ",(0,i.jsx)(n.code,{children:"clusters/core/addons/opensearch"})," directory."]}),"\n",(0,i.jsxs)(n.p,{children:["Update the ",(0,i.jsx)(n.code,{children:"opensearch"})," section in the ",(0,i.jsx)(n.code,{children:"values.yaml"})," file with the following values:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:'title="clusters/core/addons/opensearch/values.yaml"',children:'opensearch:\n  securityConfig:\n    config:\n      data:\n        config.yml: |-\n          config:\n            dynamic:\n              authc:\n                openid_auth_domain:\n                  http_enabled: true\n                  transport_enabled: true\n                  order: 1\n                  http_authenticator:\n                    type: openid\n                    challenge: false\n                    config:\n                      subject_key: preferred_username\n                      roles_key: roles\n                      openid_connect_url: https://login.microsoftonline.com/<Directory (tenant) ID>/v2.0/.well-known/openid-configuration\n                      openid_connect_idp:\n                        enable_ssl: false\n                        verify_hostnames: false\n                  authentication_backend:\n                    type: noop\n        roles_mapping.yml: |-\n          _meta:\n            type: "rolesmapping"\n            config_version: 2\n          all_access:\n            reserved: true\n            backend_roles:\n            - "<Object ID of the Administrator group>"\n            - "admin"\n            description: "Maps EDP administrator role and internal admin role to all_access"\n          logstash:\n            reserved: true\n            backend_roles:\n            - "logstash"\n            description: "Maps log injection role to logstash. It might be logstash, fluent-bit, fluentd, ..."\n          kibana_user:\n            reserved: false\n            backend_roles:\n            - "kibanauser"\n            - "<Object ID of the Developer group>"\n            description: "Maps kibanauser and EDP developer role to kibana_user"\n          kibana_server:\n            reserved: true\n            users:\n            - "kibanaserver"\n          edp_developer:\n            reserved: false\n            backend_roles:\n            - "<Object ID of the Developer group in Microsoft Entra>"\n            description: "Maps EDP developer role to view kube index"\n'})}),"\n",(0,i.jsx)(n.p,{children:"Replace the following placeholders with the actual values:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"<Directory (tenant) ID>"}),": The Directory ID of your Microsoft Entra Tenant."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"<Object ID of the Administrator group>"}),": The Object ID of the ",(0,i.jsx)(n.code,{children:"administrator"})," group from the Microsoft Entra Admin Center."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"<Object ID of the Developer group>"}),": The Object ID of the ",(0,i.jsx)(n.code,{children:"developer"})," group from the Microsoft Entra Admin Center."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Update the ",(0,i.jsx)(n.code,{children:"opensearch-dashboards"})," section in the ",(0,i.jsx)(n.code,{children:"values.yaml"})," file with the following values:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:'title="clusters/core/addons/opensearch/values.yaml"',children:"opensearch-dashboards:\n  config:\n    opensearch_dashboards.yml:\n      server:\n        auth.type: openid\n        openid:\n          connect_url: https://login.microsoftonline.com/<Directory (tenant) ID>/v2.0/.well-known/openid-configuration\n          base_redirect_url: https://opensearch-dashboards.example.com\n          client_id: <Application (client) ID>\n          client_secret: ${OIDC_CLIENT_SECRET}\n          scope: openid profile email\n          header: Authorization\n          verify_hostnames: false\n          trust_dynamic_headers: true\n"})}),"\n",(0,i.jsx)(n.p,{children:"Replace the following placeholders with the actual values:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"https://opensearch-dashboards.example.com"}),": The base URL of the OpenSearch Dashboards."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"<Directory (tenant) ID>"}),": The Directory ID of your Microsoft Entra Tenant."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"<Application (client) ID>"}),": The Application ID from the Microsoft Entra Application settings."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Update or create the ",(0,i.jsx)(n.code,{children:"opensearch-dashboards-account"})," secret with the Application Client Secret value."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Using External Secrets Operator"}),"\n",(0,i.jsxs)(n.p,{children:["Be sure to update the AWS Parameter Store object path specified in the ",(0,i.jsx)(n.code,{children:"clusters/core/addons/opensearch/values.yaml"})," file in the ",(0,i.jsx)(n.code,{children:"eso.secretName"})," field with the ",(0,i.jsx)(n.code,{children:"username"}),", ",(0,i.jsx)(n.code,{children:"password"}),", ",(0,i.jsx)(n.code,{children:"cookie"})," and ",(0,i.jsx)(n.code,{children:"OIDC_CLIENT_SECRET"})," values."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",metastring:'title="AWS Parameter Store object"',children:'{\n  "opensearch-dashboard": {\n    "username": "<Username>",\n    "password": "<Password>",\n    "cookie": "<Randomly generated cookie value>",\n    "OIDC_CLIENT_SECRET": "<Application Client Secret>"\n  }\n}\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Manual approach"}),"\n",(0,i.jsxs)(n.p,{children:["Create the ",(0,i.jsx)(n.code,{children:"opensearch-dashboards-account"})," secret manually using the following template:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:'title="opensearch-dashboards-account.yaml"',children:"apiVersion: v1\nkind: Secret\nmetadata:\n  name: opensearch-dashboards-account\n  namespace: <namespace>\ntype: Opaque\ndata:\n  username: <Username>\n  password: <Password>\n  cookie: <Randomly generated cookie value>\n  OIDC_CLIENT_SECRET: <Application Client Secret>\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["After updating the ",(0,i.jsx)(n.code,{children:"values.yaml"})," file and creating the ",(0,i.jsx)(n.code,{children:"opensearch-dashboards-account"})," secret, commit the changes to the repository and apply the changes with Helm or Argo CD."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Navigate to the Microsoft Entra Application and add the ",(0,i.jsx)(n.strong,{children:"Redirect URI"})," in the ",(0,i.jsx)(n.strong,{children:"Authentication"})," section if you haven't done it before."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"Redirect URI"})," should be in the format ",(0,i.jsx)(n.code,{children:"https://<OpenSearch Dashboard URL>/auth/openid/login"}),"."]})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Redirect URI",src:t(39580).A+"",width:"3364",height:"1662"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Verify that the OIDC authentication is configured correctly by logging in to OpenSearch using the Microsoft Entra credentials."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"OpenSearch login",src:t(38834).A+"",width:"3364",height:"1648"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"After completing these steps, OpenSearch will be configured with OIDC authentication using Microsoft Entra as the Identity Provider."}),"\n",(0,i.jsx)(n.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/operator-guide/microsoft-entra/oidc-authentication-overview",children:"OpenID Connect Authentication Overview"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},77396:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/app-registrations-85bb491010c97a96c465bae8c5f3d238.png"},83380:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/create-group-9dbf252dc7cd4c8f3b75962d9c234114.png"},32491:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/microsoft-entra-admin-center-156ae7d9496f05355dce9a20eca80969.png"},15868:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/new-group-e01c9c34e53e303a3e24acfa7233005c.png"},90522:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/new-registration-47e751488bf7b3fc6c9c019c7e635ac8.png"},17412:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/oauth2-proxy-group-object-id-7e806c8677ce759613bad1cb357c7af5.png"},63890:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/opensearch-api-permissions-618851b3b876b52414b835158d3304d1.png"},29434:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/opensearch-application-data-514f6d97ec01c45126128c253641e939.png"},85779:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/opensearch-authentication-settings-f30f2dde6b360f6787cac17c815199f7.png"},32303:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/opensearch-client-secret-c66d544c8ea0e4fce560485516062afb.png"},96644:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/opensearch-client-secrets-597e4aacf0bb46cc315a886f2ed29a01.png"},38834:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/opensearch-login-4b0d49191a0a98c845dbadd5f0f6c8cd.png"},39580:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/opensearch-redirect-uri-06556b44002d24131ca9556670dc3bd9.png"},42507:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/opensearch-token-configuration-58b1add0ce7fa8f7fc5565fb791d0c28.png"},64656:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/register-application-abe176af450d421aa7dd9713dd3bf5cf.png"},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var s=t(96540);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);