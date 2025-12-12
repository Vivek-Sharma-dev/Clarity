import { h2Style, primaryBtn, serviceCardStyle } from "../Style/ComponentsStyle";
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
import { motion, useInView } from "motion/react";

const ServicesSection = () => {
  const serviceRef = useRef(null);
  const serviceCardRef = useRef(null);
  const isInView = useInView(serviceRef, { amount: 0, once: true });
  const isCardInView = useInView(serviceCardRef, { amount: 0, once: true });
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
  return (
    <section
      ref={serviceRef}
      id="services"
      className="bg-(--primary-color) py-5 lg:py-10 px-3 lg:px-0 overflow-hidden"
    >
      <div className="container mx-auto ">
        <div className="text-center">
          <motion.h2
            initial={{ y: "100%", opacity: 0 }}
            animate={
              isInView ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 }
            }
            transition={{ duration: 0.5 }}
            className={h2Style}
          >
            Services
          </motion.h2>
          <motion.p
            initial={{ y: "100%", opacity: 0 }}
            animate={
              isInView ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 }
            }
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-gray-400"
          >
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 container mx-auto gap-y-5 lg:gap-y-10 gap-10 mt-5 lg:my-10">
          {cardData.map((card) => (
            <ServiceCard
              key={card.id}
              title={card.title}
              desc={card.desc}
              tag={card.tag}
              icon={card.icon}
              serviceRef={serviceRef}
              isInView={isInView}
            />
          ))}
        </div>
        <motion.div ref={serviceCardRef} animate = {isCardInView ? {y: 0, opacity: 1} : {y: "100%", opacity: 0}} transition={{duration: 0.5}} className={`mt-5 ${serviceCardStyle}`}>
          <h3 className="capitalize text-xl lg:text-3xl font-bold font-serif">ready to transform your digital presence?</h3>
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
