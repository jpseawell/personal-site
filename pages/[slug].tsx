import BackPageLayout from "@/components/backPageLayout";
import FormattedDateTime from "@/components/formattedDateTime";
import { articlesBySlug, Article } from "@/data/articles";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";

interface ArticlePageProps {
  article: Article;
}

export const getStaticPaths = (() => {
  const paths = Object.keys(articlesBySlug).map((slug) => ({
    params: { slug },
  }));
  return { paths, fallback: false };
}) satisfies GetStaticPaths;

export const getStaticProps = (({ params }) => {
  if (!params) throw new Error("no params provided to getStaticProps");

  const { slug } = params;
  if (typeof slug !== "string") throw new Error("slug must be a string");

  return { props: { article: articlesBySlug[slug] } };
}) satisfies GetStaticProps<ArticlePageProps>;

export default function Article({
  article,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <BackPageLayout title={`${article.title} by Justin Seawell`}>
      <article className="prose lg:prose-xl dark:prose-invert">
        <h1 className="article-header">{article.title}</h1>
        <div className="font-light text-slate-600">
          <FormattedDateTime isoDateTime={article.date} neverRelative />
        </div>
        {article?.progress && (
          <div>
            <strong>Progress: </strong>
            {article.progress}
          </div>
        )}
        <div dangerouslySetInnerHTML={{ __html: article.content }} />
      </article>
    </BackPageLayout>
  );
}
