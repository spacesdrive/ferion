import Accent from '@/components/layout/Accent';
import Section from '@/components/layout/Section';
import SectionHeader from '@/components/layout/SectionHeader';
import SeeAllLink from '@/components/layout/SeeAllLink';
import WorkBrowser from '@/components/work/WorkBrowser';
import { pages } from '@/data/navigation';
import videos from '@/data/videos';

// one row of 16:9 films: the two newest, then the pinned launches; the rest live on the work page
const HOME_PREVIEW = { aspect: '16:9', latestCount: 2, total: 4 } as const;

export default function Work() {
  return (
    <Section id="work">
      <SectionHeader
        id="work"
        index="01"
        eyebrow="Recent work"
        intro="My latest launch films, reels and explainers. Press a tool to see only what I made with it."
      >
        Videos, sorted by <Accent>the tool</Accent> that made them
      </SectionHeader>
      <WorkBrowser preview={HOME_PREVIEW} />
      <SeeAllLink href={pages.work} label={`See all ${videos.length} videos`} />
    </Section>
  );
}
