# Shreeya Maliye — Cloud & DevOps Engineer Portfolio

A futuristic DevOps command-center portfolio built with React 19, Vite, TypeScript, Tailwind CSS, and Framer Motion.

**Live Preview:** [shreeya-portfolio.preview.emergentagent.com](https://shreeya-portfolio.preview.emergentagent.com/)

---

## Tech Stack

| Layer | Technologies |
|-------|-------------|
| Frontend | React 19, Vite 7, TypeScript, Tailwind CSS 4, Framer Motion |
| Deployment | Vercel, AWS S3, CloudFront |
| CI/CD | GitHub Actions |

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

## Customization

All content lives in `src/data/portfolio.ts`. Update:

- Personal info, social links, email
- Metrics, skills, experience, projects
- Certifications and achievements
- GitHub/demo URLs

Place your resume at `public/resume.pdf` for the Download Resume button.

---

## Deployment

### Vercel (Recommended)

See [docs/DEPLOY_VERCEL.md](docs/DEPLOY_VERCEL.md)

```bash
npm i -g vercel
vercel
```

### AWS S3 + CloudFront

See [docs/DEPLOY_AWS.md](docs/DEPLOY_AWS.md)

---

## CI/CD

GitHub Actions workflow (`.github/workflows/deploy.yml`):

1. **Build** — lint, build, upload artifact
2. **Deploy Vercel** — optional (requires secrets)
3. **Deploy AWS** — S3 sync + CloudFront invalidation (requires secrets)

### Required GitHub Secrets

| Secret | Description |
|--------|-------------|
| `VERCEL_TOKEN` | Vercel API token |
| `VERCEL_ORG_ID` | Vercel organization ID |
| `VERCEL_PROJECT_ID` | Vercel project ID |
| `AWS_ACCESS_KEY_ID` | AWS access key |
| `AWS_SECRET_ACCESS_KEY` | AWS secret key |
| `AWS_REGION` | e.g. `ap-south-1` |
| `AWS_S3_BUCKET` | S3 bucket name |
| `AWS_CLOUDFRONT_ID` | CloudFront distribution ID |

---

## SEO

Configured in `index.html`:

- **Title:** Shreeya Maliye | Cloud & DevOps Engineer
- **Description:** Cloud & DevOps Engineer specializing in AWS, Kubernetes, Terraform, GitLab CI/CD, Docker, Observability, and Infrastructure Automation.

---

## License

MIT © Shreeya Maliye
