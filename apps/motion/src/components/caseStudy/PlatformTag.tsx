import cn from '@ferion/ui/lib/cn.ts';

export interface PlatformTagProps {
  platform: string;
  className?: string;
}

// a small pill with a colored dot, like the category tags on a blog card
export default function PlatformTag({ platform, className }: PlatformTagProps) {
  return (
    <span
      className={cn('inline-flex items-center gap-2 rounded-full bg-mist px-3.5 py-1.5 text-sm text-ink', className)}
    >
      <span aria-hidden="true" className="size-2 rounded-full bg-sky" />
      {platform}
    </span>
  );
}
