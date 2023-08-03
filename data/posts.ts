export interface Post {
  id: number;
  date: string;
  content: string;
  pinned?: boolean;
}

export const posts: Post[] = [
  {
    id: 1,
    date: "6/14/23",
    pinned: true,
    content:
      "Hello, welcome to my website. I post here about topics I'm interested in, and projects I'm working on. 🔗 About Me 🔗 Resume",
  },
];
