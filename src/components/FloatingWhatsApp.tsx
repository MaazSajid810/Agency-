import { MessageCircle, X } from 'lucide-react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false)

  const whatsappLink = 'https://wa.me/923046999198?text=Hi%20Rajowalia%20Studio!%20I%20want%20to%20discuss%20my%20project.'

  return (
    <>
      {/* Floating WhatsApp Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl smooth-transition flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? (
          <X size={24} />
        ) : (
          <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            <MessageCircle size={24} />
          </motion.div>
        )}
      </motion.button>

      {/* WhatsApp Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-24 right-6 z-40 bg-white rounded-2xl shadow-2xl p-6 max-w-xs"
          >
            <h3 className="font-bold text-gray-900 mb-2">Chat with us!</h3>
            <p className="text-gray-600 text-sm mb-4">
              Have questions about our services? Click below to chat with our team on WhatsApp.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="group relative inline-block w-full"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-green-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative px-4 py-3 bg-white rounded-lg group-hover:bg-gray-50 text-center font-semibold text-green-600 group-hover:text-green-700 smooth-transition">
                💬 Open WhatsApp
              </div>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
