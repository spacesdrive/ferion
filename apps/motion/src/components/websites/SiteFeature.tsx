import { Globe } from 'lucide-react';
import ButtonIcon from '@/components/layout/ButtonIcon';
import type { Site } from '@/types/content';

export interface SiteFeatureProps {
  site: Site;
  position: number;
}

// a wide project card: the story on the left, the screenshot on the right
export default function SiteFeature({ site, position }: SiteFeatureProps) {
  const host = new URL(site.url).host;

  return (
    <article className="grid overflow-hidden rounded-[2rem] border border-line bg-card shadow-[0_-12px_40px_rgb(0_0_0/0.06)] md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
      <div className="flex flex-col gap-6 p-7 sm:p-10">
        <span className="font-mono text-xs text-muted">({String(position).padStart(2, '0')})</span>
        <div>
          <h3 className="text-3xl font-medium tracking-[-0.03em] sm:text-4xl">{site.name}</h3>
          <p className="mt-3 leading-relaxed text-pretty text-muted">{site.description}</p>
        </div>

        <dl className="flex flex-col divide-y divide-line border-y border-line">
          <div className="flex flex-col gap-1.5 py-4">
            <dt className="text-sm text-muted">Type:</dt>
            <dd className="flex items-center gap-2 font-medium">
              <span aria-hidden="true" className="size-2 rounded-full bg-sky" />
              {site.category}
            </dd>
          </div>
          <div className="flex flex-col gap-1.5 py-4">
            <dt className="text-sm text-muted">Address:</dt>
            <dd className="font-medium break-all">{host}</dd>
          </div>
        </dl>

        <a
          href={site.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${site.name}`}
          className="btn-lime mt-auto self-start"
        >
          Visit site
          <ButtonIcon icon={Globe} />
        </a>
      </div>

      <div className="order-first p-2 md:order-none md:pl-0">
        <img
          src={site.image}
          alt={`Screenshot of ${site.name}`}
          width="1200"
          height="750"
          loading="lazy"
          className="aspect-[16/10] size-full rounded-[1.6rem] object-cover object-top"
        />
      </div>
    </article>
  );
}
