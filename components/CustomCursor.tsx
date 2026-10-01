'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [isPointer, setIsPointer] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    // Only run on non-touch devices
    if (
      window.matchMedia('(pointer: coarse)').matches ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)

      const target = e.target as HTMLElement | null
      if (target) {
        const isInteractive = Boolean(
          target.closest('a, button, input, textarea, [role="button"], [data-cursor="pointer"]')
        )
        setIsPointer(isInteractive)
      }
    }

    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    document.body.addEventListener('mouseleave', handleMouseLeave)
    document.body.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.body.removeEventListener('mouseleave', handleMouseLeave)
      document.body.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [isVisible])

  if (!isMounted || !isVisible) return null

  return (
    <div className="hidden lg:block fixed inset-0 pointer-events-none z-[60]" aria-hidden="true">
      {/* Outer follow circle */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-amber-400/40 bg-amber-400/10 pointer-events-none"
        animate={{
          x: position.x - (isPointer ? 24 : 16),
          y: position.y - (isPointer ? 24 : 16),
          width: isPointer ? 48 : 32,
          height: isPointer ? 48 : 32,
          borderColor: isPointer ? 'rgba(243, 199, 82, 0.8)' : 'rgba(229, 169, 60, 0.4)',
        }}
        transition={{
          type: 'spring',
          damping: 24,
          stiffness: 300,
          mass: 0.5,
        }}
      />
      {/* Tiny inner center dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-amber-400 pointer-events-none"
        animate={{
          x: position.x - 3,
          y: position.y - 3,
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 35,
          stiffness: 450,
          mass: 0.1,
        }}
      />
    </div>
  )
}
