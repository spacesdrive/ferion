import Reveal from '@ferion/ui/motion/Reveal.tsx';
import portrait from '@/assets/brand/portrait.webp';
import Accent from '@/components/layout/Accent';
import Section from '@/components/layout/Section';
import SectionHeader from '@/components/layout/SectionHeader';
import { processSteps } from '@/data/copy';

export default function Process() {
  return (
    <Section id="process">
      <SectionHeader
        id="process"
        eyebrow="How I work"
        intro="The same three steps, whether it's a ten-second loop or a full YouTube edit."
      >
        From rough idea to <Accent>final export</Accent>
      </SectionHeader>

      <div className="mt-14 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal className="overflow-hidden rounded-[2rem] bg-ink">
          <img
            src={portrait}
            alt="Ujjwal Kumar Rai"
            width="900"
            height="717"
            loading="lazy"
            className="aspect-[4/5] w-full object-cover object-[47%_30%] grayscale"
          />
        </Reveal>

        <ol className="flex flex-col gap-8">
          {processSteps.map((step, index) => (
            <Reveal as="li" key={step.title} delay={0.05 * index} className="flex gap-5">
              <span className="grid size-11 shrink-0 place-items-center rounded-full border border-line bg-card font-mono text-sm">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="text-xl font-semibold tracking-tight">{step.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}
