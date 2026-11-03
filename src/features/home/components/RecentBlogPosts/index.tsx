import Link from '@docusaurus/Link';
import { usePluginData } from '@docusaurus/useGlobalData';
import clsx from 'clsx';
import { SectionHeader } from '../SectionHeader';
import { TerminalCard } from '../TerminalCard';
import styles from './styles.module.css';

type RecentPost = {
  title: string;
  description: string;
  permalink: string;
  date: string;
  formattedDate: string;
};

export const RecentBlogPosts = () => {
  const data = usePluginData('recent-blog-posts') as { posts?: RecentPost[] } | undefined;
  const posts = data?.posts ?? [];

  if (posts.length === 0) {
    return null;
  }

  return (
    <section className={styles.sectionWrapper}>
      <div className="container">
        <SectionHeader title="From the Blog">
          CI/CD, DevOps, and Kubernetes insights from the team building KubeRocketCI.
        </SectionHeader>
        <div className="row">
          {posts.map(post => {
            const titleId = `post-title-${post.permalink.replace(/[^a-z0-9]+/gi, '-')}`;
            return (
              <div key={post.permalink} className={clsx('col col--4', styles.gridItem)}>
                <article className={styles.article}>
                  <TerminalCard href={post.permalink} command="read" labelledBy={titleId}>
                    {post.formattedDate && (
                      <time className={styles.date} dateTime={post.date}>
                        {post.formattedDate}
                      </time>
                    )}
                    {/* Plain h3: Docusaurus Heading adds an anchor link, which cannot nest inside the card link. */}
                    <h3 id={titleId} className={styles.title}>
                      {post.title}
                    </h3>
                    {post.description && <p className={styles.description}>{post.description}</p>}
                  </TerminalCard>
                </article>
              </div>
            );
          })}
        </div>
        <div className={styles.viewAll}>
          <Link href="/blog" className={clsx('button', 'button--lg', styles.viewBtn)}>
            View all posts
          </Link>
        </div>
      </div>
    </section>
  );
};
