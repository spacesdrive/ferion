import cn from '@ferion/ui/lib/cn.ts';
import Reveal from '@ferion/ui/motion/Reveal.tsx';
import Container from '@/components/layout/Container';
import { websitePath } from '@/data/navigation';
import sites from '@/data/sites';

// the first tile is big, the next two stack beside it and the last three fill a row underneath
const TILE_LAYOUT = ['col-span-2 lg:row-span-2', '', '', '', '', ''];
const RECENT_COUNT = 6;

// a lime panel of the newest website screenshots, each opening that website's page
export default function RecentWorks() {
  const recent = sites.slice(0, RECENT_COUNT);

  return (
    <section aria-label="Recent works" className="pb-[clamp(2rem,5vw,4rem)]">
      <Container className="max-w-7xl">
        <Reveal className="relative rounded-[2rem] bg-lime p-3 sm:p-4">
          <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
            {recent.map((site, index) => (
              <li key={site.slug} className={cn('group relative', TILE_LAYOUT[index])}>
                <a href={websitePath(site.slug)} className="block overflow-hidden rounded-[1.4rem] bg-card">
                  <img
                    src={site.image}
                    alt={`Screenshot of ${site.name}`}
                    width="1440"
                    height="900"
                    loading="lazy"
                    className="aspect-[16/10] size-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04] motion-reduce:transition-none"
                  />
                  <span className="absolute bottom-3 left-3 translate-y-2 rounded-full bg-card px-3.5 py-1.5 text-sm font-medium text-ink opacity-0 shadow-md transition group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100">
                    {site.name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-6 lg:top-2/3 lg:left-2/3 rounded-full bg-card px-5 py-2.5 font-serif text-xl text-ink italic shadow-lg sm:text-2xl"
          >
            Recent works
          </span>
        </Reveal>
      </Container>
    </section>
  );
}
