import { useId, useRef } from 'react';
import FolderPill from './FolderPill.tsx';
import { frontPocketPath, useFolderShape } from './folderShape.ts';
import type { FolderIcon, FolderPalette } from './types.ts';

const EASE = 'cubic-bezier(.2,.8,.2,1)';

export interface FolderFrontProps {
  title: string;
  tags: string[];
  icons: FolderIcon[];
  palette: FolderPalette;
  highlightedLabel: string | null;
  isLifted: boolean;
  isReduced: boolean;
  isOpen: boolean;
  isActive: boolean;
  showPill: boolean;
  onPress: () => void;
}

// the glass pocket is the folder's main button: it opens the fan and selects the whole folder
export default function FolderFront({
  title,
  tags,
  icons,
  palette,
  highlightedLabel,
  isLifted,
  isReduced,
  isOpen,
  isActive,
  showPill,
  onPress,
}: FolderFrontProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const path = useFolderShape(ref, frontPocketPath);
  const gradientId = `folder-edge-${useId().replace(/:/g, '')}`;

  return (
    <button
      ref={ref}
      type="button"
      aria-expanded={isOpen}
      aria-pressed={isActive}
      aria-label={`${title}: ${tags.join(', ')}`}
      onClick={onPress}
      className="absolute inset-x-0 bottom-0 h-[180px] cursor-pointer overflow-hidden text-left outline-none backdrop-blur-[18px] backdrop-saturate-150"
      style={{
        background: palette.front,
        clipPath: path ? `path('${path}')` : undefined,
        transform: isLifted ? 'translateY(6px)' : 'none',
        transition: isReduced ? 'none' : `transform .6s ${EASE}`,
      }}
    >
      <svg aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full overflow-visible">
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor={palette.frontEdge[0]} />
            <stop offset=".35" stopColor={palette.frontEdge[1]} />
            <stop offset="1" stopColor={palette.frontEdge[2]} />
          </linearGradient>
        </defs>
        <path d={path} fill="none" stroke={`url(#${gradientId})`} strokeWidth={isActive ? 3 : 2} />
      </svg>

      <span className="block px-[18px] pt-[34px] text-xl leading-[26px] font-medium">{title}</span>
      <span className="mx-[18px] mt-3.5 flex flex-wrap gap-1.5">
        {tags.map(tag => (
          <span
            key={tag}
            className="h-6 rounded-full border px-2.5 py-0.5 text-xs leading-5 whitespace-nowrap backdrop-blur-[7px]"
            style={{
              background: palette.chipBg,
              borderColor: highlightedLabel === tag ? palette.focus : palette.chipBorder,
              color: highlightedLabel === tag ? palette.ink : palette.chipInk,
              transition: 'border-color .25s ease, color .25s ease',
            }}
          >
            {tag}
          </span>
        ))}
      </span>

      {showPill && <FolderPill icons={icons} palette={palette} />}
    </button>
  );
}
