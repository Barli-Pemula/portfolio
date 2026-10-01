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
    <footer className="relative border-t border-card-border bg-card/20 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Brand Info (6 cols) */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-accent text-background flex items-center justify-center font-mono text-xs font-bold">
                B
              </div>
              <span className="text-lg font-bold tracking-tight text-foreground">
                Barlian Athallah Dyu
              </span>
            </div>
            <p className="text-muted text-xs sm:text-sm leading-relaxed max-w-sm font-normal">
              Menciptakan pengalaman digital yang elegan dengan dedikasi dan presisi tinggi. Menggabungkan estetika visual modern dan performa optimal.
            </p>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-foreground font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-sm text-muted hover:text-accent transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Social (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-foreground font-semibold">
              Connect
            </h4>
            <div className="flex gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full border border-card-border bg-card/60 flex items-center justify-center text-muted hover:text-accent hover:border-accent/40 hover:bg-accent-subtle transition-all duration-200"
                    title={social.name}
                    aria-label={social.name}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                )
              })}
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-card-border flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-muted">
          <p>© {currentYear} Barlian Athallah Dyu. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>Crafted with</span>
            <span className="text-accent font-semibold">precision</span>
            <span>& passion</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
