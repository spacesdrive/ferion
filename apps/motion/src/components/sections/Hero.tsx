import Reveal from '@ferion/ui/motion/Reveal.tsx';
import AvailabilityPill from '@/components/hero/AvailabilityPill';
import BrandStrip from '@/components/hero/BrandStrip';
import HeroHeadline from '@/components/hero/HeroHeadline';
import HeroPortrait from '@/components/hero/HeroPortrait';
import Sparkle from '@/components/hero/Sparkle';
import ToolBadges from '@/components/hero/ToolBadges';
import Container from '@/components/layout/Container';

// a lime glow fading into the page, the name over a cut-out portrait, and small notes in the four corners
export default function Hero() {
  return (
    <section id="top" aria-labelledby="top-heading" className="relative isolate overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,var(--color-glow)_0%,color-mix(in_oklab,var(--color-glow)_45%,var(--color-paper))_45%,var(--color-paper)_92%)]"
      />

      <Container className="relative max-w-7xl pt-28 sm:pt-32">
        {/* the headline sits above the photo so the serif line can cross the top of it */}
        <Reveal className="relative z-10">
          <HeroHeadline />
        </Reveal>

        <div className="relative -mt-6 sm:-mt-12 lg:-mt-20">
          <HeroPortrait />
          <Sparkle className="absolute top-[12%] left-[16%] size-7 text-ink sm:size-9" />
          <Sparkle className="absolute top-[6%] right-[30%] size-5 text-snow [animation-delay:-3s] sm:size-7" />

          {/* on phones the notes stack under the photo; from laptop width up they sit in its corners */}
          <div className="relative z-10 -mt-16 flex flex-col items-center gap-6 pb-4 text-center lg:static lg:mt-0 lg:block lg:pb-0">
            <div className="lg:absolute lg:top-[34%] lg:left-0">
              <AvailabilityPill />
            </div>
            <p className="max-w-xs text-lg leading-snug text-ink lg:absolute lg:top-[32%] lg:right-0 lg:text-left">
              I animate, edit and build websites, and I work efficiently to meet deadlines.
            </p>
            <div className="lg:absolute lg:bottom-[14%] lg:left-0">
              <ToolBadges />
            </div>
            <a href="#contact" className="btn-ink px-7 py-3.5 lg:absolute lg:right-0 lg:bottom-[14%]">
              Get in touch
            </a>
          </div>
        </div>
      </Container>

      <BrandStrip />
    </section>
  );
}
