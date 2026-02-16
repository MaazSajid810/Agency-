import type { Service } from '../types';

export const services: Service[] = [
  {
    id: 'video-editing',
    title: 'YouTube Video Editing',
    description: 'Professional video editing for YouTubers and content creators. High-quality edits with motion graphics, color grading, and sound design.',
    icon: 'Video',
    features: [
      'Professional color grading',
      'Motion graphics & animations',
      'Sound design & mixing',
      'Thumbnail creation',
      'Fast turnaround',
      'Unlimited revisions'
    ],
    pricing: {
      basic: 50,
      standard: 150,
      premium: 300
    },
    deliveryTime: '2-5 days'
  },
  {
    id: 'web-development',
    title: 'Website Development',
    description: 'Custom website development with modern frameworks. Responsive, fast, and SEO-optimized websites tailored to your business needs.',
    icon: 'Globe',
    features: [
      'Responsive design',
      'Modern frameworks (React, Next.js)',
      'SEO optimization',
      'Performance optimization',
      'CMS integration',
      'E-commerce solutions'
    ],
    pricing: {
      basic: 500,
      standard: 2000,
      premium: 5000
    },
    deliveryTime: '1-4 weeks'
  },
  {
    id: 'mobile-app',
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications. Beautiful, intuitive apps for iOS and Android with seamless user experience.',
    icon: 'Smartphone',
    features: [
      'iOS & Android development',
      'Cross-platform (React Native)',
      'UI/UX design',
      'Backend integration',
      'Push notifications',
      'App store deployment'
    ],
    pricing: {
      basic: 1000,
      standard: 5000,
      premium: 15000
    },
    deliveryTime: '4-12 weeks'
  },
  {
    id: 'n8n-automation',
    title: 'n8n Workflow Automation',
    description: 'Custom workflow automation using n8n. Streamline your business processes and save time with intelligent automation solutions.',
    icon: 'Workflow',
    features: [
      'Custom workflow design',
      'API integrations',
      'Data synchronization',
      'Email automation',
      'Webhook setup',
      'Monitoring & maintenance'
    ],
    pricing: {
      basic: 200,
      standard: 800,
      premium: 2000
    },
    deliveryTime: '3-7 days'
  },
  {
    id: 'agentic-ai',
    title: 'Agentic AI Solutions',
    description: 'Advanced AI agents and automation. Custom AI solutions using LLMs, RAG, and autonomous agents to transform your business.',
    icon: 'Brain',
    features: [
      'Custom AI agents',
      'LLM integration (GPT, Claude)',
      'RAG implementation',
      'Chatbot development',
      'AI workflow automation',
      'Training & support'
    ],
    pricing: {
      basic: 500,
      standard: 2500,
      premium: 8000
    },
    deliveryTime: '1-6 weeks'
  }
];

export const pricingTiers = [
  { name: 'Basic', multiplier: 1 },
  { name: 'Standard', multiplier: 1 },
  { name: 'Premium', multiplier: 1 }
];
