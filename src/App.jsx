import { useEffect } from "react";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import AboutSection from "./Pages/AboutSection";
import ContactSection from "./Pages/ContactSection";
import HeroSection from "./Pages/HeroSection";
import PortfolioSection from "./Pages/PortfolioSection";
import ServicesSection from "./Pages/ServicesSection";
import TeamSection from "./Pages/TeamSection";
import Testimonial from "./Pages/Testimonial";
import Lenis from "@studio-freight/lenis/types";

const App = () => {
  useEffect(() => {
    const lenis = new Lenis()
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])

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
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
