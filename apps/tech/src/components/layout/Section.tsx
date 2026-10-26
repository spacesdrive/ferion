import cn from '@ferion/ui/lib/cn.ts';
import type { ReactNode } from 'react';
import Container from './Container';

export interface SectionProps {
  id: string;
  className?: string;
  children: ReactNode;
}

export default function Section({ id, className, children }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="scroll-mt-4 border-t-2 border-line">
      <Container className={cn('py-[clamp(3.5rem,8vw,7rem)]', className)}>{children}</Container>
    </section>
  );
}
