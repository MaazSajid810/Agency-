import { motion } from 'framer-motion';
import { Mail, MessageCircle, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300">
            Ready to start your project? Contact us today!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">WhatsApp</div>
                    <a 
                      href="https://wa.me/923006790810" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      +92 300 6790810
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl">
                    <Mail size={24} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <a 
                      href="mailto:contact@agency.com"
                      className="text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      contact@agency.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Location</div>
                    <div className="text-gray-300">Global Service Delivery</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl">
                    <Clock size={24} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Availability</div>
                    <div className="text-gray-300">24/7 Support</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Contact Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-6">Quick Contact</h3>
              
              <div className="space-y-4">
                <a
                  href="https://wa.me/923006790810?text=Hi! I'd like to discuss a project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 px-8 py-6 rounded-xl font-semibold transition-all text-center"
                >
                  <MessageCircle size={24} className="inline mr-2" />
                  Chat on WhatsApp
                </a>

                <a
                  href="mailto:contact@agency.com?subject=Project Inquiry"
                  className="block w-full glass glass-hover px-8 py-6 rounded-xl font-semibold text-center"
                >
                  <Mail size={24} className="inline mr-2" />
                  Send Email
                </a>

                <div className="pt-6 border-t border-white/20">
                  <p className="text-sm text-gray-400 text-center">
                    We typically respond within 2-4 hours during business days
                  </p>
                </div>
              </div>
            </div>

            <div className="glass p-8 rounded-3xl">
              <h3 className="text-xl font-bold mb-4">Why Choose Us?</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span>5+ years of professional experience</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span>500+ successful projects delivered</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span>Global client base across 30+ countries</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span>24/7 support and communication</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
