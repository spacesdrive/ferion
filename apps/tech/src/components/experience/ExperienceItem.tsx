import type { Experience } from '@/data/experience';
import { formatDuration, formatMonth } from '@/lib/formatDate';

export interface ExperienceItemProps {
  item: Experience;
}

export default function ExperienceItem({ item }: ExperienceItemProps) {
  const isCurrent = item.end === null;

  return (
    <article className="ink-card grid gap-6 p-6 sm:p-8 lg:grid-cols-[17rem_minmax(0,1fr)] lg:gap-10">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between gap-3">
          <div className="grid size-14 place-items-center overflow-hidden rounded-2xl border-2 border-line bg-[#fffffc] p-2">
            <img
              src={item.logo}
              alt=""
              width="40"
              height="40"
              loading="lazy"
              decoding="async"
              className="mono-img size-full rounded-md object-contain"
            />
          </div>
          {isCurrent && (
            <span className="ink-pill px-2.5 py-1 font-mono text-[11px] font-medium tracking-[0.08em] uppercase">
              <span className="relative flex size-1.5" aria-hidden="true">
                <span className="absolute inset-0 animate-ping rounded-full bg-foreground opacity-50 motion-reduce:animate-none" />
                <span className="relative size-1.5 rounded-full bg-foreground" />
              </span>
              Now
            </span>
          )}
        </div>

        <div>
          <h3 className="text-2xl leading-tight font-extrabold tracking-[-0.03em]">
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="decoration-2 underline-offset-4 hover:underline"
            >
              {item.company}
            </a>
          </h3>
          <p className="mt-1 text-base text-body">{item.role}</p>
        </div>

        <dl className="flex flex-col gap-1 font-mono text-xs tracking-[0.06em] uppercase">
          <div>
            <dt className="sr-only">Period</dt>
            <dd>
              <time dateTime={item.start}>{formatMonth(item.start)}</time> to{' '}
              {item.end ? <time dateTime={item.end}>{formatMonth(item.end)}</time> : 'Present'}
            </dd>
          </div>
          <div>
            <dt className="sr-only">Duration</dt>
            <dd className="text-muted-foreground">{formatDuration(item.start, item.end)}</dd>
          </div>
        </dl>
      </div>

      <ul className="flex flex-col gap-3 border-t border-rule pt-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
        {item.highlights.map(point => (
          <li
            key={point}
            className="relative pl-5 text-[16px] leading-[1.65] text-pretty text-body before:absolute before:top-[0.62em] before:left-0 before:size-[7px] before:rounded-full before:bg-foreground"
          >
            {point}
          </li>
        ))}
      </ul>
    </article>
  );
}
