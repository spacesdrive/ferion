import { ExperienceItem } from '@/components/experience/ExperienceItem';
import { Section, SectionHeading } from '@/components/layout/Section';
import { Reveal } from '@/components/ui/Reveal';
import { experience } from '@/data/experience';

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading id="experience" index="02" label="Experience">
        Where I put in the <span className="marker">hours</span>.
      </SectionHeading>

      <div className="flex flex-col gap-7">
        {experience.map((item, index) => (
          <Reveal key={item.company} delay={0.05 * index}>
            <ExperienceItem item={item} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
