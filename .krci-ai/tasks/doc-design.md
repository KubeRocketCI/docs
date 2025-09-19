# Task: Documentation Build

This task helps users contribute to KubeRocketCI documentation.

The goal of this task is to guide the user on where to create a new page or how to update an existing page, and what content to include within it.

## Prerequisites

<prerequisites>
- User has a vision of what page they want to add and provided you with their vision.
</prerequisites>

## Instructions

<instructions>
1. When the "doc-design" task is requested, ensure that user provided context of what they want to create. Otherwise, request the user to enter the idea of page with as much details as possible.
2. Review the documentation project to define the most appropriate place to put the page based on the idea. Below are the sections summary that might help you make a decision:

  - Getting Started: This section provides introductory materials which help users quickly start using the platform. It also describes the basic concepts of the platform, system requirements, and other information users should know before they start using the platform.
  - Operator Guide: This guide explains advanced installation options, how to set up integrations with third-party tools, upgrade the platform to new version, and other things that will be helpful for those who configure the platform.
  - User Guide: This section describes user interface of the KubeRocketCI portal. It describes how to manage platform-related resources, general UI settings, and integrations that could be set up in the Configuration section of the portal. This section is useful for those who wish to get familiar with KubeRocketCI portal.
  - Developer Guide: This section is dedicated to those who work in KubeRocketCI team or wish to contribute to the product. It contains reference architecture, Kubernetes annotation and labels lists, autotest coverage, and telemetry specifications.
  - Use Cases: This section provides a lists of cases where KubeRocketCI will be helpful. Each Use Case contains step-by-step guidelines.
  - FAQ: This section contains the frequently asked question about the platform.

3. Based on the user's vision provided, define if user needs to update the existing page or add a new one. If a user needs to create a new page, define what needs to be explained in the page, verify the user's topic relates to the context of KubeRocketCI. If a user need to update the existing page, show your vision on how to update this existing page.
4. Suggest a user to provide them with a template of a new page and put it in the place that you consider the most relevant. If requested, generate a template of a suggested page. Once generated, report on template creation completion and tell the user that they can proceed with populating it.
5. Recommend the user to provide visuals, such as screenshots or video links, tell them that adding references (clickable links) to related resources would be beneficial.
6. If the idea that user wants to implement will require to modify a few documentation pages, remind it to him and list the affected pages.
</instructions>

## Output Format

As an output, you are expected to provide the user with general guidelines on the requested questions.

For new page creation: When a page template is requested, provide the user with a template of a page user is expected to populate.

For existing page updates: Provide specific recommendations on how to modify the existing content, including sections to add, modify, or restructure.

For example, the page that you generate for Operator Guide should have the following template:

"""
# Tentative Title

This page describes how to install/integrate/set up a tool ToolName. ToolName helps with... In the context of KubeRocketCI, it performs ... 

## Prerequisites

Before you integrate the tool name, ensure you have:

- a;
- b;
- c.

## Installation

To install the ToolName, follow the steps below:

1. Navigate to ... :

  ![Screenshot 1](../../relative/path/screenshot-1.png "Screenshot 1")

2. Run the following command ... :

  ```bash
  command --options parameter
  ```

3. Verify that ... :

  ![Screenshot 2](../../relative/path/screenshot-1.png "Screenshot 2")

## Integration

To integrate ToolName with KubeRocketCI, follow the steps below:

1. Navigate to ... :

  ![Screenshot 3](../../relative/path/screenshot-1.png "Screenshot 3")

2. Click the **Sample** button ... :

  ```bash
  command --options parameter
  ```

## Usage

As soon as the ToolName is integrated, you can test its work:

1. Navigate to ... :

  ![Screenshot 4](../../relative/path/screenshot-1.png "Screenshot 4")

2. Verify that ... :

  ![Screenshot 4](../../relative/path/screenshot-1.png "Screenshot 4")


## Related Articles

* [Page Name](../relative/path.md)
<!-- Example:
* [Add Cluster](../../user-guide/add-cluster.md)
* [Deploy Application With Custom Build Tool/Framework](../../use-cases/tekton-custom-pipelines.md)
* [Add Environment](../../user-guide/add-cd-pipeline.md)
-->
"""

## Framework Context: KubeRocketCI Documentation Architecture

KubeRocketCI documentation follows a structured approach with six main sections, each serving specific user needs and contexts. Understanding this architecture ensures proper content placement and user experience optimization.

Documentation sections serve different user journeys:
- **Getting Started**: New user onboarding and basic concepts - introductory materials, system requirements, platform overview
- **Operator Guide**: Advanced configuration and third-party integrations - installation options, tool integrations, platform upgrades
- **User Guide**: Portal interface and resource management - UI navigation, resource management, configuration settings
- **Developer Guide**: Technical reference and contribution guidance - architecture reference, API documentation, contribution workflows
- **Use Cases**: Step-by-step implementation scenarios - practical examples, workflow demonstrations, real-world applications
- **FAQ**: Common questions and troubleshooting - problem resolution, common issues, platform clarifications

Template generation follows established patterns with consistent structure, visual integration requirements, and cross-reference standards to maintain documentation coherence and usability. Each template includes standardized sections for prerequisites, installation steps, integration procedures, usage examples, and related article references.

Content placement decisions should consider user context, technical complexity, and workflow integration to ensure optimal user experience and information accessibility.

## Success Criteria

<success_criteria>
- User vision assessed and appropriate action determined (new page vs. existing page update)
- For new pages: Template generated following KubeRocketCI documentation standards and placed in correct directory
- For existing pages: Specific update recommendations provided with clear modification guidance
- All required sections identified (Prerequisites, Installation, Integration, Usage, Related Articles)
- Visual guidance provided for screenshots and media integration
- Cross-page dependencies identified and communicated when applicable
- User provided with clear next steps for content development and review process
</success_criteria>


## Execution Checklist

### Preparation Phase

- User vision and requirements gathered with sufficient detail
- Documentation section mapping completed against user needs
- Template requirements identified based on content type and section
- Framework dependencies validated and accessible

### Analysis Phase

- Action type determined (new page creation vs. existing page update)
- Appropriate documentation section determined with justification
- Content scope defined and validated against KubeRocketCI context
- For new pages: Template structure requirements identified for target section
- For existing pages: Current content analyzed and update requirements identified

### Generation Phase

- For new pages: Documentation template created following established patterns
- For existing pages: Detailed update recommendations provided with specific modification guidance
- All required sections identified with appropriate content guidance
- Visual integration guidance provided with screenshot placeholders
- Cross-reference structure implemented with related articles section
- Output validated against KubeRocketCI documentation standards

### Completion Phase

- Template placed in correct directory with proper naming convention
- User provided with clear next steps and population guidance
- Visual guidance provided for screenshots and media integration
- Template ready for content development and review process
