import { Award, ChartLine, Palette } from "lucide-react";
import ChooseCard from "../ChooseCard";
import { h2Style, sectionBaseStyle } from "../../Style/ComponentsStyle";
import { motion } from "motion/react";

const WhyChooseUsPart = () => {
  const cardData = [
    {
      id: 1,
      title: "Creative Excellence",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.",
      number: "95",
      bottomText: "% Client Satisfaction",
      icon: <Palette size={40} />,
    },
    {
      id: 2,
      title: "Proven  Result",
      desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit.",
      number: "200",
      bottomText: "% ROI Increase",
      icon: <ChartLine size={40} />,
    },
    {
      id: 3,
      title: "Export Team",
      desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde omnis.",
      number: "50",
      bottomText: "+ Awards won",
      icon: <Award size={40} fill="currentColor" />,
    },
  ];
  return (
    <section className={sectionBaseStyle}>
      <div className="container mx-auto">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 50, damping: 5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center"
        >
          <h2 className={h2Style}>Why Us</h2>
          <p className="text-gray-500 text-lg">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </motion.div>
        <div className="flex flex-col lg:flex-row gap-5 mt-5 lg:mt-10">
          {cardData.map((card) => (
            <ChooseCard
              key={card.id}
              title={card.title}
              desc={card.desc}
              number={card.number}
              bottomText={card.bottomText}
              icon={card.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsPart;
