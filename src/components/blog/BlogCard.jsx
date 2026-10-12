import markSticker from '@/assets/brand/mark-sticker.webp';

const dateFormat = new Intl.DateTimeFormat('en', { month: 'short', year: 'numeric', timeZone: 'UTC' });

function Cover({ post }) {
  if (post.cover_url) {
    return (
      // The cover keeps its 16:9 frame on white, so artwork edges never crop.
      <div className="overflow-hidden border-b-2 border-line bg-white">
        <img
          src={post.cover_url}
          alt=""
          width="1100"
          height="619"
          loading="lazy"
          decoding="async"
          className="mono-img aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
      </div>
    );
  }

  // No cover: the same brand cover blog.ujjwal.fyi draws (title, sticker, dot paper).
  return (
    <div
      aria-hidden="true"
      className="dot-paper flex aspect-video items-center gap-[6%] border-b-2 border-line bg-background px-[7%]"
    >
      <p className="line-clamp-4 flex-1 text-[clamp(1.25rem,2.4vw,2rem)] leading-[1.02] font-extrabold tracking-[-0.045em] text-balance">
        {post.title}
      </p>
      <div className="relative w-[30%] shrink-0">
        <img
          src={markSticker}
          alt=""
          width="640"
          height="653"
          decoding="async"
          className="w-full -rotate-6 drop-shadow-[0_8px_0_rgb(18_18_18/0.14)] transition-transform duration-300 group-hover:rotate-0 motion-reduce:transition-none"
        />
        <span className="absolute -top-[8%] -right-[6%] rotate-[14deg] font-note text-[clamp(1.5rem,3vw,2.5rem)] leading-none">
          ?
        </span>
      </div>
    </div>
  );
}

export function BlogCard({ post }) {
  const published = post.published_at ? new Date(post.published_at) : null;

  return (
    <article className="ink-card press group relative flex h-full flex-col overflow-hidden">
      <Cover post={post} />

      <div className="flex flex-1 flex-col gap-3 p-6 sm:p-7">
        <p className="font-mono text-xs tracking-[0.08em] text-muted-foreground uppercase">
          {published && <time dateTime={post.published_at}>{dateFormat.format(published)}</time>}
          {post.reading_minutes ? <> · {post.reading_minutes} min read</> : null}
        </p>
        <h3 className="text-[1.6rem] leading-[1.05] font-extrabold tracking-[-0.035em] text-balance sm:text-[1.75rem]">
          <a href={post.url} target="_blank" rel="noopener noreferrer" className="after:absolute after:inset-0">
            {post.title}
          </a>
        </h3>
        {post.excerpt && <p className="line-clamp-3 text-[16px] leading-[1.65] text-pretty text-body">{post.excerpt}</p>}

        <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-4">
          {post.categories.length > 0 && (
            <ul className="flex flex-wrap gap-2" aria-label="Categories">
              {post.categories.map((category) => (
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
