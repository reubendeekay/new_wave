"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Sparkles, Shield, Clock, Leaf } from "lucide-react"

const cards = [
  {
    icon: Sparkles,
    title: "Spotless Clean",
    color: "from-green-400 to-emerald-600",
    delay: 0,
  },
  {
    icon: Shield,
    title: "100% Safe",
    color: "from-blue-400 to-cyan-600",
    delay: 0.2,
  },
  {
    icon: Clock,
    title: "Always On Time",
    color: "from-purple-400 to-violet-600",
    delay: 0.4,
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    color: "from-orange-400 to-red-600",
    delay: 0.6,
  },
]

export function FloatingCards() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -100])

  return (
    <div ref={containerRef} className="relative py-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: card.delay,
              ease: "easeOut",
            }}
            whileHover={{
              scale: 1.05,
              rotateY: 10,
              rotateX: -10,
              transition: { duration: 0.3 },
            }}
            style={{ y }}
            className="group relative"
          >
            <motion.div
              className={`relative h-40 rounded-2xl bg-gradient-to-br ${card.color} p-6 shadow-2xl overflow-hidden cursor-pointer`}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Animated background pattern */}
              <motion.div
                className="absolute inset-0 opacity-20"
                initial={{ backgroundPosition: "0% 0%" }}
                animate={{ backgroundPosition: "100% 100%" }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              />
              
              {/* Floating icon */}
              <motion.div
                animate={{
                  y: [-5, 5, -5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <card.icon className="h-12 w-12 text-white mb-3" />
              </motion.div>
              
              <h3 className="text-white font-bold text-lg">{card.title}</h3>
              
              {/* Hover glow effect */}
              <motion.div
                className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}