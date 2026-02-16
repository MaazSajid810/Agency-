import { Mail, X } from 'lucide-react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function FloatingEmail() {
  const [isOpen, setIsOpen] = useState(false)

  const emailLink = 'mailto:studentagent09@gmail.com?subject=Inquiry%20About%20Services&body=Hi%20Rajowalia%20Studio!%20I%20want%20to%20discuss%20my%20project.'

  return (
    <>
      {/* Floating Email Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 right-6 z-40 w-14 h-14 rounded-full bg-blue-500 hover:bg-blue-600 text-white shadow-lg hover:shadow-xl smooth-transition flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? (
          <X size={24} />
        ) : (
          <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            <Mail size={24} />
          </motion.div>
        )}
      </motion.button>

      {/* Email Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-40 right-6 z-40 bg-white rounded-2xl shadow-2xl p-6 max-w-xs"
          >
            <h3 className="font-bold text-gray-900 mb-2">Email us!</h3>
            <p className="text-gray-600 text-sm mb-4">
              Send us an email with your project details. We'll get back to you within 24 hours.
            </p>
            <a
              href={emailLink}
              onClick={() => setIsOpen(false)}
              className="group relative inline-block w-full"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative px-4 py-3 bg-white rounded-lg group-hover:bg-gray-50 text-center font-semibold text-blue-600 group-hover:text-blue-700 smooth-transition">
                ✉️ Send Email
              </div>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
