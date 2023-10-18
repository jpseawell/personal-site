import { Article } from "../types";
import { about } from "./about";
import { resume } from "./resume";

export const articles: { [key: string]: Article } = {
  about,
  resume,
};
