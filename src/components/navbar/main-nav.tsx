import Link from "next/link";
import Image from "next/image";

import { ArrowUpRight } from "lucide-react";

const MainNav = ({ links }: Menu) => {
  return (
    <nav className="hidden md:flex justify-between items-center sticky z-50 py-4">
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="logo"
            className="transition-all hover:scale-110"
            width={70}
            height={70}
            priority
          />
        </Link>
      </div>

      <div className="flex justify-center gap-2">
        {links.map(
          ({ title, href, rel, target, active }: Link) =>
            active && (
              <Link
                key={title}
                href={href}
                rel={rel}
                target={target}
                className="flex items-center text-foreground/80 hover:text-foreground transition-colors duration-300"
                aria-disabled
              >
                {title}
                {target === "_blank" && (
                  <ArrowUpRight
                    size={18}
                    strokeWidth={1}
                    className="transition-colors duration-300"
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
