import { RoleVenn } from '@/components/hero/RoleVenn';
import { Container } from '@/components/layout/Section';
import { Reveal } from '@/components/ui/Reveal';
import { profile } from '@/data/profile';

// The hero shows only the roles diagram; the name is there for screen readers and search engines.
export function Hero() {
  return (
    <section id="hero" aria-labelledby="hero-heading" className="scroll-mt-4">
      <Container className="pt-8 pb-[clamp(3.5rem,8vw,7rem)] sm:pt-12">
        <h1 id="hero-heading" className="sr-only">
          {profile.name}
        </h1>
        <Reveal>
          <RoleVenn />
        </Reveal>
      </Container>
    </section>
  );
}
