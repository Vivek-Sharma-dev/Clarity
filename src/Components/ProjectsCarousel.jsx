import { motion, AnimatePresence } from "motion/react";
import { Minimize2, StepBack, StepForward } from "lucide-react";

const ProjectsCarousel = ({
  setIsViewerOpen,
  setCurrentIndex,
  activeProject,
  currentIndex,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed inset-0 z-50 bg-[url()]"
    >
      <div
        className="absolute inset-0 bg-cover flex justify-center items-center transition-all duration-300"
        style={{ backgroundImage: `URL(${activeProject[currentIndex].image})` }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-2xl" />
        <div>
          <button
            onClick={() => setIsViewerOpen(false)}
            className="fixed top-5 right-5 cursor-pointer"
          >
            <Minimize2 size={30} />
          </button>
          <motion.button
          whileHover={{scale: 1.2}}
            className="fixed top-1/2 left-10 cursor-pointer"
            onClick={() => setCurrentIndex((i) => Math.max(i - 1, 0))}
          >
            <StepBack size={50}/>
          </motion.button>
          <AnimatePresence mode="wait">
            <motion.img
              key={activeProject[currentIndex].image}
              src={activeProject[currentIndex].image}
              className="rounded-xl relative shadow transition-all duration-300"
              initial={{ opacity: 0}}
              animate={{ opacity: 1}}
              exit={{ opacity: 0}}
              transition={{ duration: 0.5, ease: "easeIn" }}
            />
          </AnimatePresence>
          <motion.button
            whileHover={{ scale: 1.2 }}
            className="fixed top-1/2 right-10 cursor-pointer"
            onClick={() =>
              setCurrentIndex((i) => Math.min(i + 1, activeProject.length - 1))
            }
          >
            <StepForward size={50} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsCarousel;
