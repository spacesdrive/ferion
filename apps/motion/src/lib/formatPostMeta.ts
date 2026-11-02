const DATE_FORMAT = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

// the publish date and reading time joined by a dot, leaving out whichever part the post does not have
export default function formatPostMeta(publishedAt: string | null, readingMinutes: number | null): string {
  const parts: string[] = [];
  if (publishedAt) parts.push(DATE_FORMAT.format(new Date(publishedAt)));
  if (readingMinutes) parts.push(`${readingMinutes} min read`);
  return parts.join(' · ');
}
