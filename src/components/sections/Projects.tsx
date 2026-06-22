import { useState } from 'react'
import { motion } from 'framer-motion'
import { projects } from '../../data/portfolio'
import { Section, GlowButton } from '../ui/Section'

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0]
  index: number
}) {
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    setRotateX((y - centerY) / 20)
    setRotateY((centerX - x) / 20)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      }}
      className={`glass rounded-2xl p-6 md:p-8 bg-gradient-to-br ${project.gradient} border border-neon-cyan/20 hover:border-neon-cyan/50 transition-all duration-300 group`}
    >
      <div className="flex items-start justify-between mb-4">
        <span className="text-3xl font-mono text-neon-cyan/50">0{project.id}</span>
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="w-8 h-8 rounded-full border border-dashed border-neon-cyan/30"
        />
      </div>

      <h3 className="text-xl font-bold text-text-primary mb-4 group-hover:text-neon-cyan transition-colors">
        {project.title}
      </h3>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-2 py-1 text-xs font-mono rounded bg-bg-primary/50 text-neon-cyan/80 border border-neon-cyan/10"
          >
            {t}
          </span>
        ))}
      </div>

      <ul className="space-y-2 mb-6">
        {project.features.map((f) => (
          <li key={f} className="text-sm text-text-secondary flex items-center gap-2">
            <span className="text-green-400">✓</span> {f}
          </li>
        ))}
      </ul>

      <div className="flex gap-3">
        <GlowButton href={project.github} variant="outline" className="text-xs px-4 py-2" target="_blank" rel="noopener noreferrer">
          GitHub
        </GlowButton>
        {/* <GlowButton href={project.demo} variant="primary" className="text-xs px-4 py-2" target="_blank" rel="noopener noreferrer">
          Live Demo
        </GlowButton> */}
      </div>
    </motion.div>
  )
}

export function Projects() {
  return (
    <Section id="projects" subtitle="Portfolio" title="Featured Projects">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </Section>
  )
}
