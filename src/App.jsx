import Header from "./Components/Header/Header"
import AboutSection from "./Pages/AboutSection"
import HeroSection from "./Pages/HeroSection"
import PortfolioSection from "./Pages/PortfolioSection"
import ServicesSection from "./Pages/ServicesSection"
import TeamSection from "./Pages/TeamSection"
import Testimonial from './Pages/Testimonial';


const App = () => {
  return (
    <div>
    <Header />
    <main className=" text-white ">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <Testimonial />
      <TeamSection />
    </main>
    </div>
  )
}

export default App