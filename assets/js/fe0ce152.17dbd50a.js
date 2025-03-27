"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[34632],{70987:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"operator-guide/auth/ui-portal-oidc","title":"Portal OIDC Configuration","description":"Configure OIDC authorization for the KubeRocketCI Portal UI with Keycloak, enabling Single Sign-On for streamlined access management.","source":"@site/versioned_docs/version-3.10/operator-guide/auth/ui-portal-oidc.md","sourceDirName":"operator-guide/auth","slug":"/operator-guide/auth/ui-portal-oidc","permalink":"/docs/3.10/operator-guide/auth/ui-portal-oidc","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/operator-guide/auth/ui-portal-oidc.md","tags":[],"version":"3.10","lastUpdatedBy":"Oleksandr_Stepanov@epam.com","lastUpdatedAt":1741605107000,"frontMatter":{"title":"Portal OIDC Configuration","description":"Configure OIDC authorization for the KubeRocketCI Portal UI with Keycloak, enabling Single Sign-On for streamlined access management.","sidebar_label":"Portal OIDC Configuration"},"sidebar":"operatorGuideSidebar","previous":{"title":"Install Keycloak","permalink":"/docs/3.10/operator-guide/auth/keycloak"},"next":{"title":"EKS OIDC With Keycloak","permalink":"/docs/3.10/operator-guide/auth/configure-keycloak-oidc-eks"}}');var s=t(74848),r=t(28453);const a={title:"Portal OIDC Configuration",description:"Configure OIDC authorization for the KubeRocketCI Portal UI with Keycloak, enabling Single Sign-On for streamlined access management.",sidebar_label:"Portal OIDC Configuration"},l="Portal OIDC Configuration",c={},o=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configure Keycloak",id:"configure-keycloak",level:2},{value:"Integrate Portal With Kubernetes",id:"integrate-portal-with-kubernetes",level:2},{value:"Configure User Profile Picture",id:"configure-user-profile-picture",level:2},{value:"Configure Default Namespace",id:"configure-default-namespace",level:2},{value:"Changing the Lifespan of an Access Token",id:"changing-the-lifespan-of-an-access-token",level:2},{value:"Related Articles",id:"related-articles",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{Head:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"portal-oidc-configuration",children:"Portal OIDC Configuration"})}),"\n",(0,s.jsx)(i,{children:(0,s.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/operator-guide/auth/ui-portal-oidc"})}),"\n",(0,s.jsxs)(n.p,{children:["This page provides instructions for configuring the ",(0,s.jsx)(n.a,{href:"https://openid.net/connect/",children:"OIDC authorization"})," for the KubeRocketCI ",(0,s.jsx)(n.a,{href:"/docs/3.10/user-guide/",children:"Portal UI"}),", enabling the use of Single Sign-On (SSO) for authorization in the Portal. This configuration allows for centralized control of user access and rights from a single configuration point."]}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsx)(n.p,{children:"Ensure the following values are set first before starting the Portal OIDC configuration:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"realm_id"}),"  = ",(0,s.jsx)(n.strong,{children:"shared"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"client_id"})," = ",(0,s.jsx)(n.strong,{children:"eks"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"keycloak_client_key"}),"= ",(0,s.jsx)(n.strong,{children:"keycloak_client_secret_key"})," (received from: ",(0,s.jsx)(n.code,{children:"Shared realm"})," -> ",(0,s.jsx)(n.code,{children:"clients"})," -> ",(0,s.jsx)(n.code,{children:"eks"})," -> ",(0,s.jsx)(n.code,{children:"Credentials"})," -> ",(0,s.jsx)(n.code,{children:"Client secret"}),")"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["The values indicated above are the result of the Keycloak configuration as an OIDC identity provider.\nTo obtain these values, please refer to the guidelines on the ",(0,s.jsx)(n.a,{href:"/docs/3.10/operator-guide/auth/configure-keycloak-oidc-eks",children:"Keycloak OIDC EKS Configuration"})," page."]})}),"\n",(0,s.jsx)(n.h2,{id:"configure-keycloak",children:"Configure Keycloak"}),"\n",(0,s.jsx)(n.p,{children:"To proceed with the Keycloak configuration, perform the following:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Add the URL of the Headlamp to the ",(0,s.jsx)(n.code,{children:"valid_redirect_uris"})," variable in ",(0,s.jsx)(n.a,{href:"https://github.com/epam/edp-cluster-add-ons/blob/main/clusters/core/addons/kuberocketci-rbac/templates/kubernetes/keycloak-client.yaml#L17",children:"Keycloak"}),":"]}),"\n",(0,s.jsx)(n.admonition,{title:"keycloak_openid_client",type:"note",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'  redirectUris:\n    - "https://portal.<dns_wildcard>/*"\n    - "http://localhost:8000/*"\n'})})}),"\n",(0,s.jsx)(n.p,{children:"Make sure to define the following Keycloak client values as indicated:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Keycloak client configuration",src:t(8226).A+"",title:"Keycloak client configuration",width:"567",height:"758"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Configure the Keycloak client key in Kubernetes using the Kubernetes secrets or the ",(0,s.jsx)(n.a,{href:"/docs/3.10/operator-guide/secrets-management/external-secrets-operator-integration",children:"External Secrets Operator"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"apiVersion: v1\nkind: Secret\nmetadata:\n  name: keycloak-client-headlamp-secret\n  namespace: krci\ntype: Opaque\nstringData:\n  clientSecret: <keycloak_client_secret_key>\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Assign user to one or more groups in Keycloak."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"integrate-portal-with-kubernetes",children:"Integrate Portal With Kubernetes"}),"\n",(0,s.jsx)(n.p,{children:"Portal is integrated in Kubernetes in three steps:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Update the ",(0,s.jsx)(n.a,{href:"/docs/3.10/operator-guide/install-kuberocketci",children:"values.yaml"})," file by enabling OIDC:"]}),"\n",(0,s.jsx)(n.admonition,{title:"values.yaml",type:"note",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"edp-headlamp:\n  config:\n    oidc:\n      enabled: true\n"})})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Navigate to Portal UI and log in by clicking the ",(0,s.jsx)(n.code,{children:"Sign In"})," button:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Portal login page",src:t(51034).A+"",title:"Portal login page",width:"986",height:"752"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Upon logging in, specify the namespace for KubeRocketCI where platform is deployed by clicking the cluster settings link in the bottom left corner of the UI:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Portal namespace settings",src:t(18145).A+"",title:"Portal namespace settings",width:"3486",height:"2072"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"As a result, it is possible to control access and rights from the Keycloak endpoint."}),"\n",(0,s.jsx)(n.h2,{id:"configure-user-profile-picture",children:"Configure User Profile Picture"}),"\n",(0,s.jsx)(n.p,{children:"To enhance account personalization, a profile picture can be configured in the Portal using Keycloak. This requires setting up the Keycloak client scope with the necessary user attributes."}),"\n",(0,s.jsx)(n.p,{children:"Follow the steps below to configure the user profile picture in Keycloak:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Open the Keycloak admin console and navigate to the ",(0,s.jsx)(n.strong,{children:"Broker"})," realm. In the left sidebar menu, select ",(0,s.jsx)(n.strong,{children:"Client scopes"})," and choose the ",(0,s.jsx)(n.strong,{children:"profile"})," scope."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Keycloak profile scope",src:t(98622).A+"",title:"Keycloak profile scope",width:"3364",height:"1660"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Navigate to the ",(0,s.jsx)(n.strong,{children:"Mappers"})," tab and ensure that the ",(0,s.jsx)(n.strong,{children:"picture"})," attribute is created. If the attribute is not present, click ",(0,s.jsx)(n.strong,{children:"Add mapper"})," button. In the dropdown menu, select ",(0,s.jsx)(n.strong,{children:"By configuration"}),"."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["If the ",(0,s.jsx)(n.strong,{children:"picture"})," user attribute is already present, skip to step 5."]})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Keycloak create mapper",src:t(77964).A+"",title:"Keycloak create mapper",width:"3364",height:"1660"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.strong,{children:"Configure a new mapper"})," dialog, choose the ",(0,s.jsx)(n.strong,{children:"User Attribute"})," type."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Keycloak user attribute",src:t(40286).A+"",title:"Keycloak user attribute",width:"3364",height:"1660"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Fill in the following fields to configure the user attribute:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Name"}),": ",(0,s.jsx)(n.code,{children:"picture"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"User Attribute"}),": ",(0,s.jsx)(n.code,{children:"picture"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Token Claim Name"}),": ",(0,s.jsx)(n.code,{children:"picture"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Claim JSON Type"}),": ",(0,s.jsx)(n.code,{children:"String"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Keycloak user attribute configuration",src:t(55215).A+"",title:"Keycloak user attribute configuration",width:"3364",height:"1660"})}),"\n",(0,s.jsxs)(n.p,{children:["Click ",(0,s.jsx)(n.strong,{children:"Save"})," to apply the changes."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["After configuring the user attribute, navigate to the ",(0,s.jsx)(n.strong,{children:"Users"})," tab in the left sidebar menu and select the user you want to set a profile picture for."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Keycloak user profile",src:t(41081).A+"",title:"Keycloak user profile",width:"3364",height:"1660"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In the user profile, click ",(0,s.jsx)(n.strong,{children:"Attributes"})," and add the ",(0,s.jsx)(n.strong,{children:"picture"})," attribute with the URL of the desired profile picture."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"The profile picture URL should refer to an image accessible via a public URL."})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Keycloak user picture",src:t(11232).A+"",title:"Keycloak user picture",width:"3364",height:"1660"})}),"\n",(0,s.jsxs)(n.p,{children:["Click ",(0,s.jsx)(n.strong,{children:"Save"})," to apply the changes."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"After configuring the user profile picture in Keycloak, the profile picture will be displayed in the Portal UI."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Portal user profile picture",src:t(7955).A+"",title:"Portal user profile picture",width:"3364",height:"1660"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"configure-default-namespace",children:"Configure Default Namespace"}),"\n",(0,s.jsxs)(n.p,{children:["After logging into the Portal, it is necessary to manually configure account settings like ",(0,s.jsx)(n.strong,{children:"Default namespace"})," and ",(0,s.jsx)(n.strong,{children:"Allowed namespaces"}),". To simplify this process, the ",(0,s.jsx)(n.code,{children:"default_namespace"})," user attribute can be added to the user profile in Keycloak. This will ensure that the account settings are automatically configured during login."]}),"\n",(0,s.jsxs)(n.p,{children:["Follow the steps below to configure the ",(0,s.jsx)(n.code,{children:"default_namespace"})," user attribute in Keycloak:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Open the Keycloak admin console and navigate to the ",(0,s.jsx)(n.strong,{children:"Broker"})," realm. In the left sidebar menu, select ",(0,s.jsx)(n.strong,{children:"Client scopes"})," and choose the ",(0,s.jsx)(n.strong,{children:"profile"})," scope."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Keycloak profile scope",src:t(98622).A+"",title:"Keycloak profile scope",width:"3364",height:"1660"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Navigate to the ",(0,s.jsx)(n.strong,{children:"Mappers"})," tab and click the ",(0,s.jsx)(n.strong,{children:"Add mapper"})," button. In the dropdown menu, select ",(0,s.jsx)(n.strong,{children:"By configuration"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Keycloak create mapper",src:t(77964).A+"",title:"Keycloak create mapper",width:"3364",height:"1660"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.strong,{children:"Configure a new mapper"})," dialog, choose the ",(0,s.jsx)(n.strong,{children:"User Attribute"})," type."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Keycloak user attribute",src:t(40286).A+"",title:"Keycloak user attribute",width:"3364",height:"1660"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Fill in the following fields to configure the user attribute:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Name"}),": ",(0,s.jsx)(n.code,{children:"default_namespace"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"User Attribute"}),": ",(0,s.jsx)(n.code,{children:"default_namespace"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Token Claim Name"}),": ",(0,s.jsx)(n.code,{children:"default_namespace"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Claim JSON Type"}),": ",(0,s.jsx)(n.code,{children:"String"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Keycloak user attribute configuration",src:t(57016).A+"",title:"Keycloak user attribute configuration",width:"3364",height:"1660"})}),"\n",(0,s.jsxs)(n.p,{children:["Click ",(0,s.jsx)(n.strong,{children:"Save"})," to apply the changes."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["After configuring the user attribute, navigate to the ",(0,s.jsx)(n.strong,{children:"Users"})," tab in the left sidebar menu and select the user you want to set a default namespace for."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Keycloak user profile",src:t(41081).A+"",title:"Keycloak user profile",width:"3364",height:"1660"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In the user profile, click ",(0,s.jsx)(n.strong,{children:"Attributes"})," and add the ",(0,s.jsx)(n.strong,{children:"default_namespace"})," attribute with the name of the desired default namespace."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Keycloak user default namespace",src:t(27383).A+"",title:"Keycloak user default namespace",width:"3364",height:"1660"})}),"\n",(0,s.jsxs)(n.p,{children:["Click ",(0,s.jsx)(n.strong,{children:"Save"})," to apply the changes."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["After configuring the user attribute with the default namespace in Keycloak, the account settings, such as the ",(0,s.jsx)(n.strong,{children:"Default namespace"})," and ",(0,s.jsx)(n.strong,{children:"Allowed namespaces"}),", will be automatically configured during login."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Portal user default namespace",src:t(31448).A+"",title:"Portal user default namespace",width:"3364",height:"1660"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"changing-the-lifespan-of-an-access-token",children:"Changing the Lifespan of an Access Token"}),"\n",(0,s.jsxs)(n.p,{children:["Change the Access Token Lifespan: go to your Keycloak and select ",(0,s.jsx)(n.em,{children:"Openshift realm"})," > ",(0,s.jsx)(n.em,{children:"Realm settings"})," > ",(0,s.jsx)(n.em,{children:"Tokens"})," >\n",(0,s.jsx)(n.em,{children:"Access Token Lifespan"})," > set a new value to the field and save this change."]}),"\n",(0,s.jsx)(n.p,{children:'By default, "Access Token Lifespan" value is 5 minutes.'}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Access Token Lifespan",src:t(21325).A+"",title:"Access Token Lifespan",width:"3102",height:"1330"})}),"\n",(0,s.jsx)(n.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/3.10/operator-guide/auth/configure-keycloak-oidc-eks",children:"EKS OIDC With Keycloak"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/3.10/operator-guide/secrets-management/external-secrets-operator-integration",children:"External Secrets Operator"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},21325:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/keycloak-access-token-lifespan-ffd35af51d3b872ea007abace8129f66.png"},18145:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/edp_portal_ui-95bcdfc9fd6ae7e8d299b16029b7b16e.png"},51034:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/headlamp-oidc-headlamp-1-e967452206d74b2ee46dea95f5dd2dac.png"},8226:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/headlamp-oidc-keycloak-2-bafd11c950da74e7a467d9237538077b.png"},77964:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/keycloak-create-mapper-9808e762f4046be1e5f28b773bf9d70e.png"},57016:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/keycloak-default-namespace-attribute-f9e22e801ab6523c0a35a3298dc89c35.png"},98622:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/keycloak-profile-scope-d7e6a3fcebf7f1582c1d36368da0bfb5.png"},55215:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/keycloak-user-attribute-configuration-f3bd52d5a879b6239bc28ac0206bd4cd.png"},40286:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/keycloak-user-attribute-6710b52e3af13ce359e0c101b4e6de6d.png"},27383:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/keycloak-user-default-namespace-df6bccccec895cd630789ec168e10679.png"},11232:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/keycloak-user-picture-55718230b0a99173c2ea691d1161085e.png"},41081:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/keycloak-user-profile-215d750f6e6a57a2d462d76469fda98a.png"},31448:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/portal-user-default-namespace-ccefbd11597b5ab0cb0722911825e815.png"},7955:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/portal-user-profile-picture-784ec5d81b5ee99ea8e2c0e6c63a8876.png"},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>l});var i=t(96540);const s={},r=i.createContext(s);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);