/**
 * Replaces the stock breadcrumb JSON-LD so its ListItem URLs agree with the
 * <link rel="canonical"> tag and the TechArticle JSON-LD. The stock component
 * emits the versioned permalink of every crumb, so a versioned page claimed
 * /docs/foo as its canonical while its breadcrumb trail pointed at
 * /docs/3.14/foo. Contradictory URL signals make Google discard the trail.
 *
 * This replaces the original instead of wrapping it: a wrapper would leave the
 * stock BreadcrumbList in the head next to this one.
 */
import React from 'react';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import type { Props } from '@theme/DocBreadcrumbs/StructuredData';
import { useCanonicalPathResolver } from '../../canonicalUrl';

export default function DocBreadcrumbsStructuredData({ breadcrumbs }: Props): React.JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const toCanonicalPath = useCanonicalPathResolver();

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    // Crumbs without a link are not valid ListItems, matching upstream.
    itemListElement: breadcrumbs
      .filter(breadcrumb => breadcrumb.href)
      .map((breadcrumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: breadcrumb.label,
        item: `${siteConfig.url}${toCanonicalPath(breadcrumb.href!)}`,
      })),
  };

  return (
    <Head>
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </Head>
  );
}
