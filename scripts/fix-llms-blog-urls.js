#!/usr/bin/env node
/**
 * Post-build safeguard for docusaurus-plugin-llms blog URLs.
 *
 * Up to v0.3.0 the llms plugin built blog URLs from the dated source path
 * (e.g. /blog/2026-06-06/try-kuberocketci-locally) and ignored each post's
 * custom `slug` frontmatter — so those URLs 404'd. v0.4.0 (the version pinned in
 * package.json) honours `slug` and already emits canonical permalinks, so on a
 * normal build this script finds nothing to rewrite and is a no-op.
 *
 * It is kept as a defensive net: if the plugin regresses or is downgraded, this
 * rewrites the dated blog paths in build/llms.txt and build/llms-full.txt back to
 * the canonical slug-based permalinks, using the real frontmatter mapping (so it
 * stays correct even when a post's filename differs from its slug). It runs as an
 * npm `postbuild` step rather than a plugin postBuild hook, which Docusaurus runs
 * concurrently (it would race the llms plugin's own write). The rewrite is
 * path-based (domain-agnostic) and idempotent.
 */
const fs = require('fs');
const path = require('path');
const globby = require('globby');
const matter = require('gray-matter');

const SITE_DIR = process.cwd();
const BLOG_DIR = path.resolve(SITE_DIR, 'blog');
const OUT_DIR = path.resolve(SITE_DIR, 'build');
const ROUTE_BASE = 'blog';
const TARGET_FILES = ['llms.txt', 'llms-full.txt'];
const DATE_IN_PATH = /(\d{4})-(\d{2})-(\d{2})/;

function buildReplacements() {
  const files = globby.sync(['**/*.md', '**/*.mdx'], { cwd: BLOG_DIR });
  const map = [];

  for (const rel of files) {
    let data;
    try {
      data = matter(fs.readFileSync(path.join(BLOG_DIR, rel), 'utf8')).data || {};
    } catch {
      continue;
    }

    const relNoExt = rel.replace(/\.[^.]+$/, '');
    const datedPath = `/${ROUTE_BASE}/${relNoExt}`;

    let slug = data.slug;
    if (!slug) {
      slug = path
        .basename(relNoExt)
        .replace(DATE_IN_PATH, '')
        .replace(/^[-/]+/, '');
    }
    slug = String(slug).replace(/^\/+/, '').trim();
    // A date-only filename with no slug reduces to '' — its canonical path would
    // be the blog index, which must not replace a real post URL. Skip it.
    if (!slug) continue;
    const canonicalPath = `/${ROUTE_BASE}/${slug}`;

    if (datedPath !== canonicalPath) {
      map.push({ from: datedPath, to: canonicalPath });
    }
  }

  // Replace longer paths first so a path that is a prefix of another can't
  // partially rewrite it.
  return map.sort((a, b) => b.from.length - a.from.length);
}

function main() {
  if (!fs.existsSync(BLOG_DIR)) return;

  // Skip the blog glob/parse entirely if there's nothing to rewrite.
  const targets = TARGET_FILES.map(f => path.join(OUT_DIR, f)).filter(f => fs.existsSync(f));
  if (targets.length === 0) return; // e.g. generateLLMsTxt disabled

  const replacements = buildReplacements();
  if (replacements.length === 0) return;

  let totalChanged = 0;
  for (const filePath of targets) {
    let contents = fs.readFileSync(filePath, 'utf8');
    let changed = 0;
    for (const { from, to } of replacements) {
      if (!contents.includes(from)) continue; // common v0.4.0 path: already canonical
      const parts = contents.split(from);
      changed += parts.length - 1;
      contents = parts.join(to);
    }
    if (changed > 0) {
      fs.writeFileSync(filePath, contents);
      totalChanged += changed;
      console.log(
        `[fix-llms-blog-urls] ${path.basename(filePath)}: rewrote ${changed} blog URL(s) to canonical permalinks`
      );
    }
  }

  if (totalChanged === 0) {
    console.log('[fix-llms-blog-urls] no dated blog URLs found (already canonical)');
  }
}

main();
