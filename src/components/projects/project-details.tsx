import Link from "next/link";
import Text from "../shared/text";

const ProjectDetails = ({ project }: { project: Project }) => (
  <div className="flex flex-col items-center">
    <Link
      href={project.link?.href || "#"}
      rel={project.link?.rel}
      target={project.link?.target}
    >
      <div className="w-full bg-accent/80 p-4 rounded-md">
        <Text as="h3" size="body" weight="medium">
          {project.title}
        </Text>
        <Text
          as="h4"
          size="body"
          className="mt-2 text-foreground/80 line-clamp-2"
        >
          {project.details}
        </Text>
      </div>
    </Link>
  </div>
);

export default ProjectDetails;
