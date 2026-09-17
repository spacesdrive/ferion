import { motion } from 'motion/react';

export function Reveal({ as = 'div', delay = 0, className, children, ...props }) {
  const Component = motion[as];
  return (
    <Component
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -64px 0px' }}
      transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
}
