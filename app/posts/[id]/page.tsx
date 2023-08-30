import { Post } from "@/components/Post";
import { posts } from "@/data/posts";
import { Metadata } from "next";

interface PostPageProps {
  params: { id: number };
}

export const metadata: Metadata = {
  title: "Justin's Post",
};

export default function PostPage({ params }: PostPageProps) {
  const post = posts.find((post) => post.id == params.id);
  return <section>{post && <Post post={post} />}</section>;
}

export async function generateStaticParams() {
  return posts.map((post) => ({ id: post.id.toString() }));
}
