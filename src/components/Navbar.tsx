import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ]

  return (
    <nav className="sticky top-0 z-50 glass border-b border-accent-blue/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo with enhanced styling */}
          <Link to="/" className="flex-shrink-0 font-bold text-2xl gradient-text hover:scale-105 smooth-transition">
            ✨ Rajowalia
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-gray-300 hover:text-accent-blue smooth-transition font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button & Hamburger */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/contact"
              className="px-6 py-2 bg-gradient-to-r from-accent-blue to-accent-orange rounded-lg font-semibold hover:shadow-lg glow-accent smooth-transition"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-accent-blue hover:text-accent-orange smooth-transition"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-4"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-300 hover:text-accent-blue smooth-transition font-medium"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="px-6 py-2 bg-gradient-to-r from-accent-blue to-accent-orange rounded-lg font-semibold hover:shadow-lg glow-accent smooth-transition text-center"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}
