'use client'

import { useEffect, useState } from 'react'
import { FiArrowUpRight, FiGithub, FiLinkedin } from 'react-icons/fi'
import { MdEmail } from 'react-icons/md'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import Image from 'next/image'

function useTypingEffect(texts: string[], typingSpeed = 70, deletingSpeed = 35, pauseTime = 2200) {
  const [displayText, setDisplayText] = useState('')
  const [textIndex, setTextIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentText = texts[textIndex]

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentText.slice(0, displayText.length + 1))
        if (displayText.length === currentText.length) {
          setTimeout(() => setIsDeleting(true), pauseTime)
        }
      } else {
        setDisplayText(currentText.slice(0, displayText.length - 1))
        if (displayText.length === 0) {
          setIsDeleting(false)
          setTextIndex((prev) => (prev + 1) % texts.length)
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pauseTime])

  return displayText
}

function AnimatedCounter({ target, duration = 1.8, suffix = '' }: { target: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const frames = duration * 60
    const increment = target / frames
    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 1000 / 60)

    return () => clearInterval(timer)
  }, [target, duration])

  return <span>{count}{suffix}</span>
}

export default function Hero() {
  const typedText = useTypingEffect([
    'Frontend Developer',
    'Creator of Elegant Experiences',
    'Creative Problem Solver',
    'Computer Science Student',
  ])

  // Mouse coordinate tracker for soft 3D tilt
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springConfig = { damping: 25, stiffness: 180 }
  const springX = useSpring(mouseX, springConfig)
  const springY = useSpring(mouseY, springConfig)

  const rotateX = useTransform(springY, [-250, 250], [6, -6])
  const rotateY = useTransform(springX, [-250, 250], [-6, 6])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left - rect.width / 2)
    mouseY.set(e.clientY - rect.top - rect.height / 2)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.15 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  }

  const stats = [
    { label: 'Featured Projects', value: 3, suffix: '+' },
    { label: 'Core Languages', value: 3, suffix: '+' },
    { label: 'Year Learning', value: 1, suffix: '' },
  ]

  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center pt-24 pb-10 lg:pt-24 lg:pb-20 overflow-hidden">
      {/* Background Ambience Mesh */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-accent/8 blur-[140px] animate-float-slow" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          className="grid lg:grid-cols-12 gap-8 lg:gap-8 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {/* Left Column: Hero Editorial Typography (7 cols) */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
            {/* Status Pill Tag */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2">
              <span className="px-3.5 py-1 rounded-md text-[10px] font-mono tracking-[0.2em] uppercase border border-card-border bg-card/60 text-muted inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                Available for Selected Projects
              </span>
            </motion.div>

            {/* Main Heading with Fluid Typography */}
            <motion.div variants={itemVariants} className="space-y-2">
              <h1 className="editorial-heading text-[clamp(3rem,7vw,6.7rem)] font-extrabold leading-[0.94] text-foreground">
                Crafting refined{' '}
                <span className="gradient-text-gold">digital interfaces</span>{' '}
                with code.
              </h1>
            </motion.div>

            {/* Dynamic Typing Role */}
            <motion.div variants={itemVariants} className="h-8 flex items-center justify-center lg:justify-start">
              <div className="px-3 py-1 rounded-md border-l-2 border-accent font-mono text-xs sm:text-sm text-accent flex items-center gap-1.5">
                <span className="text-muted font-bold">&gt;</span>
                <span>{typedText}</span>
                <span className="w-1.5 h-3.5 bg-accent animate-pulse inline-block" />
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-muted max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal text-wrap-pretty"
            >
              Mahasiswa Ilmu Komputer IPB University yang berdedikasi dalam menciptakan pengalaman digital yang
              <span className="text-foreground font-medium"> elegan</span>,
              <span className="text-foreground font-medium"> intuitif</span>, dan
              <span className="text-foreground font-medium"> berkesan</span>.
            </motion.p>

            {/* Button-in-Button Nested CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3.5 justify-center lg:justify-start items-center"
            >
              <a
                href="#projects"
                className="btn-primary pl-6 pr-2.5 py-2.5 text-xs sm:text-sm font-semibold tracking-wide w-full sm:w-auto justify-between sm:justify-start group"
              >
                <span>Lihat Karya Saya</span>
                <span className="ml-3 w-8 h-8 rounded-full bg-black/15 dark:bg-black/20 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <FiArrowUpRight className="w-4 h-4 text-dark" />
                </span>
              </a>

              <a
                href="#contact"
                className="btn-secondary px-6 py-3 text-xs sm:text-sm font-medium tracking-wide w-full sm:w-auto text-center"
              >
                Hubungi Saya
              </a>
            </motion.div>

            {/* Social Icons & Network */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2.5 justify-center lg:justify-start pt-2"
            >
              {[
                { icon: FiGithub, href: 'https://github.com/Barli-Pemula', label: 'GitHub' },
                { icon: FiLinkedin, href: 'https://www.linkedin.com/in/barlian', label: 'LinkedIn' },
                { icon: MdEmail, href: 'mailto:barlidyu@apps.ipb.ac.id', label: 'Email' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full border border-card-border bg-card/40 flex items-center justify-center text-muted hover:text-accent hover:border-accent/40 hover:bg-accent-subtle transition-all duration-200"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </motion.div>

            {/* Metrics Bento Section */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 pt-6 border-t border-card-border max-w-lg mx-auto lg:mx-0"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center lg:text-left space-y-1">
                  <div className="text-2xl sm:text-3xl font-mono font-bold text-foreground tabular-nums">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-muted">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Double-Bezel Interactive Profile Canvas (5 cols) */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 relative flex justify-center order-first lg:order-last"
            style={{ perspective: 1200 }}
          >
            <motion.div
              className="relative w-full max-w-[270px] sm:max-w-[340px] lg:max-w-[400px]"
              style={{ rotateX, rotateY }}
            >
              {/* Soft Ambient Radiance */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-accent/20 via-transparent to-foreground/5 rounded-[2.5rem] blur-2xl opacity-60 pointer-events-none" />

              {/* Outer Machined Bezel Shell */}
              <div className="p-2 sm:p-2.5 rounded-[2.25rem] bg-foreground/[0.03] border border-foreground/10 shadow-2xl">
                {/* Inner Bezel Screen Canvas */}
                <div className="relative rounded-[calc(2.25rem-0.625rem)] overflow-hidden border border-foreground/10 bg-surface">
                  <Image
                    src="/BARLI.png"
                    alt="Barlian Athallah Dyu"
                    width={450}
                    height={550}
                    priority
                    className="w-full h-auto object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-700 hover:scale-105"
                  />

                  {/* Gentle Gradient Mask */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none" />

                  {/* Corner Accent Hairlines */}
                  <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-accent/50 rounded-tl pointer-events-none" />
                  <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-accent/50 rounded-tr pointer-events-none" />
                </div>
              </div>

              {/* Floating Tactile Glass Capsule */}
              <motion.div
                className="absolute -bottom-4 right-2 sm:-right-4 px-4 py-2 rounded-full glass-nav border border-card-border shadow-xl flex items-center gap-2"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-xs font-mono font-medium text-foreground tracking-wide">
                  IPB University
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
