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

interface Project {
  title: string;
  tag: string;
  details: string;
  link?: Link;
  github?: Link;
}

interface Post {
  title: string;
  smallDescription: string;
  titleImage: SanityImage;
  content: PostContent;
  slug: string;
  author: Object;
  publishedDate: string;
}
