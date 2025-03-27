"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[79815],{3202:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"operator-guide/ci/tekton-long-term-storage","title":"Tekton Long-Term Log Storage","description":"Learn how to configure and access long-term logs for Tekton pipelines in KubeRocketCI using OpenSearch, enhancing log management and observability.","source":"@site/versioned_docs/version-3.10/operator-guide/ci/tekton-long-term-storage.md","sourceDirName":"operator-guide/ci","slug":"/operator-guide/ci/tekton-long-term-storage","permalink":"/docs/3.10/operator-guide/ci/tekton-long-term-storage","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/operator-guide/ci/tekton-long-term-storage.md","tags":[],"version":"3.10","lastUpdatedBy":"Sergiy Kulanov","lastUpdatedAt":1740847812000,"frontMatter":{"title":"Tekton Long-Term Log Storage","description":"Learn how to configure and access long-term logs for Tekton pipelines in KubeRocketCI using OpenSearch, enhancing log management and observability.","sidebar_label":"Tekton Long-Term Log Storage"},"sidebar":"operatorGuideSidebar","previous":{"title":"Pipeline Monitoring with Prometheus and Grafana","permalink":"/docs/3.10/operator-guide/ci/tekton-monitoring"},"next":{"title":"Microsoft Teams Notification","permalink":"/docs/3.10/operator-guide/ci/notification-msteams"}}');var o=t(74848),s=t(28453),i=t(65537),a=t(79329);const l={title:"Tekton Long-Term Log Storage",description:"Learn how to configure and access long-term logs for Tekton pipelines in KubeRocketCI using OpenSearch, enhancing log management and observability.",sidebar_label:"Tekton Long-Term Log Storage"},c="Tekton Long-Term Log Storage",d={},h=[{value:"Long-Term Log Access Workflow",id:"long-term-log-access-workflow",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Viewing Long-Term Logs",id:"viewing-long-term-logs",level:2},{value:"Related Articles",id:"related-articles",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{Head:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"tekton-long-term-log-storage",children:"Tekton Long-Term Log Storage"})}),"\n",(0,o.jsx)(r,{children:(0,o.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/operator-guide/ci/tekton-long-term-storage"})}),"\n",(0,o.jsx)(n.p,{children:"KubeRocketCI Portal provides the capability to view long-term logs for pipelines. The long-term logs are stored in the OpenSearch cluster and can be viewed in the KubeRocketCI Portal after pipeline cleanup or deletion. This guide describes how to configure and view long-term logs in the KubeRocketCI Portal."}),"\n",(0,o.jsx)(n.h2,{id:"long-term-log-access-workflow",children:"Long-Term Log Access Workflow"}),"\n",(0,o.jsx)(n.p,{children:"The following diagram illustrates the workflow for accessing long-term logs for pipelines in the KubeRocketCI Portal:"}),"\n",(0,o.jsx)(n.mermaid,{value:"sequenceDiagram\n    actor U as User\n    participant KR as KubeRocketCI Portal\n    participant PC as Pipeline Controller\n    participant RW as Fluent Bit Agent\n    participant KD as KrakenD API Gateway\n    participant RA as OpenSearch\n\n    U->>KR: Trigger or create a pipeline\n    KR->>PC: Start pipeline execution\n    RW--\x3e>PC: Collect pipeline logs\n    RW->>RA: Send logs to OpenSearch\n    Note over KR,RA: Pipeline is deleted or cleaned up\n    U->>KR: View pipeline logs\n    KR--\x3e>KD: Request long-term logs\n    KD--\x3e>RA: Fetch long-term logs\n    KR->>U: Return long-term logs"}),"\n",(0,o.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,o.jsx)(n.p,{children:"To configure long-term log storage for pipelines in the KubeRocketCI Portal, follow the steps below:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Install and configure OpenSearch cluster:"}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["To install OpenSearch cluster, we recommend to use the ",(0,o.jsx)(n.a,{href:"https://github.com/epam/edp-cluster-add-ons/tree/main/clusters/core/addons/opensearch",children:"edp-cluster-add-ons"})," repository, which contains already prepared configurations for OpenSearch installation."]})}),"\n",(0,o.jsx)(n.p,{children:"To install OpenSearch cluster using the add-ons repository, follow the steps below:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Clone the forked ",(0,o.jsx)(n.a,{href:"https://github.com/epam/edp-cluster-add-ons/",children:"edp-cluster-add-ons"})," repository."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Navigate to the ",(0,o.jsx)(n.code,{children:"clusters/core/addons/opensearch"})," directory and configure the ",(0,o.jsx)(n.code,{children:"values.yaml"})," file with the necessary values for OpenSearch cluster installation."]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["Ensure that ",(0,o.jsx)(n.a,{href:"https://github.com/epam/edp-cluster-add-ons/blob/44ca88c079d464c826fcae38f3f03fe983d1f984/clusters/core/addons/opensearch/values.yaml#L391",children:"Fluent Bit"})," is configured to send container logs to the ",(0,o.jsx)(n.code,{children:"logstash-edp"})," index in the OpenSearch cluster, as the KubeRocketCI Portal uses this index to retrieve long-term logs."]})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Install the OpenSearch cluster using Helm or ",(0,o.jsx)(n.a,{href:"/docs/3.10/operator-guide/add-ons-overview",children:"Argo CD"})," methods."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Install and configure KrakenD API Gateway:"}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["To install KrakenD API Gateway with OpenSearch connection, we recommend to use the ",(0,o.jsx)(n.a,{href:"https://github.com/epam/edp-cluster-add-ons/tree/main/clusters/core/addons/krakend",children:"edp-cluster-add-ons"})," repository, which contains already prepared configurations for KrakenD installation.\nFor more details, refer to the ",(0,o.jsx)(n.a,{href:"/docs/3.10/operator-guide/extensions/krakend",children:"KrakenD Integration"})," guide."]})}),"\n",(0,o.jsx)(n.p,{children:"To install KrakenD API Gateway with OpenSearch connection, follow the steps below:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Clone the forked ",(0,o.jsx)(n.a,{href:"https://github.com/epam/edp-cluster-add-ons/",children:"edp-cluster-add-ons"})," repository."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Navigate to the ",(0,o.jsx)(n.code,{children:"clusters/core/addons/krakend"})," directory and configure the ",(0,o.jsx)(n.code,{children:"values.yaml"})," file with the necessary values for KrakenD installation."]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["Ensure that the KrakenD endpoint object for OpenSearch has the ",(0,o.jsx)(n.code,{children:"/search/logs"})," endpoint name, as the KubeRocketCI Portal uses this endpoint to fetch long-term logs."]})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Ensure that the KrakenD ",(0,o.jsx)(n.a,{href:"https://github.com/epam/edp-cluster-add-ons/blob/main/clusters/core/addons/krakend/templates/external-secrets/krakend.yaml",children:"configuration secret"})," contains the OpenSearch connection variables."]}),"\n",(0,o.jsxs)(i.A,{defaultValue:"externalsecret",values:[{label:"Manifests",value:"manifests"},{label:"External Secrets Operator",value:"externalsecret"}],children:[(0,o.jsx)(a.A,{value:"manifests",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"apiVersion: v1\nkind: Secret\nmetadata:\n  name: krakend\n  namespace: krakend\ntype: Opaque\nstringData:\n  OPENSEARCH_URL: https://opensearch-cluster-master.logging:9200\n  OPENSEARCH_CREDS: <base64-encoded-credentials>\n"})})}),(0,o.jsx)(a.A,{value:"externalsecret",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "OPENSEARCH_URL": "https://opensearch-cluster-master.logging:9200",\n  "OPENSEARCH_CREDS": "<base64-encoded-credentials>"\n}\n'})})})]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Install the KrakenD API Gateway using Helm or ",(0,o.jsx)(n.a,{href:"/docs/3.10/operator-guide/add-ons-overview",children:"Argo CD"})," methods."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"viewing-long-term-logs",children:"Viewing Long-Term Logs"}),"\n",(0,o.jsx)(n.p,{children:"After configuring long-term log storage for Pipelines in the KubeRocketCI Portal, follow the steps below to view long-term logs:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Navigate to the KubeRocketCI Portal and sign in with appropriate credentials."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"KubeRocketCI Portal",src:t(3763).A+"",title:"KubeRocketCI Portal",width:"3364",height:"1662"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["In the ",(0,o.jsx)(n.strong,{children:"Components"})," section, navigate to the appropriate component (if component is not created yet, refer to the ",(0,o.jsx)(n.a,{href:"/docs/3.10/user-guide/add-application",children:"Add Application"})," guide to create a new one)."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"KubeRocketCI Portal Components",src:t(1646).A+"",title:"KubeRocketCI Portal Components",width:"3364",height:"1662"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["In the component window, in the right upper corner, click the ",(0,o.jsx)(n.strong,{children:"GIT"})," button to navigate to the component repository (e.g., GitHub repository)."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Component Git Repository",src:t(19482).A+"",title:"Component Git Repository",width:"3364",height:"1662"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"In the component repository, create a Pull Request to trigger the review pipeline execution."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Create Pull Request",src:t(51057).A+"",title:"Create Pull Request",width:"3334",height:"1658"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["In the Pull Request checks section, click the ",(0,o.jsx)(n.strong,{children:"Show all checks"})," button and navigate to the review pipeline in the KubeRocketCI Portal by clicking the ",(0,o.jsx)(n.strong,{children:"Details"})," button."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"PR Checks",src:t(85865).A+"",title:"PR Checks",width:"3332",height:"1658"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"In the pipeline window, check the pipeline status. Ensure that the pipeline is successfully executed and the logs are available."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Pipeline Logs",src:t(40831).A+"",title:"Pipeline Logs",width:"3334",height:"1662"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Navigate to the ",(0,o.jsx)(n.strong,{children:"Pipelines"})," section and find the executed review pipeline. Delete the pipeline by clicking the ",(0,o.jsx)(n.strong,{children:"Delete"})," button."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Delete Pipeline",src:t(90149).A+"",title:"Delete Pipeline",width:"3364",height:"1662"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Return to the Pull Request and click the ",(0,o.jsx)(n.strong,{children:"Show all checks"})," button. Navigate to the review pipeline again by clicking the ",(0,o.jsx)(n.strong,{children:"Details"})," button."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"PR Checks",src:t(85865).A+"",title:"PR Checks",width:"3332",height:"1658"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"After the pipeline deletion, the long-term logs are displayed in the pipeline window."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Long Term Logs",src:t(52857).A+"",title:"Long Term Logs",width:"3329",height:"1660"})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"This example demonstrates how to view long-term logs for review pipeline, but the same approach can be applied to other pipeline types."}),"\n",(0,o.jsx)(n.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/docs/3.10/user-guide/add-application",children:"Add Application"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/docs/3.10/operator-guide/install-tekton",children:"Install Tekton"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/docs/3.10/operator-guide/install-kuberocketci",children:"Install KubeRocketCI"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/docs/3.10/operator-guide/extensions/krakend",children:"KrakenD API Gateway"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},79329:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var r=t(34164);const o={tabItem:"tabItem_Ymn6"};var s=t(74848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,i),hidden:t,children:n})}},65537:(e,n,t)=>{t.d(n,{A:()=>w});var r=t(96540),o=t(34164),s=t(65627),i=t(56347),a=t(50372),l=t(30604),c=t(11861),d=t(78749);function h(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:o}}=e;return{value:n,label:t,attributes:r,default:o}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const o=(0,i.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(o.location.search);n.set(s,e),o.replace({...o.location,search:n.toString()})}),[s,o])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,s=u(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[c,h]=g({queryString:t,groupId:o}),[m,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,s]=(0,d.Dv)(t);return[o,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:o}),x=(()=>{const e=c??m;return p({value:e,tabValues:s})?e:null})();(0,a.A)((()=>{x&&l(x)}),[x]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),f(e)}),[h,f,s]),tabValues:s}}var f=t(9136);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(74848);function j(e){let{className:n,block:t,selectedValue:r,selectValue:i,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),o=a[t].value;o!==r&&(c(n),i(o))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>{l.push(e)},onKeyDown:h,onClick:d,...s,className:(0,o.A)("tabs__item",x.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function k(e){let{lazy:n,children:t,selectedValue:s}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:(0,o.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function v(e){const n=m(e);return(0,b.jsxs)("div",{className:(0,o.A)("tabs-container",x.tabList),children:[(0,b.jsx)(j,{...n,...e}),(0,b.jsx)(k,{...n,...e})]})}function w(e){const n=(0,f.A)();return(0,b.jsx)(v,{...e,children:h(e.children)},String(n))}},19482:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/component-git-repository-6c00efaf81f107066ce587cfa4ab8f56.png"},51057:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/create-pull-request-4902a08ba2625cba4b604fe8883170b5.png"},90149:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/delete-pipeline-b0ef0d1bf05f518e27818775ba0309d5.png"},3763:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/kuberocketci-portal-efafbd265d308181849c67cece4dba23.png"},40831:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/pipeline-logs-5f5ed793f07da39b47d3deb6651cc99a.png"},1646:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/portal-components-d98f1b57c6e385be1d70203644f04149.png"},85865:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/pr-checks-9a8acde1f80b0b87021e1eb71fffee8a.png"},52857:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/reserved-logs-6bf21f9d620d0bf2d18d414bc30f162a.png"},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var r=t(96540);const o={},s=r.createContext(o);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);