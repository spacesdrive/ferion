import Reveal from '@ferion/ui/motion/Reveal.tsx';
import NicheCard from '@/components/caseStudy/NicheCard';
import StatsBar from '@/components/caseStudy/StatsBar';
import Accent from '@/components/layout/Accent';
import Section from '@/components/layout/Section';
import SectionHeader from '@/components/layout/SectionHeader';
import { caseStudyTotals, nicheCases } from '@/data/caseStudy';

export default function CaseStudy() {
  const isSample = nicheCases.some(niche => niche.isSample);

  return (
    <Section id="case-study">
      <SectionHeader
        id="case-study"
        eyebrow="Social case study"
        intro="Views, followers and growth for each niche I used to share the free plugins. Sample numbers for now, the real ones are coming."
      >
        How the free plugins <Accent>found an audience</Accent>
      </SectionHeader>

      <Reveal className="mt-14">
        <StatsBar stats={caseStudyTotals} isSample={isSample} />
      </Reveal>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {nicheCases.map((niche, index) => (
          <Reveal key={niche.niche} delay={0.04 * (index % 2)} className="h-full">
            <NicheCard niche={niche} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
