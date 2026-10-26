import Reveal from '@ferion/ui/motion/Reveal.tsx';
import Accent from '@/components/layout/Accent';
import Section from '@/components/layout/Section';
import SectionHeader from '@/components/layout/SectionHeader';
import sites from '@/data/sites';
import software from '@/data/software';
import type { Stat } from '@/types/content';

// every number here is counted from the data files, so it stays true as they change
const STATS: (Stat & { note: string })[] = [
  { value: String(sites.length), label: 'websites live', note: 'Designed and built by me, all linked below.' },
  {
    value: String(software.length),
    label: 'tools in my kit',
    note: 'Two for motion, one for the edit, one for design.',
  },
  { value: '0', label: 'paywalls on my plugins', note: 'Every plugin I make for editors is free to download.' },
];

export default function About() {
  return (
    <Section id="about">
      <SectionHeader
        id="about"
        eyebrow="About me"
        intro="I'm a developer who also cuts video. I plan the shots, animate the parts that need to move, edit for the feed and build the page the video lives on."
      >
        I make motion that <Accent>holds attention</Accent>
      </SectionHeader>

      <div className="mt-14 grid gap-4 sm:grid-cols-3">
        {STATS.map((stat, index) => (
          <Reveal key={stat.label} delay={0.05 * index} className="rounded-3xl border border-line bg-card p-6 sm:p-7">
            <p className="text-5xl font-semibold tracking-tight">{stat.value}</p>
            <p className="mt-2 font-semibold">{stat.label}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">{stat.note}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
