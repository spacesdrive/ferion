import Accent from '@/components/layout/Accent';
import Section from '@/components/layout/Section';
import SectionHeader from '@/components/layout/SectionHeader';
import SeeAllLink from '@/components/layout/SeeAllLink';
import SiteGrid from '@/components/websites/SiteGrid';
import { pages } from '@/data/navigation';
import sites from '@/data/sites';

const HOME_LIMIT = 6;

export default function Websites() {
  return (
    <Section id="websites">
      <SectionHeader
        id="websites"
        eyebrow="Web design"
        intro="My newest sites. Every one is live, so open one and click around."
      >
        Websites I&apos;ve <Accent>designed and built</Accent>
      </SectionHeader>
      <SiteGrid sites={sites.slice(0, HOME_LIMIT)} />
      {/* the staggered column hangs below the grid, so the link needs extra room on wide screens */}
      <div className="md:pt-20">
        <SeeAllLink href={pages.websites} label={`See all ${sites.length} websites`} />
      </div>
    </Section>
  );
}
