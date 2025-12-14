import { useRef, useState, useEffect } from "react";
import image1 from "../assets/PortfolioSection/Image1.png";
import image2 from "../assets/PortfolioSection/Image2.png";
import image3 from "../assets/PortfolioSection/Image3.png";
import image4 from "../assets/PortfolioSection/Image4.png";
import image5 from "../assets/PortfolioSection/Image5.png";
import image6 from "../assets/PortfolioSection/Image6.png";
import { motion, AnimatePresence, useInView } from "motion/react";
import {
  h2Style,
  primaryBtn,
  projectBtnActive,
  projectBtnBase,
  sectionBaseStyle,
  serviceCardStyle,
} from "../Style/ComponentsStyle";
import PortfolioProjectCard from "../Components/PortfolioProjectCard";
import ProjectsCarousel from "../Components/ProjectsCarousel";

const PortfolioSection = () => {
  const portfolioRef = useRef(null);
  const portfolioCardRef = useRef(null);
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
    <section ref={portfolioRef} className={sectionBaseStyle}>
      <div className="container mx-auto">
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className={h2Style}>Portfolio</h2>
          <p className="text-gray-400 lg:text-lg">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </motion.div>
        <div className="my-5 lg:my-10">
          <div className="flex gap-5 lg:gap-10 justify-center flex-wrap">
            {btnTitles.map((title, index) => (
              <motion.button
                initial={{ scale: 0, opacity: 0 }}
                animate={
                  isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }
                }
                transition={{ duration: 0.5 }}
                key={index}
                className={
                  isActive === title ? projectBtnActive : projectBtnBase
                }
                onClick={() => setIsActive(title)}
              >
                {title}
              </motion.button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 gap-y-5">
          {filteredProjects.map((project, idx) => (
            <PortfolioProjectCard
              key={project.id}
              {...project}
              onView={() => openViewer(filteredProjects, idx)}
            />
          ))}
        </div>
        <motion.div className={`mt-5 lg:mt-10 ${serviceCardStyle}`}>
          <h3 className="capitalize text-xl lg:text-2xl font-bold font-serif">
            Ready to start your next project?
          </h3>
          <p className="text-gray-400 lg:text-lg">
            Let's work together to bring your digital vision to life
          </p>
          <div>
            <button className={`${primaryBtn} rounded-xl! mr-5`}>
              Start a Project
            </button>
            <button className={`${primaryBtn} rounded-xl! mr-5`}>
              View All Work
            </button>
          </div>
        </motion.div>
      </div>
      <AnimatePresence>
        {isViewerOpen && (
          <ProjectsCarousel
            setIsViewerOpen={setIsViewerOpen}
            setCurrentIndex={setCurrentIndex}
            activeProject={activeProject}
            currentIndex={currentIndex}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default PortfolioSection;
