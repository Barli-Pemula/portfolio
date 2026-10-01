'use client'

import { motion } from 'framer-motion'
import { FiBriefcase, FiBook, FiTarget, FiAward } from 'react-icons/fi'

export default function About() {
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
    <section id="about" className="section-shell relative">
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
          <motion.div className="max-w-3xl" variants={itemVariants}>
            <div className="section-label mb-5">02 / Tentang saya</div>
            <h2 className="editorial-heading text-4xl sm:text-6xl font-extrabold text-foreground leading-[1.02]">
              Menciptakan Pengalaman Digital yang{' '}
              <span className="gradient-text-gold">Berkesan</span>
            </h2>
            <p className="mt-5 text-muted text-base sm:text-lg leading-relaxed font-normal max-w-2xl">
              Saya adalah seorang frontend developer yang passionate dengan mata yang tajam untuk desain dan pengalaman pengguna. Mari saya ceritakan lebih lanjut tentang perjalanan saya.
            </p>
          </motion.div>

          {/* 4 Feature Bento Pillars */}
          <motion.div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-card-border border-y border-card-border" variants={containerVariants}>
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  className="bg-background p-6 sm:p-7 min-h-[230px] flex flex-col justify-between group"
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div>
                    <div className="w-11 h-11 rounded-lg flex items-center justify-center mb-5 border border-accent/25 bg-accent-subtle text-accent group-hover:scale-105 group-hover:border-accent/50 transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted text-xs sm:text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Editorial Philosophy Statement Card */}
          <motion.div variants={itemVariants}>
            <div className="relative overflow-hidden border-t border-card-border pt-8 sm:pt-12">
              <span className="font-mono text-7xl text-accent/10 absolute top-4 right-0 select-none pointer-events-none">
                01
              </span>

              <div className="relative space-y-6 max-w-3xl">
                <p className="text-foreground/90 text-base sm:text-lg leading-relaxed">
                  Dengan fondasi yang kuat dalam teknologi web dan passion untuk menciptakan antarmuka pengguna yang intuitif, saya telah mendedikasikan diri untuk menguasai keahlian pengembangan frontend. Keahlian saya mencakup framework modern, desain responsif, dan optimasi performa.
                </p>
                <p className="text-muted text-base sm:text-lg leading-relaxed">
                  Ketika saya tidak sedang coding, Anda akan menemukan saya mengeksplorasi tren desain baru, berkontribusi pada proyek open-source, atau berbagi pengetahuan dengan komunitas developer. Mari berkolaborasi dan menciptakan sesuatu yang luar biasa bersama!
                </p>

                {/* Minimalist Signature Pill */}
                <div className="pt-6 border-t border-card-border flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-accent text-background flex items-center justify-center font-bold font-mono text-xs">
                    BA
                  </div>
                  <div>
                    <p className="text-foreground font-semibold text-sm">Barlian Athallah Dyu</p>
                    <p className="text-muted font-mono text-xs">Computer Science — IPB University</p>
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
