import { motion } from 'framer-motion'
import { ArrowRight, Zap, Sparkles, Play } from 'lucide-react'
import { Link } from 'react-router-dom'
import VideoShowcase from '../components/VideoShowcase'

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

export default function VideoGeneration() {
  const tools = [
    {
      name: 'Flow',
      tagline: 'Advanced Motion Generation',
      description: 'Create stunning motion graphics and dynamic animations with AI-powered flow technology.',
      features: [
        'Smooth motion transitions',
        'Dynamic visual effects',
        'Real-time rendering',
        'Professional output quality',
      ],
      use_case: 'Perfect for: Intros, transitions, animated graphics',
    },
    {
      name: 'Sora 2',
      tagline: 'AI-Powered Video Creation',
      description: 'Generate complete videos from text prompts using advanced AI algorithms.',
      features: [
        'Text-to-video generation',
        'Scene composition',
        'Camera movement simulation',
        '4K quality output',
      ],
      use_case: 'Perfect for: Concept videos, product demos, storytelling',
    },
  ]

  const videoExamples = [
    { title: 'Product Launch Video', description: 'AI-generated promotional video using Sora 2', tool: 'sora2' as const },
    { title: 'Logo Animation', description: 'Dynamic 3D logo with Flow motion effects', tool: 'flow' as const },
    { title: 'Tutorial Series', description: 'AI-created educational content with Flow animations', tool: 'sora2' as const },
    { title: 'Transition Pack', description: 'Smooth scene transitions with Flow technology', tool: 'flow' as const },
    { title: 'Social Media Ads', description: 'Short-form video ads with AI generation', tool: 'sora2' as const },
    { title: 'Motion Graphics', description: 'Professional animations using Flow', tool: 'flow' as const },
  ]

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-12 px-4 overflow-hidden">
        {/* Background gradient animation */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="gradient-text">AI-Powered Video Generation</span> <br /> Using Sora 2 & Flow Technology
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light max-w-3xl mx-auto">
              Next-generation video creation technology that transforms your ideas into professional, stunning visual content in minutes.
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
              className="px-8 py-3 bg-gradient-to-r from-accent-blue to-accent-orange rounded-lg font-semibold hover:shadow-lg glow-accent smooth-transition flex items-center gap-2"
            >
              Try AI Video Generation <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* AI Tools Overview */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">AI Video Generation Tools</h2>
            <p className="text-xl text-gray-400">Cutting-edge technology for professional content creation</p>
          </motion.div>

          {/* Featured Tools Showcase */}
          <motion.div
            className="grid md:grid-cols-2 gap-12 mb-16"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {tools.map((tool, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="rounded-xl overflow-hidden"
              >
                {/* Image Placeholder */}
                <div className={`w-full h-64 bg-gradient-to-br ${
                  i === 0 ? 'from-accent-blue to-cyan-500' :
                  'from-accent-orange to-accent-blue'
                } rounded-xl mb-6 flex items-center justify-center relative overflow-hidden group`}>
                  {/* Placeholder for tool image - replace with actual image URL */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <div className="text-center">
                      <div className="text-6xl mb-4">
                        {i === 0 ? '⚡' : '🎬'}
                      </div>
                      <p className="text-white text-sm">
                        {i === 0 ? 'Add Flow image here' : 'Add Sora 2 image here'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tool Details */}
                <div className="glass p-8 rounded-xl hover:border-accent-blue/50 smooth-transition">
                  <h3 className="text-2xl font-bold mb-2">{tool.name}</h3>
                  <p className="text-accent-blue font-semibold mb-3">{tool.tagline}</p>
                  <p className="text-gray-300 mb-6">{tool.description}</p>
                  
                  <h4 className="font-semibold text-accent-orange mb-3">Features:</h4>
                  <ul className="space-y-2 mb-6">
                    {tool.features.map((feature, j) => (
                      <li key={j} className="text-gray-400 flex items-start gap-2">
                        <span className="text-accent-blue mt-1">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <p className="text-sm bg-black/40 p-3 rounded-lg border border-accent-blue/20 text-gray-300">
                    {tool.use_case}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Original Tools Grid - Removed to avoid duplication */}

      {/* Video Examples */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Video Showcase</h2>
            <p className="text-xl text-gray-400">Examples of AI-generated content possibilities</p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {videoExamples.map((video, i) => (
              <VideoShowcase
                key={i}
                title={video.title}
                description={video.description}
                tool={video.tool}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Capabilities Comparison */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Why Choose Our AI Video Services?</h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
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
              { icon: Play, title: 'Ultra-Fast Production', desc: 'Generate hours of content in days instead of weeks' },
              { icon: Sparkles, title: 'Professional Quality', desc: 'Hollywood-grade output from AI algorithms' },
              { icon: Zap, title: 'Cost-Effective', desc: 'Reduce production costs by up to 80%' },
              { icon: ArrowRight, title: 'Unlimited Revisions', desc: 'Regenerate and customize until perfect' },
            ].map((feature, i) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="glass p-8 rounded-xl flex gap-4"
                >
                  <Icon className="w-12 h-12 text-accent-blue flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.desc}</p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">How It Works</h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { num: 1, title: 'Brief Request', desc: 'Tell us your video concept or prompt' },
              { num: 2, title: 'AI Generation', desc: 'Our tools create multiple variations' },
              { num: 3, title: 'Refinement', desc: 'Fine-tune until you\'re satisfied' },
              { num: 4, title: 'Delivery', desc: 'Get optimized video instantly' },
            ].map((step, i) => (
              <motion.div key={i} variants={fadeInUp} transition={{ duration: 0.6 }} className="relative">
                <div className="glass p-8 rounded-xl text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-accent-blue to-accent-orange flex items-center justify-center font-bold text-xl mx-auto mb-4">
                    {step.num}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm">{step.desc}</p>
                </div>
                {i < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-1 bg-gradient-to-r from-accent-blue to-accent-orange transform -translate-y-1/2"></div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6 gradient-text">AI Video Generation Pricing</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                { duration: 'Single Video', price: '$50–$150', desc: 'One-time generation' },
                { duration: 'Monthly Package', price: '$400–$800', desc: '4-8 videos per month' },
                { duration: 'Enterprise', price: 'Custom', desc: 'Unlimited with support' },
              ].map((pkg, i) => (
                <div key={i} className="glass p-6 rounded-xl">
                  <h3 className="font-bold text-lg mb-2">{pkg.duration}</h3>
                  <p className="gradient-text text-2xl font-bold mb-2">{pkg.price}</p>
                  <p className="text-gray-400 text-sm">{pkg.desc}</p>
                </div>
              ))}
            </div>

            <Link
              to="/contact"
              className="inline-block px-8 py-3 bg-gradient-to-r from-accent-blue to-accent-orange rounded-lg font-semibold hover:shadow-lg glow-accent smooth-transition"
            >
              Start Your AI Video Project
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
