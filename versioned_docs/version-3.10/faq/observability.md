---
title: "Logging, Monitoring, and Tracing"
description: "A comprehensive list of frequently asked questions about logging, monitoring, and tracing capabilities in KubeRocketCI."
sidebar_label: "Logging, Monitoring & Tracing"
sidebar_position: 1
---
<!-- markdownlint-disable MD025 -->
This page contains a list of frequently asked questions related to logging, monitoring, and tracing capabilities in KubeRocketCI.

### How to Check Logs for Applications Running in an Environment?

<head>
  <link rel="canonical" href="https://docs.kuberocketci.io/docs/faq/observability/" />
</head>

:::warning
  Before proceeding, ensure logging is enabled for your platform and that your application is configured to write logs to standard output.
:::

To access logs for applications running in a specific environment, KubeRocketCI offers several methods through its UI:

Using KubeRocketCI UI:

- **Via Deployment Flows Section:**
  - Navigate to **Deployment Flows**, select `<Deployment Flow name>`, and click the **Kibana** icon located at the top-left corner of the Environment `Swimlane`.
- **Via Deployment Flow Details Page:**
  - Access each [Deployment Flow details page](../user-guide/manage-environments.md#view-deployment-flow-details) to find **Kibana** links at the top.
- **Through Argo CD Integration:**
  - Go to the **Deployment Flows** page, choose the desired `<Deployment Flow name>`, and click on the **Argo CD** icon. Within the Argo CD UI, select the application of interest (useful if you run more than one), click on **Pod(s)**, and then select the **Logs** tab.
