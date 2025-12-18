import React from "react";
import img from "../../assets/leadingBrand.png";
import { h2Style } from "../../Style/ComponentsStyle";
import { Check } from "lucide-react";

const LeadingBrandsPart = () => {
  const listData = [
    {
      id: 1,
      heading: "Strategic Thinking",
      desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt.",
      icon: <Check size={17} />,
    },
    {
      id: 2,
      heading: "Data-Driven Approach",
      desc: "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.",
      icon: <Check size={17}/>,
    },
    {
      id: 3,
      heading: "24/7 Support",
      desc: "Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit.",
      icon: <Check size={17}/>,
    },
  ];
  return (
    <div className="flex gap-10 gap-y-10 container mx-auto">
      <div className="w-1/2">
        <img src={img} alt="Leading brand" className="w-full" />
      </div>
      <div className="w-1/2">
        <h2 className={h2Style}>Why Leading Brands Choose Us</h2>
        <p className="text-gray-400 text-lg">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur excepteur sint occaecat.
        </p>
        <ul>
          {listData.map((item) => (
            <li key={item.id} className="flex items-center gap-5 my-3">
              <span className="bg-(--secondary-color)/20 p-3 rounded-2xl">
                <span className=" p-2 inline-block rounded-full bg-(--secondary-color) text-(--primary-color)">{item.icon}</span>
              </span>
              <div>
                <h4 className="font-bold text-md lg:text-xl">{item.heading}</h4>
                <p className="text-gray-400 lg:text-md">{item.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LeadingBrandsPart;
