import React from "react";
import { motion } from "motion/react";

const ProjectsCarousel = ({
  setIsViewerOpen,
  setCurrentIndex,
  activeProject,
  currentIndex
}) => {
  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate ={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.95}}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className="fixed inset-0 flex justify-center items-center z-50 bg-[url()]">
      <div>
        <button
          onClick={() => setIsViewerOpen(false)}
          className="absolute top-5 right-5"
        >
          X
        </button>
        <button
          className="fixed top-1/5 left-5"
          onClick={() => setCurrentIndex((i) => Math.max(i - 1, 0))}
        >
          prev
        </button>
        <img src={activeProject[currentIndex].image} className="rounded-xl" alt="" />
        <button
          className="fixed top-1/5 right-5"
          onClick={() =>
            setCurrentIndex((i) => Math.min(i + 1, activeProject.length - 1))
          }
        >
          next
        </button>
      </div>
    </motion.div>
  );
};

export default ProjectsCarousel;
