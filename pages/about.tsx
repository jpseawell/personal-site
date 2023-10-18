import BackPageLayout from "@/components/backPageLayout";
import { articles } from "@/data/articles";
import { Article } from "@/data/types";
import { GetStaticProps, InferGetStaticPropsType } from "next";

interface AboutPageProps {
  article: Article;
}

export const getStaticProps = (() => {
  return { props: { article: articles["about"] } };
}) satisfies GetStaticProps<AboutPageProps>;

export default function About({
  article,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <BackPageLayout>
      <article className="prose lg:prose-xl dark:prose-invert">
        <h1>{article.title}</h1>
        <p>{article.content}</p>
      </article>
    </BackPageLayout>
  );
}
