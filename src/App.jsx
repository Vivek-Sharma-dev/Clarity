import Header from "./Components/Header/Header"
import AboutSection from "./Pages/AboutSection"
import HeroSection from "./Pages/HeroSection"


const App = () => {
  return (
    <div className="bg-(--primary-color)">
    <Header />
    <main className=" text-white container mx-auto">
      <HeroSection />
      <AboutSection />
    </main>
    </div>
  )
}

export default App