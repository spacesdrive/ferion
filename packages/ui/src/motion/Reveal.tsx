import { motion } from 'motion/react';
import type { ReactNode } from 'react';

export interface RevealProps {
  as?: 'div' | 'li';
  delay?: number;
  className?: string;
  children: ReactNode;
}

const COMPONENTS = { div: motion.div, li: motion.li };

// fades content up once it scrolls into view; each app's MotionConfig turns this off for reduced motion
export default function Reveal({ as = 'div', delay = 0, className, children }: RevealProps) {
  const Component = COMPONENTS[as];
  return (
    <Component
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -64px 0px' }}
      transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </Component>
  );
}
