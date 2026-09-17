import { createContext, useContext, useMemo, useRef, useState } from 'react';
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from 'motion/react';
import { cn } from '@/lib/utils';

const DockContext = createContext(null);
const DEFAULT_SPRING = { mass: 0.1, stiffness: 150, damping: 12 };

function useDock() {
  const context = useContext(DockContext);
  if (!context) throw new Error('Dock items must be rendered inside <Dock>');
  return context;
}

export function Dock({
  label,
  baseSize = 40,
  magnification = 60,
  distance = 140,
  spring = DEFAULT_SPRING,
  className,
  children,
}) {
  const mouseX = useMotionValue(Infinity);
  const reduceMotion = useReducedMotion();

  const value = useMemo(
    () => ({
      mouseX,
      spring,
      distance,
      baseSize,
      magnification: reduceMotion ? baseSize : magnification,
    }),
    [mouseX, spring, distance, baseSize, magnification, reduceMotion]
  );

  return (
    <nav aria-label={label}>
      <ul
        // Touch and pen input never drive magnification, so a tap can't leave an icon stuck enlarged.
        onPointerMove={(event) => {
          if (event.pointerType === 'mouse') mouseX.set(event.clientX);
        }}
        onPointerLeave={() => mouseX.set(Infinity)}
        style={{ height: baseSize }}
        className={cn('flex items-end', className)}
      >
        <DockContext.Provider value={value}>{children}</DockContext.Provider>
      </ul>
    </nav>
  );
}

export function DockItem({ label, href, onClick, active = false, className, children }) {
  const ref = useRef(null);
  const { mouseX, spring, distance, baseSize, magnification } = useDock();
  const [labelVisible, setLabelVisible] = useState(false);

  const mouseDistance = useTransform(mouseX, (x) => {
    const rect = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return x - rect.x - rect.width / 2;
  });
  const sizeTarget = useTransform(mouseDistance, [-distance, 0, distance], [baseSize, magnification, baseSize]);
  const size = useSpring(sizeTarget, spring);
  const iconSize = useTransform(size, (value) => value * 0.45);

  const Component = href ? motion.a : motion.button;
  const linkProps = href
    ? { href, ...(href.startsWith('http') && { target: '_blank', rel: 'noopener noreferrer' }) }
    : { type: 'button' };

  return (
    <li className={cn('flex items-end', className)}>
      <Component
        ref={ref}
        {...linkProps}
        onClick={onClick}
        aria-label={label}
        aria-current={active ? 'true' : undefined}
        style={{ width: size, height: size }}
        onHoverStart={() => setLabelVisible(true)}
        onHoverEnd={() => setLabelVisible(false)}
        onFocus={(event) => setLabelVisible(event.currentTarget.matches(':focus-visible'))}
        onBlur={() => setLabelVisible(false)}
        className={cn(
          'relative grid shrink-0 place-items-center rounded-full border bg-background text-muted-foreground transition-colors hover:bg-muted hover:text-foreground',
          active && 'text-foreground'
        )}
      >
        <motion.span style={{ width: iconSize, height: iconSize }} className="grid place-items-center [&>svg]:size-full">
          {children}
        </motion.span>

        {active && (
          <span aria-hidden="true" className="absolute -bottom-[7px] left-1/2 size-1 -translate-x-1/2 rounded-full bg-foreground" />
        )}

        <AnimatePresence>
          {labelVisible && (
            <motion.span
              role="tooltip"
              initial={{ opacity: 0, y: 2, x: '-50%' }}
              animate={{ opacity: 1, y: -6, x: '-50%' }}
              exit={{ opacity: 0, y: 2, x: '-50%' }}
              transition={{ duration: 0.15 }}
              className="pointer-events-none absolute -top-8 left-1/2 rounded-md border bg-card px-2 py-0.5 text-xs whitespace-nowrap text-foreground shadow-sm"
            >
              {label}
            </motion.span>
          )}
        </AnimatePresence>
      </Component>
    </li>
  );
}

export function DockSeparator({ className }) {
  return (
    <li aria-hidden="true" className={cn('flex self-stretch py-2', className)}>
      <span className="w-px bg-border" />
    </li>
  );
}
