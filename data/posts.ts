export interface Post {
  id: number;
  date: string;
  content: string;
  pinned?: boolean;
  showcase?: {
    gistId?: string;
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
