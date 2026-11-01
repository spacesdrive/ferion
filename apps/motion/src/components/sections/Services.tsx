import cn from '@ferion/ui/lib/cn.ts';
import Reveal from '@ferion/ui/motion/Reveal.tsx';
import Accent from '@/components/layout/Accent';
import Section from '@/components/layout/Section';
import SectionHeader from '@/components/layout/SectionHeader';
import { services } from '@/data/copy';

export default function Services() {
  return (
    <Section id="services">
      <SectionHeader id="services" index="05" eyebrow="What I offer">
        Ways we can <Accent>work together</Accent>
      </SectionHeader>

      <ul className="mt-12 grid gap-4 md:grid-cols-3">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <Reveal
              as="li"
              key={service.title}
              delay={0.05 * index}
              className={cn(
                'flex flex-col gap-8 rounded-[1.75rem] p-7',
                service.isFeatured ? 'bg-night text-snow dark:ring-1 dark:ring-snow/10' : 'border border-line bg-card',
              )}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs opacity-60">({String(index + 1).padStart(2, '0')})</span>
                <span
                  className={cn(
                    'grid size-11 place-items-center rounded-xl',
                    service.isFeatured ? 'bg-lime text-night' : 'bg-mist text-ink',
                  )}
                >
                  <Icon className="size-5" aria-hidden="true" />
                </span>
              </div>
              <div>
                <h3 className="text-2xl font-medium tracking-tight">{service.title}</h3>
                <p className="mt-2 leading-relaxed opacity-70">{service.description}</p>
              </div>
            </Reveal>
          );
        })}
      </ul>
    </Section>
  );
}
