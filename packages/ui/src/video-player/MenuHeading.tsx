import type { ReactNode } from 'react';

export interface MenuHeadingProps {
  children: ReactNode;
}

export default function MenuHeading({ children }: MenuHeadingProps) {
  return <p className="mb-2 text-xs font-semibold text-white uppercase opacity-70">{children}</p>;
}
