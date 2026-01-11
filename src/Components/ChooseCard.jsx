import { motion } from "motion/react";
const ChooseCard = ({ title, desc, number, bottomText, icon, index }) => {
  const cardPerRow = window.innerWidth >= 769 ? 3 : 1;
  const cardVariants = {
    hidden :{
      opacity : 0,
      y : 100,
    },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: (i * cardPerRow) * 0.2,
        type: "spring",
        stiffness: 30,
        damping: 7,
        mass: 1.5,
      }
    })
  }
  return (
    <motion.div 
    variants={cardVariants}
    custom={index}
    initial="hidden"
    whileInView="visible"
    viewport={{once: true, amount: 0.2}}
    >
      <div
       
        transition={{ duration: 0.5 }}
        className="hover:-translate-y-2 text-center shadow-[0_0_0px_.3px_rgba(255,255,255,.2)]/40 hover:shadow-[0_0_0px_.5px_var(--secondary-color)] rounded-2xl p-10 bg-(--nav-bg) transition-all duration-300"
      >
        <div className="flex flex-col gap-5 items-center border-b py-5 border-gray-400">
          <span className="p-2 lg:p-5 rounded-2xl bg-(--secondary-color) shadow-[0_0_0px_10px_var(--secondary-color)]/40">
            {icon}
          </span>
          <h4 className="text-xl lg:text-2xl font-bold">{title}</h4>
          <p className="text-gray-400 font-medium">{desc}</p>
        </div>
        <div className="mt-5">
          <span className="text-2xl lg:text-3xl text-(--secondary-color) font-bold">
            {number}
          </span>{" "}
          <br />
          <span className="text-gray-400 font-medium">{bottomText}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ChooseCard;
