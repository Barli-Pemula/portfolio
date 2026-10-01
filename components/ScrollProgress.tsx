'use client'

import { useEffect, useState } from 'react'
import { motion, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const scaleX = useSpring(0, { stiffness: 200, damping: 30, restDelta: 0.001 })

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      if (totalHeight > 0) {
        const progress = window.scrollY / totalHeight
        scaleX.set(Math.min(Math.max(progress, 0), 1))
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scaleX])

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2.5px] z-[100] origin-left bg-gradient-to-r from-amber-500 via-amber-400 to-amber-300 pointer-events-none"
      style={{ scaleX }}
      aria-hidden="true"
    />
  )
}
