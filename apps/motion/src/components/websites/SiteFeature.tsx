import { websitePath } from '@/data/navigation';
import type { Site } from '@/types/content';

export interface SiteFeatureProps {
  site: Site;
  position: number;
}

// a big centered screenshot of the whole first screen, with the name and type underneath; the card opens the site's page
export default function SiteFeature({ site, position }: SiteFeatureProps) {
  const host = new URL(site.url).host;

  return (
    <article className="group relative rounded-[2rem] border border-line bg-card p-2.5 shadow-[0_-12px_40px_rgb(0_0_0/0.06)] sm:p-3">
      {/* the frame height follows the screen, so a stacked card always fits under the navbar */}
      <div className="flex justify-center overflow-hidden rounded-[1.6rem] bg-mist md:h-[min(70vh,44rem)]">
        <img
          src={site.image}
          alt={`Screenshot of ${site.name}`}
          width="1440"
          height="900"
          loading="lazy"
          className="aspect-[16/10] h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.02] motion-reduce:transition-none md:h-full md:w-auto md:max-w-full md:rounded-[1.2rem]"
        />
      </div>

      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 px-3 pt-5 pb-3 sm:px-4">
        <div className="flex min-w-0 items-baseline gap-4">
          <span className="font-mono text-xs text-muted">({String(position).padStart(2, '0')})</span>
          <div className="min-w-0">
            <h3 className="text-2xl font-medium tracking-[-0.02em] sm:text-3xl">
              <a href={websitePath(site.slug)} className="after:absolute after:inset-0 after:rounded-[2rem]">
                {site.name}
              </a>
            </h3>
            <p className="mt-1 text-sm text-muted">{host}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-2 rounded-full bg-mist px-3 py-1.5 text-sm">
            <span aria-hidden="true" className="size-2 rounded-full bg-sky" />
            {site.category}
          </span>
          {/* a real link raised above the card's own, so a hover effect on it can never swallow the click */}
          <a
            href={websitePath(site.slug)}
            tabIndex={-1}
            aria-hidden="true"
            className="btn-lime relative z-10 group-hover:brightness-95"
          >
            View project
          </a>
        </div>
      </div>
    </article>
  );
}
