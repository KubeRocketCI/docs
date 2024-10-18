import { ReactElement } from 'react';

export interface PricingItem {
  title: string;
  description: string;
  price: number;
  features: string[];
  link: {
    href: string;
    label: string;
  };
  moreFeatures?: {
    features: string[] | ReactElement[];
  };
  color?: string;
  label?: {
    text: string;
    color: string;
  };
}
