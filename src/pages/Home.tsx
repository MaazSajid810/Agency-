import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Play, TrendingUp, Zap, Sparkles, Clock } from 'lucide-react'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    }
  }
}

export default function Home() {
  const features = [
    { icon: TrendingUp, title: 'High Retention Editing', desc: 'Optimized pacing and visuals for maximum watch time' },
    { icon: Zap, title: 'Automation Focused', desc: 'Built for scaling faceless YouTube channels' },
    { icon: Sparkles, title: 'Professional 3D', desc: 'Premium animations and motion graphics' },
    { icon: Clock, title: 'Fast Delivery', desc: 'Quick turnaround without sacrificing quality' },
  ]

  const services = [
    'Faceless YouTube Editing',
    'YouTube Automation',
    'Shorts Editing',
    '3D Logo Animation',
    '3D Product Animation',
    'Motion Graphics',
    'Website Development',
    'App Development',
    'n8n Automation',
    'Agentic AI Solutions',
  ]

  const steps = [
    { num: 1, title: 'You Send Script', desc: 'Submit your video script or content idea' },
    { num: 2, title: 'We Plan Strategy', desc: 'Create visual strategy and editing approach' },
    { num: 3, title: 'Production', desc: 'Editing, animation, sound design & optimization' },
    { num: 4, title: 'Final Delivery', desc: 'Get optimized video ready to publish' },
  ]

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-12 px-4 overflow-hidden">
        {/* Background gradient animation */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-blue rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-orange rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-6 px-4 py-2 bg-gradient-to-r from-accent-blue/20 to-accent-orange/20 border border-accent-blue/50 rounded-full text-sm text-accent-blue font-semibold">
              ✨ Award-Winning Digital Solutions
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="gradient-text">High-Retention YouTube Videos</span>, <span className="text-white">Professional Websites</span>, <span className="gradient-text">Mobile Apps & AI</span> That Scale
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light max-w-3xl mx-auto leading-relaxed">
              Transform your business with our integrated digital solutions: YouTube automation, web development, mobile apps, intelligent automation, and cutting-edge AI agents.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <Link
              to="/contact"
              className="group relative inline-block"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-accent-blue to-accent-orange rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative px-8 py-4 bg-black rounded-lg group-hover:bg-black/50 text-white font-semibold flex items-center gap-2">
                🚀 Get Started Free <ArrowRight size={20} />
              </div>
            </Link>
            <Link
              to="/services"
              className="px-8 py-4 border-2 border-accent-blue text-accent-blue rounded-lg font-semibold hover:bg-accent-blue/10 smooth-transition flex items-center gap-2"
            >
              📋 See Our Services
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {[
              { number: '190+', label: 'AI Implementations' },
              { number: '$3M+', label: 'Cost Savings' },
              { number: '10x', label: 'Productivity Boost' },
            ].map((stat, i) => (
              <motion.div key={i} variants={fadeInUp} transition={{ duration: 0.6 }} className="glass p-4 rounded-lg">
                <div className="text-2xl md:text-3xl font-bold gradient-text">{stat.number}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Why Choose Rajowalia?</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">We understand YouTube growth because we manage multiple faceless channels</p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {features.map((feature, i) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="glass p-8 rounded-xl hover:border-accent-blue/50 smooth-transition group"
                >
                  <Icon className="w-12 h-12 text-accent-blue mb-4 group-hover:scale-110 smooth-transition" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.desc}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">Comprehensive YouTube production solutions</p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {services.map((service, i) => (
              <Link
                key={i}
                to={`/service/${service.replace(/\s+/g, '-').toLowerCase()}`}
                className="block"
              >
                <motion.div
                  variants={fadeInUp}
                  className="glass p-8 rounded-xl hover:border-accent-orange/50 cursor-pointer smooth-transition group h-full"
                >
                  <Play className="w-8 h-8 text-accent-orange mb-4 group-hover:scale-110 smooth-transition" />
                  <h3 className="text-xl font-semibold group-hover:gradient-text smooth-transition">{service}</h3>
                  <p className="text-gray-400 text-sm mt-2">Click to view portfolio & details</p>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Our Simple 4-Step Process</h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {steps.map((step, i) => (
              <motion.div key={i} variants={fadeInUp} transition={{ duration: 0.6 }} className="relative">
                <div className="glass p-8 rounded-xl text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-accent-blue to-accent-orange flex items-center justify-center font-bold text-xl mx-auto mb-4">
                    {step.num}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm">{step.desc}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-1 bg-gradient-to-r from-accent-blue to-accent-orange transform -translate-y-1/2"></div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Scale Your YouTube Channel?</h2>
            <p className="text-xl text-gray-400 mb-8">Start your automation journey with professional editing and 3D animation</p>
            <Link
              to="/contact"
              className="inline-block px-8 py-3 bg-gradient-to-r from-accent-blue to-accent-orange rounded-lg font-semibold hover:shadow-lg glow-accent smooth-transition"
            >
              Start Your Journey
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="glass p-12 rounded-xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-8 text-center">Digital Transformation for Modern Businesses</h2>
            
            <div className="space-y-6 text-gray-300 mb-8">
              <p className="text-lg leading-relaxed">
                In today's fast-paced digital world, businesses face a critical challenge: <span className="text-accent-blue font-semibold">how to scale operations without burning out your team</span>.
              </p>
              
              <p className="text-lg leading-relaxed">
                The solution? <span className="text-accent-orange font-semibold">Smart automation and AI-powered tools</span> that work while you focus on growth.
              </p>

              <div className="border-l-4 border-accent-blue pl-6 py-4">
                <p className="text-lg italic">
                  "We transform your vision into reality through cutting-edge web development, mobile applications, intelligent automation, and AI solutions—all designed to accelerate your growth and maximize your potential."
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-accent-blue/10 p-6 rounded-lg border border-accent-blue/20">
                <h3 className="text-accent-blue font-bold text-lg mb-3">Website Development</h3>
                <p className="text-gray-300">Custom, responsive websites that convert visitors into customers with SEO optimization and eCommerce capabilities.</p>
              </div>
              
              <div className="bg-accent-orange/10 p-6 rounded-lg border border-accent-orange/20">
                <h3 className="text-accent-orange font-bold text-lg mb-3">App Development</h3>
                <p className="text-gray-300">Native and cross-platform mobile apps with intuitive design, scalable infrastructure, and seamless integrations.</p>
              </div>
              
              <div className="bg-accent-blue/10 p-6 rounded-lg border border-accent-blue/20">
                <h3 className="text-accent-blue font-bold text-lg mb-3">n8n Automation</h3>
                <p className="text-gray-300">Eliminate manual work. Automate workflows, CRM processes, email campaigns, and social media scheduling effortlessly.</p>
              </div>
              
              <div className="bg-accent-orange/10 p-6 rounded-lg border border-accent-orange/20">
                <h3 className="text-accent-orange font-bold text-lg mb-3">Agentic AI Solutions</h3>
                <p className="text-gray-300">AI agents that think, learn, and act for your business—from customer support chatbots to intelligent lead generation systems.</p>
              </div>
            </div>

            <div className="text-center">
              <p className="text-gray-300 mb-6">
                <span className="text-accent-blue font-semibold">190+ implementations</span> | 
                <span className="text-accent-orange font-semibold"> $3M+ in cost savings</span> | 
                <span className="text-accent-blue font-semibold"> 10x productivity boost</span>
              </p>
              <Link
                to="/contact"
                className="inline-block px-8 py-3 bg-gradient-to-r from-accent-blue to-accent-orange rounded-lg font-semibold hover:shadow-lg glow-accent smooth-transition"
              >
                Get Free Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>


    </div>
  )
}
