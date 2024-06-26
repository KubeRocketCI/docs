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
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    metadata: [
      { name: 'keywords', content: 'KubeRocketCI, CI/CD, DevOps, Kubernetes, Tekton, Helm Charts, AWS, Argo CD, Add-Ons, Installation Guide, User Guide, Developer Guide, Operator Guide' },
      { name: 'description', content: 'Explore KubeRocketCI Documentation for detailed guides, tutorials, and insights into KubeRocketCI CI/CD flow, platform components, and add-ons. Learn how to enhance your DevOps practices with KubeRocketCI.' },
      { name: 'author', content: 'KubeRocketCI Team' },
      { name: 'og:type', content: 'website' },
      { name: 'og:url', content: 'https://docs.kuberocketci.io' },
      { name: 'og:title', content: 'KubeRocketCI Documentation | Comprehensive Guide and Tutorials' },
      { name: 'og:description', content: 'Explore KubeRocketCI Documentation for detailed guides, tutorials, and insights into KubeRocketCI CI/CD flow, platform components, and add-ons. Learn how to enhance your DevOps practices with KubeRocketCI.' },
      { name: 'og:image', content: 'https://docs.kuberocketci.io/img/kuberocketci-social-card.png' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:url', content: 'https://docs.kuberocketci.io' },
      { name: 'twitter:title', content: 'KubeRocketCI Documentation | Comprehensive Guide and Tutorials' },
      { name: 'twitter:description', content: 'Explore KubeRocketCI Documentation for detailed guides, tutorials, and insights into KubeRocketCI CI/CD flow, platform components, and add-ons. Learn how to enhance your DevOps practices with KubeRocketCI.' },
      { name: 'twitter:image', content: 'https://docs.kuberocketci.io/img/kuberocketci-social-card.png' },
    ],

    announcementBar: {
      id: 'announcement', // Increment on change
      content: `KubeRocketCI Team Supports Ukraine 🇺🇦. In solidarity, we ask that you consider financially supporting the organizations below: <a href="https://epamuafund.pinkaloo.com/causes/159bdd2f71854adf8ed5251fe26d2fe0" target="_blank">EPAM’s Global Partners for the Ukraine Humanitarian Crisis</a>`,
      isCloseable: true,
    },
    algolia: {
      appId: 'ZYN6QI47ZW',
      apiKey: '1e13b563f9083c76a0b29222a60f000b',
      indexName: 'kuberocketci',
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
          type: 'docSidebar',
          sidebarId: 'operatorGuideSidebar',
          position: 'left',
          label: 'Operator Guide',
        },
        {
          type: 'docSidebar',
          sidebarId: 'userGuideSidebar',
          position: 'left',
          label: 'User Guide',
        },
        {
          type: 'docSidebar',
          sidebarId: 'developerGuideSidebar',
          position: 'left',
          label: 'Developer Guide',
        },
        {
          type: 'docSidebar',
          sidebarId: 'useCasesSidebar',
          position: 'left',
          label: 'Use Cases',
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
        },
        {
          href: 'https://github.com/epam/edp-install/blob/master/RELEASES.md',
          label: 'Releases',
          position: 'right',
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
    },
  } satisfies Preset.ThemeConfig,
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
};

export default config;
