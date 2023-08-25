export interface Post {
  id: number;
  date: string;
  content: string;
  pinned?: boolean;
}

export const posts: Post[] = [
  {
    id: 1,
    date: "2023-06-14T15:00:00-05:00",
    pinned: true,
    content:
      'Hello, welcome to my website. I post here about topics I\'m interested in, and projects I\'m working on. 🔗 <a href="/about" class="text-orange-600">About Me</a> 🔗 <a href="/resume" class="text-orange-600">Resumé</a>',
  },
  {
    id: 2,
    date: "2023-08-25T11:51:00-05:00",
    pinned: false,
    content: "I wrote this while streaming on Twitch!! 📡",
  },
];
