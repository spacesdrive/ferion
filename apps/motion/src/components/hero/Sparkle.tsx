import cn from '@ferion/ui/lib/cn.ts';

export interface SparkleProps {
  className?: string;
}

// a four-point star that slowly turns, as a small accent around the portrait
export default function Sparkle({ className }: SparkleProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={cn('animate-twinkle fill-current', className)}>
      <path d="M12 0c.6 6.3 5.7 11.4 12 12-6.3.6-11.4 5.7-12 12-.6-6.3-5.7-11.4-12-12C6.3 11.4 11.4 6.3 12 0Z" />
    </svg>
  );
}
