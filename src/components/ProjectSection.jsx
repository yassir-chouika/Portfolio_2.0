import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { } from "@fortawesome/free-brands-svg-icons";
import CardComponent from "./CardComponent";

const projects = [
  {
    id: 1,
    CardImage: "../public/Checklist.png", 
    CardTitle: "Pre Flight Checklist",
    CardDescription:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus ipsam, eos, dolore fuga autem ",
  },
  {
    id: 2,
    CardImage: "../public/PetPalsConnect.png",
    CardTitle: "Personal Portfolio",
    CardDescription:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus ipsam, eos, dolore fuga autem.",
  },
  {
    id: 3,
    CardImage: "../public/Usa_B_W_T.png",
    CardTitle: "Personal Portfolio",
    CardDescription:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus ipsam, eos, dolore fuga autem.",
  },
  {
    id: 4,
    CardImage: "../public/Rock_Sur_Seine.png",
    CardTitle: "Personal Portfolio",
    CardDescription:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus ipsam, eos, dolore fuga autem.",
  },
  {
    id: 5,
    CardImage: "../public/TemplateWebsite.png",
    CardTitle: "Personal Portfolio",
    CardDescription:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus ipsam, eos, dolore fuga autem.",
  },
  {
    id: 6,
    CardImage: "../public/PortfolioDraft.png",
    CardTitle: "Personal Portfolio",
    CardDescription:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus ipsam, eos, dolore fuga autem.",
  },
  {
    id: 7,
    CardImage: "../public/PawFect_Match.png",
    CardTitle: "Personal Portfolio",
    CardDescription:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus ipsam, eos, dolore fuga autem.",
  },
  {
    id: 8,
    CardImage: "../public/Gloves.png",
    CardTitle: "Personal Portfolio",
    CardDescription:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus ipsam, eos, dolore fuga autem.",
  },
  
];

const ProjectSection = () => {
  return (
    <div className="projects-section">
      <h2 className="text-2xl font-bold text-center mb-6 dark:text-white">My Projects</h2>
      <div className="tablet:flex tablet:flex-wrap laptop:flex laptop:flex-wrap ">
        {projects.map((project) => (
          <CardComponent
            key={project.id}
            CardImage={project.CardImage}
            CardTitle={project.CardTitle}
            CardDescription={project.CardDescription}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
