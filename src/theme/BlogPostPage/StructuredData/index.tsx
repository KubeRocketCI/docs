import React from 'react';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useBlogPostStructuredData } from '@docusaurus/plugin-content-blog/client';

export default function BlogPostPageStructuredData(): React.JSX.Element {
  const defaultStructuredData = useBlogPostStructuredData();
  const { siteConfig } = useDocusaurusContext();

  const enhancedStructuredData = {
    ...defaultStructuredData,
    publisher: { '@id': `${siteConfig.url}/#organization` },
    inLanguage: 'en-GB',
  };

  return (
    <Head>
      <script type="application/ld+json">{JSON.stringify(enhancedStructuredData)}</script>
    </Head>
  );
}
