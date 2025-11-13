'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Home, List, BarChart3, Settings, Download, MessageCircle, FileText, Play, Clock } from 'lucide-react'

const sidebarItems = [
  { icon: Home, label: 'Dashboard', active: true },
  { icon: List, label: 'Summaries' },
  { icon: BarChart3, label: 'Analytics' },
  { icon: Settings, label: 'Settings' }
]

export default function Dashboard() {
  const [url, setUrl] = useState('')
  const [isProcessing, setIsProcessing] = useState(false)
  const [summary, setSummary] = useState(null)
  const [showSummary, setShowSummary] = useState(false)

  const handleSummarize = async () => {
    if (!url) return
    setIsProcessing(true)
    
    // Simulate API call
    setTimeout(() => {
      setSummary({
        title: "How to Build a SaaS in 2024",
        duration: "15:32",
        points: [
          { timestamp: "00:30", text: "Introduction to SaaS fundamentals", actionable: "Research your target market" },
          { timestamp: "03:15", text: "Choosing the right tech stack", actionable: "Compare React vs Vue for frontend" },
          { timestamp: "07:45", text: "Database design principles", actionable: "Design your schema before coding" },
          { timestamp: "12:20", text: "Deployment and scaling strategies", actionable: "Set up CI/CD pipeline early" }
        ]
      })
      setIsProcessing(false)
      setShowSummary(true)
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-[#0A0A0F] flex">
      {/* Sidebar */}
      <div className="w-80 bg-[#1A1A2E]/90 backdrop-blur-xl border-r border-[#4FD1C5]/20 p-6">
        <div className="mb-8">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-[#4FD1C5] to-[#F687B3] bg-clip-text text-transparent font-poppins">
            Sumr
          </h1>
        </div>
        
        <nav className="space-y-2">
          {sidebarItems.map((item, index) => (
            <motion.div
              key={index}
              className={`flex items-center space-x-4 p-4 rounded-2xl transition-all duration-300 cursor-pointer ${
                item.active 
                  ? 'bg-gradient-to-r from-[#4FD1C5]/20 to-[#F687B3]/20 text-[#4FD1C5] shadow-[0_0_20px_rgba(79,209,197,0.3)]'
                  : 'text-[#B8BCC8] hover:bg-[#4FD1C5]/10 hover:text-[#4FD1C5]'
              }`}
              whileHover={{ x: 4 }}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
              {item.active && (
                <motion.div
                  className="absolute left-0 w-1 h-8 bg-gradient-to-b from-[#4FD1C5] to-[#F687B3] rounded-r"
                  layoutId="activeIndicator"
                />
              )}
            </motion.div>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          {/* Input Card */}
          <motion.div
            className="p-8 bg-[#1A1A2E]/80 backdrop-blur-xl rounded-3xl border border-[#4FD1C5]/30 mb-8"
            whileHover={{ 
              y: -4,
              boxShadow: "0 20px 60px rgba(79,209,197,0.2)"
            }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-2xl font-bold text-white mb-6 font-poppins">
              Paste YouTube URL
            </h2>
            
            <div className="flex space-x-4">
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://youtube.com/watch?v=..."
                className="flex-1 p-4 bg-[#0A0A0F]/50 border border-[#4FD1C5]/20 rounded-2xl text-white placeholder-[#6B7280] focus:border-[#4FD1C5] focus:shadow-[0_0_20px_rgba(79,209,197,0.3)] focus:outline-none transition-all"
              />
              
              <motion.button
                onClick={handleSummarize}
                disabled={!url || isProcessing}
                className="px-8 py-4 bg-gradient-to-r from-[#4FD1C5] to-[#F687B3] rounded-2xl font-semibold text-white disabled:opacity-50 flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Play className="w-5 h-5" />
                <span>{isProcessing ? 'Processing...' : 'Summarize'}</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Loading Animation */}
          <AnimatePresence>
            {isProcessing && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="p-8 bg-[#1A1A2E]/60 backdrop-blur-xl rounded-3xl border border-[#4FD1C5]/20 mb-8"
              >
                <div className="text-center">
                  <div className="flex justify-center space-x-2 mb-4">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-3 h-3 bg-[#4FD1C5] rounded-full"
                        animate={{ y: [-10, 10, -10] }}
                        transition={{ 
                          duration: 1.5, 
                          repeat: Infinity, 
                          delay: i * 0.2 
                        }}
                      />
                    ))}
                  </div>
                  <p className="text-[#B8BCC8]">AI is analyzing your video...</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Summary Card */}
          <AnimatePresence>
            {showSummary && summary && (
              <motion.div
                initial={{ opacity: 0, rotateY: -90 }}
                animate={{ opacity: 1, rotateY: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="p-8 bg-[#16213E]/80 backdrop-blur-xl rounded-3xl border border-[#F687B3]/20 mb-8"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white font-poppins">
                    {summary.title}
                  </h3>
                  <div className="flex items-center space-x-2 text-[#B8BCC8]">
                    <Clock className="w-4 h-4" />
                    <span>{summary.duration}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  {summary.points.map((point, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 }}
                      className="p-4 bg-[#1A1A2E]/60 rounded-2xl border border-[#4FD1C5]/10"
                    >
                      <div className="flex items-start space-x-4">
                        <span className="px-3 py-1 bg-[#4FD1C5]/20 text-[#4FD1C5] rounded-full text-sm font-mono">
                          {point.timestamp}
                        </span>
                        <div className="flex-1">
                          <p className="text-white mb-2">{point.text}</p>
                          <p className="text-[#F687B3] text-sm">💡 {point.actionable}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Action Buttons */}
          <AnimatePresence>
            {showSummary && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex space-x-4"
              >
                {[
                  { icon: Download, label: 'Download PDF', color: '#4FD1C5' },
                  { icon: MessageCircle, label: 'Share WhatsApp', color: '#F687B3' },
                  { icon: FileText, label: 'Export Notion', color: '#FFD700' }
                ].map((action, index) => (
                  <motion.button
                    key={index}
                    className="flex items-center space-x-2 px-6 py-3 bg-[#1A1A2E]/60 backdrop-blur-xl rounded-2xl border transition-all duration-300"
                    style={{ 
                      borderColor: `${action.color}30`,
                    }}
                    whileHover={{ 
                      borderColor: action.color,
                      boxShadow: `0 0 20px ${action.color}40`,
                      scale: 1.05
                    }}
                  >
                    <action.icon className="w-5 h-5" style={{ color: action.color }} />
                    <span className="text-white">{action.label}</span>
                  </motion.button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}