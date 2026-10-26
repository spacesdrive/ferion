import cn from '@ferion/ui/lib/cn.ts';
import type { ReactNode } from 'react';

export interface ContainerProps {
  className?: string;
  children: ReactNode;
}

export default function Container({ className, children }: ContainerProps) {
  return <div className={cn('mx-auto w-full max-w-[1120px] px-5 sm:px-8 lg:px-10', className)}>{children}</div>;
}
