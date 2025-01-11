"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[8190],{11937:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"developer-guide/aws-reference-architecture","title":"KubeRocketCI Reference Architecture on AWS","description":"The reference architecture of the KubeRocketCI on AWS is designed to provide a robust and scalable CI/CD system for developing and deploying software in a repeatable and automated manner. The architecture leverages AWS Managed Services to enable developers to quickly deploy and manage infrastructure and applications. KubeRocketCI recommends to follow the best practices and patterns from the Well-Architected Framework, the AWS Architecture Center, and EKS Best Practices Guide.","source":"@site/versioned_docs/version-3.9/developer-guide/aws-reference-architecture.md","sourceDirName":"developer-guide","slug":"/developer-guide/aws-reference-architecture","permalink":"/docs/3.9/developer-guide/aws-reference-architecture","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/developer-guide/aws-reference-architecture.md","tags":[],"version":"3.9","lastUpdatedBy":"Sergiy Kulanov","lastUpdatedAt":1730106685000,"frontMatter":{},"sidebar":"developerGuideSidebar","previous":{"title":"Reference CI/CD Pipeline","permalink":"/docs/3.9/developer-guide/reference-cicd-pipeline"},"next":{"title":"KubeRocketCI Deployment on AWS","permalink":"/docs/3.9/developer-guide/aws-deployment-diagram"}}');var i=r(74848),a=r(28453);const s={},o="KubeRocketCI Reference Architecture on AWS",c={},d=[{value:"Architecture Details",id:"architecture-details",level:2},{value:"Infrastructure as Code",id:"infrastructure-as-code",level:2},{value:"Container Registry",id:"container-registry",level:2},{value:"IAM Roles for Service Accounts (IRSA)",id:"iam-roles-for-service-accounts-irsa",level:2},{value:"SSL Certificates",id:"ssl-certificates",level:2},{value:"AWS WAF",id:"aws-waf",level:2},{value:"Parameter Store and Secrets Manager",id:"parameter-store-and-secrets-manager",level:2},{value:"Observability and Monitoring",id:"observability-and-monitoring",level:2},{value:"Summary",id:"summary",level:2}];function l(e){const t={admonition:"admonition",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"kuberocketci-reference-architecture-on-aws",children:"KubeRocketCI Reference Architecture on AWS"})}),"\n",(0,i.jsx)(t.p,{children:"The reference architecture of the KubeRocketCI on AWS is designed to provide a robust and scalable CI/CD system for developing and deploying software in a repeatable and automated manner. The architecture leverages AWS Managed Services to enable developers to quickly deploy and manage infrastructure and applications. KubeRocketCI recommends to follow the best practices and patterns from the Well-Architected Framework, the AWS Architecture Center, and EKS Best Practices Guide."}),"\n",(0,i.jsx)(t.h2,{id:"architecture-details",children:"Architecture Details"}),"\n",(0,i.jsx)(t.p,{children:"The AWS Cloud comprises three accounts: Production, Shared, and Development."}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"AWS Account management is out of scope for this document."})}),"\n",(0,i.jsx)(t.p,{children:"Each account serves specific purposes:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["The ",(0,i.jsx)(t.strong,{children:"Production"})," account is used to host production workloads. The Production account serves as the final destination for deploying business applications. It maintains a separate ECR registry to store Docker images for production-level applications. The environment is designed to be highly resilient and scalable, leveraging the KubeRocketCI's CI/CD pipeline to ensure consistent and automated deployments. With proper access control and separation from development environments, the Production account provides a stable and secure environment for running mission-critical applications."]}),"\n",(0,i.jsxs)(t.li,{children:["The ",(0,i.jsx)(t.strong,{children:"Development"})," account is dedicated to development workload and lower environments. This account hosts the KubeRocketCI itself, running on AWS EKS. It provides developers an isolated environment to build, test, and deploy their applications in lower environments, ensuring separation from production workloads. Developers can connect to the AWS Cloud using a VPN, enforcing secure access."]}),"\n",(0,i.jsxs)(t.li,{children:["The ",(0,i.jsx)(t.strong,{children:"Shared"})," holds shared services that are accessible to all accounts within the organization. These services include SonarQube, Nexus, and Keycloak, which are deployed in Kubernetes Clusters managed by AWS Elastic Kubernetes Service (EKS). The shared services leverage AWS RDS, AWS EFS, and AWS ALB/NLB. The deployment of the shared services is automated using Kubernetes cluster-addons approach with GitOps and Argo CD."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"KubeRocketCI Reference Architecture on AWS",src:r(17042).A+"",width:"6066",height:"4386"})}),"\n",(0,i.jsx)(t.h2,{id:"infrastructure-as-code",children:"Infrastructure as Code"}),"\n",(0,i.jsx)(t.p,{children:"Infrastructure as Code (IaC) is a key principle in the KubeRocketCI architecture. Terraform is the IaC tool to provision and manage all services in each account. AWS S3 and AWS DynamoDB serve as the backend for Terraform state, ensuring consistency and reliability in the deployment process. This approach enables the architecture to be version-controlled and allows for easy replication and reproducibility of environments."}),"\n",(0,i.jsx)(t.h2,{id:"container-registry",children:"Container Registry"}),"\n",(0,i.jsx)(t.p,{children:"The architecture utilizes AWS Elastic Container Registry (ECR) as a Docker Registry for container image management. ECR offers a secure, scalable, and reliable solution for storing and managing container images. It integrates seamlessly with other AWS services and provides a highly available and durable storage solution for containers in the CI/CD pipeline."}),"\n",(0,i.jsx)(t.h2,{id:"iam-roles-for-service-accounts-irsa",children:"IAM Roles for Service Accounts (IRSA)"}),"\n",(0,i.jsx)(t.p,{children:"The KubeRocketCI implements IAM Roles for Service Accounts (IRSA) to provide secure access to AWS services from Kubernetes Clusters. This feature enables fine-grained access control with individual Kubernetes pods assuming specific IAM roles for authenticated access to AWS resources. IRSA eliminates the need for managing and distributing access keys within the cluster, significantly enhancing security and reducing operational complexity."}),"\n",(0,i.jsx)(t.h2,{id:"ssl-certificates",children:"SSL Certificates"}),"\n",(0,i.jsx)(t.p,{children:"The architecture uses the AWS Certificate Manager (ACM) to secure communication between services to provide SSL certificates. ACM eliminates the need to manually manage SSL/TLS certificates, automating the renewal and deployment process. The KubeRocketCI ensures secure and encrypted traffic within its environment by leveraging ACM."}),"\n",(0,i.jsx)(t.h2,{id:"aws-waf",children:"AWS WAF"}),"\n",(0,i.jsx)(t.p,{children:"The architecture's external Application Load Balancer (ALB) endpoint is protected by the AWS Web Application Firewall (WAF). WAF protects against common web exploits and ensures the security and availability of the applications hosted within the KubeRocketCI. It offers regular rule updates and easy integration with other AWS services."}),"\n",(0,i.jsx)(t.h2,{id:"parameter-store-and-secrets-manager",children:"Parameter Store and Secrets Manager"}),"\n",(0,i.jsx)(t.p,{children:"The architecture leverages the AWS Systems Manager Parameter Store and Secrets Manager to securely store and manage all secrets and parameters utilized within the EKS clusters\u2014parameter Store stores general configuration information, such as database connection strings and API keys. In contrast, Secrets Manager securely stores sensitive information, such as passwords and access tokens. By centralizing secrets management, the architecture ensures proper access control and reduces the risk of unauthorized access."}),"\n",(0,i.jsx)(t.h2,{id:"observability-and-monitoring",children:"Observability and Monitoring"}),"\n",(0,i.jsx)(t.p,{children:"For observability and monitoring, the KubeRocketCI leverages a suite of AWS Managed Services designed to provide comprehensive insights into the performance and health of applications and infrastructure:"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"AWS CloudWatch"})," is utilized for monitoring and observability, offering detailed insights into application and infrastructure performance. It enables real-time monitoring of logs, metrics, and events, facilitating proactive issue resolution and performance optimization."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"AWS OpenSearch Service"})," (successor to Amazon Elasticsearch Service) provides powerful search and analytics capabilities. It allows for the analysis of log data and metrics, supporting enhanced application monitoring and user experience optimization."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"AWS Managed Grafana"})," offers a scalable, secure, and fully managed Grafana service, enabling developers to create and share dashboards for visualizing real-time data."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"AWS Prometheus Service"}),", a managed Prometheus-compatible monitoring service, is used for monitoring Kubernetes and container environments. It supports powerful queries and provides detailed insights into container and microservices architectures."]}),"\n",(0,i.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,i.jsx)(t.p,{children:"The reference architecture of the KubeRocketCI on AWS provides a comprehensive and scalable environment for building and deploying software applications. With a strong focus on automation, security, and best practices, this architecture enables developers to leverage the full potential of AWS services while following industry-standard DevOps practices."})]})}function u(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},17042:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/aws-reference-architecture-7f75a5a8e9e2480deba9028880077cca.png"},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>o});var n=r(96540);const i={},a=n.createContext(i);function s(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);