import { PricingItem } from './types';

export const pricingList: PricingItem[] = [
  {
    title: 'Open Source',
    description: 'Enjoy essential features at no cost, perfect for getting started.',
    price: 0,
    features: ['Community Support', 'Run on any Kubernetes Cluster', 'Pipelines for Polyglot Microservice'],
    link: {
      href: '/docs/quick-start/quick-start-overview',
      label: 'Start',
    },
    color: 'rgba(239, 239, 255, 1)',
  },
  {
    title: 'Team',
    description: 'Boost teamwork with a plan tailored for small to medium-sized teams.',
    price: 3000,
    features: ['Community Support', 'Run on any Kubernetes Cluster', 'Pipelines for Polyglot Microservice'],
    moreFeatures: {
      features: ['25 professional service hours'],
      duration: '* 6 month minimum',
    },
    link: {
      href: 'mailto:SupportEPMD-EDP@epam.com',
      label: 'Contact US',
    },
    color: 'rgba(0, 148, 255, 1)',
    label: {
      text: 'Popular',
      color: 'rgba(33, 150, 243, 1)',
    },
  },
  {
    title: 'Stream',
    description: "The essentials for when you're just getting started.",
    price: 6000,
    features: ['Community Support', 'Run on any Kubernetes Cluster', 'Pipelines for Polyglot Microservice'],
    moreFeatures: {
      features: ['60 professional service hours'],
      duration: '* 6 month minimum',
    },
    link: {
      href: 'mailto:SupportEPMD-EDP@epam.com',
      label: 'Contact US',
    },
    color: 'rgba(24, 190, 148, 1)',
  },
  {
    title: 'Enterprise',
    description:
      'Access advanced features and scalability options to meet the evolving needs of your growing enterprise.',
    price: 13000,
    features: ['Community Support', 'Run on any Kubernetes Cluster', 'Pipelines for Polyglot Microservice'],
    moreFeatures: {
      features: ['160 professional service hours'],
      duration: '* 3 month minimum',
    },
    link: {
      href: 'mailto:SupportEPMD-EDP@epam.com',
      label: 'Contact US',
    },
    color: 'rgba(153, 85, 239, 1)',
  },
];
