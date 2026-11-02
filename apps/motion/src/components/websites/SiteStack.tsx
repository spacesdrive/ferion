import type { Site } from '@/types/content';
import SiteFeature from './SiteFeature';

export interface SiteStackProps {
  sites: Site[];
}

// how far each sticky card stops below the navbar, and how much of the card behind it peeks out
const STICKY_TOP_REM = 6;
const PEEK_REM = 1.25;
// after three peeks the rest stop on the same line, so a long list never pushes a card off the bottom
const MAX_PEEKS = 3;

// cards pile up like a deck on screens wide and tall enough to hold one; elsewhere they just list
export default function SiteStack({ sites }: SiteStackProps) {
  return (
    <div className="mt-12 flex flex-col gap-8">
      {sites.map((site, index) => (
        <div
          key={site.url}
          className="md:[@media(min-height:36rem)]:sticky"
          style={{ top: `${STICKY_TOP_REM + Math.min(index, MAX_PEEKS) * PEEK_REM}rem` }}
        >
          <SiteFeature site={site} position={index + 1} />
        </div>
      ))}
    </div>
  );
}
