import React from "react";

import Layout from "@/components/layout";
import { articlesBySlug, type Article } from "@/data/articles";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import ReactMarkdown from "react-markdown";

import Image from "next/image";
import BackButton from "@/components/backButton";
import Links from "@/components/links";
import SearchBar from "@/components/searchBar";

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
    <Layout
      title={article.title}
      description={article.description}
      ogImage={article.bannerImg?.path}
      slug={article.slug}
    >
      <div>
        <BackButton />
      </div>
      <SearchBar />
      <article className="prose max-w-none">
        {article.bannerImg && (
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "240px",
              borderRadius: "8px",
              overflow: "hidden",
              margin: "0 auto 1.5rem auto",
            }}
          >
            <Image
              src={article.bannerImg.path}
              alt={article.bannerImg.alt || "Banner image"}
              fill
              sizes="(max-width: 768px) 100vw, 1200px"
              style={{ objectFit: "cover", borderRadius: "8px" }}
              priority
            />
          </div>
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
          <div className="mt-4 font-['IBM_Plex_Mono',monospace] text-base">
            {article.tech.map((tech, idx) => (
              <span key={tech}>
                <a
                  href={`?s=${encodeURIComponent(tech)}`}
                  style={{
                    color: "rgb(var(--highlight-2))",
                    cursor: "pointer",
                    textDecoration: "underline",
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    if (typeof window !== "undefined") {
                      const url = new URL(window.location.href);
                      url.searchParams.set("s", tech);
                      window.history.replaceState({}, "", url.toString());
                      // Optionally, trigger a custom event or callback if you want to refocus the search bar immediately
                      window.dispatchEvent(new Event("popstate"));
                    }
                  }}
                >
                  {tech}
                </a>
                {idx < article.tech.length - 1 && (
                  <span
                    style={{
                      color: "rgb(var(--foreground-rgb))",
                    }}
                  >
                    ,{" "}
                  </span>
                )}
              </span>
            ))}
          </div>
        </div>
      )}
    </Layout>
  );
}
