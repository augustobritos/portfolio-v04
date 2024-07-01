import { cn } from "@/lib/utils";
import ProjectDetails from "./project-details";
import Text from "../shared/text";

interface ProjectListProps {
  projects: Project[];
  activeProject: string;
  onClick: (title: string) => void;
}

const ProjectList = ({
  projects,
  activeProject,
  onClick,
}: ProjectListProps) => {
  const activeProjectDetails = projects.find(
    (project) => project.title === activeProject
  );

  return (
    <div className="flex flex-col md:flex-row pt-4 items-center w-full">
      <ul className="space-y-2 w-full md:w-1/2">
        {projects.map((project) => (
          <li
            key={project.title}
            className={cn(
              "cursor-pointer transition-transform duration-500 ease-in-out hover:translate-x-4 opacity-40 hover:opacity-100",
              activeProject === project.title && "translate-x-4 opacity-100 group"
            )}
            onClick={() => onClick(project.title)}
          >
            <div className="flex space-x-2 px-2">
              <Text as="h3" weight="medium" size="body">
                {project.title}
              </Text>
              <Text as="h4" className="italic" size="small">
                {project.tag}
              </Text>
            </div>
          </li>
        ))}
      </ul>
      <div className="w-full md:w-1/2 flex mt-6 ml-2 md:mt-0">
        {activeProjectDetails && (
          <ProjectDetails project={activeProjectDetails} />
        )}
      </div>
    </div>
  );
};

export default ProjectList;
