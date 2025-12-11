import React from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import Btn from "./Btn";
import { motion } from "motion/react";

const Header = () => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: .7 }}
      className="fixed top-5 left-0 px-4 lg:px-0  w-full z-50"
    >
      <header className="px-5 rounded-full container mx-auto flex justify-between items-center py-3 bg-(--nav-bg) relative">
        <Logo />
        <NavLinks />
        <Btn />
      </header>
    </motion.div>
  );
};

export default Header;
