import Reveal from '@ferion/ui/motion/Reveal.tsx';
import HeroHeadline from '@/components/hero/HeroHeadline';
import Container from '@/components/layout/Container';

export default function Hero() {
  return (
    <section id="top" aria-labelledby="top-heading" className="scroll-mt-24 pt-16 sm:pt-24">
      <Container>
        <Reveal>
          <HeroHeadline />
        </Reveal>
      </Container>
    </section>
  );
}
