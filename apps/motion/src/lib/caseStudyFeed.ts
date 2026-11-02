import { person } from '@ferion/profile';
import type { CaseStudyPost } from '@/types/content';

export const CASE_STUDY_TAG = 'motion-case-study';
export const CASE_STUDY_TAG_URL = `${person.sites.blog}/tag/${CASE_STUDY_TAG}/`;
// the blog feed returns at most 12 posts per request
const FEED_URL = `${person.sites.blog}/api/posts.json?tag=${CASE_STUDY_TAG}&limit=12`;

interface RawPost {
  slug?: unknown;
  title?: unknown;
  excerpt?: unknown;
  url?: unknown;
  cover_url?: unknown;
  published_at?: unknown;
  reading_minutes?: unknown;
}

const isHttps = (value: unknown): value is string => typeof value === 'string' && value.startsWith('https://');

// the feed is ours, but it still crosses a network boundary: keep only well-formed posts with https links
export function readCaseStudies(data: unknown): CaseStudyPost[] {
  const posts = (data as { posts?: unknown } | null)?.posts;
  if (!Array.isArray(posts)) return [];

  return (posts as RawPost[])
    .filter(post => typeof post?.title === 'string' && isHttps(post.url))
    .map(post => ({
      slug: String(post.slug ?? post.url),
      title: post.title as string,
      excerpt: typeof post.excerpt === 'string' ? post.excerpt : '',
      url: post.url as string,
      coverUrl: isHttps(post.cover_url) ? post.cover_url : null,
      publishedAt: typeof post.published_at === 'string' ? post.published_at : null,
      readingMinutes: Number(post.reading_minutes) || null,
    }));
}

export async function fetchCaseStudies(signal: AbortSignal): Promise<CaseStudyPost[]> {
  const response = await fetch(FEED_URL, { signal });
  if (!response.ok) throw new Error(`The blog feed answered ${response.status}`);
  return readCaseStudies(await response.json());
}
