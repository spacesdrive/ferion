import cn from '@ferion/ui/lib/cn.ts';

export interface SampleBadgeProps {
  className?: string;
}

// marks placeholder content until the real videos, plugins and numbers are added
export default function SampleBadge({ className }: SampleBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-night/15 bg-pop-lime px-2 py-0.5 font-mono text-[10px] font-semibold tracking-[0.12em] text-night uppercase',
        className,
      )}
    >
      Sample
    </span>
  );
}
