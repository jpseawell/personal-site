import { Bio } from "@/components/Bio";
import { Feed } from "@/components/Feed";
import { Header } from "@/components/Header";
import { posts } from "@/data/posts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Welcome | JustinSeawell.com",
};

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col w-1/2 max-w-xl m-auto border border-y-0 border-slate-800">
      <Header />
      <Bio />
      <Feed posts={posts} />
    </main>
  );
}
