import Accent from '@/components/layout/Accent';
import Section from '@/components/layout/Section';
import SectionHeader from '@/components/layout/SectionHeader';
import SeeAllLink from '@/components/layout/SeeAllLink';
import WorkBrowser from '@/components/work/WorkBrowser';
import { pages } from '@/data/navigation';
import videos from '@/data/videos';

// one row of vertical clips and one of horizontal ones; the rest live on the work page
const HOME_LIMIT = { '9:16': 4, '16:9': 2 };

export default function Work() {
  return (
    <Section id="work">
      <SectionHeader
        id="work"
        eyebrow="Recent work"
        intro="My latest launch films, reels and explainers. Press a tool to see only what I made with it."
      >
        Videos, sorted by <Accent>the tool</Accent> that made them
      </SectionHeader>
      <WorkBrowser limit={HOME_LIMIT} />
      <SeeAllLink href={pages.work} label={`See all ${videos.length} videos`} />
    </Section>
  );
}
