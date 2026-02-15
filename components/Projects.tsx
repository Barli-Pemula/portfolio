'use client'

import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import Image from 'next/image'

export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform built with Next.js and Stripe integration.',
      tags: ['Next.js', 'React', 'Stripe', 'Tailwind CSS'],
      image: '🛍️',
      link: '#',
      github: '#',
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates and team features.',
      tags: ['React', 'Firebase', 'TypeScript', 'Material-UI'],
      image: '✓',
      link: '#',
      github: '#',
    },
    {
      title: 'Weather Dashboard',
      description: 'Beautiful weather dashboard with real-time data, forecasts, and location-based features.',
      tags: ['JavaScript', 'Weather API', 'Chart.js', 'Responsive Design'],
      image: '🌤️',
      link: '#',
      github: '#',
    },
    {
      title: 'Portfolio Website',
      description: 'Showcase this elegant portfolio built with Next.js, Framer Motion, and modern design.',
      tags: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Responsive'],
      image: '💼',
      link: '#',
      github: '#',
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
    <section id="projects" className="py-20">
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
              <span className="gradient-text">Featured Projects</span>
            </h2>
            <p className="text-slate-300 max-w-2xl text-lg">
              Showcasing my best work and the projects I'm most proud of. Each demonstrates different skills and approaches.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="grid md:grid-cols-2 gap-6"
            variants={containerVariants}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="glass-dark border border-slate-700/30 rounded-xl overflow-hidden group hover:border-primary-500/30 smooth-transition"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                {/* Project Image Area */}
                <div className="relative h-48 bg-gradient-to-br from-primary-600/20 to-slate-800/40 border-b border-slate-700/30 flex items-center justify-center overflow-hidden">
                  <div className="text-8xl group-hover:scale-110 smooth-transition">{project.image}</div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 smooth-transition"></div>
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-slate-400">{project.description}</p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-sm rounded-full bg-primary-600/20 border border-primary-500/30 text-primary-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-4 border-t border-slate-700/30">
                    <a
                      href={project.link}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-primary-600/20 border border-primary-500/30 text-primary-300 hover:bg-primary-600/40 smooth-transition group"
                    >
                      <FiExternalLink />
                      Visit
                    </a>
                    <a
                      href={project.github}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-slate-700/20 border border-slate-600/30 text-slate-300 hover:bg-slate-700/40 smooth-transition"
                    >
                      <FiGithub />
                      Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* View All Button */}
          <motion.div className="flex justify-center" variants={itemVariants}>
            <a href="#" className="btn-secondary">
              View All Projects
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
