import { useRef, useState } from "react";
import ProjectCard from "../Components/PortfolioProjectCard";
import {
  h2Style,
  projectBtnActive,
  projectBtnBase,
  sectionBaseStyle,
} from "../Style/ComponentsStyle";

const PortfolioSection = () => {
  const portfolioRef = useRef(null);
  const [isActive, setIsActive] = useState("All Projects");
  const btnTitles = [
    "All Projects",
    "Web Design",
    "Mobile Apps",
    "Branding",
    "UI/UX",
  ];
  return (
    <section ref={portfolioRef} className={sectionBaseStyle}>
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className={h2Style}>Portfolio</h2>
          <p className="text-gray-400 lg:text-lg">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>
        <div className="my-5 lg:my-10">
          <div className="flex gap-5 lg:gap-10 justify-center flex-wrap">
            {btnTitles.map((title, index) => (
              <button
                key={index}
                className={
                  isActive === title ? projectBtnActive : projectBtnBase
                }
                onClick={() => setIsActive(title)}
              >
                {title}
              </button>
            ))}
          </div>
        </div>
        <div>
          <ProjectCard />
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
