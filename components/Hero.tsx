'use client'

import { FiArrowRight, FiGithub, FiLinkedin } from 'react-icons/fi'
import { RiWhatsappLine } from 'react-icons/ri'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Text Content */}
          <motion.div className="space-y-8 text-center md:text-left" variants={itemVariants}>
            <div className="space-y-4">
              <motion.p
                className="text-primary-400 font-mono text-sm"
                variants={itemVariants}
              >
                Assalamualaikum Warahmatullahi Wabarakatuh
              </motion.p>

              <motion.h1
                className="text-4xl md:text-5xl font-bold leading-snug"
                variants={itemVariants}
              >
                <span className="text-white">Barlian Athallah Dyu</span>
                <br />
                <span className="text-slate-100">Computer Science | IPB University</span>
              </motion.h1>

              <motion.p
                className="text-xl text-slate-300 max-w-lg"
                variants={itemVariants}
              >
                Selamat Datang Di portofolio saya. Saya adalah seorang pengembang frontend yang bersemangat dalam menciptakan pengalaman digital yang menarik dan intuitif.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div className="flex flex-col sm:flex-row gap-4" variants={itemVariants}>
              <a href="#projects" className="btn-primary flex items-center justify-center gap-2 group">
                View My Work
                <FiArrowRight className="group-hover:translate-x-1 smooth-transition" />
              </a>
              <a href="#contact" className="btn-secondary flex items-center justify-center gap-2">
                Get in Touch
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div className="flex gap-6 pt-4" variants={itemVariants}>
              <a
                href="https://github.com/Barli-Pemula"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-slate-700/30 border border-slate-600/30 text-slate-300 hover:text-primary-400 hover:border-primary-500/30 hover:bg-primary-500/10 smooth-transition glow-effect-sm"
              >
                <FiGithub className="text-2xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/barlian"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-slate-700/30 border border-slate-600/30 text-slate-300 hover:text-primary-400 hover:border-primary-500/30 hover:bg-primary-500/10 smooth-transition glow-effect-sm"
              >
                <FiLinkedin className="text-2xl" />
              </a>
              <a
                href="https://wa.me/085180768254"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-slate-700/30 border border-slate-600/30 text-slate-300 hover:text-primary-400 hover:border-primary-500/30 hover:bg-primary-500/10 smooth-transition glow-effect-sm"
              >
                <RiWhatsappLine className="text-2xl" />
              </a>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            className="relative hidden md:flex justify-center"
            variants={itemVariants}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-600 rounded-3xl blur-2xl opacity-70"></div>
              <Image
                src="/images/Foto arli.jpg"
                alt="Barlian Athallah Dyu"
                width={400}
                height={500}
                priority
                className="relative rounded-3xl shadow-2xl object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
