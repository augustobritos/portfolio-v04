import Link from "next/link";
import { ArrowUpRight, CopyrightIcon, HeartIcon } from "lucide-react";
import Text from "../shared/text";
import { Separator } from "../ui/separator";

const Footer = () => {
  return (
    <footer className="max-w-2xl w-full mx-auto flex flex-col p-4 mt-auto">
      <Separator className="my-8" />
      <div className="flex flex-row justify-between gap-2">
        <Link
          href="https://www.linkedin.com/in/augustobritos/"
          rel={"noopener"}
          target={"_blank"}
          className="flex items-center text-foreground/80 hover:text-foreground transition-colors duration-300 font-medium group text-caption"
          aria-disabled
        >
          Linkedin
          <ArrowUpRight
            size={12}
            strokeWidth={1.5}
            className="text-foreground/80 group-hover:text-foreground transition-colors duration-300 font-medium"
          />
        </Link>
        <Text as="span" size="caption" className="flex items-center gap-2">
          <CopyrightIcon size={12} strokeWidth={2} />
          2024 | Built with <HeartIcon size={12} strokeWidth={2}/>
        </Text>
      </div>
    </footer>
  );
};

export default Footer;
