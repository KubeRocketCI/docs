import React from 'react';
import Head from '@docusaurus/Head';
import Metadata from '@theme-original/DocItem/Metadata';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useDoc } from '@docusaurus/plugin-content-docs/client';

export default function MetadataWrapper(props) {
  const { siteConfig } = useDocusaurusContext();
  const { metadata, frontMatter } = useDoc();

  const canonical = `${siteConfig.url}${metadata.permalink}`;
  const lastUpdate = metadata.lastUpdatedAt;
  const isoDate =
    lastUpdate != null
      ? new Date(lastUpdate < 1e12 ? lastUpdate * 1000 : lastUpdate).toISOString()
      : undefined;
  const frontMatterDate = (frontMatter as { date?: string }).date;
  const datePublished = frontMatterDate ?? isoDate;
  const dateModified = isoDate ?? frontMatterDate;

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: metadata.title,
    description: metadata.description,
    ...(datePublished ? { datePublished } : {}),
    ...(dateModified ? { dateModified } : {}),
    author: { '@type': 'Organization', name: 'KubeRocketCI Team' },
    publisher: { '@id': `${siteConfig.url}/#organization` },
    image: `${siteConfig.url}/img/kuberocketci-social-card.png`,
    inLanguage: 'en-GB',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonical,
    },
    url: canonical,
  };

  return (
    <>
      <Metadata {...props} />
      <Head>
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Head>
    </>
  );
}
