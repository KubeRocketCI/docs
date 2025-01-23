"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[82435],{59177:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>u,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"operator-guide/upgrade/upgrade-edp-3.9","title":"Upgrade KubeRocketCI v3.8 to 3.9","description":"We suggest backing up the KubeRocketCI environment before starting the upgrade procedure.","source":"@site/versioned_docs/version-3.9/operator-guide/upgrade/upgrade-edp-3.9.md","sourceDirName":"operator-guide/upgrade","slug":"/operator-guide/upgrade/upgrade-edp-3.9","permalink":"/docs/3.9/operator-guide/upgrade/upgrade-edp-3.9","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/operator-guide/upgrade/upgrade-edp-3.9.md","tags":[],"version":"3.9","lastUpdatedBy":"Sergiy Kulanov","lastUpdatedAt":1737665242000,"frontMatter":{},"sidebar":"operatorGuideSidebar","previous":{"title":"Upgrade KubeRocketCI v3.9 to 3.10","permalink":"/docs/3.9/operator-guide/upgrade/upgrade-edp-3.10"},"next":{"title":"Upgrade KubeRocketCI v3.7 to 3.8","permalink":"/docs/3.9/operator-guide/upgrade/upgrade-edp-3.8"}}');var r=t(74848),l=t(28453),s=t(11470),o=t(19365);const i={},u="Upgrade KubeRocketCI v3.8 to 3.9",c={},d=[];function p(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,l.R)(),...e.components},{Head:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"upgrade-kuberocketci-v38-to-39",children:"Upgrade KubeRocketCI v3.8 to 3.9"})}),"\n",(0,r.jsx)(t,{children:(0,r.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/operator-guide/upgrade/upgrade-edp-3.9/"})}),"\n",(0,r.jsx)(n.admonition,{type:"important",children:(0,r.jsx)(n.p,{children:"We suggest backing up the KubeRocketCI environment before starting the upgrade procedure."})}),"\n",(0,r.jsx)(n.p,{children:"This section provides detailed instructions for upgrading the KubeRocketCI to version 3.9.0. Follow the steps and requirements outlined below:"}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://github.com/epam/edp-install/tree/v3.9.0",children:"edp-install"})," version v3.9 is not support Kiosk as tenancy engine. Please migrate to Capsule engine or disable this options."]})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"(Optional) Migrate from Kiosk tenancy engine."}),"\n",(0,r.jsxs)(s.A,{defaultValue:"capsule",values:[{label:"Capsule",value:"capsule"},{label:"Disable tenancy engine",value:"disable"}],children:[(0,r.jsx)(o.A,{value:"capsule",children:(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Take look how to install Capsule using ",(0,r.jsx)(n.a,{href:"https://github.com/epam/edp-cluster-add-ons/tree/main/clusters/core/addons/capsule",children:"addons"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://epam.github.io/edp-install/operator-guide/capsule",children:"Integrate Capsule"})," with KubeRocketCI."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Update edp-install values file:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:'title="values.yaml"',children:'...\ncd-pipeline-operator:\n  tenancyEngine: "capsule"\n...\n'})}),"\n"]}),"\n"]})}),(0,r.jsx)(o.A,{value:"disable",children:(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"To disable tenancy engine update edp-install values file:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:'title="values.yaml"',children:'...\ncd-pipeline-operator:\n  tenancyEngine: "none"\n...\n'})}),"\n"]}),"\n"]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"(Optional) Align Keycloak integration."}),"\n",(0,r.jsxs)(n.p,{children:["In KubeRocketCI version 3.9.0, the Keycloak configuration procedure has been altered in the ",(0,r.jsx)(n.a,{href:"https://github.com/epam/edp-install/blob/v3.9.0/deploy-templates/values.yaml#L461",children:"values"})," file. Please be attentive and align the configuration for your own use case."]}),"\n",(0,r.jsxs)(s.A,{defaultValue:"3.8.1",values:[{label:"3.8.1",value:"3.8.1"},{label:"3.9.0",value:"3.9.0"}],children:[(0,r.jsx)(o.A,{value:"3.8.1",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:'title="values.yaml"',children:'sso:\n  # -- Install OAuth2-proxy and Keycloak CRs as a part of KubeRocketCI deployment.\n  enabled: false\n  # -- Defines Keycloak realm name that is used as the Identity Provider (IdP) realm\n  realmName: "broker"\n  # -- Keycloak URL.\n  keycloakUrl: https://keycloak.example.com\n'})})}),(0,r.jsx)(o.A,{value:"3.9.0",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:'title="values.yaml"',children:"sso:\n  # -- Install OAuth2-proxy and Keycloak CRs as a part of KubeRocketCI deployment.\n  enabled: false\n\n  keycloakOperatorResources:\n    # Set to false if using the add-ons approach (refer to https://github.com/epam/edp-cluster-add-ons)\n    # for KubeRocketCI installation and if the extension-oidc is already installed.\n    # This prevents the creation of an additional Keycloak resource and secret.\n    # The 'kind' and 'name' must be specified in case of using an existing Keycloak/ClusterKeycloak resource.\n    # Create kind: Keycloak as a part of chart installation\n    createKeycloakCR: true\n    # Can be Keycloak or ClusterKeycloak.\n    kind: Keycloak\n    # Name of kind: Keycloak/ClusterKeycloak CR.\n    name: main\n\n  # -- Defines the Keycloak realm name, which by default is named after the namespace where KubeRocketCI is deployed.\n  # realmName: edp\n  # -- Defines Keycloak sso realm name that is used as the Identity Provider (IdP) realm\n  ssoRealmName: \"broker\"\n  # -- Defines Keycloak client name that is used for the Identity Provider (IdP) client\n  ssoClientName: \"edp\"\n  # -- Keycloak URL.\n  keycloakUrl: https://keycloak.example.com/auth\n"})})})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"To upgrade KubeRocketCI to the v3.9.0, run the following command:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"helm upgrade edp epamedp/edp-install -n edp --values values.yaml --version=3.9.0\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["To verify the installation, it is possible to test the deployment before applying it to the cluster with the ",(0,r.jsx)(n.code,{children:"--dry-run"})," tag:\n",(0,r.jsx)(n.code,{children:"helm upgrade edp epamedp/edp-install -n edp --values values.yaml --version=3.9.0 --dry-run"})]})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>s});t(96540);var a=t(34164);const r={tabItem:"tabItem_Ymn6"};var l=t(74848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,s),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>j});var a=t(96540),r=t(34164),l=t(23104),s=t(56347),o=t(205),i=t(57485),u=t(31682),c=t(70679);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,u.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const r=(0,s.W6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i.aZ)(l),(0,a.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(r.location.search);n.set(l,e),r.replace({...r.location,search:n.toString()})}),[l,r])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,l=p(e),[s,i]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:l}))),[u,d]=m({queryString:t,groupId:r}),[g,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,l]=(0,c.Dv)(t);return[r,(0,a.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:r}),f=(()=>{const e=u??g;return h({value:e,tabValues:l})?e:null})();(0,o.A)((()=>{f&&i(f)}),[f]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),b(e)}),[d,b,l]),tabValues:l}}var b=t(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(74848);function y(e){let{className:n,block:t,selectedValue:a,selectValue:s,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.a_)(),c=e=>{const n=e.currentTarget,t=i.indexOf(n),r=o[t].value;r!==a&&(u(n),s(r))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:l}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>i.push(e),onKeyDown:d,onClick:c,...l,className:(0,r.A)("tabs__item",f.tabItem,l?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function k(e){let{lazy:n,children:t,selectedValue:l}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===l));return e?(0,a.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function x(e){const n=g(e);return(0,v.jsxs)("div",{className:(0,r.A)("tabs-container",f.tabList),children:[(0,v.jsx)(y,{...n,...e}),(0,v.jsx)(k,{...n,...e})]})}function j(e){const n=(0,b.A)();return(0,v.jsx)(x,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var a=t(96540);const r={},l=a.createContext(r);function s(e){const n=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);