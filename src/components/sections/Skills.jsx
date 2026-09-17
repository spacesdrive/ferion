import { Reveal } from '@/components/ui/Reveal';
import { Section, SectionLabel } from '@/components/layout/Section';
import { skills } from '@/data/skills';

export function Skills() {
  return (
    <Section id="skills">
      <SectionLabel id="skills">Stack</SectionLabel>

      <dl className="divide-y border-y">
        {skills.map((row, index) => (
          <Reveal
            key={row.group}
            delay={0.03 * index}
            className="flex flex-col gap-2 py-3 sm:flex-row sm:items-baseline sm:gap-6"
          >
            <dt className="w-24 shrink-0 font-mono text-xs text-muted-foreground">{row.group}</dt>
            <dd className="flex flex-wrap gap-1.5">
              {row.items.map((item) => (
                <span
                  key={item}
                  className="rounded-md border bg-card px-2 py-0.5 text-[13px] leading-5 transition-colors hover:border-foreground/30"
                >
                  {item}
                </span>
              ))}
            </dd>
          </Reveal>
        ))}
      </dl>
    </Section>
  );
}
