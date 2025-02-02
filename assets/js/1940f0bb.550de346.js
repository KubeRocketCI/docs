"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[15399],{25690:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"operator-guide/extensions/krakend","title":"KrakenD Integration","description":"This guide provides comprehensive instructions for integrating KrakenD into KubeRocketCI. KrakenD is a high-performance, open-source API gateway designed to securely manage requests, hide sensitive data, and optimize routing. It supports a wide variety of configuration options, including service discovery, caching, authorization, and rate limiting, allowing to tailor the gateway to the platform needs.","source":"@site/docs/operator-guide/extensions/krakend.md","sourceDirName":"operator-guide/extensions","slug":"/operator-guide/extensions/krakend","permalink":"/docs/next/operator-guide/extensions/krakend","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/operator-guide/extensions/krakend.md","tags":[],"version":"current","lastUpdatedBy":"Sergiy Kulanov","lastUpdatedAt":1738518635000,"frontMatter":{},"sidebar":"operatorGuideSidebar","previous":{"title":"Custom Certificates","permalink":"/docs/next/operator-guide/advanced-installation/custom-certificates"},"next":{"title":"Uninstall KubeRocketCI","permalink":"/docs/next/operator-guide/uninstall-kuberocketci"}}');var a=t(74848),s=t(28453),o=t(11470),i=t(19365);const l={},c="KrakenD Integration",d={},u=[{value:"Configuration and Installation",id:"configuration-and-installation",level:2},{value:"Installation",id:"installation",level:3},{value:"Configuration",id:"configuration",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{Head:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"krakend-integration",children:"KrakenD Integration"})}),"\n",(0,a.jsx)(t,{children:(0,a.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/operator-guide/extensions/krakend/"})}),"\n",(0,a.jsxs)(n.p,{children:["This guide provides comprehensive instructions for integrating ",(0,a.jsx)(n.strong,{children:"KrakenD"})," into KubeRocketCI. ",(0,a.jsx)(n.a,{href:"https://www.krakend.io/docs/",children:"KrakenD"})," is a high-performance, open-source API gateway designed to securely manage requests, hide sensitive data, and optimize routing. It supports a wide variety of configuration options, including service discovery, caching, authorization, and rate limiting, allowing to tailor the gateway to the platform needs."]}),"\n",(0,a.jsx)(n.p,{children:"KubeRocketCI leverages KrakenD to integrate with various services, such as SonarQube, Dependency-Track, and OpenSearch. This integration enables the platform to retrieve data from these services and display it in the KubeRocketCI UI, providing users with a comprehensive overview of their projects and pipelines."}),"\n",(0,a.jsx)(n.h2,{id:"configuration-and-installation",children:"Configuration and Installation"}),"\n",(0,a.jsxs)(n.p,{children:["Ensure that an ",(0,a.jsx)(n.strong,{children:"ingress controller"})," and ",(0,a.jsx)(n.strong,{children:"kuberocketci-rbac"})," are preinstalled on the cluster. You can install them using the resources available in the ",(0,a.jsx)(n.a,{href:"https://github.com/epam/edp-cluster-add-ons",children:"Cluster Add-Ons"})," repository."]}),"\n",(0,a.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,a.jsxs)(n.p,{children:["To streamline the installation of KrakenD in your environment, use the resources available in the ",(0,a.jsx)(n.a,{href:"https://github.com/epam/edp-cluster-add-ons",children:"Cluster Add-Ons"})," repository. This method involves deploying KrakenD alongside the appropriate components, ensuring efficient management and integration into your infrastructure."]}),"\n",(0,a.jsx)(n.h3,{id:"configuration",children:"Configuration"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"KubeRocketCI API Gateway URL Configuration"}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["To configure KrakenD as the API gateway, set the following parameter in the KubeRocketCI ",(0,a.jsx)(n.a,{href:"https://github.com/epam/edp-install/blob/v3.10.3/deploy-templates/values.yaml#L16",children:"values.yaml"})," file during installation or an upgrade:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:'  global:\n    apiGatewayUrl: "https://api.example.com"\n'})}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["This URL should point to the ingress URL of the KrakenD API Gateway. By default, this ",(0,a.jsx)(n.a,{href:"https://github.com/epam/edp-install/blob/v3.10.3/deploy-templates/values.yaml#L16",children:"value"})," is left empty, which disables widgets."]})}),"\n",(0,a.jsxs)(n.ol,{start:"2",children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Create krakenD secret that contains the following data"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["SONARQUBE_URL: Determine the URL of your SonarQube instance. For example: ",(0,a.jsx)(n.code,{children:"http://sonar.sonar:9000"})]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["SONARQUBE_TOKEN: Use ",(0,a.jsx)(n.a,{href:"/docs/next/operator-guide/code-quality/sonarqube#configuration",children:"SonarQube Integration"})," guide for token generation(string in base64) ending with ':'."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'sonarqube_user_token="squ_19f5xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx46b6"\necho -n "${sonarqube_user_token}:" | base64\n'})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["DEPTRACK_URL: Specify the api server URL of your Dependency-Track instance. For example: ",(0,a.jsx)(n.code,{children:"http://dependency-track-api-server.dependency-track:8080"})]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["DEPTRACK_TOKEN: Use the ",(0,a.jsx)(n.a,{href:"/docs/next/operator-guide/devsecops/dependency-track#configuration",children:"Dependency-Track Integration"})," guide to generate the token."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["OPENSEARCH_URL: Determine the URL of your OpenSearch instance. For example: ",(0,a.jsx)(n.code,{children:"https://opensearch-cluster-master.logging:9200"})]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["OPENSEARCH_CREDS: This field should contain the OpenSearch credentials in the format ",(0,a.jsx)(n.code,{children:"admin:<opensearch_admin_password>"}),", encoded in base64. The OpenSearch password can be found in the ",(0,a.jsx)(n.code,{children:"opensearch-admin-creds"})," secret within the ",(0,a.jsx)(n.code,{children:"logging"})," namespace.\nTo encode ",(0,a.jsx)(n.code,{children:"admin:<opensearch_admin_password>"})," into Base64, execute the following command:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'echo -n "admin:MySecurePass123" | base64\n'})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["JWK_URL: Determine the URL for obtaining the JWK. The format is: ",(0,a.jsx)(n.code,{children:"https://keycloak.example.com/auth/realms/<REALM_NAME>/protocol/openid-connect/certs"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(o.A,{defaultValue:"externalsecret",values:[{label:"Manifests",value:"manifests"},{label:"External Secrets Operator",value:"externalsecret"}],children:[(0,a.jsx)(i.A,{value:"manifests",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"apiVersion: v1\nkind: Secret\nmetadata:\n  name: krakend\n  namespace: krakend\ntype: Opaque\nstringData:\n  SONARQUBE_URL: http://sonar.sonar:9000\n  SONARQUBE_TOKEN: <sonarqube-token>\n  DEPTRACK_URL: http://dependency-track-api-server.dependency-track:8080\n  DEPTRACK_TOKEN: <dependency-track-token>\n  OPENSEARCH_URL: https://opensearch-cluster-master.logging:9200\n  OPENSEARCH_CREDS: <base64-encoded-credentials>\n  JWK_URL: https://keycloak.example.com/auth/realms/<sharedService>/protocol/openid-connect/certs\n"})})}),(0,a.jsxs)(i.A,{value:"externalsecret",children:[(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "SONARQUBE_URL": "http://sonar.sonar:9000",\n  "SONARQUBE_TOKEN": "<sonarqube-token>",\n  "DEPTRACK_URL": "http://dependency-track-api-server.dependency-track:8080",\n  "DEPTRACK_TOKEN": "<dependency-track-token>",\n  "OPENSEARCH_URL": "https://opensearch-cluster-master.logging:9200",\n  "OPENSEARCH_CREDS": "<base64-encoded-credentials>",\n  "JWK_URL": "https://keycloak.example.com/auth/realms/<sharedService>/protocol/openid-connect/certs"\n}\n'})}),(0,a.jsxs)(n.p,{children:["More details about External Secrets Operator integration can be found in the ",(0,a.jsx)(n.a,{href:"/docs/next/operator-guide/secrets-management/install-external-secrets-operator",children:"External Secrets Operator"})," page. ",(0,a.jsx)(n.a,{href:"https://github.com/epam/edp-cluster-add-ons",children:"Cluster Add-Ons"})]})]})]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/docs/next/operator-guide/install-kuberocketci",children:"Install KubeRocketCI With Values File"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/docs/next/operator-guide/add-ons-overview",children:"Cluster Add-Ons Overview"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/docs/next/operator-guide/code-quality/sonarqube",children:"SonarQube Integration"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/docs/next/operator-guide/devsecops/dependency-track",children:"DependencyTrack Integrate"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/docs/next/operator-guide/auth/keycloak",children:"Keycloak Integrate"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/docs/next/operator-guide/install-ingress-nginx",children:"Ingress Controller"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>o});t(96540);var r=t(34164);const a={tabItem:"tabItem_Ymn6"};var s=t(74848);function o(e){let{children:n,hidden:t,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,o),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>y});var r=t(96540),a=t(34164),s=t(23104),o=t(56347),i=t(205),l=t(57485),c=t(31682),d=t(70679);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:t}=e;const a=(0,o.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=h(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[c,u]=x({queryString:t,groupId:a}),[g,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,d.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),f=(()=>{const e=c??g;return p({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{f&&l(f)}),[f]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),m(e)}),[u,m,s]),tabValues:s}}var m=t(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(74848);function k(e){let{className:n,block:t,selectedValue:r,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),a=i[t].value;a!==r&&(c(n),o(a))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...s,className:(0,a.A)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:s}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function j(e){const n=g(e);return(0,b.jsxs)("div",{className:(0,a.A)("tabs-container",f.tabList),children:[(0,b.jsx)(k,{...n,...e}),(0,b.jsx)(v,{...n,...e})]})}function y(e){const n=(0,m.A)();return(0,b.jsx)(j,{...e,children:u(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var r=t(96540);const a={},s=r.createContext(a);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);