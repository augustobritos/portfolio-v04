"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { ArrowUpRight, X } from "lucide-react";

const MobileNav = ({ links }: Menu) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuIcon = (
    <svg
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
    >
      <path
        d="M3 5H11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M3 12H16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M3 19H21"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );

  return (
    <nav className="md:hidden pt-4">
      <Button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        variant="ghost"
        aria-label="Toggle menu"
      >
        {!isMenuOpen && menuIcon}
      </Button>

      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-background/50 z-40"
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          ></div>
          <div
            className={cn(
              "fixed inset-y-0 left-0 w-80 bg-background shadow-xl z-50 transition-transform duration-500 ease-in-out",
              isMenuOpen ? "translate-x-0" : "-translate-x-full"
            )}
          >
            <div className="flex flex-col p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Link
                    href={"/"}
                    className="flex items-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Image
                      src="/images/logo.png"
                      alt="logo"
                      width={40}
                      height={40}
                    />
                    <span className="font-bold">Augusto Britos</span>
                  </Link>
                </div>
                <Button
                  variant="ghost"
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X
                    size={18}
                    className="border border-solid border-foreground/50 rounded-md"
                  />
                </Button>
              </div>

              <div className="flex flex-col pl-10 pt-4 gap-2">
                {links.map(
                  ({ title, href, rel, target, active }) =>
                    active && (
                      <Link
                        key={title}
                        href={href}
                        rel={rel}
                        target={target}
                        className="flex items-center tracking-wide capitalize font-medium"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {title}
                        {target === "_blank" && (
                          <ArrowUpRight size={18} strokeWidth={1.5} />
                        )}
                      </Link>
                    )
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default MobileNav;
