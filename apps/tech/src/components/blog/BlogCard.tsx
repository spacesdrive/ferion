import type { BlogPost } from '@/types/blog';
import BlogCover from './BlogCover';

const dateFormat = new Intl.DateTimeFormat('en', { month: 'short', year: 'numeric', timeZone: 'UTC' });

export interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const published = post.published_at ? new Date(post.published_at) : null;

  return (
    <article className="ink-card press group relative flex h-full flex-col overflow-hidden">
      <BlogCover post={post} />

      <div className="flex flex-1 flex-col gap-3 p-6 sm:p-7">
        <p className="font-mono text-xs tracking-[0.08em] text-muted-foreground uppercase">
          {published && <time dateTime={post.published_at ?? undefined}>{dateFormat.format(published)}</time>}
          {post.reading_minutes && <> · {post.reading_minutes} min read</>}
        </p>
        <h3 className="text-[1.6rem] leading-[1.05] font-extrabold tracking-[-0.035em] text-balance sm:text-[1.75rem]">
          <a href={post.url} target="_blank" rel="noopener noreferrer" className="after:absolute after:inset-0">
            {post.title}
          </a>
        </h3>
        {post.excerpt && (
          <p className="line-clamp-3 text-[16px] leading-[1.65] text-pretty text-body">{post.excerpt}</p>
        )}

        <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-4">
          {post.categories.length > 0 && (
            <ul className="flex flex-wrap gap-2" aria-label="Categories">
              {post.categories.map(category => (
                <li key={category.name}>
                  <span className="inline-flex rounded-full border-2 border-line px-2.5 py-0.5 font-mono text-[11px] tracking-[0.06em] uppercase">
                    {category.name}
                  </span>
                </li>
              ))}
            </ul>
          )}
          <span className="ml-auto text-sm font-semibold underline-offset-4 group-hover:underline">
            Read on the blog
          </span>
        </div>
      </div>
    </article>
  );
}
