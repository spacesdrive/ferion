import Accent from '@/components/layout/Accent';
import PageShell from '@/components/layout/PageShell';
import Section from '@/components/layout/Section';
import SectionHeader from '@/components/layout/SectionHeader';
import SiteGrid from '@/components/websites/SiteGrid';
import sites from '@/data/sites';

export default function WebsitesPage() {
  return (
    <PageShell>
      {/* extra bottom room, because the staggered column hangs below the grid */}
      <Section id="websites" className="pt-12 pb-[clamp(8rem,12vw,11rem)] sm:pt-16">
        <SectionHeader
          id="websites"
          level="h1"
          eyebrow="Web design"
          intro="Every site I've designed and built. All of them are live, so open one and click around."
        >
          Every website, <Accent>designed and built</Accent> by me
        </SectionHeader>
        <SiteGrid sites={sites} />
      </Section>
    </PageShell>
  );
}
