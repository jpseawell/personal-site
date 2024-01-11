import { content } from "@/data/content";
import { Post as PostData } from "@/data/posts";
import FormattedDateTime from "./formattedDateTime";
import Gist from "react-gist";
import Image from "next/image";

type PostProps = {
  post: PostData;
  expanded?: boolean;
};

export function Post({ post, expanded }: PostProps) {
  return (
    <div
      className={`border-slate-800 ${
        post?.prev
          ? "px-4 py-3 border-l border-solid ml-6"
          : "p-4 border-t border-dashed"
      }
      
      ${post.prev && !post?.next && "mb-4"}
      `}
    >
      {post.pinned && (
        <p className="text-sm mb-2 font-semibold text-slate-500">Pinned Post</p>
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
        <div className="mt-4">
          {post.showcase.gistId && (
            <div
              className={`${
                expanded ? "" : "h-[350px]"
              } overflow-y-auto border border-slate-600`}
            >
              <Gist id={post.showcase.gistId} />
            </div>
          )}
          {post.showcase.image && (
            <Image
              className="inline-block h-auto w-full text-center"
              src={post.showcase.image.src}
              alt={post.showcase.image.alt}
              width={post.showcase.image.width}
              height={post.showcase.image.height}
            />
          )}
        </div>
      )}
    </div>
  );
}
