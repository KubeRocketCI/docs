import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { Hero } from './components/Hero';
import { Features } from './components/Features';

export const Home = () => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Experience seamless software delivery with KubeRocketCI, your go-to cloud-native solution. Leverage our Kubernetes Native approach for efficient creation, management, and deployment of applications <head />"
    >
      <Hero />
      <Features />
    </Layout>
  );
};
