import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', service: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'studentagent09@gmail.com', href: 'mailto:studentagent09@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+92 304-6999198', href: 'https://wa.me/923046999198' },
    { icon: MapPin, label: 'Location', value: 'Global', href: '#' },
  ]

  return (
    <div className="pt-20 pb-12">
      {/* Header */}
      <section className="py-20 px-4 text-center bg-gradient-to-b from-primary-800 via-primary-900 to-transparent">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-accent-blue/20 to-accent-orange/20 border border-accent-blue/50 rounded-full text-sm text-accent-blue font-semibold">
            💬 Let's Connect
          </div>
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">Let's Transform Your Business</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Let's talk about how we can help you achieve your digital goals.
          </p>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-xl"
            >
              <h2 className="text-2xl font-bold mb-6 gradient-text">Send us a Message</h2>

              {submitted ? (
                <div className="bg-green-900/20 border border-green-500/30 p-6 rounded-lg text-center">
                  <p className="text-green-400 font-semibold">Thank you! We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-black/40 border border-accent-blue/30 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-accent-blue smooth-transition"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-black/40 border border-accent-blue/30 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-accent-blue smooth-transition"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Service Interested In *</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full bg-black/40 border border-accent-blue/30 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-accent-blue smooth-transition"
                    >
                      <option value="">Select a service</option>
                      <option value="youtube-editing">YouTube Video Editing</option>
                      <option value="automation">YouTube Automation</option>
                      <option value="shorts">Shorts Editing</option>
                      <option value="3d-animation">3D Animation</option>
                      <option value="other">Other / Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-black/40 border border-accent-blue/30 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-accent-blue smooth-transition resize-none"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-accent-blue to-accent-orange rounded-lg font-semibold hover:shadow-lg glow-accent smooth-transition flex items-center justify-center gap-2"
                  >
                    Send Message <Send size={18} />
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold mb-8 gradient-text">Get in Touch</h2>

              <div className="space-y-6 mb-12">
                {contactInfo.map((info, i) => {
                  const Icon = info.icon
                  return (
                    <a
                      key={i}
                      href={info.href}
                      target={info.href.includes('wa.me') ? '_blank' : undefined}
                      rel={info.href.includes('wa.me') ? 'noopener noreferrer' : undefined}
                      className="glass p-6 rounded-xl hover:border-accent-blue/50 smooth-transition flex gap-4 cursor-pointer"
                    >
                      <Icon className="w-8 h-8 text-accent-blue flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-sm text-gray-400 mb-1">{info.label}</p>
                        <p className="font-semibold text-lg">{info.value}</p>
                      </div>
                    </a>
                  )
                })}
              </div>

              <div className="glass p-8 rounded-xl">
                <h3 className="text-lg font-bold mb-4 text-accent-orange">Response Time</h3>
                <p className="text-gray-300 mb-4">
                  We aim to respond to all inquiries within 24 hours. For urgent matters, please call us directly.
                </p>
                <p className="text-sm text-gray-400">
                  Available Monday – Friday, 9 AM – 6 PM EST
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-500/10 to-green-600/10 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">Quick Chat on WhatsApp?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Click below to open WhatsApp and start chatting with us directly. We typically respond within 5 minutes!
          </p>
          <a
            href="https://wa.me/923046999198"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 rounded-lg font-semibold hover:shadow-lg hover:scale-105 smooth-transition text-white"
          >
            <span className="text-2xl">💬</span>
            Open WhatsApp Chat
          </a>
          <p className="text-sm text-gray-500 mt-4">No ads, just direct messaging</p>
        </motion.div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Frequently Asked Questions</h2>

          <motion.div
            className="space-y-4"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={{
              animate: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.2,
                }
              }
            }}
          >
            {[
              { q: 'How long does a video production take?', a: 'Standard projects take 5-7 business days. Rush delivery available.' },
              { q: 'Do you offer revisions?', a: 'Yes! Unlimited revisions until you are completely satisfied.' },
              { q: 'What formats do you deliver?', a: '4K, 1080p, and mobile-optimized formats for all platforms.' },
              { q: 'Can I cancel anytime?', a: 'Yes, monthly packages can be cancelled anytime without penalties.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }}
                className="glass p-6 rounded-xl"
              >
                <h3 className="font-bold text-accent-blue mb-2">{item.q}</h3>
                <p className="text-gray-400">{item.a}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
