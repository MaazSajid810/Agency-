import { motion } from 'framer-motion'
import { Play } from 'lucide-react'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
}

export default function Portfolio() {
  const portfolioItems = [
    {
      id: 1,
      title: 'Ancient Rome Documentary',
      category: 'History Videos',
      desc: 'Educational historical documentary with multilingual support',
      image: '📚',
    },
    {
      id: 2,
      title: 'World War History Series',
      category: 'Educational Content',
      desc: 'In-depth history series in English, Spanish & Urdu',
      image: '📖',
    },
    {
      id: 3,
      title: 'Tech Tips Daily',
      category: 'Long-Form Videos',
      desc: 'High-retention tech tutorials with advanced editing',
      image: '🎬',
    },
    {
      id: 4,
      title: 'Crypto Explained',
      category: 'Shorts',
      desc: 'Viral shorts with hook optimization',
      image: '📱',
    },
    {
      id: 5,
      title: 'Islamic History Chronicles',
      category: 'History Videos',
      desc: 'Historical narratives in Arabic, Urdu & English',
      image: '🕌',
    },
    {
      id: 6,
      title: 'Indian Civilization Story',
      category: 'Educational Videos',
      desc: 'Cultural history videos in Hindi & English',
      image: '🏛️',
    },
    {
      id: 7,
      title: 'AI Tools Review',
      category: 'Long-Form Videos',
      desc: 'In-depth product reviews with 3D animations',
      image: '🤖',
    },
    {
      id: 8,
      title: 'Brand Intro',
      category: '3D Animation',
      desc: 'Professional 3D logo and intro animation',
      image: '✨',
    },
    {
      id: 9,
      title: 'Business Automation',
      category: 'Automation Packages',
      desc: '12 videos/month with consistent branding',
      image: '⚙️',
    },
  ]

  const beforeAfter = [
    {
      title: 'Before & After: Editing Improvement',
      before: 'Basic cuts, no effects, poor pacing',
      after: 'Professional editing, motion graphics, optimized retention',
    },
    {
      title: 'Before & After: Animation Enhancement',
      before: 'Plain text overlays and static graphics',
      after: '3D animated elements with smooth transitions',
    },
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
            🎯 Proven Results
          </div>
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">Our Portfolio</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Showcase of successful projects that have transformed businesses and enabled growth.
          </p>
        </motion.div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-12 gradient-text text-center">Featured Projects</h2>
          
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
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
            {portfolioItems.map((item) => (
              <motion.div
                key={item.id}
                variants={fadeInUp}
                className="glass rounded-xl overflow-hidden hover:border-accent-blue/50 smooth-transition group cursor-pointer"
              >
                <div className="aspect-video bg-gradient-to-br from-accent-blue/20 to-accent-orange/20 flex items-center justify-center text-6xl overflow-hidden relative">
                  <span className="group-hover:scale-110 smooth-transition">{item.image}</span>
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 smooth-transition flex items-center justify-center">
                    <Play className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 smooth-transition" fill="white" />
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-accent-blue text-sm font-semibold mb-2">{item.category}</p>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* History Videos Showcase */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">History & Educational Videos</h2>
            <p className="text-xl text-gray-400">Multilingual historical documentaries in English, Spanish, Urdu, Hindi & Arabic</p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8 mb-12"
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
              { title: 'Ancient Rome', languages: 'English, Spanish, Urdu' },
              { title: 'World War History', languages: 'English, Hindi, Arabic' },
              { title: 'Islamic History', languages: 'Arabic, Urdu, English' },
              { title: 'Indian Civilization', languages: 'Hindi, English, Spanish' },
              { title: 'Medieval Period', languages: 'English, Urdu, Arabic' },
              { title: 'Modern History', languages: 'Multi-language Support' },
            ].map((project, i) => (
              <motion.div
                key={i}
                variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }}
                className="glass p-6 rounded-xl hover:border-accent-orange/50 smooth-transition"
              >
                <h3 className="text-lg font-bold mb-3">{project.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {project.languages.split(', ').map((lang, j) => (
                    <span key={j} className="text-xs bg-accent-blue/20 text-accent-blue px-3 py-1 rounded-full">
                      {lang}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="glass p-8 rounded-xl text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-300 mb-4">
              Our history video projects combine engaging storytelling with professional editing and multilingual voice-overs. Each video is researched, verified, and optimized for YouTube's algorithm across different language markets.
            </p>
            <p className="text-accent-orange font-semibold">
              We work with native speakers and professional historians to ensure cultural accuracy and engagement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Before & After */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 gradient-text text-center">Before & After Transformations</h2>
          
          <motion.div
            className="grid md:grid-cols-2 gap-12"
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
            {beforeAfter.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}                transition={{ duration: 0.6 }}                className="glass p-8 rounded-xl"
              >
                <h3 className="text-xl font-bold mb-6 text-accent-orange">{item.title}</h3>
                <div className="space-y-4">
                  <div className="bg-red-900/20 border border-red-500/30 p-4 rounded-lg">
                    <p className="text-sm text-gray-300">
                      <span className="font-semibold text-red-400">Before:</span> {item.before}
                    </p>
                  </div>
                  <div className="text-center text-accent-blue font-semibold">↓ Our Magic ↓</div>
                  <div className="bg-green-900/20 border border-green-500/30 p-4 rounded-lg">
                    <p className="text-sm text-gray-300">
                      <span className="font-semibold text-green-400">After:</span> {item.after}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8 gradient-text">Real Results</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { stat: '190+', label: 'Projects Completed' },
                { stat: '95%', label: 'Client Satisfaction' },
                { stat: '$3M+', label: 'Total Savings' },
              ].map((item, i) => (
                <div key={i} className="glass p-6 rounded-xl">
                  <div className="text-3xl font-bold gradient-text mb-2">{item.stat}</div>
                  <p className="text-gray-400">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
