import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import TroubleshootIcon from '@mui/icons-material/Troubleshoot';
import KeyIcon from '@mui/icons-material/Key';
import HandymanIcon from '@mui/icons-material/Handyman';
import SyncIcon from '@mui/icons-material/Sync';
import RecommendIcon from '@mui/icons-material/Recommend';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Application scaffolding",
    Svg: HandymanIcon,
    description: (
      <>
        Accelerate your delivery process with our versatile Application
        templates. Expand your possibilities by extending our comprehensive
        library with your personalized templates.
      </>
    ),
    link: "docs/user-guide/add-application",
  },
  {
    title: "CI/CD pipelines",
    Svg: RocketLaunchIcon,
    description: (
      <>
        Leverage the power of Kubernetes native pipelines for seamless
        application management with the comprehensive KubeRocketCI Library.
      </>
    ),
    link: "docs/user-guide/application",
  },
  {
    title: "GitOps",
    Svg: SyncIcon,
    description: (
      <>
        Implement the GitOps approach for efficient deployment of your code and
        infrastructure. Maintain your state in code and manage changes
        effortlessly with our platform.
      </>
    ),
    link: "docs/user-guide/add-cd-pipeline",
  },
  {
    title: "Single sign-on",
    Svg: KeyIcon,
    description: (
      <>
        Seamlessly integrate with your Enterprise Single Sign-On for a smooth
        and efficient user onboarding experience. Our platform is designed to
        enhance user accessibility and security, promoting a user-friendly
        environment that aligns with your enterprise’s unique needs.
      </>
    ),
    link: "docs/operator-guide/auth/platform-auth-model",
  },
  {
    title: "Optimized for Kubernetes",
    Svg: require("@site/static/img/kubernetes.svg").default,
    description: (
      <>
        Experience the power of Kubernetes-native functionality. Our platform is
        designed to run seamlessly in your preferred Kubernetes or OpenShift
        clusters, offering you flexibility and control.
      </>
    ),
    link: "docs/operator-guide/install-kuberocketci",
  },
  {
    title: "Advanced Security Analysis",
    Svg: TroubleshootIcon,
    description: (
      <>
        Achieve excellence in DevSecOps with our platform. We prioritize
        security, making it a mandatory quality gate for all operations.
        Experience enhanced protection and peace of mind.
      </>
    ),
    link: "docs/operator-guide/devsecops/overview",
  },
  {
    title: "Automated Test Analysis",
    Svg: ScienceOutlinedIcon,
    description: (
      <>
        Streamline your operations with our automated test analysis. Ensure your
        regressions pass seamlessly and predictably, enhancing the reliability
        of your systems. Leverage automation to increase your delivery speed and
        efficiency.
      </>
    ),
    link: "docs/operator-guide/project-management-and-reporting/install-reportportal/",
  },
  {
    title: "Comprehensive Metrics",
    Svg: AutoGraphIcon,
    description: (
      <>
        Gain access to your application logs and metrics with ease. Explore your
        application in real-time, gaining valuable insights and enhancing your
        understanding of its performance.
      </>
    ),
    link: "docs/operator-guide/monitoring-and-observability/multitenant-logging/",
  },
  {
    title: "Open-Source Software Solutions",
    Svg: RecommendIcon,
    description: (
      <>
        Experience the power of open-source with KubeRocketCI. Licensed under Apache 2.0,
        we equip you with leading open-source tools designed to enhance the
        reliability of your delivery process.
      </>
    ),
    link: "docs/about-platform",
  },
];

function Feature({ title, Svg, description, link }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--left">
        <a href={link}>
          <div className={styles.grid}>
            <Svg className={styles.featureSvg} role="img" />
            <Heading as="h3" className={styles.title}>
              {title}
            </Heading>
          </div>
          <p>{description}</p>
        </a>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
