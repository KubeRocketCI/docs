import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const siteStructuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@id': 'https://docs.kuberocketci.io',
      '@type': 'WebSite',
      url: 'https://docs.kuberocketci.io',
      name: 'KubeRocketCI Documentation',
      description:
        'Explore KubeRocketCI Documentation for detailed guides, tutorials, and insights into KubeRocketCI CI/CD flow, platform components, and add-ons. Learn how to enhance your DevOps practices with KubeRocketCI.',
      sameAs: [
        'https://medium.com/kuberocketci',
        'https://hub.docker.com/u/epamedp',
        'https://epam.github.io/edp-install/',
      ],

      copyrightHolder: {
        '@id': 'https://docs.kuberocketci.io/#organization',
      },
      publisher: {
        '@id': 'https://docs.kuberocketci.io/#organization',
      },

      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://docs.kuberocketci.io/search?q={search_term_string}',
        },
        'query-input': 'required name=search_term_string',
      },
      inLanguage: 'en-GB',
    },
    {
      '@id': 'https://docs.kuberocketci.io/#organization',
      '@type': 'Organization',
      name: 'KubeRocketCI',
      url: 'https://kuberocketci.io',
      logo: 'https://docs.kuberocketci.io/img/logo.svg',
      sameAs: [
        'https://github.com/KubeRocketCI/docs',
        'https://medium.com/kuberocketci',
        'https://www.youtube.com/@theplatformteam',
        'https://hub.docker.com/u/epamedp',
      ],
    },
  ],
};

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

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  headTags: [
    {
      tagName: 'script',
      attributes: {
        type: 'application/ld+json',
      },
      innerHTML: JSON.stringify(siteStructuredData),
    },
    ...(process.env.NODE_ENV === 'production'
      ? [
          {
            tagName: 'link',
            attributes: {
              rel: 'stylesheet',
              href: '/css/cookie-consent.css',
            },
          },
          {
            tagName: 'script',
            attributes: {
              type: 'text/javascript',
              src: 'https://cookie-cdn.cookiepro.com/consent/0194a78c-7932-70b9-abdc-9d8096b5f261/OtAutoBlock.js',
            },
          },
          {
            tagName: 'script',
            attributes: {
              type: 'text/javascript',
              src: 'https://cookie-cdn.cookiepro.com/scripttemplates/otSDKStub.js',
              charset: 'UTF-8',
              'data-domain-script': '0194a78c-7932-70b9-abdc-9d8096b5f261',
            },
          },
          {
            tagName: 'script',
            attributes: {
              type: 'text/javascript',
            },
            innerHTML: 'function OptanonWrapper() {}',
          },
          {
            tagName: 'link',
            attributes: {
              rel: 'preconnect',
              href: 'https://www.googletagmanager.com',
            },
          },
          {
            tagName: 'script',
            attributes: {
              src: 'https://www.googletagmanager.com/gtm.js?id=GTM-527T2HLF',
              async: 'true',
            },
          },
          {
            tagName: 'script',
            attributes: {
              type: 'text/javascript',
            },
            innerHTML: 'window.dataLayer=window.dataLayer||[]',
          },
          {
            tagName: 'script',
            attributes: {
              type: 'text/javascript',
            },
            innerHTML:
              '!function(e,t,a,n,g){e[n]=e[n]||[],e[n].push({"gtm.start":(new Date).getTime(),event:"gtm.js"});var m=t.getElementsByTagName(a)[0],r=t.createElement(a);r.async=!0,r.src="https://www.googletagmanager.com/gtm.js?id=GTM-527T2HLF",m.parentNode.insertBefore(r,m)}(window,document,"script","dataLayer")',
          },
        ]
      : []),
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,

          editUrl: ({ docPath }) => {
            return `https://github.com/KubeRocketCI/docs/edit/main/docs/${docPath}`;
          },
          versions: {
            current: {
              label: '3.14-dev',
              path: 'next',
            },
          },
        },

        blog: {
          blogTitle: 'Blog: CI/CD Insights, DevOps and Kubernetes Guides',
          blogDescription:
            'Explore KubeRocketCI Blog for the latest insights, tutorials, and guides on CI/CD practices, DevOps culture, and Kubernetes technologies.',
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} KubeRocketCI.`,
            createFeedItems: async params => {
              const { blogPosts, defaultCreateFeedItems, ...rest } = params;
              return defaultCreateFeedItems({
                // keep only the 10 most recent blog posts in the feed
                blogPosts: blogPosts.filter((item, index) => index < 10),
                ...rest,
              });
            },
          },
        },

        theme: {
          customCss: './src/css/custom.css',
        },

        sitemap: {
          lastmod: 'date',
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: [
            '/docs/next/**',
            '/docs/3.11/**',
            '/docs/3.12/**',
            '/blog/tags/**',
            '/blog/authors/**',
            '/search',
          ],
          filename: 'sitemap.xml',
          createSitemapItems: async params => {
            const { defaultCreateSitemapItems, ...rest } = params;
            const items = await defaultCreateSitemapItems(rest);
            return items
              .filter(item => !item.url.includes('/page/'))
              .map(item => {
                if (item.url === 'https://docs.kuberocketci.io/') {
                  return { ...item, priority: 1.0, changefreq: 'weekly' };
                }
                if (
                  /\/docs\/(about-platform|quick-start|user-guide|operator-guide|developer-guide|use-cases|api)$/.test(
                    item.url
                  )
                ) {
                  return { ...item, priority: 0.8 };
                }
                if (item.url.includes('/blog/')) {
                  return { ...item, priority: 0.7, changefreq: 'monthly' };
                }
                if (item.url.includes('/faq/')) {
                  return { ...item, priority: 0.6, changefreq: 'monthly' };
                }
                return item;
              });
          },
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'faq',
        path: 'faq',
        routeBasePath: 'faq',
        sidebarPath: './sidebarsFAQ.ts',
      },
    ],
    [
      'plugin-image-zoom',
      {
        selector: '.markdown img',
        options: {
          margin: 24,
          background: '#000',
          scrollOffset: 0,
        },
      },
    ],
    [
      'docusaurus-plugin-llms',
      {
        generateLLMsTxt: true, // the plugin generates llms.txt; manual backup is saved in llms-manual-backup.txt
        generateLLMsFullTxt: true,
        title: 'KubeRocketCI Documentation',
        description:
          'Explore KubeRocketCI Documentation for CI/CD, operator and user guides, quick start, and API. Learn how to enhance your DevOps practices with KubeRocketCI.',
        includeBlog: false,
        ignoreFiles: ['faq/**', 'api/**'], // api/ — custom CRs for operators, they bloat llms-full.txt
        excludeImports: true,
        removeDuplicateHeadings: true,
      },
    ],
  ],

  themeConfig: {
    metadata: [
      {
        name: 'keywords',
        content:
          'KubeRocketCI, CI/CD, DevOps, Kubernetes, Tekton, Helm Charts, AWS, Argo CD, Add-Ons, Installation Guide, User Guide, Developer Guide, Operator Guide',
      },
      { name: 'author', content: 'KubeRocketCI Team' },
      // Open Graph (use `property=` per the OG spec). Per-page `og:title`,
      // `og:description`, `og:url`, `og:locale` are emitted automatically by
      // Docusaurus's <Layout> — only declare the globals here.
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'KubeRocketCI Documentation' },
      { property: 'og:image', content: 'https://docs.kuberocketci.io/img/kuberocketci-social-card.png' },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      // Twitter Cards still use `name=`.
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:image', content: 'https://docs.kuberocketci.io/img/kuberocketci-social-card.png' },
    ],
    description:
      'Boost your delivery with the development culture based on the modern CI/CD stack, golden path and self-service capabilities of the KubeRocketCI.',
    videoTeaser: 'https://www.youtube.com/embed/wiAaAHu17mw',
    mailTo: 'mailto:SupportEPMD-EDP@epam.com?subject=KubeRocketCI Demo Request',
    announcementBar: {
      id: 'announcement', // Increment on change
      content: `KubeRocketCI Team Supports Ukraine 🇺🇦. In solidarity, we ask that you consider financially supporting the organizations below: <a href="https://epamuafund.rengiving.com/causes/159bdd2f71854adf8ed5251fe26d2fe0" target="_blank">EPAM’s Global Partners for the Ukraine Humanitarian Crisis</a>`,
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
          position: 'left',
          label: 'FAQ',
          to: '/faq/general-questions',
        },
        // { to: 'blog', label: 'Blog', position: 'left' },
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
              type: 'html',
              value: '<hr style="margin: 0.1rem">',
            },
            {
              href: 'https://github.com/epam/edp-install/blob/master/RELEASES.md',
              label: 'Releases',
            },
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
          title: 'Readings',
          items: [
            {
              label: 'What is KubeRocketCI',
              to: '/docs/about-platform/',
            },
            {
              label: 'Blogs: Interesting Facts From The DevSecOps Life',
              to: '/blog/',
            },
            {
              label: 'User Guide: How To Use KubeRocketCI',
              to: '/docs/user-guide/',
            },
            {
              label: 'Developer Guide: How We Build KubeRocketCI',
              to: '/docs/developer-guide/',
            },
            {
              label: 'API Reference: Use KubeRocketCI To Build Your Solutions',
              to: '/docs/api/overview',
            },
          ],
        },
        {
          title: 'Our Community',
          items: [
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/@theplatformteam',
            },
            {
              label: 'Medium',
              href: 'https://medium.com/kuberocketci',
            },
          ],
        },
        {
          title: 'Learn More',
          items: [
            {
              label: 'KubeRocketCI on the GitHub',
              href: 'https://github.com/kuberocketci/docs',
            },
            {
              label: 'KubeRocketCI on the ArtifactHub',
              href: 'https://artifacthub.io/packages/search?repo=epmdedp',
            },
            {
              label: 'KubeRocketCI on the OperatorHub',
              href: 'https://operatorhub.io/?keyword=edp',
            },
            {
              label: 'Docker Hub',
              href: 'https://hub.docker.com/u/epamedp',
            },
            {
              label: 'RSS feed',
              href: 'https://docs.kuberocketci.io/blog/rss.xml',
            },
            {
              label: 'Atom feed',
              href: 'https://docs.kuberocketci.io/blog/atom.xml',
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
    hooks: {
      onBrokenMarkdownLinks: 'throw',
    },
  },

  themes: ['@docusaurus/theme-mermaid'],
};

export default config;
