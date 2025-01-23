"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[51956],{48445:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"developer-guide/edp-workflow","title":"KubeRocketCI Contribution","description":"This page contains the details on the project rules and working process for KubeRocketCI team and contributors. Explore the main points about working with GitHub, following the main commit flow, as well as the details about commit types and message below.","source":"@site/versioned_docs/version-3.9/developer-guide/edp-workflow.md","sourceDirName":"developer-guide","slug":"/developer-guide/edp-workflow","permalink":"/docs/3.9/developer-guide/edp-workflow","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/developer-guide/edp-workflow.md","tags":[],"version":"3.9","lastUpdatedBy":"Sergiy Kulanov","lastUpdatedAt":1737665242000,"frontMatter":{},"sidebar":"developerGuideSidebar","previous":{"title":"AWS Infrastructure Cost Estimation","permalink":"/docs/3.9/developer-guide/aws-infrastructure-cost-estimation"},"next":{"title":"Operator Development","permalink":"/docs/3.9/developer-guide/local-development"}}');var r=n(74848),i=n(28453),a=n(11470),o=n(19365);const l={},d="KubeRocketCI Contribution",c={},u=[{value:"Project Rules",id:"project-rules",level:2},{value:"Working Process",id:"working-process",level:2},{value:"Commit Flow",id:"commit-flow",level:3},{value:"Related Articles",id:"related-articles",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{Head:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"kuberocketci-contribution",children:"KubeRocketCI Contribution"})}),"\n",(0,r.jsx)(s,{children:(0,r.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/developer-guide/edp-workflow/"})}),"\n",(0,r.jsx)(t.p,{children:"This page contains the details on the project rules and working process for KubeRocketCI team and contributors. Explore the main points about working with GitHub, following the main commit flow, as well as the details about commit types and message below."}),"\n",(0,r.jsx)(t.h2,{id:"project-rules",children:"Project Rules"}),"\n",(0,r.jsx)(t.p,{children:"Before starting the development, please check the project rules:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["It is highly recommended to become familiar with the GitHub flow. For details, please refer to the ",(0,r.jsx)(t.a,{href:"https://docs.github.com/en/get-started/using-github/github-flow",children:"GitHub official documentation"})," and pay attention to the main points:"]}),"\n",(0,r.jsx)(t.p,{children:"a. Creating pull requests in GitHub."}),"\n",(0,r.jsx)(t.p,{children:"b. Resolution of Merge Conflict."}),"\n",(0,r.jsx)(t.p,{children:"c. Comments resolution."}),"\n",(0,r.jsx)(t.p,{children:"d. One GitHub task should have one Pull Request (PR) if it doesn't change multiple operators. If there are many changes within one PR, amend the commit."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Only the Assignee is responsible for the PR merger and Jira task status."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Every PR should be merged in a timely manner."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Log time to Jira ticket."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"working-process",children:"Working Process"}),"\n",(0,r.jsx)(t.p,{children:"With KubeRocketCI, the main workflow is based on the getting a Jira task and creating a Pull Request according to the rules described below."}),"\n",(0,r.jsx)(t.admonition,{title:"Workflow",type:"info",children:(0,r.jsx)(t.p,{children:"Get Jira task \u2192 implement, verify by yourself the results \u2192 create Pull Request (PR) \u2192 send for review \u2192 resolve comments/add changes, ask colleagues for the final review \u2192 track the PR merge \u2192 verify by yourself the results \u2192 change the status in the Jira ticket to CODE COMPLETE or RESOLVED \u2192 share necessary links with a QA specialist in the QA Verification channel \u2192 QA specialist closes the Jira task after his verification \u2192 Jira task should be CLOSED."})}),"\n",(0,r.jsx)(t.h3,{id:"commit-flow",children:"Commit Flow"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Get a task in the Jira/GitHub dashboard. Please be aware of the following points:"}),"\n",(0,r.jsxs)(a.A,{defaultValue:"github",values:[{label:"GitHub",value:"github"},{label:"Jira",value:"jira"}],children:[(0,r.jsxs)(o.A,{value:"jira",children:[(0,r.jsx)(t.p,{children:"a. Every task has a reporter who can provide more details in case something is not clear."}),(0,r.jsx)(t.p,{children:"b. The responsible person for the task and code implementation is the assignee who tracks the following:"}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Actual Jira task status."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Time logging."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Add comments, attach necessary files."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"In comments, add link that refers to the merged PR (optional, if not related to many repositories)."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Code review and the final merge."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"MS Teams chats - ping other colleagues, answer questions, etc."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Verification by a QA specialist."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Bug fixing."}),"\n"]}),"\n"]}),(0,r.jsx)(t.p,{children:"c. Pay attention to the task Status that differs in different entities, the workflow will help to see the whole task processing:"}),(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"View Jira workflow",src:n(4457).A+"",title:"View Jira workflow",width:"887",height:"221"})}),(0,r.jsx)(t.p,{children:"d. There are several entities that are used on the KubeRocketCI project: Story, Improvement, Task, Bug."})]}),(0,r.jsxs)(o.A,{value:"github",children:[(0,r.jsx)(t.p,{children:"a. Every task has a reporter who can provide more details in case something is not clear."}),(0,r.jsx)(t.p,{children:"b. The responsible person for the task and code implementation is the assignee who tracks the following:"}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Actual GitHub task status."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Add comments, attach necessary files."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"In comments, add link that refers to the merged PR (optional, if not related to many repositories)."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Code review and the final merge."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"MS Teams chats - ping other colleagues, answer questions, etc."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Verification by a QA specialist."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Bug fixing."}),"\n"]}),"\n"]}),(0,r.jsx)(t.p,{children:"c. If the task is created on your own, make sure it is populated completely. See an example below:"}),(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"GitHub issue",src:n(75606).A+"",title:"GitHub issue",width:"1260",height:"642"})})]})]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Implement feature, improvement, fix and check the results on your own. If it is impossible to check the results of your work before the merge, verify all later."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"When committing, use the pattern: commit type: Commit message (#GitHub ticket number)."}),"\n",(0,r.jsx)(t.p,{children:"a. commit type:"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"feat"}),": (new feature for the user, not a new feature for build script)"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"fix"}),": (bug fix for the user, not a fix to a build script)"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"docs"}),": (changes to the documentation)"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"style"}),": (formatting, missing semicolons, etc; no production code change)"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"refactor"}),": (refactoring production code, eg. renaming a variable)"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"test"}),": (adding missing tests, refactoring tests; no production code change)"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"chore"}),": (updating grunt tasks etc; no production code change)"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"!"}),": (added to other commit types to mark breaking changes) For example:"]}),"\n",(0,r.jsx)(t.p,{children:"feat!: Add ingress links column into Applications table on stage page (#77)"}),"\n",(0,r.jsx)(t.p,{children:"BREAKING CHANGE: Ingress links column has been added into the Applications table on the stage details page"}),"\n",(0,r.jsx)(t.p,{children:"b. Commit message:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"brief, for example:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"fix: Remove secretKey duplication from registry secrets (#63)"})}),"\n",(0,r.jsx)(t.p,{children:"or"}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"descriptive, for example:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"feat: Provide the ability to configure hadolint check (#88)\n\n* Add configuration files .hadolint.yaml and .hadolint.yml to stash\n"})}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(t.p,{children:"It is mandatory to start a commit message from a capital letter."})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["c. GitHub tickets are typically identified using a number preceded by the ",(0,r.jsx)(t.strong,{children:"#"})," sign and enclosed in parentheses."]}),"\n",(0,r.jsxs)(t.admonition,{type:"note",children:[(0,r.jsx)(t.p,{children:"Make sure there is a descriptive commit message for a breaking change Pull Request. For example:"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"  feat!: Add ingress links column into Applications table on stage page (#77)\n\n  BREAKING CHANGE: Ingress links column has been added into the Applications\n  table on the stage details page\n"})})]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Create a Pull Request, for details, please refer to the ",(0,r.jsx)(t.a,{href:"https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews",children:"Code Review Process"}),":"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"GitHub issue",src:n(75373).A+"",title:"GitHub issue",width:"1919",height:"1112"})}),"\n",(0,r.jsxs)(t.admonition,{type:"caution",children:[(0,r.jsx)(t.p,{children:"If a Pull Request contains both new functionality and breaking changes, make sure the functionality description is placed before the breaking changes. For example:"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"  feat!: Update CRD version to the v1beta1\n\n  * Implement Developers group creation process\n  * Align group permissions\n\n  BREAKING CHANGES: Update CRD version to the v1beta1\n"})})]}),"\n",(0,r.jsx)(t.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://www.conventionalcommits.org/",children:"Conventional Commits"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"http://karma-runner.github.io/1.0/dev/git-commit-msg.html",children:"Karma"})}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>a});n(96540);var s=n(34164);const r={tabItem:"tabItem_Ymn6"};var i=n(74848);function a(e){let{children:t,hidden:n,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,a),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>k});var s=n(96540),r=n(34164),i=n(23104),a=n(56347),o=n(205),l=n(57485),d=n(31682),c=n(70679);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:r}}=e;return{value:t,label:n,attributes:s,default:r}}))}(n);return function(e){const t=(0,d.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,a.W6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(i),(0,s.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})}),[i,r])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,i=h(e),[a,l]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:i}))),[d,u]=f({queryString:n,groupId:r}),[m,v]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,c.Dv)(n);return[r,(0,s.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:r}),j=(()=>{const e=d??m;return p({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{j&&l(j)}),[j]);return{selectedValue:a,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),v(e)}),[u,v,i]),tabValues:i}}var v=n(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(74848);function g(e){let{className:t,block:n,selectedValue:s,selectValue:a,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.a_)(),c=e=>{const t=e.currentTarget,n=l.indexOf(t),r=o[n].value;r!==s&&(d(t),a(r))},u=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>l.push(e),onKeyDown:u,onClick:c,...i,className:(0,r.A)("tabs__item",j.tabItem,i?.className,{"tabs__item--active":s===t}),children:n??t},t)}))})}function x(e){let{lazy:t,children:n,selectedValue:i}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===i));return e?(0,s.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function w(e){const t=m(e);return(0,b.jsxs)("div",{className:(0,r.A)("tabs-container",j.tabList),children:[(0,b.jsx)(g,{...t,...e}),(0,b.jsx)(x,{...t,...e})]})}function k(e){const t=(0,v.A)();return(0,b.jsx)(w,{...e,children:u(e.children)},String(t))}},75606:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/github-task-7bacee9a8fe72f02cf598fff9d348ff5.png"},4457:(e,t,n)=>{n.d(t,{A:()=>s});const s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA3cAAADdCAMAAAAvgnsxAAAC+lBMVEX////s7fBBQUH/gABCUm5rd4w0RWP//9I2s3646v+b1P///+hrpNLnvJvP/////+m4jIwXK03b7fA0aqz/1KrswJD/6rzn//+DvOns7dmHwPDPpIxrjLylamPp//+bd5utaE2t6P/M////zZjs7cNppdml2PDbpXqPzf8XjNFirug0isPLjE0XaLTDimPD7fCPK3XprnX/6LTs2Kxrd6qDd6qHRXqbd4y25P8at9npx7f09fdiK5jt7vGHRWO2Um7//+uuqLAXK5iDd4yR2P80RZAXK3X/2MIaqMyDd5tpRZCb2b9reJtoRWManLBGRUg0RXr/9Nr/7MzhvW6PK02u6//Mt7CQmqr//9nO9P//j3OXUm5GRZT/dFJtSEfz////qpf/VjBkxutCvej/4NiqaXc7RWNiK03Pk0j///dCn9kZm8KDjL1CUq+xbkft7eZknML/yLn/6LJMXHbh//9wsOf/1c9iaLRCUscanLdirbP/uajp1KXVpn7On26Z0/Pp/+nE6thMlNC8w8z/5MfO2ce9t76RnLdGbrKRnLDz06+4jJvjuYlpRXqnhmVXSkiSR0fV5PBkqMyRm8ZqpbSefatpaqvjvqiHRZBJuoo1SG6TZmRISFfz8PXL4PC+3u6S0NL//8/m1c+HwMOuqLmtzLWnvq1KbpuPK5hIXo1mbH//l33DpXpiaHViK3X/gGTg4eeOteDp4tTp/9Hs4sRQisHqvsBkqLe6uKzMpKs6baSJjJzMvZg9XJj/z5TJkm5KTmGw1vOTyvGVv+fN/+Kro9mksNP/887L67+XxLrNublknLWPrrR1krOiUq/P1KqhqJ9oxp6enY24o4mzeGWLWWOMi2JxYWJgUFiSV0em3P/N0f9+tOX//+Fkv9mo0Neu4M8at8zJx8q41Lz/0KY0Y6X/1po0V4etrnWTeHBiaE2yjErDwPDb7cPs2L40ermDjKrJrZ7sxZo0UpoXjJhGS5SHn5DDipA0ipDzu3y3oHzOvW6ZdFh2V02gyOfBAAAYhElEQVR42uydS+gNURzHZyxmoyxokpGdMYupuQtlQexsSOykZEcWopSdR4gsEOUVRSgiC4Q888pjY+OtSClJeYTC0u98555zxmOcGeNy7/T9lDuvM+f85pzzuefM/P3n7w0hhPxrvCEeIeTfQu8IcULvCGkB9I4QJ/SOkBZA7whxQu8IaQH0jhAn9I6QFkDvCHFC7whpAfSOECf0jpAWQO8IcULvCGkBBe8mTfb/nMmTPFAvqz4p0PP8qvTN9evI/1s+uGbS2LtJfjPQCLWy6psCa/a6Prl+4T96Byhec++afkVP9kCNrPqmwJq9rk+u3/f/u3eTPdLUO78pHqieVf8U6Hl9FU6R/vbO9wi9o3f0blCgd/SO3rmhd/SO3g0+9I7e0Ts39I7e0bvBx+Hdzgv7/kq/O378uP8r+qOj0zt65+DferdiQfDqqg9GjQmCYNY4rI+dMM7P0sr9buLrBXLu7jt7fUMoO6Z2/B50dIT6Y2xjp0RVe934GXE3kxHDm4VjrzT1S8lSE17yfbIwLz/BopIvGSpVIv/xYu0eSxaXe4e2jiUgemf4d95BuwDi2bbT3umFW4MllxfsvrN+/dnXC2ZdN42unAsjvybuAkH4dVep0m7vjk7r5L409s5oc264jtwWI6UYu0KYaU2wR0Bl72J43Ng7fPWM2j6c3ln+oXfQTljTzLvLwem8A73bs/ua7YwOmniXRehUJbi82/QowuVe+H2QJ9dvVcnwWRaO7d5l3klxciA7KmUhSUPvcFYz7+zkgOOdg554B+3AU912Zg6yTbpIko6fEciY4NJg+YzTevXUg5fDdVa6ibszo4NTglRynjWuuK6aHsfDEcfUZM1dIBi7q6P6LJJHeQ4oMZSzj6XSvw/NkF2l3k27iJN3bJSFOjtAb96ss0IiRHZ+r6qMuMJ4141crlY+kdlnPftUkY2aP10qVGLWk1IUJ9tqXiALE7FkMOsQhC3zTrLDP50TSo5lj6yoo/nOROLYXOadFT5JdQt1GwJbMb3roXdWu7gw51dfprKdzVLeVRt+VkpaTbJ7lf3yh3ax7FSZTu2MnTILN42FdRxTBYVBLP0mchcIQkSG7jf2jRpXzsC7cGpHMkmlUFVgWu7dakksfThUZaOvRRJAZILpcmpPcH71mODSXkc4GSoQkYeRzUzi0p1bHB+eRbhOfO/EeQopP4Olw3XEcjKqp9Q75RpU1jlhOB17Q/ZI9akdOJjA8FLvktSsmBZCNUq7oA3oXQ+9K2pnByn0F9R9Ve8yjHF67IsK3qFrYQt5Zyl2/LBuh68sdhZoA8VXf6zncdiXyaaOGiWXeddJUvWZl49zkFwHY0dvqZ1L+1zhyHnigIk8i5GZ9Q7lSRkmRDmMFDLI54vhOmJ9Yql3uSPFnLDEHEK7HqIkJHZ7Z1oI1ZhvJTG96513VjvbnbUqtby7XPh+DnGDh6x0w2ILO5IYudt1TMzwELWOd5hZdWevQYrNSJdR0TtJkaTdDm9F0MH4VjzRzhEOkJEWOWHK8KN3ciSLZPP2LozKOJJ7h/ld0TsJyundqPnj9MXqoRsFw8NAMeItriqrMs80LZRXY4IMUnrXM+8Sq91P4x0GkcrefbyyzDzZvP+pY3zTLYyeUuKdHEK6Gt5ZmYtP6dEVY+yo4J2fqBtYM96FcFDF+YtHK27voJae+H4/3oFs266OJLkre+HC+B1mvFPiFb3D7qm/8U7PHkxOdryLsa1bUj7KvLO1nKSmhfJqDFM+V+mpd0sO7LHaWe9Q+3Xu7yDb7hPdtWzBU31fhx4U6buHMu/UsVre2TiTdOwi9RmawS7B/V0V75DML9zfYR3B1P45wpeOGe/wb8pP3oUBru5o7Nv7u+4EU4ovepffo02tMM/UOWGJ+zsp2LiWld/fgSSI9M8RdAvl1ShVQe966d3yHev2GO3McxUhwnTrYD7P9JMqjxdPjgkOPz++5OSHR8H77x4BYO6GRal3SJca79wF6vFAhuTnY1TeeJ7XHWrwPLOKd34W5Ukws9LreTA1vUsw580jT2T1YWwyS+1Py6Cc+kSlG+8kUWS8gyx4nun+ubnJCcsonyh25+15TaQl80w7VceTHt1CeTViMYvPVXrm3cbgvIgX+06qzLOWjH4cKBZAGgeNCnSTxYP+/8TgZBf+P7GB5dfeXQ5EvJt+HX7b7w6sX79266jNCyL/L1K/o2NU+YmB8g4TPw29G1h+7d3OCze3+nVx97sl/l+kZkfHjOuX2g2Md5gmFrWjdwMLfw/IHxjvcuhdG6B39I7euaF39I7eDT70jt7Ru5rwvbV8b63/F+B7a2vC97TzPe1/Ab6nvSb8uyT8uyR/Af5dkprw73ARMojQO0Kc0DtCWgC9I8QJvSOkBdA7QpzQO0JaAL0jxAm9I6QF0DtCnNA7QloAvSPECb0jpAXQO0Kc0DtCWgC9I8QJvSOkBdA7QhrR/D0P/AV+Qhz08L1GfGENIQ568h6/yR4YunjmzJlX7szxfsmtPZG3cO4wjxDyd95bq707svbFvXlXrnmaZ/fXmPWl85bRO0Kaerd2tq8+1xa82zBSxrUnl4xc+7fAOw29I9/YO9OQG8IwDL+y70tCkf0HohBZy5olIvu+kz1r9n3Jmr2kbMkuJAmRCCVkLWtEyQ/+8sNW7uces1iPz1jmHPfVd2bmvDMfmfdc8zzvO2ceIq53+3NBvB659n/hnXuz+YHrtGr15jIlJ/ZH4lml86rVHfflDeLdynsdzz5wQohf8Q7K5ephry+9O9OxCjLObbP6LxhZec2xLQOeFSg2q/9SSEjvnq8uMG52PieE+BXvKB61+9q7M5th1ojXhYI8E8KF3pV1Qohf8w4w2n3lXa0cFWp1NPp63nW6ffdex8C7kSv7dywz2QkhfsU7ircw21fedb5/bMCZzXO3AM6rPCq/Z2ujMN45N3Ll6mpOCPEb7yO8Xb2vF+Y092wbt/E8vNuzePGaPWtn9Q+8e3Yk26z+8k6I33rffNKRAdjs/B5b55xbuXpzPkssXwbeTfzQcbNGeELoe2JCJBp9L1qIn0fPAQmRvsg7IVIi74TIAOSdECmRd0JkAPJOiJTIOyEyAHkn/j+y/0XknRDyToifRN4JkQFQh7+BvBNC3gmRFeSdEGmPvPtl5m/KE2HTfCf+D3pMyhGPST3k3a9D7SLiOfFf0CNHfHok3bvSOY06SSwJnecL2Ji7a9GizSs6EZvi6PcCLoEg2sVmkqdDpeaL25R1oGGDnstaum/R+Uo322+H9VyCTR/+kiPdOzRojf2fwz+9Yox4V7hIQivSUrZ2xs3Au9qHKjg3oYKrripLMSlYpqRzl0vmLpfX+ZSom4jLb47fAXXIXbOCp1vTZlh+E+7CYno3KDi+4re8g3N8fU2tqpnq3U1H2vneVarBf7+8i03pUlwl1rv6+ZuMGjByTo6xvTr1wQLtXepj0amPLfM3meuMRTiKO3FgjvpuUY4cQ1yXwDt60R3y0KhvwwMQ9Ga0pGdfe8fVd7yr3bhiPO94xku0zVuwQEFLPpiEtM9rLe7fwXAXehfGO5e/fNGirSq4SkWLFq1qV7UbRUeXr2LNsjEr8c5Ua5EzZ5mSuevZkoknPSyOfQVt9BHvAxDfO7eI3k2bDPdGvUOTt2PaZM8wvqGY9SFefbMv6l1++1C0Hl2R6jCuNezQYXRFkxBhkC1+OGvAI6ytQwcLfQ2fIgKyrc2JDh06tMRB/r7ug7HbC4H4C2J5x5crWAAnuxS2S7niGPDh5CfPO7hmEY/xrhLUg2oY8lXlpQ2XHw38fp7S6GvnPM/yudz1vKuv751tT/nn3jVyXUyruRAKBN5ZW+Ad1zAR7jXq1CfqHdJMR8N8y6ALFLSt1h0auJ7r7ePCUV33lp3XlcVG02YNPFMbUr4GeB/EO38fN7G74WB+DON4xzONtanHbUtCCq/4F9Kl8g6GFYVz1fnyEk+eXizMPZGasOOR0sCzIO+MehfDuN/o3fL6+a/16nStF4SzJsssv4p3FuoYFevnvzhg+Wfe7a3IPNKsMe9MOLMNxjTcvq5sa3/aZDCMww+OYj5KQ7EPC8tBuR3Zhz+g5/rdLZvu7MarfTzvcLpLjCnpeVdizLwiOQ20x+BPeYf4VgXOMYtgjKN3aMk/rIITWQFpDT0rbP39uXfIQOP3f3zvRg0YCu8gVSTecZQXemet9I4Obv3KO/iC1JDGLOsApkOweTsv7OzWvaU/jEOwg33QEXpRxE/edcDbwDt/H/6g1oNb83fiesfLXcFSLox3SZhqoXdwDq+Id1QsjHe1p1q8Y+CrPFUlrbMGJMMPPwFfxjvnmHrGI753OeZyKiXIM4Nl6N1cL89c7gVC92WeCeG2I5PEiiHKyyyfPHYNH/Mdxdw1mCO6lthkhAzjHVzzvYvsu9yt5/rFdkStanG9K3HKplYKIvPA6eb4zrlEzKu04yKYz6wSxLtwfMfTm3/YiypO/DQnCwXxjq969M5G99jGJAsH/f96fLccgQzejRpg47ku3/aOky5Y2wuNX8yr+GErGN8Z3Y9DseMIWATzJS0d3sOrcHyHtS0g3pfjO+83L9sEaNx5FS4t1BXcUAQJh20g8UjEvEo7LsP5zOGYw6xi60/zmdUcvQO1dDs9KxTk1yWwRj/b3OWtUjbVUsDyyzrX0fUt7IPw773LQecQxyCUdwfhS++gpjVjm4sv7iPwzvhgR+8gHPJM2mMzmtZKuuOtpxznLPHO94439j555+/D2sIjtpjI/rJ3UfsKJukLDLx/lyfE/RDNqmQKv/W+ufszxL9vHt7OSaJ3JLV3vLOnWZXM4Hd+T+wP5UDxvydGkFwg5Ui4d5vcd+GddI3uMoT/4nvRCaZdHj0H9F+i54CESE/knRA/gbwTIu3JngrV8RNC3gmRAfxAE3knRMYi74RIibwTIgOQd0KkRN4JkQGkuXdTDg+c4oRIN1J4VzosW/v141al//n3pA8PAgMj33/+VMivFp6/A9ysoefMsworibF0XOrajn/70XMWawyrVGX96a9kVLhK5Z2Vd4B4P6gF4P4ZA006LhwJnirP3bWVHvuJBYs61CuV0jsemAp59wvesXRYIr2DcYencE3xGO8OVuXpflVT3sX2Ds99ybsYxPWO9W1OsGgpTrmVrGXJh/aoY8vCprPKlLRiHJf+9lP/h826oTMhXujddgiHsPcEKytf27yidRM3WW7l6nBlnVnzjiWKOd5AL+eux1EHvPM/GKxmSw8LsugYih6dRssfHIOE3qG3u4bdan1c1Sv1UQXCscgHvGMVFVtU4keA/4PG1fTwrqCVDC7A02x1VljWqCDlK2BtfOHAf1FtY+iBfv36wTzC84srHHrmKLyrfYR1jSpZl1hjc3SUrMuCd+hQv0QxftwOfAq8T0PEOx6I9xyMsOaV1V1pke/veIfLanXrXl5aWbvRDMv9kNV0UOAK3uGHv4LutxUacVgCau2k8o4VjDy1sOBlMChhS+9C//42tO4AXjMj3rE/qrB0BvMMO9nMK9gpeur8ZwgqtAfjDNPPmYD8FHzDO78AD4/hztTE967KZ2vsquoV42eLJ53t8Es7ooQqfjlt8kzge4ezysaod7w4Fsf7v81MxLqh3mpm4B1OsF+stjpyDXrHk40d8i4r8Q41+zisAAhjyDbZ6ZTsa+9sk2L+Ne+mlo16hzTSYLpZlRWLeKAFu+pVUNgLzQbSofQZ34FovEPjZ/GOXYGmv84B022oJ2DgHTrkJYtmwrNIvDPvFO+ynmeG/Yp3cIrR77vxrvifj3e0hlJFvaOHQeFiDupwCOMdVpVoXyhtpTTIMyPeRcd3Ue/Q0n5Myb9eTZHODezdewI2hobeMXuHd9521ej4Tt5lxTsO5ayvwUaO4qPjO6xc6fZfje987/7g+I69yXFa1DsmmGhfz4ttOL5D0947VQLXag9Pk/Hd594x8cAZDrxjYVPe6aF3f5kJvQHNC7zjZc684wTWHXrnT23Ku6x5h6sspymhH5NN9LO9Mc/4QdjOCbXIfCZWf9Y7wpyRqoXemYnWavsspNXiIfTOVbcGtmAD852tdiU/z/yMhN3FG4pgN3CoyTdhqArWirTiF71LwhfGzDo/6rnvoBgnEslv8K645R7/gDDKTZjw/ZRE4U4kkDR/HkGItETeCZESeSdEBiDvhEiJvBMiA5B3H9k7e54ZojAMa0TI+EomTLIiPhqEgkj8AIlK6T/4ByQa1GrRS5SUQk2EilAqNUo/wXPus8+cEZM9dmawc+a6gp398BbvM9eemWWuFyAL3gEUAN4BZME7gALAO4AseAdQAHgHMJbpvVOkJpZWKtu+uT93sV6qvOXLpsfsctnBXFQjcx/FvsnR1HXd3aoaO97puXL7fAHXd2W9W33S976O1ztuuPBOF6JvU1TUJEd49/w83v0l0hAnH+94756/OF2+d/sev5VbBytZtsk7ve3plVn8ax8a4929W+fwLsNo76Yf7/i+yvdLJ4v3rq7C25Z6fh/UdgvX+jex8Hf1vR4JxyQH/PrXNgJQedw2hCG0UoZYgOz9dt0eil97j54elIi4eOFsLKnEmJTqDs9uW89B9wm1j/ZOkmmmKvWn8WoXsK0P108c1/x6wrXd8WqhnNC7t6dissp7xLZ90TK1uj+X6y1z3q2UqmnXO73p2a1m8PJQ2NIkvvqRiP1WAU6tm3X35o4GU9s9e8a+QijjxBHGp4d6Z+WoWFJRNPiCJTZiw0iNUhK103jnkb403rALqHF14riPtydcm8Y7uXdnrrw4HbzzXpW1U86FncD2gdn0Bcy7zPdfmrl3awkbzUWPyKXOkciqiUOrK/0dKeVlb50m6svVYWbjImQXlevzYl8QzbZ1GxulLHhjP1dRJtVG9aXpjtd3AZupj7cvXJsZ7yjvOknaIJpt6za2a+ex4GW8O7g3ULXe+QMxYOv5THuBsFfJTb3GjkGqOMEDPhh57N7Z6PzpQaiPaUV2Ffs0jrV3D2KjdB7veztKWu9MIs063u3sAhqo5tcbrs2Md4x3avSZa94jdu9iu3YeBzqbvWtlSetdVCytdylspIc/xoVsPSZ/m/T1Ljzl3tmtPz3MOx3Q39N6p4BwWu9QbkLvjv34rAG1460r3zd8fn3h2sx4x3lnR5fftd6F/SCtd3dnoZx7l/v26zvcPb/TQzq/0yPv3DAtfU34s2m9q32xa8/v3DubkT897PxOtt2+kc7v3Ltd6AHPnOSdV8J9vDLJvfPx9oRrO+Od+vxOth1N53fuXdgH5oJ5lwv0qRHs3unIXwYpYWrZ2gdxS+ijlNg33StX9fJmPSOdMrTeKQEenx7unX6yqz7PtHvu3Z7Lsznc2FVa7/QGa06l8fouoJn6eHvCtWm8k3unTK1cU4/YvbMHZ3N+Ie/+A5osFAvj3VHv7LQbyoXx7qh3AAsG7wCy4B1AAeAdQBa8AygAvAPIgncABYB3AFnwDqAA8A4gC94BFADeAWTBO4ACyPcz1XmYgrrvy9CthSWS8W7ftSDL66HXUnlksy80LOjWwiLZ6F1qhY33rr/aTbcWFkm+r+ILXyiQxuhsY3ds+/CR+0d0ab8nSw9WK93GWqkXTI8pbhuvhFyFzd7L/unWwpLY5J1iGa5d8CrUokMf2tO0N/eHNIonbUw31YvC68xBL5hqvUvxzaf93tGthSWR9843pM46VOslYf3wCU+W2i9PmCqO3y26xU9Veo2jWwvL48+OM6VUmyddHXDvFNJok6Vr71QTs+DUr96pL1WHFNlv0K2FpZHv1go5dPjRfvfu9/WuTuvdo+hW1zs3uD/ZR7cWFsZm78I5mv4dwc/vfvXOxLJDRz+/c+/C637zTn2pJ/vDnd6jTbq1sCQy3sUEbRNvzaNfvftwPRw3erLUvfN/a3fvFLfVGljrdb3e0a2FJSHvBiHF/hA5CAD/0jstkQAwiXfIBMD1CAAzAe8AsuAdQAHgHUAWvAMoALwDyIJ3AAWAdwBZ8A6gAPAOIAveARQA3gGMZHrvVs1vQT7h8YdtoVsLMG/v6NbCbJmxd3RrYbbkvdOVduto7cNrIeyg+5W8iyXa1bYC0q2FZfNH3h17o2jmvmuhAu3RWnWMVKLd3ju6tbBs8t6lg0odZ5pwavKp27d9o4huLcCfeeeBMA/Q1nsD6tQOKNHSrQXIeud/dtc7/WQfPTSkREu3FhZP3jupZr/Nu2uV4rV2fufexRLt1ud3dGth2eS822s0dmB581NY717pc80Ys42fq2hja+/o1sKy4f+JAWTBO4AC+Nk+HRMBAANBEPLvOnFw3Rc74AHvYPIOAryDyTsI8A4m7yDAO5i8gwDvYPIOAryDyTsI8A4m7yDgvwOuPSwvkrfLVEHnAAAAAElFTkSuQmCC"},75373:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/merge_request-fbc8b57e9616be62b58081173046e3a5.png"},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var s=n(96540);const r={},i=s.createContext(r);function a(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);