import cn from '@ferion/ui/lib/cn.ts';
import { AnimatePresence, motion, useSpring, useTransform } from 'motion/react';
import { useRef, useState, type FocusEvent, type ReactNode, type Ref } from 'react';
import { useDock } from './dockContext';

export interface DockItemProps {
  label: string;
  href?: string;
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
  children: ReactNode;
}

export default function DockItem({ label, href, isActive = false, onClick, className, children }: DockItemProps) {
  const ref = useRef<HTMLElement>(null);
  const { mouseX, spring, distance, baseSize, magnification } = useDock();
  const [isLabelShown, setIsLabelShown] = useState(false);

  const mouseDistance = useTransform(mouseX, x => {
    const rect = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return x - rect.x - rect.width / 2;
  });
  const sizeTarget = useTransform(mouseDistance, [-distance, 0, distance], [baseSize, magnification, baseSize]);
  const size = useSpring(sizeTarget, spring);
  const iconSize = useTransform(size, value => value * 0.45);

  const isExternal = href?.startsWith('http') ?? false;
  const sharedProps = {
    onClick,
    'aria-label': label,
    'aria-current': isActive ? ('true' as const) : undefined,
    style: { width: size, height: size },
    onHoverStart: () => setIsLabelShown(true),
    onHoverEnd: () => setIsLabelShown(false),
    onFocus: (event: FocusEvent<HTMLElement>) => setIsLabelShown(event.currentTarget.matches(':focus-visible')),
    onBlur: () => setIsLabelShown(false),
    className: cn(
      'relative grid shrink-0 place-items-center rounded-full border-2 transition-colors',
      isActive
        ? 'border-line bg-foreground text-background'
        : 'border-transparent text-foreground hover:border-line hover:bg-background',
    ),
  };

  const content = (
    <>
      <motion.span style={{ width: iconSize, height: iconSize }} className="grid place-items-center [&>svg]:size-full">
        {children}
      </motion.span>
      <AnimatePresence>
        {isLabelShown && (
          <motion.span
            role="tooltip"
            initial={{ opacity: 0, y: 2, x: '-50%' }}
            animate={{ opacity: 1, y: -6, x: '-50%' }}
            exit={{ opacity: 0, y: 2, x: '-50%' }}
            transition={{ duration: 0.15 }}
            className="pointer-events-none absolute -top-9 left-1/2 rounded-md bg-foreground px-2 py-1 font-mono text-[11px] tracking-[0.06em] whitespace-nowrap text-background uppercase"
          >
            {label}
          </motion.span>
        )}
      </AnimatePresence>
    </>
  );

  return (
    <li className={cn('flex items-end', className)}>
      {href ? (
        <motion.a
          ref={ref as Ref<HTMLAnchorElement>}
          href={href}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          {...sharedProps}
        >
          {content}
        </motion.a>
      ) : (
        <motion.button ref={ref as Ref<HTMLButtonElement>} type="button" {...sharedProps}>
          {content}
        </motion.button>
      )}
    </li>
  );
}
