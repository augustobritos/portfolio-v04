"use client";

import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import React from "react";

type DynamicBreadCrumbProps = {
  className?: string;
};

const DynamicBreadcrumb = ({ className }: DynamicBreadCrumbProps) => {
  const pathname = usePathname();
  const pathnames = () => pathname.split("/").filter(Boolean);

  const breadcrumbItems = pathnames().map((value, index) => ({
    name: value.charAt(0).toUpperCase() + value.slice(1).replace(/-/g, " "),
    path: `/${pathnames()
      .slice(0, index + 1)
      .join("/")}`,
  }));

  return (
    <Breadcrumb className={className}>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        {breadcrumbItems.map((item, index) => (
          <React.Fragment key={index}>
            <BreadcrumbItem>
              {index === breadcrumbItems.length - 1 ? (
                <BreadcrumbPage>{item.name}</BreadcrumbPage>
              ) : (
                <React.Fragment>
                  <BreadcrumbLink href={item.path}>{item.name}</BreadcrumbLink>
                  <BreadcrumbSeparator />
                </React.Fragment>
              )}
            </BreadcrumbItem>
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default DynamicBreadcrumb;
