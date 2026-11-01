import Reveal from '@ferion/ui/motion/Reveal.tsx';
import HeroHeadline from '@/components/hero/HeroHeadline';
import HeroVideo from '@/components/hero/HeroVideo';
import Container from '@/components/layout/Container';

// a full-screen video with the headline over it, rounded off at the bottom where the page begins
export default function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="top-heading"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden rounded-b-[2.5rem] bg-night text-snow"
    >
      <HeroVideo />
      <Container className="max-w-7xl pt-28 pb-24">
        <Reveal>
          <HeroHeadline />
        </Reveal>
      </Container>
    </section>
  );
}
