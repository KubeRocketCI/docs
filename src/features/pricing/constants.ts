import { PricingItem } from './types';

export const pricingList: PricingItem[] = [
  {
    title: 'Open Source',
    description: "The essentials for when you're just getting started.",
    price: false,
    features: ['Community Support', 'Run on any Kubernetes Cluster', 'Pipelines for Polyglot Microservice'],
    link: '/docs/quick-start/quick-start-overview',
  },
  {
    title: 'Team',
    description: "The essentials for when you're just getting started.",
    price: 3000,
    features: ['25 professional service hours *', '6 month minimum commitment **'],
    link: 'mailto:SupportEPMD-EDP@epam.com',
  },
  {
    title: 'Stream',
    description: "The essentials for when you're just getting started.",
    price: 6000,
    features: ['60 professional service hours *', '6 month minimum commitment **'],
    link: 'mailto:SupportEPMD-EDP@epam.com',
  },
  {
    title: 'Enterprise',
    description: "The essentials for when you're just getting started.",
    price: 13000,
    features: ['160 professional service hours *', '3 month minimum commitment **'],
    link: 'mailto:SupportEPMD-EDP@epam.com',
  },
];
