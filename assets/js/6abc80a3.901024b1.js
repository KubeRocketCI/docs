"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2153],{13744:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var a=n(74848),r=n(28453),o=n(11470),i=n(19365);const s={},l="Tekton Dashboard Authentication",u={id:"operator-guide/auth/oauth2-proxy",title:"Tekton Dashboard Authentication",description:"OAuth2-Proxy is a versatile tool that serves as a reverse proxy, utilizing the OAuth 2.0 protocol with various providers like Google, GitHub, and Keycloak to provide both authentication and authorization. This guide instructs readers on how to protect their applications' endpoints using OAuth2-Proxy. By following these steps, users can enhance the security of their endpoints without modifying their current application code. In the context of KubeRocketCI, it has integration with the Keycloak OIDC provider, enabling it to connect with any component that lacks built-in authentication.",source:"@site/versioned_docs/version-3.9.0/operator-guide/auth/oauth2-proxy.md",sourceDirName:"operator-guide/auth",slug:"/operator-guide/auth/oauth2-proxy",permalink:"/docs/operator-guide/auth/oauth2-proxy",draft:!1,unlisted:!1,editUrl:"https://github.com/KubeRocketCI/docs/edit/main/docs/operator-guide/auth/oauth2-proxy.md",tags:[],version:"3.9.0",lastUpdatedBy:"Mykola Serdiuk",lastUpdatedAt:1727606286e3,frontMatter:{},sidebar:"operatorGuideSidebar",previous:{title:"EKS OIDC With Keycloak",permalink:"/docs/operator-guide/auth/configure-keycloak-oidc-eks"},next:{title:"Kubernetes Namespace Management",permalink:"/docs/operator-guide/auth/namespace-management"}},c={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Integration OAuth2-Proxy",id:"integration-oauth2-proxy",level:2},{value:"Enable OAuth2-Proxy on Tekton Dashboard",id:"enable-oauth2-proxy-on-tekton-dashboard",level:2},{value:"Related Articles",id:"related-articles",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"tekton-dashboard-authentication",children:"Tekton Dashboard Authentication"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://oauth2-proxy.github.io/oauth2-proxy/",children:"OAuth2-Proxy"})," is a versatile tool that serves as a reverse proxy, utilizing the OAuth 2.0 protocol with various providers like Google, GitHub, and Keycloak to provide both authentication and authorization. This guide instructs readers on how to protect their applications' endpoints using OAuth2-Proxy. By following these steps, users can enhance the security of their endpoints without modifying their current application code. In the context of KubeRocketCI, it has integration with the Keycloak OIDC provider, enabling it to connect with any component that lacks built-in authentication."]}),"\n",(0,a.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"/docs/operator-guide/auth/keycloak",children:"Keycloak"})," with OIDC authentication is installed."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"/docs/operator-guide/add-ons-overview",children:"Keycloak operator"})," is installed."]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"integration-oauth2-proxy",children:"Integration OAuth2-Proxy"}),"\n",(0,a.jsxs)(t.p,{children:["To streamline the installation of OAuth2-Proxy in your environment, it is advised to utilize the resources available in the ",(0,a.jsx)(t.a,{href:"https://github.com/epam/edp-cluster-add-ons/tree/main/add-ons/oauth2-proxy",children:"Cluster Add-Ons"})," and their ",(0,a.jsx)(t.a,{href:"https://github.com/epam/edp-cluster-add-ons/blob/main/chart/values.yaml#L120",children:"applications"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"enable-oauth2-proxy-on-tekton-dashboard",children:"Enable OAuth2-Proxy on Tekton Dashboard"}),"\n",(0,a.jsx)(t.p,{children:"The example below illustrates how to use OAuth2-Proxy in practice when using the Tekton dashboard:"}),"\n",(0,a.jsxs)(o.A,{defaultValue:"kubernetes",values:[{label:"Kubernetes",value:"kubernetes"},{label:"Openshift",value:"openshift"}],children:[(0,a.jsxs)(i.A,{value:"kubernetes",children:[(0,a.jsxs)(t.p,{children:["Edit the Tekton dashboard Ingress annotation by adding ",(0,a.jsx)(t.code,{children:"auth-signin"})," and ",(0,a.jsx)(t.code,{children:"auth-url"})," of oauth2-proxy by ",(0,a.jsx)(t.code,{children:"kubectl"})," command:"]}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"kubectl annotate ingress <application-ingress-name> \\\nnginx.ingress.kubernetes.io/auth-signin='https://<oauth-ingress-host>/oauth2/start?rd=https://$host$request_uri' \\\nnginx.ingress.kubernetes.io/auth-url='http://oauth2-proxy.oauth2-proxy.svc.cluster.local:80/oauth2/auth'\n"})})]}),(0,a.jsxs)(i.A,{value:"openshift",children:[(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"Generate a cookie-secret for proxy with the following command:"}),"\n"]}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"tekton_dashboard_cookie_secret=$(openssl rand -base64 32 | head -c 32)\n"})}),(0,a.jsxs)(t.ol,{start:"2",children:["\n",(0,a.jsxs)(t.li,{children:["Create ",(0,a.jsx)(t.code,{children:"tekton-dashboard-proxy-cookie-secret"})," in the edp namespace:"]}),"\n"]}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"kubectl -n edp create secret generic tekton-dashboard-proxy-cookie-secret \\\n  --from-literal=cookie-secret=${tekton_dashboard_cookie_secret}\n"})}),(0,a.jsxs)(t.ol,{start:"3",children:["\n",(0,a.jsxs)(t.li,{children:["Run ",(0,a.jsx)(t.code,{children:"helm upgrade"})," to update edp-install release:"]}),"\n"]}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"helm upgrade --version <version> --set 'edp-tekton.dashboard.openshift_proxy.enabled=true' edp-install --namespace edp\n"})})]})]}),"\n",(0,a.jsx)(t.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/docs/operator-guide/auth/keycloak",children:"Keycloak Installation"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/docs/operator-guide/auth/configure-keycloak-oidc-eks",children:"Keycloak OIDC Installation"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/docs/operator-guide/install-tekton",children:"Tekton Installation"})}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var a=n(34164);const r={tabItem:"tabItem_Ymn6"};var o=n(74848);function i(e){let{children:t,hidden:n,className:i}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,i),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>j});var a=n(96540),r=n(34164),o=n(23104),i=n(56347),s=n(205),l=n(57485),u=n(31682),c=n(70679);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function x(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=h(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[u,d]=b({queryString:n,groupId:r}),[x,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,c.Dv)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),m=(()=>{const e=u??x;return p({value:e,tabValues:o})?e:null})();(0,s.A)((()=>{m&&l(m)}),[m]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),f(e)}),[d,f,o]),tabValues:o}}var f=n(92303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(74848);function v(e){let{className:t,block:n,selectedValue:a,selectValue:i,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.a_)(),c=e=>{const t=e.currentTarget,n=l.indexOf(t),r=s[n].value;r!==a&&(u(t),i(r))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:s.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>l.push(e),onKeyDown:d,onClick:c,...o,className:(0,r.A)("tabs__item",m.tabItem,o?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function k(e){const t=x(e);return(0,g.jsxs)("div",{className:(0,r.A)("tabs-container",m.tabList),children:[(0,g.jsx)(v,{...t,...e}),(0,g.jsx)(y,{...t,...e})]})}function j(e){const t=(0,f.A)();return(0,g.jsx)(k,{...e,children:d(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>s});var a=n(96540);const r={},o=a.createContext(r);function i(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);