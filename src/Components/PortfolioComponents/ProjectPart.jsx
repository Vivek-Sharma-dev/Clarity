import PortfolioProjectCard from "../PortfolioProjectCard";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  h2Style,
  primaryBtn,
  projectBtnActive,
  projectBtnActiveAnimation,
  projectBtnBase,
  serviceCardStyle,
  transparentBtn,
} from "../../Style/ComponentsStyle";
import ProjectsCarousel from "../ProjectsCarousel";
import { useRef, useState } from "react";
import image1 from "../../assets/PortfolioSection/Image1.webp";
import image2 from "../../assets/PortfolioSection/Image2.webp";
import image5 from "../../assets/PortfolioSection/Image5.webp";
import image6 from "../../assets/PortfolioSection/Image6.webp";
import image3 from "../../assets/PortfolioSection/Image3.webp";
import image4 from "../../assets/PortfolioSection/Image4.webp";

const ProjectPart = () => {
  const isMobile = window.innerWidth <= 768;
  const projectRef = useRef(null);
  const isInView = useInView(projectRef, {
    once: true,
    amount: isMobile ? 0.1 : 0.3,
  });
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeProject, setActiveProject] = useState([]);
  const [isActive, setIsActive] = useState("All Projects");
  const btnTitles = [
    "All Projects",
    "Web Design",
    "Mobile Apps",
    "Branding",
    "UI/UX",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,

      transition: {
        staggerChildren: 0.4,
      },
    },
  };

  const btnVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 80, damping: 7 },
    },
  };
  const projects = [
    {
      id: 1,
      title: "Digital Innovation Platform",
      category: "Web Design",
      image: image1,
      desc: "A high-performance landing page designed for tech startups to showcase their digital products with a seamless user experience.",
      tag: "Web Design",
      rating: "4.8",
      link: "#",
      technologies: ["React", "Node.js", "Tailwind"],
      alt: "Modern digital workspace showcasing innovation tools",
    },
    {
      id: 2,
      title: "NexCart - Modern E-commerce",
      category: "Web Design",
      image: image2,
      desc: "A full-featured shopping experience with real-time cart management, dynamic product filtering, and secure checkout integration.",
      tag: "E-commerce",
      rating: "4.6",
      link: "#",
      technologies: ["React", "Redux", "Tailwind"],
      alt: "Clean e-commerce interface for modern retail",
    },
    {
      id: 3,
      title: "Smart Productivity App",
      category: "Mobile Apps",
      image: image5,
      desc: "A cross-platform mobile application focused on task automation and time management using intelligent AI-driven reminders.",
      tag: "Mobile App",
      rating: "4.9",
      link: "#",
      technologies: ["Flutter", "Firebase", "AI"],
      alt: "User-friendly productivity app interface",
    },
    {
      id: 4,
      title: "Fintech Mobile Solution",
      category: "Mobile Apps",
      image: image6,
      desc: "A secure financial dashboard providing real-time analytics, crypto-wallet integration, and personalized spending insights.",
      tag: "Fintech",
      rating: "4.8",
      link: "#",
      technologies: ["React Native", "Blockchain", "Chart.js"],
      alt: "Secure financial dashboard for mobile users",
    },
    {
      id: 5,
      title: "Modern Brand Identity",
      category: "Branding",
      image: image3,
      desc: "Complete visual branding and identity system for a creative agency, including logo design, typography, and color palette.",
      tag: "Branding",
      rating: "5.0",
      link: "#",
      technologies: ["Illustrator", "Figma", "Branding"],
      alt: "Professional brand identity and style guide",
    },
    {
      id: 6,
      title: "SaaS Dashboard Design",
      category: "UI/UX",
      image: image4,
      desc: "An enterprise-grade analytics dashboard designed for complex data visualization and multi-user management systems.",
      tag: "UI/UX",
      rating: "4.7",
      link: "#",
      technologies: ["Figma", "Prototyping", "UX Research"],
      alt: "Advanced analytics dashboard for SaaS platforms",
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
    <>
      <div ref={projectRef} className="container mx-auto">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 50, damping: 5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center"
        >
          <h2 className={h2Style}>Portfolio</h2>
          <p className="text-gray-400 lg:text-lg">
            A showcase of our latest digital products, crafted with precision
            and modern technology to solve real-world problems.
          </p>
        </motion.div>
        <motion.div
          animate={
            isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }
          }
          transition={{ duration: 0.5 }}
          className="my-5 lg:my-10"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex gap-5 lg:gap-10 justify-center flex-wrap"
          >
            {btnTitles.map((title, index) => (
              <motion.button
                variants={btnVariants}
                transition={{ duration: 0.5 }}
                key={index}
                onClick={() => setIsActive(title)}
              >
                <div
                  className={`relative z-50 ${
                    isActive === title ? projectBtnActive : projectBtnBase
                  }`}
                >
                  {title}
                  {isActive === title && (
                    <motion.span
                      layoutId="project-btn"
                      transition={{ ease: "easeOut", duration: 0.5 }}
                      className={`${projectBtnActiveAnimation}`}
                    ></motion.span>
                  )}
                </div>
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 gap-y-5">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                exit={{ opacity: 0, y: 100 }}
              >
                <PortfolioProjectCard
                  {...project}
                  index={idx}
                  onView={() => openViewer(filteredProjects, idx)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ amount: 0.3, once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className={`mt-5 lg:mt-10 ${serviceCardStyle}`}>
            <h3 className="capitalize text-xl lg:text-2xl font-bold font-serif">
              Have a Vision? Let’s Build It.
            </h3>
            <p className="text-gray-400 lg:text-lg">
              I’m currently available for freelance work and full-time
              opportunities. Let’s discuss how I can help your project.
            </p>
            <div>
              <button className={`${primaryBtn} rounded-xl! mr-5 mb-5`}>
                Get in Touch
              </button>
              <a
                href="https://github.com/Vivek-Sharma-dev"
                className={`${transparentBtn} rounded-xl! mr-5`}
              >
                GitHub Profile
              </a>
            </div>
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
    </>
  );
};

export default ProjectPart;
