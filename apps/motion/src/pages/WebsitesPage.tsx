import Accent from '@/components/layout/Accent';
import PageShell from '@/components/layout/PageShell';
import Section from '@/components/layout/Section';
import SectionHeader from '@/components/layout/SectionHeader';
import SiteStack from '@/components/websites/SiteStack';
import sites from '@/data/sites';

export default function WebsitesPage() {
  return (
    <PageShell>
      <Section id="websites" className="pt-12 sm:pt-16">
        <SectionHeader
          id="websites"
          level="h1"
          eyebrow="Web design"
          intro="Every site I've designed and built. All of them are live, so open one and click around."
        >
          Every website, <Accent>designed and built</Accent> by me
        </SectionHeader>
        <SiteStack sites={sites} />
      </Section>
    </PageShell>
  );
}
