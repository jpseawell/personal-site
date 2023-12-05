export interface Post {
  id: number;
  date: string;
  content: string;
  pinned?: boolean;
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
    id: 4,
    date: "2023-12-05T22:34:32.027Z",
    pinned: false,
    content:
      '🎄🎅🏻👨‍💻 Ho Ho Ho!<br /><br />This year I decided to try my hand at <a href="https://adventofcode.com/2023" target="_blank" class="link">Advent of Code</a>. It\'s a daily coding problem from the 1st of Dec. until Christmas. I\'ll be documenting my progess here and <a href="https://github.com/jpseawell/aoc" class="link" target="_blank">on Github</a> along the way!',
  },
  {
    id: 3,
    date: "2023-11-07T16:51:59.165Z",
    pinned: false,
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
    pinned: false,
    content:
      "I've been listening to <a href='https://twitter.com/ThePrimeagen' target='_blank' class='link'>@ThePrimeagen</a> a lot lately and he mentioned that no one he interviewed knew how to write an async queue in JS <i>(ok I know this is TS)</i>:",
    showcase: {
      gistId: "14bab371122359143cc97686f9eda572",
    },
  },
];
