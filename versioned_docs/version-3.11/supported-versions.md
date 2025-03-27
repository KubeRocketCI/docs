---

title: "Supported Versions and Compatibility"
description: "Details on KubeRocketCI's support for its three most recent versions, including a release schedule, lifecycle, and compatibility with EKS and OpenShift versions."
sidebar_label: "Supported Versions"

---
<!-- markdownlint-disable MD025 -->

# Supported Versions and Compatibility

<head>
  <link rel="canonical" href="https://docs.kuberocketci.io/docs/supported-versions" />
</head>

At the KubeRocketCI, our commitment to providing a robust and reliable service involves supporting the latest innovations while ensuring stability and security. To maintain this balance, we focus our active **support on our platform's three most** recent versions.
This approach allows us to dedicate our resources to delivering cutting-edge features, enhancing performance, and fortifying security measures while ensuring a consistent and optimized user experience across the platform.

```mermaid
gantt
    dateFormat  YYYY-MM-DD
    title Release Schedule and Lifecycle

    section (Under Development)
    KubeRocketCI 3.11 SNAPSHOT: crit, r41, 2025-03-21, 2025-07-21

    section (Supported)
    KubeRocketCI 3.11 Release: active, r41, 2025-03-21, 2025-07-21

    section (Supported)
    KubeRocketCI 3.10 Release: active, r40, 2024-10-18, 2025-07-21

    section (Supported)
    KubeRocketCI 3.9 Release: active, r39, 2024-06-13, 2025-07-21

    section (Unsupported)
    KubeRocketCI 3.8 Release: active, r38, 2024-03-12, 2025-03-21

    section (Unsupported)
    EDP 3.7 Release: active, r37, 2023-12-15, 2024-10-18

    section (Unsupported)
    EDP 3.6 Release: r36, 2023-11-03, 2024-06-13

    section (Unsupported)
    EDP 3.5 Release: r35, 2023-09-21, 2024-03-12
```

By concentrating our support on the last three versions, we prioritize staying current with evolving technology landscapes. This enables us to swiftly adapt to advancements in Kubernetes and OpenShift environments, incorporating the latest enhancements, fixes, and optimizations into our platform.

This support model not only fosters innovation but also enables us to deliver a secure, high-performing, and dependable KubeRocketCI that meets the dynamic needs of our users and exceeds expectations for reliability and functionality.

Get acquainted with the list of the latest releases and component versions on which the platform is tested and verified:

:::tip Professional Services
  You can leverage our [professional services](/pricing) to upgrade your platform to the latest version or perform migration from Unsupported to Supported versions.
:::

|[Release Version](https://github.com/epam/edp-install/blob/master/RELEASES.md)|Release Date|[EKS Version](https://aws.amazon.com/eks/)|[OpenShift Version](https://github.com/okd-project/okd/releases)|
|:-:|:-:|:-:|:-:|
|3.11 |Mar 21, 2025|1.29+||
|3.10 |Oct 18, 2024|1.26+|4.12|
|3.9 |Jun 13, 2024|1.26+|4.12|
|<span style={{ color: "gray" }}>3.8 </span> |<span style={{ color: "gray" }}>Mar 12, 2024</span>|<span style={{ color: "gray" }}>1.26+</span>|<span style={{ color: "gray" }}>4.12</span>|
|<span style={{ color: "gray" }}>3.7 </span> |<span style={{ color: "gray" }}>Dec 15, 2023</span>|<span style={{ color: "gray" }}>1.26+</span>|<span style={{ color: "gray" }}>4.12</span>|
|<span style={{ color: "gray" }}>3.6 </span> |<span style={{ color: "gray" }}>Nov 03, 2023</span>|<span style={{ color: "gray" }}>1.26+</span>|<span style={{ color: "gray" }}>4.12</span>|
|<span style={{ color: "gray" }}>3.5 </span> |<span style={{ color: "gray" }}>Sep 21, 2023</span>|<span style={{ color: "gray" }}>1.26+</span>|<span style={{ color: "gray" }}>4.12</span>|
