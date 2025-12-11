import Header from "./Components/Header/Header"
import AboutSection from "./Pages/AboutSection"
import HeroSection from "./Pages/HeroSection"


const App = () => {
  return (
    <div className=" px-4 lg:px-0">
    <Header />
    <main className=" text-white ">
      <HeroSection />
      <AboutSection />
    </main>
    </div>
  )
}

export default App