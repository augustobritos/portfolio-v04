import PostItem from "./post-item";

interface PostListProps {
  posts: Post[];
}

const PostList = async ({ posts }: PostListProps) => {
  return (
    <ul className="my-20">
      {posts.map((post, index) => (
        <li key={index}>
          <PostItem post={post} />
        </li>
      ))}
    </ul>
  );
};

export default PostList;
