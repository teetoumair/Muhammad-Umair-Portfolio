import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TopNavBar from './components/layout/TopNavBar'
import Footer from './components/layout/Footer'
import HeroSection from './components/sections/HeroSection'
import MissionSection from './components/sections/MissionSection'
import ExpertiseSection from './components/sections/ExpertiseSection'
import PortfolioSection from './components/sections/PortfolioSection'
import TechEcosystemSection from './components/sections/TechEcosystemSection'
import TestimonialsSection from './components/sections/TestimonialsSection'
import CallToActionSection from './components/sections/CallToActionSection'
import AiAssistantPage from './pages/AiAssistantPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <TopNavBar />
              <HeroSection />
              <MissionSection />
              <ExpertiseSection />
              <PortfolioSection />
              <TechEcosystemSection />
              <TestimonialsSection />
              <CallToActionSection />
              <Footer />
            </>
          }
        />
        <Route path="/ai-assistant" element={<AiAssistantPage />} />
      </Routes>
    </BrowserRouter>
  )
}
