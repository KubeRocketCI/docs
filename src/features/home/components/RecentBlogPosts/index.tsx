import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import { usePluginData } from '@docusaurus/useGlobalData';
import clsx from 'clsx';
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
        <Heading as="h2" className={styles.sectionHeading}>
          From the Blog
        </Heading>
        <p className={styles.sectionSubheading}>
          CI/CD, DevOps, and Kubernetes insights from the team building KubeRocketCI.
        </p>
        <div className="row">
          {posts.map((post, idx) => (
            <div key={`post:${idx}`} className={clsx('col col--4', styles.gridItem)}>
              <Link href={post.permalink} className={styles.card}>
                <article className={styles.article}>
                  {post.formattedDate && (
                    <time className={styles.date} dateTime={post.date}>
                      {post.formattedDate}
                    </time>
                  )}
                  <Heading as="h3" className={styles.title}>
                    {post.title}
                  </Heading>
                  {post.description && <p className={styles.description}>{post.description}</p>}
                  <span className={styles.cmd}>
                    <span className={styles.cmdPrompt}>▸</span>
                    <span className={styles.cmdText}>read</span>
                    <span className={styles.caret} aria-hidden="true" />
                  </span>
                </article>
              </Link>
            </div>
          ))}
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
