import Layout from '@theme/Layout';
import { Hero } from './components/Hero';
import { GetStarted } from './components/GetStarted';
import { Features } from './components/Features';
import { RecentBlogPosts } from './components/RecentBlogPosts';

export const Home = () => {
  return (
    <Layout
      title="Cloud-Native CI/CD for Engineers and AI Agents"
      description="Documentation for KubeRocketCI — CI/CD on Kubernetes for engineers and AI agents. Quick-start, operator and user guides, Tekton, Argo CD and DevSecOps."
    >
      <Hero />
      <GetStarted />
      <Features />
      <RecentBlogPosts />
    </Layout>
  );
};
