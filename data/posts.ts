export interface Post {
  id: number;
  date: string;
  content: string;
  pinned?: boolean;
  prev?: number;
  next?: number;
  showcase?: {
    gistId?: string;
    image?: {
      src: string;
      alt: string;
      width: number;
      height: number;
    };
  };
}

export const posts: Post[] = [
  // Pinned
  {
    id: 1,
    date: "2023-10-18T20:26:19.930Z",
    pinned: true,
    content:
      'Hello, welcome to my website. I post here about topics I\'m interested in, and projects I\'m working on. <br /><br />🔗 <a href="/about" class="link">About Me</a> <br />🔗 <a href="/resume" class="link">Resumé</a>',
  },
  // Not Pinned
  {
    id: 9,
    date: "2024-02-16T14:31:17.203Z",
    content:
      "I want to post more content here, but I've been very busy with a work project. New projects & posts soon! 👨‍💻",
  },
  {
    id: 8,
    prev: 6,
    date: "2023-12-26T22:34:32.027Z",
    content:
      'I want to go back and do a full write up on <a href="https://github.com/jpseawell/aoc/blob/main/2023/5.ts" class="link" target="_blank">Day 5</a> though.',
  },
  {
    id: 6,
    prev: 4,
    next: 8,
    date: "2023-12-26T02:34:32.027Z",
    content: "I only made it to day 12 💀",
  },
  {
    id: 5,
    date: "2023-12-25T22:34:32.027Z",
    content: "Merry Christmas!",
  },
  {
    id: 4,
    date: "2023-12-05T22:34:32.027Z",
    next: 6,
    content:
      '🎄🎅🏻👨‍💻 Ho Ho Ho!<br /><br />This year I decided to try my hand at <a href="https://adventofcode.com/2023" target="_blank" class="link">Advent of Code</a>. It\'s a daily coding problem from the 1st of Dec. until Christmas. I\'ll be documenting my progess here and <a href="https://github.com/jpseawell/aoc/tree/main/2023" class="link" target="_blank">on Github</a> along the way!',
  },
  {
    id: 3,
    date: "2023-11-07T16:51:59.165Z",
    content:
      "Still a bit of progress to be made on this front. Perhaps someone will create a GPT for teaching data structures.",
    showcase: {
      image: {
        src: "/linked-list.jpeg",
        alt: "Screenshot of DALL-E 3 generating a Linked List diagram",
        width: 828,
        height: 491,
      },
    },
  },
  {
    id: 2,
    date: "2023-10-20T18:17:52.651Z",
    content:
      "I've been listening to <a href='https://twitter.com/ThePrimeagen' target='_blank' class='link'>@ThePrimeagen</a> a lot lately and he mentioned that no one he interviewed knew how to write an async queue in JS <i>(ok I know this is TS)</i>:",
    showcase: {
      gistId: "14bab371122359143cc97686f9eda572",
    },
  },
];

export const postsById: { [key: number]: Post } = Object.fromEntries(
  posts.map((p) => [p.id, p])
);
