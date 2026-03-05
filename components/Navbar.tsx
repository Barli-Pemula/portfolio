'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Detect active section
      const sections = navItems.map((item) => item.href.replace('#', ''))
      for (const section of sections.reverse()) {
        const el = document.getElementById(section)
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActiveSection(section)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'py-3 bg-dark/80 backdrop-blur-xl border-b border-gold-500/10'
          : 'py-5 bg-transparent'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <div className="absolute inset-0 rounded-lg border border-gold-500/30 group-hover:border-gold-500/60 smooth-transition" />
              <div className="absolute inset-0 rounded-lg bg-gold-500/5 group-hover:bg-gold-500/10 smooth-transition" />
              <span className="font-serif text-lg font-bold text-gold-400 relative z-10">B</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-serif text-lg font-semibold text-white tracking-wide">Barlian</span>
              <div className="h-[1px] w-0 group-hover:w-full bg-gradient-to-r from-gold-500 to-transparent transition-all duration-500" />
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '')
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-medium tracking-wider uppercase transition-all duration-400 ${
                    isActive
                      ? 'text-gold-400'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.span
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gold-400"
                      layoutId="activeNav"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </a>
              )
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a href="#contact" className="px-5 py-2.5 rounded-lg text-sm font-semibold border border-gold-500/30 text-gold-400 hover:bg-gold-500/10 hover:border-gold-500/50 smooth-transition">
              Let&apos;s Talk
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative w-10 h-10 flex items-center justify-center text-neutral-300 hover:text-gold-400 smooth-transition"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden mt-4 pb-6"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col gap-1 pt-4 border-t border-neutral-800/50">
                {navItems.map((item, i) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="px-4 py-3 text-neutral-300 hover:text-gold-400 hover:bg-gold-500/5 rounded-lg smooth-transition text-sm uppercase tracking-wider"
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    {item.name}
                  </motion.a>
                ))}
                <a
                  href="#contact"
                  className="mt-3 mx-4 text-center btn-primary text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="relative z-10">Let&apos;s Talk</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
