import {
  h2Style,
  primaryBtn,
  sectionBaseStyle,
  serviceCardStyle,
} from "../Style/ComponentsStyle";
import ServiceCard from "../Components/ServiceCard";
import {
  PanelsTopLeft,
  Palette,
  CodeXml,
  Smartphone,
  Megaphone,
  Search,
} from "lucide-react";
import { useRef } from "react";
import { motion } from "motion/react";

const ServicesSection = () => {
  const serviceRef = useRef(null);
  const cardData = [
    {
      id: 1,
      title: "Brand identity design",
      desc: "Crafting unique visual identities that resonate with your audience and build lasting brand loyalty",
      tag: "Most Popular",
      icon: <Palette size={40} />,
    },
    {
      id: 2,
      title: "UI/UX Design",
      desc: "Creating user-centric interfaces that are not only beautiful but also intuitive and easy to navigate",
      icon: <PanelsTopLeft size={40} />,
    },
    {
      id: 3,
      title: "Web Development",
      desc: "Building fast, secure, and scalable websites using modern technologies like React and Tailwind CSS",
      icon: <CodeXml size={40} />,
    },
    {
      id: 4,
      title: "Mobile App Design",
      desc: "Designing seamless mobile experiences that work perfectly across all devices and screen sizes.",
      icon: <Smartphone size={40} />,
    },
    {
      id: 5,
      title: "Digital Marketing",
      desc: "Strategic marketing campaigns designed to increase your online visibility and drive meaningful engagement.",
      icon: <Megaphone size={40} />,
    },
    {
      id: 6,
      title: "SEO Optimization",
      desc: "Optimizing your website to rank higher on search engines and attract organic, high-quality traffic.",
      icon: <Search size={40} />,
    },
  ];

  const servicesContainerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const servicesVariant = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 50, damping: 5 },
    },
  };
  return (
    <section ref={serviceRef} id="services" className={sectionBaseStyle}>
      <div className="container mx-auto ">
        <motion.div
          className="text-center"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 50, damping: 5 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className={h2Style}>Expertise We Offer</h2>
          <p className="text-gray-400">
            We deliver high-quality digital solutions tailored to your business
            needs, ensuring a competitive edge in the modern market.
          </p>
        </motion.div>
        <motion.div
          variants={servicesContainerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 container mx-auto gap-y-5 lg:gap-y-10 gap-10 mt-5 lg:my-10"
        >
          {cardData.map((card, idx) => (
            <motion.div key={card.id} variants={servicesVariant}>
              <ServiceCard
                index={idx}
                title={card.title}
                desc={card.desc}
                tag={card.tag}
                icon={card.icon}
              />
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ amount: 0.2, once: true }}
          transition={{ type: "spring", stiffness: 80, damping: 8 }}
        >
          <div className={`mt-5 ${serviceCardStyle}`}>
            <h3 className="capitalize text-xl lg:text-3xl font-bold font-serif">
              Take Your Business To The Next Level
            </h3>
            <p className="text-gray-400 lg:text-lg">
              Ready to start your digital transformation? Let’s build something
              incredible together
            </p>
            <button className={primaryBtn}>Contact Us Today</button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
