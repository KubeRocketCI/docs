import Layout from '@theme/Layout';
import { Hero } from './components/Hero';
import { GetStarted } from './components/GetStarted';
import { Features } from './components/Features';
import { RecentBlogPosts } from './components/RecentBlogPosts';

export const Home = () => {
  return (
    <Layout
      title="Cloud-Native CI/CD on Kubernetes"
      description="Documentation for KubeRocketCI — an open-source CI/CD platform on Kubernetes. Quick-start, operator and user guides, and references for Tekton, Argo CD and DevSecOps."
    >
      <Hero />
      <GetStarted />
      <Features />
      <RecentBlogPosts />
    </Layout>
  );
};
