import { POSTS_PER_PAGE } from "@/config";
import { Post, posts } from "@/data/posts";

function walk(post: Post, repliesTo: { [key: number]: Post }, sorted: Post[]) {
  // Base Case:
  if (!repliesTo[post.id]) return;

  // Recursive Case:
  const reply = repliesTo[post.id];
  sorted.push(reply);

  walk(reply, repliesTo, sorted);
}

export function sortPosts(posts: Post[]) {
  const repliesTo: { [key: number]: Post } = {};

  const sorted: Post[] = [];
  for (const post of posts) {
    if (post.prev) {
      repliesTo[post.prev] = post;
      continue;
    }

    sorted.push(post);
    walk(post, repliesTo, sorted);
  }

  return sorted;
}

export function filterPosts(posts: Post[], limitPerPage: number): Post[] {
  const filtered = [];
  let counter = 0;

  for (const p of posts) {
    if (counter > limitPerPage && !p.prev) break;
    counter++;
    filtered.push(p);
  }

  return filtered;
}

export function getPosts(page: number = 1): Post[] {
  const allPosts = [...posts];
  const start = page === 1 ? 0 : (page - 1) * POSTS_PER_PAGE + 1;
  const end = page * POSTS_PER_PAGE;
  const buffer = end + POSTS_PER_PAGE; // TODO: FIX - This assumes all replies will be in the next page worth of posts which is not true
  const sorted = sortPosts(allPosts.slice(start, buffer)); // move replies under primary posts
  const filtered = filterPosts(sorted, POSTS_PER_PAGE);
  return filtered;
}
