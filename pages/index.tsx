import Layout from "@/components/layout";
import Profile from "@/components/profile";
import ShowcaseSlider from "@/components/showcaseSlider";
import Link from "next/link";
import Links from "@/components/links";

import { GetStaticProps, InferGetStaticPropsType } from "next";
import { LinkItem } from "@/types/link";

interface ShowcaseSliderItem {
  imageUrl: string;
  link: string;
  title: string;
  highlight: string;
  highlightClass: string;
  subtitle?: string;
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
      title: "I built the Web Check In flow for",
      highlight: "MGM Resorts",
      highlightClass: "text-amber-400",
      subtitle: "from scratch.",
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
      <div className="bg-gradient-to-r from-amber-400 via-emerald-400 to-blue-400 p-[2px] rounded-xl w-full max-w-xl">
        <div className="bg-stone-50 rounded-[10px] p-4">
          <span className="font-['IBM_Plex_Mono',monospace] text-base md:text-lg text-gray-800">
            Search
          </span>
        </div>
      </div>

      <div className="md:text-lg">{introText}</div>
      <div>
        <ShowcaseSlider
          items={showcaseItems.map((item) => ({
            imageUrl: item.imageUrl,
            link: item.link,
            children: (
              <>
                {item.title}
                <br />
                <span className={item.highlightClass}>{item.highlight}</span>
                {item.subtitle && <> {item.subtitle}</>}
              </>
            ),
          }))}
        />
      </div>
      <div>
        <Links links={links} />
      </div>
    </Layout>
  );
}
