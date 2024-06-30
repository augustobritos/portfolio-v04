import { cn } from "@/lib/utils";
import Text from "./text";
import { ReactNode } from "react";

export interface PageProps extends React.HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

function PageHeader({ className, children, ...props }: PageProps) {
  return (
    <section
      className={cn("max-w-2xl mx-auto flex flex-col", className)}
      {...props}
    >
      {children}
    </section>
  );
}

function PageHeaderHeading({ className, ...props }: PageProps) {
  return <Text {...props} className={className} as="h1" size="hero" />;
}

function PageHeaderDescription({ className, ...props }: PageProps) {
  return (
    <Text {...props} className={cn("mt-4", className)} as="h2" size="subheading" />
  );
}

function PageHeaderActions({ className, ...props }: PageProps) {
  return (
    <div
      className={cn(
        "flex w-full items-center justify-center space-x-4 py-6 md:pb-10",
        className
      )}
      {...props}
    />
  );
}

export {
  PageHeader,
  PageHeaderHeading,
  PageHeaderDescription,
  PageHeaderActions,
};
