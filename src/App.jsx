import Header from "./Components/Header/Header"
import AboutSection from "./Pages/AboutSection"
import HeroSection from "./Pages/HeroSection"


const App = () => {
  return (
    <>
    <Header />
    <main>
      <HeroSection />
      <AboutSection />
    </main>
    </>
  )
}

export default App