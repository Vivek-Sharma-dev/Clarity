import React, { useState } from "react";
import { Link } from "react-scroll";
import { navLinkActive, navLinkBase } from "../../Style/NavStyles";

const NavLinks = () => {
  const [active, setActive] = useState("home");
  const [openDropdown, setOpenDropdown] = useState(false);
  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "portfolio", label: "Portfolio" },
    { id: "team", label: "Team" },
    {
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
  return (
    <ul className="flex flex-col lg:flex-row gap-5 items-center text-lg lg:text-2xl ">
      {links.map((link) => (
        <li key={link.id} className="cursor-pointer relative">
          {!link.dropdown ? (
            <Link
              to={link.id}
              spy={true}
              smooth={true}
              offset={-300}
              duration={500}
              onSetActive={() => setActive(link.id)}
            >
              <span
                className={active === link.id ? navLinkActive : navLinkBase}
              >
                {link.label}
              </span>
            </Link>
          ) : (
            <div
              className="cursor-pointer"
              onMouseEnter={() => setOpenDropdown(true)}
              onMouseLeave={() => setOpenDropdown(false)}
            >
              <span
                className={openDropdown === true ? navLinkActive : navLinkBase}
              >
                {link.label}
              </span>
              {openDropdown && (
                <ul id="dropdown" className="absolute top-full -left-5 mt-2 bg-(--secondary-color)/40 backdrop-blur-none rounded-lg p-4 w-50">
                  {link.children.map((child) => (
                    <li key={child.id} className="mt-2">
                      <Link
                        to={child.id}
                        spy={true}
                        smooth={true}
                        offset={-300}
                        duration={500}
                        onSetActive={() => setActive(child.id)}
                      >
                        <span
                          className={
                            active === child.id ? navLinkActive : navLinkBase
                          }
                        >
                          {child.label}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
