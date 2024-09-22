import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "HOME" },
    { id: 3, link: "EVENTS" },
    { id: 4, link: "MEMBERS" },
    { id: 5, link: "CONTACT" },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-gradient-to-r from-blue-500 to-blue-800 fixed">
      <div>
        <img className="object-fill h-20 w-38" src="/Images/csi_logo.png" alt="logo" />
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="text-lg px-6 cursor-pointer capitalize font-medium text-white hover:scale-105 hover:text-green-300 duration-200"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-300 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-blue-700 to-blue-900 text-white">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
