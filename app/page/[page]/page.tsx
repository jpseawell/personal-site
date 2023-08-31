import { Bio } from "@/components/Bio";
import { Feed } from "@/components/Feed";
import { Header } from "@/components/Header";
import { POSTS_LIMIT } from "@/config";
import { posts } from "@/data/posts";
import { Metadata } from "next";

interface PostsPageProps {
  params: { page: number };
}

export const metadata: Metadata = {
  title: `Welcome`,
};

export default function PostsPage({ params }: PostsPageProps) {
  /**
   * TODO:
   * Next JS sees the params.page as a string even though
   * we told TypeScript that it's a number.
   *
   * We'll need to tell typescript that it is a string, and
   * then convert it to a number. Do this for all
   * params.
   */
  const start = (params.page - 1) * POSTS_LIMIT;
  const end = params.page * POSTS_LIMIT;

  const prev = params.page - 1;
  const next = params.page + 1;

  console.log({ next, prev });

  return (
    <main className="flex min-h-screen flex-col w-1/2 max-w-xl m-auto border border-y-0 border-slate-800">
      <Header />
      <Bio />
      <Feed posts={posts.slice(start, end)} />
      <div className="flex justify-between">
        <a href={params.page > 1 ? `/page/${params.page - 1}` : ""}></a>
        <a href={`/page/${params.page++}`}>Forward</a>
      </div>
    </main>
  );
}

// TODO: Make page param > than number of posts -> Not Found
export async function generateStaticParams() {
  const params = [];
  let count = 1;
  for (let i = 0; i < posts.length; i += POSTS_LIMIT) {
    params.push(count++);
  }
  return params;
}
