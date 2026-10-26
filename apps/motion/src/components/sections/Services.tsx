import cn from '@ferion/ui/lib/cn.ts';
import Reveal from '@ferion/ui/motion/Reveal.tsx';
import Accent from '@/components/layout/Accent';
import Section from '@/components/layout/Section';
import SectionHeader from '@/components/layout/SectionHeader';
import { services } from '@/data/copy';

export default function Services() {
  return (
    <Section id="services">
      <SectionHeader id="services" eyebrow="What I offer">
        Ways we can <Accent>work together</Accent>
      </SectionHeader>

      <ul className="mt-14 grid gap-4 md:grid-cols-3">
        {services.map((service, index) => (
          <Reveal
            as="li"
            key={service.title}
            delay={0.05 * index}
            className={cn('flex flex-col gap-6 rounded-3xl p-7 text-night', service.tone)}
          >
            <span className="font-mono text-sm">{String(index + 1).padStart(2, '0')}</span>
            <div>
              <h3 className="text-2xl font-semibold tracking-tight">{service.title}</h3>
              <p className="mt-2 leading-relaxed text-night/75">{service.description}</p>
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
