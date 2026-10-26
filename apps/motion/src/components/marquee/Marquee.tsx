import cn from '@ferion/ui/lib/cn.ts';
import type { CSSProperties, ReactNode } from 'react';

export interface MarqueeProps {
  // seconds for one full loop
  duration?: number;
  className?: string;
  children: ReactNode;
}

// renders the row twice and slides it by half its width, so the loop never shows a seam
export default function Marquee({ duration = 40, className, children }: MarqueeProps) {
  return (
    <div className={cn('edge-fade overflow-hidden', className)}>
      <div
        className="flex w-max animate-marquee hover:[animation-play-state:paused]"
        style={{ '--marquee-duration': `${duration}s` } as CSSProperties}
      >
        <div className="flex shrink-0 gap-5 pr-5">{children}</div>
        <div aria-hidden="true" inert className="flex shrink-0 gap-5 pr-5">
          {children}
        </div>
      </div>
    </div>
  );
}
