'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import ThemeToggle from './ThemeToggle'

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
      setScrolled(window.scrollY > 40)

      const sections = navItems.map((item) => item.href.replace('#', ''))
      for (const section of sections.reverse()) {
        const el = document.getElementById(section)
        if (el && window.scrollY >= el.offsetTop - 220) {
          setActiveSection(section)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 sm:px-8 pt-4 sm:pt-5 pointer-events-none">
      <motion.nav
        aria-label="Primary navigation"
        className={`pointer-events-auto relative w-full max-w-7xl rounded-2xl transition-all duration-300 ${
          scrolled
            ? 'glass-nav py-2.5 px-4 sm:px-6'
            : 'bg-transparent py-3 px-1 sm:px-2'
        }`}
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="flex items-center justify-between">
          {/* Logo with tactile badge */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg p-1"
          >
            <div className="relative w-8 h-8 rounded-lg bg-accent text-background flex items-center justify-center group-hover:rotate-[-6deg] transition-transform">
              <span className="font-mono text-xs font-bold text-accent group-hover:scale-110 transition-transform">B</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-tight text-foreground group-hover:text-accent transition-colors">
                Barlian
              </span>
              <span className="text-[10px] font-mono text-muted tracking-widest uppercase -mt-0.5">
                Engineer
              </span>
            </div>
          </a>

          {/* Desktop Nav Pills */}
          <div className="hidden md:flex items-center gap-5">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '')
              return (
                <a
                  key={item.name}
                  href={item.href}
                  aria-current={isActive ? 'page' : undefined}
                    className={`relative py-2 text-xs font-medium tracking-wide transition-colors duration-200 interactive-link ${
                    isActive ? 'text-foreground font-semibold' : 'text-muted hover:text-foreground'
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  {isActive && (
                    <motion.span
                      layoutId="activeNavPill"
                      className="absolute -bottom-1 left-0 right-0 h-px bg-accent"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              )
            })}
          </div>

          {/* Right Actions: Theme Toggle + Contact CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />

            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold border border-accent bg-accent text-background hover:bg-accent-hover transition-all duration-200 group"
            >
              <span>Let&apos;s Talk</span>
                <span className="flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <FiArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </a>

            {/* Mobile Animated Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              className="md:hidden relative w-9 h-9 rounded-lg border border-card-border bg-card/60 flex items-center justify-center text-foreground"
            >
              <div className="w-4 h-3.5 flex flex-col justify-between items-center relative">
                <span
                  className={`w-full h-0.5 bg-foreground rounded-full transition-transform duration-300 ${
                    isOpen ? 'rotate-45 translate-y-1.5' : ''
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-foreground rounded-full transition-opacity duration-200 ${
                    isOpen ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-foreground rounded-full transition-transform duration-300 ${
                    isOpen ? '-rotate-45 -translate-y-1.5' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-navigation"
              className="md:hidden mt-3 p-4 rounded-2xl glass-nav border border-card-border"
              initial={{ opacity: 0, scale: 0.96, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -10 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex flex-col gap-1.5">
                {navItems.map((item, i) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-2.5 rounded-xl text-sm font-medium text-foreground hover:bg-accent-subtle hover:text-accent transition-colors flex items-center justify-between"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <span>{item.name}</span>
                    <FiArrowUpRight className="w-3.5 h-3.5 text-muted" />
                  </motion.a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="mt-2 w-full py-2.5 btn-primary text-xs font-semibold text-center"
                >
                  <span className="relative z-10 flex items-center justify-center gap-1.5">
                    Let&apos;s Talk
                    <FiArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  )
}
