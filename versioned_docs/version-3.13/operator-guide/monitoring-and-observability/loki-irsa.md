---

title: "IAM Roles for Loki Service Accounts"
description: "Guide on creating AWS IAM roles for Loki service accounts to use Amazon S3 as object storage, including policy creation and service account annotation."
sidebar_label: "Loki IAM Roles"

---
<!-- markdownlint-disable MD025 -->

# IAM Roles for Loki Service Accounts

<head>
  <link rel="canonical" href="https://docs.kuberocketci.io/docs/operator-guide/monitoring-and-observability/loki-irsa" />
</head>

It is possible to use Amazon Simple Storage Service [Amazon S3](https://aws.amazon.com/s3/) as object storage for Loki.
In this case [Loki](https://grafana.com/docs/loki/latest/configure/examples/configuration-examples/) requires access to AWS resources. Follow the steps below to create a required role:

1. Create AWS IAM Policy `AWSIRSA<CLUSTER_NAME><LOKI_NAMESPACE>Loki_policy`:

    ```json
    {
        "Version": "2012-10-17",
        "Statement": [
            {
                "Effect": "Allow",
                "Action": [
                    "s3:ListObjects",
                    "s3:ListBucket",
                    "s3:PutObject",
                    "s3:GetObject",
                    "s3:DeleteObject"
                ],
                "Resource": [
                    "arn:aws:s3:::loki-*"
                ]
            },
            {
                "Effect": "Allow",
                "Action": [
                    "s3:ListBucket"
                ],
                "Resource": [
                    "arn:aws:s3:::loki-*"
                ]
            }
        ]
    }
    ```

2. Create AWS IAM Role `AWSIRSA<CLUSTER_NAME><LOKI_NAMESPACE>Loki` with trust relationships:

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
              "<OIDC_PROVIDER>:sub": "system:serviceaccount:<LOKI_NAMESPACE>:edp-loki"
          }
        }
      }
    ]
    }
    ```

3. Attach the `AWSIRSA<CLUSTER_NAME><LOKI_NAMESPACE>Loki_policy` policy to the `AWSIRSA<CLUSTER_NAME><LOKI_NAMESPACE>Loki` role.

4. Make sure that [Amazon S3](https://aws.amazon.com/s3/) bucket with name `loki-<CLUSTER_NAME>` exists.

5. Provide key value **eks.amazonaws.com/role-arn: "arn:aws:iam::\<AWS_ACCOUNT_ID\>:role/AWSIRSA‹CLUSTER_NAME›‹LOKI_NAMESPACE›Loki"** into the **serviceAccount.annotations** parameter in *values.yaml* during the [Loki Installation](./install-loki.md#installation).

## Related Articles

* [Associate IAM Roles With Service Accounts](../infrastructure-providers/aws/enable-irsa.md)
* [Install Grafana Loki](install-loki.md)
