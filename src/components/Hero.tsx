import { motion } from 'framer-motion';
import { Mail, MessageCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Professional Digital Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with expert YouTube video editing, custom web development, 
            mobile apps, workflow automation, and cutting-edge AI solutions.
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="https://wa.me/923006790810"
              target="_blank"
              rel="noopener noreferrer"
              className="glass glass-hover px-8 py-4 rounded-full flex items-center gap-2 text-lg font-semibold"
            >
              <MessageCircle size={24} />
              WhatsApp Us
            </a>
            <a
              href="mailto:contact@agency.com"
              className="glass glass-hover px-8 py-4 rounded-full flex items-center gap-2 text-lg font-semibold"
            >
              <Mail size={24} />
              Email Us
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {[
            { label: 'Projects Delivered', value: '500+' },
            { label: 'Happy Clients', value: '200+' },
            { label: 'Countries Served', value: '30+' },
            { label: 'Years Experience', value: '5+' }
          ].map((stat, index) => (
            <div key={index} className="glass p-6 rounded-2xl">
              <div className="text-3xl md:text-4xl font-bold text-purple-400">{stat.value}</div>
              <div className="text-sm text-gray-400 mt-2">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
