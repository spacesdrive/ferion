import { useEffect, useState } from 'react';
import { blog } from '@/data/blog';

const isHttps = (value) => typeof value === 'string' && value.startsWith('https://');

// The feed is our own, but it still crosses a network boundary: keep only
// well-formed posts with https links.
function readFeed(data) {
  if (!Array.isArray(data?.posts)) return [];
  return data.posts
    .filter((post) => typeof post?.title === 'string' && isHttps(post.url))
    .map((post) => ({
      slug: String(post.slug ?? post.url),
      title: post.title,
      excerpt: typeof post.excerpt === 'string' ? post.excerpt : '',
      published_at: post.published_at ?? null,
      reading_minutes: Number(post.reading_minutes) || null,
      url: post.url,
      cover_url: isHttps(post.cover_url) ? post.cover_url : null,
      categories: Array.isArray(post.categories)
        ? post.categories.filter((category) => typeof category?.name === 'string')
        : [],
    }));
}

/** Top posts from blog.ujjwal.fyi. Empty while loading, when the blog has none, or if it can't be reached. */
export function useBlogPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    fetch(blog.feed, { signal: controller.signal })
      .then((response) => (response.ok ? response.json() : null))
      .then((data) => setPosts(readFeed(data)))
      .catch(() => {});
    return () => controller.abort();
  }, []);

  // The section only exists once posts arrive, so honour a #blog link afterwards.
  useEffect(() => {
    if (posts.length > 0 && window.location.hash === '#blog') {
      document.getElementById('blog')?.scrollIntoView();
    }
  }, [posts]);

  return posts;
}
