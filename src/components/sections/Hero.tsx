import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { personalInfo, heroTech, terminalCommands } from '../../data/portfolio'
import { GlowButton } from '../ui/Section'
import { ParticleField, NetworkTopology, GridBackground } from '../effects/ParticleField'

function TerminalAnimation() {
  const [visibleLines, setVisibleLines] = useState(0)
  const [currentChar, setCurrentChar] = useState(0)
  const [showOutput, setShowOutput] = useState(false)

  useEffect(() => {
    if (visibleLines >= terminalCommands.length) return

    const cmd = terminalCommands[visibleLines]
    const prefix = `$ ${cmd.command}`

    if (currentChar < prefix.length) {
      const timer = setTimeout(() => setCurrentChar((c) => c + 1), 40)
      return () => clearTimeout(timer)
    }

    if (!showOutput) {
      const timer = setTimeout(() => setShowOutput(true), 300)
      return () => clearTimeout(timer)
    }

    const timer = setTimeout(() => {
      setVisibleLines((l) => l + 1)
      setCurrentChar(0)
      setShowOutput(false)
    }, 800)
    return () => clearTimeout(timer)
  }, [visibleLines, currentChar, showOutput])

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="glass rounded-xl p-4 md:p-6 font-mono text-sm md:text-base w-full max-w-lg"
    >
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-neon-cyan/10">
        <div className="w-3 h-3 rounded-full bg-red-500/80" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <div className="w-3 h-3 rounded-full bg-green-500/80" />
        <span className="ml-2 text-text-secondary text-xs">devops-terminal</span>
      </div>
      <div className="space-y-2 min-h-[180px]">
        {terminalCommands.slice(0, visibleLines).map((cmd, i) => (
          <div key={i}>
            <p className="text-neon-cyan">
              <span className="text-purple">$</span> {cmd.command}
            </p>
            <p className="text-green-400 ml-2">{cmd.output}</p>
          </div>
        ))}
        {visibleLines < terminalCommands.length && (
          <div>
            <p className="text-neon-cyan">
              <span className="text-purple">$</span>{' '}
              {` ${terminalCommands[visibleLines].command}`.slice(0, currentChar)}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-2 h-4 bg-neon-cyan ml-0.5 align-middle"
              />
            </p>
            {showOutput && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-green-400 ml-2"
              >
                {terminalCommands[visibleLines].output}
              </motion.p>
            )}
          </div>
        )}
      </div>
    </motion.div>
  )
}

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <GridBackground />
      <NetworkTopology />
      <ParticleField />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-12 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-neon-cyan mb-6"
            >
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-green-400"
              />
              {personalInfo.location}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4"
            >
              <span className="gradient-text glow-text-cyan">{personalInfo.name.toUpperCase()}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-electric-blue font-semibold mb-4"
            >
              {personalInfo.title}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap justify-center lg:justify-start gap-2 mb-6"
            >
              {heroTech.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="px-3 py-1 text-xs md:text-sm font-mono glass rounded-md text-neon-cyan/90"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-text-secondary text-base md:text-lg max-w-xl mx-auto lg:mx-0 mb-8"
            >
              Designing scalable cloud infrastructure, automating deployments, and building highly available
              production systems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4"
            >
              <GlowButton href="#projects" variant="primary">
                View Projects
              </GlowButton>
              <GlowButton href={personalInfo.resumeUrl} variant="secondary" download>
                Download Resume
              </GlowButton>
              <GlowButton href="#contact" variant="outline">
                Contact Me
              </GlowButton>
            </motion.div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <TerminalAnimation />
          </div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#metrics" className="text-neon-cyan/50 hover:text-neon-cyan transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </motion.div>
    </section>
  )
}
