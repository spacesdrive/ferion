import { useEffect, useRef, useState } from 'react';
import cn from '../lib/cn.ts';
import usePrefersReducedMotion from '../lib/usePrefersReducedMotion.ts';
import FolderBack from './FolderBack.tsx';
import FolderFront from './FolderFront.tsx';
import FolderIconButton from './FolderIconButton.tsx';
import FOLDER_PALETTES from './folderPalettes.ts';
import type { FolderIcon, FolderTheme } from './types.ts';

const EASE = 'cubic-bezier(.2,.8,.2,1)';
// total tilt across the fan, in degrees
const FAN_TILT = 25;

export interface IconFolderProps {
  title: string;
  icons: FolderIcon[];
  // chips on the pocket; defaults to the icon labels
  tags?: string[];
  theme?: FolderTheme;
  defaultOpen?: boolean;
  // horizontal distance between fanned icons, in px
  spread?: number;
  showPill?: boolean;
  isActive?: boolean;
  activeIconId?: string | null;
  onSelectFolder?: () => void;
  onSelectIcon?: (id: string) => void;
  className?: string;
}

// a glass folder with app icons fanned out of it; it pops in on scroll and spreads on hover, focus or press
export default function IconFolder({
  title,
  icons,
  tags = icons.map(icon => icon.label),
  theme = 'dark',
  defaultOpen = false,
  spread = 70,
  showPill = true,
  isActive = false,
  activeIconId = null,
  onSelectFolder,
  onSelectIcon,
  className,
}: IconFolderProps) {
  const palette = FOLDER_PALETTES[theme];
  const rootRef = useRef<HTMLDivElement>(null);
  const isReduced = usePrefersReducedMotion();
  const [isShown, setIsShown] = useState(false);
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [isHovered, setIsHovered] = useState(false);
  const [highlightedId, setHighlightedId] = useState<string | null>(null);

  useEffect(() => {
    const element = rootRef.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => entry?.isIntersecting && setIsShown(true), {
      threshold: 0.3,
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const isWide = isOpen || isHovered;
  const isVisible = isShown || isReduced;
  const middle = (icons.length - 1) / 2;
  const tiltStep = icons.length > 1 ? FAN_TILT / (icons.length - 1) : 0;
  const highlightedLabel = icons.find(icon => icon.id === highlightedId)?.label ?? null;

  const handlePress = () => {
    setIsOpen(open => !open);
    onSelectFolder?.();
  };

  return (
    <div
      ref={rootRef}
      onPointerEnter={event => event.pointerType === 'mouse' && setIsHovered(true)}
      onPointerLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={event => !event.currentTarget.contains(event.relatedTarget) && setIsHovered(false)}
      className={cn(
        'relative isolate h-[286px] w-full max-w-[420px] select-none [-webkit-tap-highlight-color:transparent]',
        'has-[button:focus-visible]:rounded-3xl has-[button:focus-visible]:outline-1 has-[button:focus-visible]:outline-offset-4',
        className,
      )}
      style={{
        color: palette.ink,
        letterSpacing: '-0.05em',
        outlineColor: palette.focus,
        zIndex: isWide ? 2 : undefined,
        opacity: isVisible ? 1 : 0,
        transform: folderTransform(isVisible, isWide),
        transition: isReduced ? 'none' : `transform .9s ${EASE}, opacity .6s ease`,
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-10 right-[8%] left-[8%] -z-10 h-[200px] rounded-full opacity-80 blur-[18px]"
        style={{ background: `radial-gradient(closest-side, ${palette.glow}, transparent)` }}
      />
      <FolderBack palette={palette} />

      {icons.map((icon, index) => (
        <FolderIconButton
          key={icon.id}
          icon={icon}
          offset={index - middle}
          tilt={(index - middle) * tiltStep}
          spread={spread}
          palette={palette}
          isShown={isShown}
          isWide={isWide}
          isReduced={isReduced}
          isHighlighted={highlightedId === icon.id}
          isDimmed={highlightedId !== null && highlightedId !== icon.id}
          isActive={activeIconId === icon.id}
          delay={isWide ? index * 0.04 : 0.35 + index * 0.08}
          onHighlight={setHighlightedId}
          onSelect={onSelectIcon}
        />
      ))}

      <FolderFront
        title={title}
        tags={tags}
        icons={icons}
        palette={palette}
        highlightedLabel={highlightedLabel}
        isLifted={isWide}
        isReduced={isReduced}
        isOpen={isOpen}
        isActive={isActive}
        showPill={showPill}
        onPress={handlePress}
      />
    </div>
  );
}

function folderTransform(isVisible: boolean, isWide: boolean): string {
  if (!isVisible) return 'translateY(34px) scale(.92)';
  if (isWide) return 'translateY(-6px) scale(1.02)';
  return 'none';
}
