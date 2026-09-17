import { Reveal } from '@/components/ui/Reveal';
import { cn } from '@/lib/utils';

export function Section({ id, className, children }) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={cn('scroll-mt-6 px-5 py-12 sm:px-8 sm:py-14', className)}
    >
      {children}
    </section>
  );
}

export function SectionLabel({ id, children }) {
  return (
    <Reveal>
      <h2
        id={`${id}-heading`}
        className="mb-6 font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase"
      >
        {children}
      </h2>
    </Reveal>
  );
}

export function FeatureHeading({ id, eyebrow, title, children }) {
  return (
    <Reveal className="mb-10 flex flex-col items-center text-center">
      <span className="rounded-full border bg-foreground px-3 py-1 font-mono text-[11px] tracking-widest text-background uppercase">
        {eyebrow}
      </span>
      <h2
        id={`${id}-heading`}
        className="mt-4 text-3xl font-semibold tracking-tighter text-balance sm:text-4xl"
      >
        {title}
      </h2>
      <p className="mt-3 max-w-md text-[15px] leading-relaxed text-balance text-muted-foreground sm:text-base">
        {children}
      </p>
    </Reveal>
  );
}

export function HatchBand({ className }) {
  return <div aria-hidden="true" className={cn('hatch h-8 border-y', className)} />;
}
