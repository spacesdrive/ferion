import cn from '@ferion/ui/lib/cn.ts';
import Reveal from '@ferion/ui/motion/Reveal.tsx';
import type { ReactNode } from 'react';

export interface SectionHeaderProps {
  id: string;
  eyebrow: string;
  intro?: ReactNode;
  isCentered?: boolean;
  className?: string;
  // the headline; wrap its accent words in <Accent>
  children: ReactNode;
}

export default function SectionHeader({
  id,
  eyebrow,
  intro,
  isCentered = true,
  className,
  children,
}: SectionHeaderProps) {
  return (
    <Reveal className={cn('flex flex-col gap-5', isCentered && 'items-center text-center', className)}>
      <span className="eyebrow">
        <span aria-hidden="true" className="size-1.5 rounded-full bg-pop-pink" />
        {eyebrow}
      </span>
      <h2
        id={`${id}-heading`}
        className="max-w-3xl text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl"
      >
        {children}
      </h2>
      {intro && <p className="max-w-xl text-base leading-relaxed text-pretty text-muted sm:text-lg">{intro}</p>}
    </Reveal>
  );
}
