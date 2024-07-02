import Link from "next/link";
import Image from "next/image";

import { ArrowUpRight } from "lucide-react";

const MainNav = ({ links }: Menu) => {
  return (
    <nav className="hidden md:flex justify-between items-center sticky z-50 top-0 py-4">
      <div className="flex items-center mr-4">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="logo"
            className="transition-all hover:scale-110"
            width={40}
            height={40}
            priority
          />
        </Link>
      </div>

      <div className="flex justify-center gap-4">
        {links.map(
          ({ title, href, rel, target, active }: Link) =>
            active && (
              <Link
                key={title}
                href={href}
                rel={rel}
                target={target}
                className="flex items-center text-foreground/80 hover:text-foreground transition-colors duration-300 font-medium group capitalize"
                aria-disabled
              >
                {title}
                {target === "_blank" && (
                  <ArrowUpRight
                    size={18}
                    strokeWidth={1.5}
                    className="text-foreground/80 group-hover:text-foreground transition-colors duration-300 font-medium"
                  />
                )}
              </Link>
            )
        )}
      </div>
    </nav>
  );
};

export default MainNav;
