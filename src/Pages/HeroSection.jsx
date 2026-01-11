import { motion } from "motion/react";
import Counter from "../Components/Counter";
import { primaryBtn, transparentBtn } from "../Style/ComponentsStyle";
import hero from "../assets/hero.webp";

const HeroSection = () => {
  const counterDetails = [
    {
      id: 1,
      number: 50,
      text: "Happy Clients",
      symb: "+",
    },
    {
      id: 2,
      number: 99,
      text: "Success Rate",
      symb: "%",
    },
    {
      id: 3,
      number: 3,
      text: "Years of Experience",
      symb: "+",
    },
  ]
  return (
    <section
      id="home"
      className="pt-30 pb-20 lg:pt-0 bg-(--primary-color)/98 px-3 lg:px-0"
    >
      <div className="container lg:pt-20 mx-auto flex flex-col lg:flex-row lg:gap-10 gap-y-10 lg:h-screen overflow-hidden lg:items-center">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 40, damping: 6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="w-full lg:w-1/2"
        >
          <h1 className="text-transparent bg-clip-text bg-linear-to-r from-(--secondary-color) to-blue-400  font-medium text-2xl lg:text-5xl md:text-3xl font-serif ">
            Elevating Brands with Modern Digital Solutions
          </h1>
          <p className="text-gray-400 my-5 lg:my-10  font-medium md:text-xl">
            We combine cutting-edge technology with creative design to help your
            business scale in the digital era. From React apps to SEO-driven
            marketing
          </p>
          <div className="flex gap-5 items-center my-5">
            <button aria-label="Get Started Button" className={primaryBtn}>
              Get Started
            </button>
            <button aria-label="Our Work Button" className={transparentBtn}>
              Our Work
            </button>
          </div>
          <div className="flex justify-between lg:gap-7">
            {counterDetails.map((item) => (
              <Counter key={item.id} end={item.number} title={item.text} symb={item.symb} />
              
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <img
            src={hero}
            alt="Artificial Intelligence Cube Innovation"
            className="rounded-2xl"
            loading="eager"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
