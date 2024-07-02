import Hero from "@/components/hero/hero";
import LatestPosts from "@/components/latest-posts/latest-posts";
import Projects from "@/components/projects/projects";

export default function Home() {
  return (
    <main className="flex flex-col mx-auto max-w-4xl p-10">
      <Hero />
      <Projects />
      <LatestPosts />
    </main>
  );
}
