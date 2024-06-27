import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        Boost your delivery with the development culture based on the modern CI/CD stack, golden path and self-service capabilities of the EPAM Delivery Platform (EDP).
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/about-platform">
            Getting Started
          </Link>
        </div>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="mailto:SupportEPMD-EDP@epam.com?subject=EDP Demo Request">
            Request Demo
          </Link>
        </div>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="https://www.youtube.com/embed/Xsy1UKMb8vg">
            Watch teaser
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Experience seamless software delivery with KubeRocketCI, your go-to cloud-native solution. Leverage our Kubernetes Native approach for efficient creation, management, and deployment of applications <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
