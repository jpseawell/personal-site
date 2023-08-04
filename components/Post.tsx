import { Post as PostData } from "@/data/posts";
import { FC } from "react";

type PostProps = {
  post: PostData;
};

export const Post: FC<PostProps> = ({ post }) => {
  return (
    <div className="border-b border-slate-800 border-dashed p-4">
      {post.pinned && (
        <p className="text-sm mb-2 font-semibold text-slate-500">Pinned Post</p>
      )}
      <p className="mb-2">
        <span className="font-semibold">Justin Seawell 👨🏻‍🏭</span>
        <span className="font-light text-slate-600"> · {post.date}</span>
      </p>
      <p>{post.content}</p>
    </div>
  );
};
