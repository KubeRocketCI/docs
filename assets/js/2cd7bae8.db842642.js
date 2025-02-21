"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[45989],{7747:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"developer-guide/aws-deployment-diagram","title":"KubeRocketCI Deployment on AWS","description":"This document describes the KubeRocketCI deployment architecture on AWS. It utilizes various AWS services such as Amazon Elastic Kubernetes Service (EKS), Amazon EC2, Amazon Route 53, and others to build and deploy software in a repeatable, automated way.","source":"@site/versioned_docs/version-3.10/developer-guide/aws-deployment-diagram.md","sourceDirName":"developer-guide","slug":"/developer-guide/aws-deployment-diagram","permalink":"/docs/developer-guide/aws-deployment-diagram","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/developer-guide/aws-deployment-diagram.md","tags":[],"version":"3.10","lastUpdatedBy":"Sergiy Kulanov","lastUpdatedAt":1737665576000,"frontMatter":{},"sidebar":"developerGuideSidebar","previous":{"title":"KubeRocketCI Reference Architecture on AWS","permalink":"/docs/developer-guide/aws-reference-architecture"},"next":{"title":"AWS Infrastructure Cost Estimation","permalink":"/docs/developer-guide/aws-infrastructure-cost-estimation"}}');var s=i(74848),a=i(28453);const o={},r="KubeRocketCI Deployment on AWS",l={},c=[{value:"Overview",id:"overview",level:2},{value:"Key Components",id:"key-components",level:2},{value:"High Availability and Fault Tolerance",id:"high-availability-and-fault-tolerance",level:2},{value:"Design Considerations",id:"design-considerations",level:2},{value:"Reliability",id:"reliability",level:3},{value:"Performance Efficiency",id:"performance-efficiency",level:3},{value:"Security",id:"security",level:3},{value:"Cost Optimization",id:"cost-optimization",level:3},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const n={em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components},{Head:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"kuberocketci-deployment-on-aws",children:"KubeRocketCI Deployment on AWS"})}),"\n",(0,s.jsx)(t,{children:(0,s.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/developer-guide/aws-deployment-diagram/"})}),"\n",(0,s.jsx)(n.p,{children:"This document describes the KubeRocketCI deployment architecture on AWS. It utilizes various AWS services such as Amazon Elastic Kubernetes Service (EKS), Amazon EC2, Amazon Route 53, and others to build and deploy software in a repeatable, automated way."}),"\n",(0,s.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsxs)(n.p,{children:["The KubeRocketCI deployment architecture consists of two AWS accounts: Shared and Explorer. The ",(0,s.jsx)(n.em,{children:"Shared"})," account hosts shared services, while the ",(0,s.jsx)(n.em,{children:"Explorer"})," account runs the development team workload and KubeRocketCI services. Both accounts have an AWS EKS cluster deployed in multiple Availability Zones (AZs). The EKS cluster runs the KubeRocketCI Services, development team workload, and shared services in the case of the Shared account."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"KubeRocketCI Deployment Diagram on AWS",src:i(918).A+"",width:"5655",height:"3342"})}),"\n",(0,s.jsx)(n.h2,{id:"key-components",children:"Key Components"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"AWS Elastic Kubernetes Service (EKS)"}),": A managed Kubernetes service used to run the KubeRocketCI Services, development team workload, and shared services. EKS provides easy deployment and management of Kubernetes clusters."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Amazon EC2"}),": Instances running within private subnets that serve as nodes for the EKS cluster. Autoscaling Groups are used to deploy these instances, allowing for scalability based on demand."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Amazon Route 53"}),": A DNS web service manages external and internal DNS records for the KubeRocketCI deployment. It enables easy access to resources using user-friendly domain names."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"AWS Application Load Balancer (ALB)"}),": Used for managing ingress traffic into the KubeRocketCI deployment. Depending on requirements, ALBs can be configured as internal or external load balancers."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"AWS WAF"}),": Web Application Firewall service used to protect external ALBs from common web exploits by filtering malicious requests."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"AWS Certificate Manager (ACM)"}),": A service that provisions manages, and deploys SSL/TLS certificates for use with AWS services. ACM is used to manage SSL certificates for secure communication within the KubeRocketCI deployment."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"AWS Elastic Container Registry (ECR)"}),": A fully-managed Docker container registry that stores and manages Docker images. ECR provides a secure and scalable solution for storing container images used in the KubeRocketCI deployment."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"AWS Systems Manager Parameter Store"}),": Used to securely store and manage secrets required by various components of the KubeRocketCI deployment. Parameter Store protects sensitive information such as API keys, database credentials, and other secrets."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"high-availability-and-fault-tolerance",children:"High Availability and Fault Tolerance"}),"\n",(0,s.jsx)(n.p,{children:"The EKS cluster is deployed across multiple AZs to ensure high availability and fault tolerance. This allows for automatic failover in case of an AZ outage or instance failure. Autoscaling Groups automatically adjust the number of EC2 instances based on demand, ensuring scalability while maintaining availability."}),"\n",(0,s.jsx)(n.h2,{id:"design-considerations",children:"Design Considerations"}),"\n",(0,s.jsx)(n.h3,{id:"reliability",children:"Reliability"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Using multiple AZs ensures high availability and fault tolerance for the EKS cluster."}),"\n",(0,s.jsx)(n.li,{children:"Autoscaling Groups enable automatic scaling of EC2 instances based on demand, providing reliability during peak loads."}),"\n",(0,s.jsx)(n.li,{children:"Multiple NAT gateways are deployed in each AZ to ensure reliable outbound internet connectivity."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"performance-efficiency",children:"Performance Efficiency"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Utilizing AWS EKS allows for efficient management of Kubernetes clusters without the need for manual configuration or maintenance."}),"\n",(0,s.jsx)(n.li,{children:"Spot instances can be utilized alongside on-demand instances within the EKS cluster to optimize costs while maintaining performance requirements."}),"\n",(0,s.jsx)(n.li,{children:"Amazon Route 53 enables efficient DNS resolution by managing external and internal DNS records."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"security",children:"Security"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"External ALBs are protected using AWS WAF, which filters out malicious traffic and protects against common web exploits."}),"\n",(0,s.jsx)(n.li,{children:"ACM is used to provision SSL/TLS certificates, ensuring secure communication within the KubeRocketCI deployment."}),"\n",(0,s.jsx)(n.li,{children:"Secrets required by various components are securely stored and managed using the AWS Systems Manager Parameter Store."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"cost-optimization",children:"Cost Optimization"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Utilizing spot and on-demand instances within the EKS cluster can significantly reduce costs while maintaining performance requirements."}),"\n",(0,s.jsx)(n.li,{children:"Autoscaling Groups allow for automatic scaling of EC2 instances based on demand, ensuring optimal resource utilization and cost efficiency."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,s.jsx)(n.p,{children:"The KubeRocketCI deployment architecture on AWS follows best practices and patterns from the Well-Architected Framework. By leveraging AWS services such as EKS, EC2, Route 53, ALB, WAF, ACM, and Parameter Store, the KubeRocketCI provides a robust and scalable CI/CD system that enables developers to deploy and manage infrastructure and applications quickly. The architecture ensures high availability, fault tolerance, reliability, performance efficiency, security, and cost optimization for the KubeRocketCI deployment."})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},918:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/aws-deploymen-diagram-1ad466c8bf3ac36f0ce9bb41f64afb7e.png"},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>r});var t=i(96540);const s={},a=t.createContext(s);function o(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);