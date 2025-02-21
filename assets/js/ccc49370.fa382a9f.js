"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[83249],{18189:(e,t,n)=>{n.d(t,{A:()=>I});n(96540);var a=n(34164),i=n(83750),s=n(74848);function r(e){let{children:t,className:n}=e;return(0,s.jsx)("article",{className:n,children:t})}var o=n(56289);const l={title:"title_f1Hy"};function c(e){let{className:t}=e;const{metadata:n,isBlogPostPage:r}=(0,i.e7)(),{permalink:c,title:d}=n,m=r?"h1":"h2";return(0,s.jsx)(m,{className:(0,a.A)(l.title,t),children:r?d:(0,s.jsx)(o.A,{to:c,children:d})})}var d=n(50539),m=n(81430),u=n(98569);const h={container:"container_mt6G"};function g(e){let{readingTime:t}=e;const n=function(){const{selectMessage:e}=(0,m.W)();return t=>{const n=Math.ceil(t);return e(n,(0,d.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:n}))}}();return(0,s.jsx)(s.Fragment,{children:n(t)})}function p(e){let{date:t,formattedDate:n}=e;return(0,s.jsx)("time",{dateTime:t,children:n})}function f(){return(0,s.jsx)(s.Fragment,{children:" \xb7 "})}function x(e){let{className:t}=e;const{metadata:n}=(0,i.e7)(),{date:r,readingTime:o}=n,l=(0,u.i)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,s.jsxs)("div",{className:(0,a.A)(h.container,"margin-vert--md",t),children:[(0,s.jsx)(p,{date:r,formattedDate:(c=r,l.format(new Date(c)))}),void 0!==o&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(f,{}),(0,s.jsx)(g,{readingTime:o})]})]});var c}var v=n(95921);const b={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function j(e){let{className:t}=e;const{metadata:{authors:n},assets:r}=(0,i.e7)();if(0===n.length)return null;const o=n.every((e=>{let{name:t}=e;return!t})),l=1===n.length;return(0,s.jsx)("div",{className:(0,a.A)("margin-top--md margin-bottom--sm",o?b.imageOnlyAuthorRow:"row",t),children:n.map(((e,t)=>(0,s.jsx)("div",{className:(0,a.A)(!o&&(l?"col col--12":"col col--6"),o?b.imageOnlyAuthorCol:b.authorCol),children:(0,s.jsx)(v.A,{author:{...e,imageURL:r.authorsImageUrls[t]??e.imageURL}})},t)))})}function A(){return(0,s.jsxs)("header",{children:[(0,s.jsx)(c,{}),(0,s.jsx)(x,{}),(0,s.jsx)(j,{})]})}var L=n(30099),N=n(57409);function y(e){let{children:t,className:n}=e;const{isBlogPostPage:r}=(0,i.e7)();return(0,s.jsx)("div",{id:r?L.LU:void 0,className:(0,a.A)("markdown",n),children:(0,s.jsx)(N.A,{children:t})})}var T=n(204),_=n(5783),C=n(56239);function k(){return(0,s.jsx)("b",{children:(0,s.jsx)(d.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read more"})})}function H(e){const{blogPostTitle:t,...n}=e;return(0,s.jsx)(o.A,{"aria-label":(0,d.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...n,children:(0,s.jsx)(k,{})})}function w(){const{metadata:e,isBlogPostPage:t}=(0,i.e7)(),{tags:n,title:r,editUrl:o,hasTruncateMarker:l,lastUpdatedBy:c,lastUpdatedAt:d}=e,m=!t&&l,u=n.length>0;if(!(u||m||o))return null;if(t){const e=!!(o||d||c);return(0,s.jsxs)("footer",{className:"docusaurus-mt-lg",children:[u&&(0,s.jsx)("div",{className:(0,a.A)("row","margin-top--sm",T.G.blog.blogFooterEditMetaRow),children:(0,s.jsx)("div",{className:"col",children:(0,s.jsx)(C.A,{tags:n})})}),e&&(0,s.jsx)(_.A,{className:(0,a.A)("margin-top--sm",T.G.blog.blogFooterEditMetaRow),editUrl:o,lastUpdatedAt:d,lastUpdatedBy:c})]})}return(0,s.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[u&&(0,s.jsx)("div",{className:(0,a.A)("col",{"col--9":m}),children:(0,s.jsx)(C.A,{tags:n})}),m&&(0,s.jsx)("div",{className:(0,a.A)("col text--right",{"col--3":u}),children:(0,s.jsx)(H,{blogPostTitle:r,to:e.permalink})})]})}function I(e){let{children:t,className:n}=e;const o=function(){const{isBlogPostPage:e}=(0,i.e7)();return e?void 0:"margin-bottom--xl"}();return(0,s.jsxs)(r,{className:(0,a.A)(o,n),children:[(0,s.jsx)(A,{}),(0,s.jsx)(y,{children:t}),(0,s.jsx)(w,{})]})}},40665:(e,t,n)=>{n.d(t,{A:()=>c});n(96540);var a=n(34164),i=n(27289),s=n(204),r=n(52362),o=n(74848);function l(e){let{className:t}=e;return(0,o.jsx)(r.A,{type:"caution",title:(0,o.jsx)(i.Rc,{}),className:(0,a.A)(t,s.G.common.unlistedBanner),children:(0,o.jsx)(i.Uh,{})})}function c(e){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.AE,{}),(0,o.jsx)(l,{...e})]})}},52075:(e,t,n)=>{n.d(t,{A:()=>d});n(96540);var a=n(34164),i=n(27289),s=n(204),r=n(52362),o=n(74848);function l(e){let{className:t}=e;return(0,o.jsx)(r.A,{type:"caution",title:(0,o.jsx)(i.Yh,{}),className:(0,a.A)(t,s.G.common.draftBanner),children:(0,o.jsx)(i.TT,{})})}var c=n(40665);function d(e){let{metadata:t}=e;const{unlisted:n,frontMatter:a}=t;return(0,o.jsxs)(o.Fragment,{children:[(n||a.unlisted)&&(0,o.jsx)(c.A,{}),a.draft&&(0,o.jsx)(l,{})]})}},97959:(e,t,n)=>{n.d(t,{A:()=>c});n(96540);var a=n(34164),i=n(71021);const s={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var r=n(74848);const o="table-of-contents__link toc-highlight",l="table-of-contents__link--active";function c(e){let{className:t,...n}=e;return(0,r.jsx)("div",{className:(0,a.A)(s.tableOfContents,"thin-scrollbar",t),children:(0,r.jsx)(i.A,{...n,linkClassName:o,linkActiveClassName:l})})}},71021:(e,t,n)=>{n.d(t,{A:()=>p});var a=n(96540),i=n(53115);function s(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...i}=e;n>=0?t[n].children.push(i):a.push(i)})),a}function r(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=r({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function o(e){const t=e.getBoundingClientRect();return t.top===t.bottom?o(e.parentNode):t}function l(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>o(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(o(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function c(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:t}}=(0,i.p)();return(0,a.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,a.useRef)(void 0),n=c();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:i,minHeadingLevel:s,maxHeadingLevel:r}=e;function o(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),o=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let i=t;i<=n;i+=1)a.push(`h${i}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:s,maxHeadingLevel:r}),c=l(o,{anchorTopOffset:n.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(i),e.classList.add(i),t.current=e):e.classList.remove(i)}(e,e===d)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,n])}var m=n(56289),u=n(74848);function h(e){let{toc:t,className:n,linkClassName:a,isChild:i}=e;return t.length?(0,u.jsx)("ul",{className:i?void 0:n,children:t.map((e=>(0,u.jsxs)("li",{children:[(0,u.jsx)(m.A,{to:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,u.jsx)(h,{isChild:!0,toc:e.children,className:n,linkClassName:a})]},e.id)))}):null}const g=a.memo(h);function p(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:o="table-of-contents__link",linkActiveClassName:l,minHeadingLevel:c,maxHeadingLevel:m,...h}=e;const p=(0,i.p)(),f=c??p.tableOfContents.minHeadingLevel,x=m??p.tableOfContents.maxHeadingLevel,v=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:i}=e;return(0,a.useMemo)((()=>r({toc:s(t),minHeadingLevel:n,maxHeadingLevel:i})),[t,n,i])}({toc:t,minHeadingLevel:f,maxHeadingLevel:x});return d((0,a.useMemo)((()=>{if(o&&l)return{linkClassName:o,linkActiveClassName:l,minHeadingLevel:f,maxHeadingLevel:x}}),[o,l,f,x])),(0,u.jsx)(g,{toc:v,className:n,linkClassName:o,...h})}},27289:(e,t,n)=>{n.d(t,{AE:()=>l,Rc:()=>r,TT:()=>d,Uh:()=>o,Yh:()=>c});n(96540);var a=n(50539),i=n(27143),s=n(74848);function r(){return(0,s.jsx)(a.A,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function o(){return(0,s.jsx)(a.A,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function l(){return(0,s.jsx)(i.A,{children:(0,s.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function c(){return(0,s.jsx)(a.A,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function d(){return(0,s.jsx)(a.A,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}},62368:(e,t,n)=>{n.r(t),n.d(t,{default:()=>A});n(96540);var a=n(34164),i=n(68207),s=n(204),r=n(83750),o=n(60569),l=n(18189),c=n(50539),d=n(11865),m=n(74848);function u(e){const{nextItem:t,prevItem:n}=e;return(0,m.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,c.T)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[n&&(0,m.jsx)(d.A,{...n,subLabel:(0,m.jsx)(c.A,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer post"})}),t&&(0,m.jsx)(d.A,{...t,subLabel:(0,m.jsx)(c.A,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older post"}),isNext:!0})]})}function h(){const{assets:e,metadata:t}=(0,r.e7)(),{title:n,description:a,date:s,tags:o,authors:l,frontMatter:c}=t,{keywords:d}=c,u=e.image??c.image;return(0,m.jsxs)(i.be,{title:c.title_meta??n,description:a,keywords:d,image:u,children:[(0,m.jsx)("meta",{property:"og:type",content:"article"}),(0,m.jsx)("meta",{property:"article:published_time",content:s}),l.some((e=>e.url))&&(0,m.jsx)("meta",{property:"article:author",content:l.map((e=>e.url)).filter(Boolean).join(",")}),o.length>0&&(0,m.jsx)("meta",{property:"article:tag",content:o.map((e=>e.label)).join(",")})]})}var g=n(27143);function p(){const e=(0,r.J_)();return(0,m.jsx)(g.A,{children:(0,m.jsx)("script",{type:"application/ld+json",children:JSON.stringify(e)})})}var f=n(97959),x=n(52075);function v(e){let{sidebar:t,children:n}=e;const{metadata:a,toc:i}=(0,r.e7)(),{nextItem:s,prevItem:c,frontMatter:d}=a,{hide_table_of_contents:h,toc_min_heading_level:g,toc_max_heading_level:p}=d;return(0,m.jsxs)(o.A,{sidebar:t,toc:!h&&i.length>0?(0,m.jsx)(f.A,{toc:i,minHeadingLevel:g,maxHeadingLevel:p}):void 0,children:[(0,m.jsx)(x.A,{metadata:a}),(0,m.jsx)(l.A,{children:n}),(s||c)&&(0,m.jsx)(u,{nextItem:s,prevItem:c})]})}function b(e){const t=e.content;return(0,m.jsx)(r.in,{content:e.content,isBlogPostPage:!0,children:(0,m.jsxs)(i.e3,{className:(0,a.A)(s.G.wrapper.blogPages,s.G.page.blogPostPage),children:[(0,m.jsx)(h,{}),(0,m.jsx)(p,{}),(0,m.jsx)(v,{sidebar:e.sidebar,children:(0,m.jsx)(t,{})})]})})}var j=n(40797);function A(e){const{siteConfig:t}=(0,j.A)(),n=e.content.metadata,a=[{"@context":"https://schema.org","@type":"BreadcrumbList",name:"Archive breadcrumb",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:t.url},{"@type":"ListItem",position:2,name:"Archive",item:`${t.url}/blog/archive/`},{"@type":"ListItem",position:3,name:n.title}]},...n.tags.map((e=>({"@context":"https://schema.org","@type":"BreadcrumbList",name:`Tags ${e.label} breadcrumb`,itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:t.url},{"@type":"ListItem",position:2,name:"Tags",item:`${t.url}/blog/tags/`},{"@type":"ListItem",position:3,name:e.label,item:`${t.url}${e.permalink}`},{"@type":"ListItem",position:4,name:n.title}]})))];return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(a)}}),(0,m.jsx)(b,{...e})]})}}}]);