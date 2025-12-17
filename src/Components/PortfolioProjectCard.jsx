import { Star, Eye, MoveUpRight } from "lucide-react";
import { motion } from "motion/react";
import { projectCardImgHoverStyle, projectCardMainStyle } from "../Style/ComponentsStyle";
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
}) => {

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 } }
      viewport={{ amount: 0.3, once: true }}
      transition={{ duration: 0.5 }}
      className={projectCardMainStyle}
    >
      <div className="relative overflow-hidden">
        <img src={image} alt={alt} className="w-full" />
        <div className={projectCardImgHoverStyle}>
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
    </motion.div>
  );
};

export default PortfolioProjectCard;
