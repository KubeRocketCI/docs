---

title: "AWS EBS CSI Driver Setup for EKS"
description: "Step-by-step guide to setting up the AWS EBS CSI driver on Amazon EKS: IAM OIDC prerequisites, trust policy, IAM role, and add-on install."
sidebar_label: "Amazon EBS CSI Driver"

---
<!-- markdownlint-disable MD025 -->

# Amazon EBS CSI Driver

<head>
  <link rel="canonical" href="https://docs.kuberocketci.io/docs/operator-guide/infrastructure-providers/aws/ebs-csi-driver" />
</head>

This guide shows how to install the AWS EBS CSI driver on an Amazon EKS cluster, step by step: creating the IAM OIDC trust policy, attaching the AWS-managed IAM policy, and deploying the driver as an EKS add-on so Kubernetes can manage Amazon EBS-backed Persistent Volumes.

## Prerequisites

An existing AWS Identity and Access Management (IAM) OpenID Connect (OIDC) provider for your cluster. To determine whether you already have an OIDC provider or to create a new one, see [Creating an IAM OIDC provider for your cluster](https://docs.aws.amazon.com/eks/latest/userguide/enable-iam-roles-for-service-accounts.html).

To add an Amazon EBS CSI add-on, please follow the steps below:

1. Check your cluster details (the random value in the cluster name will be required in the next step):

    ```bash
    kubectl cluster-info
    ```

2. Create Kubernetes IAM Trust Policy for Amazon EBS CSI Driver. Replace `AWS_ACCOUNT_ID` with your account ID, `AWS_REGION` with your AWS Region, and `EXAMPLED539D4633E53DE1B71EXAMPLE` with the value that was returned in the previous step. Save this Trust Policy into a file `aws-ebs-csi-driver-trust-policy.json`.

    <details>
    <summary><b>aws-ebs-csi-driver-trust-policy.json</b></summary>
    ```json
      {
        "Version": "2012-10-17",
        "Statement": [
          {
            "Effect": "Allow",
            "Principal": {
              "Federated": "arn:aws:iam::AWS_ACCOUNT_ID:oidc-provider/oidc.eks.AWS_REGION.amazonaws.com/id/EXAMPLED539D4633E53DE1B71EXAMPLE"
            },
            "Action": "sts:AssumeRoleWithWebIdentity",
            "Condition": {
              "StringEquals": {
                "oidc.eks.AWS_REGION.amazonaws.com/id/EXAMPLED539D4633E53DE1B71EXAMPLE:aud": "sts.amazonaws.com",
                "oidc.eks.AWS_REGION.amazonaws.com/id/EXAMPLED539D4633E53DE1B71EXAMPLE:sub": "system:serviceaccount:kube-system:ebs-csi-controller-sa"
              }
            }
          }
        ]
      }
    ```
    </details>

    To get the notion of the IAM Role creation, please refer to the [official documentation](https://docs.aws.amazon.com/eks/latest/userguide/csi-iam-role.html).

3. Create the IAM role, for example:

    ```bash
    aws iam create-role \
      --role-name AmazonEKS_EBS_CSI_DriverRole \
      --assume-role-policy-document file://"aws-ebs-csi-driver-trust-policy.json"
    ```

4. Attach the required AWS Managed Policy `AmazonEBSCSIDriverPolicyV2` to the role with the following command:

    ```bash
    aws iam attach-role-policy \
      --policy-arn arn:aws:iam::aws:policy/AmazonEBSCSIDriverPolicyV2 \
      --role-name AmazonEKS_EBS_CSI_DriverRole
    ```

5. Add the Amazon EBS CSI add-on using the AWS CLI. Replace `my-cluster` with the name of your cluster, `AWS_ACCOUNT_ID` with your account ID, and `AmazonEKS_EBS_CSI_DriverRole` with the name of the role that was created earlier:

    ```bash
    aws eks create-addon --cluster-name my-cluster --addon-name aws-ebs-csi-driver \
      --service-account-role-arn arn:aws:iam::AWS_ACCOUNT_ID:role/AmazonEKS_EBS_CSI_DriverRole
    ```

  :::note
    When the plugin is deployed, it creates the `ebs-csi-controller-sa` service account. The service account is bound to a Kubernetes `ClusterRole` with the required Kubernetes permissions.
    The `ebs-csi-controller-sa` service account should already be annotated with `arn:aws:iam::AWS_ACCOUNT_ID:role/AmazonEKS_EBS_CSI_DriverRole`. To check the annotation, please run:

    ```bash
    kubectl get sa ebs-csi-controller-sa -n kube-system -o=jsonpath='{.metadata.annotations}'
    ```

    In case pods have errors, restart the `ebs-csi-controller` deployment:

    ```bash
    kubectl rollout restart deployment ebs-csi-controller -n kube-system
    ```
  :::

### Related Articles

* [Creating an IAM OIDC provider for your cluster](https://docs.aws.amazon.com/eks/latest/userguide/enable-iam-roles-for-service-accounts.html)
* [Creating the Amazon EBS CSI driver IAM role for service accounts](https://docs.aws.amazon.com/eks/latest/userguide/csi-iam-role.html)
* [Managing the Amazon EBS CSI driver as an Amazon EKS add-on](https://docs.aws.amazon.com/eks/latest/userguide/managing-ebs-csi.html)
