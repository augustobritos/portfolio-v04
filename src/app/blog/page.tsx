import PostList from "@/components/shared/post-list";
import Text from "@/components/shared/text";
import type { Metadata } from "next";
import { getAllPosts } from "../api/sanity/posts";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/shared/page-header";

export const metadata: Metadata = {
  title: "Blog",
  description: "Explore my digital realm",
};

const Blog = async () => {
  const posts: Post[] = await getAllPosts();

  return (
    <main className="max-w-2xl mx-auto pt-10">
      <PageHeader>
        <PageHeaderHeading className="text-balance">
          <Text as="h1" size="hero" position="left">
            Blog
          </Text>
        </PageHeaderHeading>
        <PageHeaderDescription>
          <Text as="h2">Explore my digital realm</Text>
        </PageHeaderDescription>
      </PageHeader>

      {posts.length === 0 ? (
        <Text as="p" size="body" className="text-center">
          No posts available.
        </Text>
      ) : (
        <div className="my-20">
          <PostList posts={posts} />
        </div>
      )}
    </main>
  );
};

export default Blog;
