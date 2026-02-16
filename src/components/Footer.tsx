import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Agency
            </h3>
            <p className="text-gray-400 mb-4">
              Professional digital services for global businesses. We deliver excellence in video editing, 
              web development, mobile apps, automation, and AI solutions.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 glass glass-hover rounded-lg">
                <Github size={20} />
              </a>
              <a href="#" className="p-2 glass glass-hover rounded-lg">
                <Linkedin size={20} />
              </a>
              <a href="#" className="p-2 glass glass-hover rounded-lg">
                <Twitter size={20} />
              </a>
              <a href="mailto:contact@agency.com" className="p-2 glass glass-hover rounded-lg">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#services" className="hover:text-white transition-colors">Video Editing</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Web Development</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Mobile Apps</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">AI Solutions</a></li>
            </ul>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-8 text-center text-gray-400"
        >
          <p>© {currentYear} Agency. All rights reserved. Built with React, TypeScript, and Tailwind CSS.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
