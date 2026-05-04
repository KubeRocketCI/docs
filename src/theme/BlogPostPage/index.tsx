import React from 'react';
import BlogPostPage from '@theme-original/BlogPostPage';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function BlogPostPageWrapper(props) {
  const { siteConfig } = useDocusaurusContext();

  /** @type {import('@docusaurus/plugin-content-blog').BlogPostMetadata} */ const blogMetaData = props.content.metadata;

  // https://developers.google.com/search/docs/appearance/structured-data/breadcrumb#json-ld
  const archiveBreadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    name: 'Archive breadcrumb',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteConfig.url,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Archive',
        item: `${siteConfig.url}/blog/archive/`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: blogMetaData.title,
      },
    ],
  };

  const tagsBreadcrumbStructuredData = blogMetaData.tags.map(tag => ({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    name: `Tags ${tag.label} breadcrumb`,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteConfig.url,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Tags',
        item: `${siteConfig.url}/blog/tags/`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: tag.label,
        item: `${siteConfig.url}${tag.permalink}`,
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: blogMetaData.title,
      },
    ],
  }));

  const breadcrumbStructuredData = [archiveBreadcrumbStructuredData, ...tagsBreadcrumbStructuredData];

  // https://developers.google.com/search/docs/appearance/structured-data/article#json-ld
  const dateModified = blogMetaData.lastUpdatedAt
    ? new Date(blogMetaData.lastUpdatedAt * 1000).toISOString()
    : blogMetaData.date;

  const blogPostingStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: blogMetaData.title,
    description: blogMetaData.description,
    datePublished: blogMetaData.date,
    dateModified,
    url: `${siteConfig.url}${blogMetaData.permalink}`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteConfig.url}${blogMetaData.permalink}`,
    },
    ...(blogMetaData.frontMatter?.image && { image: blogMetaData.frontMatter.image }),
    ...(blogMetaData.frontMatter?.keywords && {
      keywords: Array.isArray(blogMetaData.frontMatter.keywords)
        ? blogMetaData.frontMatter.keywords.join(', ')
        : blogMetaData.frontMatter.keywords,
    }),
    author: blogMetaData.authors.map(author => ({
      '@type': 'Person',
      name: author.name,
      ...(author.url && { url: author.url }),
    })),
    publisher: {
      '@type': 'Organization',
      name: siteConfig.title,
      url: siteConfig.url,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogPostingStructuredData),
        }}
      />
      <BlogPostPage {...props} />
    </>
  );
}
