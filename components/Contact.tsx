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

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    // Handle form submission here
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: '', email: '', message: '' })
  }

  const contactInfo = [
    {
      icon: FiMail,
      label: 'Gmail',
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
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="space-y-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Section Header */}
          <motion.div className="text-center space-y-4" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="gradient-text">Get In Touch</span>
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto text-lg">
              Have a project in mind? Let's connect and create something extraordinary together.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-6 mb-12"
            variants={containerVariants}
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <motion.a
                  key={index}
                  href={info.href}
                  className="glass-dark p-6 rounded-xl border border-slate-700/30 hover:border-primary-500/30 smooth-transition group text-center"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <div className="p-3 bg-primary-600/20 border border-primary-500/30 rounded-lg w-fit mx-auto mb-4">
                    <Icon className="text-primary-400 text-2xl" />
                  </div>
                  <h3 className="font-semibold mb-2">{info.label}</h3>
                  <p className="text-slate-400 group-hover:text-primary-400 smooth-transition">{info.value}</p>
                </motion.a>
              )
            })}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="glass-dark p-8 rounded-2xl border border-slate-700/30 max-w-2xl mx-auto w-full"
            variants={itemVariants}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-slate-300">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-slate-700/20 border border-slate-600/30 text-slate-100 placeholder-slate-500 focus:border-primary-500/50 focus:outline-none focus:ring-1 focus:ring-primary-500/20 smooth-transition"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-slate-300">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-slate-700/20 border border-slate-600/30 text-slate-100 placeholder-slate-500 focus:border-primary-500/50 focus:outline-none focus:ring-1 focus:ring-primary-500/20 smooth-transition"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-slate-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-slate-700/20 border border-slate-600/30 text-slate-100 placeholder-slate-500 focus:border-primary-500/50 focus:outline-none focus:ring-1 focus:ring-primary-500/20 smooth-transition resize-none"
                  placeholder="Tell me about your project or just say hi!"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full btn-primary flex items-center justify-center gap-2 group"
              >
                <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-1 smooth-transition" />
                Send Message
              </button>

              {submitted && (
                <motion.div
                  className="p-4 rounded-lg bg-emerald-500/20 border border-emerald-500/30 text-emerald-300"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  ✓ Thank you! Your message has been sent successfully.
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* CTA */}
          <motion.div className="text-center" variants={itemVariants}>
            <p className="text-slate-400 mb-4">
              Prefer to reach out directly? Feel free to send me an email or connect on social media.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
