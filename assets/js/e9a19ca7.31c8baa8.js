"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6491],{3508:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=s(74848),n=s(28453);const i={},r="Forbidden Messages on the Overview Page",l={id:"operator-guide/troubleshooting/forbidden-messages",title:"Forbidden Messages on the Overview Page",description:"Problem",source:"@site/docs/operator-guide/troubleshooting/forbidden-messages.md",sourceDirName:"operator-guide/troubleshooting",slug:"/operator-guide/troubleshooting/forbidden-messages",permalink:"/docs/next/operator-guide/troubleshooting/forbidden-messages",draft:!1,unlisted:!1,editUrl:"https://github.com/KubeRocketCI/docs/edit/main/docs/operator-guide/troubleshooting/forbidden-messages.md",tags:[],version:"current",lastUpdatedBy:"Mykola Serdiuk",lastUpdatedAt:1721214787e3,frontMatter:{},sidebar:"operatorGuideSidebar",previous:{title:"Codebase Creation Issues",permalink:"/docs/next/operator-guide/troubleshooting/codebase-creation-issues"},next:{title:"Review Pipeline is Failed",permalink:"/docs/next/operator-guide/troubleshooting/review-pipeline-is-failed"}},a={},c=[{value:"Problem",id:"problem",level:2},{value:"Cause",id:"cause",level:2},{value:"Solution",id:"solution",level:2},{value:"Solution 1 (Configure Default namespace)",id:"solution-1-configure-default-namespace",level:3},{value:"Solution 2 (Service Account Token)",id:"solution-2-service-account-token",level:3},{value:"Related Articles",id:"related-articles",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"forbidden-messages-on-the-overview-page",children:"Forbidden Messages on the Overview Page"}),"\n",(0,o.jsx)(t.h2,{id:"problem",children:"Problem"}),"\n",(0,o.jsx)(t.p,{children:"Users can't see resources within the KubeRocketCI dedicated namespace via KubeRocketCI portal:"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Resource observability issue",src:s(76271).A+"",title:"Resource observability issue",width:"3576",height:"2001"})}),"\n",(0,o.jsx)(t.h2,{id:"cause",children:"Cause"}),"\n",(0,o.jsx)(t.p,{children:"The problem might be caused by several factors. First of all, default and allowed namespaces may be either unset or set incorrectly. Secondly, service account used for browsing the KubeRocketCI portal may have insufficient permission set. Thirdly, if Keycloak is used for as an authentication mechanism, then the problem might be related to improper group membership."}),"\n",(0,o.jsx)(t.h2,{id:"solution",children:"Solution"}),"\n",(0,o.jsx)(t.p,{children:"Solution can vary depending on the way users log into the platform, whether it is a service account token or an OpenID Connect mechanism."}),"\n",(0,o.jsx)(t.h3,{id:"solution-1-configure-default-namespace",children:"Solution 1 (Configure Default namespace)"}),"\n",(0,o.jsx)(t.p,{children:"This solution suits those who to log into the KubeRocketCI portal Keycloak."}),"\n",(0,o.jsx)(t.p,{children:"To fix the problem, follow the steps below:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["Check both default and allowed namespace by navigating to the ",(0,o.jsx)(t.strong,{children:"KubeRocketCI"})," portal -> ",(0,o.jsx)(t.strong,{children:"Account Settings"})," -> ",(0,o.jsx)(t.strong,{children:"Cluster"}),"."]}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"solution-2-service-account-token",children:"Solution 2 (Service Account Token)"}),"\n",(0,o.jsx)(t.p,{children:"This solution suits those who use a service account token to log into the KubeRocketCI portal."}),"\n",(0,o.jsx)(t.p,{children:"To fix the problem, follow the steps below:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Make sure the service account is set up in accordance with the ",(0,o.jsx)(t.a,{href:"../../operator-guide/auth/platform-auth-model#kuberocketci-portal-and-eks-cluster",children:"KubeRocketCI Access Model"})," and possesses the appropriate access rights."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"Check the roles associated with the ServiceAccount:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:'serviceaccount=<ServiceAccount_name>\nkubectl get rolebindings -n edp -o json | jq -r --arg sa "$serviceaccount" \'.items[] | select(.subjects[]? | select(.kind == "ServiceAccount" and .name == $sa)) | .metadata.name\'\n'})}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"Check permissions of the role used in the role binding:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"kubectl describe role <role-name> -n edp\n"})}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"Refresh the page and verify that the new RBAC settings are functioning properly."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"/docs/next/operator-guide/auth/platform-auth-model",children:"KubeRocketCI Access Model"})}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},76271:(e,t,s)=>{s.d(t,{A:()=>o});const o=s.p+"assets/images/resource_observability_issue-a93e15711284d8670a32174c54bdfa4a.png"},28453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>l});var o=s(96540);const n={},i=o.createContext(n);function r(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);