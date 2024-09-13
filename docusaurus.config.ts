import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'KubeRocketCI',
  tagline: 'Build Your Delivery Rocket',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.kuberocketci.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'KubeRocketCI', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        gtag: {
          trackingID: 'G-4V1NZ8PQWG',
        },

        docs: {
          sidebarPath: './sidebars.ts',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,

          editUrl: ({ docPath }) => {
            return `https://github.com/KubeRocketCI/docs/edit/main/docs/${docPath}`;
          },
        },

        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    metadata: [
      {
        name: 'keywords',
        content:
          'KubeRocketCI, CI/CD, DevOps, Kubernetes, Tekton, Helm Charts, AWS, Argo CD, Add-Ons, Installation Guide, User Guide, Developer Guide, Operator Guide',
      },
      {
        name: 'description',
        content:
          'Explore KubeRocketCI Documentation for detailed guides, tutorials, and insights into KubeRocketCI CI/CD flow, platform components, and add-ons. Learn how to enhance your DevOps practices with KubeRocketCI.',
      },
      { name: 'author', content: 'KubeRocketCI Team' },
      { name: 'og:type', content: 'website' },
      { name: 'og:url', content: 'https://docs.kuberocketci.io' },
      { name: 'og:title', content: 'KubeRocketCI Documentation | Comprehensive Guide and Tutorials' },
      {
        name: 'og:description',
        content:
          'Explore KubeRocketCI Documentation for detailed guides, tutorials, and insights into KubeRocketCI CI/CD flow, platform components, and add-ons. Learn how to enhance your DevOps practices with KubeRocketCI.',
      },
      { name: 'og:image', content: 'https://docs.kuberocketci.io/img/kuberocketci-social-card.png' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:url', content: 'https://docs.kuberocketci.io' },
      { name: 'twitter:title', content: 'KubeRocketCI Documentation | Comprehensive Guide and Tutorials' },
      {
        name: 'twitter:description',
        content:
          'Explore KubeRocketCI Documentation for detailed guides, tutorials, and insights into KubeRocketCI CI/CD flow, platform components, and add-ons. Learn how to enhance your DevOps practices with KubeRocketCI.',
      },
      { name: 'twitter:image', content: 'https://docs.kuberocketci.io/img/kuberocketci-social-card.png' },
    ],
    description:
      'Boost your delivery with the development culture based on the modern CI/CD stack, golden path and self-service capabilities of the KubeRocketCI.',
    videoTeaser: 'https://www.youtube.com/embed/wiAaAHu17mw',
    mailTo: 'mailto:SupportEPMD-EDP@epam.com?subject=KubeRocketCI Demo Request',
    announcementBar: {
      id: 'announcement', // Increment on change
      content: `KubeRocketCI Team Supports Ukraine 🇺🇦. In solidarity, we ask that you consider financially supporting the organizations below: <a href="https://epamuafund.pinkaloo.com/causes/159bdd2f71854adf8ed5251fe26d2fe0" target="_blank">EPAM’s Global Partners for the Ukraine Humanitarian Crisis</a>`,
      isCloseable: true,
    },

    algolia: {
      appId: 'ZYN6QI47ZW',
      apiKey: '1e13b563f9083c76a0b29222a60f000b',
      indexName: 'kuberocketci',
      contextualSearch: true,
    },

    navbar: {
      title: 'KubeRocketCI',
      logo: {
        alt: 'KubeRocketCI Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'quickStartSidebar',
          position: 'left',
          label: 'Getting Started',
        },
        {
          type: 'dropdown',
          label: 'Guides',
          position: 'left',
          items: [
            {
              type: 'docSidebar',
              sidebarId: 'operatorGuideSidebar',
              label: 'Operator Guide',
            },
            {
              type: 'docSidebar',
              sidebarId: 'userGuideSidebar',
              label: 'User Guide',
            },
            {
              type: 'docSidebar',
              sidebarId: 'developerGuideSidebar',
              label: 'Developer Guide',
            },
            // Add other guides here as needed
          ],
        },
        {
          type: 'docSidebar',
          sidebarId: 'useCasesSidebar',
          position: 'left',
          label: 'Use Cases',
        },
        {
          type: 'docSidebar',
          sidebarId: 'faqSidebar',
          position: 'left',
          label: 'FAQ',
        },
        {
          label: 'Pricing',
          to: '/pricing',
          position: 'left',
        },
        // Right
        {
          type: 'docSidebar',
          sidebarId: 'apiSidebar',
          position: 'right',
          label: 'API Reference',
        },
        {
          type: 'docsVersionDropdown',
          position: 'right',
          dropdownActiveClassDisabled: true,
          dropdownItemsAfter: [
            {
              type: "html",
              value: '<hr style="margin: 0.1rem">',
            },
            {
              href: 'https://github.com/epam/edp-install/blob/master/RELEASES.md',
              label: 'Releases',
            }
          ],
        },
        {
          href: 'https://github.com/kuberocketci/docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Quick Start',
              to: '/docs/about-platform',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/@theplatformteam',
            },
            {
              label: 'Medium',
              href: 'https://medium.com/epam-delivery-platform',
            },
            {
              label: 'Docker Hub',
              href: 'https://hub.docker.com/u/epamedp',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/kuberocketci/docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} KubeRocketCI. Built with Docusaurus.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'go', 'groovy', 'hcl', 'javascript', 'jq', 'json', 'python', 'typescript', 'yaml'],
    },
  } satisfies Preset.ThemeConfig,

  markdown: {
    mermaid: true,
  },

  themes: ['@docusaurus/theme-mermaid'],
};

export default config;
