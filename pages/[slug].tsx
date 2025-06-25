import React from "react";

import Layout from "@/components/layout";
import { articlesBySlug, type Article } from "@/data/articles";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import ReactMarkdown from "react-markdown";

import Image from "next/image";
import BackButton from "@/components/backButton";
import Links from "@/components/links";

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
    <Layout title={`${article.title}`}>
      <div>
        <BackButton />
      </div>
      <article className="prose max-w-none">
        {article.bannerImg && (
          <Image
            src={article.bannerImg.path}
            alt={article.bannerImg.alt || "Banner image"}
            width={1200}
            height={160}
            style={{
              height: "160px",
              width: "100%",
              borderRadius: "8px",
              objectFit: "cover",
              display: "block",
              margin: "0 auto 1.5rem auto",
            }}
            sizes="100vw"
            priority
          />
        )}
        <ReactMarkdown>{article.content}</ReactMarkdown>
      </article>
      {article.links && article.links.length > 0 && (
        <div>
          <Links links={article.links} />
        </div>
      )}
      {article.tech && article.tech.length > 0 && (
        <div>
          <h3 className="not-prose font-['IBM_Plex_Mono',monospace] font-normal !font-normal text-xl md:text-xl">
            Tech
          </h3>
          <div className="mt-4">{article.tech.join(", ")}</div>
        </div>
      )}
    </Layout>
  );
}
