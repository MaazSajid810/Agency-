import { useState } from 'react';
import { motion } from 'framer-motion';
import { services } from '../data/services';
import { Calculator } from 'lucide-react';

const PricingCalculator = () => {
  const [selectedService, setSelectedService] = useState(services[0].id);
  const [selectedTier, setSelectedTier] = useState<'basic' | 'standard' | 'premium'>('standard');
  const [quantity, setQuantity] = useState(1);

  const currentService = services.find(s => s.id === selectedService)!;
  const price = currentService.pricing[selectedTier];
  const totalPrice = price * quantity;

  return (
    <section id="pricing" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Calculator size={40} className="text-purple-400" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Pricing Calculator
            </h2>
          </div>
          <p className="text-xl text-gray-300">
            Get instant pricing for your project
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass p-8 md:p-12 rounded-3xl"
        >
          <div className="space-y-8">
            {/* Service Selection */}
            <div>
              <label className="block text-lg font-semibold mb-4">Select Service</label>
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full px-6 py-4 bg-white/5 border border-white/20 rounded-xl text-white focus:outline-none focus:border-purple-400 transition-colors"
              >
                {services.map(service => (
                  <option key={service.id} value={service.id} className="bg-slate-900">
                    {service.title}
                  </option>
                ))}
              </select>
            </div>

            {/* Tier Selection */}
            <div>
              <label className="block text-lg font-semibold mb-4">Select Package</label>
              <div className="grid grid-cols-3 gap-4">
                {(['basic', 'standard', 'premium'] as const).map(tier => (
                  <button
                    key={tier}
                    onClick={() => setSelectedTier(tier)}
                    className={`px-6 py-4 rounded-xl font-semibold transition-all ${
                      selectedTier === tier
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                        : 'glass glass-hover'
                    }`}
                  >
                    <div className="capitalize">{tier}</div>
                    <div className="text-sm mt-1">${currentService.pricing[tier]}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <label className="block text-lg font-semibold mb-4">Quantity</label>
              <input
                type="number"
                min="1"
                max="100"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-full px-6 py-4 bg-white/5 border border-white/20 rounded-xl text-white focus:outline-none focus:border-purple-400 transition-colors"
              />
            </div>

            {/* Total Price */}
            <div className="border-t border-white/20 pt-8">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <div className="text-gray-400 mb-2">Estimated Total</div>
                  <div className="text-sm text-gray-500">
                    Delivery: {currentService.deliveryTime}
                  </div>
                </div>
                <div className="text-5xl font-bold text-purple-400">
                  ${totalPrice.toLocaleString()}
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a
                  href={`https://wa.me/923006790810?text=Hi! I'm interested in ${currentService.title} - ${selectedTier} package. Price: $${totalPrice}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 px-8 py-4 rounded-xl text-center font-semibold transition-all"
                >
                  Order via WhatsApp
                </a>
                <a
                  href={`mailto:contact@agency.com?subject=Quote Request - ${currentService.title}&body=I'm interested in ${currentService.title} - ${selectedTier} package. Quantity: ${quantity}. Total: $${totalPrice}`}
                  className="flex-1 glass glass-hover px-8 py-4 rounded-xl text-center font-semibold"
                >
                  Request Quote via Email
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingCalculator;
