import { Section, SectionHeading } from '@/components/layout/Section';
import { Reveal } from '@/components/ui/Reveal';
import { about } from '@/data/profile';

export function About() {
  return (
    <Section id="about">
      <div className="grid gap-x-16 gap-y-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
        <div className="lg:sticky lg:top-10 lg:self-start">
          <SectionHeading id="about" index="01" label="About">
            I&apos;ve never been <span className="marker">bored</span>.
          </SectionHeading>
          <Reveal>
            <p className="text-xl leading-relaxed text-pretty sm:text-[1.375rem]">{about.lead}</p>
          </Reveal>
        </div>

        <div className="flex flex-col gap-5 lg:pt-28">
          {about.paragraphs.map((paragraph, index) => (
            <Reveal key={index} delay={0.03 * index}>
              <p className="text-[17px] leading-[1.7] text-pretty text-body">{paragraph}</p>
            </Reveal>
          ))}
          <Reveal>
            <blockquote className="mt-4 border-l-[3px] border-line pl-5 text-2xl leading-tight font-extrabold tracking-[-0.03em] text-balance">
              {about.closing}
            </blockquote>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
