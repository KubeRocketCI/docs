"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[82165],{63724:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"operator-guide/devsecops/dependency-track","title":"Integrate DependencyTrack","description":"This documentation guide provides comprehensive instructions for installing and integrating DependencyTrack with the KubeRocketCI.","source":"@site/docs/operator-guide/devsecops/dependency-track.md","sourceDirName":"operator-guide/devsecops","slug":"/operator-guide/devsecops/dependency-track","permalink":"/docs/next/operator-guide/devsecops/dependency-track","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/operator-guide/devsecops/dependency-track.md","tags":[],"version":"current","lastUpdatedBy":"Sergiy Kulanov","lastUpdatedAt":1737662090000,"frontMatter":{},"sidebar":"operatorGuideSidebar","previous":{"title":"Security and Compliance: Overview","permalink":"/docs/next/operator-guide/devsecops/overview"},"next":{"title":"Integrate DefectDojo","permalink":"/docs/next/operator-guide/devsecops/defectdojo"}}');var a=t(74848),s=t(28453),o=t(11470),i=t(19365);const l={},c="Integrate DependencyTrack",d={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Related Articles",id:"related-articles",level:2}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{Head:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"integrate-dependencytrack",children:"Integrate DependencyTrack"})}),"\n",(0,a.jsx)(r,{children:(0,a.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/operator-guide/devsecops/dependency-track/"})}),"\n",(0,a.jsx)(n.p,{children:"This documentation guide provides comprehensive instructions for installing and integrating DependencyTrack with the KubeRocketCI."}),"\n",(0,a.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Kubectl version 1.26.0+ is installed. Please refer to the ",(0,a.jsx)(n.a,{href:"https://kubernetes.io/releases/download/",children:"Kubernetes official website"})," for details."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"https://helm.sh",children:"Helm"})," version 3.14.0+ is installed. Please refer to the ",(0,a.jsx)(n.a,{href:"https://github.com/helm/helm/releases",children:"Helm page"})," on GitHub for details."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,a.jsxs)(n.p,{children:["To install DependencyTrack use ",(0,a.jsx)(n.a,{href:"/docs/next/operator-guide/add-ons-overview",children:"KubeRocketCI addons"})," approach."]}),"\n",(0,a.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Open ",(0,a.jsx)(n.strong,{children:"Administration"})," -> ",(0,a.jsx)(n.strong,{children:"Access Management"})," -> ",(0,a.jsx)(n.strong,{children:"Teams"}),". Click ",(0,a.jsx)(n.strong,{children:"Create Team"})," -> ",(0,a.jsx)(n.strong,{children:"Automation"})," and click ",(0,a.jsx)(n.strong,{children:"Create"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Click ",(0,a.jsx)(n.strong,{children:"+"})," in ",(0,a.jsx)(n.strong,{children:"Permissions"})," and add:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"BOM_UPLOAD\nPROJECT_CREATION_UPLOAD\nVIEW_PORTFOLIO\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Click ",(0,a.jsx)(n.strong,{children:"+"})," in ",(0,a.jsx)(n.strong,{children:"API keys"})," to create token:"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"DependencyTrack settings",src:t(45439).A+"",title:"DependencyTrack settings",width:"1903",height:"955"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Provision secrets using a manifest, Portal, or with the externalSecrets operator:"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(o.A,{defaultValue:"portal",values:[{label:"UI Portal",value:"portal"},{label:"Manifests",value:"manifests"},{label:"External Secrets Operator",value:"externalsecret"}],children:[(0,a.jsxs)(i.A,{value:"portal",children:[(0,a.jsxs)(n.p,{children:["Go to the ",(0,a.jsx)(n.strong,{children:"Portal"})," open ",(0,a.jsx)(n.strong,{children:"Configuration"})," -> ",(0,a.jsx)(n.strong,{children:"SECURITY"})," -> ",(0,a.jsx)(n.strong,{children:"DEPENDENCYTRACK"}),". Click ",(0,a.jsx)(n.strong,{children:"+ ADD INTEGRATION"})," fill fields ",(0,a.jsx)(n.code,{children:"Quick Link URL"}),", ",(0,a.jsx)(n.code,{children:"URL"})," and ",(0,a.jsx)(n.code,{children:"Token"})," click the ",(0,a.jsx)(n.code,{children:"save"})," button."]}),(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"DependencyTrack update manual secret",src:t(85766).A+"",title:"DependencyTrack update manual secret",width:"3584",height:"2016"})})]}),(0,a.jsx)(i.A,{value:"manifests",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:'apiVersion: v1\nkind: Secret\nmetadata:\n  name: ci-dependency-track\n  namespace: <edp>\n  labels:\n    app.edp.epam.com/secret-type: dependency-track\n    app.edp.epam.com/integration-secret: "true"\nstringData:\n  token: <dependency-track-token>\n  url: <dependency-track-api-url>\ntype: Opaque\n'})})}),(0,a.jsxs)(i.A,{value:"externalsecret",children:[(0,a.jsx)(n.p,{children:"Store DependencyTrack URL and Token in the AWS Parameter Store with the following format:"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:'"ci-dependency-track":\n{\n  "token": "XXXXXXXXXXXX",\n  "url": "https://dependency-track.example.com"\n}\n'})}),(0,a.jsxs)(n.p,{children:["Go to the ",(0,a.jsx)(n.strong,{children:"Portal"})," open ",(0,a.jsx)(n.strong,{children:"Configuration"})," -> ",(0,a.jsx)(n.strong,{children:"SECURITY"})," -> ",(0,a.jsx)(n.strong,{children:"DEPENDENCYTRACK"})," see the secret managed by the ",(0,a.jsx)(n.code,{children:"Managed by External Secret"}),"."]}),(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"DependencyTrack managed by external secret operator",src:t(12378).A+"",title:"DependencyTrack managed by external secret operator",width:"3584",height:"2016"})}),(0,a.jsxs)(n.p,{children:["More detail on External Secrets Operator Integration can be found on ",(0,a.jsx)(n.a,{href:"/docs/next/operator-guide/secrets-management/external-secrets-operator-integration",children:"the following page"})]})]})]}),"\n",(0,a.jsx)(n.p,{children:"After following the instructions provided, you should be able to integrate your DependencyTrack with the KubeRocketCI."}),"\n",(0,a.jsx)(n.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/docs/next/operator-guide/secrets-management/install-external-secrets-operator",children:"Install External Secrets Operator"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/docs/next/operator-guide/secrets-management/external-secrets-operator-integration",children:"External Secrets Operator Integration"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/docs/next/operator-guide/add-ons-overview",children:"Cluster Add-Ons Overview"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>o});t(96540);var r=t(34164);const a={tabItem:"tabItem_Ymn6"};var s=t(74848);function o(e){let{children:n,hidden:t,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,o),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>y});var r=t(96540),a=t(34164),s=t(23104),o=t(56347),i=t(205),l=t(57485),c=t(31682),d=t(70679);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const a=(0,o.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=p(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[c,u]=g({queryString:t,groupId:a}),[x,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,d.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),m=(()=>{const e=c??x;return h({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{m&&l(m)}),[m]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,s]),tabValues:s}}var f=t(92303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(74848);function j(e){let{className:n,block:t,selectedValue:r,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),a=i[t].value;a!==r&&(c(n),o(a))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...s,className:(0,a.A)("tabs__item",m.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:s}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function k(e){const n=x(e);return(0,b.jsxs)("div",{className:(0,a.A)("tabs-container",m.tabList),children:[(0,b.jsx)(j,{...n,...e}),(0,b.jsx)(v,{...n,...e})]})}function y(e){const n=(0,f.A)();return(0,b.jsx)(k,{...e,children:u(e.children)},String(n))}},12378:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/defectdojo-external-secret-039127f066c92030073cd045df38425e.png"},85766:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/dependency-track-secret-611a7f953218971616bcbc8457fc8f6b.png"},45439:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/dependency-track-token-018b872bea082905c01793fa4bf652d5.png"},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var r=t(96540);const a={},s=r.createContext(a);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);