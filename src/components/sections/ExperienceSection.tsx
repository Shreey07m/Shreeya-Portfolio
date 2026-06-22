import { motion } from 'framer-motion'
import { experience } from '../../data/portfolio'
import { Section } from '../ui/Section'

export function ExperienceSection() {
  return (
    <Section id="experience" subtitle="Career" title="Experience">
      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-neon-cyan via-electric-blue to-purple" />

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative pl-12 md:pl-20"
        >
          <motion.div
            animate={{ boxShadow: ['0 0 10px rgba(0,229,255,0.3)', '0 0 25px rgba(0,229,255,0.6)', '0 0 10px rgba(0,229,255,0.3)'] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute left-2 md:left-6 top-2 w-4 h-4 rounded-full bg-neon-cyan border-4 border-bg-primary"
          />

          <div className="glass rounded-xl p-6 md:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-6">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-text-primary">{experience.role}</h3>
                <p className="text-neon-cyan font-mono">{experience.company}</p>
              </div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-mono border border-green-500/30">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Current
              </span>
            </div>

            <ul className="space-y-3">
              {experience.highlights.map((highlight, i) => (
                <motion.li
                  key={highlight}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3 text-text-secondary"
                >
                  <span className="text-neon-cyan mt-1 shrink-0">▸</span>
                  <span className="hover:text-text-primary transition-colors">{highlight}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative pl-12 md:pl-20 mt-8"
        >
          <div className="absolute left-2 md:left-6 top-2 w-4 h-4 rounded-full bg-purple/50 border-4 border-bg-primary" />

          <div className="glass rounded-xl p-6 opacity-80">
            <h3 className="text-lg font-bold text-text-primary">{experience.previous.role}</h3>
            <p className="text-purple font-mono text-sm">{experience.previous.company}</p>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
