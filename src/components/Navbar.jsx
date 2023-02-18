import { useState } from "react";

import { logo, close, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, SetToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="blackseacode" className="w-[124] h-[48px]" />
      <ul className="list-none hidden sm:flex justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] text-white 
            ${index == navLinks.length - 1 ? "mr-0" : "mr-10"}`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="navToggle"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => SetToggle((prev) => !prev)}
        />

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-8 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w[140] rounded-lg sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] text-white 
            ${index == navLinks.length - 1 ? "mr-0" : "mb-4"}`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
