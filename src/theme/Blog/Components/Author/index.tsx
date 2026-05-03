// Eject-swizzled from `@docusaurus/theme-classic` (Docusaurus 3.10).
// Difference vs upstream: the avatar `<img>` carries `loading="lazy"` and
// `decoding="async"` so listing pages do not eagerly fetch every author PNG.
// Re-sync with upstream if Docusaurus changes the upstream component.
import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import AuthorSocials from '@theme/Blog/Components/Author/Socials';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

function MaybeLink(props) {
  if (props.href) {
    return <Link {...props} />;
  }
  return <>{props.children}</>;
}

function AuthorTitle({ title }) {
  return (
    <small className={styles.authorTitle} title={title}>
      {title}
    </small>
  );
}

function AuthorName({ name, as }) {
  if (!as) {
    return (
      <span className={styles.authorName} translate="no">
        {name}
      </span>
    );
  }
  return (
    <Heading as={as} className={styles.authorName} translate="no">
      {name}
    </Heading>
  );
}

function AuthorBlogPostCount({ count }) {
  return <span className={clsx(styles.authorBlogPostCount)}>{count}</span>;
}

export default function BlogAuthor({ as, author, className, count }) {
  const { name, title, url, imageURL, email, page } = author;
  const link = page?.permalink || url || (email && `mailto:${email}`) || undefined;
  return (
    <div className={clsx('avatar margin-bottom--sm', className, styles[`author-as-${as}`])}>
      {imageURL && (
        <MaybeLink href={link} className="avatar__photo-link">
          <img
            className={clsx('avatar__photo', styles.authorImage)}
            src={imageURL}
            alt={name}
            loading="lazy"
            decoding="async"
          />
        </MaybeLink>
      )}

      {(name || title) && (
        <div className={clsx('avatar__intro', styles.authorDetails)}>
          <div className="avatar__name">
            {name && (
              <MaybeLink href={link}>
                <AuthorName name={name} as={as} />
              </MaybeLink>
            )}
            {count !== undefined && <AuthorBlogPostCount count={count} />}
          </div>
          {!!title && <AuthorTitle title={title} />}

          {/* Always render AuthorSocials so other layout columns stay aligned */}
          <AuthorSocials author={author} />
        </div>
      )}
    </div>
  );
}
