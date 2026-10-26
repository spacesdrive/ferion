import cn from '@ferion/ui/lib/cn.ts';

const PETALS = [0, 72, 144, 216, 288];
const DISTANCE = 24;

export interface FlowerMarkProps {
  className?: string;
}

// a five-petal outline flower: colored petals with a smaller paper flower punched out of the middle
export default function FlowerMark({ className }: FlowerMarkProps) {
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
      <g fill="currentColor">
        {centers.map(({ x, y }) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r={23} />
        ))}
      </g>
      <g className="fill-paper">
        {centers.map(({ x, y }) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r={13} />
        ))}
        <circle cx={50} cy={50} r={22} />
      </g>
    </svg>
  );
}
