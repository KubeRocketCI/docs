---
title: "Advanced AWS EKS Management: Implementing SSO via OIDC and Keycloak"
description: "Learn how to implement Single Sign-On (SSO) using OpenID Connect (OIDC) and Keycloak to boost security and streamline authentication processes in Amazon Elastic Kubernetes Service (AWS EKS)."
slug: advanced-aws-eks-management-oidc-keycloak
tags: [KubeRocketCI, Keycloak, AWS EKS, SSO]
keywords: [Keycloak, AWS EKS, Kubernetes, AWS, EKS, IAM, OpenID Connect, Single Sign-On, Security, Authentication, Authorization]
image: https://i.imgur.com/mErPwqL.png
authors: [sergk, nikolaymarusenko]
hide_table_of_contents: false
---

In today's cloud-centric world, ensuring secure and hassle-free access to Amazon Elastic Kubernetes Service (AWS EKS) stands out as a top priority for IT teams. Our guide dives into the nuts and bolts of boosting AWS EKS security by implementing Single Sign-On (SSO) using OpenID Connect (OIDC) and Keycloak. This approach streamlines authentication processes and bolsters security. With this guide, we aim to arm you with practical strategies to deploy an effective SSO solution, creating a more secure and organization-friendly AWS EKS environment.

<!--truncate-->

## Keycloak Components Overview

Keycloak is a critical component in KubeRocketCI for managing authentication and authorization. It uses realms, roles and groups to control access across the platform.
