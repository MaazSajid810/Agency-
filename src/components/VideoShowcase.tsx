import { motion } from 'framer-motion'
import { Play, Zap, Sparkles } from 'lucide-react'

interface VideoShowcaseProps {
  title: string
  description: string
  tool: 'flow' | 'sora2'
  videoUrl?: string
  imageUrl?: string
}

export default function VideoShowcase({ title, description, tool, videoUrl, imageUrl }: VideoShowcaseProps) {
  const toolInfo = {
    flow: {
      name: 'Flow',
      color: 'from-accent-blue to-cyan-500',
      icon: Zap,
      desc: 'Advanced motion generation'
    },
    sora2: {
      name: 'Sora 2',
      color: 'from-accent-orange to-accent-blue',
      icon: Sparkles,
      desc: 'AI-powered video creation'
    },
  }

  const info = toolInfo[tool]
  const Icon = info.icon

  return (
    <motion.div
      className="glass rounded-xl overflow-hidden hover:border-accent-blue/50 smooth-transition group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Video Container */}
      <div className={`relative aspect-video bg-gradient-to-br ${info.color} overflow-hidden group/video`}>
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : videoUrl ? (
          <video
            src={videoUrl}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-black/40">
            <Icon className="w-24 h-24 text-white/30 group-hover/video:scale-110 smooth-transition" />
          </div>
        )}
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 group-hover/video:bg-black/20 smooth-transition flex items-center justify-center">
          <Play className="w-16 h-16 text-white opacity-0 group-hover/video:opacity-100 smooth-transition" fill="white" />
        </div>

        {/* Tool Badge */}
        <div className={`absolute top-4 right-4 bg-gradient-to-r ${info.color} text-white px-4 py-2 rounded-full text-sm font-bold`}>
          {info.name}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <p className="text-sm text-accent-blue font-semibold">{info.desc}</p>
      </div>
    </motion.div>
  )
}
