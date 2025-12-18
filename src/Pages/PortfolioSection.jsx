import { useRef, useState } from "react";
import image1 from "../assets/PortfolioSection/Image1.png";
import image2 from "../assets/PortfolioSection/Image2.png";
import image3 from "../assets/PortfolioSection/Image3.png";
import image4 from "../assets/PortfolioSection/Image4.png";
import image5 from "../assets/PortfolioSection/Image5.png";
import image6 from "../assets/PortfolioSection/Image6.png";
import { useInView } from "motion/react";
import { sectionBaseStyle } from "../Style/ComponentsStyle";
import ProjectPart from "../Components/PortfolioComponents/ProjectPart";
import WhyChooseUsPart from "../Components/PortfolioComponents/WhyChooseUsPart";
import { Award, ChartLine, Palette } from "lucide-react";
import LeadingBrandsPart from "../Components/PortfolioComponents/LeadingBrandsPart";


const PortfolioSection = () => {
  const portfolioRef = useRef(null);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeProject, setActiveProject] = useState([]);
  const [isActive, setIsActive] = useState("All Projects");
  const isInView = useInView(portfolioRef, { amount: 0.2, once: true });
  const btnTitles = [
    "All Projects",
    "Web Design",
    "Mobile Apps",
    "Branding",
    "UI/UX",
  ];

  const projects = [
    {
      id: 1,
      title: "Digital Innovation Platform",
      category: "Web Design",
      image: image1,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
      tag: "web design",
      rating: "4.8",
      link: "#",
      technologies: ["React", "Node.js", "AWX"],
      alt: "Thread and scissor on the book",
    },
    {
      id: 2,
      title: "E-commerce Platform",
      category: "Web Design",
      image: image5,
      desc: "Donec rutrum congue leo eget malesuada. Vivamus magna justo, lacinia eget consectetur sed.",
      tag: "E-commerce",
      rating: "4.6",
      link: "#",
      technologies: ["Shopify", "React", "api"],
      alt: "cloths hanging on the wall",
    },
    {
      id: 3,
      title: "Smart Productivity App",
      category: "Mobile Apps",
      image: image2,
      desc: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
      tag: "mobile app",
      rating: "4.9",
      link: "#",
      technologies: ["flutter", "firebase", "AI"],
      alt: "Colorful pencils",
    },
    {
      id: 4,
      title: "Fintech Mobile Solution",
      category: "Mobile Apps",
      image: image6,
      desc: "Cras ultricies ligula sed magna dictum porta. Proin eget tortor risus. Sed porttitor lectus nibh.",
      tag: "Fintech",
      rating: "4.8",
      link: "#",
      technologies: ["Swift", "Kotlin", "Blockchain"],
      alt: "Holding a book",
    },
    {
      id: 5,
      title: "Modern Brand Identity",
      category: "Branding",
      image: image3,
      desc: "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur arcu erat, accumsan id.",
      tag: "Branding",
      rating: "5.0",
      link: "#",
      technologies: ["illustrator", "figma", "brand"],
      alt: "specs, book, pen and lipstick",
    },
    {
      id: 6,
      title: "SaaS Dashboard Design",
      category: "UI/UX",
      image: image4,
      desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      tag: "UI/UX",
      rating: "4.7",
      link: "#",
      technologies: ["Figma", "prototyping", "UX"],
      alt: "Flowers in the flower pot",
    },
  ];

  const openViewer = (projects, idx) => {
    setActiveProject(projects);
    setCurrentIndex(idx);
    setIsViewerOpen(true);
  };
  const filteredProjects = projects.filter(
    (project) => isActive === "All Projects" || project.category === isActive
  );


  return (
    <section id="portfolio" ref={portfolioRef} className={sectionBaseStyle}>
      <ProjectPart
        filteredProjects={filteredProjects}
        isInView={isInView}
        btnTitles={btnTitles}
        isActive={isActive}
        setIsActive={setIsActive}
        setIsViewerOpen={setIsViewerOpen}
        openViewer={openViewer}
        setCurrentIndex={setCurrentIndex}
        activeProject={activeProject}
        currentIndex={currentIndex}
        isViewerOpen={isViewerOpen}
      />
      <WhyChooseUsPart />
      <LeadingBrandsPart />

    </section>
  );
};

export default PortfolioSection;
