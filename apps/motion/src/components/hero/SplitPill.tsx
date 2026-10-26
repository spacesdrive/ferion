import { useId } from 'react';

export interface SplitPillProps {
  left: string;
  right: string;
}

// a two-color capsule with a wavy seam, like the ones in the designer-pop headline
export default function SplitPill({ left, right }: SplitPillProps) {
  const clipId = `split-pill-${useId().replace(/:/g, '')}`;

  return (
    <svg viewBox="0 0 170 62" aria-hidden="true" className="inline-block h-[0.62em] w-[1.7em] align-middle">
      <defs>
        <clipPath id={clipId}>
          <rect width="170" height="62" rx="31" />
        </clipPath>
      </defs>
      <g clipPath={`url(#${clipId})`}>
        <rect width="170" height="62" fill={left} />
        <path d="M92 0 C 80 10, 104 20, 92 31 S 80 52, 94 62 L 170 62 L 170 0 Z" fill={right} />
      </g>
    </svg>
  );
}
