"use client"

import { motion } from "framer-motion"

export function AnimatedGradient() {
  return (
    <div className="absolute inset-0 -z-20 overflow-hidden">
      {/* Animated gradient blobs */}
      <motion.div
        className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-br from-green-400/30 to-blue-400/30 blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-gradient-to-br from-purple-400/30 to-pink-400/30 blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute top-1/2 left-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-yellow-400/20 to-orange-400/20 blur-3xl"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  )
}