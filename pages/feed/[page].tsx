import Feed from "@/components/feed";
import Layout from "@/components/layout";
import Paginate from "@/components/paginate";
import Profile from "@/components/profile";
import { POSTS_PER_PAGE } from "@/config";
import { Post as PostType, posts } from "@/data/posts";
import { getPosts } from "@/services/posts";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";

interface FeedPageProps {
  page: string;
  posts: PostType[];
  isFirst?: boolean;
  isLast?: boolean;
}

export const getStaticPaths = (() => {
  // TODO: Refactor
  let paths = [];
  let page = 1;
  for (let i = 0; i < posts.length; i += POSTS_PER_PAGE) {
    paths.push({ params: { page: page.toString() } });
    page++;
  }

  return { paths, fallback: false };
}) satisfies GetStaticPaths;

export const getStaticProps = (({ params }) => {
  if (!params) throw new Error("no params provided to getStaticProps");
  const { page } = params;

  if (typeof page !== "string")
    throw new Error("provided page param is not a string");

  const pageNum = parseInt(page);
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const isFirst = pageNum === 1;
  const isLast = pageNum === totalPages;
  const postsForPage = getPosts(pageNum);
  return { props: { posts: postsForPage, page, isFirst, isLast } };
}) satisfies GetStaticProps<FeedPageProps>;

export default function FeedPage({
  posts,
  page,
  isFirst,
  isLast,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <Profile />
      <Feed posts={posts} />
      <Paginate
        currentPage={parseInt(page)}
        isFirst={isFirst}
        isLast={isLast}
      />
    </Layout>
  );
}
