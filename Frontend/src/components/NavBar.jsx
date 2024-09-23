import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom"; // RouterLink for internal routes

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "/", label: "HOME" }, // Use route paths for navigation
    { id: 2, link: "/events", label: "EVENTS" },
    { id: 3, link: "/members", label: "MEMBERS" },
    { id: 4, link: "/contact", label: "CONTACT" },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-gradient-to-r from-blue-500 to-blue-800 fixed">
      <div>
        <img className="object-fill h-20 w-38" src="/Images/csi_logo.png" alt="logo" />
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link, label }) => (
          <li
            key={id}
            className="text-lg px-6 cursor-pointer capitalize font-medium text-white hover:scale-105 hover:text-green-300 duration-200"
          >
            <RouterLink to={link}>{label}</RouterLink>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Icon */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-300 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* Mobile Menu */}
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-blue-700 to-blue-900 text-white">
          {links.map(({ id, link, label }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <RouterLink
                onClick={() => setNav(!nav)}
                to={link}
              >
                {label}
              </RouterLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
