import cn from '@ferion/ui/lib/cn.ts';
import type { LucideIcon } from 'lucide-react';

export interface ButtonIconProps {
  icon: LucideIcon;
  className?: string;
}

// the small dark square at the end of a pill button, as in the reference designs
export default function ButtonIcon({ icon: Icon, className }: ButtonIconProps) {
  return (
    <span
      aria-hidden="true"
      className={cn('btn-icon grid size-7 shrink-0 place-items-center rounded-lg bg-night text-lime', className)}
    >
      <Icon className="size-3.5" strokeWidth={2.5} />
    </span>
  );
}
