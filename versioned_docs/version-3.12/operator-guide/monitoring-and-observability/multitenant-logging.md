---

title: "Multitenant Logging"
description: "Guide on configuring multitenant logging with Grafana, Loki, and Logging-operator, highlighting the transition from ELK to EFK stack for enhanced log management in KubeRocketCI."
sidebar_label: "Multitenant Logging"

---
<!-- markdownlint-disable MD025 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Multitenant Logging

<head>
  <link rel="canonical" href="https://docs.kuberocketci.io/docs/operator-guide/monitoring-and-observability/multitenant-logging" />
</head>

Get acquainted with the multitenant logging components.

## Logging Components

To configure the multitenant logging, it is necessary to deploy the following components:

* [Grafana](https://grafana.com/)
* [Loki](https://grafana.com/oss/loki/)
* [Logging-operator](https://kube-logging.dev/docs/)

In Grafana, every tenant represents an organization, i.e. it is necessary to create an organization for every namespace in the cluster. To get more details regarding the architecture of the Logging Operator, review the Diagram below.

  ![Logging operator scheme](../../assets/operator-guide/logging-operator-architecture.png "Logging operator scheme")

:::note
  It is necessary to deploy Loki with the `auth_enabled: true` flag with the aim to ensure that the logs are separated for each tenant. For the authentication, Loki requires the HTTP header `X-Scope-OrgID`.
:::

## Review Project Logs in Grafana

To find the project logs, navigate to Grafana and follow the steps below:

  :::note
    Grafana is a common service for different customers where each customer works in its own separated Grafana Organization
    and doesn't have any access to another project.
  :::

    <Tabs
      defaultValue="< v9.5.0"
      values={[
        {label: 'Grafana < v9.5.0', value: '< v9.5.0'},
        {label: 'Grafana >= v9.5.0', value: '> v9.5.0'},
      ]}>

      <TabItem value="< v9.5.0">
      1. Choose the organization by clicking the **Current Organization** drop-down list. If a user is assigned to several organizations, switch easily by using the Switch button:

          ![Current organization](../../assets/operator-guide/multitenant-logging/grafana-organization-user-info.png "Current organization")

      2. Navigate to the left-side menu and click the **Explore** button to see the Log Browser:

          ![Grafana explore](../../assets/operator-guide/multitenant-logging/grafana-explore.png "Grafana explore")

      3. Click the **Log Browser** button to see the labels that can be used to filter logs (e.g., hostname, namespace, application name, pod, etc.):

          :::note
            Enable the correct data source, select the relevant logging data from the top left-side corner, and pay attention that the data source name always follows the `project_name-logging` pattern.
          :::

          ![Log browser](../../assets/operator-guide/multitenant-logging/grafana-log-browser-original.png "Log browser")

      4. Filter out logs by clicking the **Show logs** button or write the query and click the **Run query** button.

      5. Review the results with the quantity of logs per time, see the example below:

          ![Logs example](../../assets/operator-guide/multitenant-logging/grafana-logs-example.png "Logs example")

          * Expand the logs to get detailed information about the object entry:

              ![Expand logs](../../assets/operator-guide/multitenant-logging/grafana-expand-logs.png "Expand logs")

          * Use the following buttons to include or remove the labels from the query:

              ![Addition button](../../assets/operator-guide/multitenant-logging/grafana-addition-button.png "Addition button")

          * See the ad-hoc statistics for a particular label:

              ![Ad-hoc stat example](../../assets/operator-guide/multitenant-logging/grafana-ad-hoc-stat-example.png "Ad-hoc stat example")
        </TabItem>

      <TabItem value="> v9.5.0">
      1. Choose the organization from the drop-down list in the upper left corner:

          ![Current organization](../../assets/operator-guide/multitenant-logging/grafana-organizations.png "Current organization")

      2. Navigate to the left-side menu and click the **Explore** button:

          ![Grafana explore](../../assets/operator-guide/multitenant-logging/grafana-explore-tab.png "Grafana explore")

      3. Click the **Label Browser** button to see the labels that can be used to filter logs:

          :::note
            Enable the correct data source, select the relevant logging data from the top left-side corner, and pay attention that the data source name always follows the `project_name-logging` pattern.
          :::

          ![Log browser](../../assets/operator-guide/multitenant-logging/grafana-label-browser.png "Log browser")

      4. In the appeared window, select the labels to filter logs (e.g., hostname, namespace, application name, pod, etc.):

          ![labels example](../../assets/operator-guide/multitenant-logging/grafana-label-browser-tab.png "Logs example")

      5. Close the **Label Browser** window and click the **Run query** button. Review the results with the quantity of logs per time, see the example below:

          ![Run query](../../assets/operator-guide/multitenant-logging/grafana-query-result.png "Run query")

          * Expand the logs to get detailed information about the object entry. Use the following buttons to include or remove the labels from the query:

              ![Expand logs](../../assets/operator-guide/multitenant-logging/grafana-expand-logs-tab.png "Expand logs")

          * See the ad-hoc statistics for a particular label:

              ![Ad-hoc stat example](../../assets/operator-guide/multitenant-logging/grafana-label-statistics.png "Ad-hoc stat example")
        </TabItem>
       </Tabs>

## Related Articles

* [Grafana Documentation](https://grafana.com/docs/grafana/latest/)
