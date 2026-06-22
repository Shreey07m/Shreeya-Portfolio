import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { pipelineStages } from '../../data/portfolio'
import { Section } from '../ui/Section'

export function PipelineVisualization() {
  const [activeStage, setActiveStage] = useState(0)
  const [isRunning, setIsRunning] = useState(true)

  useEffect(() => {
    if (!isRunning) return

    const interval = setInterval(() => {
      setActiveStage((prev) => {
        if (prev >= pipelineStages.length - 1) {
          setTimeout(() => {
            setActiveStage(0)
          }, 2000)
          return prev
        }
        return prev + 1
      })
    }, 1500)

    return () => clearInterval(interval)
  }, [isRunning, activeStage])

  return (
    <Section id="pipeline" subtitle="CI/CD Pipeline" title="DevOps Pipeline Visualization">
      <div className="glass rounded-2xl p-6 md:p-10 overflow-hidden">
        <div className="flex flex-col items-center">
          <div className="w-full overflow-x-auto pb-4">
            <div className="flex items-center justify-center min-w-max gap-0 py-8">
              {pipelineStages.map((stage, i) => (
                <div key={stage.id} className="flex items-center">
                  <motion.div
                    animate={{
                      scale: i <= activeStage ? 1.05 : 1,
                      borderColor: i <= activeStage ? 'rgba(0, 229, 255, 0.6)' : 'rgba(0, 229, 255, 0.15)',
                      boxShadow:
                        i === activeStage
                          ? '0 0 30px rgba(0, 229, 255, 0.4)'
                          : i < activeStage
                            ? '0 0 15px rgba(34, 197, 94, 0.3)'
                            : 'none',
                    }}
                    className="relative flex flex-col items-center p-4 rounded-xl border bg-bg-secondary/80 min-w-[100px] md:min-w-[120px]"
                  >
                    <span className="text-2xl mb-2">{stage.icon}</span>
                    <span className="text-xs md:text-sm font-mono text-center text-text-secondary">{stage.label}</span>

                    <AnimatePresence>
                      {i === activeStage && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                          className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-neon-cyan"
                        >
                          <motion.div
                            animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                            transition={{ duration: 1, repeat: Infinity }}
                            className="w-full h-full rounded-full bg-neon-cyan"
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {i < activeStage && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-xs"
                      >
                        ✓
                      </motion.div>
                    )}
                  </motion.div>

                  {i < pipelineStages.length - 1 && (
                    <div className="relative w-8 md:w-16 h-1 mx-1">
                      <div className="absolute inset-0 bg-neon-cyan/10 rounded" />
                      <motion.div
                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-neon-cyan to-electric-blue rounded"
                        animate={{ width: i < activeStage ? '100%' : i === activeStage ? '50%' : '0%' }}
                        transition={{ duration: 0.5 }}
                      />
                      {i === activeStage && (
                        <motion.div
                          className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-neon-cyan"
                          animate={{ left: ['0%', '100%'] }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                        />
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <motion.p
            key={activeStage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-text-secondary font-mono text-sm mt-4"
          >
            {activeStage < pipelineStages.length
              ? `Executing: ${pipelineStages[activeStage].label}...`
              : 'Pipeline complete ✓'}
          </motion.p>

          <p className="text-neon-cyan font-mono text-sm md:text-base mt-6 text-center">
            Automated Secure Software Delivery Pipeline
          </p>

          <button
            type="button"
            onClick={() => {
              setActiveStage(0)
              setIsRunning(!isRunning)
              if (!isRunning) setIsRunning(true)
            }}
            className="mt-6 px-4 py-2 text-sm font-mono text-neon-cyan border border-neon-cyan/30 rounded-lg hover:bg-neon-cyan/10 transition-colors"
          >
            {isRunning ? 'Pause Pipeline' : 'Run Pipeline'}
          </button>
        </div>
      </div>
    </Section>
  )
}
