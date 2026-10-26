import cn from '@ferion/ui/lib/cn.ts';
import type { Software } from '@/types/content';

export interface SoftwareTileProps {
  software: Software;
  className?: string;
}

// a small app-icon tile for a tool, used on cards, chips and the logo strip
export default function SoftwareTile({ software, className }: SoftwareTileProps) {
  const { icon } = software;

  if (icon.kind === 'app') {
    return <img src={icon.src} alt="" className={cn('size-6 rounded-[28%] object-cover', className)} />;
  }

  return (
    <span
      aria-hidden="true"
      className={cn('grid size-6 place-items-center overflow-hidden rounded-[28%]', className)}
      style={{ background: icon.background }}
    >
      <img src={icon.src} alt="" className="size-[60%]" />
    </span>
  );
}
