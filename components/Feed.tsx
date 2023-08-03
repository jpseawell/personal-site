import { Post as PostData } from "@/data/posts";
import { FC } from "react";
import { Post } from "./Post";

type FeedProps = {
  posts: PostData[];
};

export const Feed: FC<FeedProps> = ({ posts }) => {
  return (
    <>
      <div className="px-4 py-2 border border-x-0 border-t-0 border-slate-800 border-dashed flex">
        <div className="font-semibold">Posts</div>
      </div>
      <div className="p-4">
        {posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    </>
  );
};
