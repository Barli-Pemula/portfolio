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
    <footer className="border-t border-slate-700/30 glass-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="gradient-text font-bold text-lg">DevPortfolio</h3>
            <p className="text-slate-400 text-sm">
              Crafting elegant digital experiences with passion and precision.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-slate-200">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-primary-400 smooth-transition text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-slate-200">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-slate-700/30 border border-slate-600/30 text-slate-400 hover:text-primary-400 hover:border-primary-500/30 hover:bg-primary-500/10 smooth-transition"
                    title={social.name}
                  >
                    <Icon className="text-xl" />
                  </a>
                )
              })}
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-slate-700/30 my-8"></div>

        {/* Bottom */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p>© {currentYear} Frontend Developer. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary-400 smooth-transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary-400 smooth-transition">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
