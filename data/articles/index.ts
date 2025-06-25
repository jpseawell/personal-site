import { camelToSlug } from "@/utils";
import { about } from "./about";
import { resume } from "./resume";
import { checkIn } from "./check-in";
import { LinkItem } from "@/types/link";

export interface Article {
  title: string;
  content: string;
  bannerImg?: {
    path: string;
    alt?: string;
  };
  keywords: string[];
  tech: string[];
  links: LinkItem[];
}

const articles: { [key: string]: Article } = {
  about,
  resume,
  checkIn,
};

export const articlesBySlug: { [key: string]: Article } = Object.keys(
  articles
).reduce((acc, key) => {
  const slug = camelToSlug(key);
  acc[slug] = articles[key];
  return acc;
}, {} as { [key: string]: Article });
