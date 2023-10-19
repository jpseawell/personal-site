import { about } from "./about";
import { resume } from "./resume";

export interface Article {
  id: number;
  date: string;
  title: string;
  content: string;
}

export const articles: { [key: string]: Article } = {
  about,
  resume,
};
