import cn from '@ferion/ui/lib/cn.ts';
import { useMotionValue, useReducedMotion, type SpringOptions } from 'motion/react';
import { useMemo, type ReactNode } from 'react';
import { DockContext } from './dockContext';

const DEFAULT_SPRING: SpringOptions = { mass: 0.1, stiffness: 150, damping: 12 };

export interface DockProps {
  label: string;
  baseSize?: number;
  magnification?: number;
  distance?: number;
  spring?: SpringOptions;
  className?: string;
  children: ReactNode;
}

export default function Dock({
  label,
  baseSize = 40,
  magnification = 60,
  distance = 140,
  spring = DEFAULT_SPRING,
  className,
  children,
}: DockProps) {
  const mouseX = useMotionValue(Infinity);
  const reduceMotion = useReducedMotion();

  const settings = useMemo(
    () => ({ mouseX, spring, distance, baseSize, magnification: reduceMotion ? baseSize : magnification }),
    [mouseX, spring, distance, baseSize, magnification, reduceMotion],
  );

  return (
    <nav aria-label={label}>
      <ul
        // touch and pen never drive magnification, so a tap can't leave an icon stuck enlarged
        onPointerMove={event => {
          if (event.pointerType === 'mouse') mouseX.set(event.clientX);
        }}
        onPointerLeave={() => mouseX.set(Infinity)}
        style={{ height: baseSize }}
        className={cn('flex items-end', className)}
      >
        <DockContext.Provider value={settings}>{children}</DockContext.Provider>
      </ul>
    </nav>
  );
}
