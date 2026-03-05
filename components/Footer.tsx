'use client'

import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { RiWhatsappLine } from 'react-icons/ri'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'GitHub',
      icon: FiGithub,
      href: 'https://github.com/Barli-Pemula',
    },
    {
      name: 'LinkedIn',
      icon: FiLinkedin,
      href: 'https://www.linkedin.com/in/barlian',
    },
    {
      name: 'WhatsApp',
      icon: RiWhatsappLine,
      href: 'https://wa.me/085180768254',
    },
    {
      name: 'Email',
      icon: FiMail,
      href: 'mailto:barlidyu@apps.ipb.ac.id',
    },
  ]

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <footer className="relative border-t border-neutral-800/30">
      {/* Top gradient line */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          className="grid md:grid-cols-3 gap-12 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {/* Brand */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg border border-gold-500/20 bg-gold-500/5 flex items-center justify-center">
                <span className="font-serif text-lg font-bold text-gold-400">B</span>
              </div>
              <span className="font-serif text-xl font-semibold text-white">Barlian</span>
            </div>
            <p className="text-neutral-500 text-sm leading-relaxed max-w-xs">
              Menciptakan pengalaman digital yang elegan dengan dedikasi dan presisi tinggi.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-5">
            <h4 className="font-medium text-neutral-300 text-sm uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-neutral-500 hover:text-gold-400 smooth-transition text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-5">
            <h4 className="font-medium text-neutral-300 text-sm uppercase tracking-wider">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg border border-neutral-800/50 bg-neutral-900/30 flex items-center justify-center text-neutral-500 hover:text-gold-400 hover:border-gold-500/20 hover:bg-gold-500/5 smooth-transition"
                    title={social.name}
                  >
                    <Icon className="text-lg" />
                  </a>
                )
              })}
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-neutral-800/50 to-transparent mb-8" />

        {/* Bottom */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p>© {currentYear} Barlian Athallah Dyu. All rights reserved.</p>
          <p className="text-neutral-700">
            Crafted with <span className="text-gold-500">precision</span> & passion
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
