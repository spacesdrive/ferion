import cn from '@ferion/ui/lib/cn.ts';
import { useId } from 'react';

const PETALS = [0, 72, 144, 216, 288];
const DISTANCE = 24;

export interface FlowerMarkProps {
  className?: string;
}

// a five-petal outline flower; the middle is cut out with a mask, so whatever sits behind it shows through
export default function FlowerMark({ className }: FlowerMarkProps) {
  const maskId = `flower-${useId().replace(/:/g, '')}`;
  const centers = PETALS.map(angle => {
    const radians = ((angle - 90) * Math.PI) / 180;
    return { x: 50 + DISTANCE * Math.cos(radians), y: 50 + DISTANCE * Math.sin(radians) };
  });

  return (
    <svg
      viewBox="0 0 100 100"
      aria-hidden="true"
      className={cn(
        'inline-block h-[1.3em] w-[1.3em] align-middle transition-transform duration-500 ease-out hover:rotate-[200deg] motion-reduce:transition-none',
        className,
      )}
    >
      <defs>
        <mask id={maskId}>
          <rect width="100" height="100" fill="white" />
          {centers.map(({ x, y }) => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r={13} fill="black" />
          ))}
          <circle cx={50} cy={50} r={22} fill="black" />
        </mask>
      </defs>
      <g fill="currentColor" mask={`url(#${maskId})`}>
        {centers.map(({ x, y }) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r={23} />
        ))}
      </g>
    </svg>
  );
}
