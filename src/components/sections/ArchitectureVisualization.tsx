import { motion } from 'framer-motion'
import { architectureNodes } from '../../data/portfolio'
import { Section } from '../ui/Section'

export function ArchitectureVisualization() {
  return (
    <Section id="architecture" subtitle="AWS Architecture" title="Cloud Infrastructure">
      <div className="glass rounded-2xl p-6 md:p-12 overflow-hidden relative">
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

        <div className="relative flex flex-col items-center gap-0 py-8">
          {architectureNodes.map((node, i) => (
            <div key={node.id} className="flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                animate={{
                  boxShadow: [
                    '0 0 10px rgba(0, 229, 255, 0.2)',
                    '0 0 30px rgba(0, 229, 255, 0.4)',
                    '0 0 10px rgba(0, 229, 255, 0.2)',
                  ],
                }}
                transition={{
                  delay: i * 0.15,
                  boxShadow: { duration: 2 + i * 0.3, repeat: Infinity },
                }}
                className="relative flex items-center gap-4 px-6 md:px-10 py-4 rounded-xl border border-neon-cyan/30 bg-bg-secondary/80 min-w-[240px] md:min-w-[320px]"
              >
                <span className="text-2xl">{node.icon}</span>
                <span className="font-mono text-sm md:text-base text-text-primary">{node.label}</span>

                <motion.div
                  className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-neon-cyan"
                  animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                />
              </motion.div>

              {i < architectureNodes.length - 1 && (
                <div className="relative h-12 md:h-16 w-1 my-1">
                  <div className="absolute inset-0 bg-neon-cyan/10 rounded" />
                  <motion.div
                    className="absolute inset-x-0 top-0 w-1 mx-auto bg-gradient-to-b from-neon-cyan to-electric-blue rounded"
                    animate={{ height: ['0%', '100%', '0%'] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                    style={{ height: '100%' }}
                  />
                  <motion.div
                    className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-neon-cyan"
                    animate={{ top: ['0%', '100%'] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3, ease: 'linear' }}
                  />
                  <motion.span
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-neon-cyan/50 text-lg"
                  >
                    ↓
                  </motion.span>
                </div>
              )}
            </div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-text-secondary font-mono text-sm mt-8"
        >
          Live traffic flowing through production AWS infrastructure
        </motion.p>
      </div>
    </Section>
  )
}
