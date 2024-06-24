# IAM Roles for Kaniko Service Accounts

!!! note
    The information below is relevant in case ECR is used as Docker container registry.
    Make sure that IRSA is enabled and [amazon-eks-pod-identity-webhook](https://github.com/aws/amazon-eks-pod-identity-webhook/tree/master) is deployed according to the [Associate IAM Roles With Service Accounts](./enable-irsa.md) documentation.

The "build-image-kaniko" stage manages [ECR](https://aws.amazon.com/ecr/) through IRSA that should be available on the cluster. Follow the steps below to create a required role:

1. Create AWS IAM Policy "AWSIRSA&#8249;CLUSTER_NAME&#8250;&#8249;EDP_NAMESPACE&#8250;Kaniko_policy":

      ```json
      {
        "Version": "2012-10-17",
        "Statement": [
          {
              "Effect": "Allow",
              "Action": [
                  "ecr:*",
                  "cloudtrail:LookupEvents"
              ],
              "Resource": "arn:aws:ecr:<AWS_REGION>:<AWS_ACCOUNT_ID>:repository/<EDP_NAMESPACE>/*"
          },
          {
              "Effect": "Allow",
              "Action": "ecr:GetAuthorizationToken",
              "Resource": "*"
          },
          {
              "Effect": "Allow",
              "Action": [
                  "ecr:DescribeRepositories",
                  "ecr:CreateRepository"
              ],
              "Resource": "arn:aws:ecr:<AWS_REGION>:<AWS_ACCOUNT_ID>:repository/*"
          }
        ]
      }
      ```

2. Create AWS IAM Role "AWSIRSA&#8249;CLUSTER_NAME&#8250;&#8249;EDP_NAMESPACE&#8250;Kaniko" with trust relationships:

      ```json
      {
        "Version": "2012-10-17",
        "Statement": [
          {
            "Effect": "Allow",
            "Principal": {
              "Federated": "arn:aws:iam::<AWS_ACCOUNT_ID>:oidc-provider/<OIDC_PROVIDER>"
            },
            "Action": "sts:AssumeRoleWithWebIdentity",
            "Condition": {
              "StringEquals": {
                "<OIDC_PROVIDER>:sub": "system:serviceaccount:edp:edp-kaniko"
              }
            }
          }
        ]
      }
      ```

3. Attach the "AWSIRSA&#8249;CLUSTER_NAME&#8250;&#8249;EDP_NAMESPACE&#8250;Kaniko_policy" policy to the "AWSIRSA&#8249;CLUSTER_NAME&#8250;&#8249;EDP_NAMESPACE&#8250;Kaniko" role.

4. Define the resulted **arn** role value into the **kaniko.roleArn** parameter in values.yaml during the [EDP installation](./install-kuberocketci.mdx).

## Related Articles

* [Associate IAM Roles With Service Accounts](../operator-guide/enable-irsa.md)
* [Install KubeRocketCI](../operator-guide/install-kuberocketci.mdx)
