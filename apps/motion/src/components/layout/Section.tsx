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
    <section id={id} aria-labelledby={`${id}-heading`} className="scroll-mt-24">
      <Container className={cn('py-[clamp(4rem,9vw,8rem)]', className)}>{children}</Container>
    </section>
  );
}
