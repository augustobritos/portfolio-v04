import { getAllPosts } from "@/app/api/sanity/posts";
import Text from "../shared/text";

import PostList from "../shared/post-list";

const LatestPosts = async () => {
  const posts: Post[] = await getAllPosts();

  return (
    <section className="max-w-2xl w-full mx-auto">
      <Text as="h2" size="heading">
        Latest Posts
      </Text>
      {posts.length === 0 ? (
        <Text as="p" size="body" className="text-center">
          No posts available.
        </Text>
      ) : (
        <div className="mt-4">
          <PostList posts={posts.slice(0, 3)} />
        </div>
      )}
    </section>
  );
};

export default LatestPosts;
