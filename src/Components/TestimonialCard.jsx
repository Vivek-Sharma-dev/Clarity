import React from "react";
import { Building, Quote, Star, Verified } from "lucide-react";

const TestimonialCard = ({ image, name, pos, desc, rating, alt, tag, verification}) => {
  return (
    <div className="lg:min-w-[33.33%] mx-3 card p-4 lg:p-8 rounded-2xl bg-(--nav-bg) border-t-6 border-(--secondary-color) hover:shadow-[0_0_0px_.5px_var(--secondary-color)] transition-all duration-300 ">
      <div className="flex items-center gap-4 ">
        <img src={image} alt={alt} className="w-13 lg:w-15 rounded-2xl" />
        <div>
          <h5 className="text-lg lg:text-xl font-medium capitalize">{name}</h5>
          <span className="text-gray-400 font-medium text-sm">
            {pos}
          </span>
          <span className="flex items-center gap-1 mt-3">
            {Array.from({ length: rating }).map((_, idx) => (
              <Star
                size={15}
                className="text-[#fbbf24]"
                fill="currentColor"
                key={idx}
              />
            ))}
          </span>
        </div>
      </div>
      <div className="body py-8 border-b border-gray-400 relative">
        <p className="leading-relaxed lg:text-lg text-gray-300 font-medium line-clamp-5">
         {desc}
        </p>
        <span className="absolute right-3 top-3 rotate-180 p-4 bg-(--secondary-color) rounded-full">
          <Quote size={15} fill="currentColor" />
        </span>
      </div>

      <div className="footer mt-5 flex flex-col lg:flex-row items-start lg:justify-between">
        <span className="flex items-center rounded-2xl gap-3 text-(--secondary-color) font-semibold px-2 py-1 text-xs bg-(--secondary-color)/20">
          <Building size={20}/> {tag}
        </span>
        <span className="flex items-center rounded-2xl gap-1 text-[#10b981] font-semibold lg:px-4 py-2 text-sm ">
          <Verified className="text-(--primary-color)" fill="#10b981" />{" "}
          {verification}
        </span>
      </div>
    </div>
  );
};

export default TestimonialCard;
