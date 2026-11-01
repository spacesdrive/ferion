import type { ReactNode } from 'react';

export interface AccentProps {
  children: ReactNode;
}

// the softer second tone in a headline, so the words that matter most stand out
export default function Accent({ children }: AccentProps) {
  return <span className="text-muted">{children}</span>;
}
