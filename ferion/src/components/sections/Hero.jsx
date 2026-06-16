import TextShimmer from '@/components/forgeui/text-shimmer';
import { Cover } from '@/components/cover/Cover';

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[85vh] w-full flex-col items-center justify-center px-6 pt-24 pb-16 text-center lg:px-8"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center">
        <TextShimmer as="span" duration={3} className="mb-4 text-xs font-semibold tracking-[0.3em] uppercase">
          Building
        </TextShimmer>

        <h1 className="break-words text-4xl leading-tight font-black tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
          Innovative{' '}
          <Cover className="text-4xl leading-tight font-black tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            Solutions
          </Cover>
        </h1>

        <p className="mt-8 max-w-xl px-2 text-base leading-relaxed text-muted-foreground md:px-0 md:text-lg">
          A list of domains I've spent way too much time in. Not because someone told
          me to. Because I genuinely can't stop.
        </p>
      </div>
    </section>
  );
}
