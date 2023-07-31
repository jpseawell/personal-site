import { Post } from "@/data/posts";
import { FC } from "react"

type FeedProps = {
  posts: Post[];
}

export const Feed: FC<FeedProps> = ({ posts }) => {
  return <div>Posts:<br />----- <br />
    {posts.map(post => <div>{post.content}</div>)}
  </div>
}