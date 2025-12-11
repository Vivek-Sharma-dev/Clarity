import React from "react";
import { h2Style, primaryBtn } from "../Style/ComponentsStyle";
import { Check } from "lucide-react";
import about from "../assets/AboutSection/About1.png";
import about2 from "../assets/AboutSection/About2.png";
const AboutSection = () => {
  const textList = [
    {
      id: 1,
      text: "Excepteur sint occaecat cupidatat non proident.",
      icon: <Check size={16} />,
    },
    {
      id: 2,
      text: "Nemo enim ipsam voluptatem quia voluptas sit.",
      icon: <Check size={16} />,
    },
    {
      id: 3,
      text: "Duis aute irure dolor in reprehenderit in voluptate velit.",
      icon: <Check size={16} />,
    },
  ];
  return (
    <section id="about" className="bg-(--primary-color) py-20">
      <div className="flex gap-5 container mx-auto ">
        <div className="w-2/4">
          <h4 className="text-(--secondary-color) uppercase font-bold text-sm font-serif">
            discover our story
          </h4>
          <h2 className={h2Style}>
            Innovative Solution for a Digital-First World
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <ul className="my-5 flex flex-col gap-4 justify-center">
            {textList.map((text) => (
              <li key={text.id} className="flex gap-3 ">
                <span className="p-1 bg-(--secondary-color) text-(--primary-color) text-xs rounded-full">
                  {text.icon}
                </span>{" "}
                {text.text}
              </li>
            ))}
          </ul>

          <button className={`${primaryBtn} mt-5 lg:mt-10`}>
            Discover More
          </button>
        </div>
        <div className="relative w-3/4">
          <img
            src={about}
            alt="Planing on a task with team members"
            className="border-4 rounded-xl border-gray-500"
          />
          <img
            src={about2}
            alt="Celebration with team members"
            className="absolute -bottom-5 -left-10 border-4 rounded-xl border-gray-500/70 w-80"
          />
          <div className="flex gap-5 absolute -top-10 py-5 right-0 bg-(--primary-color)/90 p-3 rounded-xl">
            <div className="text-center">
              <span className="text-(--secondary-color) text-2xl lg:text-4xl font-bold">
                20+
              </span>
              <br />{" "}
              <span className="text-gray-400 text-sm font-medium">
                Years of Experience
              </span>
            </div>
            <div className="text-center">
              <span className="text-(--secondary-color) text-2xl lg:text-4xl font-bold">
                500+
              </span>{" "}
              <br />{" "}
              <span className="text-gray-400 text-sm font-medium">
                Happy Clients
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
