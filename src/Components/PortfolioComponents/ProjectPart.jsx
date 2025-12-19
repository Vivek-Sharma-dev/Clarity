import PortfolioProjectCard from "../PortfolioProjectCard";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  h2Style,
  primaryBtn,
  projectBtnActive,
  projectBtnBase,
  serviceCardStyle,
} from "../../Style/ComponentsStyle";
import ProjectsCarousel from "../ProjectsCarousel";
import { useRef } from "react";

const ProjectPart = ({
  filteredProjects,
  btnTitles,
  isActive,
  setIsActive,
  setIsViewerOpen,
  setCurrentIndex,
  activeProject,
  currentIndex,
  isViewerOpen,
  openViewer,
}) => {
  const isMobile = window.innerWidth <= 768;
  const projectRef = useRef(null);
  const isInView = useInView(projectRef, { once: true, amount:isMobile?  0.1 : 0.3 });
  return (
    <>
      <div ref={projectRef} className="container mx-auto">
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
        <motion.div
          animate={
            isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }
          }
          transition={{ duration: 0.5 }}
          className="my-5 lg:my-10"
        >
          <div className="flex gap-5 lg:gap-10 justify-center flex-wrap">
            {btnTitles.map((title, index) => (
              <motion.button
                animate={
                  isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 1 }
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
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 gap-y-5">
          {filteredProjects.map((project, idx) => (
            <PortfolioProjectCard
              key={project.id}
              {...project}
              onView={() => openViewer(filteredProjects, idx)}
            />
          ))}
        </div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ amount: 0.3, once: true }}
          transition={{ duration: 0.5 }}
          className={`mt-5 lg:mt-10 ${serviceCardStyle}`}
        >
          <h3 className="capitalize text-xl lg:text-2xl font-bold font-serif">
            Ready to start your next project?
          </h3>
          <p className="text-gray-400 lg:text-lg">
            Let's work together to bring your digital vision to life
          </p>
          <div>
            <button className={`${primaryBtn} rounded-xl! mr-5 mb-5`}>
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
    </>
  );
};

export default ProjectPart;
