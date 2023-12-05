import { Article } from ".";
import { content } from "../content";

export const resume: Article = {
  date: "2023-06-14T15:00:00-05:00",
  title: "My Resumé 📄",
  content: `<p>Hey there! Here's a list of places I've worked:</p><ul><li><span class='font-semibold'>FullStack Labs</span> - Senior Software Engineer <i>(present)</i></li><li><span class='font-semibold'>TPS Alert</span> - Software Developer</li><li><span class='font-semibold'>Spherexx.com</span> - Web Application Developer</li></ul><p>For more info checkout my <a href='${content.linkedIn}' class="link" target="_blank">LinkedIn Profile</a>!</p>`,
};
