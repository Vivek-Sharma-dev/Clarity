import team1 from "../../assets/TeamSection/team1.png";
import team2 from "../../assets/TeamSection/team2.png";
import team3 from "../../assets/TeamSection/team3.png";
import team4 from "../../assets/TeamSection/team4.png";
import { Dribbble, Instagram, Twitter } from "lucide-react";
import { BsBehance, BsGithub, BsLinkedin } from "react-icons/bs";
import TeamCard from "./TeamCard";
import { h2Style } from "../../Style/ComponentsStyle";
import { motion } from "motion/react";

const Team = () => {
  const teamMembers = [
    {
      teamId: 1,
      img: team1,
      name: "Sarah Chen",
      role: "Creative Director",
      offset: "lg:left-30",
      links: [
        { icon: <BsLinkedin size={20} />, link: "#" },
        { icon: <Twitter fill="currentColor" size={20} />, link: "#" },
      ],
    },
    {
      teamId: 2,
      img: team2,
      name: "Alex Kim",
      role: "Designer",
      offset: "lg:top-10",
      links: [
        { icon: <BsGithub size={20} />, link: "#" },
        { icon: <BsLinkedin size={20} />, link: "#" },
      ],
    },
    {
      teamId: 3,
      img: team3,
      name: "John Doe",
      role: "Artist",
      offset: "lg:left-30 lg:top-10",
      links: [
        { icon: <Instagram size={20} />, link: "#" },
        { icon: <Dribbble size={20} />, link: "#" },
      ],
    },
    {
      teamId: 4,
      img: team4,
      name: "Michael Joe",
      role: "Lead Dev",
      offset: "lg:top-20",
      links: [
        { icon: <BsBehance size={20} />, link: "#" },
        { icon: <BsLinkedin size={20} />, link: "#" },
      ],
    },
  ];

  return (
    <div className="pb-20">
      <div className="container mx-auto">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 50, damping: 5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center"
        >
          <h2 className={h2Style}>Team</h2>
          <p className="text-gray-500 font-medium">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </motion.div>
        <div className="flex flex-col lg:flex-row gap-5 mt-5 lg:mt-10">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 40, damping: 6 }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col gap-5 lg:w-1/2"
          >
            <h3 className="text-2xl lg:text-3xl font-bold">
              Meet Our Exceptional Team
            </h3>
            <p className="text-gray-500 font-medium">
              Temporibus autem quibusdam et aut officiis debitis aut rerum
              necessitatibus saepe eveniet ut et voluptates repudiandae sint et
              molestiae non recusandae.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-10">
              <div className="flex flex-col text-center">
                <span className="lg:text-3xl font-bold text-(--secondary-color)">
                  50+
                </span>
                <span className="uppercase font-medium text-gray-500">
                  Team members
                </span>
              </div>
              <div className="flex flex-col text-center">
                <span className="lg:text-3xl font-bold text-(--secondary-color)">
                  8
                </span>
                <span className="uppercase font-medium text-gray-500">
                  Departments
                </span>
              </div>
              <div className="flex flex-col text-center">
                <span className="lg:text-3xl font-bold text-(--secondary-color)">
                  15+
                </span>
                <span className="uppercase font-medium text-gray-500">
                  countries
                </span>
              </div>
            </div>
          </motion.div>
          <div className="lg:w-1/2 mt-5 lg:mt-0">
            <div className="grid justify-center md:grid-cols-2 gap-5">
              {teamMembers.map((member) => (
                <TeamCard
                  key={member.teamId}
                  image={member.img}
                  name={member.name}
                  role={member.role}
                  offset={member.offset}
                  links={member.links}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
