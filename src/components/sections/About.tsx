import { motion } from 'framer-motion'
import { personalInfo, education, focusAreas, experience } from '../../data/portfolio'
import { Section, GlassCard } from '../ui/Section'

export function About() {
  return (
    <Section id="about" subtitle="About Me" title="Professional Story">
      <div className="grid lg:grid-cols-2 gap-8">
        <GlassCard>
          <div className="space-y-6">
            <p className="text-text-secondary leading-relaxed">{personalInfo.summary}</p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-neon-cyan/10 flex items-center justify-center text-neon-cyan shrink-0">
                  🎓
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary">{education.degree}</h3>
                  <p className="text-sm text-electric-blue">{education.honors}</p>
                  <p className="text-sm text-text-secondary">{education.university}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-electric-blue/10 flex items-center justify-center text-electric-blue shrink-0">
                  💼
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary">{experience.role}</h3>
                  <p className="text-sm text-neon-cyan">{experience.company}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-purple/10 flex items-center justify-center text-purple shrink-0">
                  🔬
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary">{experience.previous.role}</h3>
                  <p className="text-sm text-text-secondary">{experience.previous.company}</p>
                </div>
              </div>
            </div>
          </div>
        </GlassCard>

        <GlassCard delay={0.2}>
          <h3 className="text-lg font-semibold text-neon-cyan mb-6 font-mono"> Focus_Areas[]</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {focusAreas.map((area, i) => (
              <motion.div
                key={area}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ x: 5, color: '#00E5FF' }}
                className="flex items-center gap-3 p-3 rounded-lg bg-bg-secondary/50 border border-neon-cyan/5 hover:border-neon-cyan/30 transition-all cursor-default"
              >
                <span className="text-neon-cyan font-mono text-xs">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-text-secondary text-sm hover:text-neon-cyan transition-colors">{area}</span>
              </motion.div>
            ))}
          </div>
        </GlassCard>
      </div>
    </Section>
  )
}
