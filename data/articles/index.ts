import { camelToSlug } from "@/utils";
import { about } from "./about";
import { resume } from "./resume";

export type Progress = "In Progress" | "Completed";
export interface Article {
  date: string;
  title: string;
  content: string;
  progress?: Progress;
}

const articles: { [key: string]: Article } = {
  about,
  resume,
};

export const articlesBySlug: { [key: string]: Article } = Object.keys(
  articles
).reduce((acc, key) => {
  const slug = camelToSlug(key);
  acc[slug] = articles[key];
  return acc;
}, {} as { [key: string]: Article });
