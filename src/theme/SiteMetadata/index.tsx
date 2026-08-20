/**
 * Ejected from @docusaurus/theme-classic to fix canonical URLs on versioned
 * docs. The stock component emits a self-referencing <link rel="canonical">
 * on every page, which conflicts with the hand-written canonical tags that
 * point versioned pages (/docs/3.x/*, /docs/next/*) at the unversioned
 * latest URL. Conflicting canonicals make Google ignore both. This copy
 * normalizes the canonical (and og:url) to the unversioned /docs/* path so
 * every canonical signal on the site agrees.
 */
import React, { useMemo } from 'react';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { PageMetadata, useThemeConfig } from '@docusaurus/theme-common';
import { DEFAULT_SEARCH_TAG, useAlternatePageUtils } from '@docusaurus/theme-common/internal';
import { useAllDocsData } from '@docusaurus/plugin-content-docs/client';
import { useLocation } from '@docusaurus/router';
import { applyTrailingSlash } from '@docusaurus/utils-common';
import SearchMetadata from '@theme/SearchMetadata';

// Versioned and next docs URLs canonicalize to the unversioned latest URL:
// /docs/3.14/foo -> /docs/foo, /docs/next/foo -> /docs/foo, /docs/next -> /docs
function toLatestDocsPath(pathname: string): string {
  return pathname.replace(/^\/docs\/(?:next|\d+\.\d+)(?=\/|$)/, '/docs');
}

function useLatestDocsPaths(): Set<string> {
  const allDocsData = useAllDocsData();
  return useMemo(() => {
    const latest = allDocsData.default?.versions.find(v => v.isLast);
    return new Set(latest ? latest.docs.map(d => d.path) : []);
  }, [allDocsData]);
}

// Rewrite to the latest URL only when the page actually exists in the latest
// version — otherwise the canonical would point at a 404 and the page could
// be deindexed. Pages without a latest counterpart keep self-canonicals.
function useCanonicalPathname(): string {
  const { pathname } = useLocation();
  const latestPaths = useLatestDocsPaths();
  const candidate = toLatestDocsPath(pathname);
  if (candidate === pathname) {
    return pathname;
  }
  return latestPaths.has(candidate) ? candidate : pathname;
}

function AlternateLangHeaders(): React.JSX.Element {
  const {
    i18n: { currentLocale, defaultLocale, localeConfigs },
  } = useDocusaurusContext();
  const alternatePageUtils = useAlternatePageUtils();
  const currentHtmlLang = localeConfigs[currentLocale]!.htmlLang;
  const bcp47ToOpenGraphLocale = (code: string): string => code.replace('-', '_');
  return (
    <Head>
      {Object.entries(localeConfigs).map(([locale, { htmlLang }]) => (
        <link
          key={locale}
          rel="alternate"
          href={alternatePageUtils.createUrl({ locale, fullyQualified: true })}
          hrefLang={htmlLang}
        />
      ))}
      <link
        rel="alternate"
        href={alternatePageUtils.createUrl({
          locale: defaultLocale,
          fullyQualified: true,
        })}
        hrefLang="x-default"
      />
      <meta property="og:locale" content={bcp47ToOpenGraphLocale(currentHtmlLang)} />
      {Object.values(localeConfigs)
        .filter(config => currentHtmlLang !== config.htmlLang)
        .map(config => (
          <meta
            key={`meta-og-${config.htmlLang}`}
            property="og:locale:alternate"
            content={bcp47ToOpenGraphLocale(config.htmlLang)}
          />
        ))}
    </Head>
  );
}

function useDefaultCanonicalUrl(): string {
  const {
    siteConfig: { url: siteUrl, baseUrl, trailingSlash },
  } = useDocusaurusContext();
  const canonicalPathname = applyTrailingSlash(useBaseUrl(useCanonicalPathname()), {
    trailingSlash,
    baseUrl,
  });
  return siteUrl + canonicalPathname;
}

function CanonicalUrlHeaders(): React.JSX.Element {
  const canonicalUrl = useDefaultCanonicalUrl();
  return (
    <Head>
      <meta property="og:url" content={canonicalUrl} />
      <link rel="canonical" href={canonicalUrl} />
    </Head>
  );
}

export default function SiteMetadata(): React.JSX.Element {
  const {
    i18n: { currentLocale },
  } = useDocusaurusContext();
  const { metadata, image: defaultImage } = useThemeConfig();
  return (
    <>
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <body />
      </Head>

      {defaultImage && <PageMetadata image={defaultImage} />}

      <CanonicalUrlHeaders />

      <AlternateLangHeaders />

      <SearchMetadata tag={DEFAULT_SEARCH_TAG} locale={currentLocale} />

      <Head>
        {metadata.map((metadatum, i) => (
          <meta key={i} {...metadatum} />
        ))}
      </Head>
    </>
  );
}
