export interface PricingTier {
  name: string;
  basePrices: {
    USD: number;
    EUR: number;
    INR: number;
  };
  features: string[];
  popular?: boolean;
  ctaText: string;
}

export interface BentoFeature {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  iconName: string; // Lucide icon name mapping
}

export interface FAQItem {
  question: string;
  answer: string;
}
