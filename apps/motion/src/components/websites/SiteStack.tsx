import type { Site } from '@/types/content';
import SiteFeature from './SiteFeature';

export interface SiteStackProps {
  sites: Site[];
}

// how far each sticky card stops below the navbar, and how much of the card behind it peeks out
const STICKY_TOP_REM = 6;
const PEEK_REM = 1.25;

// cards stick and pile up like a deck from tablet width; a phone screen is shorter than a card, so there they just list
export default function SiteStack({ sites }: SiteStackProps) {
  return (
    <div className="mt-12 flex flex-col gap-8">
      {sites.map((site, index) => (
        <div key={site.url} className="md:sticky" style={{ top: `${STICKY_TOP_REM + index * PEEK_REM}rem` }}>
          <SiteFeature site={site} position={index + 1} />
        </div>
      ))}
    </div>
  );
}
