import { getPost } from "@/app/api/sanity/posts";
import { urlFor } from "@/lib/sanity";
import { Metadata } from "next";
import { PortableText } from "next-sanity";
import Image from "next/image";

import Text from "@/components/shared/text";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;
  const { title, smallDescription }: Post = await getPost(slug);

  return {
    title: title,
    description: smallDescription,
  };
}

export default async function BlogPost({ params }: Props) {
  const post: Post = await getPost(params.slug);

  return (
    <article className="mt-8 px-8 mx-auto max-w-2xl">
      <Text
        as="h1"
        size="heading"
        weight="normal"
        position="left"
        className="my-4 uppercase tracking-wide leading-tight text-balance"
      >
        {post.title}
      </Text>

      <div className="flex flex-col items-center">
        <Image
          priority
          src={urlFor(post.titleImage).url()}
          alt={post.titleImage.alt}
          width={800}
          height={800}
          className="mt-8 border"
        />
      </div>
      <div className="mt-20 px-4 prose dark:prose-invert prose-li:marker:text-foreground mx-auto w-full max-w-2xl mb-20">
        <PortableText value={post.content} />
      </div>
    </article>
  );
}
