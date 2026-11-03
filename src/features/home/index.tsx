import Layout from '@theme/Layout';
import { Hero } from './components/Hero';
import { TaskRouter } from './components/TaskRouter';
import { AgentPath } from './components/AgentPath';
import { GetStarted } from './components/GetStarted';
import { RecentBlogPosts } from './components/RecentBlogPosts';

export const Home = () => {
  return (
    <Layout
      title="Cloud-Native CI/CD for Engineers and AI Agents"
      description="Documentation for KubeRocketCI — CI/CD on Kubernetes for engineers and AI agents. Quick-start, operator and user guides, Tekton, Argo CD and DevSecOps."
    >
      <main>
        <Hero />
        <GetStarted />
        <TaskRouter />
        <AgentPath />
        <RecentBlogPosts />
      </main>
    </Layout>
  );
};
