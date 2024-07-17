import React from 'react';
import Layout from '@theme/Layout';
import './pricing.css';
import { PricingCard } from './components/Card';
import { pricingList } from './constants';
import styles from './styles.module.css';

export const Pricing = () => {
  return (
    <Layout title="Professional Service Pricing" description="Professional Service Pricing">
      <section className={styles.sectionWrapper}>
        <div className="container">
          <div className="md-grid">
            <div className="section__content">
              <h1 className="h1">Professional Service Pricing</h1>
              <p className="page-description">
                Experience the flexibility of deploying the KubeRocketCI on your on-premises infrastructure or in the
                Cloud. Your valuable data remains securely within your perimeter, ensuring uncompromising security at
                every step.
              </p>

              <div className="pricing-grid">
                {pricingList.map((el, idx) => (
                  <div className="pricing-grid__item">
                    <PricingCard key={`card:${idx}`} {...el} />
                  </div>
                ))}
              </div>

              <p className="definition">
                <sup>*</sup>
                Professional service hours are versatile blended hours bundled within your subscription plan,
                encompassing expertise from diverse specialists such as business analysts, architects, lead automation
                engineers, DevOps (System Engineers), and performance engineers. These multi-functional hours cater to
                KubeRocketCI installation, configuration, integration, customization, feature implementation, updates,
                and use case implementation. They empower you to leverage a range of expertise for various aspects of
                optimizing and enhancing your KubeRocketCI experience.
              </p>
              <p className="definition">
                <sup>**</sup>
                Minimum commitment of time for use of a certain subscription package.
              </p>

              <div className="table-wrapper">
                <table className="table table--services">
                  <thead>
                    <tr>
                      <th>Service Category</th>
                      <th>Description</th>
                      <th>Professional Service Hours*</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td rowSpan={7}>
                        <div className="table__cell-label">Deployment, Installation, Configuration</div>
                      </td>
                      <td>
                        Deploy Platform with Minimum Components in the existing Kubernetes Cluster: CI/CD, integration
                        with existing SonarQube, Repository Manager, Container Registry
                      </td>
                      <td>60</td>
                    </tr>
                    <tr>
                      <td>
                        Deploy Platform in an empty AWS Account, including components: Infrastructure, CI/CD, SSO
                        integration, SonarQube, DependencyTrack, Nexus Repository, DefectDojo, Logging, Monitoring,
                        Docker registry, Observability
                      </td>
                      <td>8</td>
                    </tr>
                    <tr>
                      <td>
                        Traceability and Observability customization: Storage backend configuration, performance tunning
                      </td>
                      <td>40</td>
                    </tr>
                    <tr>
                      <td>Monitoring stack customization: Custom Dashboards, Alerts, Notifications</td>
                      <td>40</td>
                    </tr>
                    <tr>
                      <td>
                        Logging stack customization: Custom filters and processing for fluent-bit, logs rotation policy
                        tunning
                      </td>
                      <td>40</td>
                    </tr>
                    <tr>
                      <td>SonarQube Quality Gate and Quality Profile configuration</td>
                      <td>8</td>
                    </tr>
                    <tr>
                      <td>Security (SAST/SCA) report analysis per single codebase</td>
                      <td>8</td>
                    </tr>
                    <tr>
                      <td rowSpan={2}>
                        <div className="table__cell-label">Framework/Language</div>
                      </td>
                      <td>
                        Onboard new Framework or Build tool with CI Pipelines: Implement KubeRocketCI standard CI
                        Pipeline steps (build, test, lint, push)
                      </td>
                      <td>40</td>
                    </tr>
                    <tr>
                      <td>
                        Marketplace Template Development: Create new Template, Implement KubeRocketCI standard CI
                        Pipeline steps (build, test, lint, push)
                      </td>
                      <td>40</td>
                    </tr>
                    <tr>
                      <td rowSpan={3}>
                        <div className="table__cell-label">Custom Tool Integration</div>
                      </td>
                      <td>Integrate custom tool with CI Pipeline over API</td>
                      <td>30</td>
                    </tr>
                    <tr>
                      <td>Integrate custom tool with KubeRocketCI Portal UI over Kubernetes API</td>
                      <td>40</td>
                    </tr>
                    <tr>
                      <td>Integrate custom tool with KubeRocketCI Portal UI over API</td>
                      <td>80</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="table__cell-label">Target Deployment Platform customization</div>
                      </td>
                      <td>Add Custom Deployment Platform: Implement custom CD Pipeline</td>
                      <td>80</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="definition">
                <sup>*</sup>
                The values presented in the table are provided for reference purposes only and are subject to change
                based on the final scope of the work. Please note that these figures serve as estimates and may be
                adjusted accordingly as the project details are finalized.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
