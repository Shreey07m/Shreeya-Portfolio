# Shreeya Maliye — Cloud & DevOps Engineer Portfolio

A futuristic DevOps command-center portfolio built with React 19, Vite, TypeScript, Tailwind CSS, and Framer Motion.

---

## Tech Stack

| Layer | Technologies |
|-------|-------------|
| Frontend | React 19, Vite 7, TypeScript, Tailwind CSS 4, Framer Motion |

---

## Project Structure

```
shreeya-portfolio/
├── public/
│   ├── favicon.svg
│   └── resume.pdf              # Add your resume here
├── src/
│   ├── components/
│   │   ├── effects/
│   │   │   └── ParticleField.tsx    # Particles, grid, network topology
│   │   ├── layout/
│   │   │   └── Navbar.tsx           # Navigation + footer
│   │   ├── sections/
│   │   │   ├── Hero.tsx             # Section 1: Hero + terminal
│   │   │   ├── ImpactMetrics.tsx    # Section 2: Animated counters
│   │   │   ├── About.tsx            # Section 3: Professional story
│   │   │   ├── PipelineVisualization.tsx  # Section 4: CI/CD pipeline
│   │   │   ├── Skills.tsx           # Section 5: Skill cards
│   │   │   ├── ExperienceSection.tsx # Section 6: Timeline
│   │   │   ├── Projects.tsx         # Section 7: Project cards
│   │   │   ├── ArchitectureVisualization.tsx  # Section 8: AWS arch
│   │   │   ├── Certifications.tsx   # Section 9 & 10: Certs + achievements
│   │   │   └── Contact.tsx          # Section 11: Terminal contact form
│   │   └── ui/
│   │       └── Section.tsx          # Reusable Section, GlassCard, GlowButton
│   ├── data/
│   │   └── portfolio.ts             # All portfolio content (single source of truth)
│   ├── hooks/
│   │   └── useAnimatedCounter.ts    # Counter + typewriter hooks
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css                    # Tailwind theme + utilities
├── .github/workflows/
│   └── deploy.yml                   # CI/CD pipeline
├── docs/
│   ├── DEPLOY_VERCEL.md
│   └── DEPLOY_AWS.md
├── index.html                       # SEO meta tags
├── vercel.json
├── vite.config.ts
└── package.json
```

---

## Getting Started

### Prerequisites

- Node.js 20+
- npm 10+

### Install & Run

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

### Build for Production

```bash
npm run build
npm run preview
```

---


## Deployment

### Vercel 

See [docs/DEPLOY_VERCEL.md](docs/DEPLOY_VERCEL.md)

```bash
npm i -g vercel
vercel
```

---

## SEO

Configured in `index.html`:

- **Title:** Shreeya Maliye | Cloud & DevOps Engineer
- **Description:** Cloud & DevOps Engineer specializing in AWS, Kubernetes, Terraform, GitLab CI/CD, Docker, Observability, and Infrastructure Automation.

---

## License

MIT © Shreeya Maliye
