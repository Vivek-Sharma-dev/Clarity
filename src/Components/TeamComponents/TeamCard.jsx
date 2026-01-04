import React, { useState } from "react";

const TeamCard = ({ image, name, role, offset, links }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`group overflow-hidden w-40 h-40 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] hover:rounded-[20%_80%_80%_20%/20%_20%_80%_80%] transition-all duration-300 relative ${offset}`}
      onClick={() => setOpen((prev) => !prev)}
    >
      <img src={image} alt="" className="h-full w-full object-cover" />
      <div
        className={`group-hover:opacity-100 group-hover:top-0 transition-all duration-300 ease-out absolute inset-[1.4rem_0_0_0] opacity-0 z-50 bg-(--secondary-color)/70 text-center pt-5 
          ${
          open
            ? "opacity-100 top-0 transition-all duration-300 forced-color-adjust-none ease-out absolute z-50 bg-(--secondary-color)/70 text-center pt-5 pointer-events-auto"
            : "transition-all duration-300 ease-out absolute inset-[1.4rem_0_0_0] opacity-0 z-50 bg-(--secondary-color)/70 text-center pt-5 pointer-events-none"
        }
        `}
      >
        <div className="rotate-8">
          <h4 className="text-xl font-medium">{name}</h4>
          <span>{role}</span>
          <p className="flex justify-center mt-3 gap-3">
            {links.map((link, idx) => (
              <a
                href={link.link}
                key={idx}
                className="p-2 bg-black rounded-full text-(--secondary-color) hover:bg-white transition-all duration-300"
              >
                {link.icon}
              </a>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
