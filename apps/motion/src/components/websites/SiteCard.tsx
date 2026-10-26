import { ArrowUpRight } from 'lucide-react';
import type { Site } from '@/types/content';

export interface SiteCardProps {
  site: Site;
}

// the designer-pop project card: a framed screenshot, an italic name and a mono category
export default function SiteCard({ site }: SiteCardProps) {
  const host = new URL(site.url).host;

  return (
    <article className="group relative flex flex-col gap-3">
      <div className="overflow-hidden rounded-2xl border-[6px] border-ink bg-ink">
        <img
          src={site.image}
          alt={`Screenshot of ${site.name}`}
          width="1200"
          height="750"
          loading="lazy"
          className="aspect-[16/10] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none"
        />
      </div>
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="serif-accent text-2xl">
          <a href={site.url} target="_blank" rel="noopener noreferrer" className="after:absolute after:inset-0">
            {site.name}
          </a>
        </h3>
        <span className="font-mono text-[10px] tracking-[0.14em] text-muted uppercase">{site.category}</span>
      </div>
      <p className="text-sm leading-relaxed text-muted">{site.description}</p>
      <p className="flex items-center gap-1 font-mono text-[11px] tracking-[0.08em] uppercase">
        {host}
        <ArrowUpRight
          className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
      </p>
    </article>
  );
}
