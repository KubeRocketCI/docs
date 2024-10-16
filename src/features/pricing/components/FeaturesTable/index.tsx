import styles from './styles.module.css';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export const FeaturesTable = () => {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table} cellSpacing="0" cellPadding="0">
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
              <div className={styles.tableCellLabel}>
                <CheckCircleIcon sx={{ color: 'var(--ifm-color-primary)', width: '1.025rem', height: '1.025rem' }} />
                Deployment, Installation, Configuration
              </div>
            </td>
            <td className={styles.customBg}>
              Deploy Platform with Minimum Components in the existing Kubernetes Cluster: CI/CD, integration with
              existing SonarQube, Repository Manager, Container Registry
            </td>
            <td className={styles.customBg}>8</td>
          </tr>
          <tr>
            <td>
              Deploy Platform in an empty AWS Account, including components: Infrastructure, CI/CD, SSO integration,
              SonarQube, DependencyTrack, Nexus Repository, DefectDojo, Logging, Monitoring, Docker registry,
              Observability
            </td>
            <td>60</td>
          </tr>
          <tr>
            <td className={styles.customBg}>
              Traceability and Observability customization: Storage backend configuration, performance tunning
            </td>
            <td className={styles.customBg}>40</td>
          </tr>
          <tr>
            <td>Monitoring stack customization: Custom Dashboards, Alerts, Notifications</td>
            <td>40</td>
          </tr>
          <tr>
            <td className={styles.customBg}>
              Logging stack customization: Custom filters and processing for fluent-bit, logs rotation policy tunning
            </td>
            <td className={styles.customBg}>40</td>
          </tr>
          <tr>
            <td>SonarQube Quality Gate and Quality Profile configuration</td>
            <td>8</td>
          </tr>
          <tr>
            <td className={styles.customBg}>Security (SAST/SCA) report analysis per single codebase</td>
            <td className={styles.customBg}>8</td>
          </tr>
          <tr>
            <td rowSpan={2}>
              <div className={styles.tableCellLabel}>
                <CheckCircleIcon sx={{ color: 'var(--ifm-color-primary)', width: '1.025rem', height: '1.025rem' }} />
                Framework/Language
              </div>
            </td>
            <td>
              Onboard new Framework or Build tool with CI Pipelines: Implement KubeRocketCI standard CI Pipeline steps
              (build, test, lint, push)
            </td>
            <td>40</td>
          </tr>
          <tr>
            <td className={styles.customBg}>
              Marketplace Template Development: Create new Template, Implement KubeRocketCI standard CI Pipeline steps
              (build, test, lint, push)
            </td>
            <td className={styles.customBg}>40</td>
          </tr>
          <tr>
            <td rowSpan={3}>
              <div className={styles.tableCellLabel}>
                {' '}
                <CheckCircleIcon sx={{ color: 'var(--ifm-color-primary)', width: '1.025rem', height: '1.025rem' }} />
                Custom Tool Integration
              </div>
            </td>
            <td>Integrate custom tool with CI Pipeline over API</td>
            <td>30</td>
          </tr>
          <tr>
            <td className={styles.customBg}>Integrate custom tool with KubeRocketCI Portal UI over Kubernetes API</td>
            <td className={styles.customBg}>40</td>
          </tr>
          <tr>
            <td>Integrate custom tool with KubeRocketCI Portal UI over API</td>
            <td>80</td>
          </tr>
          <tr>
            <td>
              <div className={styles.tableCellLabel}>
                {' '}
                <CheckCircleIcon sx={{ color: 'var(--ifm-color-primary)', width: '1.025rem', height: '1.025rem' }} />
                Target Deployment Platform customization
              </div>
            </td>
            <td className={styles.customBg}>Add Custom Deployment Platform: Implement custom CD Pipeline</td>
            <td className={styles.customBg}>80</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
