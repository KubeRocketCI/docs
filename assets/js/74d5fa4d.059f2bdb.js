"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8404],{68098:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>o});var i=t(74848),s=t(28453);const n={},a="Manage Git Servers",l={id:"user-guide/git-server-overview",title:"Manage Git Servers",description:"Git Server is responsible for integration with Version Control System, whether it is GitHub, GitLab or Gerrit.",source:"@site/versioned_docs/version-3.9.0/user-guide/git-server-overview.md",sourceDirName:"user-guide",slug:"/user-guide/git-server-overview",permalink:"/docs/user-guide/git-server-overview",draft:!1,unlisted:!1,tags:[],version:"3.9.0",frontMatter:{},sidebar:"userGuideSidebar",previous:{title:"Add Git Server",permalink:"/docs/user-guide/add-git-server"},next:{title:"Add Cluster",permalink:"/docs/user-guide/add-cluster"}},d={},o=[{value:"View Authentication Data",id:"view-authentication-data",level:2},{value:"Delete Git Server",id:"delete-git-server",level:2},{value:"Related Articles",id:"related-articles",level:2}];function c(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h1,{id:"manage-git-servers",children:"Manage Git Servers"}),"\n",(0,i.jsx)(r.p,{children:"Git Server is responsible for integration with Version Control System, whether it is GitHub, GitLab or Gerrit."}),"\n",(0,i.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,i.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/pzheGwBLZvU",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"allowfullscreen"})}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsxs)(r.p,{children:["The Git Server is set via the ",(0,i.jsx)(r.strong,{children:"global.gitProviders"})," parameter of the ",(0,i.jsx)(r.a,{href:"https://github.com/epam/edp-install/blob/release/3.9/deploy-templates/values.yaml#L12",children:"values.yaml"})," file."]}),"\n",(0,i.jsxs)(r.p,{children:["To view the current Git Server, you can open Portal ",(0,i.jsx)(r.strong,{children:"Configuration"})," -> ",(0,i.jsx)(r.strong,{children:"Git Servers"})," and inspect the following properties:"]}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.img,{alt:"Git Server menu",src:t(69403).A+"",title:"Git Server menu",width:"2440",height:"1210"})}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:"Git Server status and name"})," - displays the Git Server status, which depends on the Git Server integration status (Success/Failed)."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:"Git Server properties"})," - displays the Git Server type, its host address, username, SSH/HTTPS port, public and private SSH keys."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:"Open documentation"}),' - opens the "Manage Git Servers" documentation page.']}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:"Undo/Save changes"})," - these buttons apply or revert changes made to the Git Server."]}),"\n"]}),"\n",(0,i.jsx)(r.h2,{id:"view-authentication-data",children:"View Authentication Data"}),"\n",(0,i.jsxs)(r.p,{children:["To view authentication data that is used to connect to the Git server, use ",(0,i.jsx)(r.code,{children:"kubectl describe"})," command as follows:"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-bash",children:"kubectl describe GitServer git_server_name -n edp\n"})}),"\n",(0,i.jsx)(r.h2,{id:"delete-git-server",children:"Delete Git Server"}),"\n",(0,i.jsxs)(r.p,{children:["To remove a Git Server from the Git Servers list, utilize the ",(0,i.jsx)(r.code,{children:"kubectl delete"})," command as follows:"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-bash",children:"kubectl delete GitServer git_server_name -n edp\n"})}),"\n",(0,i.jsx)(r.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"/docs/user-guide/add-git-server",children:"Add Git Server"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"/docs/user-guide/add-git-server",children:"Manage Git Providers"})}),"\n"]})]})}function u(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},69403:(e,r,t)=>{t.d(r,{A:()=>i});const i=t.p+"assets/images/edp-portal-git-server-overview-a74bd6799d70e6168e36b750975dc83a.png"},28453:(e,r,t)=>{t.d(r,{R:()=>a,x:()=>l});var i=t(96540);const s={},n=i.createContext(s);function a(e){const r=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(n.Provider,{value:r},e.children)}}}]);