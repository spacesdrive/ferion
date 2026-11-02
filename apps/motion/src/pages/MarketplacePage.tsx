import Accent from '@/components/layout/Accent';
import PageShell from '@/components/layout/PageShell';
import Section from '@/components/layout/Section';
import SectionHeader from '@/components/layout/SectionHeader';
import MarketplaceGrid from '@/components/marketplace/MarketplaceGrid';
import marketplace from '@/data/marketplace';

export default function MarketplacePage() {
  return (
    <PageShell>
      <Section id="marketplace" className="pt-12 sm:pt-16">
        <SectionHeader
          id="marketplace"
          level="h1"
          eyebrow="Marketplace"
          intro="Every site and tool I use for sound, 3D, textures, fonts and motion, with a short note on what each one does."
        >
          Useful stuff for <Accent>design and marketing</Accent>
        </SectionHeader>
        <MarketplaceGrid links={marketplace} />
      </Section>
    </PageShell>
  );
}
