import { ExternalLink } from "lucide-react";
import Link from "next/link";
import Text from "../shared/text";
import { buttonVariants } from "../ui/button";

const ProjectDetails = ({ project }: { project: Project }) => (
  <div className="flex flex-col items-center">
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
    <div className="flex justify-center mt-2">
      <Link
        href={project.link?.href || "#"}
        rel={project.link?.rel}
        target={project.link?.target}
        className={buttonVariants({ variant: "ghost" })}
      >
        Go
        <ExternalLink
          size={18}
          className="group-hover:transition-colors ease-in-out duration-150 ml-2"
        />
      </Link>
    </div>
  </div>
);

export default ProjectDetails;
