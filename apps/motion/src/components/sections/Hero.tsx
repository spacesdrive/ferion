import Reveal from '@ferion/ui/motion/Reveal.tsx';
import { ArrowDown } from 'lucide-react';
import HeroHeadline from '@/components/hero/HeroHeadline';
import Container from '@/components/layout/Container';
import WorkMarquee from '@/components/marquee/WorkMarquee';

export default function Hero() {
  return (
    <section id="top" aria-labelledby="top-heading" className="scroll-mt-24 pt-16 sm:pt-24">
      <Container>
        <Reveal>
          <HeroHeadline />
        </Reveal>
        <Reveal delay={0.1} className="mx-auto mt-8 flex max-w-xl flex-col items-center gap-8 text-center">
          <p className="text-base leading-relaxed text-pretty text-muted sm:text-lg">
            I animate in After Effects and Cavalry, edit in DaVinci Resolve, and design the websites my videos live on.
            Every plugin I make for editors is free.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="#work" className="btn-ink">
              See my work
              <ArrowDown className="size-4" aria-hidden="true" />
            </a>
            <a href="#plugins" className="btn-ghost">
              Get the free plugins
            </a>
          </div>
        </Reveal>
      </Container>
      <WorkMarquee />
    </section>
  );
}
