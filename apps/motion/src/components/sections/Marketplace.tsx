import Accent from '@/components/layout/Accent';
import Section from '@/components/layout/Section';
import SectionHeader from '@/components/layout/SectionHeader';
import SeeAllLink from '@/components/layout/SeeAllLink';
import MarketplaceGrid from '@/components/marketplace/MarketplaceGrid';
import marketplace from '@/data/marketplace';
import { pages } from '@/data/navigation';

// one row of three; the rest live on the marketplace page
const HOME_LIMIT = 3;

export default function Marketplace() {
  return (
    <Section id="marketplace">
      <SectionHeader
        id="marketplace"
        index="03"
        eyebrow="Marketplace"
        intro="Sites and tools I use for sound, 3D, textures, fonts and motion. Each one has a short note on what it does."
      >
        Useful stuff for <Accent>design and marketing</Accent>
      </SectionHeader>
      <MarketplaceGrid links={marketplace.slice(0, HOME_LIMIT)} />
      <SeeAllLink href={pages.marketplace} label={`See all ${marketplace.length} links`} />
    </Section>
  );
}
