import { Post as PostData } from "@/data/posts";
import { FC } from "react";
import { Post } from "./post";

type FeedProps = {
  posts: PostData[];
};

export default function Feed({ posts }: FeedProps) {
  return (
    <>
      <div className="px-4 py-2 border border-x-0 border-t-0 border-slate-800 border-dashed flex">
        <div className="font-semibold">Posts</div>
      </div>
      <div>
        {posts.map((post) => (
          <a key={post.id} href={`posts/${post.id}`}>
            <Post post={post} />
          </a>
        ))}
      </div>
    </>
  );
}
