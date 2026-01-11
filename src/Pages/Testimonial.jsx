import { h2Style, sectionBaseStyle } from "../Style/ComponentsStyle";
import image1 from "../assets/Testimonial/img1.png";
import image2 from "../assets/Testimonial/img2.png";
import image3 from "../assets/Testimonial/img3.png";
import image4 from "../assets/Testimonial/img4.png";
import image5 from "../assets/Testimonial/img5.png";
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialCard from "../Components/TestimonialCard";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "motion/react";

const Testimonial = () => {
  const cardData = [
    {
      id: 1,
      image: image1,
      desc: "Clarity turned our vision into reality. Their UX research helped us identify key pain points we hadn't even considered, resulting in a much more intuitive product.",
      name: "Amanda Rodriguez",
      pos: "UX Researcher",
      alt: "Amanda Rodriguez - UX Expert",
      verification: "Verified",
      rating: 5,
      tag: "UserFirst",
    },
    {
      id: 2,
      image: image2,
      desc: "The attention to detail in their design work is incredible. Our new platform not only looks stunning but the user engagement has increased by over 30%.",
      name: "Jenifer Martinez",
      pos: "Product Designer",
      alt: "Jenifer Martinez - Design Lead",
      verification: "Verified",
      rating: 5,
      tag: "TechCrop",
    },
    {
      id: 3,
      image: image3,
      desc: "Working with the engineering team at Clarity was a breeze. They delivered a clean, scalable React architecture that is incredibly easy for our internal team to maintain.",
      name: "Alexander Chen",
      pos: "Frontend Engineer",
      alt: "Alexander Chen - Software Engineer",
      verification: "Verified",
      rating: 5,
      tag: "InnovativeLab",
    },
    {
      id: 4,
      image: image4,
      desc: "The marketing insights and data-driven strategy they provided were instrumental in our successful launch. Highly professional and always on schedule.",
      name: "Rachel Taylor",
      pos: "Marketing Lead",
      alt: "Rachel Taylor - Growth Strategist",
      verification: "Verified",
      rating: 5,
      tag: "GrowthCo",
    },
    {
      id: 5,
      image: image5,
      desc: "From complex API integrations to smooth UI animations, Clarity handles everything with technical precision. They are our go-to partner for all high-end development.",
      name: "Christoper Lee",
      pos: "VP Engineering",
      alt: "Christoper Lee - Engineering Leader",
      verification: "Verified",
      rating: 5,
      tag: "DevStream",
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
          <h2 className={h2Style}>What Our Clients Say</h2>
          <p className="text-gray-400">
            Don't just take our word for it. Hear from the leaders and teams
            we've helped to scale their digital presence.
          </p>
        </motion.div>
        <div className="flex ">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={true}
            speed={1800}
            spaceBetween={30}
            pagination={{ clickable: true }}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="my-10"
          >
            {cardData.map((card, idx) => (
              <SwiperSlide className="pb-16">
                <TestimonialCard {...card} index={idx} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
