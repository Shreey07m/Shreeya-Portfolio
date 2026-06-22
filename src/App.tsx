import { Navbar, Footer } from './components/layout/Navbar'
import { Hero } from './components/sections/Hero'
import { ImpactMetrics } from './components/sections/ImpactMetrics'
import { About } from './components/sections/About'
import { PipelineVisualization } from './components/sections/PipelineVisualization'
import { Skills } from './components/sections/Skills'
import { ExperienceSection } from './components/sections/ExperienceSection'
import { Projects } from './components/sections/Projects'
import { ArchitectureVisualization } from './components/sections/ArchitectureVisualization'
import { Certifications, Achievements } from './components/sections/Certifications'
import { Contact } from './components/sections/Contact'

function App() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <Navbar />
      <main>
        <Hero />
        <ImpactMetrics />
        <About />
        <PipelineVisualization />
        <Skills />
        <ExperienceSection />
        <Projects />
        <ArchitectureVisualization />
        <Certifications />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
