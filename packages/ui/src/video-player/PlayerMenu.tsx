import { motion } from 'motion/react';
import type { ReactNode } from 'react';
import cn from '../lib/cn.ts';

export interface PlayerMenuProps {
  label: string;
  className?: string;
  children: ReactNode;
}

// the popover that opens above a control button
export default function PlayerMenu({ label, className, children }: PlayerMenuProps) {
  return (
    <motion.div
      role="menu"
      aria-label={label}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      className={cn(
        'absolute right-0 bottom-full z-50 mb-2 max-h-[60vh] min-w-40 overflow-y-auto rounded-lg border border-white/10 bg-black/95 p-3 backdrop-blur-sm',
        className,
      )}
    >
      {children}
    </motion.div>
  );
}
