import { useRef } from "react";
import { h2Style, primaryBtn } from "../Style/ComponentsStyle";
import { Check } from "lucide-react";
import about from "../assets/AboutSection/About1.webp";
import about2 from "../assets/AboutSection/About2.png";
import { motion, useInView } from "motion/react";
const AboutSection = () => {
  const aboutRef = useRef(null);
  const isInView = useInView(aboutRef, { amount: 0.2 , once: true});
  const textList = [
    {
      id: 1,
      text: "Tailored solutions built with modern frameworks.",
      icon: <Check size={16} />,
      heading: "Custom Web Development:",
    },
    {
      id: 2,
      text: "Creating intuitive interfaces that users love.",
      icon: <Check size={16} />,
      heading: "User-Centric Design:",
    },
    {
      id: 3,
      text: "Future-proof systems designed for growth and scalability.",
      icon: <Check size={16} />,
      heading: "Scalable Architecture:",
    },
  ];
  return (
    <motion.section
      ref={aboutRef}
      id="about"
      className="bg-(--primary-color) py-20 overflow-hidden px-3 lg:px-0"
    >
      <div className="flex gap-5 flex-col lg:flex-row container mx-auto gap-y-12 lg:gap-y-0">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 40, damping: 6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="lg:w-2/4 order-1 lg:order-0"
        >
          <h4 className="text-(--secondary-color) tracking-widest uppercase font-bold text-sm font-serif">
            discover our story
          </h4>
          <h2 className={h2Style}>
            Innovative Solution for a Digital-First World
          </h2>
          <p className="text-gray-400 font-medium text-justify">
            At Clarity, we bridge the gap between complex ideas and digital
            reality. We are a team of passionate developers and designers
            dedicated to creating high-performance web applications that provide
            seamless user experiences. Our mission is to empower businesses with
            the latest technology stacks like React, Tailwind, and Node.js.
          </p>
          <ul className="my-5 flex flex-col gap-4 justify-center">
            {textList.map((text) => (
              <li key={text.id} className="flex gap-3 items-center">
                <span className="p-1  bg-(--secondary-color) text-(--primary-color) text-xs rounded-full">
                  {text.icon}
                </span>
                <span>
                  <strong>{text.heading} </strong>
                  {text.text}
                </span>
              </li>
            ))}
          </ul>

          <motion.a
          href="#"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
            viewport={{ once: true, amount: 0.2 }}
            className={`${primaryBtn} mt-5 lg:mt-10 inline-block`}
          >
            Discover More
          </motion.a>
        </motion.div>
        <motion.div
          animate={isInView ? { x: 0, opacity: 1 } : { x: "100%", opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="relative lg:w-4/6 ps-8 lg:ps-0"
        >
          <motion.img
            animate={
              isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }
            }
            transition={{ duration: 0.5, delay: 0.7 }}
            src={about}
            alt="Planing on a task with team members"
            className="border-4 rounded-xl border-gray-500 w-full ml-5"
          />
          <motion.img
            animate={
              isInView ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 }
            }
            transition={{ duration: 0.5, delay: 1 }}
            src={about2}
            alt="Celebration with team members"
            className="absolute -bottom-8 lg:-bottom-5 -left-2 lg:-left-5 border-4 rounded-xl border-gray-500/70 w-40 lg:w-80"
          />
          <motion.div
            animate={
              isInView ? { x: 1, opacity: 1 } : { x: "100%", opacity: 0 }
            }
            transition={{ duration: 0.5, delay: 1.2 }}
            className="flex flex-col lg:flex-row gap-5 absolute -top-25 lg:-top-10 py-5 right-0 bg-(--primary-color)/90 p-3 rounded-xl"
          >
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
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
