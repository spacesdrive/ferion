import Reveal from '@ferion/ui/motion/Reveal.tsx';
import NicheGrid from '@/components/caseStudy/NicheGrid';
import StatsBar from '@/components/caseStudy/StatsBar';
import Accent from '@/components/layout/Accent';
import Section from '@/components/layout/Section';
import SectionHeader from '@/components/layout/SectionHeader';
import SeeAllLink from '@/components/layout/SeeAllLink';
import { caseStudyTotals, nicheCases } from '@/data/caseStudy';
import { pages } from '@/data/navigation';

const HOME_LIMIT = 2;

export default function CaseStudy() {
  const isSample = nicheCases.some(niche => niche.isSample);

  return (
    <Section id="case-study">
      <SectionHeader
        id="case-study"
        eyebrow="Case studies"
        intro="Views, followers and growth from the niches I used to share the free plugins. Sample numbers for now, the real ones are coming."
      >
        How the free plugins <Accent>found an audience</Accent>
      </SectionHeader>
      <Reveal className="mt-14">
        <StatsBar stats={caseStudyTotals} isSample={isSample} />
      </Reveal>
      <NicheGrid niches={nicheCases.slice(0, HOME_LIMIT)} />
      <SeeAllLink href={pages.caseStudies} label={`See all ${nicheCases.length} case studies`} />
    </Section>
  );
}
