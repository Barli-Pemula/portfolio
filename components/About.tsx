'use client'

import { motion } from 'framer-motion'
import { FiBriefcase, FiBook, FiTarget } from 'react-icons/fi'

export default function About() {
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

  const features = [
    {
      icon: FiBriefcase,
      title: 'Pengalaman Profesional',
      description: 'Membangun aplikasi yang scalable dengan teknologi frontend modern dan best practices.',
    },
    {
      icon: FiBook,
      title: 'Pembelajaran Berkelanjutan',
      description: 'Selalu mengeksplorasi teknologi baru, framework, dan metodologi dalam pengembangan web.',
    },
    {
      icon: FiTarget,
      title: 'Berorientasi pada Detail',
      description: 'Berdedikasi untuk desain pixel-perfect dan pengalaman pengguna yang optimal di semua perangkat.',
    },
  ]

  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="space-y-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Section Header */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="gradient-text">Tentang Saya</span>
            </h2>
            <p className="text-slate-300 max-w-2xl text-lg">
              Saya adalah seorang frontend developer yang passionate dengan mata yang tajam untuk desain dan pengalaman pengguna. Mari saya ceritakan lebih lanjut tentang perjalanan saya.
            </p>
          </motion.div>

          {/* Main Content */}
          <motion.div className="grid md:grid-cols-3 gap-6" variants={containerVariants}>
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  className="glass-dark p-6 rounded-xl border border-slate-700/30 group hover:border-primary-500/30 smooth-transition"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <div className="p-3 bg-primary-600/20 border border-primary-500/30 rounded-lg w-fit mb-4 group-hover:glow-effect-sm">
                    <Icon className="text-primary-400 text-2xl" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-slate-400">{feature.description}</p>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Bio */}
          <motion.div className="glass-dark p-8 rounded-2xl border border-slate-700/30" variants={itemVariants}>
            <p className="text-slate-300 leading-relaxed text-lg mb-4">
              Dengan fondasi yang kuat dalam teknologi web dan passion untuk menciptakan antarmuka pengguna yang intuitif, saya telah mendedikasikan diri untuk menguasai keahlian pengembangan frontend. Keahlian saya mencakup framework modern, desain responsif, dan optimasi performa.
            </p>
            <p className="text-slate-300 leading-relaxed text-lg">
              Ketika saya tidak sedang coding, Anda akan menemukan saya mengeksplorasi tren desain baru, berkontribusi pada proyek open-source, atau berbagi pengetahuan dengan komunitas developer. Mari berkolaborasi dan menciptakan sesuatu yang luar biasa bersama!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
