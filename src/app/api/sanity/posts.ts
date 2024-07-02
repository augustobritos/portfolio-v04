import { client } from "@/lib/sanity";

const getAllPosts = async () => {
  const query = `*[_type == "blog"] | order(_createdAt desc) {
      title,
      smallDescription,
      content,
        "slug": slug.current,
        author,
        titleImage,
        publishedDate
    }`;

  const data = await client.fetch(query);

  return data;
};

const getPost = async (slug: string) => {
  const query = `*[_type == "blog" && slug.current == "${slug}"] {
        "slug": slug.current,
          title,
          smallDescription,
          content,
          titleImage,
          author,
          publishedDate
      }[0]`;

  const data = await client.fetch(query);

  return data;
};

export { getAllPosts, getPost };
