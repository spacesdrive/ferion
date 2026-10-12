
export function BlogCard({ post, platform }) {
  return (
    <article className="ink-card press group relative grid overflow-hidden md:grid-cols-[minmax(0,22rem)_minmax(0,1fr)]">
      {/* The cover keeps its 16:9 frame and centers in a white column, so taller
          card bodies never crop the artwork's edges. */}
      <div className="flex items-center overflow-hidden border-b-2 border-line bg-white md:border-r-2 md:border-b-0">
        <img
          src={post.cover}
          alt=""
          width="1100"
          height="619"
          loading="lazy"
          decoding="async"
          className="mono-img aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
      </div>

      <div className="flex flex-col gap-3 p-6 sm:p-8">
        <p className="font-mono text-xs tracking-[0.08em] text-muted-foreground uppercase">
          <time>{post.published}</time>
          {post.readingTime && <> · {post.readingTime}</>}
        </p>
        <h3 className="text-[1.75rem] leading-[1.05] font-extrabold tracking-[-0.035em] text-balance sm:text-[2rem]">
          <a href={post.url} target="_blank" rel="noopener noreferrer" className="after:absolute after:inset-0">
            {post.title}
          </a>
        </h3>
        <p className="text-[16px] leading-[1.65] text-pretty text-body">{post.excerpt}</p>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-4">
          <ul className="flex flex-wrap gap-2" aria-label="Tags">
            {post.tags.map((tag) => (
              <li key={tag}>
                <span className="inline-flex rounded-full border-2 border-line px-2.5 py-0.5 font-mono text-[11px] tracking-[0.06em] uppercase">
                  {tag}
                </span>
              </li>
            ))}
          </ul>
          <span className="text-sm font-semibold underline-offset-4 group-hover:underline">Read on {platform}</span>
        </div>
      </div>
    </article>
  );
}
