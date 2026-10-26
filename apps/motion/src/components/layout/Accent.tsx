import type { ReactNode } from 'react';

export interface AccentProps {
  children: ReactNode;
}

// the serif italic words the reference templates mix into every headline
export default function Accent({ children }: AccentProps) {
  return <span className="serif-accent text-pop-navy dark:text-pop-sky">{children}</span>;
}
