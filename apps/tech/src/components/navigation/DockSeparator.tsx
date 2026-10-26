import cn from '@ferion/ui/lib/cn.ts';

export interface DockSeparatorProps {
  className?: string;
}

export default function DockSeparator({ className }: DockSeparatorProps) {
  return (
    <li aria-hidden="true" className={cn('flex self-stretch py-2', className)}>
      <span className="w-0.5 rounded-full bg-rule" />
    </li>
  );
}
