import { useId } from 'react';

export interface SplitCircleProps {
  left: string;
  right: string;
}

// a two-color circle with a wavy seam, set inline with the headline words
export default function SplitCircle({ left, right }: SplitCircleProps) {
  const clipId = `split-circle-${useId().replace(/:/g, '')}`;

  return (
    <svg viewBox="0 0 62 62" aria-hidden="true" className="inline-block size-[0.72em] align-middle">
      <defs>
        <clipPath id={clipId}>
          <circle cx="31" cy="31" r="31" />
        </clipPath>
      </defs>
      <g clipPath={`url(#${clipId})`}>
        <rect width="62" height="62" fill={left} />
        <path d="M33 0 C 25 9, 39 19, 31 31 S 23 52, 33 62 L 62 62 L 62 0 Z" fill={right} />
      </g>
    </svg>
  );
}
