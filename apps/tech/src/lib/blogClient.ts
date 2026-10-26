import blog from '@/data/blog';
import type { BlogCategory, BlogPost, RawFeedPost } from '@/types/blog';

const isHttps = (value: unknown): value is string => typeof value === 'string' && value.startsWith('https://');

function readCategories(value: unknown): BlogCategory[] {
  if (!Array.isArray(value)) return [];
  return value.filter(
    (category): category is BlogCategory => typeof (category as BlogCategory | null)?.name === 'string',
  );
}

// the feed is ours, but it still crosses a network boundary: keep only well-formed posts with https links
export function readFeed(data: unknown): BlogPost[] {
  const posts = (data as { posts?: unknown } | null)?.posts;
  if (!Array.isArray(posts)) return [];

  return (posts as RawFeedPost[])
    .filter(post => typeof post?.title === 'string' && isHttps(post.url))
    .map(post => ({
      slug: String(post.slug ?? post.url),
      title: post.title as string,
      excerpt: typeof post.excerpt === 'string' ? post.excerpt : '',
      published_at: typeof post.published_at === 'string' ? post.published_at : null,
      reading_minutes: Number(post.reading_minutes) || null,
      url: post.url as string,
      cover_url: isHttps(post.cover_url) ? post.cover_url : null,
      categories: readCategories(post.categories),
    }));
}

// empty when the blog has no posts or can't be reached; the Writing section simply stays hidden
export async function fetchTopPosts(signal: AbortSignal): Promise<BlogPost[]> {
  const response = await fetch(blog.feed, { signal });
  if (!response.ok) return [];
  return readFeed(await response.json());
}
