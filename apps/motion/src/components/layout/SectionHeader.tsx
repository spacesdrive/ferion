import Reveal from '@ferion/ui/motion/Reveal.tsx';
import type { ReactNode } from 'react';

export interface SectionHeaderProps {
  id: string;
  eyebrow: string;
  intro?: ReactNode;
  // the section's place on the home page, shown as (01); pages of their own leave it out
  index?: string;
  // h1 on a page of its own, h2 inside the home page
  level?: 'h1' | 'h2';
  className?: string;
  // the headline; wrap the words to soften in <Accent>
  children: ReactNode;
}

// a /label and number over a rule, then a big left-aligned headline with the intro beside it
export default function SectionHeader({
  id,
  eyebrow,
  intro,
  index,
  level = 'h2',
  className,
  children,
}: SectionHeaderProps) {
  const Heading = level;

  return (
    <Reveal className={className}>
      <div className="flex items-center justify-between border-b border-line pb-4">
        <span className="eyebrow">/{eyebrow}</span>
        {index && <span className="font-mono text-xs text-muted">({index})</span>}
      </div>
      <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:items-end">
        <Heading
          id={`${id}-heading`}
          className="max-w-3xl text-4xl leading-[1.02] font-medium tracking-[-0.03em] text-balance sm:text-5xl lg:text-[3.5rem]"
        >
          {children}
        </Heading>
        {intro && <p className="max-w-md leading-relaxed text-pretty text-muted lg:justify-self-end">{intro}</p>}
      </div>
    </Reveal>
  );
}
