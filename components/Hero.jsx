'use client'
import { motion } from 'framer-motion'
import { Play, Sparkles } from 'lucide-react'

function FloatingShape() {
  return (
    <motion.div
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-20 bg-gradient-to-br from-[#1A1A2E] to-[#4FD1C5] rounded-2xl shadow-[0_0_50px_rgba(79,209,197,0.4)]"
      animate={{
        y: [-10, 10, -10],
        rotateY: [0, 5, 0, -5, 0]
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  )
}

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0A0A0F] via-[#1A1A2E] to-[#0A0A0F] relative overflow-hidden flex items-center justify-center">
      {/* Floating Shape */}
      <div className="absolute inset-0 w-full h-full">
        <FloatingShape />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-8 h-8 text-[#4FD1C5] mr-3 animate-pulse" />
            <span className="text-[#B8BCC8] text-lg font-medium">AI-Powered Summaries</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-[#4FD1C5] to-[#F687B3] bg-clip-text text-transparent mb-6 font-poppins">
            Sumr
          </h1>
          
          <p className="text-xl md:text-2xl text-[#B8BCC8] mb-8 max-w-2xl mx-auto leading-relaxed">
            Turn any YouTube video into smart summaries with timestamps, key points, and actionable notes
          </p>

          <motion.button
            className="group px-8 py-4 bg-gradient-to-r from-[#4FD1C5] to-[#F687B3] rounded-2xl font-semibold text-white text-lg flex items-center mx-auto space-x-3 shadow-[0_0_30px_rgba(79,209,197,0.3)]"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 40px rgba(79,209,197,0.5)"
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <Play className="w-5 h-5 group-hover:animate-pulse" />
            <span>Summarize Now</span>
          </motion.button>
        </motion.div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#4FD1C5] rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </section>
  )
}