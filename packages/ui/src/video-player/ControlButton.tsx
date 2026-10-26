import { motion } from 'motion/react';
import { useState, type ReactNode } from 'react';
import cn from '../lib/cn.ts';

export interface ControlButtonProps {
  label: string;
  // shown in the tooltip, e.g. "Mute (M)"; defaults to the label
  hint?: string;
  isActive?: boolean;
  isExpanded?: boolean;
  className?: string;
  onClick: () => void;
  onPointerEnter?: () => void;
  onPointerLeave?: () => void;
  children: ReactNode;
}

export default function ControlButton({
  label,
  hint = label,
  isActive = false,
  isExpanded,
  className,
  onClick,
  onPointerEnter,
  onPointerLeave,
  children,
}: ControlButtonProps) {
  const [isTooltipShown, setIsTooltipShown] = useState(false);

  return (
    <motion.button
      type="button"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label={label}
      aria-pressed={isActive || undefined}
      aria-expanded={isExpanded}
      onClick={onClick}
      onPointerEnter={() => {
        setIsTooltipShown(true);
        onPointerEnter?.();
      }}
      onPointerLeave={() => {
        setIsTooltipShown(false);
        onPointerLeave?.();
      }}
      onFocus={() => setIsTooltipShown(true)}
      onBlur={() => setIsTooltipShown(false)}
      className={cn(
        'relative flex items-center justify-center rounded-lg p-2 text-white transition-colors focus-visible:outline-2 focus-visible:outline-white',
        isActive ? 'bg-cyan-500/30 hover:bg-cyan-500/40' : 'hover:bg-white/20',
        className,
      )}
    >
      {children}
      <motion.span
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: isTooltipShown ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className="pointer-events-none absolute bottom-full left-1/2 z-50 mb-2 -translate-x-1/2 rounded bg-black/90 px-2 py-1 text-xs whitespace-nowrap text-white"
      >
        {hint}
      </motion.span>
    </motion.button>
  );
}
