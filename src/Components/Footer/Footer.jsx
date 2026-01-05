import { Instagram } from "lucide-react";
import { BsFacebook, BsLinkedin, BsTwitterX } from "react-icons/bs";
import { Link } from "react-scroll";
const Footer = () => {
  const socialLinks = [
    {
      icon: <BsFacebook size={16} />,
      link: "#",
      status: false,
    },
    {
      icon: <BsLinkedin size={16} />,
      link: "https://www.linkedin.com/in/vivek-sharma-webdev/",
      status: true,
    },
    {
      icon: <BsTwitterX size={16} />,
      link: "#",
      status: false,
    },
    {
      icon: <Instagram size={16} />,
      link: "https://www.instagram.com/viveksharma.dev/",
      status: true,
    },
  ];
  return (
    <footer className="bg-black text-gray-500">
      {/* Top Footer */}
      <div className=" container mx-auto py-10 flex flex-col lg:flex-row justify-between gap-">
        {/* Column 1 (Bigger) */}
        <div className="lg:col-span-2 space-y-5">
          {/* Logo */}
          <Link
            smooth={true}
            duration={500}
            spy={true}
            to="home"
            className="text-2xl font-bold text-white pb-5 inline-block"
          >
            Clarity
          </Link>

          {/* Text */}
          <a
            href="https://www.google.com/maps?q=Sonipat,+Haryana,+India"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white max-w-sm"
          >
            Sonipat, Haryana, India
          </a>

          {/* Phone + Email */}
          <div className="flex items-center gap-2">
            <span className="text-white font-medium">Phone: </span>
            <a href="tel:+91 9643936307" className="font-bold">
              +91 9643936307
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-white font-medium">Email: </span>
            <a href="mailto:viveksharmaa252@gmail.com" className="font-bold">
              viveksharmaa252@gmail.com
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 pt-3">
            {socialLinks.map((link, i) => (
              <a
                key={i}
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => !link.status && e.preventDefault()}
                className="p-3 border text-white/80 border-gray-500 rounded-full 
                hover:text-(--secondary-color) hover:border-(--secondary-color) 
                transition"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="text-white font-semibold mb-5">Useful Links</h4>
          <ul className="space-y-3 font-medium">
            <li>
              <Link
                to="home"
                smooth={true}
                duration={500}
                className=" hover:text-(--secondary-color)"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="hover:text-(--secondary-color)"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="services"
                smooth={true}
                duration={500}
                className="hover:text-(--secondary-color)"
              >
                Services
              </Link>
            </li>
            <li>
              <a href="#" className="hover:text-(--secondary-color)">
                Terms of service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-(--secondary-color)">
                Privacy policy
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="text-white font-semibold mb-5">Our Services</h4>
          <ul className="space-y-3 font-medium">
            <li>
              <a href="#" className="hover:text-(--secondary-color)">
                Web Design
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-(--secondary-color)">
                Web Development
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-(--secondary-color)">
                Product Management
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-(--secondary-color)">
                Marketing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-(--secondary-color)">
                Graphic Design
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h4 className="text-white font-semibold mb-5">Hic solutasetp</h4>
          <ul className="space-y-3 font-medium">
            <li>
              <a href="#" className="hover:text-(--secondary-color)">
                Molestiae accusamus iure
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-(--secondary-color)">
                Excepturi dignissimos
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-(--secondary-color)">
                Suscipit distinctio
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-(--secondary-color)">
                Dilecta
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-(--secondary-color)">
                Sit quas consectetur
              </a>
            </li>
          </ul>
        </div>

        {/* Column 5 */}
        <div>
          <h4 className="text-white font-semibold mb-5">Nobis illum</h4>
          <ul className="space-y-3 font-medium">
            <li>
              <a href="#" className="hover:text-(--secondary-color)">
                Ipsam
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-(--secondary-color)">
                Laudantium dolorum
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-(--secondary-color)">
                Dinera
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-(--secondary-color)">
                Trodelas
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-(--secondary-color)">
                Flexo
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-white/10 py-5 text-center">
        <p className="text-white text-sm">
          © Copyright <strong>Clarity</strong> All Rights Reserved
        </p>
        <span className="text-white text-xs">
          Designed by{" "}
          <strong className="text-(--secondary-color)">BootstrapMade</strong>{" "}
          and Recreated by{" "}
          <strong className="text-(--secondary-color)">Vivek Sharma</strong>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
