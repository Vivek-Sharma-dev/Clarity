import { sectionBaseStyle } from "../Style/ComponentsStyle";
import ProjectPart from "../Components/PortfolioComponents/ProjectPart";
import WhyChooseUsPart from "../Components/PortfolioComponents/WhyChooseUsPart";
import LeadingBrandsPart from "../Components/PortfolioComponents/LeadingBrandsPart";

const PortfolioSection = () => {
  return (
    <section id="portfolio" className={sectionBaseStyle}>
      <ProjectPart />
      <WhyChooseUsPart />
      <LeadingBrandsPart />
    </section>
  );
};

export default PortfolioSection;
