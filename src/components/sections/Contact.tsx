import { useState } from 'react'
import { motion } from 'framer-motion'
import { personalInfo } from '../../data/portfolio'
import { Section, GlowButton } from '../ui/Section'

export function Contact() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailtoLink = `mailto:${personalInfo.email}?subject=Portfolio Contact from ${email}&body=${encodeURIComponent(message)}`
    window.location.href = mailtoLink
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <Section id="contact" subtitle="Get In Touch" title="Contact">
      <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass rounded-xl p-6 font-mono"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <p className="text-neon-cyan">
              <span className="text-purple">user@portfolio</span>:~$ contact --init
            </p>

            <div>
              <label htmlFor="email" className="block text-text-secondary text-sm mb-2">
                Enter email:
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.com"
                className="w-full px-4 py-3 rounded-lg bg-bg-primary/80 border border-neon-cyan/20 text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-neon-cyan/50 focus:shadow-[0_0_20px_rgba(0,229,255,0.15)] transition-all"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-text-secondary text-sm mb-2">
                Enter message:
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your message here..."
                className="w-full px-4 py-3 rounded-lg bg-bg-primary/80 border border-neon-cyan/20 text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-neon-cyan/50 focus:shadow-[0_0_20px_rgba(0,229,255,0.15)] transition-all resize-none"
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 rounded-lg bg-gradient-to-r from-neon-cyan/20 to-electric-blue/20 border border-neon-cyan/50 text-neon-cyan font-medium hover:shadow-[0_0_30px_rgba(0,229,255,0.3)] transition-all"
            >
              {submitted ? '✔ Message sent!' : '$ send --message'}
            </motion.button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center space-y-6"
        >
          <div className="glass rounded-xl p-6">
            <h3 className="text-lg font-mono text-neon-cyan mb-4"> Social_Links[]</h3>
            <div className="space-y-4">
              <GlowButton
                href={personalInfo.social.linkedin}
                variant="outline"
                className="w-full justify-start"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-electric-blue">→</span> LinkedIn
              </GlowButton>
              <GlowButton
                href={personalInfo.social.github}
                variant="outline"
                className="w-full justify-start"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-purple">→</span> GitHub
              </GlowButton>
              <GlowButton href={personalInfo.social.email} variant="outline" className="w-full justify-start">
                <span className="text-neon-cyan">→</span> Email
              </GlowButton>
            </div>
          </div>

          <div className="glass rounded-xl p-6 font-mono text-sm text-text-secondary">
            <p className="text-neon-cyan mb-2">$ whoami</p>
            <p>{personalInfo.name}</p>
            <p className="text-electric-blue">{personalInfo.title}</p>
            <p className="mt-2">{personalInfo.location}</p>
            <motion.p
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mt-4 text-green-400"
            >
              Status: Available for opportunities
            </motion.p>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
