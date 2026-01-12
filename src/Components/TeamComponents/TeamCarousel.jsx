import TeamCarouselCard from "./TeamCarouselCard";
import { TfiEmail } from "react-icons/tfi";
import { BsLinkedin, BsRocketTakeoff } from "react-icons/bs";
import { Instagram, Twitter } from "lucide-react";
import Image1 from "../../assets/TeamSection/carousel/carousel1.webp";
import Image2 from "../../assets/TeamSection/carousel/carousel2.webp";
import Image3 from "../../assets/TeamSection/carousel/carousel3.webp";
import Image4 from "../../assets/TeamSection/carousel/carousel4.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import {
  primaryBtn,
  serviceCardStyle,
  transparentBtn,
} from "../../Style/ComponentsStyle";
import { motion } from "motion/react";

const TeamCarousel = () => {
const teamMembers = [
  {
    id: 1,
    name: "Jennifer Walsh",
    role: "Chief Executive Officer",
    desc: "Leading Clarity with over 12 years of experience in digital transformation and strategic brand growth.",
    links: [
      { icon: <TfiEmail />, link: "mailto:jennifer@clarity.com" },
      { icon: <BsLinkedin />, link: "#" },
    ],
    image: Image1,
  },
  {
    id: 2,
    name: "Robert Martinez",
    role: "Chief Technology Officer",
    desc: "A visionary developer specializing in scalable cloud architectures and modern full-stack ecosystems.",
    links: [
      { icon: <TfiEmail />, link: "mailto:robert@clarity.com" },
      { icon: <Twitter fill="currentColor" />, link: "#" },
    ],
    image: Image2,
  },
  {
    id: 3,
    name: "Lisa Thompson",
    role: "Head of Operations",
    desc: "Optimizing workflows and ensuring seamless project delivery through agile methodologies and lean management.",
    links: [
      { icon: <TfiEmail />, link: "mailto:lisa@clarity.com" },
      { icon: <Twitter fill="currentColor" />, link: "#" },
    ],
    image: Image3,
  },
  {
    id: 4,
    name: "Alex Garcia",
    role: "VP of Marketing",
    desc: "Expert in data-driven marketing strategies and building high-impact digital presence for global brands.",
    links: [
      { icon: <TfiEmail />, link: "mailto:alex@clarity.com" },
      { icon: <Instagram />, link: "#" },
    ],
    image: Image4,
  },
];

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 50, damping: 5 }}
      viewport={{ once: true, amount: 0.2 }}
      className="text-center"
    >
      <motion.h2
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 50, damping: 5 }}
        viewport={{ once: true, amount: 0.2 }}
        className="text-2xl lg:text-3xl my-5 font-medium"
      >
        Leadership Team
      </motion.h2>
      <Swiper
        speed={1800}
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className=""
      >
        {teamMembers.map((member, idx) => (
          <SwiperSlide key={member.id} className="pb-10">
            <TeamCarouselCard
              links={member.links}
              name={member.name}
              role={member.role}
              desc={member.desc}
              image={member.image}
              index={idx}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <motion.div
        initial={{ y: 100, scale: 0, opacity: 0 }}
        whileInView={{ y: 0, scale: 1, opacity: 1 }}
        viewport={{ amount: 0.3, once: true }}
        transition={{ type: "spring", stiffness: 50, damping: 8 }}
        className="flex justify-center"
      >
        <div
          className={`mt-5 mx-2 lg:mx-0 lg:mt-10 ${serviceCardStyle} bg-blue-800/5! dark:bg-blue-800/5! border-blue-800/40 border-[.1px] translate-y-0! w-full lg:w-2/3`}
        >
          <span className="text-(--secondary-color) p-4 bg-(--secondary-color)/20 rounded-2xl inline-block">
            <BsRocketTakeoff size={30} />
          </span>
          <h3 className="capitalize text-xl lg:text-2xl font-bold">
            Ready to Join Our mission?
          </h3>
          <p className="text-gray-400 lg:text-lg">
            We’re always looking for ambitious designers, developers, and strategists to join our remote-first team. If you're passionate about building the future of the web, we'd love to hear from you.
          </p>
          <div className="flex w-full justify-center flex-col lg:flex-row gap-5 items-center">
            <button className={`${primaryBtn} w-full lg:w-auto rounded-xl!`}>
              View Open Roles
            </button>
            <button
              className={`${transparentBtn} w-full lg:w-auto rounded-xl!`}
            >
              Learn Our Culture
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TeamCarousel;
