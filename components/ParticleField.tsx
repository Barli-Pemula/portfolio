'use client'

import { useEffect, useRef } from 'react'

export default function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    // Respect user's reduced-motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
      isAccent: boolean
    }> = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createParticles = () => {
      particles = []
      // Subtle particle count to avoid GPU/battery drains
      const count = Math.min(Math.floor((canvas.width * canvas.height) / 24000), 50)
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.22,
          vy: (Math.random() - 0.5) * 0.22,
          size: Math.random() * 1.2 + 0.6,
          opacity: Math.random() * 0.35 + 0.1,
          isAccent: Math.random() > 0.65,
        })
      }
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p, i) => {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        if (p.isAccent) {
          ctx.fillStyle = `rgba(229, 169, 60, ${p.opacity})`
        } else {
          ctx.fillStyle = `rgba(180, 190, 205, ${p.opacity * 0.4})`
        }
        ctx.fill()

        // Subtle constellation connections
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[j].x - p.x
          const dy = particles[j].y - p.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(particles[j].x, particles[j].y)
            const lineOpacity = (1 - dist / 120) * 0.04
            ctx.strokeStyle = p.isAccent || particles[j].isAccent
              ? `rgba(229, 169, 60, ${lineOpacity})`
              : `rgba(180, 190, 205, ${lineOpacity * 0.5})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      })

      animationId = requestAnimationFrame(drawParticles)
    }

    resize()
    createParticles()
    drawParticles()

    let resizeTimer: NodeJS.Timeout
    const handleResize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(() => {
        resize()
        createParticles()
      }, 150)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.5 }}
      aria-hidden="true"
    />
  )
}
