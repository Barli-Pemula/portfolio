'use client'

import { motion } from 'framer-motion'
import { FiArrowUpRight, FiGithub } from 'react-icons/fi'
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
    {
      title: 'Project 05 - Coming Soon',
      description: 'Slot project tambahan untuk menampilkan karya saya berikutnya.',
      tags: ['Next.js', 'React', 'Tailwind CSS', 'Custom'],
      image: '/images/Foto arli.jpg',
      link: '#',
      github: '#',
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
    <section id="projects" className="section-shell relative">
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
            <div className="section-label mb-5">01 / Selected work</div>
            <h2 className="editorial-heading text-4xl sm:text-6xl font-extrabold text-foreground leading-[1.02]">
              Featured <span className="gradient-text-gold">Projects</span>
            </h2>
            <p className="mt-5 text-muted text-base sm:text-lg leading-relaxed font-normal">
              Menampilkan karya terbaik saya. Setiap proyek menunjukkan keahlian dan pendekatan yang berbeda.
            </p>
          </motion.div>

          {/* Asymmetric Bento / Card Grid */}
          <motion.div className="flex lg:grid lg:grid-cols-3 gap-5 lg:gap-8 overflow-x-auto lg:overflow-visible snap-x snap-mandatory pb-4 lg:pb-0 -mx-4 px-4 lg:mx-0 lg:px-0" variants={containerVariants}>
            {projects.map((project, index) => {
              const isFeatured = index === 0
              return (
                <motion.article
                  key={index}
                  className={`double-bezel group overflow-hidden flex flex-col justify-between min-w-[85vw] sm:min-w-[400px] lg:min-w-0 snap-start ${
                    isFeatured ? 'lg:col-span-2' : ''
                  }`}
                  variants={itemVariants}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  {/* Top Media Canvas */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface border-b border-card-border">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 85vw, (max-width: 1280px) 50vw, 66vw"
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none" />
                    <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-4 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none">
                      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-foreground">Featured case</span>
                      <span className="inline-flex items-center gap-2 rounded-full bg-foreground px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-background">
                        Explore <FiArrowUpRight className="h-3 w-3" />
                      </span>
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-6 sm:p-8 space-y-5 flex-1 flex flex-col justify-between">
                    <div className="space-y-2.5">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors duration-200">
                          {project.title}
                        </h3>
                        <span className="shrink-0 font-mono text-[11px] font-semibold tracking-[0.16em] text-subtle">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>
                      <p className="text-muted text-xs sm:text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Tag Capsules */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2.5 py-1 text-[11px] font-mono rounded-md border border-card-border bg-card/60 text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="pt-4 border-t border-card-border flex items-center gap-3">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-4 rounded-lg text-xs font-semibold border border-card-border bg-card/50 text-foreground hover:bg-accent-subtle hover:text-accent hover:border-accent/40 transition-all duration-200 group/btn"
                      >
                        <span>Visit Site</span>
                        <FiArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </a>

                      {project.github && project.github !== '#' && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Source code for ${project.title}`}
                          className="w-9 h-9 rounded-lg border border-card-border bg-card/50 flex items-center justify-center text-muted hover:text-accent hover:border-accent/40 hover:bg-accent-subtle transition-all duration-200"
                        >
                          <FiGithub className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.article>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
