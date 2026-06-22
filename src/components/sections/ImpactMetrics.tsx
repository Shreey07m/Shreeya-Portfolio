import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { metrics } from '../../data/portfolio'
import { useAnimatedCounter } from '../../hooks/useAnimatedCounter'
import { Section } from '../ui/Section'

function MetricCard({
  value,
  suffix,
  text,
  label,
  index,
}: {
  value: number | null
  suffix?: string
  text?: string
  label: string
  index: number
}) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })
  const count = useAnimatedCounter(value ?? 0, 2000, true, inView)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, boxShadow: '0 0 30px rgba(0, 229, 255, 0.2)' }}
      className="glass glass-hover rounded-xl p-6 text-center group"
    >
      <motion.div
        animate={{ textShadow: ['0 0 10px rgba(0,229,255,0.3)', '0 0 20px rgba(0,229,255,0.6)', '0 0 10px rgba(0,229,255,0.3)'] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="text-3xl md:text-4xl font-bold gradient-text mb-2"
      >
        {text ?? (
          <>
            {count}
            {suffix}
          </>
        )}
      </motion.div>
      <p className="text-text-secondary text-sm md:text-base group-hover:text-text-primary transition-colors">
        {label}
      </p>
    </motion.div>
  )
}

export function ImpactMetrics() {
  return (
    <Section id="metrics" subtitle="Impact Metrics" title="Career Highlights">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
        {metrics.map((metric, i) => (
          <MetricCard
            key={metric.label}
            value={metric.value}
            suffix={metric.suffix}
            text={metric.text}
            label={metric.label}
            index={i}
          />
        ))}
      </div>
    </Section>
  )
}
