import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
}

export default function Pricing() {
  const packages = [
    {
      name: 'Starter Package',
      price: '$280',
      period: '/month',
      features: [
        '4 Long Videos (8-10 min each)',
        'Professional Editing',
        'Subtitles & Captions',
        'Music & Sound Effects',
        'Standard Delivery (5-7 days)',
      ],
      highlighted: false,
      videoBreakdown: '4 × $30 = $120 value | Save 57% with monthly plan'
    },
    {
      name: 'Growth Package',
      price: '$550',
      period: '/month',
      features: [
        '8 Long Videos (8-10 min each)',
        '4 YouTube Shorts (30-60 sec)',
        'Motion Graphics',
        'Retention Optimization',
        'Thumbnail Design',
        'SEO Formatting',
        'Priority Support (3-5 days)',
      ],
      highlighted: true,
      videoBreakdown: '8 × $30 + 4 × $4 = $256 value | Save 53% with monthly plan'
    },
    {
      name: 'Pro Automation',
      price: '$900',
      period: '/month',
      features: [
        '12 Long Videos (8-10 min each)',
        '4 YouTube Shorts (30-60 sec)',
        '3D Animation Add-on',
        'Advanced Effects & Graphics',
        'Priority Delivery (2-3 days)',
        'Dedicated Account Manager',
        '24/7 Support',
        'Monthly Strategy Call',
      ],
      highlighted: false,
      videoBreakdown: '12 × $30 + 4 × $4 = $376 value | Save 58% with monthly plan'
    },
  ]

  const singlePricing = [
    { service: 'Long Video (8-10 min)', price: '$30' },
    { service: 'Medium Video (5-7 min)', price: '$15' },
    { service: 'YouTube Short (30-60 sec)', price: '$3-$5' },
    { service: '3D Logo Animation', price: '$100–$200' },
    { service: '3D Product Video', price: '$200–$500' },
    { service: 'Motion Graphics (30s)', price: '$50–$100' },
    { service: 'Portfolio - Basic', price: '$15' },
    { service: 'Portfolio - Professional', price: '$30' },
    { service: 'LMS (Learning Management System)', price: '$500+ (depends on client)' },
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
            💰 Affordable & Flexible
          </div>
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Flexible plans that scale with your business. Save up to 57% with monthly packages.
          </p>
        </motion.div>
      </section>

      {/* Monthly Packages */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Monthly Packages</h2>
          
          <motion.div
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
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
            {packages.map((pkg, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                transition={{ duration: 0.6 }}
                className={`rounded-xl p-8 smooth-transition ${
                  pkg.highlighted
                    ? 'glass border-2 border-accent-blue scale-105 md:scale-110'
                    : 'glass hover:border-accent-orange/50'
                }`}
              >
                {pkg.highlighted && (
                  <div className="bg-gradient-to-r from-accent-blue to-accent-orange text-black text-center py-2 rounded-lg mb-4 font-bold">
                    MOST POPULAR
                  </div>
                )}
                
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold gradient-text">{pkg.price}</span>
                  <span className="text-gray-400 ml-2">{pkg.period}</span>
                </div>
                {pkg.videoBreakdown && (
                  <p className="text-sm text-accent-blue bg-accent-blue/10 p-3 rounded-lg mb-6">{pkg.videoBreakdown}</p>
                )}

                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3">
                      <Check size={20} className="text-accent-blue flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full py-3 rounded-lg font-semibold flex items-center justify-center gap-2 smooth-transition ${
                    pkg.highlighted
                      ? 'bg-gradient-to-r from-accent-blue to-accent-orange hover:shadow-lg glow-accent'
                      : 'border-2 border-accent-blue text-accent-blue hover:bg-accent-blue/10'
                  }`}
                >
                  Get Started <ArrowRight size={18} />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Single Video Pricing */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center gradient-text">Single Video Pricing</h2>
          
          <motion.div
            className="glass p-8 rounded-xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-2 gap-6">
              {singlePricing.map((item, i) => (
                <div key={i} className="flex justify-between items-center pb-4 border-b border-accent-blue/20">
                  <span className="text-gray-300">{item.service}</span>
                  <span className="font-bold text-accent-orange">{item.price}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <p className="text-center text-gray-400 mt-8">
            Need custom pricing? Contact us for enterprise solutions and bulk packages
          </p>
        </div>
      </section>

      {/* FAQ / What's Included */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="glass p-12 rounded-xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-8 gradient-text">What's Included in Every Package?</h2>
            
            <div className="space-y-6">
              {[
                {
                  title: 'Professional Editing',
                  desc: 'Expert color grading, sound design, and pacing optimization',
                },
                {
                  title: 'SEO Optimization',
                  desc: 'Proper formatting, keywords, and meta descriptions for YouTube',
                },
                {
                  title: 'Revision Support',
                  desc: 'Unlimited revisions until you are completely satisfied',
                },
                {
                  title: 'Fast Delivery',
                  desc: 'Quick turnaround times without compromising quality',
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <Check className="text-accent-blue flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6">Ready to Scale Your Channel?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            No setup fees. Cancel anytime. Start your free consultation today.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-gradient-to-r from-accent-blue to-accent-orange rounded-lg font-semibold hover:shadow-lg glow-accent smooth-transition"
          >
            Get a Free Quote
          </Link>
        </motion.div>
      </section>
    </div>
  )
}
