import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { UseCaseItem } from './types';
import BuildIcon from '@mui/icons-material/Build';
import KeyIcon from '@mui/icons-material/Key';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import CodeIcon from '@mui/icons-material/Code';

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
    title: 'Autotest As a Quality Gate',
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
  {
    title: 'Creating and Using Custom Tekton Pipelines',
    Svg: SettingsSuggestIcon,
    description: (
      <>
        Create and use custom Tekton pipelines. While KubeRocketCI offers pre-configured Tekton pipelines for common
        use cases, custom pipelines allow you to adapt workflows to meet unique project requirements.
      </>
    ),
    link: '/docs/use-cases/custom-pipelines-flow',
  },
  {
    title: 'Set Test Suite Parameters Using Environment Variables in CD Pipelines',
    Svg: CodeIcon,
    description: (
      <>
        Dynamically adjust parameters adding, modifying, or removing them without changing the test suite code.
        This provides precise control over quality gates, streamlines workflows, and allows pipelines to adapt
        to different environments or requirements while maintaining efficiency and quality standards.
      </>
    ),
    link: '/docs/use-cases/cd-autotests-run-with-env-variables',
  },
  {
    title: 'Deploy Application From Feature Branch',
    Svg: AccountTreeIcon,
    description: (
      <>
        Create a feature branch for your application and deploy it in a separate environment.
        Deploying a feature branch allows for deep testing of new features under development without merging them into the main branch.
      </>
    ),
    link: '/docs/use-cases/deploy-application-from-feature-branch',
  }
];
