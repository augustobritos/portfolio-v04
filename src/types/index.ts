interface Link {
  title: string;
  href: string;
  target?: "_blank" | "_self";
  rel?: "noopener" | "noreferrer";
  active?: boolean;
}

interface Menu {
  links: Link[];
}
