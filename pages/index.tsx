import Feed from "@/components/feed";
import Layout from "@/components/layout";
import Paginate from "@/components/paginate";
import Profile from "@/components/profile";
import { POSTS_PER_PAGE } from "@/config";
import {
  Post as PostType,
  filterPosts,
  getPosts,
  posts,
  sortPosts,
} from "@/data/posts";
import { GetStaticProps, InferGetStaticPropsType } from "next";

interface HomePageProps {
  posts: PostType[];
  isLast?: boolean;
}

export const getStaticProps = (() => {
  const pageNum = 1; // Home page is always the first page
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const isLast = pageNum === totalPages;
  const postsForPage = getPosts(pageNum);

  return { props: { posts: postsForPage, isLast } };
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
