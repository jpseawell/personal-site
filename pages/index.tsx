import Feed from "@/components/feed";
import Layout from "@/components/layout";
import Paginate from "@/components/paginate";
import Profile from "@/components/profile";
import { POSTS_PER_PAGE } from "@/config";
import { Post as PostType, posts } from "@/data/posts";
import { GetStaticProps, InferGetStaticPropsType } from "next";

interface HomePageProps {
  posts: PostType[];
  isLast?: boolean;
}

export const getStaticProps = (() => {
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const curr = 1; // Home page is always the first page
  const isLast = curr === totalPages;

  return { props: { posts: posts.slice(0, POSTS_PER_PAGE), isLast } };
}) satisfies GetStaticProps<HomePageProps>;

export default function Home({
  posts,
  isLast,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <Profile />
      <Feed posts={posts} />
      <Paginate isFirst currentPage={1} isLast={isLast} />
    </Layout>
  );
}
