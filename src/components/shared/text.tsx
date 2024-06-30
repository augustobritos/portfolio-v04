import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { ReactElement, ReactNode } from "react";

const textVariants = cva("", {
  variants: {
    size: {
      hero: "text-5xl",
      heading: "text-4xl",
      subheading: "text-3xl",
      body: "text-base",
      caption: "text-sm",
      small: "text-xs",
    },
    weight: {
      thin: "font-thin",
      normal: "font-normal",
      medium: "font-medium",
      semi: "font-semibold",
      bold: "font-bold",
    },
    position: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
  },
  defaultVariants: {
    size: "body",
    weight: "normal",
    position: "left",
  },
});

interface TextVariants {
  size?: "hero" | "heading" | "subheading" | "body" | "caption" | "small";

  weight?: "thin" | "normal" | "medium" | "semi" | "bold";
  position?: "left" | "center" | "right";
}

export interface TextProps extends TextVariants {
  children: ReactNode;
  as?: "p" | "h1" | "h2" | "h3" | "h4" | "span";
  className?: string;
}

function Text({
  children,
  className,
  as: Component = "p",
  size,
  weight,
  position,
  ...props
}: TextProps): ReactElement {
  return (
    <Component
      className={cn(
        textVariants({
          size,
          weight,
          position,
        }),
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

export default Text;
