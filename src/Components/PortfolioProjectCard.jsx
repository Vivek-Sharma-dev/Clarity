import image1 from "../assets/PortfolioSection/Image1.png";
import { Star } from "lucide-react";

const PortfolioProjectCard = () => {
  const temp = ["React", "Node.js", "AWX"];
  return (
    <div className="md:w-1/2 lg:w-1/3 w-full rounded-2xl overflow-hidden bg-(--nav-bg) shadow-[0px_0px_1px_rgba(255,255,255,1)]">
      <img src={image1} alt="things on book" className="w-full" />
      <div className="px-6 py-5 flex flex-col gap-3 ">
        <div className="flex justify-between mt-5">
          <span className="uppercase font-bold text-(--secondary-color) bg-white/10 py-2 px-4 rounded-full text-xs">
            web design
          </span>
          <span className="flex items-center gap-1 font-bold text-[#fbbf24]">
            <Star size={16} color="#fbbf24" fill="#fbbf24" /> 4.8
          </span>
        </div>
        <h4 className="capitalize text-xl lg:text-2xl font-bold"> 
          digital innovation platform
        </h4>
        <p className="text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore.
        </p>
        <div className="">
          {temp.map((item, idx) => (
            <span key={idx} className="hover:text-(--secondary-color) transition-all duration-300 text-gray-400 capitalize font-bold  bg-white/10 py-2 px-4 rounded-full text-xs mr-3">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioProjectCard;
