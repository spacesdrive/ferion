import FolderTile from './FolderTile.tsx';
import type { FolderIcon, FolderPalette } from './types.ts';

const EASE = 'cubic-bezier(.2,.8,.2,1)';

// the hovered tile lifts and straightens; the others shrink back a little
function tileTransform(isHighlighted: boolean, isDimmed: boolean, rotation: number): string {
  if (isHighlighted) return `translateY(-26px) rotate(${-rotation}deg) scale(1.1)`;
  if (isDimmed) return 'scale(.96)';
  return 'none';
}

export interface FolderIconButtonProps {
  icon: FolderIcon;
  // position in the fan: 0 is the middle, negative is left
  offset: number;
  tilt: number;
  spread: number;
  palette: FolderPalette;
  isShown: boolean;
  isWide: boolean;
  isReduced: boolean;
  isHighlighted: boolean;
  isDimmed: boolean;
  isActive: boolean;
  delay: number;
  onHighlight: (id: string | null) => void;
  onSelect?: (id: string) => void;
}

export default function FolderIconButton({
  icon,
  offset,
  tilt,
  spread,
  palette,
  isShown,
  isWide,
  isReduced,
  isHighlighted,
  isDimmed,
  isActive,
  delay,
  onHighlight,
  onSelect,
}: FolderIconButtonProps) {
  const gap = isWide ? spread * 1.15 : spread;
  const lift = offset * offset * 9 - (isWide ? 4 : 0);
  const rotation = tilt * (isWide ? 1.2 : 1);
  const placed = `translate3d(${offset * gap}px, ${lift}px, 0) rotate(${rotation}deg)`;
  const hidden = `translate3d(${offset * spread * 0.6}px, 80px, 0)`;

  return (
    <div
      className="absolute top-[42px] left-1/2 -ml-[50.5px] h-[101px] w-[101px] rounded-[26px] [backface-visibility:hidden]"
      style={{
        zIndex: isHighlighted ? 5 : undefined,
        opacity: isShown || isReduced ? 1 : 0,
        transform: isShown || isReduced ? placed : hidden,
        transition: isReduced ? 'none' : `transform ${isWide ? 0.6 : 0.9}s ${EASE}, opacity .5s`,
        transitionDelay: isReduced ? '0s' : `${delay}s`,
      }}
    >
      <button
        type="button"
        aria-label={`Show work made with ${icon.label}`}
        aria-pressed={isActive}
        onClick={() => onSelect?.(icon.id)}
        onPointerEnter={event => event.pointerType === 'mouse' && onHighlight(icon.id)}
        onPointerLeave={() => onHighlight(null)}
        onFocus={() => onHighlight(icon.id)}
        onBlur={() => onHighlight(null)}
        className="relative block h-full w-full cursor-pointer rounded-[inherit] outline-none focus-visible:outline-2 focus-visible:outline-offset-4"
        style={{
          outlineColor: palette.focus,
          transform: tileTransform(isHighlighted, isDimmed, rotation),
          filter: isDimmed ? 'saturate(.75) brightness(.85)' : 'none',
          transition: isReduced ? 'none' : `transform .45s ${EASE}, filter .3s ease`,
        }}
      >
        <FolderTile icon={icon} ring={isActive ? palette.ink : palette.tileRing} shadow={palette.tileShadow} />
        <span
          className="pointer-events-none absolute bottom-full left-1/2 mb-2.5 rounded-full border px-2.5 py-1 text-xs leading-4 font-medium whitespace-nowrap backdrop-blur-[8px]"
          style={{
            background: palette.pillBg,
            borderColor: palette.pillBorder,
            color: palette.ink,
            opacity: isHighlighted ? 1 : 0,
            transform: `translateX(-50%) translateY(${isHighlighted ? 0 : 6}px)`,
            transition: isReduced ? 'none' : `opacity .25s ease, transform .35s ${EASE}`,
          }}
        >
          {icon.label}
        </span>
      </button>
    </div>
  );
}
