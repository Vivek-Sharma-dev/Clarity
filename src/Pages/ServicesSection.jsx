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
      desc: "Donec vel sapien augue integer urna vel turpis cursus porta aliquam ligula eget ultricies.",
      tag: "Most Popular",
      icon: <Palette size={40} />,
    },
    {
      id: 2,
      title: "UI/UX Design",
      desc: "Mauris blandit aliquet elit eget tincidunt nibh pulvinar rutrum tellus pellentesque eu.",
      icon: <PanelsTopLeft size={40} />,
    },
    {
      id: 3,
      title: "Web Development",
      desc: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
      icon: <CodeXml size={40} />,
    },
    {
      id: 4,
      title: "Mobile App Design",
      desc: "Nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non curabitur gravida.",
      icon: <Smartphone size={40} />,
    },
    {
      id: 5,
      title: "Digital Marketing",
      desc: "Sed porttitor lectus nibh donec sollicitudin molestie malesuada proin eget tortor risus.",
      icon: <Megaphone size={40} />,
    },
    {
      id: 6,
      title: "SEO Optimization",
      desc: "Curabitur arcu erat accumsan id imperdiet et porttitor at sem pellentesque habitant morbi.",
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
      transition: { duration: 0.5, type: "spring", stiffness: 50, damping: 5 },
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
          <h2 className={h2Style}>Services</h2>
          <p className="text-gray-400">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </motion.div>
        <motion.div
          variants={servicesContainerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 container mx-auto gap-y-5 lg:gap-y-10 gap-10 mt-5 lg:my-10"
        >
          {cardData.map((card) => (
            <motion.div key={card.id} variants={servicesVariant}>
              <ServiceCard
                title={card.title}
                desc={card.desc}
                tag={card.tag}
                icon={card.icon}
              />
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ amount: 0.3, once: true }}
          transition={{ duration: 0.5 }}
          className={`mt-5 ${serviceCardStyle}`}
        >
          <h3 className="capitalize text-xl lg:text-3xl font-bold font-serif">
            ready to transform your digital presence?
          </h3>
          <p className="text-gray-400 lg:text-lg">
            Lets's discuss your project and create something amazing together
          </p>
          <button className={primaryBtn}>Get Started Today</button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
