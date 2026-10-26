import Reveal from '@ferion/ui/motion/Reveal.tsx';
import ExperienceItem from '@/components/experience/ExperienceItem';
import Section from '@/components/layout/Section';
import SectionHeading from '@/components/layout/SectionHeading';
import experience from '@/data/experience';

export default function Experience() {
  return (
    <Section id="experience">
      <SectionHeading id="experience" index="01" label="Experience">
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
