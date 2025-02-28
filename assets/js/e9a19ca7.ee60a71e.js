"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[66491],{79184:(e,o,s)=>{s.r(o),s.d(o,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"operator-guide/troubleshooting/forbidden-messages","title":"Forbidden Messages on the Overview Page","description":"Troubleshooting guide for resolving issues with forbidden messages on the KubeRocketCI portal overview page, detailing solutions for service account token and Keycloak users.","source":"@site/docs/operator-guide/troubleshooting/forbidden-messages.md","sourceDirName":"operator-guide/troubleshooting","slug":"/operator-guide/troubleshooting/forbidden-messages","permalink":"/docs/next/operator-guide/troubleshooting/forbidden-messages","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/operator-guide/troubleshooting/forbidden-messages.md","tags":[],"version":"current","lastUpdatedBy":"Oleksandr_Stepanov@epam.com","lastUpdatedAt":1740746844000,"frontMatter":{"title":"Forbidden Messages on the Overview Page","description":"Troubleshooting guide for resolving issues with forbidden messages on the KubeRocketCI portal overview page, detailing solutions for service account token and Keycloak users.","sidebar_label":"Forbidden Messages"},"sidebar":"operatorGuideSidebar","previous":{"title":"Codebase Creation Issues","permalink":"/docs/next/operator-guide/troubleshooting/codebase-creation-issues"},"next":{"title":"Review Pipeline Failure","permalink":"/docs/next/operator-guide/troubleshooting/review-pipeline-is-failed"}}');var n=s(74848),i=s(28453);const r={title:"Forbidden Messages on the Overview Page",description:"Troubleshooting guide for resolving issues with forbidden messages on the KubeRocketCI portal overview page, detailing solutions for service account token and Keycloak users.",sidebar_label:"Forbidden Messages"},a="Forbidden Messages on the Overview Page",c={},l=[{value:"Problem",id:"problem",level:2},{value:"Cause",id:"cause",level:2},{value:"Solution",id:"solution",level:2},{value:"Solution 1 (Configure Default namespace)",id:"solution-1-configure-default-namespace",level:3},{value:"Solution 2 (Service Account Token)",id:"solution-2-service-account-token",level:3},{value:"Related Articles",id:"related-articles",level:2}];function d(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{Head:t}=o;return t||function(e,o){throw new Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.header,{children:(0,n.jsx)(o.h1,{id:"forbidden-messages-on-the-overview-page",children:"Forbidden Messages on the Overview Page"})}),"\n",(0,n.jsx)(t,{children:(0,n.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/operator-guide/troubleshooting/forbidden-messages/"})}),"\n",(0,n.jsx)(o.h2,{id:"problem",children:"Problem"}),"\n",(0,n.jsx)(o.p,{children:"Users can't see resources within the KubeRocketCI dedicated namespace via KubeRocketCI portal:"}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.img,{alt:"Resource observability issue",src:s(98086).A+"",title:"Resource observability issue",width:"3576",height:"2001"})}),"\n",(0,n.jsx)(o.h2,{id:"cause",children:"Cause"}),"\n",(0,n.jsx)(o.p,{children:"The problem might be caused by several factors. First of all, default and allowed namespaces may be either unset or set incorrectly. Secondly, service account used for browsing the KubeRocketCI portal may have insufficient permission set. Thirdly, if Keycloak is used for as an authentication mechanism, then the problem might be related to improper group membership."}),"\n",(0,n.jsx)(o.h2,{id:"solution",children:"Solution"}),"\n",(0,n.jsx)(o.p,{children:"Solution can vary depending on the way users log into the platform, whether it is a service account token or an OpenID Connect mechanism."}),"\n",(0,n.jsx)(o.h3,{id:"solution-1-configure-default-namespace",children:"Solution 1 (Configure Default namespace)"}),"\n",(0,n.jsx)(o.p,{children:"This solution suits those who to log into the KubeRocketCI portal Keycloak."}),"\n",(0,n.jsx)(o.p,{children:"To fix the problem, follow the steps below:"}),"\n",(0,n.jsxs)(o.ol,{children:["\n",(0,n.jsxs)(o.li,{children:["Check both default and allowed namespace by navigating to the ",(0,n.jsx)(o.strong,{children:"KubeRocketCI"})," portal -> ",(0,n.jsx)(o.strong,{children:"Account Settings"})," -> ",(0,n.jsx)(o.strong,{children:"Cluster"}),"."]}),"\n"]}),"\n",(0,n.jsx)(o.h3,{id:"solution-2-service-account-token",children:"Solution 2 (Service Account Token)"}),"\n",(0,n.jsx)(o.p,{children:"This solution suits those who use a service account token to log into the KubeRocketCI portal."}),"\n",(0,n.jsx)(o.p,{children:"To fix the problem, follow the steps below:"}),"\n",(0,n.jsxs)(o.ol,{children:["\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsxs)(o.p,{children:["Make sure the service account is set up in accordance with the ",(0,n.jsx)(o.a,{href:"/docs/next/operator-guide/auth/platform-auth-model#cluster-rbac-resources",children:"KubeRocketCI Access Model"})," and possesses the appropriate access rights."]}),"\n"]}),"\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsx)(o.p,{children:"Check the roles associated with the ServiceAccount:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-bash",children:'serviceaccount=<ServiceAccount_name>\nkubectl get rolebindings -n edp -o json | jq -r --arg sa "$serviceaccount" \'.items[] | select(.subjects[]? | select(.kind == "ServiceAccount" and .name == $sa)) | .metadata.name\'\n'})}),"\n"]}),"\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsx)(o.p,{children:"Check permissions of the role used in the role binding:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-bash",children:"kubectl describe role <role-name> -n edp\n"})}),"\n"]}),"\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsx)(o.p,{children:"Refresh the page and verify that the new RBAC settings are functioning properly."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(o.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:(0,n.jsx)(o.a,{href:"/docs/next/operator-guide/auth/platform-auth-model",children:"KubeRocketCI Access Model"})}),"\n"]})]})}function u(e={}){const{wrapper:o}={...(0,i.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},98086:(e,o,s)=>{s.d(o,{A:()=>t});const t=s.p+"assets/images/resource_observability_issue-091bf50d1a1e6be82fee2109f8dca74a.png"},28453:(e,o,s)=>{s.d(o,{R:()=>r,x:()=>a});var t=s(96540);const n={},i=t.createContext(n);function r(e){const o=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),t.createElement(i.Provider,{value:o},e.children)}}}]);