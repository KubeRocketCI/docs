import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import { featuresList } from '../../constants';
import { PipelinePreview } from './PipelinePreview';
import styles from './styles.module.css';

export const Features = () => {
  return (
    <section className={styles.sectionWrapper}>
      <div className="container">
        <Heading as="h2" className={styles.sectionHeading}>
          Platform Capabilities
        </Heading>
        <p className={styles.sectionSubheading}>
          Everything you need to ship on Kubernetes — from first commit to production, with security built in.
        </p>

        <div className={styles.bento}>
          {featuresList.map(({ link, title, description, Svg, size }, idx) => {
            const isHero = size === 'hero';
            return (
              <Link key={`feature:${idx}`} href={link} className={clsx(styles.tile, isHero && styles.tileHero)}>
                <div className={styles.tileHeader}>
                  <span className={styles.iconWrap}>
                    <Svg className={styles.icon} role="img" />
                  </span>
                  <Heading as="h3" className={styles.title}>
                    {title}
                  </Heading>
                </div>
                <div className={styles.description}>{description}</div>
                {isHero && <PipelinePreview />}
                <span className={styles.cmd}>
                  <span className={styles.cmdPrompt}>▸</span>
                  <span className={styles.cmdText}>open</span>
                  <span className={styles.caret} aria-hidden="true" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
