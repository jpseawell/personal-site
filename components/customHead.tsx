import { content } from "@/data/content";
import Head from "next/head";

type CustomHeadProps = {
  title?: string;
  description?: string;
  ogImage?: string;
  slug?: string;
};

export default function CustomHead({
  title,
  description,
  ogImage,
  slug = "",
}: CustomHeadProps) {
  const img = `https://justinseawell.com${ogImage || content.metaData.image}`;

  return (
    <Head>
      <title>{title || content.metaData.title}</title>
      <meta
        property="og:title"
        content={title || content.metaData.title}
        key="title"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="64x64"
        href="/favicon-64x64.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="512x512"
        href="/android-icon-512x512.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <meta
        property="og:description"
        content={description || content.metaData.description}
      />
      <meta property="og:image" content={img} />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="justinseawell.com" />
      <meta
        property="twitter:url"
        content={`https://justinseawell.com/${slug}`}
      />
      <meta name="twitter:image" content={img} />
    </Head>
  );
}
