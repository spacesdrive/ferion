import markInk from '@/assets/brand/mark-ink.webp';
import markPaper from '@/assets/brand/mark-paper.webp';
import { cn } from '@/lib/utils';

// The brand forbids the ink mark on an ink background, so dark mode swaps to the paper line.
export function Mark({ className }) {
  return (
    <>
      <img src={markInk} alt="" width="640" height="653" className={cn('dark:hidden', className)} />
      <img src={markPaper} alt="" width="640" height="653" className={cn('hidden dark:block', className)} />
    </>
  );
}
