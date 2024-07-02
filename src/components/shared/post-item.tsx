import Link from "next/link";
import Text from "./text";
import PostDetails from "./post-details";

const PostItem = ({ post }: { post: Post }) => {
  const { slug, title, smallDescription, publishedDate, content } = post;

  return (
    <Link
      href={`blog/${slug}`}
      className="flex rounded-md p-4 transition-colors hover:bg-accent/80"
    >
      <article className="flex flex-col gap-2 rounded-md">
        <Text as="h3" weight="medium" className="line-clamp-2">
          {title}
        </Text>
        <Text className="line-clamp-2 text-foreground/80">
          {smallDescription}
        </Text>
        <PostDetails publishedDate={publishedDate} content={content} />
      </article>
    </Link>
  );
};

export default PostItem;
