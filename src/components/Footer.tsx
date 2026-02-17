import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-black/80 to-black border-t border-accent-blue/20 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">✨ Rajowalia</h3>
            <p className="text-gray-400 leading-relaxed">
              Transforming businesses through digital innovation, automation, and cutting-edge AI solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-accent-blue mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Services', 'Portfolio', 'Pricing', 'About'].map((link) => (
                <li key={link}>
                  <Link to={link === 'Home' ? '/' : `/${link.toLowerCase()}`} className="text-gray-400 hover:text-accent-blue smooth-transition">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-accent-blue mb-4">Services</h4>
            <ul className="space-y-2">
              {['YouTube Editing', 'Automation', '3D Animation', 'Motion Graphics'].map((service) => (
                <li key={service} className="text-gray-400 hover:text-accent-blue smooth-transition cursor-pointer">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-accent-blue mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400 hover:text-accent-blue smooth-transition">
                <a href="mailto:studentagent09@gmail.com" className="flex items-center gap-2">
                  <Mail size={18} className="text-accent-blue" />
                  studentagent09@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-400 hover:text-accent-blue smooth-transition">
                <a href="https://wa.me/923046999198" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Phone size={18} className="text-accent-blue" />
                  +92 304-6999198
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <MapPin size={18} className="text-accent-blue" />
                Global
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-accent-blue/20 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-gray-400 text-center md:text-left">© {currentYear} Rajowalia Automation Studio. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="#" className="text-gray-400 hover:text-accent-blue smooth-transition text-sm font-medium">Privacy Policy</Link>
              <span className="text-gray-600">•</span>
              <Link to="#" className="text-gray-400 hover:text-accent-blue smooth-transition text-sm font-medium">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
