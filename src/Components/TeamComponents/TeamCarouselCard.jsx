import { motion } from "motion/react";

const TeamCarouselCard = ({ name, role, desc, links, image, index }) => {
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 40,
        delay: (i % 3) * 0.2,
      },
    }),
  };
  return (
    <motion.div
      variants={cardVariants}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="mx-4 lg:mx-0 relative z-50 mt-5 rounded-2xl text-center overflow-hidden hover:-translate-y-3 transition-all duration-300 shadow-[0_0px_0px_.2px_rgb(255,255,255)]">
        <div
          style={{ backgroundImage: `url(${image})` }}
          className={` w-full h-50 bg-cover bg-center`}
        ></div>
        <div className="bg-(--nav-bg) py-5 px-5">
          <h4 className="text-xl font-normal mt-2">{name}</h4>
          <h5 className="text-(--secondary-color) font-medium ">{role}</h5>
          <p className="text-gray-300 my-3 line-clamp-2">{desc}</p>
          <div className="flex gap-5 justify-center">
            {links.map((link, idx) => (
              <a
                key={idx}
                href={link.link}
                className="text-(--secondary-color) text-xl p-2 bg-white/5 rounded-md hover:bg-(--secondary-color) hover:text-white transition-all duration-300 hover:-translate-y-1"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TeamCarouselCard;
