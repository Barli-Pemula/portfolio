'use client'

import { motion } from 'framer-motion'
import { FiCode, FiDatabase, FiLayout, FiTrendingUp } from 'react-icons/fi'
import { SiReact, SiNextdotjs, SiTailwindcss, SiTypescript, SiJavascript, SiGit } from 'react-icons/si'

export default function Skills() {
  const skillCategories = [
    {
      icon: FiLayout,
      category: 'Frontend',
      skills: ['React.js', 'Next.js', 'Vue.js', 'Angular', 'HTML/CSS'],
    },
    {
      icon: FiDatabase,
      category: 'Backend',
      skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST APIs'],
    },
    {
      icon: FiCode,
      category: 'Languages',
      skills: ['JavaScript', 'TypeScript', 'Python', 'CSS/SCSS', 'SQL'],
    },
    {
      icon: FiTrendingUp,
      category: 'Tools & Methods',
      skills: ['Git/GitHub', 'Webpack', 'Docker', 'Agile', 'Figma'],
    },
  ]

  const technologies = [
    { name: 'React', icon: SiReact, color: 'text-blue-400' },
    { name: 'Next.js', icon: SiNextdotjs, color: 'text-white' },
    { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-500' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400' },
    { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
    { name: 'Git', icon: SiGit, color: 'text-orange-500' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="skills" className="py-20">
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
              <span className="gradient-text">Skills & Expertise</span>
            </h2>
            <p className="text-slate-300 max-w-2xl text-lg">
              A comprehensive range of skills developed through years of experience in web development.
            </p>
          </motion.div>

          {/* Skills Categories */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
          >
            {skillCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <motion.div
                  key={index}
                  className="glass-dark p-6 rounded-xl border border-slate-700/30 group hover:border-primary-500/30 smooth-transition"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <div className="p-3 bg-primary-600/20 border border-primary-500/30 rounded-lg w-fit mb-4">
                    <Icon className="text-primary-400 text-2xl" />
                  </div>
                  <h3 className="text-lg font-semibold mb-4">{category.category}</h3>
                  <ul className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="text-slate-400 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Technology Highlights */}
          <motion.div
            className="glass-dark p-8 rounded-2xl border border-slate-700/30"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-bold mb-6">Primary Technologies</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
              {technologies.map((tech, index) => {
                const TechIcon = tech.icon
                return (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center gap-2 p-4 rounded-lg bg-slate-700/20 border border-slate-600/30 hover:border-primary-500/30 smooth-transition group"
                    whileHover={{ y: -5 }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <TechIcon className={`text-3xl ${tech.color}`} />
                    <span className="text-sm text-slate-400 group-hover:text-slate-300">{tech.name}</span>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Mastery Level */}
          <motion.div
            className="glass-dark p-8 rounded-2xl border border-slate-700/30 space-y-6"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-bold">Proficiency Levels</h3>
            <div className="space-y-4">
              {[
                { skill: 'Frontend Development', level: 95 },
                { skill: 'UI/UX Design Implementation', level: 85 },
                { skill: 'Backend Integration', level: 80 },
                { skill: 'Performance Optimization', level: 90 },
              ].map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-300 font-medium">{item.skill}</span>
                    <span className="text-primary-400">{item.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-700/30 rounded-full overflow-hidden border border-slate-600/30">
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary-600 to-primary-400"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.level}%` }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
