const fs = require('fs');
const path = require('path');
const globby = require('globby');
const matter = require('gray-matter');

const DATE_IN_PATH = /(\d{4})-(\d{2})-(\d{2})/;

// Format in UTC so the day never drifts across the build machine's timezone.
const dateFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'long',
  day: 'numeric',
  year: 'numeric',
  timeZone: 'UTC',
});
function formatDate(iso) {
  return dateFormatter.format(new Date(iso));
}

/**
 * Reads blog frontmatter at build time and exposes the N most recent posts as
 * global data (consumed by the landing-page "From the Blog" section). Keeping
 * this server-side means the section self-updates on every publish — no manual
 * curation, and the links live in main content where they carry real SEO weight.
 *
 * @param {import('@docusaurus/types').LoadContext} context
 * @param {{ blogDir?: string, routeBasePath?: string, limit?: number }} options
 * @returns {import('@docusaurus/types').Plugin}
 */
module.exports = function recentBlogPostsPlugin(context, options) {
  const { blogDir = 'blog', routeBasePath = 'blog', limit = 3 } = options || {};

  return {
    name: 'recent-blog-posts',

    async loadContent() {
      const absBlogDir = path.resolve(context.siteDir, blogDir);

      let files = [];
      try {
        files = await globby(['**/*.md', '**/*.mdx'], { cwd: absBlogDir });
      } catch {
        return { posts: [] };
      }

      const posts = files
        .map(rel => {
          let data;
          try {
            data = matter(fs.readFileSync(path.join(absBlogDir, rel), 'utf8')).data || {};
          } catch {
            return null;
          }

          if (data.draft || data.unlisted) return null;

          // Date: prefer explicit frontmatter, fall back to the YYYY-MM-DD in the path.
          let iso = null;
          if (data.date) {
            const d = new Date(data.date);
            if (!Number.isNaN(d.getTime())) iso = d.toISOString();
          }
          if (!iso) {
            const m = rel.match(DATE_IN_PATH);
            if (m) iso = new Date(`${m[1]}-${m[2]}-${m[3]}T00:00:00Z`).toISOString();
          }
          if (!iso) return null;

          // Permalink: honour frontmatter slug, else derive from the filename.
          let slug = data.slug;
          if (!slug) {
            slug = path
              .basename(rel, path.extname(rel))
              .replace(DATE_IN_PATH, '')
              .replace(/^[-/]+/, '');
          }
          slug = String(slug).replace(/^\/+/, '').trim();
          // A date-only filename (e.g. 2026-07-01.md) with no slug frontmatter
          // reduces to '' here and would link at the blog index — skip it.
          if (!slug) return null;
          const permalink = `/${routeBasePath}/${slug}`;

          return {
            title: data.title || slug,
            description: data.description || '',
            permalink,
            date: iso,
            formattedDate: formatDate(iso),
          };
        })
        .filter(Boolean)
        // date is an ISO UTC string, so a plain string compare is chronological.
        .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0))
        .slice(0, limit);

      return { posts };
    },

    async contentLoaded({ content, actions }) {
      actions.setGlobalData(content || { posts: [] });
    },
  };
};
