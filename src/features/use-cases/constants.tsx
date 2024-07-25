import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { UseCaseItem } from './types';
import BuildIcon from '@mui/icons-material/Build';
import KeyIcon from '@mui/icons-material/Key';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export const useCasesList: UseCaseItem[] = [
  {
    title: 'Scaffold And Deploy FastAPI Application',
    Svg: AccessTimeIcon,
    description: (
      <>
        Rapidly create, customize, and deploy FastAPI applications using a scaffolding tool and standardized processes,
        streamlining development and enhancing code quality for quicker and reliable feature releases.
      </>
    ),
    link: '/docs/use-cases/application-scaffolding',
  },
  {
    title: 'Bring Your Own Framework',
    Svg: BuildIcon,
    description: (
      <>
        Facilitate the onboarding of custom tools and frameworks into the KubeRocketCI by integrating custom Tekton
        libraries, empowering the modification of pipelines and tasks for tailored workflows.
      </>
    ),
    link: '/docs/use-cases/tekton-custom-pipelines',
  },
  {
    title: 'Secrets Management For Application Deployment',
    Svg: KeyIcon,
    description: (
      <>
        Ensure secure handling of sensitive data by leveraging an external secret store within the KubeRocketCI,
        allowing secure transmission and usage of confidential information across namespaces, facilitating secure
        connections to databases during development and deployment, tailored for Developers.
      </>
    ),
    link: '/docs/use-cases/external-secrets',
  },
  {
    title: 'Autotest As the Quality Gate',
    Svg: CheckCircleOutlineIcon,
    description: (
      <>
        Implement autotests as a quality gate within the Continuous Deployment pipeline, verifying application stability
        and functionality, allowing reliable versions to be promoted while enabling quick creation of applications,
        streamlined testing, and seamless deployment updates for Developers and Quality Assurance specialists.
      </>
    ),
    link: '/docs/use-cases/autotest-as-quality-gate',
  },
];
