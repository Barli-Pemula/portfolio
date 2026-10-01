'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3500)
    setFormData({ name: '', email: '', message: '' })
  }

  const contactInfo = [
    {
      icon: FiMail,
      label: 'Direct Email',
      value: 'barlidyu@apps.ipb.ac.id',
      href: 'mailto:barlidyu@apps.ipb.ac.id',
    },
    {
      icon: FiPhone,
      label: 'Direct Phone',
      value: '+62 851-8076-8254',
      href: 'tel:+6285180768254',
    },
    {
      icon: FiMapPin,
      label: 'Base Location',
      value: 'Bogor, Indonesia',
      href: '#',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  }

  return (
    <section id="contact" className="section-shell relative">
      <div className="divider-gold mb-12 sm:mb-16 max-w-7xl mx-auto px-4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="space-y-12 sm:space-y-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {/* Section Header */}
          <motion.div className="max-w-3xl space-y-4" variants={itemVariants}>
            <div className="section-label">04 / Hubungi saya</div>
            <h2 className="editorial-heading text-4xl sm:text-6xl font-extrabold text-foreground leading-[1.02]">
              Mari <span className="gradient-text-gold">Berkolaborasi</span>
            </h2>
            <p className="text-muted text-base sm:text-lg leading-relaxed font-normal max-w-2xl">
              Punya proyek dalam pikiran? Mari terhubung dan ciptakan sesuatu yang luar biasa bersama.
            </p>
          </motion.div>

          {/* 3 Contact Info Capsules */}
          <motion.div className="grid sm:grid-cols-3 gap-px bg-card-border border-y border-card-border" variants={containerVariants}>
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <motion.a
                  key={index}
                  href={info.href}
                  className="bg-background p-6 sm:p-7 text-left group flex flex-col items-start justify-center"
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                >
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 border border-accent/25 bg-accent-subtle text-accent group-hover:scale-105 group-hover:border-accent/50 transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground mb-1">{info.label}</h3>
                  <p className="text-xs sm:text-sm font-mono text-muted group-hover:text-accent transition-colors">
                    {info.value}
                  </p>
                </motion.a>
              )
            })}
          </motion.div>

          {/* Interactive Contact Form */}
          <motion.div
            className="double-bezel p-8 sm:p-12 max-w-3xl mx-auto w-full"
            variants={itemVariants}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="block text-xs font-mono font-medium uppercase tracking-wider text-foreground/80"
                >
                  Nama Anda
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-background border border-card-border text-foreground placeholder-subtle text-sm focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/40 transition-colors"
                  placeholder="Masukkan nama Anda"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-xs font-mono font-medium uppercase tracking-wider text-foreground/80"
                >
                  Email Anda
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-background border border-card-border text-foreground placeholder-subtle text-sm focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/40 transition-colors"
                  placeholder="email@contoh.com"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="block text-xs font-mono font-medium uppercase tracking-wider text-foreground/80"
                >
                  Pesan
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-card-border text-foreground placeholder-subtle text-sm focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/40 transition-colors resize-none"
                  placeholder="Ceritakan tentang proyek Anda atau sapa saya!"
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary py-3.5 px-6 text-sm font-semibold tracking-wide flex items-center justify-center gap-2 group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span>Kirim Pesan</span>
                  <FiSend className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </span>
              </button>

              {submitted && (
                <motion.div
                  className="p-4 rounded-lg bg-accent-subtle border border-accent/25 text-accent font-mono text-xs sm:text-sm text-center"
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Terima kasih! Pesan Anda telah berhasil dikirim.
                </motion.div>
              )}
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
