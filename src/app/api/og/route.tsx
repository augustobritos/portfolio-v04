import { urlFor } from "@/lib/sanity";
import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";
import { getPost } from "../sanity/posts";

export const runtime = "edge";

const neueMontrealRegular = fetch(
  new URL("../../../assets/fonts/PPNeueMontreal-Book.otf", import.meta.url)
).then((res) => res.arrayBuffer());

const neueMontrealBold = fetch(
  new URL("../../../assets/fonts/PPNeueMontreal-Bold.otf", import.meta.url)
).then((res) => res.arrayBuffer());

const imageSource = fetch(
  new URL("../../../../public/images/logo.png", import.meta.url)
).then((res) => res.arrayBuffer());

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const slug = searchParams.get("slug") || "";
    const post: Post = await getPost(slug);
    const fontRegular = await neueMontrealRegular;
    const fontBold = await neueMontrealBold;
    const imageBuffer = await imageSource;
    const imageBase64 = Buffer.from(imageBuffer).toString("base64");
    const imageDataUrl = `data:image/png;base64,${imageBase64}`;

    return new ImageResponse(
      (
        <div tw="flex flex-col p-4 w-full h-full w-full items-center bg-black text-white">
          <div
            tw="flex items-center w-full"
            style={{ fontFamily: "NeueMontrealBold", fontSize: "28px" }}
          >
            <h1 tw="text-center">{post?.title}</h1>
          </div>

          <div tw="flex w-full items-center">
            <img
              src={urlFor(post.titleImage).toString()}
              width="500"
              height="300"
              alt="Post image"
            />

            <p
              tw="p-8"
              style={{ fontFamily: "NeueMontrealRegular", fontSize: "28px" }}
            >
              {post?.smallDescription}
            </p>
          </div>
          <div
            tw="flex items-center w-full"
            style={{
              fontFamily: "NeueMontrealBold",
              fontSize: "24px",
            }}
          >
            <img width="70" height="70" src={imageDataUrl} alt="logo" />
            <h2 tw="pl-4">augustobritos.com</h2>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "NeueMontrealRegular",
            data: fontRegular,
          },
          {
            name: "NeueMontrealBold",
            data: fontBold,
          },
        ],
      }
    );
  } catch (error) {
    return new Response(`Failed to generate image: ${error}`, {
      status: 500,
    });
  }
}
