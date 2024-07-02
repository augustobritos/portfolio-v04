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
    <section className="max-w-2xl w-full mx-auto py-4">
      <Text as="h2" size="subheading">
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
