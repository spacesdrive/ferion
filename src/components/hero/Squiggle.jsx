import { cn } from '@/lib/utils';

// A hand-drawn double underline in ink.
export function Squiggle({ className }) {
  return (
    <svg viewBox="0 0 120 16" fill="none" aria-hidden="true" className={cn('h-3 w-24', className)}>
      <path
        d="M3 9 C 22 3, 38 13, 58 7 S 96 3, 117 8"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M14 14 C 40 10, 76 12, 104 11"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
