import Feed from "@/components/feed";
import Layout from "@/components/layout";
import Profile from "@/components/profile";
import { Post as PostType, posts } from "@/data/posts";
import { GetStaticProps, InferGetStaticPropsType } from "next";

interface HomePageProps {
  posts: PostType[];
}

export const getStaticProps = (() => {
  return { props: { posts } };
}) satisfies GetStaticProps<HomePageProps>;

export default function Home({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <Profile />
      <Feed posts={posts} />
    </Layout>
  );
}
