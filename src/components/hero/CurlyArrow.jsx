import { cn } from '@/lib/utils';

// A curved arrow pointing up-right; flip it with -scale-x-100 to point left.
export function CurlyArrow({ className }) {
  return (
    <svg viewBox="0 0 64 48" fill="none" aria-hidden="true" className={cn('h-10 w-14', className)}>
      <path
        d="M4 44 C 10 26, 26 14, 52 8"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M40 3 L 54 8 L 45 19"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
