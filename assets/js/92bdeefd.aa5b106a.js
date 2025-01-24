"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[50976],{49699:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"operator-guide/deploy-aws-eks","title":"Deploy AWS EKS Cluster","description":"This instruction offers a comprehensive guide on deploying an Amazon Elastic Kubernetes Service (EKS) cluster, ensuring a scalable and secure Kubernetes environment on AWS. For those looking to optimize their EKS cluster configurations, it is highly recommended to consult the AWS EKS Best Practices guide. This resource covers a wide range of topics crucial for the successful deployment and operation of your EKS clusters, including:","source":"@site/versioned_docs/version-3.10/operator-guide/deploy-aws-eks.md","sourceDirName":"operator-guide","slug":"/operator-guide/deploy-aws-eks","permalink":"/docs/operator-guide/deploy-aws-eks","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/operator-guide/deploy-aws-eks.md","tags":[],"version":"3.10","lastUpdatedBy":"Sergiy Kulanov","lastUpdatedAt":1737665576000,"frontMatter":{},"sidebar":"operatorGuideSidebar","previous":{"title":"KubeRocketCI Infrastructure Providers: AWS, Azure, GCP, and On-Premises Overview","permalink":"/docs/operator-guide/infrastructure-providers/overview"},"next":{"title":"Configure AWS WAF With Terraform","permalink":"/docs/operator-guide/infrastructure-providers/aws/waf-tf-configuration"}}');var s=r(74848),a=r(28453);const i={},o="Deploy AWS EKS Cluster",l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Terraform Backend",id:"terraform-backend",level:2},{value:"AWS IAM Roles",id:"aws-iam-roles",level:2},{value:"AWS VPC Configuration (Optional)",id:"aws-vpc-configuration-optional",level:2},{value:"Deploy and Pre-configure AWS EKS",id:"deploy-and-pre-configure-aws-eks",level:2},{value:"Argo CD Configuration (Optional)",id:"argo-cd-configuration-optional",level:2},{value:"Argo CD IAM Role for Shared EKS Cluster",id:"argo-cd-iam-role-for-shared-eks-cluster",level:3},{value:"Argo CD IAM Role for External EKS Cluster",id:"argo-cd-iam-role-for-external-eks-cluster",level:3},{value:"Next Step",id:"next-step",level:2},{value:"Related Articles",id:"related-articles",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components},{Head:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"deploy-aws-eks-cluster",children:"Deploy AWS EKS Cluster"})}),"\n",(0,s.jsx)(r,{children:(0,s.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/operator-guide/deploy-aws-eks/"})}),"\n",(0,s.jsxs)(n.p,{children:["This instruction offers a comprehensive guide on deploying an Amazon Elastic Kubernetes Service (EKS) cluster, ensuring a scalable and secure Kubernetes environment on AWS. For those looking to optimize their EKS cluster configurations, it is highly recommended to consult the ",(0,s.jsx)(n.a,{href:"https://aws.github.io/aws-eks-best-practices/",children:"AWS EKS Best Practices"})," guide. This resource covers a wide range of topics crucial for the successful deployment and operation of your EKS clusters, including:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Security"}),": Best practices for securing your EKS clusters, including IAM roles, network policies, and secrets management."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Networking"}),": Guidance on setting up VPCs, subnets, and load balancers to ensure efficient and secure network traffic."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Monitoring and Logging"}),": Strategies for implementing comprehensive monitoring and logging solutions using AWS CloudWatch and other tools to maintain visibility into cluster performance and operational health."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Performance"}),": Tips for optimizing cluster performance through the proper selection of EC2 instances, efficient load balancing, and autoscaling configurations."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Cost Optimization"}),": Techniques for managing and reducing costs associated with running EKS clusters, including instance selection and resource allocation strategies."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"By adhering to these best practices, developers and system administrators can ensure that their AWS EKS clusters are robust, secure, and cost-effective, facilitating a smooth and efficient CI/CD pipeline for software development."}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["Our approach to deploying the AWS EKS Cluster is based on the widely-used ",(0,s.jsx)(n.a,{href:"https://github.com/terraform-aws-modules/terraform-aws-eks",children:"terraform-aws-eks module"})," from the Terraform AWS Modules community. This module facilitates the creation of AWS Elastic Kubernetes Service (EKS) resources with best practices in mind. We encourage users to review the module's documentation to fully understand its capabilities and how it aligns with the requirements of your specific deployment scenario."]})}),"\n",(0,s.jsx)(n.p,{children:"Before the EKS cluster deployment and configuration, make sure to check the prerequisites. Install the required tools listed below:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://git-scm.com/book/en/v2",children:"Git"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.terraform.io/",children:"Terraform"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html",children:"AWS CLI"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/tfutils/tfenv",children:"tfenv"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"To check the correct tools installation, run the following commands:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"git --version\nterraform version\naws --version\ntfenv --version\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["Before initiating the deployment, it is crucial to consult the ",(0,s.jsx)(n.a,{href:"https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html",children:"AWS Service Limits"})," documentation. Please review and adjust these limits as necessary to ensure your deployment proceeds smoothly without hitting service constraints."]})}),"\n",(0,s.jsx)(n.h2,{id:"terraform-backend",children:"Terraform Backend"}),"\n",(0,s.jsx)(n.p,{children:"This step covers the following topics:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Create S3 bucket with policy to store terraform states"}),"\n",(0,s.jsx)(n.li,{children:"Create DynamoDB to support state locking and consistency checking"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"To create the required resources, follow the steps below:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Fork and clone git repo with project ",(0,s.jsx)(n.a,{href:"https://github.com/KubeRocketCI/terraform-aws-platform",children:"terraform-aws-platform"}),",\nrename it in the correspondence with project name:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/KubeRocketCI/terraform-aws-platform\ncd terraform-aws-platform/s3-backend\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Fill in the input variables for Terraform run in the ",(0,s.jsx)(n.code,{children:"s3-backend/template.tfvars"})," file, refer to the ",(0,s.jsx)(n.a,{href:"https://github.com/KubeRocketCI/terraform-aws-platform/blob/master/s3-backend/example.tfvars",children:"s3-backend/example.tfvars"})," as an example:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tf",metastring:'title="s3-backend/template.tfvars"',children:'region = "eu-central-1"\n\ntags = {\n  "SysName"      = "Terraform-Backend"\n  "SysOwner"     = "owner@example.com"\n  "Environment"  = "EKS-TEST-CLUSTER"\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Find the detailed description of the variables in the ",(0,s.jsx)(n.a,{href:"https://github.com/KubeRocketCI/terraform-aws-platform/blob/master/s3-backend/variables.tf",children:"s3-backend/variables.tf"})," file."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Initialize the backend and apply the changes:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"terraform init\nterraform apply -var-file=./template.tfvars\n"})}),"\n",(0,s.jsx)(n.admonition,{title:'"View: Terraform output example"',type:"note",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'Outputs:\n\nterraform_lock_table_dynamodb_id = "terraform_locks"\nterraform_states_s3_bucket_name = "terraform-states-012345678910"\n'})})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"aws-iam-roles",children:"AWS IAM Roles"}),"\n",(0,s.jsxs)(n.p,{children:["This step covers the ",(0,s.jsx)(n.code,{children:"KRCIDeployerRole"})," AWS IAM role creation. To create the role, take the following steps:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Navigate to the IAM module directory:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd ../iam\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Fill in the input variables for Terraform run in the ",(0,s.jsx)(n.code,{children:"iam/template.tfvars"})," file.\nFind the detailed description of the variables in the ",(0,s.jsx)(n.a,{href:"https://github.com/KubeRocketCI/terraform-aws-platform/blob/master/iam/variables.tf",children:"iam/variables.tf"})," file:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tf",metastring:'title="iam/template.tfvars"',children:'# -- e.g eu-central-1\nregion = "eu-central-1"\n\n# If you need to set role boundary\niam_permissions_boundary_policy_arn = "arn:aws:iam::012345678910:policy/role_boundary"\n\ntags = {\n  "SysName"     = "KubeRocketCI"\n  "Environment" = "core"\n  "Project"     = "my-proj"\n  "ManagedBy"   = "terraform"\n}\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Initialize and apply the changes:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"terraform init\nterraform apply -var-file=./template.tfvars\n"})}),"\n",(0,s.jsx)(n.admonition,{title:'"View: Terraform output example"',type:"note",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'Outputs:\n\ndeployer_iam_role_arn = "arn:aws:iam::012345678910:role/KRCIDeployerRole"\ndeployer_iam_role_name = "KRCIDeployerRole"\n'})})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"aws-vpc-configuration-optional",children:"AWS VPC Configuration (Optional)"}),"\n",(0,s.jsx)(n.p,{children:"This step will cover the following topics:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Create the AWS VPC"}),"\n",(0,s.jsx)(n.li,{children:"Create the AWS VPC Subnets for instances and AWS ALB"}),"\n",(0,s.jsx)(n.li,{children:"Create the AWS VPC Routing"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"To accomplish the tasks outlined above, follow these steps:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Navigate to the VPC module directory:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd ../vpc\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Set up the backend for store Terraform states remotely and support state locking and consistency checking via DynamoDB.\nInsert the missing fields in the file ",(0,s.jsx)(n.code,{children:"vpc/versions.tf"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tf",metastring:'title="vpc/versions.tf"',children:'...\n  backend "s3" {\n    bucket         = "terraform-states-012345678910"\n    key            = "eu-central-1/test/vpc/terraform.tfstate"\n    region         = "eu-central-1"\n    acl            = "bucket-owner-full-control"\n    dynamodb_table = "terraform_locks"\n    encrypt        = true\n  }\n...\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Fill in the input variables for Terraform run in the ",(0,s.jsx)(n.code,{children:"vpc/template.tfvars"})," file. Use the ",(0,s.jsx)(n.a,{href:"https://github.com/KubeRocketCI/terraform-aws-platform/blob/master/vpc/example.tfvars",children:"vpc/example.tfvars"})," as an example.\nPlease find the detailed description of the variables in the ",(0,s.jsx)(n.a,{href:"https://github.com/KubeRocketCI/terraform-aws-platform/blob/master/vpc/variables.tf",children:"vpc/variables.tf"})," file:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tf",metastring:'title="vpc/template.tfvars"',children:'region   = "eu-central-1"\n\nrole_arn = "arn:aws:iam::012345678910:role/KRCIDeployerRole"\n\nplatform_name = "test"\n\nplatform_cidr = "192.168.0.0/20"\n\nsubnet_azs    = ["eu-central-1a", "eu-central-1b", "eu-central-1c"]\n\nprivate_cidrs = ["192.168.0.0/22", "192.168.4.0/22", "192.168.8.0/22"]\n\npublic_cidrs  = ["192.168.12.0/24", "192.168.13.0/24", "192.168.14.0/24"]\n\ntags = {\n  "SysName"      = "Terraform-Backend"\n  "SysOwner"     = "owner@example.com"\n  "Environment"  = "EKS-TEST-CLUSTER"\n}\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Initialize the backend and apply the changes:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"terraform init\nterraform apply -var-file=./template.tfvars\n"})}),"\n",(0,s.jsx)(n.admonition,{title:'"View: Terraform output example"',type:"note",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'Outputs:\n\nprivate_subnets = [\n  "subnet-012345678910",\n  "subnet-012345678910",\n  "subnet-012345678910",\n]\npublic_subnets = [\n  "subnet-012345678910",\n  "subnet-012345678910",\n  "subnet-012345678910",\n]\nvpc_id = "vpc-012345678910"\n'})})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"deploy-and-pre-configure-aws-eks",children:"Deploy and Pre-configure AWS EKS"}),"\n",(0,s.jsx)(n.p,{children:"This step will cover the following topics:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Create the EKS Cluster"}),"\n",(0,s.jsx)(n.li,{children:"Create the AWS ASGs for the EKS Cluster"}),"\n",(0,s.jsx)(n.li,{children:"Create the AWS ALB"}),"\n",(0,s.jsx)(n.li,{children:"(Optional) Create the Kaniko AWS IAM Role"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"To accomplish the tasks outlined above, follow these steps:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Navigate to the EKS module directory:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd ../eks\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Set up the backend for store Terraform states remotely and support state locking and consistency checking via DynamoDB.\nInsert the missing fields in the ",(0,s.jsx)(n.code,{children:"eks/versions.tf"})," file:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tf",metastring:'title="eks/versions.tf"',children:'...\n  backend "s3" {\n    bucket         = "terraform-states-012345678910"\n    key            = "eu-central-1/test/eks/terraform.tfstate"\n    region         = "eu-central-1"\n    acl            = "bucket-owner-full-control"\n    dynamodb_table = "terraform_locks"\n    encrypt        = true\n  }\n...\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Fill in the input variables for Terraform run in the ",(0,s.jsx)(n.code,{children:"eks/template.tfvars"})," file. Use the ",(0,s.jsx)(n.a,{href:"https://github.com/KubeRocketCI/terraform-aws-platform/blob/master/eks/example.tfvars",children:"eks/example.tfvars"})," as an example.\nPlease find the detailed description of the variables in the ",(0,s.jsx)(n.a,{href:"https://github.com/KubeRocketCI/terraform-aws-platform/blob/master/eks/variables.tf",children:"eks/variables.tf"})," file:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tf",metastring:'title="eks/versions.tf"',children:'region               = "eu-central-1"\nplatform_name        = "test"\nplatform_domain_name = "example.com"\n\nrole_arn                      = "arn:aws:iam::012345678910:role/KRCIDeployerRole"\nrole_permissions_boundary_arn = "arn:aws:iam::012345678910:policy/eo_role_boundary"\n\nvpc_id             = "vpc-012345678910"\nprivate_subnets_id = ["subnet-012345678910", "subnet-012345678910", "subnet-012345678910"]\npublic_subnets_id  = ["subnet-012345678910", "subnet-012345678910", "subnet-012345678910"]\n\ntags = {\n  "SysName"      = "Terraform-Backend"\n  "SysOwner"     = "owner@example.com"\n  "Environment"  = "EKS-TEST-CLUSTER"\n}\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"(Optional) Create the Kaniko AWS IAM Role:"}),"\n",(0,s.jsxs)(n.p,{children:["If AWS Elastic Container Registry (ECR) will be used as the ",(0,s.jsx)(n.a,{href:"/docs/user-guide/manage-container-registries",children:"Container Registry"})," in the KubeRocketCI platform, it is necessary to create a specific IAM role for Kaniko."]}),"\n",(0,s.jsxs)(n.p,{children:["To configure the Kaniko AWS IAM Role, set the ",(0,s.jsx)(n.code,{children:"create_kaniko_iam_role"})," variable to ",(0,s.jsx)(n.code,{children:"true"})," in the ",(0,s.jsx)(n.code,{children:"eks/template.tfvars"})," configuration file:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tf",metastring:'title="eks/template.tfvars"',children:"create_kaniko_iam_role = true\n"})}),"\n",(0,s.jsx)(n.p,{children:"The Kaniko AWS IAM Role will be created as part of the EKS cluster provisioning process."}),"\n",(0,s.jsxs)(n.p,{children:["Once the EKS cluster and the Kaniko AWS IAM Role are successfully created, you can use the resulting Amazon Resource Name (ARN) in the ",(0,s.jsx)(n.code,{children:"edp-tekton.kaniko.roleArn"})," field within the ",(0,s.jsx)(n.code,{children:"values.yaml"})," file during the ",(0,s.jsx)(n.a,{href:"/docs/operator-guide/install-kuberocketci",children:"KubeRocketCI installation"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Initialize the backend and apply the changes:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"terraform init\nterraform apply -var-file=./template.tfvars\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Update local Kubernetes configuration."}),"\n",(0,s.jsx)(n.p,{children:"After the EKS cluster is successfully deployed, update the local Kubernetes configuration to interact with the cluster:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"aws eks update-kubeconfig --region <REGION> --name <CLUSTER_NAME>\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Once AWS EKS Cluster is successfully deployed, you can navigate to our ",(0,s.jsx)(n.a,{href:"/docs/operator-guide/add-ons-overview",children:"KubeRocketCI addons"})," to install and manage cluster applications using the GitOps approach."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"argo-cd-configuration-optional",children:"Argo CD Configuration (Optional)"}),"\n",(0,s.jsx)(n.p,{children:"This section covers configuring Argo CD for further integrating with an external EKS cluster. This integration necessitates creating two AWS IAM roles:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"AWSIRSA_Test_ArgoCDMaster"})," AWS IAM role - for setting up IRSA annotations for the Argo CD application;"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"EDPArgoCDClusterAdmin"})," AWS IAM role - for working with external EKS clusters and further adding them (please refer to the ",(0,s.jsx)(n.a,{href:"/docs/user-guide/add-cluster",children:"Add Cluster"})," page for details)."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"argo-cd-iam-role-for-shared-eks-cluster",children:"Argo CD IAM Role for Shared EKS Cluster"}),"\n",(0,s.jsxs)(n.p,{children:["This step covers the ",(0,s.jsx)(n.code,{children:"AWSIRSA_Test_ArgoCDMaster"})," AWS IAM role creation procedure. To create the role, take the following steps:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Navigate to the Argo CD module directory:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd ../argo-cd\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Set up the backend for store Terraform states remotely and support state locking and consistency checking via DynamoDB.\nInsert the missing fields in the ",(0,s.jsx)(n.code,{children:"argo-cd/versions.tf"})," file:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tf",metastring:'title="argo-cd/versions.tf"',children:'...\n  backend "s3" {\n    bucket         = "terraform-states-012345678910"\n    key            = "eu-central-1/test/argo-cd/terraform.tfstate"\n    region         = "eu-central-1"\n    acl            = "bucket-owner-full-control"\n    dynamodb_table = "terraform_locks"\n    encrypt        = true\n  }\n...\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Fill in the input variables for Terraform run in the ",(0,s.jsx)(n.code,{children:"argo-cd/template.tfvars"})," file. Refer to the ",(0,s.jsx)(n.a,{href:"https://github.com/KubeRocketCI/terraform-aws-platform/blob/master/argo-cd/example.tfvars",children:"argo-cd/example.tfvars"})," as an example.\nPlease find the detailed description of the variables in the ",(0,s.jsx)(n.a,{href:"https://github.com/KubeRocketCI/terraform-aws-platform/blob/master/argo-cd/variables.tf",children:"argo-cd/variables.tf"})," file:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tf",metastring:'title="argo-cd/template.tfvars"',children:'argocd_master_enabled = true\nargocd_master_role_name_list = [\n  "arn:aws:iam::012345678910:role/EDPArgoCDClusterAdmin",\n]\noidc_provider_arn = "arn:aws:iam::012345678910:oidc-provider/oidc.eks.eu-central-1.amazonaws.com/id/9876543210"\n\nplatform_name                 = "test"\nregion                        = "eu-central-1"\nrole_arn                      = "arn:aws:iam::012345678910:role/KRCIDeployerRole"\nrole_permissions_boundary_arn = "arn:aws:iam::012345678910:policy/eo_role_boundary"\ntags = {\n  "SysName"      = "Terraform-Backend"\n  "SysOwner"     = "owner@example.com"\n  "Environment"  = "EKS-TEST-CLUSTER"\n}\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Initialize the backend and apply the changes:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"terraform init\nterraform apply\n"})}),"\n",(0,s.jsx)(n.admonition,{title:'"View: Terraform output example"',type:"note",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'Outputs:\n\nargocd_agent_role_iam_role_arn = ""\nargocd_irsa_iam_role_arn = "arn:aws:iam::012345678910:role/AWSIRSA_Test_ArgoCDMaster"\n'})})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Once ",(0,s.jsx)(n.code,{children:"AWSIRSA_Test_ArgoCDMaster"})," AWS IAM Role is successfully created, navigate to the ",(0,s.jsx)(n.a,{href:"/docs/operator-guide/add-ons-overview",children:"Cluster addons"})," to set up IRSA annotations for the Argo CD application:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:'title="add-ons/argo-cd/values.yaml"',children:'argo-cd:\n  controller:\n    serviceAccount:\n      annotations:\n        eks.amazonaws.com/role-arn: "arn:aws:iam::012345678910:role/AWSIRSA_Test_ArgoCDMaster"\n\n  server:\n    serviceAccount:\n      annotations:\n        eks.amazonaws.com/role-arn: "arn:aws:iam::012345678910:role/AWSIRSA_Test_ArgoCDMaster"\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"argo-cd-iam-role-for-external-eks-cluster",children:"Argo CD IAM Role for External EKS Cluster"}),"\n",(0,s.jsxs)(n.p,{children:["This step covers the ",(0,s.jsx)(n.code,{children:"EDPArgoCDClusterAdmin"})," AWS IAM role creation procedure. To create the role, take the following steps:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Navigate to the Argo CD module directory:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd ../argo-cd\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Set up the backend for store Terraform states remotely and support state locking and consistency checking via DynamoDB.\nInsert the missing fields in the ",(0,s.jsx)(n.code,{children:"argo-cd/versions.tf"})," file:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tf",metastring:'title="argo-cd/versions.tf"',children:'...\n  backend "s3" {\n    bucket         = "terraform-states-012345678910"\n    key            = "eu-central-1/test/argo-cd/terraform.tfstate"\n    region         = "eu-central-1"\n    acl            = "bucket-owner-full-control"\n    dynamodb_table = "terraform_locks"\n    encrypt        = true\n  }\n...\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Fill in the input variables for Terraform run in the ",(0,s.jsx)(n.code,{children:"argo-cd/template.tfvars"})," file. Refer to the ",(0,s.jsx)(n.a,{href:"https://github.com/KubeRocketCI/terraform-aws-platform/blob/master/argo-cd/example.tfvars",children:"argo-cd/example.tfvars"})," as an example.\nPlease find the detailed description of the variables in the ",(0,s.jsx)(n.a,{href:"https://github.com/KubeRocketCI/terraform-aws-platform/blob/master/argo-cd/variables.tf",children:"argo-cd/variables.tf"})," file:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tf",metastring:'title="argo-cd/template.tfvars"',children:'\nargocd_agent_enabled                = true\nargocd_agent_argocd_master_role_arn = "arn:aws:iam::012345678910:role/AWSIRSA_Test_ArgoCDMaster"\n\nplatform_name                 = "test"\nregion                        = "eu-central-1"\nrole_arn                      = "arn:aws:iam::012345678910:role/KRCIDeployerRole"\nrole_permissions_boundary_arn = "arn:aws:iam::012345678910:policy/eo_role_boundary"\ntags = {\n  "SysName"      = "Terraform-Backend"\n  "SysOwner"     = "owner@example.com"\n  "Environment"  = "EKS-TEST-CLUSTER"\n}\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Initialize the backend and apply the changes:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"terraform init\nterraform apply\n"})}),"\n",(0,s.jsx)(n.admonition,{title:'"View: Terraform output example"',type:"note",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'\nOutputs:\n\nargocd_agent_role_iam_role_arn = "arn:aws:iam::012345678910:role/EDPArgoCDClusterAdmin"\nargocd_irsa_iam_role_arn = ""\n'})})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"next-step",children:"Next Step"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Install ",(0,s.jsx)(n.a,{href:"/docs/operator-guide/install-argocd",children:"Argo CD"})," and integrate it with ",(0,s.jsx)(n.a,{href:"https://github.com/epam/edp-cluster-add-ons",children:"edp-cluster-add-ons"})," components"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/operator-guide/add-ons-overview",children:"Cluster Add-Ons Overview"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/operator-guide/install-kuberocketci",children:"Install KubeRocketCI"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>o});var t=r(96540);const s={},a=t.createContext(s);function i(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);