import React from "react";

export const navLinkBase =
  "relative transition-all duration-300 before:content-[''] before:absolute before:left-0 before:-bottom-2 before:w-0 before:h-1 before:bg-[var(--secondary-color)] before:transition-all before:duration-300 hover:text-white hover:before:w-full text-white/60 text-lg lg:text-xl cursor-pointer ";

export const navLinkActive = `relative transition-all duration-300 before:content-[''] before:absolute before:left-0 before:-bottom-2 before:w-0 before:h-1 before:bg-[var(--secondary-color)] before:transition-all before:duration-300 text-white before:w-full font-bold text-lg lg:text-xl `;

export const menuBaseStyle = "flex items-center ";
export const menuMobileStyleOpen = "flex-col gap-4 absolute translate-x-0 top-full left-0 items-end px-5 rounded-b-lg w-1/2 py-4 bg-[var(--primary-color)] transition-all duration-300 max-h-fit";
export const menuMobileStyleClose = "flex-col gap-4 -translate-x-full opacity-0 pointer-events-none absolute  transition-all duration-300 left-0 top-full items-end px-5 rounded-b-lg w-1/2 py-4 bg-[var(--primary-color)] max-h-0";
export const menuLaptopStyle = "lg:flex-row lg:gap-8 lg:static lg:opacity-100 lg:pointer-events-auto lg:translate-x-0 lg:items-center lg:w-auto lg:py-0 lg:bg-transparent ";