#!/usr/bin/env node
/**
 * Build-time check that every redirect in api/src/redirectMappings.ts ends on a
 * real page.
 *
 * Docusaurus `onBrokenLinks: 'throw'` covers Markdown links only; the redirect
 * map lives in the Azure Functions API and is never link-checked, so a typo in a
 * destination ships a 301 into a 404. Google treats that as a soft 404 and drops
 * the accumulated ranking of the source URL.
 *
 * Destinations are resolved the way api/src/functions/fallback.ts resolves a
 * request: a path with no built file falls through to the dropped-version rule,
 * then to another map entry. A chain is valid as long as it terminates on a
 * built page.
 *
 * Fails on:
 *  - a chain that dead-ends on a path with no built page
 *  - a redirect loop
 *  - a destination under /docs/next/ (the dev version canonicalizes to the
 *    unversioned latest URL, so redirects must target that URL directly)
 *
 * Reports without failing: chains longer than one hop. Each extra hop costs
 * latency and dilutes the ranking signal, so they are worth flattening, but
 * they resolve correctly and must not block a build.
 *
 * External destinations are skipped; the redirect handler allowlists them.
 *
 * Run after `npm run build`. Requires build/ to be present.
 */
const fs = require('fs');
const path = require('path');

const SITE_DIR = process.cwd();
const MAPPINGS_FILE = path.resolve(SITE_DIR, 'api/src/redirectMappings.ts');
const OUT_DIR = path.resolve(SITE_DIR, 'build');
const SITE_ORIGIN = 'https://docs.kuberocketci.io';

// Matches a `'source': 'destination',` entry. Anchored at the quote so the
// file's format comment (which starts with `*`) cannot be parsed as an entry.
const ENTRY = /^\s*'([^']+)'\s*:\s*'([^']+)'\s*,?\s*$/gm;

// Guards against a silent pass if the file is ever reformatted (e.g. to double
// quotes or a generated map) and the regex stops matching. Well below the
// current entry count, high enough that a broken parse cannot clear it.
const MIN_ENTRIES = 200;

// Mirrors the dropped-version rule in api/src/functions/fallback.ts.
const DOCS_VERSION = /^docs\/(next|\d+\.\d+)(?:\/(.+))?$/;

// Bounds chain resolution. Any real chain is 1-2 hops; a longer one is a
// mapping mistake worth surfacing as a failure.
const MAX_HOPS = 10;

function parseEntries(source) {
  const entries = [];
  let match;
  while ((match = ENTRY.exec(source)) !== null) {
    entries.push({ from: match[1], to: match[2] });
  }
  return entries;
}

// Strips origin, query and fragment. Returns null for external destinations.
function toInternalPath(destination) {
  let rest;
  if (/^https?:\/\//.test(destination)) {
    let parsed;
    try {
      parsed = new URL(destination);
    } catch {
      return null;
    }
    // Compare parsed origins, never a string prefix: SITE_ORIGIN is also a
    // prefix of https://docs.kuberocketci.io.example.com, a different host.
    if (parsed.origin !== SITE_ORIGIN) {
      return null;
    }
    rest = parsed.pathname;
  } else {
    rest = destination.startsWith('/') ? destination : `/${destination}`;
  }

  rest = rest.split('#')[0].split('?')[0];
  if (rest.length > 1) {
    rest = rest.replace(/\/+$/, '');
  }
  return rest || '/';
}

function isBuilt(internalPath) {
  if (internalPath === '/') {
    return fs.existsSync(path.join(OUT_DIR, 'index.html'));
  }
  const rel = internalPath.replace(/^\//, '');
  // Route forms first, then the literal file for static assets such as the
  // Search Console verification page. Never infer an extension: doc paths carry
  // version numbers (upgrade-edp-3.1), which path.extname reads as '.1'.
  return (
    fs.existsSync(path.join(OUT_DIR, `${rel}.html`)) ||
    fs.existsSync(path.join(OUT_DIR, rel, 'index.html')) ||
    fs.existsSync(path.join(OUT_DIR, rel))
  );
}

// Follows a destination to the page that finally serves it.
// Returns { status: 'ok' | 'dead-end' | 'loop', chain, hops }.
function resolveChain(startPath, redirects) {
  const chain = [startPath];
  const seen = new Set([startPath]);
  let current = startPath;

  for (let hop = 0; hop < MAX_HOPS; hop++) {
    if (isBuilt(current)) {
      return { status: 'ok', chain, hops: chain.length - 1 };
    }

    const key = current.replace(/^\//, '');
    let next = null;

    // fallback.ts applies the dropped-version rewrite before the map lookup.
    const versionMatch = key.match(DOCS_VERSION);
    if (versionMatch) {
      next = versionMatch[2] ? `/docs/${versionMatch[2]}` : '/docs';
    } else if (redirects.has(key)) {
      const mapped = toInternalPath(redirects.get(key));
      if (mapped === null) {
        return { status: 'ok', chain: [...chain, redirects.get(key)], hops: chain.length };
      }
      next = mapped;
    }

    if (next === null) {
      return { status: 'dead-end', chain, hops: chain.length - 1 };
    }
    if (seen.has(next)) {
      return { status: 'loop', chain: [...chain, next], hops: chain.length };
    }

    seen.add(next);
    chain.push(next);
    current = next;
  }

  return { status: 'loop', chain, hops: chain.length - 1 };
}

function main() {
  if (!fs.existsSync(OUT_DIR)) {
    console.error('[validate-redirects] build/ not found — run `npm run build` first');
    process.exit(1);
  }

  const entries = parseEntries(fs.readFileSync(MAPPINGS_FILE, 'utf8'));
  if (entries.length < MIN_ENTRIES) {
    console.error(
      `[validate-redirects] parsed only ${entries.length} entries (expected >= ${MIN_ENTRIES}) — ` +
        'the mapping file format changed and this check is no longer reading it'
    );
    process.exit(1);
  }

  const redirects = new Map(entries.map(({ from, to }) => [from, to]));
  const failures = [];
  const multiHop = [];
  let checked = 0;

  for (const { from, to } of entries) {
    const internalPath = toInternalPath(to);
    if (internalPath === null) continue;
    checked++;

    const versionMatch = internalPath.replace(/^\//, '').match(DOCS_VERSION);
    if (versionMatch && versionMatch[1] === 'next') {
      failures.push(
        `${from} -> ${to}\n    destination is a /docs/next/ URL; target the unversioned latest URL`
      );
      continue;
    }

    const result = resolveChain(internalPath, redirects);
    if (result.status === 'dead-end') {
      failures.push(`${from} -> ${to}\n    chain dead-ends at ${result.chain.join(' -> ')}`);
      continue;
    }
    if (result.status === 'loop') {
      failures.push(`${from} -> ${to}\n    redirect loop: ${result.chain.join(' -> ')}`);
      continue;
    }
    // hops > 0 means the mapped destination is not the page that finally
    // serves the request, so the browser takes a second redirect.
    if (result.hops > 0) {
      multiHop.push(`${from} -> ${result.chain.join(' -> ')}`);
    }
  }

  if (multiHop.length > 0) {
    console.log(`[validate-redirects] ${multiHop.length} multi-hop chain(s) — flatten when convenient:`);
    for (const chain of multiHop) {
      console.log(`  ${chain}`);
    }
    console.log('');
  }

  if (failures.length > 0) {
    console.error(`[validate-redirects] ${failures.length} broken redirect(s):\n`);
    for (const failure of failures) {
      console.error(`  ${failure}\n`);
    }
    process.exit(1);
  }

  console.log(
    `[validate-redirects] ${checked} internal redirect destination(s) OK ` +
      `(${entries.length - checked} external skipped)`
  );
}

main();
