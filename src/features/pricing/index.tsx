import React from 'react';
import Layout from '@theme/Layout';
import { PricingCard } from './components/Card';
import { pricingList } from './constants';
import styles from './styles.module.css';
import { Note } from '../../components/Note';
import { FeaturesTable } from './components/FeaturesTable';

export const Pricing = () => {
  return (
    <Layout title="Professional Service Pricing" description="Professional Service Pricing">
      <section className={styles.sectionWrapper}>
        <div className="container">
          <h1 className={styles.sectionTitle}>Professional Service Pricing</h1>
          <div className={styles.sectionDescription}>
            Experience the flexibility of deploying KubeRocketCI on your on-premises infrastructure or in
            the Cloud. Your valuable data stays securely within your perimeter, ensuring uncompromising security at
            every step.
          </div>

          <div className={styles.pricingGrid}>
            {pricingList.map((el, idx) => (
              <div className={styles.pricingGridItem}>
                <PricingCard key={`card:${idx}`} {...el} />
              </div>
            ))}
          </div>

          <Note>
            Professional service hours are versatile, blended hours bundled within your subscription plan.
            They encompass expertise from diverse specialists, including business analysts, architects, lead automation engineers, DevOps (System Engineers), and performance engineers.
            These multi-functional hours cater to KubeRocketCI installation, configuration, integration, customization, feature implementation, updates, and use case implementation.
            They empower you to leverage a range of expertise for various aspects of optimizing and enhancing your KubeRocketCI experience.
          </Note>

          <Note>
            Minimum commitment of time for use of a certain subscription package.
          </Note>

          <FeaturesTable />

          <Note>
            The values presented in the table are provided for reference purposes only and are subject to change based
            on the final scope of the work. Please note that these figures serve as estimates and may be adjusted
            accordingly as the project details are finalized.
          </Note>
        </div>
      </section>
    </Layout>
  );
};
