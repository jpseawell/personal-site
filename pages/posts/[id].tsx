import BackButton from "@/components/backButton";
import Layout from "@/components/layout";
import { Post as PostComponent } from "@/components/post";
import { Post, posts, postsById } from "@/data/posts";
import { stripHTMLButKeepAt } from "@/utils";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";

export const getStaticPaths = (() => {
  const paths = posts.map((post) => ({ params: { id: post.id.toString() } }));
  return { paths, fallback: false };
}) satisfies GetStaticPaths;

export const getStaticProps = (({ params }) => {
  if (!params) throw new Error("no params provided to getStaticProps");
  const { id } = params;

  if (typeof id !== "string")
    throw new Error("provided id param is not a string");

  const posts = { ...postsById };
  const post = posts[parseInt(id)];
  if (!post)
    throw new Error("identified post not found on posts page static props");

  let thread: Post[] = [post];
  let curr = post;
  while (curr.prev) {
    curr = posts[curr.prev];
    thread.unshift(curr);
  }

  curr = post;
  while (curr.next) {
    curr = posts[curr.next];
    thread.push(curr);
  }

  const title = `Justin Seawell: "${stripHTMLButKeepAt(
    post.content.substring(0, 100).trim()
  )}...`;

  return { props: { title, posts: thread } };
}) satisfies GetStaticProps<{ title: string; posts: Post[] }>;

export default function PostPage({
  title,
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Layout title={title}>
        <div className={"p-4"}>
          <BackButton />
        </div>
        {posts.map((post) => (
          <PostComponent key={post.id} post={post} expanded />
        ))}
      </Layout>
    </>
  );
}
