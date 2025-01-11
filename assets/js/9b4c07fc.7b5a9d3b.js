"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[51279],{94740:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"operator-guide/microsoft-entra/aws-eks-portal-authentication","title":"Guide: Microsoft Entra SSO integration with AWS EKS & KubeRocketCI Portal","description":"This guide provides instructions on how to configure OpenID Connect (OIDC) authentication for the AWS EKS cluster and the KubeRocketCI Portal using Microsoft Entra as the Identity Provider (IdP), as well as how to configure the default namespace and user picture in the KubeRocketCI Portal using Microsoft Entra extension attributes.","source":"@site/docs/operator-guide/microsoft-entra/aws-eks-portal-authentication.md","sourceDirName":"operator-guide/microsoft-entra","slug":"/operator-guide/microsoft-entra/aws-eks-portal-authentication","permalink":"/docs/next/operator-guide/microsoft-entra/aws-eks-portal-authentication","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/operator-guide/microsoft-entra/aws-eks-portal-authentication.md","tags":[],"version":"current","lastUpdatedBy":"Sergiy Kulanov","lastUpdatedAt":1736605614000,"frontMatter":{"id":"aws-eks-portal-authentication","sidebar_label":"AWS EKS & KubeRocketCI Portal"},"sidebar":"operatorGuideSidebar","previous":{"title":"Ansible AWX","permalink":"/docs/next/operator-guide/microsoft-entra/awx-operator-authentication"},"next":{"title":"Dependency-Track","permalink":"/docs/next/operator-guide/microsoft-entra/dependency-track-authentication"}}');var s=n(74848),c=n(28453);const r={id:"aws-eks-portal-authentication",sidebar_label:"AWS EKS & KubeRocketCI Portal"},a="Guide: Microsoft Entra SSO integration with AWS EKS & KubeRocketCI Portal",o={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Integrate AWS EKS and KubeRocketCI Portal with Microsoft Entra",id:"integrate-aws-eks-and-kuberocketci-portal-with-microsoft-entra",level:2},{value:"Configure Default Namespace",id:"configure-default-namespace",level:2},{value:"Configure User Profile Picture",id:"configure-user-profile-picture",level:2},{value:"Related Articles",id:"related-articles",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"guide-microsoft-entra-sso-integration-with-aws-eks--kuberocketci-portal",children:"Guide: Microsoft Entra SSO integration with AWS EKS & KubeRocketCI Portal"})}),"\n",(0,s.jsx)(t.p,{children:"This guide provides instructions on how to configure OpenID Connect (OIDC) authentication for the AWS EKS cluster and the KubeRocketCI Portal using Microsoft Entra as the Identity Provider (IdP), as well as how to configure the default namespace and user picture in the KubeRocketCI Portal using Microsoft Entra extension attributes."}),"\n",(0,s.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Access to the ",(0,s.jsx)(t.a,{href:"https://entra.microsoft.com/",children:"Microsoft Entra Admin Center"})," with administrative privileges."]}),"\n",(0,s.jsxs)(t.li,{children:["A running ",(0,s.jsx)(t.a,{href:"https://docs.aws.amazon.com/eks/latest/userguide/create-cluster.html",children:"AWS EKS"})," cluster with the necessary permissions for access and management."]}),"\n",(0,s.jsxs)(t.li,{children:["The ",(0,s.jsx)(t.a,{href:"https://github.com/int128/kubelogin",children:"kubelogin"})," plugin installed for authenticating to the EKS cluster using OIDC."]}),"\n",(0,s.jsxs)(t.li,{children:["The ",(0,s.jsx)(t.a,{href:"https://kubernetes.io/docs/tasks/tools/#kubectl",children:"kubectl"})," CLI tool installed."]}),"\n",(0,s.jsxs)(t.li,{children:["The ",(0,s.jsx)(t.a,{href:"https://aws.amazon.com/cli/",children:"aws cli"})," tool installed."]}),"\n",(0,s.jsxs)(t.li,{children:["The ",(0,s.jsx)(t.a,{href:"https://curl.se/",children:"curl"})," tool installed."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"integrate-aws-eks-and-kuberocketci-portal-with-microsoft-entra",children:"Integrate AWS EKS and KubeRocketCI Portal with Microsoft Entra"}),"\n",(0,s.jsxs)(t.p,{children:["For a detailed step-by-step guide on integrating OIDC authentication for AWS EKS and the KubeRocketCI Portal with Microsoft Entra, please refer to the ",(0,s.jsx)(t.a,{href:"/blog/integrating-oidc-authentication-microsoft-entra-aws-eks",children:"Integrating OIDC Authentication with Microsoft Entra in AWS EKS"})," blog post."]}),"\n",(0,s.jsx)(t.p,{children:"The blog covers the process of creating a Microsoft Entra tenant, configuring an application, and managing users and groups. It also explains how to integrate the created application with the AWS EKS cluster and set up authentication for the KubeRocketCI Portal."}),"\n",(0,s.jsx)(t.h2,{id:"configure-default-namespace",children:"Configure Default Namespace"}),"\n",(0,s.jsxs)(t.p,{children:["After logging in to the KubeRocketCI Portal, it is necessary to manually configure the ",(0,s.jsx)(t.strong,{children:"Default namespace"})," and ",(0,s.jsx)(t.strong,{children:"Allowed Namespaces"}),". To automate this process, it is possible to use the Microsoft Entra extension attributes."]}),"\n",(0,s.jsx)(t.p,{children:"Follow the steps below to configure the default namespace extension attribute in Microsoft Entra and assign it to the user:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Log in to the ",(0,s.jsx)(t.a,{href:"https://entra.microsoft.com/",children:"Microsoft Entra Admin Center"}),"."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Microsoft Entra Admin Center",src:n(79717).A+"",width:"3364",height:"1648"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["In the left sidebar menu, select ",(0,s.jsx)(t.strong,{children:"Applications"})," and navigate to the application created during the ",(0,s.jsx)(t.a,{href:"/blog/integrating-oidc-authentication-microsoft-entra-aws-eks",children:"OIDC integration process"})," with AWS EKS and the KubeRocketCI Portal (e.g., ",(0,s.jsx)(t.code,{children:"eks"}),")."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Microsoft Entra Application",src:n(40256).A+"",width:"3364",height:"1660"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["In the application tab, navigate to the ",(0,s.jsx)(t.strong,{children:"API permissions"})," section. Click on the ",(0,s.jsx)(t.strong,{children:"Add a permission"})," button. Select ",(0,s.jsx)(t.strong,{children:"Microsoft Graph"})," and then ",(0,s.jsx)(t.strong,{children:"Application permissions"}),". Add the following permissions:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.strong,{children:"Application.ReadWrite.All"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.strong,{children:"User.ReadWrite.All"})}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Graph API Permissions",src:n(32002).A+"",width:"3364",height:"1660"})}),"\n",(0,s.jsxs)(t.p,{children:["After adding the permissions, click on the ",(0,s.jsx)(t.strong,{children:"Grant admin consent for 'Tenant name'"})," button to grant the required permissions."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Navigate to the local terminal and run the following command to get the access token:"}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["You can use the ",(0,s.jsx)(t.a,{href:"https://stedolan.github.io/jq/",children:"jq"})," tool to parse the JSON response. If you do not have it installed, you can drop the ",(0,s.jsx)(t.code,{children:"| jq -r '.access_token'"})," part from the command."]})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'curl -X POST "https://login.microsoftonline.com/<tenant_id>/oauth2/v2.0/token" \\\n-d "client_id=<application_client_id>" \\\n-d "client_secret=<application_client_secret>" \\\n-d "scope=https://graph.microsoft.com/.default" \\\n-d "grant_type=client_credentials" | jq -r \'.access_token\'\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Replace ",(0,s.jsx)(t.code,{children:"<tenant_id>"}),", ",(0,s.jsx)(t.code,{children:"<application_client_id>"}),", and ",(0,s.jsx)(t.code,{children:"<application_client_secret>"})," with the corresponding values from the Microsoft Entra application."]}),"\n",(0,s.jsx)(t.p,{children:"Save the access token for further use."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Create the ",(0,s.jsx)(t.code,{children:"default_namespace"})," extension attribute for the Microsoft Entra application by running the following command:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'curl -X POST "https://graph.microsoft.com/v1.0/applications/<application_object_id>/extensionProperties" \\\n-H "Authorization: Bearer <access_token>" \\\n-H "Content-Type: application/json" \\\n-d \'{\n  "name": "default_namespace",\n  "dataType": "String",\n  "targetObjects": ["User"]\n}\'\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Replace ",(0,s.jsx)(t.code,{children:"<application_object_id>"})," with the Object ID of the Microsoft Entra application and ",(0,s.jsx)(t.code,{children:"<access_token>"})," with the saved access token."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Assign the ",(0,s.jsx)(t.code,{children:"default_namespace"})," extension attribute to the user by running the following command:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'curl -X PATCH "https://graph.microsoft.com/v1.0/users/<user_object_id>" \\\n-H "Authorization: Bearer <access_token>" \\\n-H "Content-Type: application/json" \\\n-d \'{\n  "extension_<application_client_id>_default_namespace": "<default_namespace>"\n}\'\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Replace ",(0,s.jsx)(t.code,{children:"<user_object_id>"}),", ",(0,s.jsx)(t.code,{children:"<application_client_id>"}),", ",(0,s.jsx)(t.code,{children:"<access_token>"}),", and ",(0,s.jsx)(t.code,{children:"<default_namespace>"})," with the user Object ID, application Client ID, saved access token, and the name of the desired default namespace, respectively."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Navigate to the Microsoft Entra Admin Center. In the left sidebar menu, select ",(0,s.jsx)(t.strong,{children:"Applications"})," and navigate to the Enterprise application created for OIDC integration with AWS EKS and the KubeRocketCI Portal (e.g., ",(0,s.jsx)(t.code,{children:"eks"}),")."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Enterprise Application",src:n(26084).A+"",width:"3364",height:"1660"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["In the application tab, navigate to the ",(0,s.jsx)(t.strong,{children:"Single sign-on"})," section. In the ",(0,s.jsx)(t.strong,{children:"Attributes & Claims"})," tab, click on the ",(0,s.jsx)(t.strong,{children:"Edit"})," button."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Attributes &amp; Claims",src:n(15757).A+"",width:"3364",height:"1660"})}),"\n",(0,s.jsxs)(t.p,{children:["After that, click on the ",(0,s.jsx)(t.strong,{children:"Add new claim"})," button."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Add new claim",src:n(15969).A+"",width:"3364",height:"1660"})}),"\n",(0,s.jsxs)(t.p,{children:["Fill in the ",(0,s.jsx)(t.strong,{children:"Name"})," field with ",(0,s.jsx)(t.code,{children:"default_namespace"})," and select the ",(0,s.jsx)(t.strong,{children:"Source"})," as ",(0,s.jsx)(t.code,{children:"Directory schema extension"}),"."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Claim settings",src:n(16610).A+"",width:"3364",height:"1660"})}),"\n",(0,s.jsxs)(t.p,{children:["In the ",(0,s.jsx)(t.strong,{children:"Select Application"})," tab, choose the application created for OIDC integration with AWS EKS and the KubeRocketCI Portal (e.g., ",(0,s.jsx)(t.code,{children:"eks"}),"). Click on the ",(0,s.jsx)(t.strong,{children:"Select"})," button."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Select Application",src:n(7049).A+"",width:"3364",height:"1660"})}),"\n",(0,s.jsxs)(t.p,{children:["In the ",(0,s.jsx)(t.strong,{children:"Add Extension Attributes"})," tab, select the ",(0,s.jsx)(t.code,{children:"user.default_namespace"})," attribute and click on the ",(0,s.jsx)(t.strong,{children:"Add"})," button."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Add Extension Attributes",src:n(73609).A+"",width:"3364",height:"1660"})}),"\n",(0,s.jsxs)(t.p,{children:["Click on the ",(0,s.jsx)(t.strong,{children:"Save"})," button to apply the changes."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Save Changes",src:n(48179).A+"",width:"3364",height:"1660"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["In the left sidebar menu, select ",(0,s.jsx)(t.strong,{children:"Applications"})," and navigate to the application created for OIDC integration with AWS EKS and the KubeRocketCI Portal (e.g., ",(0,s.jsx)(t.code,{children:"eks"}),"). In the application tab, navigate to the ",(0,s.jsx)(t.strong,{children:"Manifest"})," section."]}),"\n",(0,s.jsxs)(t.p,{children:["Find the ",(0,s.jsx)(t.code,{children:"acceptMappedClaims"})," parameter and set it to ",(0,s.jsx)(t.code,{children:"true"}),". Click on the ",(0,s.jsx)(t.strong,{children:"Save"})," button to apply the changes."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Accept Mapped Claims",src:n(72234).A+"",width:"3364",height:"1660"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["(Optional) Get the application access token and verify the ",(0,s.jsx)(t.code,{children:"default_namespace"})," extension attribute by running the following command:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"kubelogin get-token --oidc-issuer-url=https://sts.windows.net/<tenant_id>/ --oidc-client-id=<application_client_id> --oidc-client-secret=<application_client_secret> --force-refresh\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Replace ",(0,s.jsx)(t.code,{children:"<tenant_id>"}),", ",(0,s.jsx)(t.code,{children:"<application_client_id>"}),", and ",(0,s.jsx)(t.code,{children:"<application_client_secret>"})," with the corresponding values from the Microsoft Entra application."]}),"\n",(0,s.jsxs)(t.p,{children:["After that, encode the token using the ",(0,s.jsx)(t.a,{href:"https://jwt.io/",children:"jwt.io"})," tool and verify the ",(0,s.jsx)(t.code,{children:"default_namespace"})," attribute in the decoded token."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Decoded Token",src:n(49624).A+"",width:"954",height:"304"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["After configuring the ",(0,s.jsx)(t.code,{children:"default_namespace"})," extension attribute, the account settings, such as the ",(0,s.jsx)(t.strong,{children:"Default namespace"})," and ",(0,s.jsx)(t.strong,{children:"Allowed namespaces"}),", will be automatically configured during login to the KubeRocketCI Portal."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Portal user default namespace",src:n(32677).A+"",title:"Portal user default namespace",width:"3364",height:"1660"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"configure-user-profile-picture",children:"Configure User Profile Picture"}),"\n",(0,s.jsx)(t.p,{children:"To enhance account personalization, it is possible to configure the user profile picture in the KubeRocketCI Portal using the Microsoft Entra extension attributes."}),"\n",(0,s.jsx)(t.p,{children:"Follow the steps below to configure the user profile picture extension attribute in Microsoft Entra and assign it to the user:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Log in to the ",(0,s.jsx)(t.a,{href:"https://entra.microsoft.com/",children:"Microsoft Entra Admin Center"}),"."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Microsoft Entra Admin Center",src:n(79717).A+"",width:"3364",height:"1648"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["In the left sidebar menu, select ",(0,s.jsx)(t.strong,{children:"Applications"})," and navigate to the application created during the ",(0,s.jsx)(t.a,{href:"/blog/integrating-oidc-authentication-microsoft-entra-aws-eks",children:"OIDC integration process"})," with AWS EKS and the KubeRocketCI Portal (e.g., ",(0,s.jsx)(t.code,{children:"eks"}),")."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Microsoft Entra Application",src:n(40256).A+"",width:"3364",height:"1660"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["In the application tab, navigate to the ",(0,s.jsx)(t.strong,{children:"API permissions"})," section. Click on the ",(0,s.jsx)(t.strong,{children:"Add a permission"})," button. Select ",(0,s.jsx)(t.strong,{children:"Microsoft Graph"})," and then ",(0,s.jsx)(t.strong,{children:"Application permissions"}),". Add the following permissions:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.strong,{children:"Application.ReadWrite.All"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.strong,{children:"User.ReadWrite.All"})}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Graph API Permissions",src:n(32002).A+"",width:"3364",height:"1660"})}),"\n",(0,s.jsxs)(t.p,{children:["After adding the permissions, click on the ",(0,s.jsx)(t.strong,{children:"Grant admin consent for 'Tenant name'"})," button to grant the required permissions."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Navigate to the local terminal and run the following command to get the access token:"}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["You can use the ",(0,s.jsx)(t.a,{href:"https://stedolan.github.io/jq/",children:"jq"})," tool to parse the JSON response. If you do not have it installed, you can drop the ",(0,s.jsx)(t.code,{children:"| jq -r '.access_token'"})," part from the command."]})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'curl -X POST "https://login.microsoftonline.com/<tenant_id>/oauth2/v2.0/token" \\\n-d "client_id=<application_client_id>" \\\n-d "client_secret=<application_client_secret>" \\\n-d "scope=https://graph.microsoft.com/.default" \\\n-d "grant_type=client_credentials" | jq -r \'.access_token\'\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Replace ",(0,s.jsx)(t.code,{children:"<tenant_id>"}),", ",(0,s.jsx)(t.code,{children:"<application_client_id>"}),", and ",(0,s.jsx)(t.code,{children:"<application_client_secret>"})," with the corresponding values from the Microsoft Entra application."]}),"\n",(0,s.jsx)(t.p,{children:"Save the access token for further use."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Create the ",(0,s.jsx)(t.code,{children:"picture"})," extension attribute for the Microsoft Entra application by running the following command:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'curl -X POST "https://graph.microsoft.com/v1.0/applications/<application_object_id>/extensionProperties" \\\n-H "Authorization: Bearer <access_token>" \\\n-H "Content-Type: application/json" \\\n-d \'{\n  "name": "picture",\n  "dataType": "String",\n  "targetObjects": ["User"]\n}\'\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Replace ",(0,s.jsx)(t.code,{children:"<application_object_id>"})," with the Object ID of the Microsoft Entra application and ",(0,s.jsx)(t.code,{children:"<access_token>"})," with the saved access token."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Assign the ",(0,s.jsx)(t.code,{children:"picture"})," extension attribute to the user by running the following command:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'curl -X PATCH "https://graph.microsoft.com/v1.0/users/<user_object_id>" \\\n-H "Authorization: Bearer <access_token>" \\\n-H "Content-Type: application/json" \\\n-d \'{\n  "extension_<application_client_id>_picture": "<picture_url>"\n}\'\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Replace ",(0,s.jsx)(t.code,{children:"<user_object_id>"}),", ",(0,s.jsx)(t.code,{children:"<application_client_id>"}),", ",(0,s.jsx)(t.code,{children:"<access_token>"}),", and ",(0,s.jsx)(t.code,{children:"<picture_url>"})," with the user Object ID, application Client ID, saved access token, and the URL of the user profile picture, respectively."]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"The profile picture URL should refer to an image accessible via a public URL."})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Navigate to the Microsoft Entra Admin Center. In the left sidebar menu, select ",(0,s.jsx)(t.strong,{children:"Applications"})," and navigate to the Enterprise application created for OIDC integration with AWS EKS and the KubeRocketCI Portal (e.g., ",(0,s.jsx)(t.code,{children:"eks"}),")."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Enterprise Application",src:n(26084).A+"",width:"3364",height:"1660"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["In the application tab, navigate to the ",(0,s.jsx)(t.strong,{children:"Single sign-on"})," section. In the ",(0,s.jsx)(t.strong,{children:"Attributes & Claims"})," tab, click on the ",(0,s.jsx)(t.strong,{children:"Edit"})," button."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Attributes &amp; Claims",src:n(15757).A+"",width:"3364",height:"1660"})}),"\n",(0,s.jsxs)(t.p,{children:["After that, click on the ",(0,s.jsx)(t.strong,{children:"Add new claim"})," button."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Add new claim",src:n(15969).A+"",width:"3364",height:"1660"})}),"\n",(0,s.jsxs)(t.p,{children:["Fill in the ",(0,s.jsx)(t.strong,{children:"Name"})," field with ",(0,s.jsx)(t.code,{children:"picture"})," and select the ",(0,s.jsx)(t.strong,{children:"Source"})," as ",(0,s.jsx)(t.code,{children:"Directory schema extension"}),"."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Picture Claim Settings",src:n(46797).A+"",width:"3364",height:"1660"})}),"\n",(0,s.jsxs)(t.p,{children:["In the ",(0,s.jsx)(t.strong,{children:"Select Application"})," tab, choose the application created for OIDC integration with AWS EKS and the KubeRocketCI Portal (e.g., ",(0,s.jsx)(t.code,{children:"eks"}),"). Click on the ",(0,s.jsx)(t.strong,{children:"Select"})," button."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Select Application",src:n(32402).A+"",width:"3364",height:"1660"})}),"\n",(0,s.jsxs)(t.p,{children:["In the ",(0,s.jsx)(t.strong,{children:"Add Extension Attributes"})," tab, select the ",(0,s.jsx)(t.code,{children:"user.picture"})," attribute and click on the ",(0,s.jsx)(t.strong,{children:"Add"})," button."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Add Extension Attributes",src:n(60914).A+"",width:"3364",height:"1660"})}),"\n",(0,s.jsxs)(t.p,{children:["Click on the ",(0,s.jsx)(t.strong,{children:"Save"})," button to apply the changes."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Save Changes",src:n(16788).A+"",width:"3364",height:"1660"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["In the left sidebar menu, select ",(0,s.jsx)(t.strong,{children:"Applications"})," and navigate to the application created for OIDC integration with AWS EKS and the KubeRocketCI Portal (e.g., ",(0,s.jsx)(t.code,{children:"eks"}),"). In the application tab, navigate to the ",(0,s.jsx)(t.strong,{children:"Manifest"})," section."]}),"\n",(0,s.jsxs)(t.p,{children:["Find the ",(0,s.jsx)(t.code,{children:"acceptMappedClaims"})," parameter and set it to ",(0,s.jsx)(t.code,{children:"true"}),". Click on the ",(0,s.jsx)(t.strong,{children:"Save"})," button to apply the changes."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Accept Mapped Claims",src:n(72234).A+"",width:"3364",height:"1660"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["(Optional) Get the application access token and verify the ",(0,s.jsx)(t.code,{children:"picture"})," extension attribute by running the following command:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"kubelogin get-token --oidc-issuer-url=https://sts.windows.net/<tenant_id>/ --oidc-client-id=<application_client_id> --oidc-client-secret=<application_client_secret> --force-refresh\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Replace ",(0,s.jsx)(t.code,{children:"<tenant_id>"}),", ",(0,s.jsx)(t.code,{children:"<application_client_id>"}),", and ",(0,s.jsx)(t.code,{children:"<application_client_secret>"})," with the corresponding values from the Microsoft Entra application."]}),"\n",(0,s.jsxs)(t.p,{children:["After that, encode the token using the ",(0,s.jsx)(t.a,{href:"https://jwt.io/",children:"jwt.io"})," tool and verify the ",(0,s.jsx)(t.code,{children:"picture"})," attribute in the decoded token."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Decoded Token",src:n(45913).A+"",width:"970",height:"426"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["After configuring the ",(0,s.jsx)(t.code,{children:"picture"})," extension attribute, the user profile picture will be displayed in the KubeRocketCI Portal."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Portal user profile picture",src:n(5718).A+"",title:"Portal user profile picture",width:"3364",height:"1660"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/docs/next/operator-guide/microsoft-entra/oidc-authentication-overview",children:"OpenID Connect (OIDC) Authentication Overview"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},32677:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/portal-user-default-namespace-ccefbd11597b5ab0cb0722911825e815.png"},5718:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/portal-user-profile-picture-784ec5d81b5ee99ea8e2c0e6c63a8876.png"},72234:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/accept-mapped-claims-468854dd231e83191623daa3172d6674.png"},73609:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/add-extension-attributes-ef32db9fd83899f725cc0909a1bac5a5.png"},15969:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/add-new-claim-d47eb416e283df19f9e86a2eae776361.png"},15757:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/attributes-claims-0b872721fdcb1b81f71f1b5deaac3cf9.png"},16610:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/claim-settings-4ae6ee1f2c240653ac53ee7a95ac21f5.png"},49624:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/decoded-token-e62967627392d93c57829121921772a1.png"},26084:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/enterprise-application-2f8f5c157fbf3554bced3a21ba27e293.png"},32002:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/graph-api-permissions-a0db1e8e0bd3965184daf0385f454f38.png"},79717:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/microsoft-entra-admin-center-156ae7d9496f05355dce9a20eca80969.png"},40256:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/microsoft-entra-application-867f137071639b27c4e2286551a4fddc.png"},60914:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/picture-add-extension-attributes-64e84f53d9c5e9a655acdecd10cca675.png"},46797:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/picture-claim-settings-a9e1f28650731f5826be287df89a6e7a.png"},45913:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/picture-decoded-token-0dd9c46b26a13e5699ba10a661b937aa.png"},16788:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/picture-save-changes-5dc58ee4e3664fb8e8b62052b6468466.png"},32402:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/picture-select-application-7a5a24d13ff4be784b695cf748662065.png"},48179:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/save-changes-61075c8599bd852211b95ee79b474297.png"},7049:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/select-application-96a3dc46ca072e86c0317f47c23efbcb.png"},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var i=n(96540);const s={},c=i.createContext(s);function r(e){const t=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(c.Provider,{value:t},e.children)}}}]);