import { ArrowUpRight } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

export function BlogCard({ post, platform }) {
  return (
    <article className="group relative grid overflow-hidden rounded-2xl border bg-card transition-[border-color,box-shadow] duration-300 hover:border-foreground/20 hover:shadow-lg hover:shadow-foreground/5 sm:grid-cols-[16rem_1fr] sm:items-center">
      <div className="aspect-video overflow-hidden border-b bg-muted sm:my-4 sm:ml-4 sm:rounded-xl sm:border">
        <img
          src={post.cover}
          alt=""
          loading="lazy"
          decoding="async"
          className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
      </div>

      <div className="flex flex-col p-5">
        <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-muted-foreground">
          <time>{post.published}</time>
          {post.readingTime && (
            <>
              <span aria-hidden="true">·</span>
              <span>{post.readingTime}</span>
            </>
          )}
        </div>

        <h3 className="mt-2 text-lg leading-snug font-semibold tracking-tight">
          <a href={post.url} target="_blank" rel="noopener noreferrer" className="after:absolute after:inset-0">
            {post.title}
          </a>
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-pretty text-muted-foreground">{post.excerpt}</p>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 pt-1">
          <ul className="flex flex-wrap gap-1" aria-label="Tags">
            {post.tags.map((tag) => (
              <li key={tag}>
                <Badge>{tag}</Badge>
              </li>
            ))}
          </ul>
          <span className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground transition-colors group-hover:text-foreground">
            Read on {platform}
            <ArrowUpRight
              className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </span>
        </div>
      </div>
    </article>
  );
}
