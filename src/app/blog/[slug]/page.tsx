import { getAllPosts, getPost } from "@/app/api/sanity/posts";
import { urlFor } from "@/lib/sanity";
import { Metadata } from "next";
import { PortableText } from "next-sanity";
import Image from "next/image";

import Text from "@/components/shared/text";
import DynamicBreadcrumb from "@/components/shared/dynamic-breadcrumb";
import { siteConfig } from "@/config/site";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;
  const { title, smallDescription }: Post = await getPost(slug);

  const ogParams = new URLSearchParams();
  ogParams.set("slug", slug);

  return {
    title: title,
    description: smallDescription,
    metadataBase: new URL(siteConfig.url),
    authors: siteConfig.authors,
    creator: siteConfig.name,
    openGraph: {
      type: "article",
      locale: "en_US",
      url: `/blog/${slug}`,
      title: title,
      description: smallDescription,
      images: [
        {
          url: `/api/og?${ogParams.toString()}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: smallDescription,
      creator: siteConfig.name,
    },
    icons: {
      icon: "/favicon.ico",
    },
  };
}

export const revalidate = 0;

export default async function BlogPost({ params }: Props) {
  const post: Post = await getPost(params.slug);

  return post?.content?.length === 0 ? (
    <Text as="p" size="body" className="text-center">
      Post unavailable.
    </Text>
  ) : (
    <article className="p-4 mx-auto max-w-2xl">
      <Text
        as="h1"
        size="heading"
        weight="normal"
        position="left"
        className="my-4 uppercase tracking-wide leading-tight text-balance"
      >
        {post.title}
      </Text>

      <DynamicBreadcrumb />

      <div className="flex flex-col items-center">
        <Image
          priority
          src={urlFor(post.titleImage).url()}
          alt={post.titleImage.alt || `${post.title} image`}
          width={800}
          height={800}
          className="my-8"
        />
      </div>
      <div className="prose dark:prose-invert prose-li:marker:text-foreground mx-auto w-full max-w-2xl pb-20 text-balance">
        <PortableText value={post.content} />
      </div>
    </article>
  );
}
