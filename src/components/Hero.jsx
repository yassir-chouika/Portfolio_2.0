import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
const Hero = () => {
  const navigateToGithub = () => {
    window.open(
      "https://github.com/yassir-chouika",
      "_blank",
      "noopener,noreferrer"
    );
  };
  const navigateToLinkedIn = () => {
    window.open(
      "https://www.linkedin.com/in/yassir-chouika-b88895295/",
      "_blank",
      "noopener,noreferrer"
    );
  };
  return (
    <section
      id="Hero"
      className=" flex flex-col md:flex-row laptop:flex-row laptop:justify-between  dark:bg-gray-900 mb-28 tablet:mb-28 md:mb-28 laptop:mb-24"
    >
      <div className="text-sm text-center mt-24 px-5 laptop:text-left tablet:text-lg flex flex-col md:my-16 laptop:my-20 laptop:ml-6">
        <p className="dark:text-white intersect:motion-translate-x-in-[94%] intersect:motion-translate-y-in-[-1%] motion-duration-[950ms] motion-delay-[0ms]/translate intersect:motion-ease-spring-smooth">
          HELLO THERE, WELCOME TO MY DIGITAL SPACE
        </p>
        <h1 className="text-5xl laptop:text-7xl lgDesktop:text-8xl font-extrabold font-space dark:text-white intersect:motion-translate-x-in-[93%] intersect:motion-translate-y-in-[0%] motion-duration-[950ms] motion-delay-[70ms]/translate intersect:motion-ease-spring-smooth">
          <span className="text-IceBlue">W</span>HERE CODE MEETS PURPOSE
        </h1>
        <h2 className="text-IceBlue text-lg laptop:text-2xl lgDesktop:text-3xl font-medium intersect:motion-translate-x-in-[94%] intersect:motion-translate-y-in-[-1%] motion-duration-[950ms] motion-delay-[1000ms] motion-delay-[100ms]/translate intersect:motion-ease-spring-smooth">
          Junior web developer crafting clean, user-focused digital experiences
        </h2>
        <div className="flex justify-center mt-5 gap-3 laptop:justify-start">
          <button
            onClick={navigateToGithub}
            type="button"
            className="text-white bg-SteelBlue hover:bg-IceBlue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
            intersect:motion-translate-x-in-[1%] intersect:motion-translate-y-in-[200%] motion-opacity-in-[0%] motion-blur-in-[5px] motion-duration-[1000ms] motion-delay-[140ms] motion-delay-[0ms]/translate motion-delay-[0ms]/opacity motion-delay-[0ms]/blur intersect:motion-ease-spring-smooth"
          >
            Github <FontAwesomeIcon icon={faGithub} />
          </button>
          <button
            onClick={navigateToLinkedIn}
            type="button"
            className="text-white bg-SteelBlue hover:bg-IceBlue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
            intersect:motion-translate-x-in-[1%] intersect:motion-translate-y-in-[200%] motion-opacity-in-[0%] motion-blur-in-[5px] motion-duration-[1000ms] motion-delay-[150ms]/translate motion-delay-[0ms]/opacity motion-delay-[0ms]/blur intersect:motion-ease-spring-smooth"
          >
            LinkedIn <FontAwesomeIcon icon={faLinkedin} />
          </button>
        </div>
      </div>
      <div className="w-full lgDesktop:w-4/5">
        <img
          className="w-full z-0 intersect:motion-translate-x-in-[-110%] intersect:motion-translate-y-in-[0%] motion-opacity-in-[0%] motion-blur-in-[5px] motion-duration-[950ms] intersect:motion-ease-spring-smooth"
          src="/Hero_illustration2.png"
          alt="logo"
        />
      </div>
    </section>
  );
};

export default Hero;
