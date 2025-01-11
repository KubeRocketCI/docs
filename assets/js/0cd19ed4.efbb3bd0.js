"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[10243],{37731:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>u,default:()=>h,frontMatter:()=>i,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"operator-guide/upgrade/upgrade-edp-3.9","title":"Upgrade KubeRocketCI v3.8 to 3.9","description":"We suggest backing up the KubeRocketCI environment before starting the upgrade procedure.","source":"@site/versioned_docs/version-3.10/operator-guide/upgrade/upgrade-edp-3.9.md","sourceDirName":"operator-guide/upgrade","slug":"/operator-guide/upgrade/upgrade-edp-3.9","permalink":"/docs/operator-guide/upgrade/upgrade-edp-3.9","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/operator-guide/upgrade/upgrade-edp-3.9.md","tags":[],"version":"3.10","lastUpdatedBy":"oleksandr_taruraiev","lastUpdatedAt":1733240186000,"frontMatter":{},"sidebar":"operatorGuideSidebar","previous":{"title":"Upgrade KubeRocketCI v3.9 to 3.10","permalink":"/docs/operator-guide/upgrade/upgrade-edp-3.10"},"next":{"title":"Upgrade KubeRocketCI v3.7 to 3.8","permalink":"/docs/operator-guide/upgrade/upgrade-edp-3.8"}}');var r=a(74848),l=a(28453),s=a(11470),o=a(19365);const i={},u="Upgrade KubeRocketCI v3.8 to 3.9",c={},d=[];function p(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"upgrade-kuberocketci-v38-to-39",children:"Upgrade KubeRocketCI v3.8 to 3.9"})}),"\n",(0,r.jsx)(n.admonition,{type:"important",children:(0,r.jsx)(n.p,{children:"We suggest backing up the KubeRocketCI environment before starting the upgrade procedure."})}),"\n",(0,r.jsx)(n.p,{children:"This section provides detailed instructions for upgrading the KubeRocketCI to version 3.9.0. Follow the steps and requirements outlined below:"}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://github.com/epam/edp-install/tree/v3.9.0",children:"edp-install"})," version v3.9 is not support Kiosk as tenancy engine. Please migrate to Capsule engine or disable this options."]})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"(Optional) Migrate from Kiosk tenancy engine."}),"\n",(0,r.jsxs)(s.A,{defaultValue:"capsule",values:[{label:"Capsule",value:"capsule"},{label:"Disable tenancy engine",value:"disable"}],children:[(0,r.jsx)(o.A,{value:"capsule",children:(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Take look how to install Capsule using ",(0,r.jsx)(n.a,{href:"https://github.com/epam/edp-cluster-add-ons/tree/main/clusters/core/addons/capsule",children:"addons"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://epam.github.io/edp-install/operator-guide/capsule",children:"Integrate Capsule"})," with KubeRocketCI."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Update edp-install values file:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:'title="values.yaml"',children:'...\ncd-pipeline-operator:\n  tenancyEngine: "capsule"\n...\n'})}),"\n"]}),"\n"]})}),(0,r.jsx)(o.A,{value:"disable",children:(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"To disable tenancy engine update edp-install values file:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:'title="values.yaml"',children:'...\ncd-pipeline-operator:\n  tenancyEngine: "none"\n...\n'})}),"\n"]}),"\n"]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"(Optional) Align Keycloak integration."}),"\n",(0,r.jsxs)(n.p,{children:["In KubeRocketCI version 3.9.0, the Keycloak configuration procedure has been altered in the ",(0,r.jsx)(n.a,{href:"https://github.com/epam/edp-install/blob/v3.9.0/deploy-templates/values.yaml#L461",children:"values"})," file. Please be attentive and align the configuration for your own use case."]}),"\n",(0,r.jsxs)(s.A,{defaultValue:"3.8.1",values:[{label:"3.8.1",value:"3.8.1"},{label:"3.9.0",value:"3.9.0"}],children:[(0,r.jsx)(o.A,{value:"3.8.1",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:'title="values.yaml"',children:'sso:\n  # -- Install OAuth2-proxy and Keycloak CRs as a part of KubeRocketCI deployment.\n  enabled: false\n  # -- Defines Keycloak realm name that is used as the Identity Provider (IdP) realm\n  realmName: "broker"\n  # -- Keycloak URL.\n  keycloakUrl: https://keycloak.example.com\n'})})}),(0,r.jsx)(o.A,{value:"3.9.0",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:'title="values.yaml"',children:"sso:\n  # -- Install OAuth2-proxy and Keycloak CRs as a part of KubeRocketCI deployment.\n  enabled: false\n\n  keycloakOperatorResources:\n    # Set to false if using the add-ons approach (refer to https://github.com/epam/edp-cluster-add-ons)\n    # for KubeRocketCI installation and if the extension-oidc is already installed.\n    # This prevents the creation of an additional Keycloak resource and secret.\n    # The 'kind' and 'name' must be specified in case of using an existing Keycloak/ClusterKeycloak resource.\n    # Create kind: Keycloak as a part of chart installation\n    createKeycloakCR: true\n    # Can be Keycloak or ClusterKeycloak.\n    kind: Keycloak\n    # Name of kind: Keycloak/ClusterKeycloak CR.\n    name: main\n\n  # -- Defines the Keycloak realm name, which by default is named after the namespace where KubeRocketCI is deployed.\n  # realmName: edp\n  # -- Defines Keycloak sso realm name that is used as the Identity Provider (IdP) realm\n  ssoRealmName: \"broker\"\n  # -- Defines Keycloak client name that is used for the Identity Provider (IdP) client\n  ssoClientName: \"edp\"\n  # -- Keycloak URL.\n  keycloakUrl: https://keycloak.example.com/auth\n"})})})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"To upgrade KubeRocketCI to the v3.9.0, run the following command:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"helm upgrade edp epamedp/edp-install -n edp --values values.yaml --version=3.9.0\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["To verify the installation, it is possible to test the deployment before applying it to the cluster with the ",(0,r.jsx)(n.code,{children:"--dry-run"})," tag:\n",(0,r.jsx)(n.code,{children:"helm upgrade edp epamedp/edp-install -n edp --values values.yaml --version=3.9.0 --dry-run"})]})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},19365:(e,n,a)=>{a.d(n,{A:()=>s});a(96540);var t=a(34164);const r={tabItem:"tabItem_Ymn6"};var l=a(74848);function s(e){let{children:n,hidden:a,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,t.A)(r.tabItem,s),hidden:a,children:n})}},11470:(e,n,a)=>{a.d(n,{A:()=>j});var t=a(96540),r=a(34164),l=a(23104),s=a(56347),o=a(205),i=a(57485),u=a(31682),c=a(70679);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:a}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:a,attributes:t,default:r}}=e;return{value:n,label:a,attributes:t,default:r}}))}(a);return function(e){const n=(0,u.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function h(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:a}=e;const r=(0,s.W6)(),l=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,i.aZ)(l),(0,t.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(r.location.search);n.set(l,e),r.replace({...r.location,search:n.toString()})}),[l,r])]}function g(e){const{defaultValue:n,queryString:a=!1,groupId:r}=e,l=p(e),[s,i]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:l}))),[u,d]=m({queryString:a,groupId:r}),[g,b]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,l]=(0,c.Dv)(a);return[r,(0,t.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),f=(()=>{const e=u??g;return h({value:e,tabValues:l})?e:null})();(0,o.A)((()=>{f&&i(f)}),[f]);return{selectedValue:s,selectValue:(0,t.useCallback)((e=>{if(!h({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),b(e)}),[d,b,l]),tabValues:l}}var b=a(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=a(74848);function y(e){let{className:n,block:a,selectedValue:t,selectValue:s,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.a_)(),c=e=>{const n=e.currentTarget,a=i.indexOf(n),r=o[a].value;r!==t&&(u(n),s(r))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=i.indexOf(e.currentTarget)+1;n=i[a]??i[0];break}case"ArrowLeft":{const a=i.indexOf(e.currentTarget)-1;n=i[a]??i[i.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":a},n),children:o.map((e=>{let{value:n,label:a,attributes:l}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>i.push(e),onKeyDown:d,onClick:c,...l,className:(0,r.A)("tabs__item",f.tabItem,l?.className,{"tabs__item--active":t===n}),children:a??n},n)}))})}function k(e){let{lazy:n,children:a,selectedValue:l}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===l));return e?(0,t.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function x(e){const n=g(e);return(0,v.jsxs)("div",{className:(0,r.A)("tabs-container",f.tabList),children:[(0,v.jsx)(y,{...n,...e}),(0,v.jsx)(k,{...n,...e})]})}function j(e){const n=(0,b.A)();return(0,v.jsx)(x,{...e,children:d(e.children)},String(n))}},28453:(e,n,a)=>{a.d(n,{R:()=>s,x:()=>o});var t=a(96540);const r={},l=t.createContext(r);function s(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);