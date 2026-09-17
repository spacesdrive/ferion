import { Reveal } from '@/components/ui/Reveal';
import { Section, SectionLabel } from '@/components/layout/Section';
import { about } from '@/data/profile';

export function About() {
  return (
    <Section id="about">
      <SectionLabel id="about">About</SectionLabel>

      <Reveal>
        <p className="text-[17px] leading-relaxed text-pretty text-foreground">{about.lead}</p>
      </Reveal>

      <div className="mt-5 space-y-4">
        {about.paragraphs.map((paragraph, index) => (
          <Reveal key={index} delay={0.03 * index}>
            <p className="text-[15px] leading-relaxed text-pretty text-muted-foreground">{paragraph}</p>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <blockquote className="mt-8 border-l-2 border-foreground pl-4 text-lg leading-snug font-medium tracking-tight text-balance">
          {about.closing}
        </blockquote>
      </Reveal>
    </Section>
  );
}
