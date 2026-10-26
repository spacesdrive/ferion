import { cn } from '@/lib/utils';

// A wonky pen-drawn box; the non-scaling stroke keeps the line even as it stretches.
export function RoughBox({ className }) {
  return (
    <svg
      viewBox="0 0 400 160"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
      className={cn('pointer-events-none absolute inset-0 size-full overflow-visible', className)}
    >
      <path
        d="M8 12 C 120 4, 280 9, 393 6 C 396 52, 391 104, 395 150 C 280 156, 130 151, 6 155 C 9 108, 4 60, 8 12 Z"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M14 8 C 140 12, 270 3, 388 11 C 392 60, 397 100, 389 146"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
