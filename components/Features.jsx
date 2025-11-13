'use client'
import { motion } from 'framer-motion'
import { Brain, Zap, Share2 } from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: "AI-Powered Analysis",
    description: "Advanced AI extracts key insights and timestamps from any YouTube video",
    color: "#4FD1C5"
  },
  {
    icon: Zap,
    title: "Instant Processing",
    description: "Get comprehensive summaries in seconds, not minutes",
    color: "#F687B3"
  },
  {
    icon: Share2,
    title: "Multi-Format Export",
    description: "Share via PDF, WhatsApp, Notion, or save to your dashboard",
    color: "#FFD700"
  }
]

export default function Features() {
  return (
    <section className="py-20 px-4 bg-[#0A0A0F]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-poppins">
            Why Choose <span className="bg-gradient-to-r from-[#4FD1C5] to-[#F687B3] bg-clip-text text-transparent">Sumr</span>?
          </h2>
          <p className="text-[#B8BCC8] text-xl max-w-2xl mx-auto">
            Transform your video consumption with AI-powered intelligence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ 
                y: -8,
                rotateY: 5,
                rotateX: 5,
              }}
              className="group p-8 bg-[#1A1A2E]/80 backdrop-blur-xl rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-500 cursor-pointer"
              style={{
                boxShadow: `0 20px 40px rgba(${feature.color === '#4FD1C5' ? '79,209,197' : feature.color === '#F687B3' ? '246,135,179' : '255,215,0'}, 0.1)`
              }}
            >
              <div className="mb-6">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{ 
                    background: `linear-gradient(135deg, ${feature.color}20, ${feature.color}40)`,
                    boxShadow: `0 0 20px ${feature.color}40`
                  }}
                >
                  <feature.icon 
                    className="w-8 h-8" 
                    style={{ color: feature.color }}
                  />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 font-poppins group-hover:text-[#4FD1C5] transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-[#B8BCC8] leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}