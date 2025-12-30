import { h2Style, sectionBaseStyle } from "../Style/ComponentsStyle";
import image1 from "../assets/Testimonial/img1.png";
import image2 from "../assets/Testimonial/img2.png";
import image3 from "../assets/Testimonial/img3.png";
import image4 from "../assets/Testimonial/img4.png";
import image5 from "../assets/Testimonial/img5.png";
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialCard from "../Components/TestimonialCard";
import { Autoplay, Pagination } from "swiper/modules";

const Testimonial = () => {
  const cardData = [
    {
      id: 1,
      image: image1,
      desc: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse.",
      name: "Amanda Rodriguez",
      pos: "UX Researcher",
      alt: "Amanda Rodriguez",
      verification: "Verified",
      rating: 5,
      tag: "UserFirst",
    },
    {
      id: 2,
      image: image2,
      desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit.",
      name: "Jenifer Martinez",
      pos: "Product Designer",
      alt: "Jenifer Martinez",
      verification: "Verified",
      rating: 5,
      tag: "TechCrop",
    },

    {
      id: 3,
      image: image3,
      desc: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
      name: "Alexander Chen",
      pos: "Frontend Engineer",
      alt: "Alexander Chen",
      verification: "Verified",
      rating: 5,
      tag: "InnovativeLab",
    },
    {
      id: 4,
      image: image4,
      desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident.",
      name: "Rachel Taylor",
      pos: "Marketing Lead",
      alt: "Rachel Taylor",
      verification: "Verified",
      rating: 5,
      tag: "GrowthCo",
    },
    {
      id: 5,
      image: image5,
      desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident.",
      name: "Christoper Lee",
      pos: "VP Engineering",
      alt: "Christoper Lee",
      verification: "Verified",
      rating: 5,
      tag: "DevStream",
    },
  ];
  return (
    <section className={sectionBaseStyle}>
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className={h2Style}>Testimonials</h2>
          <p className="text-gray-500">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>
        <div className="flex ">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={true}
            speed={1800}
            spaceBetween={30}
            pagination={{ clickable: true }}
            breakpoints={{
              0: { slidesPerView: 1.2 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="my-10"
          >
            {cardData.map((card) => (
              <SwiperSlide key={card.id} className="pb-16">
                <TestimonialCard {...card} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
