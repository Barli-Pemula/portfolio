'use client'

import { useEffect, useState } from 'react'
import { FiArrowRight, FiGithub, FiLinkedin } from 'react-icons/fi'
import { MdEmail } from 'react-icons/md'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import Image from 'next/image'

function useTypingEffect(texts: string[], typingSpeed = 80, deletingSpeed = 40, pauseTime = 2000) {
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

function AnimatedCounter({ target, duration = 2, suffix = '' }: { target: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    setCount(0)
    let start = 0
    const increment = target / (duration * 60)
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

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useTransform(mouseY, [-300, 300], [5, -5])
  const rotateY = useTransform(mouseX, [-300, 300], [-5, 5])

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left - rect.width / 2)
    mouseY.set(e.clientY - rect.top - rect.height / 2)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  }

  const stats = [
    { label: 'Projects', value: 3, suffix: '+' },
    { label: 'Languages', value: 3, suffix: '+' },
    { label: 'Year Learning', value: 1, suffix: '' },
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          onMouseMove={handleMouseMove}
        >
          {/* Text Content */}
          <motion.div className="space-y-8 text-center lg:text-left order-2 lg:order-1" variants={itemVariants}>
            {/* Name */}
            <motion.div className="space-y-3" variants={itemVariants}>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                <span className="text-white">Barlian</span>
                <br />
                <span className="shimmer-text">Athallah Dyu</span>
              </h1>
            </motion.div>

            {/* Typing role */}
            <motion.div variants={itemVariants} className="h-8">
              <p className="text-lg md:text-xl text-gold-400 font-mono">
                {'> '}{typedText}
                <span className="animate-pulse text-gold-300">|</span>
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-lg text-neutral-400 max-w-lg leading-relaxed mx-auto lg:mx-0"
              variants={itemVariants}
            >
              Mahasiswa Ilmu Komputer IPB University yang berdedikasi dalam menciptakan pengalaman digital yang
              <span className="text-gold-400"> elegan</span>,
              <span className="text-gold-400"> intuitif</span>, dan
              <span className="text-gold-400"> berkesan</span>.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" variants={itemVariants}>
              <a href="#projects" className="btn-primary flex items-center justify-center gap-2 group">
                <span className="relative z-10 flex items-center gap-2">
                  Lihat Karya Saya
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </a>
              <a href="#contact" className="btn-secondary flex items-center justify-center gap-2">
                Hubungi Saya
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div className="flex gap-4 pt-2 justify-center lg:justify-start" variants={itemVariants}>
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
                  className="p-3 rounded-xl border border-neutral-800 bg-neutral-900/50 text-neutral-400 hover:text-gold-400 hover:border-gold-500/30 hover:bg-gold-500/5 smooth-transition hover:shadow-[0_0_20px_rgba(212,175,55,0.1)]"
                >
                  <social.icon className="text-xl" />
                </a>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-6 pt-4 border-t border-neutral-800/50 max-w-md mx-auto lg:mx-0"
              variants={itemVariants}
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-2xl md:text-3xl font-bold font-serif text-gold-400">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs text-neutral-500 uppercase tracking-widest mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            className="relative flex justify-center order-1 lg:order-2"
            variants={itemVariants}
            style={{ perspective: 1000 }}
          >
            <motion.div
              className="relative w-full max-w-sm lg:max-w-md"
              style={{ rotateX, rotateY }}
              transition={{ type: 'spring', stiffness: 100, damping: 30 }}
            >
              {/* Decorative rings */}
              <div className="absolute -inset-4 rounded-[2rem] border border-gold-500/10 animate-pulse" />
              <div className="absolute -inset-8 rounded-[2.5rem] border border-gold-500/5" />

              {/* Gold gradient glow */}
              <div className="absolute -inset-2 bg-gradient-to-br from-gold-500/20 via-transparent to-gold-600/20 rounded-[2rem] blur-2xl opacity-60" />

              {/* Main image */}
              <div className="relative overflow-hidden rounded-[1.5rem] border border-gold-500/15 glow-gold">
                <Image
                  src="/BARLI.png"
                  alt="Barlian Athallah Dyu"
                  width={450}
                  height={550}
                  priority
                  className="relative w-full h-auto object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-40" />
              </div>

              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-3 -right-3 px-4 py-2 rounded-xl glass-gold border border-gold-500/20 glow-gold-sm"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span className="text-gold-400 font-semibold text-sm">IPB University</span>
              </motion.div>

              {/* Corner ornament */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-gold-500/30 rounded-tl-lg" />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-gold-500/30 rounded-br-lg" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

    </section>
  )
}
