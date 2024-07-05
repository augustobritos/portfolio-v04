import { siteConfig } from "@/config/site";
import { getAllPosts } from "./api/sanity/posts";

export default async function sitemap() {
  const baseUrl = siteConfig.url;

  const posts: Post[] = await getAllPosts();

  const postUrls = posts?.map((post) => ({
    url: `${baseUrl}/blog/${post?.slug}`,
    lastModified: new Date(),
  }));

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/blog`, lastModified: new Date() },
    ...postUrls,
  ];
}

export const dynamic = "force-dynamic";
