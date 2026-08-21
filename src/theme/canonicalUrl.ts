/**
 * Single source of truth for canonical URL computation. Versioned and next
 * docs paths canonicalize to the unversioned latest URL, but only when the
 * page actually exists in the latest version — a canonical pointing at a 404
 * can get the page deindexed. Used by the SiteMetadata override (the
 * <link rel="canonical"> tag) and the DocItem Metadata override (JSON-LD),
 * so the two signals always agree.
 */
import { useMemo } from 'react';
import { useAllDocsData } from '@docusaurus/plugin-content-docs/client';

// /docs/3.14/foo -> /docs/foo, /docs/next/foo -> /docs/foo, /docs/next -> /docs
export function toLatestDocsPath(pathname: string): string {
  return pathname.replace(/^\/docs\/(?:next|\d+\.\d+)(?=\/|$)/, '/docs');
}

export function useLatestDocsPaths(): Set<string> {
  const allDocsData = useAllDocsData();
  return useMemo(() => {
    const latest = allDocsData.default?.versions.find(v => v.isLast);
    return new Set(latest ? latest.docs.map(d => d.path) : []);
  }, [allDocsData]);
}

// Hooks cannot be called per item, so callers that canonicalize a list of
// paths (breadcrumb trails) take the resolver and apply it themselves.
export function useCanonicalPathResolver(): (pathname: string) => string {
  const latestPaths = useLatestDocsPaths();
  return useMemo(
    () => (pathname: string) => {
      const candidate = toLatestDocsPath(pathname);
      if (candidate === pathname) {
        return pathname;
      }
      return latestPaths.has(candidate) ? candidate : pathname;
    },
    [latestPaths]
  );
}

export function useCanonicalPath(pathname: string): string {
  return useCanonicalPathResolver()(pathname);
}
