import TopNavBar from './components/layout/TopNavBar'
import Footer from './components/layout/Footer'
import HeroSection from './components/sections/HeroSection'
import ProjectsSection from './components/sections/ProjectsSection'
import SkillsSection from './components/sections/SkillsSection'
import AboutSection from './components/sections/AboutSection'
import ContactSection from './components/sections/ContactSection'

export default function App() {
  return (
    <>
      <TopNavBar />
      <main>
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
