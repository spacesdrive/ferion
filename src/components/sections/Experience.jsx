import { ExperienceItem } from '@/components/experience/ExperienceItem';
import { Section, SectionLabel } from '@/components/layout/Section';
import { Reveal } from '@/components/ui/Reveal';
import { experience } from '@/data/experience';

export function Experience() {
  return (
    <Section id="experience">
      <SectionLabel id="experience">Experience</SectionLabel>

      <div className="divide-y">
        {experience.map((item, index) => (
          <Reveal key={item.company} delay={0.05 * index} className="py-6 first:pt-0 last:pb-0">
            <ExperienceItem item={item} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
