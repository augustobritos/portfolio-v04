import PostItem from "./post-item";

interface PostListProps {
  posts: Post[];
}

const PostList = async ({ posts }: PostListProps) => {
  return (
    <ul>
      {posts.map((post, index) => (
        <li key={index}>
          <PostItem post={post} />
        </li>
      ))}
    </ul>
  );
};

export default PostList;
