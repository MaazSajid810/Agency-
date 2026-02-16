export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  pricing: {
    basic: number;
    standard: number;
    premium: number;
  };
  deliveryTime: string;
}

export interface PricingTier {
  name: string;
  multiplier: number;
}
