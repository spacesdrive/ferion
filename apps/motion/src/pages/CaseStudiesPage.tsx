import Reveal from '@ferion/ui/motion/Reveal.tsx';
import NicheGrid from '@/components/caseStudy/NicheGrid';
import StatsBar from '@/components/caseStudy/StatsBar';
import Accent from '@/components/layout/Accent';
import PageShell from '@/components/layout/PageShell';
import Section from '@/components/layout/Section';
import SectionHeader from '@/components/layout/SectionHeader';
import { caseStudyTotals, nicheCases } from '@/data/caseStudy';

export default function CaseStudiesPage() {
  const isSample = nicheCases.some(niche => niche.isSample);

  return (
    <PageShell>
      <Section id="case-studies" className="pt-12 sm:pt-16">
        <SectionHeader
          id="case-studies"
          level="h1"
          eyebrow="Case studies"
          intro="Views, followers and growth for each niche I used to share the free plugins. Sample numbers for now, the real ones are coming."
        >
          How the free plugins <Accent>found an audience</Accent>
        </SectionHeader>
        <Reveal className="mt-14">
          <StatsBar stats={caseStudyTotals} isSample={isSample} />
        </Reveal>
        <NicheGrid niches={nicheCases} />
      </Section>
    </PageShell>
  );
}
