"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[97243],{25536:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"user-guide/add-cluster","title":"Add Cluster","description":"This page provides comprehensive instructions on how to integrate a new cluster into the KubeRocketCI workloads. By doing so, it creates an opportunity for users to employ multi-cluster deployment, thereby facilitating the segregation of different environments across various clusters.","source":"@site/versioned_docs/version-3.10/user-guide/add-cluster.md","sourceDirName":"user-guide","slug":"/user-guide/add-cluster","permalink":"/docs/user-guide/add-cluster","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/user-guide/add-cluster.md","tags":[],"version":"3.10","lastUpdatedBy":"Sergiy Kulanov","lastUpdatedAt":1730106685000,"frontMatter":{},"sidebar":"userGuideSidebar","previous":{"title":"Manage Git Servers","permalink":"/docs/user-guide/git-server-overview"},"next":{"title":"Manage Clusters","permalink":"/docs/user-guide/cluster"}}');var i=s(74848),n=s(28453);const o={},d="Add Cluster",l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Deploy to Remote Cluster",id:"deploy-to-remote-cluster",level:2},{value:"Related Articles",id:"related-articles",level:2}];function a(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"add-cluster",children:"Add Cluster"})}),"\n",(0,i.jsx)(t.p,{children:"This page provides comprehensive instructions on how to integrate a new cluster into the KubeRocketCI workloads. By doing so, it creates an opportunity for users to employ multi-cluster deployment, thereby facilitating the segregation of different environments across various clusters."}),"\n",(0,i.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(t.p,{children:["Before moving ahead, ensure you have already performed the guidelines outlined in the ",(0,i.jsx)(t.a,{href:"/docs/operator-guide/cd/argocd-integration#deploy-argo-cd-application-to-remote-cluster-optional",children:"Argo CD Integration"})," page."]}),"\n",(0,i.jsx)(t.h2,{id:"deploy-to-remote-cluster",children:"Deploy to Remote Cluster"}),"\n",(0,i.jsx)(t.p,{children:"To deploy an application to a remote cluster, follow the steps below:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Navigate to ",(0,i.jsx)(t.strong,{children:"Configuration"})," -> ",(0,i.jsx)(t.strong,{children:"Deployment"})," -> ",(0,i.jsx)(t.strong,{children:"Clusters"})," and click the ",(0,i.jsx)(t.strong,{children:"+ Add cluster"})," button:"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Clusters menu",src:s(31823).A+"",title:"Clusters menu",width:"3364",height:"1662"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"In the drop-down window, specify the required fields:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Cluster Name"})," - a unique and descriptive name for the new cluster;"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Cluster Host"})," - the cluster\u2019s endpoint URL (e.g., example-cluster-domain.com);"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Cluster Token"})," - a Kubernetes token with permissions to access the cluster. This token is required for proper authorization;"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Skip TLS verification"})," - allows connect to cluster without cluster certificate verification;"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Cluster Certificate"})," - a Kubernetes certificate essential for authentication. Obtain this certificate from the configuration file of the user account you intend to use for accessing the cluster."]}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"Cluster Certificate"})," field is hidden if the ",(0,i.jsx)(t.code,{children:"skip TLS verification"})," option is enabled."]})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Add cluster",src:s(46883).A+"",title:"Add cluster",width:"3333",height:"1662"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Click the ",(0,i.jsx)(t.strong,{children:"Save"})," button to add the cluster."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"As a result, the Kubernetes secret will be created for further integration and you will be able to select the integrated cluster when creating a new stage:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Select cluster",src:s(99977).A+"",title:"Select cluster",width:"3364",height:"1662"})}),"\n",(0,i.jsx)(t.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/operator-guide/cd/argocd-integration",children:"Argo CD Integration"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/user-guide/add-application",children:"Add Application"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/user-guide/add-library",children:"Add Library"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/user-guide/add-autotest",children:"Add Autotest"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/user-guide/add-cd-pipeline",children:"Add CD Pipeline"})}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},31823:(e,t,s)=>{s.d(t,{A:()=>r});const r=s.p+"assets/images/add_new_cluster-dc9d578f9627140f2ac4cd642b667d73.png"},46883:(e,t,s)=>{s.d(t,{A:()=>r});const r=s.p+"assets/images/krci-portal-add-cluster-aba4383f350b6deadd0424954aa0830b.png"},99977:(e,t,s)=>{s.d(t,{A:()=>r});const r=s.p+"assets/images/select-cluster-c5a1b212914c6fa2cbb180ff86032e3d.png"},28453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>d});var r=s(96540);const i={},n=r.createContext(i);function o(e){const t=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(n.Provider,{value:t},e.children)}}}]);