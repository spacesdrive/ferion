import type { ReactNode } from 'react';
import Reveal from '@ferion/ui/motion/Reveal.tsx';

export interface SectionHeadingProps {
  id: string;
  index: string;
  label: string;
  intro?: string;
  // the headline, with exactly one word wrapped in a .marker span
  children: ReactNode;
}

export default function SectionHeading({ id, index, label, intro, children }: SectionHeadingProps) {
  return (
    <Reveal className="mb-10 flex flex-col gap-4 sm:mb-14">
      <span className="label">
        {index} / {label}
      </span>
      <h2
        id={`${id}-heading`}
        className="max-w-[20ch] text-[2.5rem] leading-[0.95] font-extrabold tracking-[-0.045em] text-balance sm:text-5xl lg:text-[4rem]"
      >
        {children}
      </h2>
      {intro && <p className="max-w-[60ch] text-lg leading-relaxed text-pretty text-body">{intro}</p>}
    </Reveal>
  );
}
