import Hero from "@/components/hero/hero";
import LatestPosts from "@/components/latest-posts/latest-posts";
import Projects from "@/components/projects/projects";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main className="flex flex-col mx-auto max-w-2xl p-4">
      <Hero />
      <Separator className="my-8"/>
      <Projects />
      <LatestPosts />
    </main>
  );
}
