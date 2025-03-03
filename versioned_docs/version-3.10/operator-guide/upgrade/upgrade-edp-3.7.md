---
title: "Upgrade EDP v3.6 to 3.7"
description: "Guide on upgrading EDP to version 3.7, including steps for updating Custom Resource Definitions and performing the upgrade procedure."
sidebar_label: "v3.6 to 3.7"
---
<!-- markdownlint-disable MD025 -->

# Upgrade EDP v3.6 to 3.7

<head>
  <link rel="canonical" href="https://docs.kuberocketci.io/docs/operator-guide/upgrade/upgrade-edp-3.7" />
</head>

:::warning
  We suggest backing up the EDP environment before starting the upgrade procedure.
:::

This section provides detailed instructions for upgrading the EPAM Delivery Platform to version 3.7.5. Follow the steps and requirements outlined below:

To upgrade EDP to the v3.7.5, run the following command:

  ```bash
  helm upgrade edp epamedp/edp-install -n edp --values values.yaml --version=3.7.5
  ```

  :::note
    To verify the installation, it is possible to test the deployment before applying it to the cluster with the `--dry-run` tag:<br />
      `helm upgrade edp epamedp/edp-install -n edp --values values.yaml --version=3.7.5 --dry-run`
  :::
