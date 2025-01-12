import React, { useState } from "react";

const Putangina = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 text-white w-full shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">MyLogo</div>

        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <div className="space-y-1">
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
            </div>
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`lg:flex lg:items-center lg:space-x-6 ${
            isOpen
              ? "block"
              : "hidden"
          } absolute lg:static bg-gray-900 w-full lg:w-auto left-0 top-full lg:top-auto lg:flex-row p-4 lg:p-0`}
        >
          <li>
            <a
              href="#"
              className="block px-3 py-2 hover:text-blue-400 transition duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-3 py-2 hover:text-blue-400 transition duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-3 py-2 hover:text-blue-400 transition duration-300"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-3 py-2 hover:text-blue-400 transition duration-300"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Putangina;
