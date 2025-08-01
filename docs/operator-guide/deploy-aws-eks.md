---

title: "Deploy AWS EKS Cluster"
description: "Comprehensive guide on deploying an Amazon Elastic Kubernetes Service (EKS) cluster, highlighting best practices for security, networking, and cost optimization."
sidebar_label: "Deploy AWS EKS Cluster"

---
<!-- markdownlint-disable MD025 -->

# Deploy AWS EKS Cluster

<head>
  <link rel="canonical" href="https://docs.kuberocketci.io/docs/operator-guide/deploy-aws-eks" />
</head>

This instruction offers a comprehensive guide on deploying an Amazon Elastic Kubernetes Service (EKS) cluster, ensuring a scalable and secure Kubernetes environment on AWS. For those looking to optimize their EKS cluster configurations, it is highly recommended to consult the [AWS EKS Best Practices](https://aws.github.io/aws-eks-best-practices/) guide. This resource covers a wide range of topics crucial for the successful deployment and operation of your EKS clusters, including:

* **Security**: Best practices for securing your EKS clusters, including IAM roles, network policies, and secrets management.
* **Networking**: Guidance on setting up VPCs, subnets, and load balancers to ensure efficient and secure network traffic.
* **Monitoring and Logging**: Strategies for implementing comprehensive monitoring and logging solutions using AWS CloudWatch and other tools to maintain visibility into cluster performance and operational health.
* **Performance**: Tips for optimizing cluster performance through the proper selection of EC2 instances, efficient load balancing, and autoscaling configurations.
* **Cost Optimization**: Techniques for managing and reducing costs associated with running EKS clusters, including instance selection and resource allocation strategies.

By adhering to these best practices, developers and system administrators can ensure that their AWS EKS clusters are robust, secure, and cost-effective, facilitating a smooth and efficient CI/CD pipeline for software development.

## Prerequisites

:::note
  Our approach to deploying the AWS EKS Cluster is based on the widely-used [terraform-aws-eks module](https://github.com/terraform-aws-modules/terraform-aws-eks) from the Terraform AWS Modules community. This module facilitates the creation of AWS Elastic Kubernetes Service (EKS) resources with best practices in mind. We encourage users to review the module's documentation to fully understand its capabilities and how it aligns with the requirements of your specific deployment scenario.
:::

Before the EKS cluster deployment and configuration, make sure to check the prerequisites. Install the required tools listed below:

* [Git](https://git-scm.com/book/en/v2)
* [Terraform](https://www.terraform.io/)
* [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html)
* [tfenv](https://github.com/tfutils/tfenv)

To check the correct tools installation, run the following commands:

```bash
git --version
terraform version
aws --version
tfenv --version
```

:::note
  Before initiating the deployment, it is crucial to consult the [AWS Service Limits](https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html) documentation. Please review and adjust these limits as necessary to ensure your deployment proceeds smoothly without hitting service constraints.
:::

## Terraform Backend

This step covers the following topics:

* Create S3 bucket with policy to store terraform states
* Create DynamoDB to support state locking and consistency checking

To create the required resources, follow the steps below:

1. Fork and clone git repo with project [terraform-aws-platform](https://github.com/KubeRocketCI/terraform-aws-platform),
rename it in the correspondence with project name:

    ```bash
    git clone https://github.com/KubeRocketCI/terraform-aws-platform
    cd terraform-aws-platform/s3-backend
    ```

2. Fill in the input variables for Terraform run in the `s3-backend/template.tfvars` file, refer to the [s3-backend/example.tfvars](https://github.com/KubeRocketCI/terraform-aws-platform/blob/master/s3-backend/example.tfvars) as an example:

    ```tf title="s3-backend/template.tfvars"
    region = "eu-central-1"

    tags = {
      "SysName"      = "Terraform-Backend"
      "SysOwner"     = "owner@example.com"
      "Environment"  = "EKS-TEST-CLUSTER"
    }
    ```

    Find the detailed description of the variables in the [s3-backend/variables.tf](https://github.com/KubeRocketCI/terraform-aws-platform/blob/master/s3-backend/variables.tf) file.

3. Initialize the backend and apply the changes:

    ```bash
    terraform init
    terraform apply -var-file=./template.tfvars
    ```

    :::note "View: Terraform output example"

      ```bash
      Outputs:

      terraform_lock_table_dynamodb_id = "terraform_locks"
      terraform_states_s3_bucket_name = "terraform-states-012345678910"
      ```

    :::

## AWS IAM Roles

This step covers the `KRCIDeployerRole` AWS IAM role creation procedure. To create the role, follow the steps below:

1. Navigate to the IAM module directory:

    ```bash
    cd ../iam
    ```

2. Fill in the input variables for Terraform run in the `iam/template.tfvars` file.
Find the detailed description of the variables in the [iam/variables.tf](https://github.com/KubeRocketCI/terraform-aws-platform/blob/master/iam/variables.tf) file:

    ```tf title="iam/template.tfvars"
    # -- e.g eu-central-1
    region = "eu-central-1"

    # If you need to set role boundary
    iam_permissions_boundary_policy_arn = "arn:aws:iam::012345678910:policy/role_boundary"

    tags = {
      "SysName"     = "KubeRocketCI"
      "Environment" = "core"
      "Project"     = "my-proj"
      "ManagedBy"   = "terraform"
    }
    ```

3. Initialize and apply the changes:

    ```bash
    terraform init
    terraform apply -var-file=./template.tfvars
    ```

    :::note "View: Terraform output example"

      ```bash
      Outputs:

      deployer_iam_role_arn  = "arn:aws:iam::012345678910:role/KRCIDeployerRole"
      deployer_iam_role_name = "KRCIDeployerRole"
      ```

    :::

## AWS VPC Configuration (Optional)

This step will cover the following topics:

* Create the AWS VPC
* Create the AWS VPC Subnets for instances and AWS ALB
* Create the AWS VPC Routing

To accomplish the tasks outlined above, follow these steps:

1. Navigate to the VPC module directory:

    ```bash
    cd ../vpc
    ```

2. Set up the backend for store Terraform states remotely and support state locking and consistency checking via DynamoDB.
Insert the missing fields in the file `vpc/versions.tf`:

    ```tf title="vpc/versions.tf"
    ...
      backend "s3" {
        bucket         = "terraform-states-012345678910"
        key            = "eu-central-1/test/vpc/terraform.tfstate"
        region         = "eu-central-1"
        acl            = "bucket-owner-full-control"
        dynamodb_table = "terraform_locks"
        encrypt        = true
        role_arn       = "arn:aws:iam::<AWS_ACCOUNT_ID>:role/KRCIDeployerRole"
      }
    ...
    ```

3. Fill in the input variables for Terraform run in the `vpc/template.tfvars` file. Use the [vpc/example.tfvars](https://github.com/KubeRocketCI/terraform-aws-platform/blob/master/vpc/example.tfvars) as an example.
Please find the detailed description of the variables in the [vpc/variables.tf](https://github.com/KubeRocketCI/terraform-aws-platform/blob/master/vpc/variables.tf) file:

    ```tf title="vpc/template.tfvars"
    region   = "eu-central-1"

    role_arn = "arn:aws:iam::012345678910:role/KRCIDeployerRole"

    platform_name = "test"

    platform_cidr = "192.168.0.0/20"

    subnet_azs    = ["eu-central-1a", "eu-central-1b", "eu-central-1c"]

    private_cidrs = ["192.168.0.0/22", "192.168.4.0/22", "192.168.8.0/22"]

    public_cidrs  = ["192.168.12.0/24", "192.168.13.0/24", "192.168.14.0/24"]

    tags = {
      "SysName"      = "Terraform-Backend"
      "SysOwner"     = "owner@example.com"
      "Environment"  = "EKS-TEST-CLUSTER"
    }
    ```

4. Initialize the backend and apply the changes:

    ```bash
    terraform init
    terraform apply -var-file=./template.tfvars
    ```

    :::note "View: Terraform output example"

      ```bash
      Outputs:

      private_subnets = [
        "subnet-012345678910",
        "subnet-012345678910",
        "subnet-012345678910",
      ]
      public_subnets = [
        "subnet-012345678910",
        "subnet-012345678910",
        "subnet-012345678910",
      ]
      vpc_id = "vpc-012345678910"
      ```

    :::

## Deploy and Pre-configure AWS EKS

This step will cover the following topics:

* Create the EKS Cluster
* Create the AWS ASGs for the EKS Cluster
* Create the AWS ALB
* (Optional) Create the Kaniko AWS IAM Role
* (Optional) Create the Atlantis AWS IAM Role

To accomplish the tasks outlined above, follow these steps:

1. Navigate to the EKS module directory:

    ```bash
    cd ../eks
    ```

2. Set up the backend for store Terraform states remotely and support state locking and consistency checking via DynamoDB.
Insert the missing fields in the `eks/versions.tf` file:

    ```tf title="eks/versions.tf"
    ...
      backend "s3" {
        bucket         = "terraform-states-012345678910"
        key            = "eu-central-1/test/eks/terraform.tfstate"
        region         = "eu-central-1"
        acl            = "bucket-owner-full-control"
        dynamodb_table = "terraform_locks"
        encrypt        = true
        role_arn       = "arn:aws:iam::<AWS_ACCOUNT_ID>:role/KRCIDeployerRole"
      }
    ...
    ```

3. Fill in the input variables for Terraform run in the `eks/template.tfvars` file. Use the [eks/example.tfvars](https://github.com/KubeRocketCI/terraform-aws-platform/blob/master/eks/example.tfvars) as an example.
Please find the detailed description of the variables in the [eks/variables.tf](https://github.com/KubeRocketCI/terraform-aws-platform/blob/master/eks/variables.tf) file:

    ```tf title="eks/versions.tf"
    region               = "eu-central-1"
    platform_name        = "test"
    platform_domain_name = "example.com"

    role_arn                      = "arn:aws:iam::012345678910:role/KRCIDeployerRole"
    role_permissions_boundary_arn = "arn:aws:iam::012345678910:policy/eo_role_boundary"

    vpc_id             = "vpc-012345678910"
    private_subnets_id = ["subnet-012345678910", "subnet-012345678910", "subnet-012345678910"]
    public_subnets_id  = ["subnet-012345678910", "subnet-012345678910", "subnet-012345678910"]

    tags = {
      "SysName"      = "Terraform-Backend"
      "SysOwner"     = "owner@example.com"
      "Environment"  = "EKS-TEST-CLUSTER"
    }
    ```

4. (Optional) Create the Kaniko AWS IAM Role:

    If AWS Elastic Container Registry (ECR) will be used as the [Container Registry](../user-guide/manage-container-registries.md) in the KubeRocketCI platform, it is necessary to create a specific IAM role for Kaniko.

    To configure the Kaniko AWS IAM Role, set the `create_kaniko_iam_role` variable to `true` in the `eks/template.tfvars` configuration file:

    ```tf title="eks/template.tfvars"
    create_kaniko_iam_role = true
    ```

    The Kaniko AWS IAM Role will be created as part of the EKS cluster provisioning process.

    Once the EKS cluster and the Kaniko AWS IAM Role are successfully created, you can use the resulting Amazon Resource Name (ARN) in the `edp-tekton.kaniko.roleArn` field within the `values.yaml` file during the [KubeRocketCI installation](install-kuberocketci.md).

5. (Optional) Create the Atlantis AWS IAM Role:

    If Atlantis will be used for automating Terraform workflows in Kubernetes environments, it is necessary to create a specific IAM role for Atlantis.

    To create the Atlantis AWS IAM Role, set the `create_atlantis_iam_role` variable to `true` in the `eks/template.tfvars` configuration file:

    ```tf title="eks/template.tfvars"
    create_atlantis_iam_role = true
    ```

    The Atlantis AWS IAM Role will be created as part of the EKS cluster provisioning process.

    Once the EKS cluster and the Atlantis AWS IAM Role are successfully created, you can proceed with the [Atlantis installation](./infrastructure-providers/atlantis-installation.md) and use the resulting Amazon Resource Name (ARN) in the `atlantis.serviceAccount.annotations` field within the `values.yaml` file for the Atlantis Helm chart.

6. Initialize the backend and apply the changes:

    ```bash
    terraform init
    terraform apply -var-file=./template.tfvars
    ```

7. Update local Kubernetes configuration.

    After the EKS cluster is successfully deployed, update the local Kubernetes configuration to interact with the cluster:

    ```bash
    aws eks update-kubeconfig --region <REGION> --name <CLUSTER_NAME>
    ```

8. Once AWS EKS Cluster is successfully deployed, you can navigate to our [KubeRocketCI addons](add-ons-overview.md) to install and manage cluster applications using the GitOps approach.

## Argo CD Configuration (Optional)

This section covers configuring Argo CD for further integrating with an external EKS cluster. This integration necessitates creating two AWS IAM roles:

* `AWSIRSA_Test_ArgoCDMaster` AWS IAM role - for setting up IRSA annotations for the Argo CD application;
* `EDPArgoCDClusterAdmin` AWS IAM role - for working with external EKS clusters and further adding them (please refer to the [Add Cluster](../user-guide/add-cluster.md) page for details).

### Argo CD IAM Role for Shared EKS Cluster

This step covers the `AWSIRSA_Test_ArgoCDMaster` AWS IAM role creation procedure. To create the role, take the following steps:

1. Navigate to the Argo CD module directory:

    ```bash
    cd ../argo-cd
    ```

2. Set up the backend for store Terraform states remotely and support state locking and consistency checking via DynamoDB.
Insert the missing fields in the `argo-cd/versions.tf` file:

    ```tf title="argo-cd/versions.tf"
    ...
      backend "s3" {
        bucket         = "terraform-states-012345678910"
        key            = "eu-central-1/test/argo-cd/terraform.tfstate"
        region         = "eu-central-1"
        acl            = "bucket-owner-full-control"
        dynamodb_table = "terraform_locks"
        encrypt        = true
        role_arn       = "arn:aws:iam::<AWS_ACCOUNT_ID>:role/KRCIDeployerRole"
      }
    ...
    ```

3. Fill in the input variables for Terraform run in the `argo-cd/template.tfvars` file. Refer to the [argo-cd/example.tfvars](https://github.com/KubeRocketCI/terraform-aws-platform/blob/master/argo-cd/example.tfvars) as an example.
Please find the detailed description of the variables in the [argo-cd/variables.tf](https://github.com/KubeRocketCI/terraform-aws-platform/blob/master/argo-cd/variables.tf) file:

    ```tf title="argo-cd/template.tfvars"
    argocd_master_enabled = true
    argocd_master_role_name_list = [
      "arn:aws:iam::012345678910:role/EDPArgoCDClusterAdmin",
    ]
    oidc_provider_arn = "arn:aws:iam::012345678910:oidc-provider/oidc.eks.eu-central-1.amazonaws.com/id/9876543210"

    platform_name                 = "test"
    region                        = "eu-central-1"
    role_arn                      = "arn:aws:iam::012345678910:role/KRCIDeployerRole"
    role_permissions_boundary_arn = "arn:aws:iam::012345678910:policy/eo_role_boundary"
    tags = {
      "SysName"      = "Terraform-Backend"
      "SysOwner"     = "owner@example.com"
      "Environment"  = "EKS-TEST-CLUSTER"
    }
    ```

4. Initialize the backend and apply the changes:

    ```bash
    terraform init
    terraform apply
    ```

    :::note "View: Terraform output example"

      ```bash
      Outputs:

      argocd_agent_role_iam_role_arn = ""
      argocd_irsa_iam_role_arn = "arn:aws:iam::012345678910:role/AWSIRSA_Test_ArgoCDMaster"
      ```

    :::

5. Once `AWSIRSA_Test_ArgoCDMaster` AWS IAM Role is successfully created, navigate to the [Cluster addons](add-ons-overview.md) to set up IRSA annotations for the Argo CD application:

    ```yaml title="add-ons/argo-cd/values.yaml"
    argo-cd:
      controller:
        serviceAccount:
          annotations:
            eks.amazonaws.com/role-arn: "arn:aws:iam::012345678910:role/AWSIRSA_Test_ArgoCDMaster"

      server:
        serviceAccount:
          annotations:
            eks.amazonaws.com/role-arn: "arn:aws:iam::012345678910:role/AWSIRSA_Test_ArgoCDMaster"
    ```

### Argo CD IAM Role for External EKS Cluster

This step covers the `EDPArgoCDClusterAdmin` AWS IAM role creation procedure. To create the role, take the following steps:

1. Navigate to the Argo CD module directory:

    ```bash
    cd ../argo-cd
    ```

2. Set up the backend for store Terraform states remotely and support state locking and consistency checking via DynamoDB.
Insert the missing fields in the `argo-cd/versions.tf` file:

    ```tf title="argo-cd/versions.tf"
    ...
      backend "s3" {
        bucket         = "terraform-states-012345678910"
        key            = "eu-central-1/test/argo-cd/terraform.tfstate"
        region         = "eu-central-1"
        acl            = "bucket-owner-full-control"
        dynamodb_table = "terraform_locks"
        encrypt        = true
        role_arn       = "arn:aws:iam::<AWS_ACCOUNT_ID>:role/KRCIDeployerRole"
      }
    ...
    ```

3. Fill in the input variables for Terraform run in the `argo-cd/template.tfvars` file. Refer to the [argo-cd/example.tfvars](https://github.com/KubeRocketCI/terraform-aws-platform/blob/master/argo-cd/example.tfvars) as an example.
Please find the detailed description of the variables in the [argo-cd/variables.tf](https://github.com/KubeRocketCI/terraform-aws-platform/blob/master/argo-cd/variables.tf) file:

    ```tf title="argo-cd/template.tfvars"

    argocd_agent_enabled                = true
    argocd_agent_argocd_master_role_arn = "arn:aws:iam::012345678910:role/AWSIRSA_Test_ArgoCDMaster"

    platform_name                 = "test"
    region                        = "eu-central-1"
    role_arn                      = "arn:aws:iam::012345678910:role/KRCIDeployerRole"
    role_permissions_boundary_arn = "arn:aws:iam::012345678910:policy/eo_role_boundary"
    tags = {
      "SysName"      = "Terraform-Backend"
      "SysOwner"     = "owner@example.com"
      "Environment"  = "EKS-TEST-CLUSTER"
    }
    ```

4. Initialize the backend and apply the changes:

    ```bash
    terraform init
    terraform apply
    ```

    :::note "View: Terraform output example"

      ```bash

      Outputs:

      argocd_agent_role_iam_role_arn = "arn:aws:iam::012345678910:role/EDPArgoCDClusterAdmin"
      argocd_irsa_iam_role_arn = ""
      ```

    :::

## Next Step

  - Install [Argo CD](install-argocd.md) and integrate it with [edp-cluster-add-ons](https://github.com/epam/edp-cluster-add-ons) components

## Related Articles

* [Cluster Add-Ons Overview](add-ons-overview.md)
* [Install KubeRocketCI](install-kuberocketci.md)
