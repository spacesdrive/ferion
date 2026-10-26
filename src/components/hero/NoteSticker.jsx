import { cn } from '@/lib/utils';

// A paper note held on with tape, written in the brand's handwriting.
export function NoteSticker({ children, tilt = 0, className }) {
  return (
    <span
      style={{ rotate: `${tilt}deg` }}
      className={cn(
        'relative inline-block border-2 border-line bg-card px-5 pt-3 pb-2.5 font-note text-2xl leading-none whitespace-nowrap text-foreground shadow-[3px_3px_0_var(--line)]',
        className
      )}
    >
      <span
        aria-hidden="true"
        className="absolute -top-2.5 left-1/2 h-5 w-14 -translate-x-1/2 -rotate-3 bg-[rgb(200_199_194/0.85)]"
      />
      {children}
    </span>
  );
}
