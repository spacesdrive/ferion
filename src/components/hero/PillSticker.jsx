import { cn } from '@/lib/utils';

// A tilted ink pill stuck on the page. It is decoration, so it never looks pressable.
export function PillSticker({ children, tilt = 0, className }) {
  return (
    <span
      style={{ rotate: `${tilt}deg` }}
      className={cn('ink-pill px-4 py-2 font-mono text-xs tracking-[0.1em] uppercase sm:text-[13px]', className)}
    >
      {children}
    </span>
  );
}
