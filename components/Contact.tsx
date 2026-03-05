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
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: '', email: '', message: '' })
  }

  const contactInfo = [
    {
      icon: FiMail,
      label: 'Email',
      value: 'barlidyu@apps.ipb.ac.id',
      href: 'mailto:barlidyu@apps.ipb.ac.id',
    },
    {
      icon: FiPhone,
      label: 'Phone',
      value: '+62 851-8076-8254',
      href: 'tel:+6285180768254',
    },
    {
      icon: FiMapPin,
      label: 'Location',
      value: 'Bogor, Indonesia',
      href: '#',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  }

  return (
    <section id="contact" className="py-28 relative">
      <div className="divider-gold mb-28" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="space-y-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section Header */}
          <motion.div className="text-center max-w-3xl mx-auto" variants={itemVariants}>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-gold-500/50" />
              <span className="text-gold-400 text-sm font-medium uppercase tracking-[0.25em]">Kontak</span>
              <div className="h-[1px] w-12 bg-gold-500/50" />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Mari{' '}
              <span className="gradient-text-gold">Berkolaborasi</span>
            </h2>
            <p className="mt-6 text-neutral-400 text-lg leading-relaxed">
              Punya proyek dalam pikiran? Mari terhubung dan ciptakan sesuatu yang luar biasa bersama.
            </p>
          </motion.div>

          {/* Contact Info Cards */}
          <motion.div className="grid md:grid-cols-3 gap-5" variants={containerVariants}>
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <motion.a
                  key={index}
                  href={info.href}
                  className="luxury-card p-7 text-center group"
                  variants={itemVariants}
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="w-14 h-14 rounded-xl mx-auto flex items-center justify-center mb-5 border border-gold-500/15 bg-gold-500/5 group-hover:bg-gold-500/10 group-hover:border-gold-500/30 smooth-transition">
                    <Icon className="text-gold-400 text-xl" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">{info.label}</h3>
                  <p className="text-neutral-500 text-sm group-hover:text-gold-400 smooth-transition">{info.value}</p>
                </motion.a>
              )
            })}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="luxury-card p-10 md:p-14 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-3 text-neutral-300 uppercase tracking-wider">
                  Nama Anda
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3.5 rounded-xl bg-neutral-900/50 border border-neutral-800/50 text-white placeholder-neutral-600 focus:border-gold-500/30 focus:outline-none focus:ring-1 focus:ring-gold-500/20 smooth-transition text-sm"
                  placeholder="Masukkan nama Anda"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-3 text-neutral-300 uppercase tracking-wider">
                  Email Anda
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3.5 rounded-xl bg-neutral-900/50 border border-neutral-800/50 text-white placeholder-neutral-600 focus:border-gold-500/30 focus:outline-none focus:ring-1 focus:ring-gold-500/20 smooth-transition text-sm"
                  placeholder="email@contoh.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-3 text-neutral-300 uppercase tracking-wider">
                  Pesan
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-5 py-3.5 rounded-xl bg-neutral-900/50 border border-neutral-800/50 text-white placeholder-neutral-600 focus:border-gold-500/30 focus:outline-none focus:ring-1 focus:ring-gold-500/20 smooth-transition resize-none text-sm"
                  placeholder="Ceritakan tentang proyek Anda atau sapa saya!"
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary flex items-center justify-center gap-2 group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  Kirim Pesan
                </span>
              </button>

              {submitted && (
                <motion.div
                  className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm text-center"
                  initial={{ opacity: 0, y: -10 }}
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
