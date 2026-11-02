import Reveal from '@ferion/ui/motion/Reveal.tsx';
import CaseStudyFeed from '@/components/caseStudy/CaseStudyFeed';
import StatsBar from '@/components/caseStudy/StatsBar';
import Accent from '@/components/layout/Accent';
import Section from '@/components/layout/Section';
import SectionHeader from '@/components/layout/SectionHeader';
import SeeAllLink from '@/components/layout/SeeAllLink';
import growthStats from '@/data/growthStats';
import { pages } from '@/data/navigation';

// the newest wide, then two more, like a blog index
const HOME_LIMIT = 3;

export default function CaseStudy() {
  return (
    <Section id="case-study">
      <SectionHeader
        id="case-study"
        index="04"
        eyebrow="Case studies"
        intro="Each case study is a write-up from my blog on what I did, the numbers it brought and what I would do again."
      >
        My growth <Accent>strategies</Accent>
      </SectionHeader>
      <Reveal className="mt-14">
        <StatsBar stats={growthStats} />
      </Reveal>
      <CaseStudyFeed limit={HOME_LIMIT} />
      <SeeAllLink href={pages.caseStudies} label="See all case studies" />
    </Section>
  );
}
