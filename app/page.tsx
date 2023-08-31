import { Bio } from "@/components/Bio";
import { Feed } from "@/components/Feed";
import { Header } from "@/components/Header";
import { POSTS_LIMIT } from "@/config";
import { posts } from "@/data/posts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Welcome | ${process.env.NEXT_PUBLIC_WEBSITE_NAME}`,
};

// TODO: Refactor so that page 1 and home page share code
export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col w-1/2 max-w-xl m-auto border border-y-0 border-slate-800">
      <Header />
      <Bio />
      <Feed posts={posts.slice(0, POSTS_LIMIT)} />
      <div className="flex justify-between">
        {/* TODO: Remove left empty tag */}
        <a href=""></a>
        <a href={`/page/2`}>Forward</a>
      </div>
    </main>
  );
}
