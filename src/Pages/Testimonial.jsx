import {useEffect} from "react";
import { motion, useAnimation } from "motion/react";
import { h2Style, sectionBaseStyle } from "../Style/ComponentsStyle";
import image1 from "../assets/Testimonial/img1.png";
import image2 from "../assets/Testimonial/img2.png";
import image3 from "../assets/Testimonial/img3.png";
import image4 from "../assets/Testimonial/img4.png";
import image5 from "../assets/Testimonial/img5.png";
import TestimonialCard from "../Components/TestimonialCard";

const Testimonial = () => {
  const cardData = [
    {
      id: 1,
      image:  image1,
      desc: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse.",
      name: "Amanda Rodriguez",
      pos: "UX Researcher",
      alt: "Amanda Rodriguez",
      verification: "Verified",
      rating: 5, 
      tag: "UserFirst"
    },
    {
      id: 2,
      image:  image2,
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
      image:  image3,
      desc: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",    
      name: "Alexander Chen",
      pos: "Frontend Engineer",
      alt: "Alexander Chen",
      verification: "Verified",
      rating: 5, 
      tag: "InnovativeLab",
    },
    {
      id: 4,
      image:  image4,
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
      image:  image5,
      desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident.",    
      name: "Christoper Lee",
      pos: "VP Engineering",
      alt: "Christoper Lee",
      verification: "Verified",
      rating: 5, 
      tag: "DevStream",
    },
  ]

  const controls = useAnimation();

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {

      controls.start({
        x: `-${index * 350}px`,
        transition: { duration: 0.8, ease: "easeInOut" },
      })
      
      index++;
      
      if(index === cardData.length) index = 0;
    }, 3000);

    return () => clearInterval(interval);
  }, [])
  
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

        <motion.div animate={controls} className="flex gap-5 mt-10 flex-nowrap">
          {cardData.map((card) => (
            <TestimonialCard key = {card.id} {...card} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;
