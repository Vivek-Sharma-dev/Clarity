import React from "react";
import { Palette, MoveRight } from "lucide-react";

const ServiceCard = ({ title, desc, tag, icon }) => {
  return (
    <div className="group relative flex flex-col gap-5 items-center hover:-translate-y-2 transition-all duration-300 bg-(--nav-bg) rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] px-6 text-center py-10">
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
    </div>
  );
};

export default ServiceCard;
