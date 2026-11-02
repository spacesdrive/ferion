import Reveal from '@ferion/ui/motion/Reveal.tsx';
import CaseStudyFeed from '@/components/caseStudy/CaseStudyFeed';
import StatsBar from '@/components/caseStudy/StatsBar';
import Accent from '@/components/layout/Accent';
import PageShell from '@/components/layout/PageShell';
import Section from '@/components/layout/Section';
import SectionHeader from '@/components/layout/SectionHeader';
import growthStats from '@/data/growthStats';

export default function CaseStudiesPage() {
  return (
    <PageShell>
      <Section id="case-studies" className="pt-12 sm:pt-16">
        <SectionHeader
          id="case-studies"
          level="h1"
          eyebrow="Case studies"
          intro="Every case study from my blog: what I did, the numbers it brought and what I would do again."
        >
          My growth <Accent>strategies</Accent>
        </SectionHeader>
        <Reveal className="mt-14">
          <StatsBar stats={growthStats} />
        </Reveal>
        <CaseStudyFeed />
      </Section>
    </PageShell>
  );
}
