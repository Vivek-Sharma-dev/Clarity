import { Star, Eye, MoveUpRight } from "lucide-react";
import {
  projectCardImgClickActiveStyle,
  projectCardImgClickCloseStyle,
  projectCardImgHoverStyle,
  projectCardMainStyle,
} from "../Style/ComponentsStyle";
import { useState } from "react";
import { motion } from "motion/react";
const PortfolioProjectCard = ({
  title,
  image,
  desc,
  tag,
  rating,
  link,
  technologies,
  alt,
  onView,
  index,
}) => {
  const isLaptop = window.innerWidth >= 769;
  const [open, setOpen] = useState(false);
  const cardValue = isLaptop ? 3 : 1;
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: (i % cardValue) * 0.2,
        type: "spring",
        stiffness: 30,
        damping: 7,
        mass: 1.5,
      },
    }),
  };
  return (
    <motion.div
      layout
      variants={cardVariants}
      custom={index}
      initial="hidden"
      whileInView="visible"
      exit={{opacity : 0, y : 100, transition : {duration : .5}}}
      viewport={{ once: true, amount: isLaptop ? 0.3 : 0.2 }}
    >
      <div
        className={projectCardMainStyle}
        onClick={() => setOpen((prev) => !prev)}
      >
        <div className="relative overflow-hidden">
          <img src={image} alt={alt} className="w-full" />
          <div
            className={`${
              isLaptop
                ? projectCardImgHoverStyle
                : open
                ? projectCardImgClickActiveStyle
                : projectCardImgClickCloseStyle
            }`}
          >
            <button
              onClick={onView}
              className="bg-(--primary-color) p-4 rounded-2xl hover:bg-(--secondary-color) hover:-translate-y-2 transition-all duration-300 cursor-pointer"
            >
              <Eye />
            </button>
            <a
              href={link}
              className="bg-(--primary-color) p-4 rounded-2xl hover:bg-(--secondary-color) hover:-translate-y-2 transition-all duration-300 cursor-pointer"
            >
              <MoveUpRight />
            </a>
          </div>
        </div>
        <div className="px-6 py-8 flex flex-col gap-3 ">
          <div className="flex justify-between">
            <span className="uppercase font-bold text-(--secondary-color) bg-white/10 py-2 px-4 rounded-full text-xs">
              {tag}
            </span>
            <span className="flex items-center gap-1 font-bold text-[#fbbf24]">
              <Star size={16} color="#fbbf24" fill="#fbbf24" /> {rating}
            </span>
          </div>
          <h4 className="capitalize text-xl lg:text-2xl font-bold">{title}</h4>
          <p className="text-gray-400">{desc}</p>
          <div className="">
            {technologies.map((item, idx) => (
              <span
                key={idx}
                className="hover:text-(--secondary-color) transition-all duration-300 text-gray-400 capitalize font-bold  bg-white/10 py-2 px-4 rounded-full text-xs mr-3"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioProjectCard;
