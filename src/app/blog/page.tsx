import PostList from "@/components/shared/post-list";
import Text from "@/components/shared/text";
import type { Metadata } from "next";
import { getAllPosts } from "../api/sanity/posts";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/shared/page-header";
import DynamicBreadcrumb from "@/components/shared/dynamic-breadcrumb";

export const metadata: Metadata = {
  title: "Blog",
  description: "Explore my digital realm",
};

export async function generateStaticParams() {
  const posts: Post[] = await getAllPosts();

  return posts.map(({ slug }) => ({ slug: slug }));
}

export const revalidate = 0;

const Blog = async () => {
  const posts: Post[] = await getAllPosts();

  return (
    <main className="max-w-2xl mx-auto p-4">
      <PageHeader className="py-8">
        <PageHeaderHeading>Blog</PageHeaderHeading>
        <PageHeaderDescription>Explore my digital realm</PageHeaderDescription>
      </PageHeader>

      <DynamicBreadcrumb />

      {posts.length === 0 ? (
        <Text as="p" size="body" className="text-center">
          No posts available.
        </Text>
      ) : (
        <div className="mt-10">
          <PostList posts={posts} />
        </div>
      )}
    </main>
  );
};

export default Blog;
