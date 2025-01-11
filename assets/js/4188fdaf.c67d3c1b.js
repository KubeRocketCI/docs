"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[71097],{24244:(e,s,o)=>{o.r(s),o.d(s,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"operator-guide/troubleshooting/forbidden-messages","title":"Forbidden Messages on the Overview Page","description":"Problem","source":"@site/versioned_docs/version-3.10/operator-guide/troubleshooting/forbidden-messages.md","sourceDirName":"operator-guide/troubleshooting","slug":"/operator-guide/troubleshooting/forbidden-messages","permalink":"/docs/operator-guide/troubleshooting/forbidden-messages","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/operator-guide/troubleshooting/forbidden-messages.md","tags":[],"version":"3.10","lastUpdatedBy":"Sergiy Kulanov","lastUpdatedAt":1730106685000,"frontMatter":{},"sidebar":"operatorGuideSidebar","previous":{"title":"Codebase Creation Issues","permalink":"/docs/operator-guide/troubleshooting/codebase-creation-issues"},"next":{"title":"Review Pipeline is Failed","permalink":"/docs/operator-guide/troubleshooting/review-pipeline-is-failed"}}');var t=o(74848),i=o(28453);const r={},a="Forbidden Messages on the Overview Page",c={},l=[{value:"Problem",id:"problem",level:2},{value:"Cause",id:"cause",level:2},{value:"Solution",id:"solution",level:2},{value:"Solution 1 (Configure Default namespace)",id:"solution-1-configure-default-namespace",level:3},{value:"Solution 2 (Service Account Token)",id:"solution-2-service-account-token",level:3},{value:"Related Articles",id:"related-articles",level:2}];function d(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"forbidden-messages-on-the-overview-page",children:"Forbidden Messages on the Overview Page"})}),"\n",(0,t.jsx)(s.h2,{id:"problem",children:"Problem"}),"\n",(0,t.jsx)(s.p,{children:"Users can't see resources within the KubeRocketCI dedicated namespace via KubeRocketCI portal:"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Resource observability issue",src:o(90593).A+"",title:"Resource observability issue",width:"3576",height:"2001"})}),"\n",(0,t.jsx)(s.h2,{id:"cause",children:"Cause"}),"\n",(0,t.jsx)(s.p,{children:"The problem might be caused by several factors. First of all, default and allowed namespaces may be either unset or set incorrectly. Secondly, service account used for browsing the KubeRocketCI portal may have insufficient permission set. Thirdly, if Keycloak is used for as an authentication mechanism, then the problem might be related to improper group membership."}),"\n",(0,t.jsx)(s.h2,{id:"solution",children:"Solution"}),"\n",(0,t.jsx)(s.p,{children:"Solution can vary depending on the way users log into the platform, whether it is a service account token or an OpenID Connect mechanism."}),"\n",(0,t.jsx)(s.h3,{id:"solution-1-configure-default-namespace",children:"Solution 1 (Configure Default namespace)"}),"\n",(0,t.jsx)(s.p,{children:"This solution suits those who to log into the KubeRocketCI portal Keycloak."}),"\n",(0,t.jsx)(s.p,{children:"To fix the problem, follow the steps below:"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["Check both default and allowed namespace by navigating to the ",(0,t.jsx)(s.strong,{children:"KubeRocketCI"})," portal -> ",(0,t.jsx)(s.strong,{children:"Account Settings"})," -> ",(0,t.jsx)(s.strong,{children:"Cluster"}),"."]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"solution-2-service-account-token",children:"Solution 2 (Service Account Token)"}),"\n",(0,t.jsx)(s.p,{children:"This solution suits those who use a service account token to log into the KubeRocketCI portal."}),"\n",(0,t.jsx)(s.p,{children:"To fix the problem, follow the steps below:"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Make sure the service account is set up in accordance with the ",(0,t.jsx)(s.a,{href:"/docs/operator-guide/auth/platform-auth-model#cluster-rbac-resources",children:"KubeRocketCI Access Model"})," and possesses the appropriate access rights."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Check the roles associated with the ServiceAccount:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:'serviceaccount=<ServiceAccount_name>\nkubectl get rolebindings -n edp -o json | jq -r --arg sa "$serviceaccount" \'.items[] | select(.subjects[]? | select(.kind == "ServiceAccount" and .name == $sa)) | .metadata.name\'\n'})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Check permissions of the role used in the role binding:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"kubectl describe role <role-name> -n edp\n"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Refresh the page and verify that the new RBAC settings are functioning properly."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/docs/operator-guide/auth/platform-auth-model",children:"KubeRocketCI Access Model"})}),"\n"]})]})}function u(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},90593:(e,s,o)=>{o.d(s,{A:()=>n});const n=o.p+"assets/images/resource_observability_issue-091bf50d1a1e6be82fee2109f8dca74a.png"},28453:(e,s,o)=>{o.d(s,{R:()=>r,x:()=>a});var n=o(96540);const t={},i=n.createContext(t);function r(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);