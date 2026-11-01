import Reveal from '@ferion/ui/motion/Reveal.tsx';
import { Globe } from 'lucide-react';
import ButtonIcon from '@/components/layout/ButtonIcon';
import { pages } from '@/data/navigation';
import type { Site } from '@/types/content';

export interface WebsiteDetailProps {
  site: Site;
}

// one website's page: the name and type on the left, the story on the right, then the full first screen
export default function WebsiteDetail({ site }: WebsiteDetailProps) {
  const host = new URL(site.url).host;

  return (
    <article>
      <Reveal className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-end">
        <div className="flex flex-col items-start gap-5">
          <a href={pages.websites} className="text-sm text-muted underline-offset-4 hover:text-ink hover:underline">
            All websites
          </a>
          <h1 className="text-5xl leading-[1] font-medium tracking-[-0.04em] sm:text-7xl">{site.name}</h1>
          <ul className="flex flex-wrap gap-2">
            <li className="rounded-full bg-mist px-4 py-2 text-sm">{site.category}</li>
            <li className="rounded-full bg-mist px-4 py-2 text-sm">{host}</li>
          </ul>
        </div>
        <div className="flex flex-col items-start gap-6">
          <p className="text-lg leading-relaxed text-pretty text-muted">{site.description}</p>
          <a href={site.url} target="_blank" rel="noopener noreferrer" className="btn-lime">
            Visit live site
            <ButtonIcon icon={Globe} />
          </a>
        </div>
      </Reveal>

      <Reveal className="mt-12 overflow-hidden rounded-[2rem] border border-line bg-card p-2.5 sm:p-3">
        <img
          src={site.image}
          alt={`Screenshot of the first screen of ${site.name}`}
          width="1440"
          height="900"
          className="aspect-[16/10] w-full rounded-[1.6rem] object-cover"
        />
      </Reveal>
    </article>
  );
}
