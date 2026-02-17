import { motion } from 'framer-motion'
import { Film, Zap, Sparkles, ArrowRight, Mail, MessageCircle, Briefcase, BookOpen } from 'lucide-react'
import { useState } from 'react'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
}

export default function Services() {
  const [activeContactMenu, setActiveContactMenu] = useState<number | null>(null)

  const serviceDetails = [
    {
      id: 0,
      icon: Film,
      title: 'History & Educational Videos',
      features: [
        'Engaging historical narratives',
        'Multi-language support (English, Spanish, Urdu, Hindi, Arabic)',
        'Archival footage integration',
        'Timeline graphics & animations',
        'Educational animations',
        'Professional voice-over in multiple languages',
        'Historical accuracy verification',
      ],
      highlight: 'Bring history to life in any language',
    },
    {
      id: 1,
      icon: Film,
      title: 'Faceless YouTube Video Editing',
      features: [
        'Script to full video production',
        'Premium stock footage integration',
        'Motion graphics',
        'Dynamic subtitles',
        'Sound design',
        'Background music',
        'Engagement-focused pacing',
      ],
      highlight: 'Optimized for retention & watch time',
    },
    {
      id: 2,
      icon: Zap,
      title: 'YouTube Automation Packages',
      features: [
        'Long-form videos (8–15 min)',
        'Shorts content repurposing',
        'Thumbnail support',
        'Basic SEO formatting',
        'Content consistency planning',
        'Monthly delivery schedule',
        'Channel growth strategy',
      ],
      highlight: 'Built for scaling automation channels',
    },
    {
      id: 3,
      icon: Sparkles,
      title: 'YouTube Shorts Editing',
      features: [
        'Fast-paced editing',
        'Hook optimization',
        'Dynamic captions',
        'Viral format structuring',
        'Platform optimization',
        'Trend-focused content',
        'Quick turnaround (24-48 hrs)',
        'Professional video examples',
      ],
      highlight: 'Fast-paced content for maximum virality',
    },
    {
      id: 4,
      icon: Film,
      title: 'Website Development',
      features: [
        'Custom website design and development',
        'Responsive and mobile-friendly design',
        'eCommerce website development',
        'Landing page design for marketing',
        'SEO-optimized website structure',
        'Website speed optimization',
        'Website maintenance and support',
      ],
      highlight: 'Build your online presence with modern web solutions',
    },
    {
      id: 7,
      icon: Sparkles,
      title: 'App Development',
      features: [
        'Android app development',
        'iOS app development',
        'Cross-platform app solutions',
        'User-friendly UI/UX design',
        'Scalable backend development',
        'API integrations',
        'App testing and deployment',
      ],
      highlight: 'Native and cross-platform mobile applications',
    },
    {
      id: 8,
      icon: Zap,
      title: 'n8n Automation & Workflow Solutions',
      features: [
        'Workflow automation for businesses',
        'CRM automation',
        'Email automation systems',
        'WhatsApp automation integration',
        'Social media automation',
        'Data synchronization between platforms',
        'Time-saving and cost reduction',
      ],
      highlight: 'Automate repetitive tasks and scale operations efficiently',
    },
    {
      id: 9,
      icon: Sparkles,
      title: 'Agentic AI Solutions',
      features: [
        'AI agents for business automation',
        'AI chatbots for websites',
        'AI customer support automation',
        'AI-powered lead generation',
        'AI data analysis systems',
        'Smart decision-making systems',
        'Future-ready AI transformation',
      ],
      highlight: 'Intelligent AI agents that work for your business 24/7',
    },
    {
      id: 10,
      icon: Briefcase,
      title: 'Portfolio Development',
      features: [
        'Professional portfolio website design',
        'Responsive and modern layouts',
        'Project showcase galleries',
        'Interactive portfolio pieces',
        'SEO-optimized portfolio structure',
        'Fast loading and performance optimization',
        'Custom domain setup',
        'Portfolio maintenance and updates',
      ],
      highlight: 'Showcase your work and land more clients with a stunning portfolio',
    },
    {
      id: 11,
      icon: BookOpen,
      title: 'LMS (Learning Management System)',
      features: [
        'Complete learning platform for universities, colleges & students',
        'Course management and organization',
        'Student enrollment and progress tracking',
        'Interactive quizzes and assessments',
        'Assignment submission and grading',
        'Discussion forums and collaboration tools',
        'Video content hosting and streaming',
        'Certificate generation and digital badges',
        'Mobile-responsive learning interface',
        'Advanced analytics and reporting',
        'Customizable branding and themes',
      ],
      highlight: 'Complete digital learning platform for educational institutions',
    },
    {
      id: 12,
      icon: Film,
      title: 'Brand Videos & Product Shoots',
      features: [
        'Professional product video shooting',
        'Commercial advertising videos',
        'Brand storytelling and promotional content',
        'Professional cinematography and equipment',
        'On-location and studio shoots',
        'Multi-camera professional setup',
        'Post-production editing and color grading',
        'Music and sound design integration',
        'Special effects and motion graphics',
        'Delivery in multiple formats (4K, Full HD)',
      ],
      highlight: 'Elevate your brand with professional marketing videos and product shoots',
    },  ]

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
            ✨ Comprehensive Digital Solutions
          </div>
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">Our Services</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            One-stop solution for all your digital needs. From content creation to AI automation.
          </p>
        </motion.div>
      </section>

      {/* Services Details */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {serviceDetails.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`mb-20 grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}
              >
                {/* Content */}
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <Icon className="w-12 h-12 text-accent-blue" />
                    <h2 className="text-3xl md:text-4xl font-bold">{service.title}</h2>
                  </div>
                  
                  <div className="glass p-6 rounded-xl mb-6">
                    <h3 className="text-accent-orange font-semibold mb-2">Highlight</h3>
                    <p className="text-gray-300">{service.highlight}</p>
                  </div>

                  <h4 className="text-lg font-semibold text-accent-blue mb-4">Includes:</h4>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-accent-orange mt-1">✓</span>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="relative inline-block">
                    <button
                      onClick={() => setActiveContactMenu(activeContactMenu === index ? null : index)}
                      className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-accent-blue to-accent-orange rounded-lg font-semibold hover:shadow-lg glow-accent smooth-transition"
                    >
                      Order Now <ArrowRight size={18} />
                    </button>

                    {/* Contact Options Menu */}
                    {activeContactMenu === index && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-xl overflow-hidden z-50 min-w-max"
                      >
                        <a
                          href={`mailto:studentagent09@gmail.com?subject=Order%20-%20${service.title}&body=Hi%20Rajowalia!%20I%20want%20to%20order%20${service.title}%20service.`}
                          onClick={() => setActiveContactMenu(null)}
                          className="flex items-center gap-3 px-6 py-3 text-gray-900 hover:bg-gray-100 smooth-transition border-b border-gray-200 last:border-b-0"
                        >
                          <Mail size={18} className="text-accent-blue" />
                          <span className="font-medium">Email Details</span>
                        </a>
                        <a
                          href={`https://wa.me/923046999198?text=Hi%20Rajowalia!%20I%20want%20to%20order%20${service.title}%20service.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setActiveContactMenu(null)}
                          className="flex items-center gap-3 px-6 py-3 text-gray-900 hover:bg-gray-100 smooth-transition"
                        >
                          <MessageCircle size={18} className="text-green-500" />
                          <span className="font-medium">Chat on WhatsApp</span>
                        </a>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Service Pricing</h2>
            <p className="text-xl text-gray-400">Transparent pricing for all services</p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
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
              { title: 'YouTube Services', icon: '📹', items: [
                { service: 'Long Video (8-10 min)', price: '$30' },
                { service: 'Medium Video (5-7 min)', price: '$15' },
                { service: 'YouTube Short (30-60 sec)', price: '$3-$5' },
              ]},
              { title: 'Digital Services', icon: '💻', items: [
                { service: 'Website Development', price: '$500-$2,000' },
                { service: 'Mobile App', price: '$500-$2,000' },
                { service: 'n8n Automation', price: '$500-$3,000' },
                { service: 'Agentic AI Solution', price: '$1,000-$5,000' },
              ]}
            ].map((category, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="glass p-8 rounded-xl"
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-2xl font-bold mb-6 gradient-text">{category.title}</h3>
                <div className="space-y-4">
                  {category.items.map((item, j) => (
                    <div key={j} className="flex justify-between items-center pb-3 border-b border-accent-blue/20">
                      <span className="text-gray-300">{item.service}</span>
                      <span className="font-bold text-accent-orange">{item.price}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-12 glass p-8 rounded-xl text-center max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-300 mb-4">
              💡 <span className="text-accent-blue font-semibold">Save up to 57% with monthly packages</span> compared to per-video pricing
            </p>
            <p className="text-gray-400">
              Need custom pricing? Contact us for enterprise solutions, bulk packages, and long-term partnerships.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="glass p-12 rounded-xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-4 gradient-text">Quality Guarantee</h2>
            <p className="text-gray-300 mb-4">
              Every project is handled with meticulous attention to detail. We ensure your content meets YouTube's algorithm requirements while maintaining creative excellence and brand consistency.
            </p>
            <ul className="space-y-2 text-gray-300">
              <li>✓ Fast turnaround times without compromising quality</li>
              <li>✓ Unlimited revisions until you're satisfied</li>
              <li>✓ SEO-optimized content for maximum visibility</li>
              <li>✓ Professional delivery formats</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Languages Section */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Multilingual Support</h2>
            <p className="text-gray-400">We create content in multiple languages for global audiences</p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-5 gap-6"
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
              { lang: 'English', flag: '🇺🇸', speakers: 'Global' },
              { lang: 'Spanish', flag: '🇪🇸', speakers: 'Latin America' },
              { lang: 'Hindi', flag: '🇮🇳', speakers: 'India' },
              { lang: 'Urdu', flag: '🇵🇰', speakers: 'Pakistan' },
              { lang: 'Arabic', flag: '🇸🇦', speakers: 'Middle East' },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="glass p-8 rounded-xl text-center hover:border-accent-blue/50 smooth-transition"
              >
                <div className="text-5xl mb-4">{item.flag}</div>
                <h3 className="text-lg font-bold mb-2">{item.lang}</h3>
                <p className="text-gray-400 text-sm">{item.speakers}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-12 glass p-8 rounded-xl text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-300 mb-4">
              Our team includes native speakers and professional voice-over artists for each language. We ensure cultural accuracy and localization for maximum audience engagement.
            </p>
            <p className="text-accent-blue font-semibold">Need a different language? Contact us for availability.</p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
