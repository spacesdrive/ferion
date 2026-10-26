import cn from '@ferion/ui/lib/cn.ts';
import Reveal from '@ferion/ui/motion/Reveal.tsx';
import type { Site } from '@/types/content';
import SiteCard from './SiteCard';

export interface SiteGridProps {
  sites: Site[];
}

// the right column starts lower, so the grid reads as staggered like the designer-pop template
export default function SiteGrid({ sites }: SiteGridProps) {
  return (
    <div className="mt-14 grid gap-x-10 gap-y-14 md:grid-cols-2">
      {sites.map((site, index) => (
        <Reveal key={site.url} delay={0.05 * (index % 2)} className={cn(index % 2 === 1 && 'md:translate-y-20')}>
          <SiteCard site={site} />
        </Reveal>
      ))}
    </div>
  );
}
