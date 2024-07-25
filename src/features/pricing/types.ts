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
    features: string[];
    duration: string;
  };
  color?: string;
  label?: {
    text: string;
    color: string;
  };
}
