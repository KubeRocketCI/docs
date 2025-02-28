---

title: "Uninstall KubeRocketCI"
description: "Guidance on properly uninstalling KubeRocketCI, including preliminary steps and commands for resource deletion via Helm or Argo CD."
sidebar_label: "Uninstall KubeRocketCI"

---
<!-- markdownlint-disable MD025 -->

# Uninstall KubeRocketCI

<head>
  <link rel="canonical" href="https://docs.kuberocketci.io/docs/operator-guide/uninstall-kuberocketci/" />
</head>

This guide offers comprehensive steps for effectively removing the KubeRocketCI from your system.

## Deletion Procedure

To uninstall platform, perform the following steps:

1. It is highly recommended to delete all the resources created via Portal UI first, such as:

    * Applications;
    * Libraries;
    * Autotests;
    * Infrastructures;
    * CD Pipelines.

    We advise removing them through the KubeRocketCI Portal interface. However, you can also eliminate all KubeRocketCI Portal resources by running the `kubectl delete` command.

2. Uninstall KubeRocketCI:

    * If you deployed KubeRocketCI via Helm, run the following command:

      ```bash
      helm uninstall edp-install -n <namespace>
      ```

    Replace `<namespace>` with the namespace where KubeRocketCI was deployed.

    * If you deployed platform via Argo Application, delete the Argo Application:

      ```bash
      kubectl delete application <platform-application-name> -n argo
      ```

## Related Articles

* [Install KubeRocketCI](install-kuberocketci.md)
