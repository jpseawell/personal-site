import BackButton from "@/components/backButton";
import Layout from "@/components/layout";
import { Post as PostComponent } from "@/components/post";
import { Post, posts } from "@/data/posts";
import { stripHTMLButKeepAt } from "@/utils";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";

export const getStaticPaths = (() => {
  const paths = posts.map((post) => ({ params: { id: post.id.toString() } }));
  return { paths, fallback: false };
}) satisfies GetStaticPaths;

export const getStaticProps = (({ params }) => {
  if (!params) throw new Error("no params provided to getStaticProps");
  const { id } = params;

  const post = posts.find((post) => post.id.toString() === id);
  if (!post) throw new Error("static prop post not found");

  const title = `Justin Seawell: "${stripHTMLButKeepAt(
    post.content.substring(0, 100).trim()
  )}...`;

  return { props: { title, post } };
}) satisfies GetStaticProps<{ title: string; post: Post }>;

export default function PostPage({
  title,
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Layout title={title}>
        <div className={"p-4"}>
          <BackButton />
        </div>
        <PostComponent post={post} expanded />
      </Layout>
    </>
  );
}
