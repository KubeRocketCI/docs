import React from "react";
import Layout from "@theme/Layout";
import CheckIcon from "@mui/icons-material/Check";
import "./pricing.css";

export default function Hello() {
  return (
    <Layout title="Hello" description="Pricing">
      <section className="section section--pricing gradient-to-bottom">
        <div className="md-grid">
          <div className="section__content">
            <h1 className="h1">Pricing</h1>
            <p className="page-description">
              Experience the flexibility of deploying the EPAM Delivery Platform
              on your on-premises infrastructure or in the Cloud. Your valuable
              data remains securely within your perimeter, ensuring
              uncompromising security at every step.
            </p>

            <div className="pricing-grid">
              <div className="pricing-grid__item">
                <div className="pricing-card">
                  <div className="pricing-card__content">
                    <div className="pricing-card__name">Open Source</div>
                    <div className="pricing-card__price">Free</div>
                    <div className="pricing-card__description">
                      The essentials for when you're just getting started.
                    </div>
                  </div>
                  <div className="pricing-card__footer">
                    <a href="/edp-install/getting-started" className="button">
                      start
                    </a>
                  </div>
                </div>
              </div>
              <div className="pricing-grid__item">
                <div className="pricing-card">
                  <div className="pricing-card__content">
                    <div className="pricing-card__name">Team</div>
                    <div className="pricing-card__price">
                      $3,000
                      <span>/month</span>
                    </div>
                    <div className="pricing-card__description">
                      The essentials for when you're just getting started.
                    </div>
                    <ul className="pricing-card__features">
                      <li className="pricing-card__feature">
                        <span className="twemoji pricing-card__feature-marker">
                          <CheckIcon />
                        </span>
                        25 professional service hours <sup>*</sup>
                      </li>
                      <li className="pricing-card__feature">
                        <span className="twemoji pricing-card__feature-marker">
                          <CheckIcon />
                        </span>
                        6 month minimum commitment <sup>**</sup>
                      </li>
                    </ul>
                  </div>
                  <div className="pricing-card__footer">
                    <a
                      href="mailto:SupportEPMD-EDP@epam.com"
                      className="button"
                    >
                      contact us
                    </a>
                  </div>
                </div>
              </div>
              <div className="pricing-grid__item">
                <div className="pricing-card">
                  <div className="pricing-card__content">
                    <div className="pricing-card__name">Stream</div>
                    <div className="pricing-card__price">
                      $6,000
                      <span>/month</span>
                    </div>
                    <div className="pricing-card__description">
                      The essentials for when you're just getting started.
                    </div>
                    <ul className="pricing-card__features">
                      <li className="pricing-card__feature">
                        <span className="twemoji pricing-card__feature-marker">
                          <CheckIcon />
                        </span>
                        60 professional service hours <sup>*</sup>
                      </li>
                      <li className="pricing-card__feature">
                        <span className="twemoji pricing-card__feature-marker">
                          <CheckIcon />
                        </span>
                        6 month minimum commitment <sup>**</sup>
                      </li>
                    </ul>
                  </div>
                  <div className="pricing-card__footer">
                    <a
                      href="mailto:SupportEPMD-EDP@epam.com"
                      className="button"
                    >
                      contact us
                    </a>
                  </div>
                </div>
              </div>
              <div className="pricing-grid__item">
                <div className="pricing-card">
                  <div className="pricing-card__content">
                    <div className="pricing-card__name">Enterprise</div>
                    <div className="pricing-card__price">
                      $13,000
                      <span>/month</span>
                    </div>
                    <div className="pricing-card__description">
                      The essentials for when you're just getting started.
                    </div>
                    <ul className="pricing-card__features">
                      <li className="pricing-card__feature">
                        <span className="twemoji pricing-card__feature-marker">
                          <CheckIcon />
                        </span>
                        160 professional service hours <sup>*</sup>
                      </li>
                      <li className="pricing-card__feature">
                        <span className="twemoji pricing-card__feature-marker">
                          <CheckIcon />
                        </span>
                        3 month minimum commitment <sup>**</sup>
                      </li>
                    </ul>
                  </div>
                  <div className="pricing-card__footer">
                    <a
                      href="mailto:SupportEPMD-EDP@epam.com"
                      className="button"
                    >
                      contact us
                    </a>
                  </div>
                </div>
              </div>
            </div>

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
                      <div className="table__cell-label">
                        Deployment, Installation, Configuration
                      </div>
                    </td>
                    <td>
                      Deploy Platform with Minimum Components in the existing
                      Kubernetes Cluster: CI/CD, integration with existing
                      SonarQube, Repository Manager, Container Registry
                    </td>
                    <td>60</td>
                  </tr>
                  <tr>
                    <td>
                      Deploy Platform in an empty AWS Account, including
                      components: Infrastructure, CI/CD, SSO integration,
                      SonarQube, DependencyTrack, Nexus Repository, DefectDojo,
                      Logging, Monitoring, Docker registry, Observability
                    </td>
                    <td>8</td>
                  </tr>
                  <tr>
                    <td>
                      Traceability and Observability customization: Storage
                      backend configuration, performance tunning
                    </td>
                    <td>40</td>
                  </tr>
                  <tr>
                    <td>
                      Monitoring stack customization: Custom Dashboards, Alerts,
                      Notifications
                    </td>
                    <td>40</td>
                  </tr>
                  <tr>
                    <td>
                      Logging stack customization: Custom filters and processing
                      for fluent-bit, logs rotation policy tunning
                    </td>
                    <td>40</td>
                  </tr>
                  <tr>
                    <td>
                      SonarQube Quality Gate and Quality Profile configuration
                    </td>
                    <td>8</td>
                  </tr>
                  <tr>
                    <td>
                      Security (SAST/SCA) report analysis per single codebase
                    </td>
                    <td>8</td>
                  </tr>
                  <tr>
                    <td rowSpan={2}>
                      <div className="table__cell-label">
                        Framework/Language
                      </div>
                    </td>
                    <td>
                      Onboard new Framework or Build tool with CI Pipelines:
                      Implement EDP standard CI Pipeline steps (build, test,
                      lint, push)
                    </td>
                    <td>40</td>
                  </tr>
                  <tr>
                    <td>
                      Marketplace Template Development: Create new Template,
                      Implement EDP standard CI Pipeline steps (build, test,
                      lint, push)
                    </td>
                    <td>40</td>
                  </tr>
                  <tr>
                    <td rowSpan={3}>
                      <div className="table__cell-label">
                        Custom Tool Integration
                      </div>
                    </td>
                    <td>Integrate custom tool with CI Pipeline over API</td>
                    <td>30</td>
                  </tr>
                  <tr>
                    <td>
                      Integrate custom tool with EDP Portal UI over Kubernetes
                      API
                    </td>
                    <td>40</td>
                  </tr>
                  <tr>
                    <td>Integrate custom tool with EDP Portal UI over API</td>
                    <td>80</td>
                  </tr>
                  <tr>
                    <td>
                      <div className="table__cell-label">
                        Target Deployment Platform customization
                      </div>
                    </td>
                    <td>
                      Add Custom Deployment Platform: Implement custom CD
                      Pipeline
                    </td>
                    <td>80</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="definition">
              <sup>*</sup>
              Professional service hours are versatile blended hours bundled
              within your subscription plan, encompassing expertise from diverse
              specialists such as business analysts, architects, lead automation
              engineers, DevOps (System Engineers), and performance engineers.
              These multi-functional hours cater to EDP installation,
              configuration, integration, customization, feature implementation,
              updates, and use case implementation. They empower you to leverage
              a range of expertise for various aspects of optimizing and
              enhancing your EDP experience.
            </p>
            <p className="definition">
              <sup>**</sup>
              Minimum commitment of time for use of a certain subscription
              package.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
