import { motion } from 'framer-motion'
import { skillCategories } from '../../data/portfolio'
import { Section } from '../ui/Section'

const categoryColors: Record<string, string> = {
  Cloud: 'from-neon-cyan/20 to-electric-blue/20 border-neon-cyan/30',
  DevOps: 'from-electric-blue/20 to-purple/20 border-electric-blue/30',
  Observability: 'from-purple/20 to-neon-cyan/20 border-purple/30',
  Security: 'from-red-500/20 to-orange-500/20 border-red-500/30',
  Programming: 'from-green-500/20 to-neon-cyan/20 border-green-500/30',
}

export function Skills() {
  return (
    <Section id="skills" subtitle="Tech Stack" title="Cloud & DevOps Skills">
      <div className="space-y-10">
        {Object.entries(skillCategories).map(([category, skills], catIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: catIndex * 0.1 }}
          >
            <h3 className="text-lg font-mono text-neon-cyan mb-4 flex items-center gap-2">
              <span className="text-purple">$</span> {category.toLowerCase()} --list
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, i) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{
                    y: -5,
                    boxShadow: '0 0 25px rgba(0, 229, 255, 0.3)',
                    borderColor: 'rgba(0, 229, 255, 0.5)',
                  }}
                  className={`px-4 py-2 rounded-lg border bg-gradient-to-br ${categoryColors[category]} glass-hover cursor-default text-sm font-medium text-text-primary`}
                  style={{
                    animation: `float 3s ease-in-out ${i * 0.3}s infinite`,
                  }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
