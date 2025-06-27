import Layout from "@/components/layout";
import Profile from "@/components/profile";
import ShowcaseSlider from "@/components/showcaseSlider";
import Link from "next/link";
import Links from "@/components/links";
import SearchBar from "@/components/searchBar";

import { GetStaticProps, InferGetStaticPropsType } from "next";
import { LinkItem } from "@/types/link";

interface ShowcaseSliderItem {
  imageUrl: string;
  link: string;
  content: string; // Use * to mark highlight
  highlightClass: string;
}

interface HomePageProps {
  introText: string;
  showcaseItems: ShowcaseSliderItem[];
  links: LinkItem[];
}

export const getStaticProps = (() => {
  const introText =
    "I'm a full-stack engineer turning complex ideas into fast, reliable products that users love.";

  const showcaseItems: ShowcaseSliderItem[] = [
    {
      imageUrl: "/images/vegas-check-in-opt.webp",
      link: "/check-in",
      content: "I built the Web Check In flow for *MGM Resorts* from scratch.",
      highlightClass: "text-amber-400",
    },
    {
      imageUrl: "/images/trips-web-opt.png",
      link: "/trips",
      content:
        "Building a way for guests to view their trips at *MGM Resorts*.",
      highlightClass: "text-amber-400",
    },
  ];

  const links: LinkItem[] = [
    { href: "/resume", label: "Resume" },
    { href: "/about", label: "About Me" },
  ];

  return { props: { introText, showcaseItems, links } };
}) satisfies GetStaticProps<HomePageProps>;

export default function Home({
  introText,
  showcaseItems,
  links,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <Profile />
      <SearchBar />
      <div className="md:text-lg">{introText}</div>
      <div>
        <ShowcaseSlider
          items={showcaseItems.map((item) => {
            const parts = item.content.split("*");
            return {
              imageUrl: item.imageUrl,
              link: item.link,
              children: (
                <>
                  {parts[0]}
                  <span className={item.highlightClass}>{parts[1]}</span>
                  {parts[2]}
                </>
              ),
            };
          })}
        />
      </div>
      <div>
        <Links links={links} />
      </div>
    </Layout>
  );
}
