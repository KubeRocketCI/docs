/**
 * Reports dead URLs to analytics. The Azure fallback serves the prerendered
 * 404.html at the originally requested URL (no redirect to /404), so the
 * failed path is still in the address bar and can be attributed to broken
 * links. The push is an inline script rendered via <Head> — it is baked into
 * the static 404.html and runs on plain page load; a React effect would not,
 * because the served 404.html never lazy-loads the NotFound route chunk.
 * The per-path guard prevents a duplicate push when React hydrates and
 * re-mounts the head tags.
 *
 * GTM must map this to a GA4 event before it appears in reports:
 * 1. GTM: add a Custom Event trigger for event name `page_not_found`.
 * 2. GTM: add a GA4 Event tag on that trigger, forwarding the
 *    `not_found_path` and `not_found_referrer` dataLayer variables.
 * 3. GA4 Admin: register both parameters as custom dimensions.
 */
import React from 'react';
import Head from '@docusaurus/Head';
import NotFound from '@theme-original/NotFound';

const REPORT_SNIPPET = `(function () {
  if (window.__nfReportedPath === location.pathname) return;
  window.__nfReportedPath = location.pathname;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'page_not_found',
    not_found_path: location.pathname,
    not_found_referrer: document.referrer,
  });
})();`;

export default function NotFoundWrapper(props: React.ComponentProps<typeof NotFound>) {
  return (
    <>
      <Head>
        <script>{REPORT_SNIPPET}</script>
      </Head>
      <NotFound {...props} />
    </>
  );
}
