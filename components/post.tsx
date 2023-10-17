import { Post as PostData } from "@/data/posts";
import { DateTime } from "luxon";
import { FC } from "react";

type PostProps = {
  post: PostData;
};

export function Post({ post }: PostProps) {
  const formatDateTime = (dtStr: string) => {
    const dateTime = DateTime.fromISO(dtStr);

    if (Math.ceil(dateTime.diffNow("months").as("months")) < -1)
      return dateTime.toFormat("MMMM dd, yyyy");

    return dateTime.toRelative();
  };

  return (
    <div className="border-b border-slate-800 border-dashed p-4">
      {post.pinned && (
        <p className="text-sm mb-2 font-semibold text-slate-500">Pinned Post</p>
      )}
      <p className="mb-2">
        <span className="font-semibold">Justin Seawell 👨🏻‍🏭</span>
        <span className="font-light text-slate-600">
          {" "}
          · {formatDateTime(post.date)}
        </span>
      </p>
      {/* object tag needed for rendering links inside content */}
      <object
        dangerouslySetInnerHTML={{
          __html: post.content,
        }}
      />
    </div>
  );
}
