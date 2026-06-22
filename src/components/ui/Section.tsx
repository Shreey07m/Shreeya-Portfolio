import { motion, type HTMLMotionProps } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import type { ReactNode } from 'react'

interface SectionProps {
  id: string
  title?: string
  subtitle?: string
  children: ReactNode
  className?: string
}

export function Section({ id, title, subtitle, children, className = '' }: SectionProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id={id} ref={ref} className={`relative py-20 md:py-28 px-4 md:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {(title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            {subtitle && (
              <span className="text-neon-cyan text-sm font-mono tracking-widest uppercase mb-2 block">
                {subtitle}
              </span>
            )}
            {title && (
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text">{title}</h2>
            )}
          </motion.div>
        )}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  )
}

interface GlowButtonProps extends HTMLMotionProps<'a'> {
  variant?: 'primary' | 'secondary' | 'outline'
  children: ReactNode
}

export function GlowButton({ variant = 'primary', children, className = '', ...props }: GlowButtonProps) {
  const variants = {
    primary:
      'bg-gradient-to-r from-neon-cyan/20 to-electric-blue/20 border-neon-cyan/50 text-neon-cyan hover:shadow-[0_0_30px_rgba(0,229,255,0.4)]',
    secondary:
      'bg-gradient-to-r from-electric-blue/20 to-purple/20 border-electric-blue/50 text-electric-blue hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]',
    outline: 'bg-transparent border-text-secondary/30 text-text-secondary hover:border-neon-cyan/50 hover:text-neon-cyan',
  }

  return (
    <motion.a
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border font-medium transition-all duration-300 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.a>
  )
}

interface GlassCardProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function GlassCard({ children, className = '', delay = 0 }: GlassCardProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -4 }}
      className={`glass glass-hover rounded-xl p-6 ${className}`}
    >
      {children}
    </motion.div>
  )
}

export function SectionDivider() {
  return (
    <div className="w-full h-px bg-gradient-to-r from-transparent via-neon-cyan/30 to-transparent my-4" />
  )
}
