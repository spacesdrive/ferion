import { ArrowUpRight } from 'lucide-react';
import { formatDuration, formatMonth } from '@/lib/utils';

export function ExperienceItem({ item }) {
  const isCurrent = item.end === null;

  return (
    <article className="group grid grid-cols-[auto_1fr] gap-x-4">
      <div className="grid size-11 place-items-center overflow-hidden rounded-xl border bg-white p-1.5 shadow-xs">
        <img
          src={item.logo}
          alt=""
          width="32"
          height="32"
          loading="lazy"
          decoding="async"
          className="size-full rounded-md object-contain"
        />
      </div>

      <div className="min-w-0">
        <div className="flex flex-col gap-x-4 gap-y-1 sm:flex-row sm:items-start sm:justify-between">
          <h3 className="text-base leading-tight font-semibold">
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 decoration-muted-foreground/40 underline-offset-4 hover:underline"
            >
              {item.company}
              <ArrowUpRight
                className="size-3.5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </a>
          </h3>
          <div className="flex shrink-0 flex-col gap-0.5 sm:items-end">
            <p className="flex items-center gap-2 font-mono text-xs text-muted-foreground tabular-nums">
              {isCurrent && (
                <span className="relative flex size-1.5" aria-hidden="true">
                  <span className="absolute inset-0 animate-ping rounded-full bg-accent opacity-60 motion-reduce:animate-none" />
                  <span className="relative size-1.5 rounded-full bg-accent" />
                </span>
              )}
              <time dateTime={item.start}>{formatMonth(item.start)}</time>
              <span aria-hidden="true">—</span>
              {isCurrent ? 'Present' : <time dateTime={item.end}>{formatMonth(item.end)}</time>}
            </p>
            <p className="font-mono text-[11px] text-muted-foreground/70">
              {formatDuration(item.start, item.end)}
            </p>
          </div>
        </div>
        <p className="mt-1 text-sm text-muted-foreground">{item.role}</p>
      </div>

      <ul className="col-span-2 mt-4 space-y-1.5 sm:col-span-1 sm:col-start-2 sm:mt-3">
        {item.highlights.map((point) => (
          <li
            key={point}
            className="relative pl-4 text-sm leading-relaxed text-pretty text-muted-foreground before:absolute before:top-[0.6em] before:left-0 before:size-1 before:rounded-full before:bg-muted-foreground/50"
          >
            {point}
          </li>
        ))}
      </ul>
    </article>
  );
}
