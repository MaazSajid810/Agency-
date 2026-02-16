import { motion } from 'framer-motion'
import { Users, Target, Heart } from 'lucide-react'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
}

export default function About() {
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
            🚀 Our Story
          </div>
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">Built by Innovators, for Innovators</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Transforming visions into reality through cutting-edge technology and strategic expertise.
          </p>
        </motion.div>
      </section>

      {/* About Content */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="glass p-12 rounded-xl mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6 gradient-text">Who We Are</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Rajowalia Automation Studio is a results-driven digital production and automation agency that helps businesses scale and grow. We specialize in YouTube automation, website development, app creation, workflow automation with n8n, and cutting-edge Agentic AI solutions.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Our mission is to transform your business through intelligent digital solutions. Whether you need high-retention video content, a custom-built website, a mobile app, or AI-powered automation—we deliver excellence across all digital domains.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              We understand that modern businesses need more than just one service. That's why we offer an integrated approach: beautiful web design, powerful mobile apps, intelligent automation, and AI agents that work 24/7 to drive your growth.
            </p>
          </motion.div>

          {/* Values */}
          <motion.div
            className="grid md:grid-cols-3 gap-8"
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
              {
                icon: Target,
                title: 'Our Mission',
                desc: 'To help automation creators scale professionally with premium editing and 3D motion graphics.',
              },
              {
                icon: Heart,
                title: 'Our Values',
                desc: 'Quality first. Client success second. Innovation always. We are committed to excellence.',
              },
              {
                icon: Users,
                title: 'Our Team',
                desc: 'A passionate group of creatives, editors, and animators dedicated to your channel growth.',
              },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div key={i} variants={fadeInUp} transition={{ duration: 0.6 }} className="glass p-8 rounded-xl text-center">
                  <Icon className="w-12 h-12 text-accent-blue mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold gradient-text mb-4">Why Choose Rajowalia?</h2>
          </motion.div>

          <motion.div
            className="space-y-6"
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
              {
                title: 'Full-Spectrum Digital Solutions',
                desc: 'From YouTube automation to app development, website design to AI implementation—we cover all digital needs under one roof.',
              },
              {
                title: 'Algorithm Experts',
                desc: 'We study YouTube trends and optimize every aspect of your content for maximum reach and retention.',
              },
              {
                title: 'Results-Driven',
                desc: 'Our clients see measurable growth in watch time, engagement, channel monetization, and business automation ROI.',
              },
              {
                title: 'Creative Excellence',
                desc: 'Combining technical expertise with creative storytelling for compelling content and intuitive digital experiences.',
              },
              {
                title: 'Automation & AI Leadership',
                desc: 'We leverage n8n workflows and Agentic AI to help you work smarter, not harder—reducing costs by up to 80%.',
              },
              {
                title: 'Scalable Solutions',
                desc: 'From startups to enterprises, our solutions grow with your business and adapt to your changing needs.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                transition={{ duration: 0.6 }}
                className="glass p-6 rounded-xl flex gap-4"
              >
                <div className="text-accent-blue text-2xl font-bold flex-shrink-0">✓</div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center gradient-text mb-12">By The Numbers</h2>
          
          <motion.div
            className="grid md:grid-cols-4 gap-6"
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
              { stat: '190+', label: 'Projects' },
              { stat: '95%', label: 'Satisfaction' },
              { stat: '$3M+', label: 'Savings' },
              { stat: '50+', label: 'Channels' },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                transition={{ duration: 0.6 }}
                className="glass p-6 rounded-xl text-center"
              >
                <div className="text-3xl font-bold gradient-text mb-2">{item.stat}</div>
                <p className="text-gray-400">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 text-center bg-black/20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Join hundreds of successful creators who have scaled their channels with Rajowalia
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-gradient-to-r from-accent-blue to-accent-orange rounded-lg font-semibold hover:shadow-lg glow-accent smooth-transition"
          >
            Get in Touch
          </a>
        </motion.div>
      </section>
    </div>
  )
}
