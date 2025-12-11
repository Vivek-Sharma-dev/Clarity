import { useEffect, useRef, useState } from "react";
import { Link, scrollSpy } from "react-scroll";
import {
  menuBaseStyle,
  navLinkActive,
  navLinkBase,
  menuLaptopStyle,
  menuMobileStyleClose,
  menuMobileStyleOpen,
} from "../../Style/NavStyles";
import { Menu } from "lucide-react";

const NavLinks = () => {
  const dropdownRef = useRef(null);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [active, setActive] = useState("home");
  const menuRef = useRef(null);
  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "portfolio", label: "Portfolio" },
    { id: "team", label: "Team" },
    {
      id: "dropdown",
      label: "Dropdown",
      dropdown: true,
      children: [
        { id: "dropdown1", label: "Dropdown 1" },
        { id: "dropdown2", label: "Dropdown 2" },
        { id: "dropdown3", label: "Dropdown 3" },
      ],
    },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMenuActive(false);
      }
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  return (
    <nav ref={menuRef} className="order-10 lg:order-0 ml-3 lg:ml-0">
      <button
        onClick={() => setIsMenuActive(!isMenuActive)}
        className="text-white lg:hidden"
      >
        <Menu size={33} />
      </button>
      <ul
        className={`${menuBaseStyle} ${
          isMenuActive ? menuMobileStyleOpen : menuMobileStyleClose
        } ${menuLaptopStyle}`}
      >
        {links.map((link) =>
          !link.dropdown ? (
            <li key={link.id}>
              <Link
                to={link.id}
                smooth={true}
                duration={500}
                spy={true}
                offset={-300}
                onSetActive={() => {
                  setActive(link.id);
                }}
                onClick={() => setIsMenuActive(false)}
              >
                <span
                  className={active === link.id ? navLinkActive : navLinkBase}
                >
                  {link.label}
                </span>
              </Link>
            </li>
          ) : (
            <li ref={dropdownRef} className="relative z-50" key={link.id}>
              <div className="group">
                <span
                  onClick={() => setOpenDropdown(!openDropdown)}
                  className={navLinkBase}
                >
                  {link.label}
                </span>
                <ul
                  className={`absolute z-50 transition-all w-50 text-center lg:top-full lg:-left-1/2 duration-300 bg-(--secondary-color)/70 backdrop-blur-sm px-4 py-3 rounded-lg
    ${
      openDropdown
        ? "opacity-100 pointer-events-auto scale-100 -right-52  -top-20"
        : "opacity-0 pointer-events-none scale-0 -right-52  -top-20"
    }
    lg:opacity-0 lg:pointer-events-none lg:scale-0
    lg:group-hover:opacity-100 lg:group-hover:pointer-events-auto lg:group-hover:scale-100
  `}
                >
                  {link.children.map((child) => (
                    <li key={child.id} className="mt-2">
                      <Link to={child.id} duration={1200} smooth={true}>
                        <span className={navLinkBase}>{child.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          )
        )}
      </ul>
    </nav>
  );
};

export default NavLinks;
