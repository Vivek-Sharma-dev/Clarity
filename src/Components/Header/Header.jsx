import React from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import Btn from "./Btn";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <header className="bg-(--primary-color) py-1 lg:py-4">
        <div className="px-5 rounded-full container mx-auto flex justify-between items-center py-3 bg-white/15  relative">
          <Logo />
          <NavLinks />
          <Btn />
        </div>
      </header>
    </div>
  );
};

export default Header;
