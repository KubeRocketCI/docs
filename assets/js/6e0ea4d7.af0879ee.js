"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[69793],{21353:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>g,frontMatter:()=>l,metadata:()=>a,toc:()=>h});const a=JSON.parse('{"id":"operator-guide/monitoring-and-observability/multitenant-logging","title":"Multitenant Logging","description":"Get acquainted with the multitenant logging components.","source":"@site/versioned_docs/version-3.10/operator-guide/monitoring-and-observability/multitenant-logging.md","sourceDirName":"operator-guide/monitoring-and-observability","slug":"/operator-guide/monitoring-and-observability/multitenant-logging","permalink":"/docs/operator-guide/monitoring-and-observability/multitenant-logging","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/operator-guide/monitoring-and-observability/multitenant-logging.md","tags":[],"version":"3.10","lastUpdatedBy":"Sergiy Kulanov","lastUpdatedAt":1737665576000,"frontMatter":{},"sidebar":"operatorGuideSidebar","previous":{"title":"IAM Roles for Loki Service Accounts","permalink":"/docs/operator-guide/monitoring-and-observability/loki-irsa"},"next":{"title":"Configuring Fluent Bit for Elasticsearch ILM Rollover","permalink":"/docs/operator-guide/monitoring-and-observability/kibana-ilm-rollover"}}');var r=n(74848),s=n(28453),i=n(11470),o=n(19365);const l={},c="Multitenant Logging",d={},h=[{value:"Logging Components",id:"logging-components",level:2},{value:"Review Project Logs in Grafana",id:"review-project-logs-in-grafana",level:2},{value:"Related Articles",id:"related-articles",level:2}];function u(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{Head:a}=t;return a||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"multitenant-logging",children:"Multitenant Logging"})}),"\n",(0,r.jsx)(a,{children:(0,r.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/operator-guide/monitoring-and-observability/multitenant-logging/"})}),"\n",(0,r.jsx)(t.p,{children:"Get acquainted with the multitenant logging components."}),"\n",(0,r.jsx)(t.h2,{id:"logging-components",children:"Logging Components"}),"\n",(0,r.jsx)(t.p,{children:"To configure the multitenant logging, it is necessary to deploy the following components:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://grafana.com/",children:"Grafana"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://grafana.com/oss/loki/",children:"Loki"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://banzaicloud.com/docs/one-eye/logging-operator/",children:"Logging-operator"})}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"In Grafana, every tenant represents an organization, i.e. it is necessary to create an organization for every namespace in the cluster. To get more details regarding the architecture of the Logging Operator, review the Diagram below."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Logging operator scheme",src:n(14651).A+"",title:"Logging operator scheme",width:"2400",height:"2312"})}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["It is necessary to deploy Loki with the ",(0,r.jsx)(t.code,{children:"auth_enabled: true"})," flag with the aim to ensure that the logs are separated for each tenant. For the authentication, Loki requires the HTTP header ",(0,r.jsx)(t.code,{children:"X-Scope-OrgID"}),"."]})}),"\n",(0,r.jsx)(t.h2,{id:"review-project-logs-in-grafana",children:"Review Project Logs in Grafana"}),"\n",(0,r.jsxs)(t.p,{children:["To find the project logs, navigate to ",(0,r.jsx)(t.a,{href:"https://grafana.shared.edp-epam.com",children:"Grafana"})," and follow the steps below:"]}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(t.p,{children:"Grafana is a common service for different customers where each customer works in its own separated Grafana Organization\nand doesn't have any access to another project."})}),"\n",(0,r.jsxs)(i.A,{defaultValue:"< v9.5.0",values:[{label:"Grafana < v9.5.0",value:"< v9.5.0"},{label:"Grafana >= v9.5.0",value:"> v9.5.0"}],children:[(0,r.jsx)(o.A,{value:"< v9.5.0",children:(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Choose the organization by clicking the ",(0,r.jsx)(t.strong,{children:"Current Organization"})," drop-down list. If a user is assigned to several organizations, switch easily by using the Switch button:"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Current organization",src:n(42344).A+"",title:"Current organization",width:"998",height:"897"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Navigate to the left-side menu and click the ",(0,r.jsx)(t.strong,{children:"Explore"})," button to see the Log Browser:"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Grafana explore",src:n(33387).A+"",title:"Grafana explore",width:"888",height:"836"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Click the ",(0,r.jsx)(t.strong,{children:"Log Browser"})," button to see the labels that can be used to filter logs (e.g., hostname, namespace, application name, pod, etc.):"]}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["Enable the correct data source, select the relevant logging data from the top left-side corner, and pay attention that the data source name always follows the ",(0,r.jsx)(t.code,{children:"project_name-logging"})," pattern."]})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Log browser",src:n(61639).A+"",title:"Log browser",width:"3184",height:"1358"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Filter out logs by clicking the ",(0,r.jsx)(t.strong,{children:"Show logs"})," button or write the query and click the ",(0,r.jsx)(t.strong,{children:"Run query"})," button."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Review the results with the quantity of logs per time, see the example below:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Logs example",src:n(67680).A+"",title:"Logs example",width:"1870",height:"1602"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Expand the logs to get detailed information about the object entry:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Expand logs",src:n(5746).A+"",title:"Expand logs",width:"1863",height:"466"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Use the following buttons to include or remove the labels from the query:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Addition button",src:n(91799).A+"",title:"Addition button",width:"1868",height:"565"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"See the ad-hoc statistics for a particular label:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Ad-hoc stat example",src:n(48430).A+"",title:"Ad-hoc stat example",width:"803",height:"129"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]})}),(0,r.jsx)(o.A,{value:"> v9.5.0",children:(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Choose the organization from the drop-down list in the upper left corner:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Current organization",src:n(63118).A+"",title:"Current organization",width:"3364",height:"1662"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Navigate to the left-side menu and click the ",(0,r.jsx)(t.strong,{children:"Explore"})," button:"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Grafana explore",src:n(38945).A+"",title:"Grafana explore",width:"3364",height:"1662"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Click the ",(0,r.jsx)(t.strong,{children:"Label Browser"})," button to see the labels that can be used to filter logs:"]}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["Enable the correct data source, select the relevant logging data from the top left-side corner, and pay attention that the data source name always follows the ",(0,r.jsx)(t.code,{children:"project_name-logging"})," pattern."]})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Log browser",src:n(36711).A+"",title:"Log browser",width:"3364",height:"1662"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"In the appeared window, select the labels to filter logs (e.g., hostname, namespace, application name, pod, etc.):"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"labels example",src:n(82541).A+"",title:"Logs example",width:"3364",height:"1662"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Close the ",(0,r.jsx)(t.strong,{children:"Label Browser"})," window and click the ",(0,r.jsx)(t.strong,{children:"Run query"})," button. Review the results with the quantity of logs per time, see the example below:"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Run query",src:n(90870).A+"",title:"Run query",width:"3364",height:"1662"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Expand the logs to get detailed information about the object entry. Use the following buttons to include or remove the labels from the query:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Expand logs",src:n(54816).A+"",title:"Expand logs",width:"3364",height:"1662"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"See the ad-hoc statistics for a particular label:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Ad-hoc stat example",src:n(14702).A+"",title:"Ad-hoc stat example",width:"3364",height:"1662"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]})})]}),"\n",(0,r.jsx)(t.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://grafana.com/docs/grafana/latest/",children:"Grafana Documentation"})}),"\n"]})]})}function g(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var a=n(34164);const r={tabItem:"tabItem_Ymn6"};var s=n(74848);function i(e){let{children:t,hidden:n,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,i),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>w});var a=n(96540),r=n(34164),s=n(23104),i=n(56347),o=n(205),l=n(57485),c=n(31682),d=n(70679);function h(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function g(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})}),[s,r])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,s=u(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[c,h]=p({queryString:n,groupId:r}),[m,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,d.Dv)(n);return[r,(0,a.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:r}),j=(()=>{const e=c??m;return g({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{j&&l(j)}),[j]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!g({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),f(e)}),[h,f,s]),tabValues:s}}var f=n(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(74848);function b(e){let{className:t,block:n,selectedValue:a,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),d=e=>{const t=e.currentTarget,n=l.indexOf(t),r=o[n].value;r!==a&&(c(t),i(r))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>l.push(e),onKeyDown:h,onClick:d,...s,className:(0,r.A)("tabs__item",j.tabItem,s?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function A(e){let{lazy:t,children:n,selectedValue:s}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===s));return e?(0,a.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function v(e){const t=m(e);return(0,x.jsxs)("div",{className:(0,r.A)("tabs-container",j.tabList),children:[(0,x.jsx)(b,{...t,...e}),(0,x.jsx)(A,{...t,...e})]})}function w(e){const t=(0,f.A)();return(0,x.jsx)(v,{...e,children:h(e.children)},String(t))}},14651:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/logging-operator-architecture-c0511347d9e67ad533b72f7514e47065.png"},48430:(e,t,n)=>{n.d(t,{A:()=>a});const a="data:image/png;base64,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"},91799:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/grafana-addition-button-f39100f7b1bf7b0a02c250a330881123.png"},54816:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/grafana-expand-logs-tab-d5aa083d0edec8f4ccfc327b842fcfdc.png"},5746:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/grafana-expand-logs-237b342ad75c412ec8dd903356b979d4.png"},38945:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/grafana-explore-tab-f5207993d2d0638094f5714a2b32aab6.png"},33387:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/grafana-explore-776aefb87a9ab61d992a5ca1758a7d86.png"},82541:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/grafana-label-browser-tab-dd3fb4e723b3658e55e5fd1f11184c52.png"},36711:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/grafana-label-browser-19dacc40d30f73e782d0b4d88779ee2c.png"},14702:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/grafana-label-statistics-a9dd636a166e205d6d2d167ff05d8199.png"},61639:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/grafana-log-browser-original-96b4c65a41ffe79eabd4f6730aa3362c.png"},67680:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/grafana-logs-example-a9fe8a0c415c3b2b65009d356406fb59.png"},42344:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/grafana-organization-user-info-29ad7a913597bf372dbab917bfc5e850.png"},63118:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/grafana-organizations-507fc16cf3ea1cf76a20daee10de4cb1.png"},90870:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/grafana-query-result-f3d4b1b8a136d45a027b4055030ea9a5.png"},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var a=n(96540);const r={},s=a.createContext(r);function i(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);