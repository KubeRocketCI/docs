---
title: "Logging, Monitoring, and Tracing"
description: "A comprehensive list of frequently asked questions about logging, monitoring, and tracing capabilities in KubeRocketCI."
sidebar_label: "Logging, Monitoring & Tracing"
sidebar_position: 1
---
<!-- markdownlint-disable MD025 -->
This page contains a list of frequently asked questions related to logging, monitoring, and tracing capabilities in KubeRocketCI.

<head>
  <link rel="canonical" href="https://docs.kuberocketci.io/faq/observability" />
</head>

### How to Check Logs for Applications Running in an Environment?

:::warning
  Before proceeding, ensure logging is enabled for your platform and that your application is configured to write logs to standard output.
:::

To access logs for applications running in a specific environment, KubeRocketCI offers several methods through its UI:

Using KubeRocketCI UI:

- **Via the Logs Button of an Application:**
  - Navigate to **Deployments**, select `<Deployment name>`, open the environment, and click the **Show Logs** button in the row of the application.
- **Via the Logging Link:**
  - On the environment details page, click **Logging** in the page header. On the [deployment details page](/docs/user-guide/manage-environments#view-deployment-details), the same link is in the **External Services** panel. The link opens the logging system of your platform, for example, Kibana, for the namespace of the environment. If the link does not open the right page, check the **Logging** link in **Configuration → Quick Access → Links**.
- **Through Argo CD Integration:**
  - On the environment details page, click **Argo CD**. Within the Argo CD UI, select the application of interest (useful if you run more than one), click on **Pod(s)**, and then select the **Logs** tab.
