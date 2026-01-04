import Header from "./Components/Header/Header"
import AboutSection from "./Pages/AboutSection"
import ContactSection from "./Pages/ContactSection"
import HeroSection from "./Pages/HeroSection"
import PortfolioSection from "./Pages/PortfolioSection"
import ServicesSection from "./Pages/ServicesSection"
import TeamSection from "./Pages/TeamSection"
import Testimonial from './Pages/Testimonial';


const App = () => {
  return (
    <div>
    <Header />
    <main className="text-white forced-color-adjust-none">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <Testimonial />
      <TeamSection />
      <ContactSection />
    </main>
    </div>
  )
}

export default App