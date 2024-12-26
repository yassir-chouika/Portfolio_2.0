import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
const Hero = () => {
  const navigateToGithub = () => {
    window.open('https://github.com/yassir-chouika', "_blank", "noopener,noreferrer");
  };
  const navigateToLinkedIn = () => {
    window.open('https://www.linkedin.com/in/yassir-chouika-b88895295/', "_blank", "noopener,noreferrer");
  };
  return (
    <section id="Hero" className=" flex flex-col md:flex-row laptop:flex-row laptop:justify-between  dark:bg-gray-900 mb-28 tablet:mb-28 md:mb-28 laptop:mb-24">
      <div className="text-sm text-center mt-24 px-5 laptop:text-left tablet:text-lg flex flex-col md:my-16 laptop:my-20 laptop:ml-6">
        <p className="dark:text-white">
          HELLO THERE, WELCOME TO MY DIGITAL SPACE
        </p>
        <h1 className="text-5xl laptop:text-7xl font-extrabold font-space dark:text-white">
          <span className="text-IceBlue">W</span>HERE CODE MEETS PURPOSE
        </h1>
        <h2 className="text-IceBlue text-lg laptop:text-2xl font-medium">
          Junior web developer crafting clean, user-focused digital experiences
        </h2>
        <div className="flex justify-center mt-5 gap-3 laptop:justify-start">
          <button
          onClick={navigateToGithub}
            type="button"
            className="text-white bg-SteelBlue hover:bg-IceBlue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Github <FontAwesomeIcon icon={faGithub} />
          </button>
          <button
            onClick={navigateToLinkedIn}
            type="button"
            className="text-white bg-SteelBlue hover:bg-IceBlue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            LinkedIn <FontAwesomeIcon icon={faLinkedin} />
          </button>
        </div>
      </div>
      <div className="w-full">
        <img
          className="w-full"
          src="/Hero_illustration2.png"
          alt="logo"
        />
      </div>
    </section>
  );
};

export default Hero;
