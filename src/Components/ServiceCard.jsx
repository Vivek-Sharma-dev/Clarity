import { MoveRight } from "lucide-react";
import { motion } from "motion/react";
import { serviceCardStyle } from "../Style/ComponentsStyle";

const ServiceCard = ({ title, desc, tag, icon }) => {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      whileInView={{x : 0, opacity: 1}}
      viewport={{amount: 0.3}}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={`group ${serviceCardStyle}`}
    >
      {tag && (
        <span className="absolute right-0 -top-2 bg-[linear-gradient(135deg,rgb(255,107,107),rgb(255,142,83))] py-1 px-3 font-bold  rounded-full">
          {tag ? tag : null}
        </span>
      )}

      <span className="p-4 bg-(--secondary-color) rounded-2xl group-hover:scale-115 transition-all duration-300">
        {icon}
      </span>
      <h4 className="text-xl hover:text-(--secondary-color) transition-all duration-300 font-bold">
        {title}
      </h4>
      <p className="text-gray-400">{desc}</p>
      <a
        className="flex gap-3 group-hover:-translate-y-2 transition-all opacity-50 group-hover:opacity-100 font-bold duration-300 group/link text-(--secondary-color) mt-2"
        href="#"
      >
        Learn More
        <span className="group-hover/link:translate-x-3 transition-all duration-300">
          <MoveRight />
        </span>
      </a>
    </motion.div>
  );
};

export default ServiceCard;
