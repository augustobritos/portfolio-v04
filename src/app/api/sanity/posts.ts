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

  try {
    const data: Post[] = await client.fetch(query);
    return data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw new Error("Failed to fetch posts");
  }
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

  try {
    const data: Post = await client.fetch(query);
    return data;
  } catch (error) {
    console.error("Error fetching post:", error);
    throw new Error("Failed to fetch post");
  }
};

export { getAllPosts, getPost };
