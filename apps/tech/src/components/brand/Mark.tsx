import cn from '@ferion/ui/lib/cn.ts';
import markInk from '@/assets/brand/mark-ink.webp';
import markPaper from '@/assets/brand/mark-paper.webp';

export interface MarkProps {
  className?: string;
}

// the brand forbids the ink mark on an ink background, so dark mode swaps to the paper line
export default function Mark({ className }: MarkProps) {
  return (
    <>
      <img src={markInk} alt="" width="640" height="653" className={cn('dark:hidden', className)} />
      <img src={markPaper} alt="" width="640" height="653" className={cn('hidden dark:block', className)} />
    </>
  );
}
