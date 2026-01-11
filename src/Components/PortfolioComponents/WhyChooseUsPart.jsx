import { Award, ChartLine, Palette } from "lucide-react";
import ChooseCard from "../ChooseCard";
import { h2Style, sectionBaseStyle } from "../../Style/ComponentsStyle";
import { motion } from "motion/react";

const WhyChooseUsPart = () => {
  const cardData = [
    {
      id: 1,
      title: "Creative Excellence",
      desc: "Merging artistic vision with functional design to create interfaces that are beautiful, intuitive, and memorable.",
      number: "95",
      bottomText: "% Client Satisfaction",
      icon: <Palette size={40} />,
    },
    {
      id: 2,
      title: "Proven  Result",
      desc: "Our data-driven approach ensures that every project achieves its business goals, from speed to conversion.",
      number: "200",
      bottomText: "% ROI Increase",
      icon: <ChartLine size={40} />,
    },
    {
      id: 3,
      title: "Export Team",
      desc: "A dedicated team of developers and designers committed to using the latest tech stacks for cutting-edge solutions.",
      number: "50",
      bottomText: "+ Project Delivered",
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
          <h2 className={h2Style}>Why Choose Us</h2>
          <p className="text-gray-400 text-lg">
            We don't just build websites; we create digital experiences that
            drive growth and deliver measurable impact.
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          className="flex flex-col lg:flex-row gap-5 mt-5 lg:mt-10"
        >
          {cardData.map((card, idx) => (
            <motion.div key={card.id}>
              <ChooseCard
                index={idx}
                key={card.id}
                title={card.title}
                desc={card.desc}
                number={card.number}
                bottomText={card.bottomText}
                icon={card.icon}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUsPart;
