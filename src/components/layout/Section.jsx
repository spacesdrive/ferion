import { Reveal } from '@/components/ui/Reveal';
import { cn } from '@/lib/utils';

export function Container({ className, children }) {
  return <div className={cn('mx-auto w-full max-w-[1120px] px-5 sm:px-8 lg:px-10', className)}>{children}</div>;
}

export function Section({ id, className, children }) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="scroll-mt-4 border-t-2 border-line">
      <Container className={cn('py-[clamp(3.5rem,8vw,7rem)]', className)}>{children}</Container>
    </section>
  );
}

// Headlines carry exactly one marker word, passed in as children.
export function SectionHeading({ id, index, label, intro, children }) {
  return (
    <Reveal className="mb-10 flex flex-col gap-4 sm:mb-14">
      <span className="label">
        {index} / {label}
      </span>
      <h2
        id={`${id}-heading`}
        className="max-w-[20ch] text-[2.5rem] leading-[0.95] font-extrabold tracking-[-0.045em] text-balance sm:text-5xl lg:text-[4rem]"
      >
        {children}
      </h2>
      {intro && <p className="max-w-[60ch] text-lg leading-relaxed text-pretty text-body">{intro}</p>}
    </Reveal>
  );
}
