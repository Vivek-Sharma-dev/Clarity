import React from "react";
import img from "../../assets/leadingBrand.png";
import {
  h2Style,
  primaryBtn,
  transparentBtn,
} from "../../Style/ComponentsStyle";
import { Check } from "lucide-react";
import { motion } from "motion/react";

const LeadingBrandsPart = () => {
  const isMobile = window.innerWidth <= 768;
  const listData = [
    {
      id: 1,
      heading: "Strategic Thinking",
      desc: "We align every technical decision with your long-term business strategy to ensure sustainable growth.",
      icon: <Check size={17} />,
    },
    {
      id: 2,
      heading: "Data-Driven Approach",
      desc: "Leveraging advanced analytics and user behavior insights to build products that people actually love to use.",
      icon: <Check size={17} />,
    },
    {
      id: 3,
      heading: "24/7 Support",
      desc: "Our partnership doesn't end at deployment. We provide ongoing maintenance and priority support to keep you ahead.",
      icon: <Check size={17} />,
    },
  ];
  return (
    <div className="flex flex-col lg:flex-row gap-10 gap-y-6 mt-5 container mx-auto">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 40, damping: 6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="lg:w-1/2"
      >
        <img src={img} alt="Leading brand" className="w-full" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ amount: isMobile ? 0.1 : 0.3, once: true }}
        className="lg:w-1/2"
      >
        <h2 className={h2Style}>Empowering Brands with Future-Ready Solutions</h2>
        <p className="text-gray-400 text-lg">
         We don't just write code; we architect success. Our methodology is built on transparency, technical precision, and a deep understanding of your business goals.
        </p>
        <ul>
          {listData.map((item) => (
            <li key={item.id} className="flex items-center gap-5 my-3">
              <span className="bg-(--secondary-color)/20 p-3 rounded-2xl">
                <span className=" p-2 inline-block rounded-full bg-(--secondary-color) text-(--primary-color)">
                  {item.icon}
                </span>
              </span>
              <div>
                <h4 className="font-bold text-md lg:text-xl">{item.heading}</h4>
                <p className="text-gray-400 lg:text-md">{item.desc}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-5 mt-10">
          <button
            className={`${primaryBtn} shadow-none! w-full lg:w-auto py-3`}
          >
            Start Your Project
          </button>
          <button className={`${transparentBtn} w-full lg:w-auto mb-0! py-3`}>
            View Portfolio
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default LeadingBrandsPart;
