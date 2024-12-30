import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faMoon,
  faBars,
  faHouse,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../context/ThemeContext";
import { useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useTheme();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="shadow-sm sticky top-0 left-0 right-0 z-10 bg-OffWhite dark:bg-gray-900">
      <div className=" w-full flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
          <FontAwesomeIcon icon={faCode} className="dark:text-white" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            <p className="text-sm tablet:text-base font-bold ">
              CHOUIKA YASSIR{" "}
              <span className="text-xs text-IceBlue font-medium">
                J.
                <span className="hidden">unior</span> Web developper
              </span>
            </p>
          </span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            onClick={toggleDarkMode}
            type="button"
            className="text-white bg-SteelBlue hover:bg-IceBlue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {isDarkMode ? (
              <FontAwesomeIcon icon={faSun} />
            ) : (
              <FontAwesomeIcon icon={faMoon} />
            )}
          </button>
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 border-2 border-gray-600 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
        <div
          className={`items-center justify-between ${
            isMenuOpen ? "block" : "hidden"
          } w-full md:flex md:w-auto md:order-1`}
          id="navbar-cta"
        >
          <ul className="flex flex-col font-bold p-4 md:p-0 mt-4  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="#Hero"
                className="block py-2 px-3 md:p-0 text-white bg-SteelBlue rounded md:bg-transparent md:text-black md:dark:text-black "
                aria-current="page"
              >
                <FontAwesomeIcon
                  icon={faHouse}
                  className="text-SteelBlue dark:text-white"
                />
              </a>
            </li>
            <li>
              <a
                href="#Projects"
                className="block py-2 px-3 md:p-0 text-SteelBlue text-center rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-IceBlue md:dark:hover:text-IceBlue dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#Contact"
                className="block py-2 px-3 md:p-0 text-SteelBlue text-center rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-IceBlue md:dark:hover:text-IceBlue dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#Skills"
                className="block py-2 px-3 md:p-0 text-SteelBlue text-center rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-IceBlue md:dark:hover:text-IceBlue dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Skills
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
