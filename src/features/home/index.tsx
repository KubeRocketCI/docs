import Head from '@docusaurus/Head';
import Layout from '@theme/Layout';
import { Hero } from './components/Hero';
import { Features } from './components/Features';

export const Home = () => {
  return (
    <Layout
      title="KubeRocketCI Documentation: Cloud-Native CI/CD on Kubernetes"
      description="Documentation for KubeRocketCI — an open-source CI/CD platform on Kubernetes. Quick-start, operator and user guides, and references for Tekton, Argo CD and DevSecOps."
    >
      <Head>
        <link rel="canonical" href="https://docs.kuberocketci.io" />
      </Head>
      <Hero />
      <Features />
    </Layout>
  );
};
