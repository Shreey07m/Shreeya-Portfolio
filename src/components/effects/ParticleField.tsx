import { motion } from 'framer-motion'
import { useMemo } from 'react'

interface Particle {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
}

export function ParticleField() {
  const particles = useMemo<Particle[]>(
    () =>
      Array.from({ length: 40 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 10 + 10,
        delay: Math.random() * 5,
      })),
    []
  )

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-neon-cyan/30"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

interface Node {
  id: number
  x: number
  y: number
}

export function NetworkTopology() {
  const nodes = useMemo<Node[]>(
    () =>
      Array.from({ length: 12 }, (_, i) => ({
        id: i,
        x: 10 + (i % 4) * 28 + Math.random() * 10,
        y: 15 + Math.floor(i / 4) * 30 + Math.random() * 10,
      })),
    []
  )

  const connections = useMemo(() => {
    const lines: { x1: number; y1: number; x2: number; y2: number }[] = []
    for (let i = 0; i < nodes.length - 1; i++) {
      if (i % 4 !== 3) {
        lines.push({
          x1: nodes[i].x,
          y1: nodes[i].y,
          x2: nodes[i + 1].x,
          y2: nodes[i + 1].y,
        })
      }
    }
    return lines
  }, [nodes])

  return (
    <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" preserveAspectRatio="none">
      {connections.map((line, i) => (
        <motion.line
          key={i}
          x1={`${line.x1}%`}
          y1={`${line.y1}%`}
          x2={`${line.x2}%`}
          y2={`${line.y2}%`}
          stroke="#00E5FF"
          strokeWidth="0.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 2, delay: i * 0.1 }}
        />
      ))}
      {nodes.map((node) => (
        <motion.circle
          key={node.id}
          cx={`${node.x}%`}
          cy={`${node.y}%`}
          r="3"
          fill="#3B82F6"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, delay: node.id * 0.2 }}
        />
      ))}
    </svg>
  )
}

export function GridBackground() {
  return (
    <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none">
      <motion.div
        className="absolute inset-0"
        animate={{ backgroundPosition: ['0px 0px', '50px 50px'] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 229, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 229, 255, 0.03) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />
    </div>
  )
}
