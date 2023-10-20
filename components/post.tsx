import { content } from "@/data/content";
import { Post as PostData } from "@/data/posts";
import FormattedDateTime from "./formattedDateTime";
import Head from "next/head";
import Gist from "react-gist";

type PostProps = {
  post: PostData;
};

export function Post({ post }: PostProps) {
  return (
    <>
      <div className="border-b border-slate-800 border-dashed p-4">
        {post.pinned && (
          <p className="text-sm mb-2 font-semibold text-slate-500">
            Pinned Post
          </p>
        )}
        <p className="mb-2">
          <span className="font-semibold">{content.profileName}</span>
          <span className="font-light text-slate-600">
            {" "}
            · <FormattedDateTime isoDateTime={post.date} />
          </span>
        </p>
        {/* object tag needed for rendering links inside content */}
        <object
          dangerouslySetInnerHTML={{
            __html: post.content,
          }}
        />
        {/* Embedded Content */}
        {post.showcase && (
          <div className="h-[350px] overflow-y-auto border border-slate-600 mt-4">
            {post.showcase.gistId && <Gist id={post.showcase.gistId} />}
          </div>
        )}
      </div>
    </>
  );
}
