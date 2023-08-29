"use client";
import { Post } from "@/components/Post";
import { posts } from "@/data/posts";
import { useRouter } from "next/navigation";

interface PostPageProps {
  params: { id: number };
}

export default function PostPage({ params }: PostPageProps) {
  const post = posts.find((post) => post.id == params.id);
  const router = useRouter();

  const handleClick = () => router.back();

  return (
    <main className="flex min-h-screen flex-col w-1/2 max-w-xl m-auto border border-y-0 border-slate-800">
      <div className="p-4">
        <button onClick={handleClick} className="text-xl font-semibold">
          {"<- Back"}
        </button>
      </div>
      {post && <Post post={post} />}
    </main>
  );
}

export async function generateStaticParams() {
  return posts.map((post) => ({ id: post.id.toString() }));
}
