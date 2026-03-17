'use client'

import { motion } from 'framer-motion'
import { FiExternalLink } from 'react-icons/fi'
import Image from 'next/image'

export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Platform e-commerce lengkap dengan integrasi Stripe dan pengalaman belanja yang seamless.',
      tags: ['Next.js', 'React', 'Stripe', 'Tailwind CSS'],
      image: '/images/Preview Web Shophub.png',
      link: 'https://myshopweb-pi.vercel.app/#',
      github: 'https://github.com/Barli-Pemula/Web-ShopHub.git',
    },
    {
      title: 'Task Management App',
      description: 'Aplikasi manajemen tugas kolaboratif dengan pembaruan real-time dan fitur tim.',
      tags: ['React', 'Firebase', 'TypeScript', 'Material-UI'],
      image: '/images/Preview Task Flow.png',
      link: 'https://task-flow-wheat-two.vercel.app/#',
      github: 'https://github.com/Barli-Pemula/TaskFlow.git',
    },
    {
      title: 'Weather Dashboard',
      description: 'Dashboard cuaca dengan data real-time, prakiraan, dan fitur berbasis lokasi.',
      tags: ['JavaScript', 'Weather API', 'Chart.js', 'Responsive Design'],
      image: '/images/Preview Weather Dashboard.png',
      link: 'https://weather-dashboard-six-azure.vercel.app/#',
      github: 'https://github.com/Barli-Pemula/Weather-Dashboard.git',
    },
    {
      title: 'Blog Platform',
      description: 'Platform blogging modern dengan rich text editing, optimasi SEO, dan berbagi sosial.',
      tags: ['Next.js', 'React', 'Firebase', 'Tailwind CSS'],
      image: '/images/Preview Blog Program.png',
      link: 'https://blog-program-two.vercel.app/#',
      github: 'https://github.com/Barli-Pemula/Blog-Program.git',
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
    <section id="projects" className="py-28 relative">
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
              <span className="text-gold-400 text-sm font-medium uppercase tracking-[0.25em]">Portfolio</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Featured{' '}
              <span className="gradient-text-gold">Projects</span>
            </h2>
            <p className="mt-6 text-neutral-400 text-lg leading-relaxed">
              Menampilkan karya terbaik saya. Setiap proyek menunjukkan keahlian dan pendekatan yang berbeda.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div className="grid md:grid-cols-2 gap-6" variants={containerVariants}>
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="luxury-card group overflow-hidden"
                variants={itemVariants}
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                {/* Project Image */}
                <div className="relative h-56 overflow-hidden border-b border-neutral-800/50">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                  {/* Floating number */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full border border-gold-500/20 bg-dark/60 backdrop-blur-sm flex items-center justify-center">
                    <span className="text-gold-400 font-serif font-bold text-sm">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 space-y-4">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-white mb-2 group-hover:text-gold-400 smooth-transition">
                      {project.title}
                    </h3>
                    <p className="text-neutral-500 text-sm leading-relaxed">{project.description}</p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-xs rounded-full border border-gold-500/10 bg-gold-500/5 text-gold-400/80 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="pt-4 border-t border-neutral-800/50">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-gold-500/15 text-gold-400 text-sm font-medium hover:bg-gold-500/10 hover:border-gold-500/30 smooth-transition group/link"
                    >
                      <FiExternalLink className="group-hover/link:scale-110 transition-transform" />
                      Visit
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
