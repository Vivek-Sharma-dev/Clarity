import Header from "./Components/Header/Header"
import AboutSection from "./Pages/AboutSection"
import HeroSection from "./Pages/HeroSection"
import PortfolioSection from "./Pages/PortfolioSection"
import ServicesSection from "./Pages/ServicesSection"
import Testimonial from './Pages/Testimonial';


const App = () => {
  return (
    <div className=" px-4 lg:px-0">
    <Header />
    <main className=" text-white ">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <Testimonial />
    </main>
    </div>
  )
}

export default App