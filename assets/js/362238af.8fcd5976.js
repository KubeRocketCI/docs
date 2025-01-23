"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[79384],{50837:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"user-guide/git-server-overview","title":"Manage Git Servers","description":"Git Server is responsible for integration with Version Control System, whether it is GitHub, GitLab, Bitbucket, or Gerrit.","source":"@site/docs/user-guide/git-server-overview.md","sourceDirName":"user-guide","slug":"/user-guide/git-server-overview","permalink":"/docs/next/user-guide/git-server-overview","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/user-guide/git-server-overview.md","tags":[],"version":"current","lastUpdatedBy":"Sergiy Kulanov","lastUpdatedAt":1737663979000,"frontMatter":{},"sidebar":"userGuideSidebar","previous":{"title":"Add Git Server","permalink":"/docs/next/user-guide/add-git-server"},"next":{"title":"Add Cluster","permalink":"/docs/next/user-guide/add-cluster"}}');var s=r(74848),n=r(28453);const o={},a="Manage Git Servers",d={},l=[{value:"View Authentication Data",id:"view-authentication-data",level:2},{value:"Delete Git Server",id:"delete-git-server",level:2},{value:"Related Articles",id:"related-articles",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components},{Head:i}=t;return i||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"manage-git-servers",children:"Manage Git Servers"})}),"\n",(0,s.jsx)(i,{children:(0,s.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/user-guide/git-server-overview/"})}),"\n",(0,s.jsx)(t.p,{children:"Git Server is responsible for integration with Version Control System, whether it is GitHub, GitLab, Bitbucket, or Gerrit."}),"\n",(0,s.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,s.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/pzheGwBLZvU",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"allowfullscreen"})}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(t.p,{children:["The Git Server is set via the ",(0,s.jsx)(t.strong,{children:"global.gitProviders"})," parameter of the ",(0,s.jsx)(t.a,{href:"https://github.com/epam/edp-install/blob/release/3.9/deploy-templates/values.yaml#L12",children:"values.yaml"})," file."]}),"\n",(0,s.jsxs)(t.p,{children:["To view the current Git Server, you can open Portal ",(0,s.jsx)(t.strong,{children:"Configuration"})," -> ",(0,s.jsx)(t.strong,{children:"Git Servers"})," and inspect the following properties:"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Git Server menu",src:r(64957).A+"",title:"Git Server menu",width:"4035",height:"2036"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Git Server status and name"})," - displays the Git Server status, which depends on the Git Server integration status (Success/Failed)."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Git Server properties"})," - displays the Git Server type, its host address, username, SSH/HTTPS port, public and private SSH keys."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Open documentation"}),' - opens the "Manage Git Servers" documentation page.']}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Undo/Save changes"})," - these buttons apply or revert changes made to the Git Server."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"view-authentication-data",children:"View Authentication Data"}),"\n",(0,s.jsxs)(t.p,{children:["To view authentication data that is used to connect to the Git server, use ",(0,s.jsx)(t.code,{children:"kubectl describe"})," command as follows:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"kubectl describe GitServer git_server_name -n edp\n"})}),"\n",(0,s.jsx)(t.h2,{id:"delete-git-server",children:"Delete Git Server"}),"\n",(0,s.jsxs)(t.p,{children:["To remove a Git Server from the Git Servers list, utilize the ",(0,s.jsx)(t.code,{children:"kubectl delete"})," command as follows:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"kubectl delete GitServer git_server_name -n edp\n"})}),"\n",(0,s.jsx)(t.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/docs/next/user-guide/add-git-server",children:"Add Git Server"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/docs/next/user-guide/add-git-server",children:"Manage Git Providers"})}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},64957:(e,t,r)=>{r.d(t,{A:()=>i});const i=r.p+"assets/images/krci-portal-git-server-overview-a735c9c9716050cf0b9c6c364640549e.png"},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>a});var i=r(96540);const s={},n=i.createContext(s);function o(e){const t=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);