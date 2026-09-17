import { cn } from '@/lib/utils';

export function Badge({ className, children }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md border bg-muted/60 px-1.5 py-0.5 font-mono text-[11px] leading-4 text-muted-foreground',
        className
      )}
    >
      {children}
    </span>
  );
}
