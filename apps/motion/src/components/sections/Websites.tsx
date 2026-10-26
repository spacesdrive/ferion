import cn from '@ferion/ui/lib/cn.ts';
import Reveal from '@ferion/ui/motion/Reveal.tsx';
import Accent from '@/components/layout/Accent';
import Section from '@/components/layout/Section';
import SectionHeader from '@/components/layout/SectionHeader';
import SiteCard from '@/components/websites/SiteCard';
import sites from '@/data/sites';

export default function Websites() {
  return (
    <Section id="websites">
      <SectionHeader id="websites" eyebrow="Web design" intro="Every site here is live. Open one and click around.">
        Websites I&apos;ve <Accent>designed and built</Accent>
      </SectionHeader>

      {/* the right column starts lower, so the grid reads as staggered like the designer-pop template */}
      <div className="mt-14 grid gap-x-10 gap-y-14 md:grid-cols-2">
        {sites.map((site, index) => (
          <Reveal key={site.url} delay={0.05 * (index % 2)} className={cn(index % 2 === 1 && 'md:translate-y-20')}>
            <SiteCard site={site} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
