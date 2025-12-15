import Header from "./Components/Header/Header"
import AboutSection from "./Pages/AboutSection"
import HeroSection from "./Pages/HeroSection"
import PortfolioSection from "./Pages/PortfolioSection"
import ServicesSection from "./Pages/ServicesSection"
import WhyChooseUs from "./Pages/WhyChooseUs"


const App = () => {
  return (
    <div className=" px-4 lg:px-0">
    <Header />
    <main className=" text-white ">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <WhyChooseUs />
    </main>
    </div>
  )
}

export default App