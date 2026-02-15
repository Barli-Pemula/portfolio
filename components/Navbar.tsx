'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FiCode, FiMenu, FiX } from 'react-icons/fi'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 glass-dark border-b border-slate-700/30 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="p-2 bg-primary-600/20 rounded-lg border border-primary-500/30 glow-effect-sm">
              <FiCode className="text-primary-400 text-2xl" />
            </div>
            <span className="gradient-text font-bold text-xl hidden sm:inline">DevPortfolio</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-slate-300 hover:text-primary-400 smooth-transition relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full smooth-transition"></span>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a href="#contact" className="btn-primary">
              Get in Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-300 hover:text-primary-400 smooth-transition"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <FiX className="text-2xl" />
            ) : (
              <FiMenu className="text-2xl" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-slate-700/30 animate-slide-in">
            <div className="flex flex-col gap-2 pt-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="px-4 py-2 text-slate-300 hover:text-primary-400 hover:bg-slate-700/20 rounded-lg smooth-transition"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a href="#contact" className="btn-primary mx-4 mt-2 text-center">
                Get in Touch
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
