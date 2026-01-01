import { h2Style, sectionBaseStyle } from "../Style/ComponentsStyle";
import team1 from "../assets/TeamSection/team1.png";
import team2 from "../assets/TeamSection/team2.png";
import team3 from "../assets/TeamSection/team3.png";
import team4 from "../assets/TeamSection/team4.png";
import { Dribbble, Instagram, Twitter } from "lucide-react";
import { BsBehance, BsGithub, BsLinkedin } from "react-icons/bs";
import TeamCard from "../Components/TeamCard";

const Team = () => {
  const teamMembers = [
    {
      teamId: 1,
      img: team1,
      name: "Sarah Chen",
      role: "Creative Director",
      offset: "left-30",
      links: [{ icon: <BsLinkedin size={20} />, link: "#" }, { icon: <Twitter fill="currentColor" size={20} />, link: "#" }],
    },
    {
      teamId: 2,
      img: team2,
      name: "Alex Kim",
      role: "Designer",
      offset: "top-10",
      links: [{ icon: <BsGithub size={20} />, link: "#" }, { icon: <BsLinkedin  size={20} />, link: "#" }],
    },
    {
      teamId: 3,
      img: team3,
      name: "John Doe",
      role: "Artist",
      offset: "left-30 top-10",
      links: [{ icon: <Instagram size={20} />, link: "#" }, { icon: <Dribbble size={20} />, link: "#" }],
    },
    {
      teamId: 4,
      img: team4,
      name: "Michael Joe",
      role: "Lead Dev",
      offset: "top-20",
      links: [{ icon: <BsBehance size={20} />, link: "#" }, { icon: <BsLinkedin size={20} />, link: "#" }],
    },
  ];

  return (
    <section id="team" className={sectionBaseStyle}>
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className={h2Style}>Team</h2>
          <p className="text-gray-500 font-medium">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>
        <div className="flex gap-5 mt-5 lg:mt-10">
          <div className="flex flex-col gap-5 w-1/2">
            <h3 className="text-xl lg:text-3xl">Meet Our Exceptional Team</h3>
            <p className="text-gray-500 font-medium">
              Temporibus autem quibusdam et aut officiis debitis aut rerum
              necessitatibus saepe eveniet ut et voluptates repudiandae sint et
              molestiae non recusandae.
            </p>
            <div className="flex gap-10">
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
          </div>
          <div className="w-1/2">
            <div className="grid grid-cols-2 gap-5">
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
    </section>
  );
};

export default Team;
