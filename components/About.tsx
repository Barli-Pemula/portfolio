'use client'

import { motion } from 'framer-motion'
import { FiBriefcase, FiBook, FiTarget, FiAward } from 'react-icons/fi'

export default function About() {
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

  const features = [
    {
      icon: FiBriefcase,
      title: 'Pengalaman Profesional',
      description: 'Membangun aplikasi yang scalable dengan teknologi frontend modern dan best practices terkini.',
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
    {
      icon: FiAward,
      title: 'Standar Tinggi',
      description: 'Mengutamakan kualitas kode, performa, dan aksesibilitas dalam setiap proyek yang dikerjakan.',
    },
  ]

  return (
    <section id="about" className="py-28 relative">
      {/* Section divider */}
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
          <motion.div className="max-w-3xl" variants={itemVariants}>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-gold-500/50" />
              <span className="text-gold-400 text-sm font-medium uppercase tracking-[0.25em]">Tentang Saya</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Menciptakan Pengalaman Digital yang{' '}
              <span className="gradient-text-gold">Berkesan</span>
            </h2>
            <p className="mt-6 text-neutral-400 text-lg leading-relaxed max-w-2xl">
              Saya adalah seorang frontend developer yang passionate dengan mata yang tajam untuk desain dan pengalaman pengguna. Mari saya ceritakan lebih lanjut tentang perjalanan saya.
            </p>
          </motion.div>

          {/* Feature Cards */}
          <motion.div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5" variants={containerVariants}>
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  className="luxury-card p-7 group"
                  variants={itemVariants}
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 border border-gold-500/15 bg-gold-500/5 group-hover:bg-gold-500/10 group-hover:border-gold-500/30 smooth-transition">
                    <Icon className="text-gold-400 text-xl" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Bio Section */}
          <motion.div
            className="relative"
            variants={itemVariants}
          >
            <div className="luxury-card p-10 md:p-14">
              {/* Decorative quote */}
              <span className="font-serif text-6xl text-gold-500/20 absolute top-6 left-8">&ldquo;</span>

              <div className="relative space-y-6 max-w-4xl">
                <p className="text-neutral-300 text-lg leading-loose">
                  Dengan fondasi yang kuat dalam teknologi web dan passion untuk menciptakan antarmuka pengguna yang intuitif, saya telah mendedikasikan diri untuk menguasai keahlian pengembangan frontend. Keahlian saya mencakup framework modern, desain responsif, dan optimasi performa.
                </p>
                <p className="text-neutral-300 text-lg leading-loose">
                  Ketika saya tidak sedang coding, Anda akan menemukan saya mengeksplorasi tren desain baru, berkontribusi pada proyek open-source, atau berbagi pengetahuan dengan komunitas developer. Mari berkolaborasi dan menciptakan sesuatu yang luar biasa bersama!
                </p>

                {/* Signature-like element */}
                <div className="pt-6 border-t border-neutral-800/50 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center">
                    <span className="font-serif text-dark font-bold text-sm">BA</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">Barlian Athallah Dyu</p>
                    <p className="text-neutral-500 text-sm">Computer Science — IPB University</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
