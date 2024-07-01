"use client";

import { PROJECTS } from "@/config/projects";
import { SetStateAction, useState } from "react";
import Text from "../shared/text";
import ProjectList from "./project-list";

const Projects = () => {
  const [activeProject, setActiveProject] = useState(PROJECTS[0].title);

  const handleProjectClick = (title: SetStateAction<string>) => {
    setActiveProject(title);
  };

  return (
    <section className="max-w-2xl w-full mx-auto my-20 ">
      <Text as="h2" size="heading">
        Latest Projects
      </Text>
      <ProjectList
        projects={PROJECTS}
        activeProject={activeProject}
        onClick={handleProjectClick}
      />
    </section>
  );
};

export default Projects;
