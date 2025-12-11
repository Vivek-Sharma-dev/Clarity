import Header from "./Components/Header/Header"
import AboutSection from "./Pages/AboutSection"
import HeroSection from "./Pages/HeroSection"
import ServicesSection from "./Pages/ServicesSection"


const App = () => {
  return (
    <div className=" px-4 lg:px-0">
    <Header />
    <main className=" text-white ">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
    </main>
    </div>
  )
}

export default App