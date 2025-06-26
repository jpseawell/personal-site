import { camelToSlug } from "@/utils";
import { about } from "./about";
import { resume } from "./resume";
import { checkIn } from "./check-in";
import { LinkItem } from "@/types/link";

export interface Article {
  title: string;
  slug: string;
  description?: string;
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

export const articlesBySlug: { [key: string]: Article } = Object.values(
  articles
).reduce((acc, article) => {
  acc[article.slug] = article;
  return acc;
}, {} as { [key: string]: Article });

export function searchArticlesByKeyword(searchTerm: string): Article[] {
  if (!searchTerm) return [];
  const lower = searchTerm.toLowerCase();
  return Object.values(articlesBySlug).filter((article) =>
    article.keywords.some((keyword) => keyword.toLowerCase().includes(lower))
  );
}

export function searchArticlesByTech(searchTerm: string): Article[] {
  if (!searchTerm) return [];
  const lower = searchTerm.toLowerCase();
  return Object.values(articlesBySlug).filter((article) =>
    article.tech.some((tech) => tech.toLowerCase().includes(lower))
  );
}
