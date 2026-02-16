import { motion } from 'framer-motion';
import { Video, Globe, Smartphone, Workflow, Brain, Check } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { services } from '../data/services';
import type { Service } from '../types';

const iconMap: { [key: string]: LucideIcon } = {
  Video,
  Globe,
  Smartphone,
  Workflow,
  Brain
};

const ServiceCard = ({ service, index }: { service: Service; index: number }) => {
  const Icon = iconMap[service.icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="glass glass-hover p-8 rounded-3xl"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="p-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl">
          <Icon size={32} className="text-white" />
        </div>
        <h3 className="text-2xl font-bold">{service.title}</h3>
      </div>
      
      <p className="text-gray-300 mb-6">{service.description}</p>
      
      <div className="mb-6">
        <h4 className="font-semibold mb-3 text-purple-300">Key Features:</h4>
        <ul className="space-y-2">
          {service.features.map((feature: string, i: number) => (
            <li key={i} className="flex items-start gap-2 text-gray-300">
              <Check size={20} className="text-green-400 mt-1 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="border-t border-white/20 pt-6 mt-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-400">Starting from</span>
          <span className="text-3xl font-bold text-purple-400">${service.pricing.basic}</span>
        </div>
        <div className="text-sm text-gray-400">
          Delivery: {service.deliveryTime}
        </div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
