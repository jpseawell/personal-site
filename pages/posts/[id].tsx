import BackButton from "@/components/backButton";
import Layout from "@/components/layout";
import { Post as PostComponent } from "@/components/post";
import { Post, posts } from "@/data/posts";
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

  return { props: { post } };
}) satisfies GetStaticProps<{ post: Post }>;

export default function PostPage({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <div className={"p-4"}>
        <BackButton />
      </div>
      <PostComponent post={post} />
    </Layout>
  );
}
