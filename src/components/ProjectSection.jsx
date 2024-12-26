import React from "react";
import { v4 as uuidv4 } from "uuid";
import CardComponent from "./CardComponent";

const projects = [
  {
    id: uuidv4(),
    CardImage: "/Checklist.png",
    CardTitle: "Pre Flight Checklist",
    CardDescription:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus ipsam, eos, dolore fuga autem ",
    Url: "https://github.com/yassir-chouika/checklist-project",
  },
  {
    id: uuidv4(),
    CardImage: "/PetPalsConnect.png",
    CardTitle: "Personal Portfolio",
    CardDescription:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus ipsam, eos, dolore fuga autem.",
    Url: "https://github.com/yassir-chouika/PetPal-Connect",
  },
  {
    id: uuidv4(),
    CardImage: "/Usa_B_W_T.png",
    CardTitle: "Personal Portfolio",
    CardDescription:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus ipsam, eos, dolore fuga autem.",
    Url: "https://github.com/yassir-chouika/Final-Project-JO",
  },
  {
    id: uuidv4(),
    CardImage: "/Rock_Sur_Seine.png",
    CardTitle: "Personal Portfolio",
    CardDescription:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus ipsam, eos, dolore fuga autem.",
    Url: "https://github.com/yassir-chouika/Rock-En-Seine",
  },
  {
    id: uuidv4(),
    CardImage: "/TemplateWebsite.png",
    CardTitle: "Personal Portfolio",
    CardDescription:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus ipsam, eos, dolore fuga autem.",
    Url: "https://github.com/yassir-chouika/Landing_Page_Template",
  },
  {
    id: uuidv4(),
    CardImage: "/PortfolioDraft.png",
    CardTitle: "Personal Portfolio",
    CardDescription:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus ipsam, eos, dolore fuga autem.",
    Url: "https://github.com/yassir-chouika/SitePortfolioDraft",
  },
  {
    id: uuidv4(),
    CardImage: "/PawFect_Match.png",
    CardTitle: "Personal Portfolio",
    CardDescription:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus ipsam, eos, dolore fuga autem.",
    Url: "https://github.com/yassir-chouika/PawFect_Match",
  },
  {
    id: uuidv4(),
    CardImage: "/Gloves.png",
    CardTitle: "Personal Portfolio",
    CardDescription:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus ipsam, eos, dolore fuga autem.",
    Url: "",
  },
];

const ProjectSection = () => {
  return (
    <section id="Projects" className="projects-section">
      <h2 className="text-2xl tablet:text-3xl laptop:text-4xl font-bold text-center mb-6 dark:text-white laptop:mb-16">
        My Projects
      </h2>
      <div className="tablet:flex tablet:flex-wrap laptop:flex laptop:flex-wrap mb-28 tablet:mb-28 md:mb-28 laptop:mb-24">
        {projects.map((project) => (
          <CardComponent
            key={project.id}
            CardImage={project.CardImage}
            CardTitle={project.CardTitle}
            CardDescription={project.CardDescription}
            Url={project.Url}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
