import Navbar from '../../shared/components/layout/Navbar.jsx'
import HeroSection from './components/HeroSection.jsx'
import TrustedBySection from './components/TrustedBySection.jsx'
import FeaturesSection from './components/FeaturesSection.jsx'
import CodingCategoriesSection from './components/CodingCategoriesSection.jsx'
import AIFeaturesSection from './components/AIFeaturesSection.jsx'
import RoadmapSection from './components/RoadmapSection.jsx'
import TestimonialsSection from './components/TestimonialsSection.jsx'
import PricingSection from './components/PricingSection.jsx'
import FAQSection from './components/FAQSection.jsx'
import LandingFooter from './components/LandingFooter.jsx'

export default function LandingPage() {
  return (
    <div className="home-shell min-h-screen bg-bg">
      <div className="home-background" aria-hidden="true" />
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <TrustedBySection />
        <FeaturesSection />
        <CodingCategoriesSection />
        <AIFeaturesSection />
        <RoadmapSection />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
        <LandingFooter />
      </div>
    </div>
  )
}
