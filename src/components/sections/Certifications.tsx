import { motion } from 'framer-motion'
import { certifications, achievements } from '../../data/portfolio'
import { Section, GlassCard } from '../ui/Section'

export function Certifications() {
  return (
    <Section id="certifications" subtitle="Credentials" title="Certifications">
      <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {certifications.map((cert, i) => (
          <GlassCard key={cert.title} delay={i * 0.15} className="text-center group">
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
              className="text-5xl mb-4"
            >
              {cert.icon}
            </motion.div>
            <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:text-neon-cyan transition-colors">
              {cert.title}
            </h3>
            <p className="text-text-secondary text-sm font-mono">{cert.issuer}</p>
            <motion.div
              className="mt-4 h-1 rounded-full bg-gradient-to-r from-neon-cyan via-electric-blue to-purple"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </GlassCard>
        ))}
      </div>
    </Section>
  )
}

export function Achievements() {
  return (
    <Section id="achievements" subtitle="Recognition" title="Achievements">
      <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {achievements.map((achievement, i) => (
          <motion.div
            key={achievement.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            whileHover={{
              scale: 1.02,
              boxShadow: '0 0 40px rgba(139, 92, 246, 0.2)',
            }}
            className="glass glass-hover rounded-xl p-6 md:p-8 flex items-start gap-4"
          >
            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: i }}
              className="text-4xl"
            >
              {achievement.icon}
            </motion.span>
            <div>
              <h3 className="text-lg font-bold text-text-primary mb-2">{achievement.title}</h3>
              <p className="text-text-secondary text-sm">{achievement.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
