import React from "react";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss,
  faFigma,
  faHtml5,
  faJs,
  faPhp,
  faReact,
  faSymfony,
  faWordpress,
} from "@fortawesome/free-brands-svg-icons";
import {
  fa7,
  faFileImage,
  faWandSparkles,
} from "@fortawesome/free-solid-svg-icons";

export const SkillBox = ({ SkillTitle, SkillIcon }) => {
  return (
    <div>
      <div className="text-white bg-SteelBlue hover:bg-IceBlue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 intersect-once
      intersect:motion-preset-pop motion-duration-[850ms] motion-delay-500 -motion-translate-y-in-150 ">
        {SkillTitle} {SkillIcon}
      </div>
    </div>
  );
};

const skills = [
  {
    id: uuidv4(),
    SkillTitle: "JavaScript",
    SkillIcon: <FontAwesomeIcon icon={faJs} />,
  },
  {
    id: uuidv4(),
    SkillTitle: "React",
    SkillIcon: <FontAwesomeIcon icon={faReact} />,
  },
  {
    id: uuidv4(),
    SkillTitle: "Php",
    SkillIcon: <FontAwesomeIcon icon={faPhp} />,
  },
  {
    id: uuidv4(),
    SkillTitle: "Tailwind",
    SkillIcon: <FontAwesomeIcon icon={faWandSparkles} />,
  },
  {
    id: uuidv4(),
    SkillTitle: "Figma",
    SkillIcon: <FontAwesomeIcon icon={faFigma} />,
  },
  {
    id: uuidv4(),
    SkillTitle: "Wordpress",
    SkillIcon: <FontAwesomeIcon icon={faWordpress} />,
  },
  {
    id: uuidv4(),
    SkillTitle: "Symphony",
    SkillIcon: <FontAwesomeIcon icon={faSymfony} />,
  },
  {
    id: uuidv4(),
    SkillTitle: "Photoshop",
    SkillIcon: <FontAwesomeIcon icon={faFileImage} />,
  },
  {
    id: uuidv4(),
    SkillTitle: "Html",
    SkillIcon: <FontAwesomeIcon icon={faHtml5} />,
  },
  {
    id: uuidv4(),
    SkillTitle: "Css",
    SkillIcon: <FontAwesomeIcon icon={faCss} />,
  },
  {
    id: uuidv4(),
    SkillTitle: "Framework7",
    SkillIcon: <FontAwesomeIcon icon={fa7} />,
  },
  {
    id: uuidv4(),
    SkillTitle: "Adobe XD",
  },
  {
    id: uuidv4(),
    SkillTitle: "GSAP",
  },
];

const SkillComponent = () => {
  return (
    <section id="skill-section" className="laptop:my-36">
      <h2 className="text-2xl tablet:text-3xl laptop:text-4xl font-bold text-center mb-6 dark:text-white intersect-once intersect:motion-scale-in-0 duration-700">
      What I Use
      </h2>
      <div className="flex flex-wrap justify-center gap-4 p-4 tablet:flex tablet:flex-wrap laptop:flex laptop:flex-wrap laptop:justify-center laptop:gap-7 laptop:py-14 px-24 ">
        {skills.map((skill) => (
          <SkillBox
            key={skill.id}
            SkillTitle={skill.SkillTitle}
            SkillIcon={skill.SkillIcon}
          />
        ))}
      </div>
    </section>
  );
};

export default SkillComponent;
