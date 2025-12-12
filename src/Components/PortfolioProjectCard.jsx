import image1 from "../assets/PortfolioSection/Image1.png";
import { Star, Eye, MoveUpRight } from "lucide-react";

const PortfolioProjectCard = ({
  title,
  image,
  desc,
  tag,
  rating,
  link,
  technologies,
}) => {
  const temp = ["React", "Node.js", "AWX"];
  return (
    <div className="group hover:-translate-y-2 transition-all duration-300  hover:shadow-[0px_4px_8px_8px_rgba(255,255,255,.4)] w-full rounded-2xl overflow-hidden bg-(--nav-bg) shadow-[0px_0px_1px_1px_rgba(255,255,255,.5)]">
      <div className="relative overflow-hidden">
        <img src={image} alt="things on book" className="w-full" />
        <div className="pointer-events-none opacity-0 translate-y-full group-hover:pointer-events-auto group-hover:opacity-100 group-hover:translate-y-0 origin-bottom flex items-center gap-5 justify-center bg-(--secondary-color)/85 h-full w-full absolute top-0 left-0 transition-all duration-500 ease-in-out">
          <span className="bg-(--primary-color) p-4 rounded-2xl hover:bg-(--secondary-color) hover:-translate-y-2 transition-all duration-300">
            <Eye />
          </span>
          <a
            href={link}
            className="bg-(--primary-color) p-4 rounded-2xl hover:bg-(--secondary-color) hover:-translate-y-2 transition-all duration-300"
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
  );
};

export default PortfolioProjectCard;
